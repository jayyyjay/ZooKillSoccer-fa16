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

		console.log('in Animal');

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

		console.log('in Cages');

		return _possibleConstructorReturn(this, (Cages.__proto__ || Object.getPrototypeOf(Cages)).call(this, name));
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

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

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

		return _this;
	} // end of construct

	return GameScreen;
}(_Screen3.default); //end of class


exports.default = GameScreen;

},{"./Screen.js":10}],6:[function(require,module,exports){
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

		console.log('in Player');

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

	function Screen(name) {
		_classCallCheck(this, Screen);

		console.log('in Screen');

		return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, name));
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

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartScreen = function (_Screen) {
	_inherits(StartScreen, _Screen);

	function StartScreen(name) {
		_classCallCheck(this, StartScreen);

		console.log('in StartScreen');

		var _this = _possibleConstructorReturn(this, (StartScreen.__proto__ || Object.getPrototypeOf(StartScreen)).call(this, name));

		_this.dom = document.getElementById('start-screen');

		_this.getStartButton(); // define in Screen.js

		//console.log("START BUTTON IS A..." + this.startButton)

		_this.startButton.addEventListener('click', function () {

			alert(' I am in screen:' + this.name);

			window.gameScreens['start'].hide(); //hide myself

			window.gameScreens['game'].show();
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

		console.log('in Trump');

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

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zoo = function (_Static) {
	_inherits(Zoo, _Static);

	function Zoo(name) {
		_classCallCheck(this, Zoo);

		console.log('in Zoo');

		return _possibleConstructorReturn(this, (Zoo.__proto__ || Object.getPrototypeOf(Zoo)).call(this, name));
	} // end of construct

	return Zoo;
}(_Static3.default); //end of class


exports.default = Zoo;

},{"./Static.js":12}],16:[function(require,module,exports){
'use strict';

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

//dynamic obj
//never directly visible, used to construct visible screens.


//screen obj
console.log('loading game.');

//global storage


//static obj


//HUD obj
//never directly visible, used to construct visible screens.
//master obj
window.gameScreens = [];

window.startScreen = new _StartScreen2.default('start');
window.gameScreens['start'] = window.startScreen;

window.gameScreen = new _GameScreen2.default('game');
window.gameScreens['game'] = window.gameScreen;

window.lostScreen = new _LostScreen2.default('lost');
window.gameScreens['lost'] = window.lostScreen;

window.wonscreen = new _WonScreen2.default('won');
window.gameScreens['won'] = window.wonScreen;

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

window.startScreen.show();

// Create a generic GameObj

//window.obj1 = new GameObj('donald trump');

//window.obj2 = new Screen('start screen');

//window.obj3 = new HUD('game score');

},{"./Animal.js":1,"./Cages.js":2,"./Dynamic.js":3,"./GameObj.js":4,"./GameScreen.js":5,"./HUD.js":6,"./LostScreen.js":7,"./Player.js":8,"./Score.js":9,"./Screen.js":10,"./StartScreen.js":11,"./Static.js":12,"./Trump.js":13,"./WonScreen.js":14,"./Zoo.js":15}]},{},[16])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZXMuanMiLCJtb2R1bGVzL2pzL0R5bmFtaWMuanMiLCJtb2R1bGVzL2pzL0dhbWVPYmouanMiLCJtb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMiLCJtb2R1bGVzL2pzL0hVRC5qcyIsIm1vZHVsZXMvanMvTG9zdFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvV29uU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9ab28uanMiLCJtb2R1bGVzL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztJQUVxQixNOzs7QUFFcEIsaUJBQWMsSUFBZCxFQUFxQjtBQUFBOztBQUVwQixVQUFRLEdBQVIsQ0FBWSxXQUFaOztBQUZvQix5R0FJZCxJQUpjO0FBTXBCLEUsQ0FBQTs7O3NCQUVEOzs7a0JBVm9CLE07Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBRXFCLEs7OztBQUVwQixnQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVBQVEsR0FBUixDQUFZLFVBQVo7O0FBRm9CLHVHQUlkLElBSmM7QUFNcEIsRSxDQUFBOzs7cUJBRUQ7OztrQkFWb0IsSzs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFFcUIsTzs7O0FBRXBCLGtCQUFjLElBQWQsRUFBcUI7QUFBQTs7QUFFcEIsVUFBUSxHQUFSLENBQVksWUFBWjs7QUFGb0IsMkdBSWQsSUFKYztBQU1wQixFLENBQUE7OztzQkFFRDs7O2tCQVZvQixPOzs7Ozs7Ozs7Ozs7O0lD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T0FBTyxXQUFQLEdBQXFCLEVBQXJCOztBQUdBLE9BQU8sV0FBUCxHQUFxQiwwQkFBZ0IsT0FBaEIsQ0FBckI7QUFDQSxPQUFPLFdBQVAsQ0FBb0IsT0FBcEIsSUFBZ0MsT0FBTyxXQUF2Qzs7QUFFQSxPQUFPLFVBQVAsR0FBb0IseUJBQWUsTUFBZixDQUFwQjtBQUNBLE9BQU8sV0FBUCxDQUFvQixNQUFwQixJQUErQixPQUFPLFVBQXRDOztBQUVBLE9BQU8sVUFBUCxHQUFvQix5QkFBZSxNQUFmLENBQXBCO0FBQ0EsT0FBTyxXQUFQLENBQW9CLE1BQXBCLElBQStCLE9BQU8sVUFBdEM7O0FBRUEsT0FBTyxTQUFQLEdBQW1CLHdCQUFjLEtBQWQsQ0FBbkI7QUFDQSxPQUFPLFdBQVAsQ0FBb0IsS0FBcEIsSUFBNkIsT0FBTyxTQUFwQzs7QUFJQSxPQUFPLEtBQVAsR0FBZSxvQkFBVSxtQkFBVixDQUFmOztBQUVBLE9BQU8sTUFBUCxHQUFnQixxQkFBVyxzQkFBWCxDQUFoQjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsc0JBQVksc0JBQVosQ0FBakI7O0FBRUEsT0FBTyxHQUFQLEdBQWEsa0JBQVEsWUFBUixDQUFiOztBQUVBLE9BQU8sS0FBUCxHQUFlLG9CQUFVLGNBQVYsQ0FBZjs7QUFFQSxPQUFPLE1BQVAsR0FBZ0IscUJBQVcsZUFBWCxDQUFoQjs7QUFFQSxPQUFPLEtBQVAsR0FBZSxvQkFBVSxjQUFWLENBQWY7O0FBRUEsT0FBTyxNQUFQLEdBQWdCLHFCQUFXLGVBQVgsQ0FBaEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTyxXQUFQLENBQW1CLElBQW5COztBQUtBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWFsIGV4dGVuZHMgRHluYW1pYyB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIEFuaW1hbCcpXG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlcyBleHRlbmRzIFN0YXRpYyB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIENhZ2VzJylcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0XG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pYyBleHRlbmRzIEdhbWVPYmoge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBEeW5hbWljJylcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0XG5cbn0vL2VuZCBvZiBjbGFzcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmoge1xuXG5cdC8vaW5oZXJpdHMgZnJvbSBnZW5lcmljIEpTIE9iamVjdDtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gR2FtZU9iaicpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblxuXHRcdHRoaXMuaWQgPSB0aGlzLnNldElkKCk7XG5cblx0fSAvL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdC8qKlxuXHQqZ2V0IHRoZSB1bmlxdWUgSUQgdmFsdWUgZm9yIGFuIG9iamVjdC5cblx0KkByZXR1cm5zIHtzdHJpbmdzfSB0aGUgdW5pcXVlIGlkLCBpbiB1dWlkIGZvcm1hdC5cblx0Ki9cblx0Z2V0SWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMgLmlkO1xuXHR9XG5cblx0LyoqXG5cdCpnZXQgdGhlIG5hbWUgYXNzaWduZWQgdG8gdGhpcyBvYmplY3Rcblx0KkByZXR1cm5zIHtzdHJpbmdzfSB0aGUgbmFtZS5cblx0Ki9cblx0Z2V0TmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXHR9XG5cblx0LyoqXG5cdCpzZXQgdGhlIG9iamVjdHMgbmFtZSB0byBhIG5ldyB2YWx1ZS5cblx0KkByZXR1cm5zIHtzdHJpbmdzfSBuZXdOYW1lIHRoZSBuZXcgbmFtZSB0byB1c2UuXG5cdCovXG5cdHNldE5hbWUoIG5ld05hbWUgKSB7XG5cdFx0dGhpcy5uYW1lID0gbmV3TmFtZTtcblx0fVxuXG5cdHNob3cgKCkge1xuXG5cdFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG5cblx0fVxuXG5cdGhpZGUgKCkge1xuXG5cdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cdH1cblxuXHQvKipcblx0KkxvYWQgaW1hZ2Vcblx0KmNzcyBiYWNrZ3JvdW5kIGltYWdlXG5cdCpAcGFyYW0ge3N0cmluZ30gaW1nUGF0aCB0aGUgcGF0aCB0byBpbWFnZVxuXHQqL1xuXHRzZXRCYWNrZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBpbWdQYXRoICsgXCInKVwiO1xuXG5cdH1cblxuXHRzZXRGb3JlZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHRsZXQgaW1nID0gbmV3IEltYWdlKCk7XG5cblx0XHRpbWcuc3JjID0gaW1nUGF0aDtcblxuXHRcdHRoaXMuZG9tLmFwcGVuZENoaWxkKCBpbWcgKTtcblx0fVxuXG5cdC8qKiBcbiAgICAgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZXZlcnkgZ2FtZSBvYmplY3QuXG4gICAgICogQGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XG4gICAgICpAcmV0dXJucyB7c3RyaW5nc30gdGhlIHVuaXF1ZSBpZCBpbiB1dWlkIGZvcm1hdC5cbiAgICAgKi9cbiAgICBzZXRJZCAoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG5cbiAgICB9IC8vZW5kIG9mIHNldCBJRFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gR2FtZVNjcmVlbicpO1xuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zY3JlZW4nKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVUQgZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBIVUQnKTtcblxuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0XG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9zdFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIExvc3RTY3JlZW4nKVxuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9zdC1zY3JlZW4nKTtcblxuXHR0aGlzLmdldFN0YXJ0QnV0dG9uKCk7XG5cblx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblx0fS8vIGVuZCBvZiBjb25zdHJ1Y3RcblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBEeW5hbWljIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gUGxheWVyJylcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0XG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBIVUQgZnJvbSAnLi9IVUQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIEhVRCB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gU2NvcmUnKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXNjb3JlJyk7XG5cblx0fSAvL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cblx0XG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgR2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cdFxuXHRcdGNvbnNvbGUubG9nKCdpbiBTY3JlZW4nKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0Z2V0U3RhcnRCdXR0b24oKSB7XG5cblx0XHR0aGlzLnN0YXJ0QnV0dG9uID0gdGhpcy5kb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ2dhbWUtc3RhcnQnIClbIDAgXTtcblxuXG5cdH1cblxuXHRnZXRFeGl0QnV0dG9uKCkge1xuXG5cdFx0dGhpcy5leGl0QnV0dG9uID0gdGhpcy5kb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ2dhbWUtZXhpdCcgKVsgMCBdO1xuXHR9XG5cbn0gLy9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFN0YXJ0U2NyZWVuJyk7XG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3RhcnQtc2NyZWVuJyApO1xuXG5cdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTsgLy8gZGVmaW5lIGluIFNjcmVlbi5qc1xuXG5cdFx0Ly9jb25zb2xlLmxvZyhcIlNUQVJUIEJVVFRPTiBJUyBBLi4uXCIgKyB0aGlzLnN0YXJ0QnV0dG9uKVxuXG5cdHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG5cdFx0YWxlcnQoJyBJIGFtIGluIHNjcmVlbjonICsgdGhpcy5uYW1lICk7XG5cblx0XHR3aW5kb3cuZ2FtZVNjcmVlbnMgWyAnc3RhcnQnIF0uaGlkZSgpOyAvL2hpZGUgbXlzZWxmXG5cblx0XHR3aW5kb3cuZ2FtZVNjcmVlbnNbICdnYW1lJyBdLnNob3coKTtcblxuXG5cdH0gKTtcblxuXHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljIGV4dGVuZHMgR2FtZU9iaiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFN0YXRpYycpXG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR9Ly8gZW5kIG9mIGNvbnN0cnVjdFxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydW1wIGV4dGVuZHMgRHluYW1pYyB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFRydW1wJylcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0XG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvblNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFdvblNjcmVlbicpXG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b24tc2NyZWVuJyk7XG5cblx0fS8vIGVuZCBvZiBjb25zdHJ1Y3RcblxufS8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vIGV4dGVuZHMgU3RhdGljIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gWm9vJylcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0vLyBlbmQgb2YgY29uc3RydWN0XG5cbn0vL2VuZCBvZiBjbGFzcyIsIi8vbWFzdGVyIG9ialxuaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuLy9zY3JlZW4gb2JqXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJzsgLy9uZXZlciBkaXJlY3RseSB2aXNpYmxlLCB1c2VkIHRvIGNvbnN0cnVjdCB2aXNpYmxlIHNjcmVlbnMuXG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IExvc3RTY3JlZW4gZnJvbSAnLi9Mb3N0U2NyZWVuLmpzJztcbmltcG9ydCBXb25TY3JlZW4gZnJvbSAnLi9Xb25TY3JlZW4uanMnO1xuXG4vL0hVRCBvYmpcbmltcG9ydCBIVUQgZnJvbSAnLi9IVUQuanMnOyAvL25ldmVyIGRpcmVjdGx5IHZpc2libGUsIHVzZWQgdG8gY29uc3RydWN0IHZpc2libGUgc2NyZWVucy5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcblxuLy9zdGF0aWMgb2JqXG5pbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcbmltcG9ydCBab28gZnJvbSAnLi9ab28uanMnO1xuaW1wb3J0IENhZ2VzIGZyb20gJy4vQ2FnZXMuanMnO1xuXG4vL2R5bmFtaWMgb2JqXG5pbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcblxuY29uc29sZS5sb2coJ2xvYWRpbmcgZ2FtZS4nKTtcblxuLy9nbG9iYWwgc3RvcmFnZVxud2luZG93LmdhbWVTY3JlZW5zID0gW107XG5cblxud2luZG93LnN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKCdzdGFydCcpO1xud2luZG93LmdhbWVTY3JlZW5zWyAnc3RhcnQnIF0gPSB3aW5kb3cuc3RhcnRTY3JlZW47XG5cbndpbmRvdy5nYW1lU2NyZWVuID0gbmV3IEdhbWVTY3JlZW4oJ2dhbWUnKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ2dhbWUnIF0gPSB3aW5kb3cuZ2FtZVNjcmVlbjtcblxud2luZG93Lmxvc3RTY3JlZW4gPSBuZXcgTG9zdFNjcmVlbignbG9zdCcpO1xud2luZG93LmdhbWVTY3JlZW5zWyAnbG9zdCcgXSA9IHdpbmRvdy5sb3N0U2NyZWVuO1xuXG53aW5kb3cud29uc2NyZWVuID0gbmV3IFdvblNjcmVlbignd29uJyk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICd3b24nIF0gPXdpbmRvdy53b25TY3JlZW47XG5cblxuXG53aW5kb3cuc2NvcmUgPSBuZXcgU2NvcmUoJ2dhbWUgc2NvcmUgb2JqZWN0Jyk7XG5cbndpbmRvdy5zdGF0aWMgPSBuZXcgU3RhdGljKCdTdGF0aWMgc2NyZWVuIG9iamVjdCcpO1xuXG53aW5kb3cuZHluYW1pYyA9IG5ldyBEeW5hbWljKCdTdGF0aWMgc2NyZWVuIG9iamVjdCcpO1xuXG53aW5kb3cuem9vID0gbmV3IFpvbygnWm9vIG9iamVjdCcpO1xuXG53aW5kb3cuY2FnZXMgPSBuZXcgQ2FnZXMoJ0NhZ2VzIG9iamVjdCcpO1xuXG53aW5kb3cuYW5pbWFsID0gbmV3IEFuaW1hbCgnQW5pbWFsIG9iamVjdCcpO1xuXG53aW5kb3cudHJ1bXAgPSBuZXcgVHJ1bXAoJ1RydW1wIG9iamVjdCcpO1xuXG53aW5kb3cucGxheWVyID0gbmV3IFBsYXllcignUGxheWVyIG9iamVjdCcpO1xuXG4vL3N0YXJ0IGdhbWUuLi5cblxuLy8gYXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYnV0dG9ucyBvbiB0aGUgc3RhcnQgc2NyZWVuLlxuXG4vL3NwZWNpZnkgd2hhdCBlYWNoIGJ1dHRvbiBkb2VzIGluIGNvZGVcblxuLy8gTWFrZSB0aGUgc3RhcnQgc2NyZWVuIHZpc2libGUgXG5cbndpbmRvdy5zdGFydFNjcmVlbi5zaG93KCk7XG5cblxuXG5cbi8vIENyZWF0ZSBhIGdlbmVyaWMgR2FtZU9ialxuXG4vL3dpbmRvdy5vYmoxID0gbmV3IEdhbWVPYmooJ2RvbmFsZCB0cnVtcCcpO1xuXG4vL3dpbmRvdy5vYmoyID0gbmV3IFNjcmVlbignc3RhcnQgc2NyZWVuJyk7XG5cbi8vd2luZG93Lm9iajMgPSBuZXcgSFVEKCdnYW1lIHNjb3JlJyk7Il19
