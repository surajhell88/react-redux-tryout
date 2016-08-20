import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { allActionCreators } from '../actions';
import Nav from './nav';

class Main extends React.Component {
	render() {
		return <div>
			<Nav />
			<div className="row">
				{ React.cloneElement(this.props.children, this.props) }
			</div>
		</div>
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(allActionCreators, dispatch);
}

export default connect(state => (state), mapDispatchToProps)(Main)