var React = require('react');
var PropTypes = require('react-proptypes'); 

class PlayerInput extends React.Component {
	render() {
		return (

		)
	}
}

PlayerInput.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired
}

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
						<PlayerInput 
							id='playerOne'
							label='Player One'
							onSubmit={this.handleSubmit}
						/>}

					{!playerTwoName &&
						<PlayerInput
							id='playerTwo'
							label='Player Two'
							onSubmit={this.handleSubmit}
					 	/>}
				</div>
			</div>
		)
	}
}

module.exports = Battle; 