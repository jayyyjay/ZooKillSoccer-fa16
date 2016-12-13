import Dynamic from './Dynamic.js'

export default class Trump extends Dynamic {

	constructor ( name, top, left ) {

		console.log('in Trump name:' + name);

	super( name );

	this.dom = document.getElementById('trump');

	this.dom.style.top = top + 'px';
	this.dom.style.left = left + 'px';

	this.initPingPong()

	this.show();

	}// end of construct

	initPingPong () {

		console.log('in pingpong');
		//set up movement for trump
	}


	startPingPong () {

		console.log('in trump startPingPong()');

		this.intervalId = setInterval( () => this.doPingPong, 40 );
	}

	doPingPong () {
		//change trump css
		
	}

	stopPingPong () {

		clearInterval(this.intervalId)

	}

}//end of class