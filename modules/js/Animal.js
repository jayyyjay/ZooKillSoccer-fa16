import Dynamic from './Dynamic.js'

export default class Animal extends Dynamic {

	constructor ( name, screenId ) {

		console.log('in Animal name:' + name + ' screenId:' + screenId);

	super( name );

	this.dom = document.getElementById(screenId);

	this.show();

	}// end of construct

}//end of class