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

	function Animal(name) {
		_classCallCheck(this, Animal);

		console.log('in Animal name:' + name);

		return _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, name));
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

	function Cages(name) {
		_classCallCheck(this, Cages);

		console.log('in a Zoo Cages, name:' + name);

		// grab a cage from the dom

		var _this = _possibleConstructorReturn(this, (Cages.__proto__ || Object.getPrototypeOf(Cages)).call(this, name));

		_this.dom = document.createElement('div');

		//set background image

		_this.setBackgroundImage('img/areas/cage.png');

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

			this.trump = new _Trump2.default('Donald President Trump');

			//add player

			this.player = new _Player2.default('myself');
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

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Dynamic) {
	_inherits(Player, _Dynamic);

	function Player(name) {
		_classCallCheck(this, Player);

		console.log('in Player object name:' + name);

		return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name));
	} // end of construct

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

			alert(' I am in screen:' + _this.name);

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

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trump = function (_Dynamic) {
	_inherits(Trump, _Dynamic);

	function Trump(name) {
		_classCallCheck(this, Trump);

		console.log('in Trump name:' + name);

		return _possibleConstructorReturn(this, (Trump.__proto__ || Object.getPrototypeOf(Trump)).call(this, name));
	} // end of construct

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

			this.cages.push(new _Cages2.default('Cage #1'));
			this.cages.push(new _Cages2.default('Cage #2'));
			this.cages.push(new _Cages2.default('Cage #3'));
			this.cages.push(new _Cages2.default('Cage #4'));

			for (var i = 0; i < this.cages.length; i++) {

				this.dom.appendChild(this.cages[i].dom);
			}

			this.animals = [];

			this.animals.push(new _Animal2.default('lion'));
			this.animals.push(new _Animal2.default('bear'));
			this.animals.push(new _Animal2.default('gorilla'));
			this.animals.push(new _Animal2.default('tiger'));
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

window.score = new _Score2.default('game score object');

window.static = new _Static2.default('Static screen object');

window.dynamic = new _Dynamic2.default('Static screen object');

window.zoo = new _Zoo2.default('Zoo object');

window.cages = new _Cages2.default('Cages object');

window.animal = new _Animal2.default('Animal object');

window.trump = new _Trump2.default('Trump object');

window.player = new _Player2.default('Player object');

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZXMuanMiLCJtb2R1bGVzL2pzL0R5bmFtaWMuanMiLCJtb2R1bGVzL2pzL0dhbWVPYmouanMiLCJtb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMiLCJtb2R1bGVzL2pzL0hVRC5qcyIsIm1vZHVsZXMvanMvTG9zdFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvV29uU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9ab28uanMiLCJtb2R1bGVzL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztJQUVxQixNOzs7QUFFcEIsaUJBQWMsSUFBZCxFQUFxQjtBQUFBOztBQUVwQixVQUFRLEdBQVIsQ0FBWSxvQkFBb0IsSUFBaEM7O0FBRm9CLHlHQUlkLElBSmM7QUFNcEIsRSxDQUFBOzs7c0JBRUQ7OztrQkFWb0IsTTs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBRXBCLGdCQUFjLElBQWQsRUFBcUI7QUFBQTs7QUFFcEIsVUFBUSxHQUFSLENBQVksMEJBQTBCLElBQXRDOztBQUlEOztBQU5xQiw0R0FJZCxJQUpjOztBQVFyQixRQUFLLEdBQUwsR0FBVyxTQUFTLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBWDs7QUFFQTs7QUFFQSxRQUFLLGtCQUFMLENBQXdCLG9CQUF4Qjs7QUFacUI7QUFjcEIsRSxDQUFBOzs7cUJBRUQ7OztrQkFsQm9CLEs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBRXFCLE87OztBQUVw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QUVBLFlBQVksSUFBWjs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIER5bmFtaWMge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBBbmltYWwgbmFtZTonICsgbmFtZSk7XG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlcyBleHRlbmRzIFN0YXRpYyB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIGEgWm9vIENhZ2VzLCBuYW1lOicgKyBuYW1lKTtcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdC8vIGdyYWIgYSBjYWdlIGZyb20gdGhlIGRvbVxuXG5cdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblxuXHQvL3NldCBiYWNrZ3JvdW5kIGltYWdlXG5cblx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoJ2ltZy9hcmVhcy9jYWdlLnBuZycpO1xuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0XG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pYyBleHRlbmRzIEdhbWVPYmoge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBEeW5hbWljJylcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0XG5cbn0vL2VuZCBvZiBjbGFzcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmoge1xuXG5cdC8vaW5oZXJpdHMgZnJvbSBnZW5lcmljIEpTIE9iamVjdDtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gR2FtZU9iaicpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblxuXHRcdHRoaXMuaWQgPSB0aGlzLnNldElkKCk7XG5cblx0fSAvL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdC8qKlxuXHQqZ2V0IHRoZSB1bmlxdWUgSUQgdmFsdWUgZm9yIGFuIG9iamVjdC5cblx0KkByZXR1cm5zIHtzdHJpbmdzfSB0aGUgdW5pcXVlIGlkLCBpbiB1dWlkIGZvcm1hdC5cblx0Ki9cblx0Z2V0SWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMgLmlkO1xuXHR9XG5cblx0LyoqXG5cdCpnZXQgdGhlIG5hbWUgYXNzaWduZWQgdG8gdGhpcyBvYmplY3Rcblx0KkByZXR1cm5zIHtzdHJpbmdzfSB0aGUgbmFtZS5cblx0Ki9cblx0Z2V0TmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXHR9XG5cblx0LyoqXG5cdCpzZXQgdGhlIG9iamVjdHMgbmFtZSB0byBhIG5ldyB2YWx1ZS5cblx0KkByZXR1cm5zIHtzdHJpbmdzfSBuZXdOYW1lIHRoZSBuZXcgbmFtZSB0byB1c2UuXG5cdCovXG5cdHNldE5hbWUoIG5ld05hbWUgKSB7XG5cdFx0dGhpcy5uYW1lID0gbmV3TmFtZTtcblx0fVxuXG5cdHNob3cgKCkge1xuXG5cdFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG5cblx0fVxuXG5cdGhpZGUgKCkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cdH1cblxuXHQvKipcblx0KkxvYWQgaW1hZ2Vcblx0KmNzcyBiYWNrZ3JvdW5kIGltYWdlXG5cdCpAcGFyYW0ge3N0cmluZ30gaW1nUGF0aCB0aGUgcGF0aCB0byBpbWFnZVxuXHQqL1xuXHRzZXRCYWNrZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBpbWdQYXRoICsgXCInKVwiO1xuXG5cdH1cblxuXHRzZXRGb3JlZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHRsZXQgaW1nID0gbmV3IEltYWdlKCk7XG5cblx0XHRpbWcuc3JjID0gaW1nUGF0aDtcblxuXHRcdHRoaXMuZG9tLmFwcGVuZENoaWxkKCBpbWcgKTtcblx0fVxuXG5cdC8vc2V0IHNpemUgaW4gcGl4ZWxzXG5cblx0c2V0U2l6ZSggd2lkdGgsIGhlaWdodCApIHtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXHRcdHRoaXMuZG9tLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cblxuXHR9XG5cblx0Ly9zZXQgcG9zaXRpb24gcmVsYXRpdmUgdG8gc2NyZWVuXG5cblx0c2V0UG9zaXRpb24oIHRvcCwgbGVmdCApIHtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG5cdFx0dGhpcy5kb20uc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuXG5cdH1cblxuXHQvKiogXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICAgICAqQHJldHVybnMge3N0cmluZ3N9IHRoZSB1bmlxdWUgaWQgaW4gdXVpZCBmb3JtYXQuXG4gICAgICovXG4gICAgc2V0SWQgKCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG4gICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuXG4gICAgfSAvL2VuZCBvZiBzZXQgSURcblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcydcbmltcG9ydCBab28gZnJvbSAnLi9ab28uanMnXG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcydcbmltcG9ydCBQbGF5ZXIgZnJvbScuL1BsYXllci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIEdhbWVTY3JlZW4nKTtcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuJyk7XG5cblx0Ly9zZXQgYmFja2dyb3VuZFxuXG5cdHRoaXMuc2V0QmFja2dyb3VuZEltYWdlKCdpbWcvc2NyZWVucy9nYW1lLXNjcmVlbi5wbmcnKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG5cdC8qKlxuXHQqY3JlYXRlIGdhbWUgb2JqZWN0c1xuXHQqL1xuXHRidWlsZCAoKSB7XG5cblx0XHRjb25zb2xlLmxvZyggJ2J1aWxkaW5nIHRoZSBnYW1lLi4uJyk7XG5cblx0XHQvL2FkZCBhIHpvbyBhbmQgNCBjZ2Flc1xuXG5cdFx0dGhpcy56b28gPSBuZXcgWm9vKCdGdW5reSBab28nKTtcblxuXHRcdHRoaXMuem9vLmJ1aWxkKCk7IC8vbWFrZSB6b28gY2FnZXMgYW5kIGFuaW1hbHNcblxuXHRcdHRoaXMuZG9tLmFwcGVuZENoaWxkKCB0aGlzLnpvby5kb20gKTtcblxuXHRcdC8vYWRkIHRydW1wXG5cblx0XHR0aGlzLnRydW1wID0gbmV3IFRydW1wKCdEb25hbGQgUHJlc2lkZW50IFRydW1wJyk7XG5cblx0XHQvL2FkZCBwbGF5ZXJcblxuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllcignbXlzZWxmJyk7XG5cblx0fVxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVUQgZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBIVUQnKTtcblxuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0XG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9zdFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIExvc3RTY3JlZW4nKVxuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9zdC1zY3JlZW4nKTtcblxuXHQvL3NldCBiYWNrZ3JvdW5kXG5cblx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoJ2ltZy9zY3JlZW5zL2xvc3Qtc2NyZWVuLnBuZycpO1xuXG5cdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTtcblxuXHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIER5bmFtaWMge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBQbGF5ZXIgb2JqZWN0IG5hbWU6JyArIG5hbWUpO1xuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0fS8vIGVuZCBvZiBjb25zdHJ1Y3RcblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgSFVEIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBTY29yZScpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NvcmUnKTtcblxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxuXHRcblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVucyApIHtcblx0XG5cdFx0Y29uc29sZS5sb2coJ2luIFNjcmVlbicpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuc2NyZWVucyA9IHNjcmVlbnM7XG5cblxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0Z2V0U3RhcnRCdXR0b24oKSB7XG5cblx0XHR0aGlzLnN0YXJ0QnV0dG9uID0gdGhpcy5kb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ2dhbWUtc3RhcnQnIClbIDAgXTtcblxuXG5cdH1cblxuXHRnZXRFeGl0QnV0dG9uKCkge1xuXG5cdFx0dGhpcy5leGl0QnV0dG9uID0gdGhpcy5kb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ2dhbWUtZXhpdCcgKVsgMCBdO1xuXHR9XG5cbn0gLy9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5zICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFN0YXJ0U2NyZWVuLCBuYW1lOicgKyBuYW1lICsgJyBzY3JlZW5zOicgKyB0eXBlb2Ygc2NyZWVucyk7XG5cblx0c3VwZXIoIG5hbWUsIHNjcmVlbnMgKTtcblxuXHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3RhcnQtc2NyZWVuJyApO1xuXG5cdC8vIHNldCBiYWNrZ3JvdW5kIGltYWdlXG5cblx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoJ2ltZy9zY3JlZW5zL3N0YXJ0LXNjcmVlbi5wbmcnKTtcblxuXHRjb25zb2xlLmxvZyhcIlNDUkVFTlMgSVMgQTpcIiArIHR5cGVvZiBzY3JlZW5zKVxuXG5cdGNvbnNvbGUubG9nKFwiVEhJUy5TQ1JFRU5TIElTIEE6XCIgKyB0eXBlb2YgdGhpcy5zY3JlZW5zKVxuXG5cblx0Ly9zZWFyY2ggZm9yIHN0YXJ0IGJ1dHRvbiBcblx0Ly9OT1RFOiB3aWxsIGZhaWwgaWYgbm8gYnV0dG9uIHByZXNlbnRcblxuXHR0aGlzLmdldFN0YXJ0QnV0dG9uKCk7IC8vIGRlZmluZSBpbiBTY3JlZW4uanNcblxuXHRcdC8vY29uc29sZS5sb2coXCJTVEFSVCBCVVRUT04gSVMgQS4uLlwiICsgdGhpcy5zdGFydEJ1dHRvbilcblxuXHR0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcblxuXHRcdGFsZXJ0KCcgSSBhbSBpbiBzY3JlZW46JyArIHRoaXMubmFtZSApO1xuXG5cdFx0dGhpcy5zY3JlZW5zWyAnc3RhcnQnIF0uaGlkZSgpOyAvL2hpZGUgbXlzZWxmXG5cblx0XHR0aGlzLnNjcmVlbnNbICdnYW1lJyBdLnNob3coKTsgLy9zaG93IGdhbWUgc2NyZWVuXG5cblx0XHR0aGlzLnNjcmVlbnNbICdnYW1lJyBdLmJ1aWxkKCk7IC8vcmVidWlsZCBnYW1lXG5cblxuXHR9ICk7XG5cblx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpYyBleHRlbmRzIEdhbWVPYmoge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBTdGF0aWMnKVxuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0fS8vIGVuZCBvZiBjb25zdHJ1Y3RcblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcnVtcCBleHRlbmRzIER5bmFtaWMge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBUcnVtcCBuYW1lOicgKyBuYW1lKTtcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0XG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvblNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFdvblNjcmVlbicpXG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29uLXNjcmVlbicpO1xuXG5cdFx0Ly9zZXQgYmFja2dyb3VuZFxuXG5cdFx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoJ2ltZy9zY3JlZW5zL3dvbi1zY3JlZW4ucG5nJyk7XG5cblx0fS8vIGVuZCBvZiBjb25zdHJ1Y3RcblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcydcbmltcG9ydCBDYWdlcyBmcm9tICcuL0NhZ2VzLmpzJ1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vIGV4dGVuZHMgU3RhdGljIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gWm9vJylcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG5cdGJ1aWxkKCkge1xuXG5cdFx0Y29uc29sZS5sb2coICdpbiBab28gYnVpbGQuLi4nKTtcblxuXHRcdHRoaXMuY2FnZXMgPSBbXTtcblxuXHRcdHRoaXMuY2FnZXMucHVzaCggbmV3IENhZ2VzKCdDYWdlICMxJykgKTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlcygnQ2FnZSAjMicpICk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZXMoJ0NhZ2UgIzMnKSApO1xuXHRcdHRoaXMuY2FnZXMucHVzaCggbmV3IENhZ2VzKCdDYWdlICM0JykgKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYWdlcy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHR0aGlzLmRvbS5hcHBlbmRDaGlsZCggdGhpcy5jYWdlc1sgaSBdLmRvbSApO1xuXHRcdH1cblxuXHRcdHRoaXMuYW5pbWFscyA9IFtdO1xuXG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdsaW9uJyApICk7XG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdiZWFyJyApICk7XG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdnb3JpbGxhJyApICk7XG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICd0aWdlcicgKSApO1xuXG5cblxuXHR9XG5cblx0XG5cbn0vL2VuZCBvZiBjbGFzcyIsIi8vbWFzdGVyIG9ialxuaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuLy9zY3JlZW4gb2JqXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJzsgLy9uZXZlciBkaXJlY3RseSB2aXNpYmxlLCB1c2VkIHRvIGNvbnN0cnVjdCB2aXNpYmxlIHNjcmVlbnMuXG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IExvc3RTY3JlZW4gZnJvbSAnLi9Mb3N0U2NyZWVuLmpzJztcbmltcG9ydCBXb25TY3JlZW4gZnJvbSAnLi9Xb25TY3JlZW4uanMnO1xuXG4vL0hVRCBvYmpcbmltcG9ydCBIVUQgZnJvbSAnLi9IVUQuanMnOyAvL25ldmVyIGRpcmVjdGx5IHZpc2libGUsIHVzZWQgdG8gY29uc3RydWN0IHZpc2libGUgc2NyZWVucy5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcblxuLy9zdGF0aWMgb2JqXG5pbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcbmltcG9ydCBab28gZnJvbSAnLi9ab28uanMnO1xuaW1wb3J0IENhZ2VzIGZyb20gJy4vQ2FnZXMuanMnO1xuXG4vL2R5bmFtaWMgb2JqXG5pbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcblxuY29uc29sZS5sb2coJ2xvYWRpbmcgZ2FtZS4nKTtcblxuLy9nbG9iYWwgc3RvcmFnZVxud2luZG93LmdhbWVTY3JlZW5zID0gW107XG5cbmxldCBzdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbignc3RhcnQnLCB3aW5kb3cuZ2FtZVNjcmVlbnMpO1xuY29uc29sZS5sb2coXCJTVEFSVFNDUkVFTiBJUyBBOlwiICsgdHlwZW9mIHN0YXJ0U2NyZWVuKVxud2luZG93LmdhbWVTY3JlZW5zWyAnc3RhcnQnIF0gPSBzdGFydFNjcmVlbjtcblxubGV0IGdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbignZ2FtZScsIHdpbmRvdy5nYW1lU2NyZWVucyk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICdnYW1lJyBdID0gZ2FtZVNjcmVlbjtcblxubGV0IGxvc3RTY3JlZW4gPSBuZXcgTG9zdFNjcmVlbignbG9zdCcsIHdpbmRvdy5nYW1lU2NyZWVucyk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICdsb3N0JyBdID0gbG9zdFNjcmVlbjtcblxubGV0IHdvblNjcmVlbiA9IG5ldyBXb25TY3JlZW4oJ3dvbicsIHdpbmRvdy5nYW1lU2NyZWVucyk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICd3b24nIF0gPSB3b25TY3JlZW47XG5cbmNvbnNvbGUubG9nKFwiZ2FtZVNjcmVlbnM6XCIgKyB0eXBlb2Ygd2luZG93LmdhbmVTY3JlZW5zKTtcblxud2luZG93LnNjb3JlID0gbmV3IFNjb3JlKCdnYW1lIHNjb3JlJyk7XG5cblxud2luZG93LnNjb3JlID0gbmV3IFNjb3JlKCdnYW1lIHNjb3JlIG9iamVjdCcpO1xuXG53aW5kb3cuc3RhdGljID0gbmV3IFN0YXRpYygnU3RhdGljIHNjcmVlbiBvYmplY3QnKTtcblxud2luZG93LmR5bmFtaWMgPSBuZXcgRHluYW1pYygnU3RhdGljIHNjcmVlbiBvYmplY3QnKTtcblxud2luZG93LnpvbyA9IG5ldyBab28oJ1pvbyBvYmplY3QnKTtcblxud2luZG93LmNhZ2VzID0gbmV3IENhZ2VzKCdDYWdlcyBvYmplY3QnKTtcblxud2luZG93LmFuaW1hbCA9IG5ldyBBbmltYWwoJ0FuaW1hbCBvYmplY3QnKTtcblxud2luZG93LnRydW1wID0gbmV3IFRydW1wKCdUcnVtcCBvYmplY3QnKTtcblxud2luZG93LnBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllciBvYmplY3QnKTtcblxuLy9zdGFydCBnYW1lLi4uXG5cbi8vIGF0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGJ1dHRvbnMgb24gdGhlIHN0YXJ0IHNjcmVlbi5cblxuLy9zcGVjaWZ5IHdoYXQgZWFjaCBidXR0b24gZG9lcyBpbiBjb2RlXG5cbi8vIE1ha2UgdGhlIHN0YXJ0IHNjcmVlbiB2aXNpYmxlIFxuXG5zdGFydFNjcmVlbi5zaG93KCk7XG5cblxuXG5cbi8vIENyZWF0ZSBhIGdlbmVyaWMgR2FtZU9ialxuXG4vL3dpbmRvdy5vYmoxID0gbmV3IEdhbWVPYmooJ2RvbmFsZCB0cnVtcCcpO1xuXG4vL3dpbmRvdy5vYmoyID0gbmV3IFNjcmVlbignc3RhcnQgc2NyZWVuJyk7XG5cbi8vd2luZG93Lm9iajMgPSBuZXcgSFVEKCdnYW1lIHNjb3JlJyk7Il19
