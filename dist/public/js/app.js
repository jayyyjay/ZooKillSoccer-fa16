(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animal = function (_Dynamic) {
	_inherits(Animal, _Dynamic);

	function Animal(name, screenId) {
		_classCallCheck(this, Animal);

		console.log('in Animal name:' + name + ' screenId:' + screenId);

		var _this = _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, name));

		_this.dom = document.getElementById(screenId);

		_this.show();

		return _this;
	} // end of construct

	return Animal;
}(_Dynamic3.default); //end of class


exports.default = Animal;

},{"./Dynamic.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cages = function (_Static) {
	_inherits(Cages, _Static);

	function Cages(name, screenId) {
		_classCallCheck(this, Cages);

		console.log('in a Zoo Cages, name:' + name + 'screenId:' + screenId);

		var _this = _possibleConstructorReturn(this, (Cages.__proto__ || Object.getPrototypeOf(Cages)).call(this, name));

		_this.dom = document.getElementById(screenId);

		_this.show();

		return _this;
	} // end of construct

	return Cages;
}(_Static3.default); //end of class


exports.default = Cages;

},{"./Static.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dynamic = function (_GameObj) {
	_inherits(Dynamic, _GameObj);

	function Dynamic(name) {
		_classCallCheck(this, Dynamic);

		console.log('in Dynamic');

		return _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).call(this, name));
	} // end of construct

	return Dynamic;
}(_GameObj3.default); //end of class


exports.default = Dynamic;

},{"./GameObj.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObj = function () {

	//inherits from generic JS Object;

	function GameObj(name) {
		_classCallCheck(this, GameObj);

		console.log('in GameObj');

		this.name = name;

		this.id = this.setId();
	} //end of constructor

	/**
 *get the unique ID value for an object.
 *@returns {strings} the unique id, in uuid format.
 */


	_createClass(GameObj, [{
		key: "getId",
		value: function getId() {
			return this.id;
		}

		/**
  *get the name assigned to this object
  *@returns {strings} the name.
  */

	}, {
		key: "getName",
		value: function getName() {
			return this.name;
		}

		/**
  *set the objects name to a new value.
  *@returns {strings} newName the new name to use.
  */

	}, {
		key: "setName",
		value: function setName(newName) {
			this.name = newName;
		}
	}, {
		key: "show",
		value: function show() {

			this.dom.style.display = "block";
		}
	}, {
		key: "hide",
		value: function hide() {

			this.dom.style.display = "none";
		}

		/**
  *Load image
  *css background image
  *@param {string} imgPath the path to image
  */

	}, {
		key: "setBackgroundImage",
		value: function setBackgroundImage(imgPath) {

			this.dom.style.backgroundImage = "url('" + imgPath + "')";
		}
	}, {
		key: "setForegroundImage",
		value: function setForegroundImage(imgPath) {

			var img = new Image();

			img.src = imgPath;

			this.dom.appendChild(img);
		}

		//set size in pixels

	}, {
		key: "setSize",
		value: function setSize(width, height) {

			this.dom.style.width = width + 'px';
			this.dom.style.height = height + 'px';
		}

		//set position relative to screen

	}, {
		key: "setPosition",
		value: function setPosition(top, left) {

			this.dom.style.top = top + 'px';
			this.dom.style.left = left + 'px';
		}

		/** 
      * Generate a unique ID for every game object.
      * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
      *@returns {strings} the unique id in uuid format.
      */

	}, {
		key: "setId",
		value: function setId() {
			var d = new Date().getTime();
			if (window.performance && typeof window.performance.now === "function") {
				d += performance.now(); //use high-precision timer if available
			}
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (d + Math.random() * 16) % 16 | 0;
				d = Math.floor(d / 16);
				return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
			});
			return uuid;
		} //end of set ID

	}]);

	return GameObj;
}(); //end of class


exports.default = GameObj;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Zoo = require('./Zoo.js');

var _Zoo2 = _interopRequireDefault(_Zoo);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScreen = function (_Screen) {
	_inherits(GameScreen, _Screen);

	function GameScreen(name) {
		_classCallCheck(this, GameScreen);

		console.log('in GameScreen');

		var _this = _possibleConstructorReturn(this, (GameScreen.__proto__ || Object.getPrototypeOf(GameScreen)).call(this, name));

		_this.dom = document.getElementById('game-screen');

		//set background

		_this.setBackgroundImage('img/screens/game-screen.png');

		return _this;
	} // end of construct

	/**
 *create game objects
 */


	_createClass(GameScreen, [{
		key: 'build',
		value: function build() {

			console.log('building the game...');

			//add a zoo and 4 cgaes

			this.zoo = new _Zoo2.default('Funky Zoo');

			this.zoo.build(); //make zoo cages and animals

			this.dom.appendChild(this.zoo.dom);

			//add trump

			this.trump = new _Trump2.default('Donald President Trump', 440, 245);

			//add player y=500 x=245 pixels


			this.player = new _Player2.default('myself', 500, 245, this.trump);
		}
	}]);

	return GameScreen;
}(_Screen3.default); //end of class


exports.default = GameScreen;

},{"./Player.js":8,"./Screen.js":10,"./Trump.js":13,"./Zoo.js":15}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HUD = function (_GameObj) {
	_inherits(HUD, _GameObj);

	function HUD(name) {
		_classCallCheck(this, HUD);

		console.log('in HUD');

		return _possibleConstructorReturn(this, (HUD.__proto__ || Object.getPrototypeOf(HUD)).call(this, name));
	} //end of constructor


	return HUD;
}(_GameObj3.default); // end of class


exports.default = HUD;

},{"./GameObj.js":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LostScreen = function (_Screen) {
	_inherits(LostScreen, _Screen);

	function LostScreen(name) {
		_classCallCheck(this, LostScreen);

		console.log('in LostScreen');

		var _this = _possibleConstructorReturn(this, (LostScreen.__proto__ || Object.getPrototypeOf(LostScreen)).call(this, name));

		_this.dom = document.getElementById('lost-screen');

		//set background

		_this.setBackgroundImage('img/screens/lost-screen.png');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of construct

	return LostScreen;
}(_Screen3.default); //end of class


exports.default = LostScreen;

},{"./Screen.js":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Dynamic) {
	_inherits(Player, _Dynamic);

	function Player(name, top, left, trump) {
		_classCallCheck(this, Player);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name));

		console.log('in Player object name:' + name + 'trump:' + trump);

		_this.trump = trump;

		_this.dom = document.getElementById('player');

		//listen for user events

		_this.dom.style.top = top + 'px';
		_this.dom.style.left = left + 'px';

		document.addEventListener('keydown', function (event) {
			return _this.slew(event);
		}, false);

		document.addEventListener('keyup', function (event) {
			return _this.unkick(event);
		}, false);

		_this.show();

		return _this;
	} // end of construct

	_createClass(Player, [{
		key: 'slew',
		value: function slew(event) {

			console.log('in slew');

			var currentY = parseInt(this.dom.style.top);
			var currentX = parseInt(this.dom.style.left);

			console.log('event.keyCode:' + event.keyCode + 'x:' + currentX + 'y:' + currentY);

			switch (event.keyCode) {

				case 37:
					//left
					currentX -= 4;
					this.setPosition(currentY, currentX);
					break;

				case 39:
					//right
					currentX += 4;
					this.setPosition(currentY, currentX);
					break;

				case 32:
					//space bar, kick
					if (currentY < 496) return;
					currentY -= 4;
					this.setPosition(currentY, currentX);
					this.checkForTrump(currentY, currentX);
					break;

			} //end of switch

			console.log('in slew');
		}
	}, {
		key: 'unkick',
		value: function unkick(event) {
			console.log('in unkick');

			var currentY = parseInt(this.dom.style.top);
			var currentX = parseInt(this.dom.style.left);

			switch (event.keyCode) {

				case 32:
					//space bar
					currentY -= 4;
					this.setPosition(currentY, currentX);
					break;

			} //end of switch
		}
	}, {
		key: 'checkForTrump',
		value: function checkForTrump(top, left) {

			var trumpCurrentX = parseInt(this.trump.dom.style.left);

			var trumpCurrentY = parseInt(this.trump.dom.style.top);

			console.log('top:' + top + 'left:' + left + 'trumpTop:' + trumpCurrentY + 'trumpleft:' + trumpCurrentX);

			//if above player order trump to kick
			if (trumpCurrentY > 590 && trumpCurrentX > left && trumpCurrentX < left + 50) {

				trump.startPingPong();
			}
		}
	}]);

	return Player;
}(_Dynamic3.default); //end of class


exports.default = Player;

},{"./Dynamic.js":3}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _HUD2 = require('./HUD.js');

var _HUD3 = _interopRequireDefault(_HUD2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = function (_HUD) {
	_inherits(Score, _HUD);

	function Score(name) {
		_classCallCheck(this, Score);

		console.log('in Score');

		var _this = _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, name));

		_this.dom = document.getElementById('game-score');

		return _this;
	} //end of constructor


	return Score;
}(_HUD3.default); // end of class


exports.default = Score;

},{"./HUD.js":6}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_GameObj) {
	_inherits(Screen, _GameObj);

	function Screen(name, screens) {
		_classCallCheck(this, Screen);

		console.log('in Screen');

		var _this = _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, name));

		_this.screens = screens;

		return _this;
	} //end of constructor

	_createClass(Screen, [{
		key: 'getStartButton',
		value: function getStartButton() {

			this.startButton = this.dom.getElementsByClassName('game-start')[0];
		}
	}, {
		key: 'getExitButton',
		value: function getExitButton() {

			this.exitButton = this.dom.getElementsByClassName('game-exit')[0];
		}
	}]);

	return Screen;
}(_GameObj3.default); //end of class


exports.default = Screen;

},{"./GameObj.js":4}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartScreen = function (_Screen) {
	_inherits(StartScreen, _Screen);

	function StartScreen(name, screens) {
		_classCallCheck(this, StartScreen);

		console.log('in StartScreen, name:' + name + ' screens:' + (typeof screens === 'undefined' ? 'undefined' : _typeof(screens)));

		var _this = _possibleConstructorReturn(this, (StartScreen.__proto__ || Object.getPrototypeOf(StartScreen)).call(this, name, screens));

		_this.dom = document.getElementById('start-screen');

		// set background image

		_this.setBackgroundImage('img/screens/start-screen.png');

		console.log("SCREENS IS A:" + (typeof screens === 'undefined' ? 'undefined' : _typeof(screens)));

		console.log("THIS.SCREENS IS A:" + _typeof(_this.screens));

		//search for start button 
		//NOTE: will fail if no button present

		_this.getStartButton(); // define in Screen.js

		//console.log("START BUTTON IS A..." + this.startButton)

		_this.startButton.addEventListener('click', function () {

			//alert(' I am in screen:' + this.name );

			_this.screens['start'].hide(); //hide myself

			_this.screens['game'].show(); //show game screen

			_this.screens['game'].build(); //rebuild game

		});

		_this.getExitButton();

		return _this;
	} // end of constructor


	return StartScreen;
}(_Screen3.default); //end of class


exports.default = StartScreen;

},{"./Screen.js":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Static = function (_GameObj) {
	_inherits(Static, _GameObj);

	function Static(name) {
		_classCallCheck(this, Static);

		console.log('in Static');

		return _possibleConstructorReturn(this, (Static.__proto__ || Object.getPrototypeOf(Static)).call(this, name));
	} // end of construct

	return Static;
}(_GameObj3.default); //end of class


exports.default = Static;

},{"./GameObj.js":4}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trump = function (_Dynamic) {
	_inherits(Trump, _Dynamic);

	function Trump(name, top, left) {
		_classCallCheck(this, Trump);

		console.log('in Trump name:' + name);

		var _this = _possibleConstructorReturn(this, (Trump.__proto__ || Object.getPrototypeOf(Trump)).call(this, name));

		_this.dom = document.getElementById('trump');

		_this.dom.style.top = top + 'px';
		_this.dom.style.left = left + 'px';

		_this.initPingPong();

		_this.show();

		return _this;
	} // end of construct

	_createClass(Trump, [{
		key: 'initPingPong',
		value: function initPingPong() {

			console.log('in pingpong');
			//set up movement for trump
		}
	}, {
		key: 'startPingPong',
		value: function startPingPong() {
			var _this2 = this;

			console.log('in trump startPingPong()');

			this.intervalId = setInterval(function () {
				return _this2.doPingPong;
			}, 40);
		}
	}, {
		key: 'doPingPong',
		value: function doPingPong() {
			//change trump css

		}
	}, {
		key: 'stopPingPong',
		value: function stopPingPong() {

			clearInterval(this.intervalId);
		}
	}]);

	return Trump;
}(_Dynamic3.default); //end of class


exports.default = Trump;

},{"./Dynamic.js":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WonScreen = function (_Screen) {
	_inherits(WonScreen, _Screen);

	function WonScreen(name) {
		_classCallCheck(this, WonScreen);

		console.log('in WonScreen');

		var _this = _possibleConstructorReturn(this, (WonScreen.__proto__ || Object.getPrototypeOf(WonScreen)).call(this, name));

		_this.dom = document.getElementById('won-screen');

		//set background

		_this.setBackgroundImage('img/screens/won-screen.png');

		return _this;
	} // end of construct

	return WonScreen;
}(_Screen3.default); //end of class


exports.default = WonScreen;

},{"./Screen.js":10}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

var _Cages = require('./Cages.js');

var _Cages2 = _interopRequireDefault(_Cages);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zoo = function (_Static) {
	_inherits(Zoo, _Static);

	function Zoo(name) {
		_classCallCheck(this, Zoo);

		console.log('in Zoo');

		var _this = _possibleConstructorReturn(this, (Zoo.__proto__ || Object.getPrototypeOf(Zoo)).call(this, name));

		_this.dom = document.createElement('div');

		return _this;
	} // end of construct

	_createClass(Zoo, [{
		key: 'build',
		value: function build() {

			console.log('in Zoo build...');

			this.cages = [];

			this.cages.push(new _Cages2.default('Cage #1', 'cage1'));
			this.cages.push(new _Cages2.default('Cage #2', 'cage2'));
			this.cages.push(new _Cages2.default('Cage #3', 'cage3'));
			this.cages.push(new _Cages2.default('Cage #4', 'cage4'));

			//make cages visible

			this.animals = [];

			this.animals.push(new _Animal2.default('Angry Lion', 'lion'));
			this.animals.push(new _Animal2.default('Big Bear', 'bear'));
			this.animals.push(new _Animal2.default('Giant Gorilla', 'gorilla'));
			this.animals.push(new _Animal2.default('Raging Tiger', 'tiger'));
		}
	}]);

	return Zoo;
}(_Static3.default); //end of class


exports.default = Zoo;

},{"./Animal.js":1,"./Cages.js":2,"./Static.js":12}],16:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //master obj


//screen obj
//never directly visible, used to construct visible screens.


//HUD obj
//never directly visible, used to construct visible screens.


//static obj


//dynamic obj


var _GameObj = require('./GameObj.js');

var _GameObj2 = _interopRequireDefault(_GameObj);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _LostScreen = require('./LostScreen.js');

var _LostScreen2 = _interopRequireDefault(_LostScreen);

var _WonScreen = require('./WonScreen.js');

var _WonScreen2 = _interopRequireDefault(_WonScreen);

var _HUD = require('./HUD.js');

var _HUD2 = _interopRequireDefault(_HUD);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Static = require('./Static.js');

var _Static2 = _interopRequireDefault(_Static);

var _Zoo = require('./Zoo.js');

var _Zoo2 = _interopRequireDefault(_Zoo);

var _Cages = require('./Cages.js');

var _Cages2 = _interopRequireDefault(_Cages);

var _Dynamic = require('./Dynamic.js');

var _Dynamic2 = _interopRequireDefault(_Dynamic);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('loading game.');

//global storage
window.gameScreens = [];

var startScreen = new _StartScreen2.default('start', window.gameScreens);
console.log("STARTSCREEN IS A:" + (typeof startScreen === 'undefined' ? 'undefined' : _typeof(startScreen)));
window.gameScreens['start'] = startScreen;

var gameScreen = new _GameScreen2.default('game', window.gameScreens);
window.gameScreens['game'] = gameScreen;

var lostScreen = new _LostScreen2.default('lost', window.gameScreens);
window.gameScreens['lost'] = lostScreen;

var wonScreen = new _WonScreen2.default('won', window.gameScreens);
window.gameScreens['won'] = wonScreen;

console.log("gameScreens:" + _typeof(window.ganeScreens));

window.score = new _Score2.default('game score');

//window.score = new Score('game score object');

//window.static = new Static('Static screen object');

//window.dynamic = new Dynamic('Static screen object');

//window.zoo = new Zoo('Zoo object');

//window.cages = new Cages('Cages object');

//window.animal = new Animal('Animal object');

//window.trump = new Trump('Trump object');

//window.player = new Player('Player object');

//start game...

// attach event listeners to the buttons on the start screen.

//specify what each button does in code

// Make the start screen visible 

startScreen.show();

// Create a generic GameObj

//window.obj1 = new GameObj('donald trump');

//window.obj2 = new Screen('start screen');

//window.obj3 = new HUD('game score');

},{"./Animal.js":1,"./Cages.js":2,"./Dynamic.js":3,"./GameObj.js":4,"./GameScreen.js":5,"./HUD.js":6,"./LostScreen.js":7,"./Player.js":8,"./Score.js":9,"./Screen.js":10,"./StartScreen.js":11,"./Static.js":12,"./Trump.js":13,"./WonScreen.js":14,"./Zoo.js":15}]},{},[16])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZXMuanMiLCJtb2R1bGVzL2pzL0R5bmFtaWMuanMiLCJtb2R1bGVzL2pzL0dhbWVPYmouanMiLCJtb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMiLCJtb2R1bGVzL2pzL0hVRC5qcyIsIm1vZHVsZXMvanMvTG9zdFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvV29uU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9ab28uanMiLCJtb2R1bGVzL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztJQUVxQixNOzs7QUFFcEIsaUJBQWMsSUFBZCxFQUFvQixRQUFwQixFQUErQjtBQUFBOztBQUU5QixVQUFRLEdBQVIsQ0FBWSxvQkFBb0IsSUFBcEIsR0FBMkIsWUFBM0IsR0FBMEMsUUFBdEQ7O0FBRjhCLDhHQUl4QixJQUp3Qjs7QUFNL0IsUUFBSyxHQUFMLEdBQVcsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQVg7O0FBRUEsUUFBSyxJQUFMOztBQVIrQjtBQVU5QixFLENBQUE7OztzQkFFRDs7O2tCQWRvQixNOzs7Ozs7Ozs7QUNGckI7Ozs7Ozs7Ozs7OztJQUVxQixLOzs7QUFFcEIsZ0JBQWMsSUFBZCxFQUFvQixRQUFwQixFQUErQjtBQUFBOztBQUU5QixVQUFRLEdBQVIsQ0FBWSwwQkFBMEIsSUFBMUIsR0FBaUMsV0FBakMsR0FBK0MsUUFBM0Q7O0FBRjhCLDRHQUl4QixJQUp3Qjs7QUFNL0IsUUFBSyxHQUFMLEdBQVcs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QVksd0JBQWMsS0FBZCxFQUFxQixPQUFPLFdBQTVCLENBQWhCO0FBQ0EsT0FBTyxXQUFQLENBQW9CLEtBQXBCLElBQThCLFNBQTlCOztBQUVBLFFBQVEsR0FBUixDQUFZLHlCQUF3QixPQUFPLFdBQS9CLENBQVo7O0FBRUEsT0FBTyxLQUFQLEdBQWUsb0JBQVUsWUFBVixDQUFmOztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFlBQVksSUFBWjs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIER5bmFtaWMge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVuSWQgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gQW5pbWFsIG5hbWU6JyArIG5hbWUgKyAnIHNjcmVlbklkOicgKyBzY3JlZW5JZCk7XG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjcmVlbklkKTtcblxuXHR0aGlzLnNob3coKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlcyBleHRlbmRzIFN0YXRpYyB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5JZCApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBhIFpvbyBDYWdlcywgbmFtZTonICsgbmFtZSArICdzY3JlZW5JZDonICsgc2NyZWVuSWQpO1xuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JlZW5JZCk7XG5cblx0dGhpcy5zaG93KCk7XG5cblx0fS8vIGVuZCBvZiBjb25zdHJ1Y3RcblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljIGV4dGVuZHMgR2FtZU9iaiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIER5bmFtaWMnKVxuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0fS8vIGVuZCBvZiBjb25zdHJ1Y3RcblxufS8vZW5kIG9mIGNsYXNzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iaiB7XG5cblx0Ly9pbmhlcml0cyBmcm9tIGdlbmVyaWMgSlMgT2JqZWN0O1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBHYW1lT2JqJyk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXG5cdFx0dGhpcy5pZCA9IHRoaXMuc2V0SWQoKTtcblxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0LyoqXG5cdCpnZXQgdGhlIHVuaXF1ZSBJRCB2YWx1ZSBmb3IgYW4gb2JqZWN0LlxuXHQqQHJldHVybnMge3N0cmluZ3N9IHRoZSB1bmlxdWUgaWQsIGluIHV1aWQgZm9ybWF0LlxuXHQqL1xuXHRnZXRJZCgpIHtcblx0XHRyZXR1cm4gdGhpcyAuaWQ7XG5cdH1cblxuXHQvKipcblx0KmdldCB0aGUgbmFtZSBhc3NpZ25lZCB0byB0aGlzIG9iamVjdFxuXHQqQHJldHVybnMge3N0cmluZ3N9IHRoZSBuYW1lLlxuXHQqL1xuXHRnZXROYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLm5hbWU7XG5cdH1cblxuXHQvKipcblx0KnNldCB0aGUgb2JqZWN0cyBuYW1lIHRvIGEgbmV3IHZhbHVlLlxuXHQqQHJldHVybnMge3N0cmluZ3N9IG5ld05hbWUgdGhlIG5ldyBuYW1lIHRvIHVzZS5cblx0Ki9cblx0c2V0TmFtZSggbmV3TmFtZSApIHtcblx0XHR0aGlzLm5hbWUgPSBuZXdOYW1lO1xuXHR9XG5cblx0c2hvdyAoKSB7XG5cblx0XHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cblxuXHR9XG5cblx0aGlkZSAoKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblx0fVxuXG5cdC8qKlxuXHQqTG9hZCBpbWFnZVxuXHQqY3NzIGJhY2tncm91bmQgaW1hZ2Vcblx0KkBwYXJhbSB7c3RyaW5nfSBpbWdQYXRoIHRoZSBwYXRoIHRvIGltYWdlXG5cdCovXG5cdHNldEJhY2tncm91bmRJbWFnZSggaW1nUGF0aCApIHtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIiArIGltZ1BhdGggKyBcIicpXCI7XG5cblx0fVxuXG5cdHNldEZvcmVncm91bmRJbWFnZSggaW1nUGF0aCApIHtcblxuXHRcdGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdGltZy5zcmMgPSBpbWdQYXRoO1xuXG5cdFx0dGhpcy5kb20uYXBwZW5kQ2hpbGQoIGltZyApO1xuXHR9XG5cblx0Ly9zZXQgc2l6ZSBpbiBwaXhlbHNcblxuXHRzZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG5cdFx0dGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuXG5cdH1cblxuXHQvL3NldCBwb3NpdGlvbiByZWxhdGl2ZSB0byBzY3JlZW5cblxuXHRzZXRQb3NpdGlvbiggdG9wLCBsZWZ0ICkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUudG9wID0gdG9wICsgJ3B4Jztcblx0XHR0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG5cblx0fVxuXG5cdC8qKiBcbiAgICAgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZXZlcnkgZ2FtZSBvYmplY3QuXG4gICAgICogQGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XG4gICAgICpAcmV0dXJucyB7c3RyaW5nc30gdGhlIHVuaXF1ZSBpZCBpbiB1dWlkIGZvcm1hdC5cbiAgICAgKi9cbiAgICBzZXRJZCAoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG5cbiAgICB9IC8vZW5kIG9mIHNldCBJRFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJ1xuaW1wb3J0IFpvbyBmcm9tICcuL1pvby5qcydcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJ1xuaW1wb3J0IFBsYXllciBmcm9tJy4vUGxheWVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gR2FtZVNjcmVlbicpO1xuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zY3JlZW4nKTtcblxuXHQvL3NldCBiYWNrZ3JvdW5kXG5cblx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoJ2ltZy9zY3JlZW5zL2dhbWUtc2NyZWVuLnBuZycpO1xuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0XG5cblx0LyoqXG5cdCpjcmVhdGUgZ2FtZSBvYmplY3RzXG5cdCovXG5cdGJ1aWxkICgpIHtcblxuXHRcdGNvbnNvbGUubG9nKCAnYnVpbGRpbmcgdGhlIGdhbWUuLi4nKTtcblxuXHRcdC8vYWRkIGEgem9vIGFuZCA0IGNnYWVzXG5cblx0XHR0aGlzLnpvbyA9IG5ldyBab28oJ0Z1bmt5IFpvbycpO1xuXG5cdFx0dGhpcy56b28uYnVpbGQoKTsgLy9tYWtlIHpvbyBjYWdlcyBhbmQgYW5pbWFsc1xuXG5cdFx0dGhpcy5kb20uYXBwZW5kQ2hpbGQoIHRoaXMuem9vLmRvbSApO1xuXG5cdFx0Ly9hZGQgdHJ1bXBcblxuXHRcdHRoaXMudHJ1bXAgPSBuZXcgVHJ1bXAoJ0RvbmFsZCBQcmVzaWRlbnQgVHJ1bXAnLCA0NDAsIDI0NSk7XG5cblx0XHQvL2FkZCBwbGF5ZXIgeT01MDAgeD0yNDUgcGl4ZWxzXG5cblxuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllciggJ215c2VsZicsIDUwMCwgMjQ1LCB0aGlzLnRydW1wICk7XG5cblx0fVxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVUQgZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBIVUQnKTtcblxuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0XG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9zdFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIExvc3RTY3JlZW4nKVxuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9zdC1zY3JlZW4nKTtcblxuXHQvL3NldCBiYWNrZ3JvdW5kXG5cblx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoJ2ltZy9zY3JlZW5zL2xvc3Qtc2NyZWVuLnBuZycpO1xuXG5cdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTtcblxuXHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIER5bmFtaWMge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSwgdG9wLCBsZWZ0LCB0cnVtcCApIHtcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFBsYXllciBvYmplY3QgbmFtZTonICsgbmFtZSArICd0cnVtcDonICsgdHJ1bXAgKTtcblx0XHRcblx0XHR0aGlzLnRydW1wID0gdHJ1bXA7XG5cblxuXHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKTtcblxuXHQvL2xpc3RlbiBmb3IgdXNlciBldmVudHNcblxuXHR0aGlzLmRvbS5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuXHR0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsXG5cdFx0ZXZlbnQgPT4gdGhpcy5zbGV3KGV2ZW50KSwgZmFsc2UpO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyxcblx0XHRldmVudCA9PiB0aGlzLnVua2ljayhldmVudCksIGZhbHNlKTtcblxuXHRcblxuXHR0aGlzLnNob3coKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG5cdHNsZXcoZXZlbnQpIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBzbGV3Jyk7XG5cblx0XHRsZXQgY3VycmVudFkgPSBwYXJzZUludCh0aGlzLmRvbS5zdHlsZS50b3ApO1xuXHRcdGxldCBjdXJyZW50WCA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLmxlZnQpO1xuXG5cdFx0Y29uc29sZS5sb2coJ2V2ZW50LmtleUNvZGU6JyArIGV2ZW50LmtleUNvZGUgKyAneDonICsgY3VycmVudFggKyAneTonICsgY3VycmVudFkpXG5cblx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSl7XG5cblx0XHRcdGNhc2UgMzc6IC8vbGVmdFxuXHRcdFx0Y3VycmVudFggLT0gNDtcblx0XHRcdFx0dGhpcy5zZXRQb3NpdGlvbihjdXJyZW50WSwgY3VycmVudFgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOTovL3JpZ2h0XG5cdFx0XHRjdXJyZW50WCArPSA0O1xuXHRcdFx0XHR0aGlzLnNldFBvc2l0aW9uKGN1cnJlbnRZLCBjdXJyZW50WCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDMyOiAvL3NwYWNlIGJhciwga2lja1xuXHRcdFx0aWYoIGN1cnJlbnRZIDwgNDk2KSByZXR1cm47XG5cdFx0XHRcdGN1cnJlbnRZIC09NDtcblx0XHRcdFx0dGhpcy5zZXRQb3NpdGlvbihjdXJyZW50WSwgY3VycmVudFgpO1xuXHRcdFx0XHR0aGlzLmNoZWNrRm9yVHJ1bXAoY3VycmVudFksIGN1cnJlbnRYKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFxuXHRcdH0gLy9lbmQgb2Ygc3dpdGNoXG5cblx0XHRjb25zb2xlLmxvZygnaW4gc2xldycpO1xuXHR9XG5cblx0dW5raWNrIChldmVudCkge1xuXHRcdGNvbnNvbGUubG9nICgnaW4gdW5raWNrJyk7XG5cblx0XHRsZXQgY3VycmVudFkgPSBwYXJzZUludCh0aGlzLmRvbS5zdHlsZS50b3ApO1xuXHRcdGxldCBjdXJyZW50WCA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLmxlZnQpO1xuXG5cdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcblxuXHRcdGNhc2UgMzI6IC8vc3BhY2UgYmFyXG5cdFx0XHRcdGN1cnJlbnRZIC09NDtcblx0XHRcdFx0dGhpcy5zZXRQb3NpdGlvbihjdXJyZW50WSwgY3VycmVudFgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0fSAvL2VuZCBvZiBzd2l0Y2hcblx0fVxuXG5cdGNoZWNrRm9yVHJ1bXAodG9wLCBsZWZ0KSB7XG5cblx0XHRsZXQgdHJ1bXBDdXJyZW50WCA9IHBhcnNlSW50KHRoaXMudHJ1bXAuZG9tLnN0eWxlLmxlZnQpO1xuXG5cdFx0bGV0IHRydW1wQ3VycmVudFkgPSBwYXJzZUludCh0aGlzLnRydW1wLmRvbS5zdHlsZS50b3ApO1xuXG5cdFx0Y29uc29sZS5sb2coJ3RvcDonICsgdG9wICsgJ2xlZnQ6JyArIGxlZnQgKyAndHJ1bXBUb3A6JyArIHRydW1wQ3VycmVudFkgKyAndHJ1bXBsZWZ0OicgKyB0cnVtcEN1cnJlbnRYKVxuXG5cdFx0Ly9pZiBhYm92ZSBwbGF5ZXIgb3JkZXIgdHJ1bXAgdG8ga2lja1xuXHRcdGlmICggdHJ1bXBDdXJyZW50WSA+IDU5MCAmJiB0cnVtcEN1cnJlbnRYID4gbGVmdCAmJiB0cnVtcEN1cnJlbnRYIDwgbGVmdCArIDUwKSB7XG5cblx0XHRcdHRydW1wLnN0YXJ0UGluZ1BvbmcoKTtcblxuXHRcdH1cblx0fVxuXG59Ly9lbmQgb2YgY2xhc3NcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgSFVEIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBTY29yZScpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NvcmUnKTtcblxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxuXHRcblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVucyApIHtcblx0XG5cdFx0Y29uc29sZS5sb2coJ2luIFNjcmVlbicpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuc2NyZWVucyA9IHNjcmVlbnM7XG5cblxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0Z2V0U3RhcnRCdXR0b24oKSB7XG5cblx0XHR0aGlzLnN0YXJ0QnV0dG9uID0gdGhpcy5kb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ2dhbWUtc3RhcnQnIClbIDAgXTtcblxuXG5cdH1cblxuXHRnZXRFeGl0QnV0dG9uKCkge1xuXG5cdFx0dGhpcy5leGl0QnV0dG9uID0gdGhpcy5kb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ2dhbWUtZXhpdCcgKVsgMCBdO1xuXHR9XG5cbn0gLy9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5zICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFN0YXJ0U2NyZWVuLCBuYW1lOicgKyBuYW1lICsgJyBzY3JlZW5zOicgKyB0eXBlb2Ygc2NyZWVucyk7XG5cblx0c3VwZXIoIG5hbWUsIHNjcmVlbnMgKTtcblxuXHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3RhcnQtc2NyZWVuJyApO1xuXG5cdC8vIHNldCBiYWNrZ3JvdW5kIGltYWdlXG5cblx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoJ2ltZy9zY3JlZW5zL3N0YXJ0LXNjcmVlbi5wbmcnKTtcblxuXHRjb25zb2xlLmxvZyhcIlNDUkVFTlMgSVMgQTpcIiArIHR5cGVvZiBzY3JlZW5zKVxuXG5cdGNvbnNvbGUubG9nKFwiVEhJUy5TQ1JFRU5TIElTIEE6XCIgKyB0eXBlb2YgdGhpcy5zY3JlZW5zKVxuXG5cblx0Ly9zZWFyY2ggZm9yIHN0YXJ0IGJ1dHRvbiBcblx0Ly9OT1RFOiB3aWxsIGZhaWwgaWYgbm8gYnV0dG9uIHByZXNlbnRcblxuXHR0aGlzLmdldFN0YXJ0QnV0dG9uKCk7IC8vIGRlZmluZSBpbiBTY3JlZW4uanNcblxuXHRcdC8vY29uc29sZS5sb2coXCJTVEFSVCBCVVRUT04gSVMgQS4uLlwiICsgdGhpcy5zdGFydEJ1dHRvbilcblxuXHR0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcblxuXHRcdC8vYWxlcnQoJyBJIGFtIGluIHNjcmVlbjonICsgdGhpcy5uYW1lICk7XG5cblx0XHR0aGlzLnNjcmVlbnNbICdzdGFydCcgXS5oaWRlKCk7IC8vaGlkZSBteXNlbGZcblxuXHRcdHRoaXMuc2NyZWVuc1sgJ2dhbWUnIF0uc2hvdygpOyAvL3Nob3cgZ2FtZSBzY3JlZW5cblxuXHRcdHRoaXMuc2NyZWVuc1sgJ2dhbWUnIF0uYnVpbGQoKTsgLy9yZWJ1aWxkIGdhbWVcblxuXG5cdH0gKTtcblxuXHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljIGV4dGVuZHMgR2FtZU9iaiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFN0YXRpYycpXG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydW1wIGV4dGVuZHMgRHluYW1pYyB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lLCB0b3AsIGxlZnQgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gVHJ1bXAgbmFtZTonICsgbmFtZSk7XG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cnVtcCcpO1xuXG5cdHRoaXMuZG9tLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG5cdHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcblxuXHR0aGlzLmluaXRQaW5nUG9uZygpXG5cblx0dGhpcy5zaG93KCk7XG5cblx0fS8vIGVuZCBvZiBjb25zdHJ1Y3RcblxuXHRpbml0UGluZ1BvbmcgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIHBpbmdwb25nJyk7XG5cdFx0Ly9zZXQgdXAgbW92ZW1lbnQgZm9yIHRydW1wXG5cdH1cblxuXG5cdHN0YXJ0UGluZ1BvbmcgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIHRydW1wIHN0YXJ0UGluZ1BvbmcoKScpO1xuXG5cdFx0dGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoICgpID0+IHRoaXMuZG9QaW5nUG9uZywgNDAgKTtcblx0fVxuXG5cdGRvUGluZ1BvbmcgKCkge1xuXHRcdC8vY2hhbmdlIHRydW1wIGNzc1xuXHRcdFxuXHR9XG5cblx0c3RvcFBpbmdQb25nICgpIHtcblxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKVxuXG5cdH1cblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29uU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gV29uU2NyZWVuJylcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b24tc2NyZWVuJyk7XG5cblx0XHQvL3NldCBiYWNrZ3JvdW5kXG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSgnaW1nL3NjcmVlbnMvd29uLXNjcmVlbi5wbmcnKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJ1xuaW1wb3J0IENhZ2VzIGZyb20gJy4vQ2FnZXMuanMnXG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab28gZXh0ZW5kcyBTdGF0aWMge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBab28nKVxuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0XG5cblx0YnVpbGQoKSB7XG5cblx0XHRjb25zb2xlLmxvZyggJ2luIFpvbyBidWlsZC4uLicpO1xuXG5cdFx0dGhpcy5jYWdlcyA9IFtdO1xuXG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZXMoJ0NhZ2UgIzEnLCAnY2FnZTEnKSApO1xuXHRcdHRoaXMuY2FnZXMucHVzaCggbmV3IENhZ2VzKCdDYWdlICMyJywgJ2NhZ2UyJykgKTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlcygnQ2FnZSAjMycsICdjYWdlMycpICk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZXMoJ0NhZ2UgIzQnLCAnY2FnZTQnKSApO1xuXG5cdFx0Ly9tYWtlIGNhZ2VzIHZpc2libGVcblxuXHRcdHRoaXMuYW5pbWFscyA9IFtdO1xuXG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdBbmdyeSBMaW9uJywgJ2xpb24nICkgKTtcblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ0JpZyBCZWFyJywgJ2JlYXInICkgKTtcblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ0dpYW50IEdvcmlsbGEnLCAnZ29yaWxsYScgKSApO1xuXHRcdHRoaXMuYW5pbWFscy5wdXNoKCBuZXcgQW5pbWFsKCAnUmFnaW5nIFRpZ2VyJywgJ3RpZ2VyJyApICk7XG5cblxuXG5cdH1cblxuXHRcblxufS8vZW5kIG9mIGNsYXNzIiwiLy9tYXN0ZXIgb2JqXG5pbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG4vL3NjcmVlbiBvYmpcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnOyAvL25ldmVyIGRpcmVjdGx5IHZpc2libGUsIHVzZWQgdG8gY29uc3RydWN0IHZpc2libGUgc2NyZWVucy5cbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgTG9zdFNjcmVlbiBmcm9tICcuL0xvc3RTY3JlZW4uanMnO1xuaW1wb3J0IFdvblNjcmVlbiBmcm9tICcuL1dvblNjcmVlbi5qcyc7XG5cbi8vSFVEIG9ialxuaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7IC8vbmV2ZXIgZGlyZWN0bHkgdmlzaWJsZSwgdXNlZCB0byBjb25zdHJ1Y3QgdmlzaWJsZSBzY3JlZW5zLlxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuXG4vL3N0YXRpYyBvYmpcbmltcG9ydCBTdGF0aWMgZnJvbSAnLi9TdGF0aWMuanMnO1xuaW1wb3J0IFpvbyBmcm9tICcuL1pvby5qcyc7XG5pbXBvcnQgQ2FnZXMgZnJvbSAnLi9DYWdlcy5qcyc7XG5cbi8vZHluYW1pYyBvYmpcbmltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuXG5jb25zb2xlLmxvZygnbG9hZGluZyBnYW1lLicpO1xuXG4vL2dsb2JhbCBzdG9yYWdlXG53aW5kb3cuZ2FtZVNjcmVlbnMgPSBbXTtcblxubGV0IHN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKCdzdGFydCcsIHdpbmRvdy5nYW1lU2NyZWVucyk7XG5jb25zb2xlLmxvZyhcIlNUQVJUU0NSRUVOIElTIEE6XCIgKyB0eXBlb2Ygc3RhcnRTY3JlZW4pXG53aW5kb3cuZ2FtZVNjcmVlbnNbICdzdGFydCcgXSA9IHN0YXJ0U2NyZWVuO1xuXG5sZXQgZ2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKCdnYW1lJywgd2luZG93LmdhbWVTY3JlZW5zKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ2dhbWUnIF0gPSBnYW1lU2NyZWVuO1xuXG5sZXQgbG9zdFNjcmVlbiA9IG5ldyBMb3N0U2NyZWVuKCdsb3N0Jywgd2luZG93LmdhbWVTY3JlZW5zKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ2xvc3QnIF0gPSBsb3N0U2NyZWVuO1xuXG5sZXQgd29uU2NyZWVuID0gbmV3IFdvblNjcmVlbignd29uJywgd2luZG93LmdhbWVTY3JlZW5zKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ3dvbicgXSA9IHdvblNjcmVlbjtcblxuY29uc29sZS5sb2coXCJnYW1lU2NyZWVuczpcIiArIHR5cGVvZiB3aW5kb3cuZ2FuZVNjcmVlbnMpO1xuXG53aW5kb3cuc2NvcmUgPSBuZXcgU2NvcmUoJ2dhbWUgc2NvcmUnKTtcblxuXG4vL3dpbmRvdy5zY29yZSA9IG5ldyBTY29yZSgnZ2FtZSBzY29yZSBvYmplY3QnKTtcblxuLy93aW5kb3cuc3RhdGljID0gbmV3IFN0YXRpYygnU3RhdGljIHNjcmVlbiBvYmplY3QnKTtcblxuLy93aW5kb3cuZHluYW1pYyA9IG5ldyBEeW5hbWljKCdTdGF0aWMgc2NyZWVuIG9iamVjdCcpO1xuXG4vL3dpbmRvdy56b28gPSBuZXcgWm9vKCdab28gb2JqZWN0Jyk7XG5cbi8vd2luZG93LmNhZ2VzID0gbmV3IENhZ2VzKCdDYWdlcyBvYmplY3QnKTtcblxuLy93aW5kb3cuYW5pbWFsID0gbmV3IEFuaW1hbCgnQW5pbWFsIG9iamVjdCcpO1xuXG4vL3dpbmRvdy50cnVtcCA9IG5ldyBUcnVtcCgnVHJ1bXAgb2JqZWN0Jyk7XG5cbi8vd2luZG93LnBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllciBvYmplY3QnKTtcblxuLy9zdGFydCBnYW1lLi4uXG5cbi8vIGF0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGJ1dHRvbnMgb24gdGhlIHN0YXJ0IHNjcmVlbi5cblxuLy9zcGVjaWZ5IHdoYXQgZWFjaCBidXR0b24gZG9lcyBpbiBjb2RlXG5cbi8vIE1ha2UgdGhlIHN0YXJ0IHNjcmVlbiB2aXNpYmxlIFxuXG5zdGFydFNjcmVlbi5zaG93KCk7XG5cblxuXG5cbi8vIENyZWF0ZSBhIGdlbmVyaWMgR2FtZU9ialxuXG4vL3dpbmRvdy5vYmoxID0gbmV3IEdhbWVPYmooJ2RvbmFsZCB0cnVtcCcpO1xuXG4vL3dpbmRvdy5vYmoyID0gbmV3IFNjcmVlbignc3RhcnQgc2NyZWVuJyk7XG5cbi8vd2luZG93Lm9iajMgPSBuZXcgSFVEKCdnYW1lIHNjb3JlJyk7Il19
