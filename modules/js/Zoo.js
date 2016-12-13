import Static from './Static.js'
import Cages from './Cages.js'
import Animal from './Animal.js'

export default class Zoo extends Static {

	constructor ( name ) {

		console.log('in Zoo')

	super( name );

	this.dom = document.createElement( 'div' );

	}// end of construct

	build() {

		console.log( 'in Zoo build...');

		this.cages = [];

		this.cages.push( new Cages('Cage #1', 'cage1') );
		this.cages.push( new Cages('Cage #2', 'cage2') );
		this.cages.push( new Cages('Cage #3', 'cage3') );
		this.cages.push( new Cages('Cage #4', 'cage4') );

		//make cages visible

		this.animals = [];

		this.animals.push( new Animal( 'Angry Lion', 'lion' ) );
		this.animals.push( new Animal( 'Big Bear', 'bear' ) );
		this.animals.push( new Animal( 'Giant Gorilla', 'gorilla' ) );
		this.animals.push( new Animal( 'Raging Tiger', 'tiger' ) );



	}

	

}//end of class