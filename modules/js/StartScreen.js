import Screen from './Screen.js'

export default class StartScreen extends Screen {

	constructor ( name, screens ) {

		console.log('in StartScreen, name:' + name + ' screens:' + typeof screens);

	super( name, screens );

	this.dom = document.getElementById( 'start-screen' );

	// set background image

	this.setBackgroundImage('img/screens/start-screen.png');

	console.log("SCREENS IS A:" + typeof screens)

	console.log("THIS.SCREENS IS A:" + typeof this.screens)


	//search for start button 
	//NOTE: will fail if no button present

	this.getStartButton(); // define in Screen.js

		//console.log("START BUTTON IS A..." + this.startButton)

	this.startButton.addEventListener( 'click', () => {

		//alert(' I am in screen:' + this.name );

		this.screens[ 'start' ].hide(); //hide myself

		this.screens[ 'game' ].show(); //show game screen

		this.screens[ 'game' ].build(); //rebuild game


	} );

	this.getExitButton();


	}// end of constructor



}//end of class