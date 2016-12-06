import Static from './Static.js'

export default class Cages extends Static {

	constructor ( name ) {

		console.log('in a Zoo Cages, name:' + name);

	super( name );

	// grab a cage from the dom

	this.dom = document.createElement( 'div' );

	//set background image

	this.setBackgroundImage('img/areas/cage.png');

	}// end of construct

}//end of class