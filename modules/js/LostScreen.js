import Screen from './Screen.js'

export default class LostScreen extends Screen {

	constructor ( name ) {

		console.log('in LostScreen')

	super( name );

	this.dom = document.getElementById('lost-screen');

	//set background

	this.setBackgroundImage('img/screens/lost-screen.png');

	this.getStartButton();

	this.getExitButton();

	}// end of construct

}//end of class