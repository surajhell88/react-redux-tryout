import React from 'react';

import Nav from '../components/nav';

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

export default Main;