import GameObj from './GameObj.js';

export default class Screen extends GameObj {
	
	constructor ( name, screens ) {
	
		console.log('in Screen');

		super( name );

		this.screens = screens;


	} //end of constructor

	getStartButton() {

		this.startButton = this.dom.getElementsByClassName( 'game-start' )[ 0 ];


	}

	getExitButton() {

		this.exitButton = this.dom.getElementsByClassName( 'game-exit' )[ 0 ];
	}

} //end of class