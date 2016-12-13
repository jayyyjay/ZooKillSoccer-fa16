import Screen from './Screen.js'
import Zoo from './Zoo.js'
import Trump from './Trump.js'
import Player from'./Player.js'

export default class GameScreen extends Screen {

	constructor ( name ) {

		console.log('in GameScreen');

	super( name );

	this.dom = document.getElementById('game-screen');

	//set background

	this.setBackgroundImage('img/screens/game-screen.png');

	}// end of construct

	/**
	*create game objects
	*/
	build () {

		console.log( 'building the game...');

		//add a zoo and 4 cgaes

		this.zoo = new Zoo('Funky Zoo');

		this.zoo.build(); //make zoo cages and animals

		this.dom.appendChild( this.zoo.dom );

		//add trump

		this.trump = new Trump('Donald President Trump', 440, 245);

		//add player y=500 x=245 pixels


		this.player = new Player( 'myself', 500, 245, this.trump );

	}

}//end of class