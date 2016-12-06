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

		this.cages.push( new Cages('Cage #1') );
		this.cages.push( new Cages('Cage #2') );
		this.cages.push( new Cages('Cage #3') );
		this.cages.push( new Cages('Cage #4') );

		for (let i = 0; i < this.cages.length; i++) {

			this.dom.appendChild( this.cages[ i ].dom );
		}

		this.animals = [];

		this.animals.push( new Animal( 'lion' ) );
		this.animals.push( new Animal( 'bear' ) );
		this.animals.push( new Animal( 'gorilla' ) );
		this.animals.push( new Animal( 'tiger' ) );



	}

	

}//end of class