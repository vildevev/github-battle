var React = require('react');


class Battle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			playerOneName: '',
			playerTwoName: '',
			playerOneImage: null,
			playerTwoImage: null
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(id, username) {
		this.setState(function () {
			var newState = {}; 
			newState[id + 'Name'] = username;
			newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
			return newState; 
		}); 
	}
	render() {
		var playerOneName = this.state.playerOneName;
		var playerTwoName = this.state.playerTwoName;


		return (
			<div>
				<div className='row'>
					{!playerOneName && 
						<PlayerInput />}

					{!playerTwoName &&
						<PlayerInput />}
				</div>
			</div>
		)
	}
}

module.exports = Battle; 