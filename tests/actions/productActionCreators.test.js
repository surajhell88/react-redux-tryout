import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/productActionCreators.js';
import nock from 'nock';
import expect from 'expect'; // You can use any testing library

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Product Action Creators', () => {
    describe('incrementProductQuantity',()=> {
        it('should create an action to increase product quantity', () => {
            const id = 1;
            const expected = {
                type: 'INC_PRODUCT_QUANTITY',
                id
            };
            const actual = actions.incrementProductQuantity(id);
            expect(actual).toEqual(expected);
        });
    });
    describe('decrementProductQuantity',()=> {
        it('should create an action to decrease product quantity', () => {
            const id = 1;
            const expected = {
                type: 'DEC_PRODUCT_QUANTITY',
                id
            };
            const actual = actions.decrementProductQuantity(id);
            expect(actual).toEqual(expected);
        });
    });
})

describe('Product Async Action Creators', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('creates RECIEVED_PRODUCTS when fetching products has been done', () => {
        nock('https://api.myjson.com/bins/')
            .get('/406sj')
            .reply(200, { products: ['some data'] })

        const expectedActions = [
            { type: 'TOGGLE_FETCHING_PRODUCTS', isFetching: true },
            { type: 'TOGGLE_FETCHING_PRODUCTS', isFetching: false },
            { type: 'RECIEVED_PRODUCTS', products: ['some data'] }
        ];
        const store = mockStore({ products: [] });

        return store.dispatch(actions.fetchProducts()).then(() => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
})
