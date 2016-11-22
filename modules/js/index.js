//master obj
import GameObj from './GameObj.js';

//screen obj
import Screen from './Screen.js'; //never directly visible, used to construct visible screens.
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';

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

window.startScreen = new StartScreen('Zookill start');
window.gameScreen = new GameScreen('Zookill Game');
window.endScreen = new EndScreen('Zookill end');
window.score = new Score('game score object');
window.static = new Static('Static screen object');
window.dynamic = new Dynamic('Static screen object');
window.zoo = new Zoo('Zoo object');
window.cages = new Cages('Cages object');
window.animal = new Animal('Animal object');
window.trump = new Trump('Trump object');
window.player = new Player('Player object');




// Create a generic GameObj

//window.obj1 = new GameObj('donald trump');

//window.obj2 = new Screen('start screen');

//window.obj3 = new HUD('game score');