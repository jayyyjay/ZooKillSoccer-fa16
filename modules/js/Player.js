import Dynamic from './Dynamic.js'

export default class Player extends Dynamic {

	constructor ( name, top, left, trump ) {

	super( name );

		console.log('in Player object name:' + name + 'trump:' + trump );
		
		this.trump = trump;


	this.dom = document.getElementById('player');

	//listen for user events

	this.dom.style.top = top + 'px';
	this.dom.style.left = left + 'px';

	document.addEventListener('keydown',
		event => this.slew(event), false);

	document.addEventListener('keyup',
		event => this.unkick(event), false);

	

	this.show();

	}// end of construct

	slew(event) {

		console.log('in slew');

		let currentY = parseInt(this.dom.style.top);
		let currentX = parseInt(this.dom.style.left);

		console.log('event.keyCode:' + event.keyCode + 'x:' + currentX + 'y:' + currentY)

		switch(event.keyCode){

			case 37: //left
			currentX -= 4;
				this.setPosition(currentY, currentX);
				break;

			case 39://right
			currentX += 4;
				this.setPosition(currentY, currentX);
				break;

			case 32: //space bar, kick
			if( currentY < 496) return;
				currentY -=4;
				this.setPosition(currentY, currentX);
				this.checkForTrump(currentY, currentX);
				break;

			
		} //end of switch

		console.log('in slew');
	}

	unkick (event) {
		console.log ('in unkick');

		let currentY = parseInt(this.dom.style.top);
		let currentX = parseInt(this.dom.style.left);

		switch(event.keyCode) {

		case 32: //space bar
				currentY -=4;
				this.setPosition(currentY, currentX);
				break;

			} //end of switch
	}

	checkForTrump(top, left) {

		let trumpCurrentX = parseInt(this.trump.dom.style.left);

		let trumpCurrentY = parseInt(this.trump.dom.style.top);

		console.log('top:' + top + 'left:' + left + 'trumpTop:' + trumpCurrentY + 'trumpleft:' + trumpCurrentX)

		//if above player order trump to kick
		if ( trumpCurrentY > 590 && trumpCurrentX > left && trumpCurrentX < left + 50) {

			trump.startPingPong();

		}
	}

}//end of class






















