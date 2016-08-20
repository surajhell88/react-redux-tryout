import * as cartActionCreators from './cartActionCreators';
import * as productActionCreators from './productActionCreators';

export const allActionCreators = { 
	...cartActionCreators, 
	...productActionCreators
};
