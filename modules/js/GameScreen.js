import Screen from './Screen.js'

export default class GameScreen extends Screen {

	constructor ( name ) {

		console.log('in GameScreen');

	super( name );

	this.dom = document.getElementById('game-screen');

	}// end of construct

}//end of class