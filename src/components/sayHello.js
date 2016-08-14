import React from 'react';

class SayHello extends React.Component {
	sayHello() {
		this.props.sayHello(this.refs.name.value);
	}
	render() {
		return <div>
			<input ref="name" type="text" />
			<button onClick={this.sayHello.bind(this)}>Say Hello!</button>
		</div>
	}
}

export default SayHello;