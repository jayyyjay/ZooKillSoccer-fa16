import Dynamic from './Dynamic.js'

export default class Animal extends Dynamic {

	constructor ( name ) {

		console.log('in Animal name:' + name);

	super( name );

	}// end of construct

}//end of class