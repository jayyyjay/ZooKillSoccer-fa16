import Screen from './Screen.js'

export default class StartScreen extends Screen {

	constructor ( name ) {

		console.log('in StartScreen');

	super( name );

	this.dom = document.getElementById( 'start-screen' );

	this.getStartButton(); // define in Screen.js

		//console.log("START BUTTON IS A..." + this.startButton)

	this.startButton.addEventListener( 'click', function () {

		alert(' I am in screen:' + this.name );

		window.gameScreens [ 'start' ].hide(); //hide myself

		window.gameScreens[ 'game' ].show();


	} );

	this.getExitButton();


	}// end of constructor



}//end of class