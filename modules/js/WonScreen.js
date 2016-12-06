import Screen from './Screen.js'

export default class WonScreen extends Screen {

	constructor ( name ) {

		console.log('in WonScreen')

		super( name );

		this.dom = document.getElementById('won-screen');

		//set background

		this.setBackgroundImage('img/screens/won-screen.png');

	}// end of construct

}//end of class