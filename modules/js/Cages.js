import Static from './Static.js'

export default class Cages extends Static {

	constructor ( name, screenId ) {

		console.log('in a Zoo Cages, name:' + name + 'screenId:' + screenId);

	super( name );

	this.dom = document.getElementById(screenId);

	this.show();

	}// end of construct

}//end of class