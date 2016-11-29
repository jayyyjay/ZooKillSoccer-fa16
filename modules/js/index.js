//master obj
import GameObj from './GameObj.js';

//screen obj
import Screen from './Screen.js'; //never directly visible, used to construct visible screens.
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import LostScreen from './LostScreen.js';
import WonScreen from './WonScreen.js';

//HUD obj
import HUD from './HUD.js'; //never directly visible, used to construct visible screens.
import Score from './Score.js';

//static obj
import Static from './Static.js';
import Zoo from './Zoo.js';
import Cages from './Cages.js';

//dynamic obj
import Dynamic from './Dynamic.js';
import Animal from './Animal.js';
import Trump from './Trump.js';
import Player from './Player.js';

console.log('loading game.');

//global storage
window.gameScreens = [];


window.startScreen = new StartScreen('start');
window.gameScreens[ 'start' ] = window.startScreen;

window.gameScreen = new GameScreen('game');
window.gameScreens[ 'game' ] = window.gameScreen;

window.lostScreen = new LostScreen('lost');
window.gameScreens[ 'lost' ] = window.lostScreen;

window.wonscreen = new WonScreen('won');
window.gameScreens[ 'won' ] =window.wonScreen;



window.score = new Score('game score object');

window.static = new Static('Static screen object');

window.dynamic = new Dynamic('Static screen object');

window.zoo = new Zoo('Zoo object');

window.cages = new Cages('Cages object');

window.animal = new Animal('Animal object');

window.trump = new Trump('Trump object');

window.player = new Player('Player object');

//start game...

// attach event listeners to the buttons on the start screen.

//specify what each button does in code

// Make the start screen visible 

window.startScreen.show();




// Create a generic GameObj

//window.obj1 = new GameObj('donald trump');

//window.obj2 = new Screen('start screen');

//window.obj3 = new HUD('game score');