/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	__webpack_require__(4);

	var _componentsRootRoot = __webpack_require__(99);

	exports.Root = _interopRequire(_componentsRootRoot);

	var _componentsDocumentationDocumentationItem = __webpack_require__(2);

	exports.DocumentationItem = _interopRequire(_componentsDocumentationDocumentationItem);

	var _componentsDocumentationDocumentationList = __webpack_require__(3);

	exports.DocumentationList = _interopRequire(_componentsDocumentationDocumentationList);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword: 'BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color ' +
	        'double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject ' +
	        'Object StringDict StringList Table TableRow XML ' +
	        // Java keywords
	        'false synchronized int abstract float private char boolean static null if const ' +
	        'for true while long throw strictfp finally protected import native final return void ' +
	        'enum else break transient new catch instanceof byte super volatile case assert short ' +
	        'package default double public try this switch continue throws protected public private',
	      constant: 'P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI',
	      variable: 'displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key ' +
	        'keyCode pixels focused frameCount frameRate height width',
	      title: 'setup draw',
	      built_in: 'size createGraphics beginDraw createShape loadShape PShape arc ellipse line point ' +
	        'quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint ' +
	        'curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex ' +
	        'endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap ' +
	        'strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased ' +
	        'mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour ' +
	        'millis minute month second year background clear colorMode fill noFill noStroke stroke alpha ' +
	        'blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY ' +
	        'screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ' +
	        'ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle ' +
	        'pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf ' +
	        'nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset ' +
	        'box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings ' +
	        'loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput ' +
	        'createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings ' +
	        'saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale ' +
	        'shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal ' +
	        'pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap ' +
	        'blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont ' +
	        'loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil ' +
	        'constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees ' +
	        'radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _uiTypeSystem = __webpack_require__(7);

	var _uiTypeSystem2 = _interopRequireDefault(_uiTypeSystem);

	var _remarkable = __webpack_require__(10);

	var _remarkable2 = _interopRequireDefault(_remarkable);

	var _highlightJs = __webpack_require__(11);

	var _highlightJs2 = _interopRequireDefault(_highlightJs);

	var _DocumentationItemCss = __webpack_require__(8);

	var _DocumentationItemCss2 = _interopRequireDefault(_DocumentationItemCss);

	__webpack_require__(9);

	var md = new _remarkable2['default']({
	  highlight: function highlight(str, lang) {
	    if (lang && _highlightJs2['default'].getLanguage(lang)) {
	      try {
	        return _highlightJs2['default'].highlight(lang, str).value;
	      } catch (err) {}
	    }

	    try {
	      return _highlightJs2['default'].highlightAuto(str).value;
	    } catch (err) {}

	    return '';
	  }
	});

	var Documentation = (function (_React$Component) {
	  function Documentation(props) {
	    var _this = this;

	    _classCallCheck(this, Documentation);

	    _get(Object.getPrototypeOf(Documentation.prototype), 'constructor', this).call(this, props);

	    this.toggleExpanded = function () {
	      _this.setState(function (_ref) {
	        var expanded = _ref.expanded;
	        return {
	          expanded: !expanded
	        };
	      });
	    };

	    this.state = {
	      expanded: true
	    };
	  }

	  _inherits(Documentation, _React$Component);

	  _createClass(Documentation, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h3',
	          { className: _DocumentationItemCss2['default'].title },
	          this.props.title
	        ),
	        this.state.expanded && this.renderExpanded()
	      );
	    }
	  }, {
	    key: 'renderExpanded',
	    value: function renderExpanded() {
	      return _react2['default'].createElement(
	        _uiTypeSystem2['default'],
	        null,
	        _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md.render(this.props.content) } })
	      );
	    }
	  }]);

	  return Documentation;
	})(_react2['default'].Component);

	exports['default'] = Documentation;
	module.exports = exports['default'];

	// Ignore for now - leave expanded by default

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _DocumentationItem = __webpack_require__(2);

	var _DocumentationItem2 = _interopRequireDefault(_DocumentationItem);

	var DocumentationList = (function (_React$Component) {
	  function DocumentationList() {
	    _classCallCheck(this, DocumentationList);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(DocumentationList, _React$Component);

	  _createClass(DocumentationList, [{
	    key: 'render',
	    value: function render() {
	      var documentation = this.props.documentation;

	      var documentations = documentation && documentation.map(function (document) {
	        return _react2['default'].createElement(_DocumentationItem2['default'], document);
	      });

	      return _react2['default'].createElement(
	        'div',
	        null,
	        documentations
	      );
	    }
	  }]);

	  return DocumentationList;
	})(_react2['default'].Component);

	exports['default'] = DocumentationList;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = undefined;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin
	module.exports = {"title":"Root__title","version":"Root__version"};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _TypeSystemCss = __webpack_require__(12);

	var _TypeSystemCss2 = _interopRequireDefault(_TypeSystemCss);

	var TypeSystem = (function (_React$Component) {
	  function TypeSystem() {
	    _classCallCheck(this, TypeSystem);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(TypeSystem, _React$Component);

	  _createClass(TypeSystem, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: _TypeSystemCss2['default'].root },
	        this.props.children
	      );
	    }
	  }]);

	  return TypeSystem;
	})(_react2['default'].Component);

	exports['default'] = TypeSystem;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	module.exports = __webpack_require__(139);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var hljs = __webpack_require__(14);

	hljs.registerLanguage('1c', __webpack_require__(15));
	hljs.registerLanguage('actionscript', __webpack_require__(16));
	hljs.registerLanguage('apache', __webpack_require__(17));
	hljs.registerLanguage('applescript', __webpack_require__(18));
	hljs.registerLanguage('armasm', __webpack_require__(19));
	hljs.registerLanguage('xml', __webpack_require__(20));
	hljs.registerLanguage('asciidoc', __webpack_require__(21));
	hljs.registerLanguage('aspectj', __webpack_require__(22));
	hljs.registerLanguage('autohotkey', __webpack_require__(23));
	hljs.registerLanguage('avrasm', __webpack_require__(24));
	hljs.registerLanguage('axapta', __webpack_require__(25));
	hljs.registerLanguage('bash', __webpack_require__(26));
	hljs.registerLanguage('brainfuck', __webpack_require__(27));
	hljs.registerLanguage('cal', __webpack_require__(28));
	hljs.registerLanguage('capnproto', __webpack_require__(29));
	hljs.registerLanguage('ceylon', __webpack_require__(30));
	hljs.registerLanguage('clojure', __webpack_require__(31));
	hljs.registerLanguage('clojure-repl', __webpack_require__(32));
	hljs.registerLanguage('cmake', __webpack_require__(33));
	hljs.registerLanguage('coffeescript', __webpack_require__(34));
	hljs.registerLanguage('cpp', __webpack_require__(35));
	hljs.registerLanguage('cs', __webpack_require__(36));
	hljs.registerLanguage('css', __webpack_require__(37));
	hljs.registerLanguage('d', __webpack_require__(38));
	hljs.registerLanguage('markdown', __webpack_require__(39));
	hljs.registerLanguage('dart', __webpack_require__(40));
	hljs.registerLanguage('delphi', __webpack_require__(41));
	hljs.registerLanguage('diff', __webpack_require__(42));
	hljs.registerLanguage('django', __webpack_require__(43));
	hljs.registerLanguage('dns', __webpack_require__(44));
	hljs.registerLanguage('dockerfile', __webpack_require__(45));
	hljs.registerLanguage('dos', __webpack_require__(46));
	hljs.registerLanguage('dust', __webpack_require__(47));
	hljs.registerLanguage('elixir', __webpack_require__(48));
	hljs.registerLanguage('ruby', __webpack_require__(49));
	hljs.registerLanguage('erb', __webpack_require__(50));
	hljs.registerLanguage('erlang-repl', __webpack_require__(51));
	hljs.registerLanguage('erlang', __webpack_require__(52));
	hljs.registerLanguage('fix', __webpack_require__(53));
	hljs.registerLanguage('fortran', __webpack_require__(54));
	hljs.registerLanguage('fsharp', __webpack_require__(55));
	hljs.registerLanguage('gcode', __webpack_require__(56));
	hljs.registerLanguage('gherkin', __webpack_require__(57));
	hljs.registerLanguage('glsl', __webpack_require__(58));
	hljs.registerLanguage('go', __webpack_require__(59));
	hljs.registerLanguage('gradle', __webpack_require__(60));
	hljs.registerLanguage('groovy', __webpack_require__(61));
	hljs.registerLanguage('haml', __webpack_require__(62));
	hljs.registerLanguage('handlebars', __webpack_require__(63));
	hljs.registerLanguage('haskell', __webpack_require__(64));
	hljs.registerLanguage('haxe', __webpack_require__(65));
	hljs.registerLanguage('http', __webpack_require__(66));
	hljs.registerLanguage('inform7', __webpack_require__(67));
	hljs.registerLanguage('ini', __webpack_require__(68));
	hljs.registerLanguage('java', __webpack_require__(69));
	hljs.registerLanguage('javascript', __webpack_require__(70));
	hljs.registerLanguage('json', __webpack_require__(71));
	hljs.registerLanguage('julia', __webpack_require__(72));
	hljs.registerLanguage('kotlin', __webpack_require__(73));
	hljs.registerLanguage('lasso', __webpack_require__(74));
	hljs.registerLanguage('less', __webpack_require__(75));
	hljs.registerLanguage('lisp', __webpack_require__(76));
	hljs.registerLanguage('livecodeserver', __webpack_require__(13));
	hljs.registerLanguage('livescript', __webpack_require__(77));
	hljs.registerLanguage('lua', __webpack_require__(78));
	hljs.registerLanguage('makefile', __webpack_require__(79));
	hljs.registerLanguage('mathematica', __webpack_require__(80));
	hljs.registerLanguage('matlab', __webpack_require__(81));
	hljs.registerLanguage('mel', __webpack_require__(82));
	hljs.registerLanguage('mercury', __webpack_require__(83));
	hljs.registerLanguage('mizar', __webpack_require__(84));
	hljs.registerLanguage('monkey', __webpack_require__(85));
	hljs.registerLanguage('nginx', __webpack_require__(86));
	hljs.registerLanguage('nimrod', __webpack_require__(87));
	hljs.registerLanguage('nix', __webpack_require__(88));
	hljs.registerLanguage('nsis', __webpack_require__(89));
	hljs.registerLanguage('objectivec', __webpack_require__(90));
	hljs.registerLanguage('ocaml', __webpack_require__(91));
	hljs.registerLanguage('openscad', __webpack_require__(92));
	hljs.registerLanguage('oxygene', __webpack_require__(93));
	hljs.registerLanguage('parser3', __webpack_require__(94));
	hljs.registerLanguage('perl', __webpack_require__(95));
	hljs.registerLanguage('pf', __webpack_require__(96));
	hljs.registerLanguage('php', __webpack_require__(97));
	hljs.registerLanguage('powershell', __webpack_require__(98));
	hljs.registerLanguage('processing', __webpack_require__(1));
	hljs.registerLanguage('profile', __webpack_require__(100));
	hljs.registerLanguage('prolog', __webpack_require__(101));
	hljs.registerLanguage('protobuf', __webpack_require__(102));
	hljs.registerLanguage('puppet', __webpack_require__(103));
	hljs.registerLanguage('python', __webpack_require__(104));
	hljs.registerLanguage('q', __webpack_require__(105));
	hljs.registerLanguage('r', __webpack_require__(106));
	hljs.registerLanguage('rib', __webpack_require__(107));
	hljs.registerLanguage('roboconf', __webpack_require__(108));
	hljs.registerLanguage('rsl', __webpack_require__(109));
	hljs.registerLanguage('ruleslanguage', __webpack_require__(110));
	hljs.registerLanguage('rust', __webpack_require__(111));
	hljs.registerLanguage('scala', __webpack_require__(112));
	hljs.registerLanguage('scheme', __webpack_require__(113));
	hljs.registerLanguage('scilab', __webpack_require__(114));
	hljs.registerLanguage('scss', __webpack_require__(115));
	hljs.registerLanguage('smali', __webpack_require__(116));
	hljs.registerLanguage('smalltalk', __webpack_require__(117));
	hljs.registerLanguage('sml', __webpack_require__(118));
	hljs.registerLanguage('sql', __webpack_require__(119));
	hljs.registerLanguage('stata', __webpack_require__(120));
	hljs.registerLanguage('step21', __webpack_require__(121));
	hljs.registerLanguage('stylus', __webpack_require__(122));
	hljs.registerLanguage('swift', __webpack_require__(123));
	hljs.registerLanguage('tcl', __webpack_require__(124));
	hljs.registerLanguage('tex', __webpack_require__(125));
	hljs.registerLanguage('thrift', __webpack_require__(126));
	hljs.registerLanguage('tp', __webpack_require__(127));
	hljs.registerLanguage('twig', __webpack_require__(128));
	hljs.registerLanguage('typescript', __webpack_require__(129));
	hljs.registerLanguage('vala', __webpack_require__(130));
	hljs.registerLanguage('vbnet', __webpack_require__(131));
	hljs.registerLanguage('vbscript', __webpack_require__(132));
	hljs.registerLanguage('vbscript-html', __webpack_require__(133));
	hljs.registerLanguage('verilog', __webpack_require__(134));
	hljs.registerLanguage('vhdl', __webpack_require__(135));
	hljs.registerLanguage('vim', __webpack_require__(136));
	hljs.registerLanguage('x86asm', __webpack_require__(137));
	hljs.registerLanguage('xl', __webpack_require__(138));

	module.exports = hljs;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"TypeSystem__root"};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var VARIABLE = {
	    className: 'variable', begin: '\\b[gtps][A-Z]+[A-Za-z0-9_\\-]*\\b|\\$_[A-Z]+',
	    relevance: 0
	  };
	  var COMMENT_MODES = [
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.HASH_COMMENT_MODE,
	    hljs.COMMENT('--', '$'),
	    hljs.COMMENT('[^:]//', '$')
	  ];
	  var TITLE1 = hljs.inherit(hljs.TITLE_MODE, {
	    variants: [
	      {begin: '\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*'},
	      {begin: '\\b_[a-z0-9\\-]+'}
	    ]
	  });
	  var TITLE2 = hljs.inherit(hljs.TITLE_MODE, {begin: '\\b([A-Za-z0-9_\\-]+)\\b'});
	  return {
	    case_insensitive: false,
	    keywords: {
	      keyword:
	        '$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER ' +
	        'codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph ' +
	        'after byte bytes english the until http forever descending using line real8 with seventh ' +
	        'for stdout finally element word words fourth before black ninth sixth characters chars stderr ' +
	        'uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid ' +
	        'at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 ' +
	        'int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat ' +
	        'end repeat URL in try into switch to words https token binfile each tenth as ticks tick ' +
	        'system real4 by dateItems without char character ascending eighth whole dateTime numeric short ' +
	        'first ftp integer abbreviated abbr abbrev private case while if',
	      constant:
	        'SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE ' +
	        'QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO ' +
	        'six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five ' +
	        'quote empty one true return cr linefeed right backslash null seven tab three two ' +
	        'RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK ' +
	        'FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK',
	      operator:
	        'div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within ' +
	        'contains ends with begins the keys of keys',
	      built_in:
	        'put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode ' +
	        'base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum ' +
	        'cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress ' +
	        'constantNames cos date dateFormat decompress directories ' +
	        'diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global ' +
	        'globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset ' +
	        'keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders ' +
	        'libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 ' +
	        'longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge millisec ' +
	        'millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar ' +
	        'numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets ' +
	        'paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation ' +
	        'populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile ' +
	        'revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull ' +
	        'revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered ' +
	        'revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames ' +
	        'revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull ' +
	        'revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections ' +
	        'revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype ' +
	        'revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext ' +
	        'revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames ' +
	        'revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase ' +
	        'revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute ' +
	        'revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces ' +
	        'revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode ' +
	        'revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling ' +
	        'revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error ' +
	        'revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute ' +
	        'revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort ' +
	        'revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree ' +
	        'revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance ' +
	        'sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound ' +
	        'stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper ' +
	        'transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames ' +
	        'variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet ' +
	        'xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process ' +
	        'combine constant convert create new alias folder directory decrypt delete variable word line folder ' +
	        'directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile ' +
	        'libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback ' +
	        'libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime ' +
	        'libURLSetStatusCallback load multiply socket prepare process post seek rel relative read from process rename ' +
	        'replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase ' +
	        'revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees ' +
	        'revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord ' +
	        'revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase ' +
	        'revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD ' +
	        'revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost ' +
	        'revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData ' +
	        'revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel ' +
	        'revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback ' +
	        'revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop ' +
	        'subtract union unload wait write'
	    },
	    contains: [
	      VARIABLE,
	      {
	        className: 'keyword',
	        begin: '\\bend\\sif\\b'
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '$',
	        contains: [
	          VARIABLE,
	          TITLE2,
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.BINARY_NUMBER_MODE,
	          hljs.C_NUMBER_MODE,
	          TITLE1
	        ]
	      },
	      {
	        className: 'function',
	        begin: '\\bend\\s+', end: '$',
	        keywords: 'end',
	        contains: [
	          TITLE2,
	          TITLE1
	        ]
	      },
	      {
	        className: 'command',
	        beginKeywords: 'command on', end: '$',
	        contains: [
	          VARIABLE,
	          TITLE2,
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.BINARY_NUMBER_MODE,
	          hljs.C_NUMBER_MODE,
	          TITLE1
	        ]
	      },
	      {
	        className: 'preprocessor',
	        variants: [
	          {
	            begin: '<\\?(rev|lc|livecode)',
	            relevance: 10
	          },
	          { begin: '<\\?' },
	          { begin: '\\?>' }
	        ]
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.BINARY_NUMBER_MODE,
	      hljs.C_NUMBER_MODE,
	      TITLE1
	    ].concat(COMMENT_MODES),
	    illegal: ';$|^\\[|^='
	  };
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Syntax highlighting with language autodetection.
	https://highlightjs.org/
	*/

	(function(factory) {

	  // Setup highlight.js for different environments. First is Node.js or
	  // CommonJS.
	  if(true) {
	    factory(exports);
	  } else {
	    // Export hljs globally even when using AMD for cases when this script
	    // is loaded with others that may still expect a global hljs.
	    window.hljs = factory({});

	    // Finally register the global hljs with AMD.
	    if(typeof define === 'function' && define.amd) {
	      define('hljs', [], function() {
	        return window.hljs;
	      });
	    }
	  }

	}(function(hljs) {

	  /* Utility functions */

	  function escape(value) {
	    return value.replace(/&/gm, '&amp;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;');
	  }

	  function tag(node) {
	    return node.nodeName.toLowerCase();
	  }

	  function testRe(re, lexeme) {
	    var match = re && re.exec(lexeme);
	    return match && match.index == 0;
	  }

	  function isNotHighlighted(language) {
	    return /no-?highlight|plain|text/.test(language);
	  }

	  function blockLanguage(block) {
	    var i, match, length,
	        classes = block.className + ' ';

	    classes += block.parentNode ? block.parentNode.className : '';

	    // language-* takes precedence over non-prefixed class names and
	    match = /\blang(?:uage)?-([\w-]+)\b/.exec(classes);
	    if (match) {
	      return getLanguage(match[1]) ? match[1] : 'no-highlight';
	    }

	    classes = classes.split(/\s+/);
	    for(i = 0, length = classes.length; i < length; i++) {
	      if(getLanguage(classes[i]) || isNotHighlighted(classes[i])) {
	        return classes[i];
	      }
	    }

	  }

	  function inherit(parent, obj) {
	    var result = {}, key;
	    for (key in parent)
	      result[key] = parent[key];
	    if (obj)
	      for (key in obj)
	        result[key] = obj[key];
	    return result;
	  }

	  /* Stream merging */

	  function nodeStream(node) {
	    var result = [];
	    (function _nodeStream(node, offset) {
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        if (child.nodeType == 3)
	          offset += child.nodeValue.length;
	        else if (child.nodeType == 1) {
	          result.push({
	            event: 'start',
	            offset: offset,
	            node: child
	          });
	          offset = _nodeStream(child, offset);
	          // Prevent void elements from having an end tag that would actually
	          // double them in the output. There are more void elements in HTML
	          // but we list only those realistically expected in code display.
	          if (!tag(child).match(/br|hr|img|input/)) {
	            result.push({
	              event: 'stop',
	              offset: offset,
	              node: child
	            });
	          }
	        }
	      }
	      return offset;
	    })(node, 0);
	    return result;
	  }

	  function mergeStreams(original, highlighted, value) {
	    var processed = 0;
	    var result = '';
	    var nodeStack = [];

	    function selectStream() {
	      if (!original.length || !highlighted.length) {
	        return original.length ? original : highlighted;
	      }
	      if (original[0].offset != highlighted[0].offset) {
	        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
	      }

	      /*
	      To avoid starting the stream just before it should stop the order is
	      ensured that original always starts first and closes last:

	      if (event1 == 'start' && event2 == 'start')
	        return original;
	      if (event1 == 'start' && event2 == 'stop')
	        return highlighted;
	      if (event1 == 'stop' && event2 == 'start')
	        return original;
	      if (event1 == 'stop' && event2 == 'stop')
	        return highlighted;

	      ... which is collapsed to:
	      */
	      return highlighted[0].event == 'start' ? original : highlighted;
	    }

	    function open(node) {
	      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value) + '"';}
	      result += '<' + tag(node) + Array.prototype.map.call(node.attributes, attr_str).join('') + '>';
	    }

	    function close(node) {
	      result += '</' + tag(node) + '>';
	    }

	    function render(event) {
	      (event.event == 'start' ? open : close)(event.node);
	    }

	    while (original.length || highlighted.length) {
	      var stream = selectStream();
	      result += escape(value.substr(processed, stream[0].offset - processed));
	      processed = stream[0].offset;
	      if (stream == original) {
	        /*
	        On any opening or closing tag of the original markup we first close
	        the entire highlighted node stack, then render the original tag along
	        with all the following original tags at the same offset and then
	        reopen all the tags on the highlighted stack.
	        */
	        nodeStack.reverse().forEach(close);
	        do {
	          render(stream.splice(0, 1)[0]);
	          stream = selectStream();
	        } while (stream == original && stream.length && stream[0].offset == processed);
	        nodeStack.reverse().forEach(open);
	      } else {
	        if (stream[0].event == 'start') {
	          nodeStack.push(stream[0].node);
	        } else {
	          nodeStack.pop();
	        }
	        render(stream.splice(0, 1)[0]);
	      }
	    }
	    return result + escape(value.substr(processed));
	  }

	  /* Initialization */

	  function compileLanguage(language) {

	    function reStr(re) {
	        return (re && re.source) || re;
	    }

	    function langRe(value, global) {
	      return new RegExp(
	        reStr(value),
	        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
	      );
	    }

	    function compileMode(mode, parent) {
	      if (mode.compiled)
	        return;
	      mode.compiled = true;

	      mode.keywords = mode.keywords || mode.beginKeywords;
	      if (mode.keywords) {
	        var compiled_keywords = {};

	        var flatten = function(className, str) {
	          if (language.case_insensitive) {
	            str = str.toLowerCase();
	          }
	          str.split(' ').forEach(function(kw) {
	            var pair = kw.split('|');
	            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
	          });
	        };

	        if (typeof mode.keywords == 'string') { // string
	          flatten('keyword', mode.keywords);
	        } else {
	          Object.keys(mode.keywords).forEach(function (className) {
	            flatten(className, mode.keywords[className]);
	          });
	        }
	        mode.keywords = compiled_keywords;
	      }
	      mode.lexemesRe = langRe(mode.lexemes || /\b\w+\b/, true);

	      if (parent) {
	        if (mode.beginKeywords) {
	          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
	        }
	        if (!mode.begin)
	          mode.begin = /\B|\b/;
	        mode.beginRe = langRe(mode.begin);
	        if (!mode.end && !mode.endsWithParent)
	          mode.end = /\B|\b/;
	        if (mode.end)
	          mode.endRe = langRe(mode.end);
	        mode.terminator_end = reStr(mode.end) || '';
	        if (mode.endsWithParent && parent.terminator_end)
	          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
	      }
	      if (mode.illegal)
	        mode.illegalRe = langRe(mode.illegal);
	      if (mode.relevance === undefined)
	        mode.relevance = 1;
	      if (!mode.contains) {
	        mode.contains = [];
	      }
	      var expanded_contains = [];
	      mode.contains.forEach(function(c) {
	        if (c.variants) {
	          c.variants.forEach(function(v) {expanded_contains.push(inherit(c, v));});
	        } else {
	          expanded_contains.push(c == 'self' ? mode : c);
	        }
	      });
	      mode.contains = expanded_contains;
	      mode.contains.forEach(function(c) {compileMode(c, mode);});

	      if (mode.starts) {
	        compileMode(mode.starts, parent);
	      }

	      var terminators =
	        mode.contains.map(function(c) {
	          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
	        })
	        .concat([mode.terminator_end, mode.illegal])
	        .map(reStr)
	        .filter(Boolean);
	      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
	    }

	    compileMode(language);
	  }

	  /*
	  Core highlighting function. Accepts a language name, or an alias, and a
	  string with the code to highlight. Returns an object with the following
	  properties:

	  - relevance (int)
	  - value (an HTML string with highlighting markup)

	  */
	  function highlight(name, value, ignore_illegals, continuation) {

	    function subMode(lexeme, mode) {
	      for (var i = 0; i < mode.contains.length; i++) {
	        if (testRe(mode.contains[i].beginRe, lexeme)) {
	          return mode.contains[i];
	        }
	      }
	    }

	    function endOfMode(mode, lexeme) {
	      if (testRe(mode.endRe, lexeme)) {
	        while (mode.endsParent && mode.parent) {
	          mode = mode.parent;
	        }
	        return mode;
	      }
	      if (mode.endsWithParent) {
	        return endOfMode(mode.parent, lexeme);
	      }
	    }

	    function isIllegal(lexeme, mode) {
	      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
	    }

	    function keywordMatch(mode, match) {
	      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
	      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
	    }

	    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
	      var classPrefix = noPrefix ? '' : options.classPrefix,
	          openSpan    = '<span class="' + classPrefix,
	          closeSpan   = leaveOpen ? '' : '</span>';

	      openSpan += classname + '">';

	      return openSpan + insideSpan + closeSpan;
	    }

	    function processKeywords() {
	      if (!top.keywords)
	        return escape(mode_buffer);
	      var result = '';
	      var last_index = 0;
	      top.lexemesRe.lastIndex = 0;
	      var match = top.lexemesRe.exec(mode_buffer);
	      while (match) {
	        result += escape(mode_buffer.substr(last_index, match.index - last_index));
	        var keyword_match = keywordMatch(top, match);
	        if (keyword_match) {
	          relevance += keyword_match[1];
	          result += buildSpan(keyword_match[0], escape(match[0]));
	        } else {
	          result += escape(match[0]);
	        }
	        last_index = top.lexemesRe.lastIndex;
	        match = top.lexemesRe.exec(mode_buffer);
	      }
	      return result + escape(mode_buffer.substr(last_index));
	    }

	    function processSubLanguage() {
	      if (top.subLanguage && !languages[top.subLanguage]) {
	        return escape(mode_buffer);
	      }
	      var result = top.subLanguage ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer);
	      // Counting embedded language score towards the host language may be disabled
	      // with zeroing the containing mode relevance. Usecase in point is Markdown that
	      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
	      // score.
	      if (top.relevance > 0) {
	        relevance += result.relevance;
	      }
	      if (top.subLanguageMode == 'continuous') {
	        continuations[top.subLanguage] = result.top;
	      }
	      return buildSpan(result.language, result.value, false, true);
	    }

	    function processBuffer() {
	      return top.subLanguage !== undefined ? processSubLanguage() : processKeywords();
	    }

	    function startNewMode(mode, lexeme) {
	      var markup = mode.className? buildSpan(mode.className, '', true): '';
	      if (mode.returnBegin) {
	        result += markup;
	        mode_buffer = '';
	      } else if (mode.excludeBegin) {
	        result += escape(lexeme) + markup;
	        mode_buffer = '';
	      } else {
	        result += markup;
	        mode_buffer = lexeme;
	      }
	      top = Object.create(mode, {parent: {value: top}});
	    }

	    function processLexeme(buffer, lexeme) {

	      mode_buffer += buffer;
	      if (lexeme === undefined) {
	        result += processBuffer();
	        return 0;
	      }

	      var new_mode = subMode(lexeme, top);
	      if (new_mode) {
	        result += processBuffer();
	        startNewMode(new_mode, lexeme);
	        return new_mode.returnBegin ? 0 : lexeme.length;
	      }

	      var end_mode = endOfMode(top, lexeme);
	      if (end_mode) {
	        var origin = top;
	        if (!(origin.returnEnd || origin.excludeEnd)) {
	          mode_buffer += lexeme;
	        }
	        result += processBuffer();
	        do {
	          if (top.className) {
	            result += '</span>';
	          }
	          relevance += top.relevance;
	          top = top.parent;
	        } while (top != end_mode.parent);
	        if (origin.excludeEnd) {
	          result += escape(lexeme);
	        }
	        mode_buffer = '';
	        if (end_mode.starts) {
	          startNewMode(end_mode.starts, '');
	        }
	        return origin.returnEnd ? 0 : lexeme.length;
	      }

	      if (isIllegal(lexeme, top))
	        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

	      /*
	      Parser should not reach this point as all types of lexemes should be caught
	      earlier, but if it does due to some bug make sure it advances at least one
	      character forward to prevent infinite looping.
	      */
	      mode_buffer += lexeme;
	      return lexeme.length || 1;
	    }

	    var language = getLanguage(name);
	    if (!language) {
	      throw new Error('Unknown language: "' + name + '"');
	    }

	    compileLanguage(language);
	    var top = continuation || language;
	    var continuations = {}; // keep continuations for sub-languages
	    var result = '', current;
	    for(current = top; current != language; current = current.parent) {
	      if (current.className) {
	        result = buildSpan(current.className, '', true) + result;
	      }
	    }
	    var mode_buffer = '';
	    var relevance = 0;
	    try {
	      var match, count, index = 0;
	      while (true) {
	        top.terminators.lastIndex = index;
	        match = top.terminators.exec(value);
	        if (!match)
	          break;
	        count = processLexeme(value.substr(index, match.index - index), match[0]);
	        index = match.index + count;
	      }
	      processLexeme(value.substr(index));
	      for(current = top; current.parent; current = current.parent) { // close dangling modes
	        if (current.className) {
	          result += '</span>';
	        }
	      }
	      return {
	        relevance: relevance,
	        value: result,
	        language: name,
	        top: top
	      };
	    } catch (e) {
	      if (e.message.indexOf('Illegal') != -1) {
	        return {
	          relevance: 0,
	          value: escape(value)
	        };
	      } else {
	        throw e;
	      }
	    }
	  }

	  /*
	  Highlighting with language detection. Accepts a string with the code to
	  highlight. Returns an object with the following properties:

	  - language (detected language)
	  - relevance (int)
	  - value (an HTML string with highlighting markup)
	  - second_best (object with the same structure for second-best heuristically
	    detected language, may be absent)

	  */
	  function highlightAuto(text, languageSubset) {
	    languageSubset = languageSubset || options.languages || Object.keys(languages);
	    var result = {
	      relevance: 0,
	      value: escape(text)
	    };
	    var second_best = result;
	    languageSubset.forEach(function(name) {
	      if (!getLanguage(name)) {
	        return;
	      }
	      var current = highlight(name, text, false);
	      current.language = name;
	      if (current.relevance > second_best.relevance) {
	        second_best = current;
	      }
	      if (current.relevance > result.relevance) {
	        second_best = result;
	        result = current;
	      }
	    });
	    if (second_best.language) {
	      result.second_best = second_best;
	    }
	    return result;
	  }

	  /*
	  Post-processing of the highlighted markup:

	  - replace TABs with something more useful
	  - replace real line-breaks with '<br>' for non-pre containers

	  */
	  function fixMarkup(value) {
	    if (options.tabReplace) {
	      value = value.replace(/^((<[^>]+>|\t)+)/gm, function(match, p1 /*..., offset, s*/) {
	        return p1.replace(/\t/g, options.tabReplace);
	      });
	    }
	    if (options.useBR) {
	      value = value.replace(/\n/g, '<br>');
	    }
	    return value;
	  }

	  function buildClassName(prevClassName, currentLang, resultLang) {
	    var language = currentLang ? aliases[currentLang] : resultLang,
	        result   = [prevClassName.trim()];

	    if (!prevClassName.match(/\bhljs\b/)) {
	      result.push('hljs');
	    }

	    if (prevClassName.indexOf(language) === -1) {
	      result.push(language);
	    }

	    return result.join(' ').trim();
	  }

	  /*
	  Applies highlighting to a DOM node containing code. Accepts a DOM node and
	  two optional parameters for fixMarkup.
	  */
	  function highlightBlock(block) {
	    var language = blockLanguage(block);
	    if (isNotHighlighted(language))
	        return;

	    var node;
	    if (options.useBR) {
	      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
	    } else {
	      node = block;
	    }
	    var text = node.textContent;
	    var result = language ? highlight(language, text, true) : highlightAuto(text);

	    var originalStream = nodeStream(node);
	    if (originalStream.length) {
	      var resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      resultNode.innerHTML = result.value;
	      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
	    }
	    result.value = fixMarkup(result.value);

	    block.innerHTML = result.value;
	    block.className = buildClassName(block.className, language, result.language);
	    block.result = {
	      language: result.language,
	      re: result.relevance
	    };
	    if (result.second_best) {
	      block.second_best = {
	        language: result.second_best.language,
	        re: result.second_best.relevance
	      };
	    }
	  }

	  var options = {
	    classPrefix: 'hljs-',
	    tabReplace: null,
	    useBR: false,
	    languages: undefined
	  };

	  /*
	  Updates highlight.js global options with values passed in the form of an object
	  */
	  function configure(user_options) {
	    options = inherit(options, user_options);
	  }

	  /*
	  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
	  */
	  function initHighlighting() {
	    if (initHighlighting.called)
	      return;
	    initHighlighting.called = true;

	    var blocks = document.querySelectorAll('pre code');
	    Array.prototype.forEach.call(blocks, highlightBlock);
	  }

	  /*
	  Attaches highlighting to the page load event.
	  */
	  function initHighlightingOnLoad() {
	    addEventListener('DOMContentLoaded', initHighlighting, false);
	    addEventListener('load', initHighlighting, false);
	  }

	  var languages = {};
	  var aliases = {};

	  function registerLanguage(name, language) {
	    var lang = languages[name] = language(hljs);
	    if (lang.aliases) {
	      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
	    }
	  }

	  function listLanguages() {
	    return Object.keys(languages);
	  }

	  function getLanguage(name) {
	    return languages[name] || languages[aliases[name]];
	  }

	  /* Interface definition */

	  hljs.highlight = highlight;
	  hljs.highlightAuto = highlightAuto;
	  hljs.fixMarkup = fixMarkup;
	  hljs.highlightBlock = highlightBlock;
	  hljs.configure = configure;
	  hljs.initHighlighting = initHighlighting;
	  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
	  hljs.registerLanguage = registerLanguage;
	  hljs.listLanguages = listLanguages;
	  hljs.getLanguage = getLanguage;
	  hljs.inherit = inherit;

	  // Common regexps
	  hljs.IDENT_RE = '[a-zA-Z]\\w*';
	  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
	  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
	  hljs.C_NUMBER_RE = '\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
	  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
	  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

	  // Common modes
	  hljs.BACKSLASH_ESCAPE = {
	    begin: '\\\\[\\s\\S]', relevance: 0
	  };
	  hljs.APOS_STRING_MODE = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.QUOTE_STRING_MODE = {
	    className: 'string',
	    begin: '"', end: '"',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.PHRASAL_WORDS_MODE = {
	    begin: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
	  };
	  hljs.COMMENT = function (begin, end, inherits) {
	    var mode = hljs.inherit(
	      {
	        className: 'comment',
	        begin: begin, end: end,
	        contains: []
	      },
	      inherits || {}
	    );
	    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
	    mode.contains.push({
	      className: 'doctag',
	      beginKeywords: "TODO FIXME NOTE BUG XXX",
	      relevance: 0
	    });
	    return mode;
	  };
	  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
	  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
	  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
	  hljs.NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE,
	    relevance: 0
	  };
	  hljs.C_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.C_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.BINARY_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.BINARY_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.CSS_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE + '(' +
	      '%|em|ex|ch|rem'  +
	      '|vw|vh|vmin|vmax' +
	      '|cm|mm|in|pt|pc|px' +
	      '|deg|grad|rad|turn' +
	      '|s|ms' +
	      '|Hz|kHz' +
	      '|dpi|dpcm|dppx' +
	      ')?',
	    relevance: 0
	  };
	  hljs.REGEXP_MODE = {
	    className: 'regexp',
	    begin: /\//, end: /\/[gimuy]*/,
	    illegal: /\n/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      {
	        begin: /\[/, end: /\]/,
	        relevance: 0,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  hljs.TITLE_MODE = {
	    className: 'title',
	    begin: hljs.IDENT_RE,
	    relevance: 0
	  };
	  hljs.UNDERSCORE_TITLE_MODE = {
	    className: 'title',
	    begin: hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };

	  return hljs;
	}));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs){
	  var IDENT_RE_RU = '[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*';
	  var OneS_KEYWORDS = 'возврат дата для если и или иначе иначеесли исключение конецесли ' +
	    'конецпопытки конецпроцедуры конецфункции конеццикла константа не перейти перем ' +
	    'перечисление по пока попытка прервать продолжить процедура строка тогда фс функция цикл ' +
	    'число экспорт';
	  var OneS_BUILT_IN = 'ansitooem oemtoansi ввестивидсубконто ввестидату ввестизначение ' +
	    'ввестиперечисление ввестипериод ввестиплансчетов ввестистроку ввестичисло вопрос ' +
	    'восстановитьзначение врег выбранныйплансчетов вызватьисключение датагод датамесяц ' +
	    'датачисло добавитьмесяц завершитьработусистемы заголовоксистемы записьжурналарегистрации ' +
	    'запуститьприложение зафиксироватьтранзакцию значениевстроку значениевстрокувнутр ' +
	    'значениевфайл значениеизстроки значениеизстрокивнутр значениеизфайла имякомпьютера ' +
	    'имяпользователя каталогвременныхфайлов каталогиб каталогпользователя каталогпрограммы ' +
	    'кодсимв командасистемы конгода конецпериодаби конецрассчитанногопериодаби ' +
	    'конецстандартногоинтервала конквартала конмесяца коннедели лев лог лог10 макс ' +
	    'максимальноеколичествосубконто мин монопольныйрежим названиеинтерфейса названиенабораправ ' +
	    'назначитьвид назначитьсчет найти найтипомеченныенаудаление найтиссылки началопериодаби ' +
	    'началостандартногоинтервала начатьтранзакцию начгода начквартала начмесяца начнедели ' +
	    'номерднягода номерднянедели номернеделигода нрег обработкаожидания окр описаниеошибки ' +
	    'основнойжурналрасчетов основнойплансчетов основнойязык открытьформу открытьформумодально ' +
	    'отменитьтранзакцию очиститьокносообщений периодстр полноеимяпользователя получитьвремята ' +
	    'получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта ' +
	    'получитьпустоезначение получитьта прав праводоступа предупреждение префиксавтонумерации ' +
	    'пустаястрока пустоезначение рабочаядаттьпустоезначение рабочаядата разделительстраниц ' +
	    'разделительстрок разм разобратьпозициюдокумента рассчитатьрегистрына ' +
	    'рассчитатьрегистрыпо сигнал симв символтабуляции создатьобъект сокрл сокрлп сокрп ' +
	    'сообщить состояние сохранитьзначение сред статусвозврата стрдлина стрзаменить ' +
	    'стрколичествострок стрполучитьстроку  стрчисловхождений сформироватьпозициюдокумента ' +
	    'счетпокоду текущаядата текущеевремя типзначения типзначениястр удалитьобъекты ' +
	    'установитьтана установитьтапо фиксшаблон формат цел шаблон';
	  var DQUOTE =  {className: 'dquote',  begin: '""'};
	  var STR_START = {
	      className: 'string',
	      begin: '"', end: '"|$',
	      contains: [DQUOTE]
	    };
	  var STR_CONT = {
	    className: 'string',
	    begin: '\\|', end: '"|$',
	    contains: [DQUOTE]
	  };

	  return {
	    case_insensitive: true,
	    lexemes: IDENT_RE_RU,
	    keywords: {keyword: OneS_KEYWORDS, built_in: OneS_BUILT_IN},
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      STR_START, STR_CONT,
	      {
	        className: 'function',
	        begin: '(процедура|функция)', end: '$',
	        lexemes: IDENT_RE_RU,
	        keywords: 'процедура функция',
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE_RU}),
	          {
	            className: 'tail',
	            endsWithParent: true,
	            contains: [
	              {
	                className: 'params',
	                begin: '\\(', end: '\\)',
	                lexemes: IDENT_RE_RU,
	                keywords: 'знач',
	                contains: [STR_START, STR_CONT]
	              },
	              {
	                className: 'export',
	                begin: 'экспорт', endsWithParent: true,
	                lexemes: IDENT_RE_RU,
	                keywords: 'экспорт',
	                contains: [hljs.C_LINE_COMMENT_MODE]
	              }
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE
	        ]
	      },
	      {className: 'preprocessor', begin: '#', end: '$'},
	      {className: 'date', begin: '\'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})\''}
	    ]
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
	  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

	  var AS3_REST_ARG_MODE = {
	    className: 'rest_arg',
	    begin: '[.]{3}', end: IDENT_RE,
	    relevance: 10
	  };

	  return {
	    aliases: ['as'],
	    keywords: {
	      keyword: 'as break case catch class const continue default delete do dynamic each ' +
	        'else extends final finally for function get if implements import in include ' +
	        'instanceof interface internal is namespace native new override package private ' +
	        'protected public return set static super switch this throw try typeof use var void ' +
	        'while with',
	      literal: 'true false null undefined'
	    },
	    contains: [
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'package',
	        beginKeywords: 'package', end: '{',
	        contains: [hljs.TITLE_MODE]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.TITLE_MODE
	        ]
	      },
	      {
	        className: 'preprocessor',
	        beginKeywords: 'import include', end: ';'
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '[{;]', excludeEnd: true,
	        illegal: '\\S',
	        contains: [
	          hljs.TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              AS3_REST_ARG_MODE
	            ]
	          },
	          {
	            className: 'type',
	            begin: ':',
	            end: IDENT_FUNC_RETURN_TYPE_RE,
	            relevance: 10
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var NUMBER = {className: 'number', begin: '[\\$%]\\d+'};
	  return {
	    aliases: ['apacheconf'],
	    case_insensitive: true,
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {className: 'tag', begin: '</?', end: '>'},
	      {
	        className: 'keyword',
	        begin: /\w+/,
	        relevance: 0,
	        // keywords aren’t needed for highlighting per se, they only boost relevance
	        // for a very generally defined mode (starts with a word, ends with line-end
	        keywords: {
	          common:
	            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' +
	            'sethandler errordocument loadmodule options header listen serverroot ' +
	            'servername'
	        },
	        starts: {
	          end: /$/,
	          relevance: 0,
	          keywords: {
	            literal: 'on off all'
	          },
	          contains: [
	            {
	              className: 'sqbracket',
	              begin: '\\s\\[', end: '\\]$'
	            },
	            {
	              className: 'cbracket',
	              begin: '[\\$%]\\{', end: '\\}',
	              contains: ['self', NUMBER]
	            },
	            NUMBER,
	            hljs.QUOTE_STRING_MODE
	          ]
	        }
	      }
	    ],
	    illegal: /\S/
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: ''});
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)',
	    contains: ['self', hljs.C_NUMBER_MODE, STRING]
	  };
	  var COMMENT_MODE_1 = hljs.COMMENT('--', '$');
	  var COMMENT_MODE_2 = hljs.COMMENT(
	    '\\(\\*',
	    '\\*\\)',
	    {
	      contains: ['self', COMMENT_MODE_1] //allow nesting
	    }
	  );
	  var COMMENTS = [
	    COMMENT_MODE_1,
	    COMMENT_MODE_2,
	    hljs.HASH_COMMENT_MODE
	  ];

	  return {
	    aliases: ['osascript'],
	    keywords: {
	      keyword:
	        'about above after against and around as at back before beginning ' +
	        'behind below beneath beside between but by considering ' +
	        'contain contains continue copy div does eighth else end equal ' +
	        'equals error every exit fifth first for fourth from front ' +
	        'get given global if ignoring in into is it its last local me ' +
	        'middle mod my ninth not of on onto or over prop property put ref ' +
	        'reference repeat returning script second set seventh since ' +
	        'sixth some tell tenth that the|0 then third through thru ' +
	        'timeout times to transaction try until where while whose with ' +
	        'without',
	      constant:
	        'AppleScript false linefeed return pi quote result space tab true',
	      type:
	        'alias application boolean class constant date file integer list ' +
	        'number real record string text',
	      command:
	        'activate beep count delay launch log offset read round ' +
	        'run say summarize write',
	      property:
	        'character characters contents day frontmost id item length ' +
	        'month name paragraph paragraphs rest reverse running time version ' +
	        'weekday word words year'
	    },
	    contains: [
	      STRING,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'type',
	        begin: '\\bPOSIX file\\b'
	      },
	      {
	        className: 'command',
	        begin:
	          '\\b(clipboard info|the clipboard|info for|list (disks|folder)|' +
	          'mount volume|path to|(close|open for) access|(get|set) eof|' +
	          'current date|do shell script|get volume settings|random number|' +
	          'set volume|system attribute|system info|time to GMT|' +
	          '(load|run|store) script|scripting components|' +
	          'ASCII (character|number)|localized string|' +
	          'choose (application|color|file|file name|' +
	          'folder|from list|remote application|URL)|' +
	          'display (alert|dialog))\\b|^\\s*return\\b'
	      },
	      {
	        className: 'constant',
	        begin:
	          '\\b(text item delimiters|current application|missing value)\\b'
	      },
	      {
	        className: 'keyword',
	        begin:
	          '\\b(apart from|aside from|instead of|out of|greater than|' +
	          "isn't|(doesn't|does not) (equal|come before|come after|contain)|" +
	          '(greater|less) than( or equal)?|(starts?|ends|begins?) with|' +
	          'contained by|comes (before|after)|a (ref|reference))\\b'
	      },
	      {
	        className: 'property',
	        begin:
	          '\\b(POSIX path|(date|time) string|quoted form)\\b'
	      },
	      {
	        className: 'function_start',
	        beginKeywords: 'on',
	        illegal: '[${=;\\n]',
	        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
	      }
	    ].concat(COMMENTS),
	    illegal: '//|->|=>'
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	    //local labels: %?[FB]?[AT]?\d{1,2}\w+
	  return {
	    case_insensitive: true,
	    aliases: ['arm'],
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      literal:
	        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 '+ //standard registers
	        'pc lr sp ip sl sb fp '+ //typical regs plus backward compatibility
	        'a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 '+ //more regs and fp
	        'p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 '+ //coprocessor regs
	        'c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 '+ //more coproc
	        'q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 '+ //advanced SIMD NEON regs

	        //program status registers
	        'cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf '+
	        'spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf '+

	        //NEON and VFP registers
	        's0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 '+
	        's16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 '+
	        'd0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 '+
	        'd16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 ',
	    preprocessor:
	        //GNU preprocs
	        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg '+
	        //ARM directives
	        'ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',
	    built_in:
	        '{PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @ '
	    },
	    contains: [
	      {
	        className: 'keyword',
	        begin: '\\b('+     //mnemonics
	            'adc|'+
	            '(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|'+
	            'and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|'+
	            'bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|'+
	            'setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|'+
	            'ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|'+
	            'mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|'+
	            'mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|'+
	            'mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|'+
	            'rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|'+
	            'stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|'+
	            '[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|'+
	            'wfe|wfi|yield'+
	        ')'+
	        '(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?'+ //condition codes
	        '[sptrx]?' ,                                             //legal postfixes
	        end: '\\s'
	      },
	      hljs.COMMENT('[;@]', '$', {relevance: 0}),
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'',
	        end: '[^\\\\]\'',
	        relevance: 0
	      },
	      {
	        className: 'title',
	        begin: '\\|', end: '\\|',
	        illegal: '\\n',
	        relevance: 0
	      },
	      {
	        className: 'number',
	        variants: [
	            {begin: '[#$=]?0x[0-9a-f]+'}, //hex
	            {begin: '[#$=]?0b[01]+'},     //bin
	            {begin: '[#$=]\\d+'},        //literal
	            {begin: '\\b\\d+'}           //bare number
	        ],
	        relevance: 0
	      },
	      {
	        className: 'label',
	        variants: [
	            {begin: '^[a-z_\\.\\$][a-z0-9_\\.\\$]+'}, //ARM syntax
	            {begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, //GNU ARM syntax
	            {begin: '[=#]\\w+' }  //label reference
	        ],
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
	  var PHP = {
	    begin: /<\?(php)?(?!\w)/, end: /\?>/,
	    subLanguage: 'php', subLanguageMode: 'continuous'
	  };
	  var TAG_INTERNALS = {
	    endsWithParent: true,
	    illegal: /</,
	    relevance: 0,
	    contains: [
	      PHP,
	      {
	        className: 'attribute',
	        begin: XML_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: '=',
	        relevance: 0,
	        contains: [
	          {
	            className: 'value',
	            contains: [PHP],
	            variants: [
	              {begin: /"/, end: /"/},
	              {begin: /'/, end: /'/},
	              {begin: /[^\s\/>]+/}
	            ]
	          }
	        ]
	      }
	    ]
	  };
	  return {
	    aliases: ['html', 'xhtml', 'rss', 'atom', 'xsl', 'plist'],
	    case_insensitive: true,
	    contains: [
	      {
	        className: 'doctype',
	        begin: '<!DOCTYPE', end: '>',
	        relevance: 10,
	        contains: [{begin: '\\[', end: '\\]'}]
	      },
	      hljs.COMMENT(
	        '<!--',
	        '-->',
	        {
	          relevance: 10
	        }
	      ),
	      {
	        className: 'cdata',
	        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
	        relevance: 10
	      },
	      {
	        className: 'tag',
	        /*
	        The lookahead pattern (?=...) ensures that 'begin' only matches
	        '<style' as a single word, followed by a whitespace or an
	        ending braket. The '$' is needed for the lexeme to be recognized
	        by hljs.subMode() that tests lexemes outside the stream.
	        */
	        begin: '<style(?=\\s|>|$)', end: '>',
	        keywords: {title: 'style'},
	        contains: [TAG_INTERNALS],
	        starts: {
	          end: '</style>', returnEnd: true,
	          subLanguage: 'css'
	        }
	      },
	      {
	        className: 'tag',
	        // See the comment in the <style tag about the lookahead pattern
	        begin: '<script(?=\\s|>|$)', end: '>',
	        keywords: {title: 'script'},
	        contains: [TAG_INTERNALS],
	        starts: {
	          end: '\<\/script\>', returnEnd: true,
	          subLanguage: ''
	        }
	      },
	      PHP,
	      {
	        className: 'pi',
	        begin: /<\?\w+/, end: /\?>/,
	        relevance: 10
	      },
	      {
	        className: 'tag',
	        begin: '</?', end: '/?>',
	        contains: [
	          {
	            className: 'title', begin: /[^ \/><\n\t]+/, relevance: 0
	          },
	          TAG_INTERNALS
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['adoc'],
	    contains: [
	      // block comment
	      hljs.COMMENT(
	        '^/{4,}\\n',
	        '\\n/{4,}$',
	        // can also be done as...
	        //'^/{4,}$',
	        //'^/{4,}$',
	        {
	          relevance: 10
	        }
	      ),
	      // line comment
	      hljs.COMMENT(
	        '^//',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      // title
	      {
	        className: 'title',
	        begin: '^\\.\\w.*$'
	      },
	      // example, admonition & sidebar blocks
	      {
	        begin: '^[=\\*]{4,}\\n',
	        end: '\\n^[=\\*]{4,}$',
	        relevance: 10
	      },
	      // headings
	      {
	        className: 'header',
	        begin: '^(={1,5}) .+?( \\1)?$',
	        relevance: 10
	      },
	      {
	        className: 'header',
	        begin: '^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$',
	        relevance: 10
	      },
	      // document attributes
	      {
	        className: 'attribute',
	        begin: '^:.+?:',
	        end: '\\s',
	        excludeEnd: true,
	        relevance: 10
	      },
	      // block attributes
	      {
	        className: 'attribute',
	        begin: '^\\[.+?\\]$',
	        relevance: 0
	      },
	      // quoteblocks
	      {
	        className: 'blockquote',
	        begin: '^_{4,}\\n',
	        end: '\\n_{4,}$',
	        relevance: 10
	      },
	      // listing and literal blocks
	      {
	        className: 'code',
	        begin: '^[\\-\\.]{4,}\\n',
	        end: '\\n[\\-\\.]{4,}$',
	        relevance: 10
	      },
	      // passthrough blocks
	      {
	        begin: '^\\+{4,}\\n',
	        end: '\\n\\+{4,}$',
	        contains: [
	          {
	            begin: '<', end: '>',
	            subLanguage: 'xml',
	            relevance: 0
	          }
	        ],
	        relevance: 10
	      },
	      // lists (can only capture indicators)
	      {
	        className: 'bullet',
	        begin: '^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+'
	      },
	      // admonition
	      {
	        className: 'label',
	        begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+',
	        relevance: 10
	      },
	      // inline strong
	      {
	        className: 'strong',
	        // must not follow a word character or be followed by an asterisk or space
	        begin: '\\B\\*(?![\\*\\s])',
	        end: '(\\n{2}|\\*)',
	        // allow escaped asterisk followed by word char
	        contains: [
	          {
	            begin: '\\\\*\\w',
	            relevance: 0
	          }
	        ]
	      },
	      // inline emphasis
	      {
	        className: 'emphasis',
	        // must not follow a word character or be followed by a single quote or space
	        begin: '\\B\'(?![\'\\s])',
	        end: '(\\n{2}|\')',
	        // allow escaped single quote followed by word char
	        contains: [
	          {
	            begin: '\\\\\'\\w',
	            relevance: 0
	          }
	        ],
	        relevance: 0
	      },
	      // inline emphasis (alt)
	      {
	        className: 'emphasis',
	        // must not follow a word character or be followed by an underline or space
	        begin: '_(?![_\\s])',
	        end: '(\\n{2}|_)',
	        relevance: 0
	      },
	      // inline smart quotes
	      {
	        className: 'smartquote',
	        variants: [
	          {begin: "``.+?''"},
	          {begin: "`.+?'"}
	        ]
	      },
	      // inline code snippets (TODO should get same treatment as strong and emphasis)
	      {
	        className: 'code',
	        begin: '(`.+?`|\\+.+?\\+)',
	        relevance: 0
	      },
	      // indented literal block
	      {
	        className: 'code',
	        begin: '^[ \\t]',
	        end: '$',
	        relevance: 0
	      },
	      // horizontal rules
	      {
	        className: 'horizontal_rule',
	        begin: '^\'{3,}[ \\t]*$',
	        relevance: 10
	      },
	      // images and links
	      {
	        begin: '(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]',
	        returnBegin: true,
	        contains: [
	          {
	            //className: 'macro',
	            begin: '(link|image:?):',
	            relevance: 0
	          },
	          {
	            className: 'link_url',
	            begin: '\\w',
	            end: '[^\\[]+',
	            relevance: 0
	          },
	          {
	            className: 'link_label',
	            begin: '\\[',
	            end: '\\]',
	            excludeBegin: true,
	            excludeEnd: true,
	            relevance: 0
	          }
	        ],
	        relevance: 10
	      }
	    ]
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (hljs) {
	  var KEYWORDS =
	    'false synchronized int abstract float private char boolean static null if const ' +
	    'for true while long throw strictfp finally protected import native final return void ' +
	    'enum else extends implements break transient new catch instanceof byte super volatile case ' +
	    'assert short package default double public try this switch continue throws privileged ' +
	    'aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization ' +
	    'staticinitialization withincode target within execution getWithinTypeName handler ' +
	    'thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents '+
	    'warning error soft precedence thisAspectInstance';
	  var SHORTKEYS = 'get set args call';
	  return {
	    keywords : KEYWORDS,
	    illegal : /<\//,
	    contains : [
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          relevance : 0,
	          contains : [{
	            className : 'doctag',
	            begin : '@[A-Za-z]+'
	          }]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className : 'aspect',
	        beginKeywords : 'aspect',
	        end : /[{;=]/,
	        excludeEnd : true,
	        illegal : /[:;"\[\]]/,
	        contains : [
	          {
	            beginKeywords : 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'
	          },
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            begin : /\([^\)]*/,
	            end : /[)]+/,
	            keywords : KEYWORDS + ' ' + SHORTKEYS,
	            excludeEnd : false
	          }
	        ]
	      },
	      {
	        className : 'class',
	        beginKeywords : 'class interface',
	        end : /[{;=]/,
	        excludeEnd : true,
	        relevance: 0,
	        keywords : 'class interface',
	        illegal : /[:"\[\]]/,
	        contains : [
	          {beginKeywords : 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        // AspectJ Constructs
	        beginKeywords : 'pointcut after before around throwing returning',
	        end : /[)]/,
	        excludeEnd : false,
	        illegal : /["\[\]]/,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            returnBegin : true,
	            contains : [hljs.UNDERSCORE_TITLE_MODE]
	          }
	        ]
	      },
	      {
	        begin : /[:]/,
	        returnBegin : true,
	        end : /[{;]/,
	        relevance: 0,
	        excludeEnd : false,
	        keywords : KEYWORDS,
	        illegal : /["\[\]]/,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            keywords : KEYWORDS + ' ' + SHORTKEYS
	          },
	          hljs.QUOTE_STRING_MODE
	        ]
	      },
	      {
	        // this prevents 'new Name(...), or throw ...' from being recognized as a function definition
	        beginKeywords : 'new throw',
	        relevance : 0
	      },
	      {
	        // the function class is a bit different for AspectJ compared to the Java language
	        className : 'function',
	        begin : /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
	        returnBegin : true,
	        end : /[{;=]/,
	        keywords : KEYWORDS,
	        excludeEnd : true,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            returnBegin : true,
	            relevance: 0,
	            contains : [hljs.UNDERSCORE_TITLE_MODE]
	          },
	          {
	            className : 'params',
	            begin : /\(/, end : /\)/,
	            relevance: 0,
	            keywords : KEYWORDS,
	            contains : [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        // annotation is also used in this language
	        className : 'annotation',
	        begin : '@[A-Za-z]+'
	      }
	    ]
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var BACKTICK_ESCAPE = {
	    className: 'escape',
	    begin: '`[\\s\\S]'
	  };
	  var COMMENTS = hljs.COMMENT(
	    ';',
	    '$',
	    {
	      relevance: 0
	    }
	  );
	  var BUILT_IN = [
	    {
	      className: 'built_in',
	      begin: 'A_[a-zA-Z0-9]+'
	    },
	    {
	      className: 'built_in',
	      beginKeywords: 'ComSpec Clipboard ClipboardAll ErrorLevel'
	    }
	  ];

	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword: 'Break Continue Else Gosub If Loop Return While',
	      literal: 'A true false NOT AND OR'
	    },
	    contains: BUILT_IN.concat([
	      BACKTICK_ESCAPE,
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [BACKTICK_ESCAPE]}),
	      COMMENTS,
	      {
	        className: 'number',
	        begin: hljs.NUMBER_RE,
	        relevance: 0
	      },
	      {
	        className: 'var_expand', // FIXME
	        begin: '%', end: '%',
	        illegal: '\\n',
	        contains: [BACKTICK_ESCAPE]
	      },
	      {
	        className: 'label',
	        contains: [BACKTICK_ESCAPE],
	        variants: [
	          {begin: '^[^\\n";]+::(?!=)'},
	          {begin: '^[^\\n";]+:(?!=)', relevance: 0} // zero relevance as it catches a lot of things
	                                                    // followed by a single ':' in many languages
	        ]
	      },
	      {
	        // consecutive commas, not for highlighting but just for relevance
	        begin: ',\\s*,',
	        relevance: 10
	      }
	    ])
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      keyword:
	        /* mnemonic */
	        'adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs ' +
	        'brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr ' +
	        'clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor ' +
	        'fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul ' +
	        'muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs ' +
	        'sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub ' +
	        'subi swap tst wdr',
	      built_in:
	        /* general purpose registers */
	        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 ' +
	        'r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ' +
	        /* IO Registers (ATMega128) */
	        'ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h ' +
	        'tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ' +
	        'ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ' +
	        'ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk ' +
	        'tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ' +
	        'ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr ' +
	        'porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ' +
	        'ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf',
	      preprocessor:
	        '.byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list ' +
	        '.listmac .macro .nolist .org .set'
	    },
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.COMMENT(
	        ';',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      hljs.C_NUMBER_MODE, // 0x..., decimal, float
	      hljs.BINARY_NUMBER_MODE, // 0b...
	      {
	        className: 'number',
	        begin: '\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)' // $..., 0o...
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'', end: '[^\\\\]\'',
	        illegal: '[^\\\\][^\']'
	      },
	      {className: 'label',  begin: '^[A-Za-z0-9_.$]+:'},
	      {className: 'preprocessor', begin: '#', end: '$'},
	      {  // подстановка в «.macro»
	        className: 'localvars',
	        begin: '@[0-9]+'
	      }
	    ]
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords: 'false int abstract private char boolean static null if for true ' +
	      'while long throw finally protected final return void enum else ' +
	      'break new catch byte super case short default double public try this switch ' +
	      'continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count ' +
	      'order group by asc desc index hint like dispaly edit client server ttsbegin ' +
	      'ttscommit str real date container anytype common div mod',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'preprocessor',
	        begin: '#', end: '$'
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        illegal: ':',
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$[\w\d#@][\w\d_]*/},
	      {begin: /\$\{(.*?)}/}
	    ]
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      VAR,
	      {
	        className: 'variable',
	        begin: /\$\(/, end: /\)/,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  var APOS_STRING = {
	    className: 'string',
	    begin: /'/, end: /'/
	  };

	  return {
	    aliases: ['sh', 'zsh'],
	    lexemes: /-?[a-z\.]+/,
	    keywords: {
	      keyword:
	        'if then else elif fi for while in do done case esac function',
	      literal:
	        'true false',
	      built_in:
	        // Shell built-ins
	        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
	        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
	        'trap umask unset ' +
	        // Bash built-ins
	        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
	        'read readarray source type typeset ulimit unalias ' +
	        // Shell modifiers
	        'set shopt ' +
	        // Zsh built-ins
	        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
	        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
	        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
	        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
	        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
	        'zpty zregexparse zsocket zstyle ztcp',
	      operator:
	        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
	    },
	    contains: [
	      {
	        className: 'shebang',
	        begin: /^#![^\n]+sh\s*$/,
	        relevance: 10
	      },
	      {
	        className: 'function',
	        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
	        returnBegin: true,
	        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
	        relevance: 0
	      },
	      hljs.HASH_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      QUOTE_STRING,
	      APOS_STRING,
	      VAR
	    ]
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs){
	  var LITERAL = {
	    className: 'literal',
	    begin: '[\\+\\-]',
	    relevance: 0
	  };
	  return {
	    aliases: ['bf'],
	    contains: [
	      hljs.COMMENT(
	        '[^\\[\\]\\.,\\+\\-<> \r\n]',
	        '[\\[\\]\\.,\\+\\-<> \r\n]',
	        {
	          returnEnd: true,
	          relevance: 0
	        }
	      ),
	      {
	        className: 'title',
	        begin: '[\\[\\]]',
	        relevance: 0
	      },
	      {
	        className: 'string',
	        begin: '[\\.,]',
	        relevance: 0
	      },
	      {
	        // this mode works as the only relevance counter
	        begin: /\+\+|\-\-/, returnBegin: true,
	        contains: [LITERAL]
	      },
	      LITERAL
	    ]
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var KEYWORDS =
	    'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to ' +
	    'until while with var';
	  var LITERALS = 'false true';
	  var COMMENT_MODES = [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.COMMENT(
	      /\{/,
	      /\}/,
	      {
	        relevance: 0
	      }
	    ),
	    hljs.COMMENT(
	      /\(\*/,
	      /\*\)/,
	      {
	        relevance: 10
	      }
	    )
	  ];
	  var STRING = {
	    className: 'string',
	    begin: /'/, end: /'/,
	    contains: [{begin: /''/}]
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: /(#\d+)+/
	  };
	  var DATE = {
	      className: 'date',
	      begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
	      relevance: 0
	  };
	  var DBL_QUOTED_VARIABLE = {
	      className: 'variable',
	      begin: '"',
	      end: '"'
	  };

	  var PROCEDURE = {
	    className: 'function',
	    beginKeywords: 'procedure', end: /[:;]/,
	    keywords: 'procedure|10',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        className: 'params',
	        begin: /\(/, end: /\)/,
	        keywords: KEYWORDS,
	        contains: [STRING, CHAR_STRING]
	      }
	    ].concat(COMMENT_MODES)
	  };

	  var OBJECT = {
	    className: 'class',
	    begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
	    returnBegin: true,
	    contains: [
	      hljs.TITLE_MODE,
	        PROCEDURE
	    ]
	  };
	    
	  return {
	    case_insensitive: true,
	    keywords: { keyword: KEYWORDS, literal: LITERALS },
	    contains: [
	      STRING, CHAR_STRING,
	      DATE, DBL_QUOTED_VARIABLE,
	      hljs.NUMBER_MODE,
	      OBJECT,
	      PROCEDURE
	    ]
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['capnp'],
	    keywords: {
	      keyword:
	        'struct enum interface union group import using const annotation extends in of on as with from fixed',
	      built_in:
	        'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 ' +
	        'Text Data AnyPointer AnyStruct Capability List',
	      literal:
	        'true false'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'shebang',
	        begin: /@0x[\w\d]{16};/,
	        illegal: /\n/
	      },
	      {
	        className: 'number',
	        begin: /@\d+\b/
	      },
	      {
	        className: 'class',
	        beginKeywords: 'struct enum', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'interface', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  // 2.3. Identifiers and keywords
	  var KEYWORDS =
	    'assembly module package import alias class interface object given value ' +
	    'assign void function new of extends satisfies abstracts in out return ' +
	    'break continue throw assert dynamic if else switch case for while try ' +
	    'catch finally then let this outer super is exists nonempty';
	  // 7.4.1 Declaration Modifiers
	  var DECLARATION_MODIFIERS =
	    'shared abstract formal default actual variable late native deprecated' +
	    'final sealed annotation suppressWarnings small';
	  // 7.4.2 Documentation
	  var DOCUMENTATION =
	    'doc by license see throws tagged';
	  var LANGUAGE_ANNOTATIONS = DECLARATION_MODIFIERS + ' ' + DOCUMENTATION;
	  var SUBST = {
	    className: 'subst', excludeBegin: true, excludeEnd: true,
	    begin: /``/, end: /``/,
	    keywords: KEYWORDS,
	    relevance: 10
	  };
	  var EXPRESSIONS = [
	    {
	      // verbatim string
	      className: 'string',
	      begin: '"""',
	      end: '"""',
	      relevance: 10
	    },
	    {
	      // string literal or template
	      className: 'string',
	      begin: '"', end: '"',
	      contains: [SUBST]
	    },
	    {
	      // character literal
	      className: 'string',
	      begin: "'",
	      end: "'",
	    },
	    {
	      // numeric literal
	      className: 'number',
	      begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
	      relevance: 0
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  return {
	    keywords: {
	      keyword: KEYWORDS,
	      annotation: LANGUAGE_ANNOTATIONS
	    },
	    illegal: '\\$[^01]|#[^0-9a-fA-F]',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
	      {
	        // compiler annotation
	        className: 'annotation',
	        begin: '@[a-z]\\w*(?:\\:\"[^\"]*\")?'
	      }
	    ].concat(EXPRESSIONS)
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var keywords = {
	    built_in:
	      // Clojure keywords
	      'def cond apply if-not if-let if not not= = < > <= >= == + / * - rem '+
	      'quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? '+
	      'set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? '+
	      'class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? '+
	      'string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . '+
	      'inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last '+
	      'drop-while while intern condp case reduced cycle split-at split-with repeat replicate '+
	      'iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext '+
	      'nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends '+
	      'add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler '+
	      'set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter '+
	      'monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or '+
	      'when when-not when-let comp juxt partial sequence memoize constantly complement identity assert '+
	      'peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast '+
	      'sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import '+
	      'refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! '+
	      'assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger '+
	      'bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline '+
	      'flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking '+
	      'assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! '+
	      'reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! '+
	      'new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty '+
	      'hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list '+
	      'disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer '+
	      'chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate '+
	      'unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta '+
	      'lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize'
	   };

	  var SYMBOLSTART = 'a-zA-Z_\\-!.?+*=<>&#\'';
	  var SYMBOL_RE = '[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:]*';
	  var SIMPLE_NUMBER_RE = '[-+]?\\d+(\\.\\d+)?';

	  var SYMBOL = {
	    begin: SYMBOL_RE,
	    relevance: 0
	  };
	  var NUMBER = {
	    className: 'number', begin: SIMPLE_NUMBER_RE,
	    relevance: 0
	  };
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null});
	  var COMMENT = hljs.COMMENT(
	    ';',
	    '$',
	    {
	      relevance: 0
	    }
	  );
	  var LITERAL = {
	    className: 'literal',
	    begin: /\b(true|false|nil)\b/
	  };
	  var COLLECTION = {
	    className: 'collection',
	    begin: '[\\[\\{]', end: '[\\]\\}]'
	  };
	  var HINT = {
	    className: 'comment',
	    begin: '\\^' + SYMBOL_RE
	  };
	  var HINT_COL = hljs.COMMENT('\\^\\{', '\\}');
	  var KEY = {
	    className: 'attribute',
	    begin: '[:]' + SYMBOL_RE
	  };
	  var LIST = {
	    className: 'list',
	    begin: '\\(', end: '\\)'
	  };
	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };
	  var NAME = {
	    keywords: keywords,
	    lexemes: SYMBOL_RE,
	    className: 'keyword', begin: SYMBOL_RE,
	    starts: BODY
	  };
	  var DEFAULT_CONTAINS = [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL, SYMBOL];

	  LIST.contains = [hljs.COMMENT('comment', ''), NAME, BODY];
	  BODY.contains = DEFAULT_CONTAINS;
	  COLLECTION.contains = DEFAULT_CONTAINS;

	  return {
	    aliases: ['clj'],
	    illegal: /\S/,
	    contains: [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL]
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      {
	        className: 'prompt',
	        begin: /^([\w.-]+|\s*#_)=>/,
	        starts: {
	          end: /$/,
	          subLanguage: 'clojure', subLanguageMode: 'continuous'
	        }
	      }
	    ]
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['cmake.in'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'add_custom_command add_custom_target add_definitions add_dependencies ' +
	        'add_executable add_library add_subdirectory add_test aux_source_directory ' +
	        'break build_command cmake_minimum_required cmake_policy configure_file ' +
	        'create_test_sourcelist define_property else elseif enable_language enable_testing ' +
	        'endforeach endfunction endif endmacro endwhile execute_process export find_file ' +
	        'find_library find_package find_path find_program fltk_wrap_ui foreach function ' +
	        'get_cmake_property get_directory_property get_filename_component get_property ' +
	        'get_source_file_property get_target_property get_test_property if include ' +
	        'include_directories include_external_msproject include_regular_expression install ' +
	        'link_directories load_cache load_command macro mark_as_advanced message option ' +
	        'output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return ' +
	        'separate_arguments set set_directory_properties set_property ' +
	        'set_source_files_properties set_target_properties set_tests_properties site_name ' +
	        'source_group string target_link_libraries try_compile try_run unset variable_watch ' +
	        'while build_name exec_program export_library_dependencies install_files ' +
	        'install_programs install_targets link_libraries make_directory remove subdir_depends ' +
	        'subdirs use_mangled_mesa utility_source variable_requires write_file ' +
	        'qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or',
	      operator:
	        'equal less greater strless strgreater strequal matches'
	    },
	    contains: [
	      {
	        className: 'envvar',
	        begin: '\\${', end: '}'
	      },
	      hljs.HASH_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // JS keywords
	      'in if for while finally new do return else break catch instanceof throw try this ' +
	      'switch continue typeof delete debugger super ' +
	      // Coffee keywords
	      'then unless until loop of by when and or is isnt not',
	    literal:
	      // JS literals
	      'true false null undefined ' +
	      // Coffee literals
	      'yes no on off',
	    reserved:
	      'case default function var void with const let enum export import native ' +
	      '__hasProp __extends __slice __bind __indexOf',
	    built_in:
	      'npm require console print module global window document'
	  };
	  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
	  var SUBST = {
	    className: 'subst',
	    begin: /#\{/, end: /}/,
	    keywords: KEYWORDS
	  };
	  var EXPRESSIONS = [
	    hljs.BINARY_NUMBER_MODE,
	    hljs.inherit(hljs.C_NUMBER_MODE, {starts: {end: '(\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp
	    {
	      className: 'string',
	      variants: [
	        {
	          begin: /'''/, end: /'''/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /'/, end: /'/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /"""/, end: /"""/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	        },
	        {
	          begin: /"/, end: /"/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	        }
	      ]
	    },
	    {
	      className: 'regexp',
	      variants: [
	        {
	          begin: '///', end: '///',
	          contains: [SUBST, hljs.HASH_COMMENT_MODE]
	        },
	        {
	          begin: '//[gim]*',
	          relevance: 0
	        },
	        {
	          // regex can't start with space to parse x / 2 / 3 as two divisions
	          // regex can't start with *, and it supports an "illegal" in the main mode
	          begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
	        }
	      ]
	    },
	    {
	      className: 'property',
	      begin: '@' + JS_IDENT_RE
	    },
	    {
	      begin: '`', end: '`',
	      excludeBegin: true, excludeEnd: true,
	      subLanguage: 'javascript'
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
	  var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
	  var PARAMS = {
	    className: 'params',
	    begin: '\\([^\\(]', returnBegin: true,
	    /* We need another contained nameless mode to not have every nested
	    pair of parens to be called "params" */
	    contains: [{
	      begin: /\(/, end: /\)/,
	      keywords: KEYWORDS,
	      contains: ['self'].concat(EXPRESSIONS)
	    }]
	  };

	  return {
	    aliases: ['coffee', 'cson', 'iced'],
	    keywords: KEYWORDS,
	    illegal: /\/\*/,
	    contains: EXPRESSIONS.concat([
	      hljs.COMMENT('###', '###'),
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'function',
	        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
	        returnBegin: true,
	        contains: [TITLE, PARAMS]
	      },
	      {
	        // anonymous function start
	        begin: /[:\(,=]\s*/,
	        relevance: 0,
	        contains: [
	          {
	            className: 'function',
	            begin: PARAMS_RE, end: '[-=]>',
	            returnBegin: true,
	            contains: [PARAMS]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class',
	        end: '$',
	        illegal: /[:="\[\]]/,
	        contains: [
	          {
	            beginKeywords: 'extends',
	            endsWithParent: true,
	            illegal: /[:="\[\]]/,
	            contains: [TITLE]
	          },
	          TITLE
	        ]
	      },
	      {
	        className: 'attribute',
	        begin: JS_IDENT_RE + ':', end: ':',
	        returnBegin: true, returnEnd: true,
	        relevance: 0
	      }
	    ])
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var CPP_PRIMATIVE_TYPES = {
	    className: 'keyword',
	    begin: '[a-z\\d_]*_t'
	  };

	  var CPP_KEYWORDS = {
	    keyword: 'false int float while private char catch export virtual operator sizeof ' +
	      'dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace ' +
	      'unsigned long volatile static protected bool template mutable if public friend ' +
	      'do goto auto void enum else break extern using true class asm case typeid ' +
	      'short reinterpret_cast|10 default double register explicit signed typename try this ' +
	      'switch continue inline delete alignof constexpr decltype ' +
	      'noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary ' +
	      'atomic_bool atomic_char atomic_schar ' +
	      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +
	      'atomic_ullong',
	    built_in: 'std string cin cout cerr clog stringstream istringstream ostringstream ' +
	      'auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set ' +
	      'unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos ' +
	      'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' +
	      'fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' +
	      'isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow ' +
	      'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' +
	      'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' +
	      'vfprintf vprintf vsprintf'
	  };
	  return {
	    aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp'],
	    keywords: CPP_KEYWORDS,
	    illegal: '</',
	    contains: [
	      CPP_PRIMATIVE_TYPES,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'string',
	        variants: [
	          hljs.inherit(hljs.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }),
	          {
	            begin: '(u8?|U)?R"', end: '"',
	            contains: [hljs.BACKSLASH_ESCAPE]
	          },
	          {
	            begin: '\'\\\\?.', end: '\'',
	            illegal: '.'
	          }
	        ]
	      },
	      {
	        className: 'number',
	        begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)'
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'preprocessor',
	        begin: '#', end: '$',
	        keywords: 'if else elif endif define undef warning error line pragma',
	        contains: [
	          {
	            begin: /\\\n/, relevance: 0
	          },
	          {
	            begin: 'include\\s*[<"]', end: '[>"]',
	            keywords: 'include',
	            illegal: '\\n'
	          },
	          hljs.C_LINE_COMMENT_MODE
	        ]
	      },
	      {
	        begin: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<', end: '>',
	        keywords: CPP_KEYWORDS,
	        contains: ['self', CPP_PRIMATIVE_TYPES]
	      },
	      {
	        begin: hljs.IDENT_RE + '::',
	        keywords: CPP_KEYWORDS
	      },
	      {
	        // Expression keywords prevent 'keyword Name(...) or else if(...)' from
	        // being recognized as a function definition
	        beginKeywords: 'new throw return else',
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + hljs.IDENT_RE + '\\s+)+' + hljs.IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: CPP_KEYWORDS,
	        contains: [
	          {
	            begin: hljs.IDENT_RE + '\\s*\\(', returnBegin: true,
	            contains: [hljs.TITLE_MODE],
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            keywords: CPP_KEYWORDS,
	            relevance: 0,
	            contains: [
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var KEYWORDS =
	    // Normal keywords.
	    'abstract as base bool break byte case catch char checked const continue decimal dynamic ' +
	    'default delegate do double else enum event explicit extern false finally fixed float ' +
	    'for foreach goto if implicit in int interface internal is lock long null when ' +
	    'object operator out override params private protected public readonly ref sbyte ' +
	    'sealed short sizeof stackalloc static string struct switch this true try typeof ' +
	    'uint ulong unchecked unsafe ushort using virtual volatile void while async ' +
	    'protected public private internal ' +
	    // Contextual keywords.
	    'ascending descending from get group into join let orderby partial select set value var ' +
	    'where yield';
	  var GENERIC_IDENT_RE = hljs.IDENT_RE + '(<' + hljs.IDENT_RE + '>)?';
	  return {
	    aliases: ['csharp'],
	    keywords: KEYWORDS,
	    illegal: /::/,
	    contains: [
	      hljs.COMMENT(
	        '///',
	        '$',
	        {
	          returnBegin: true,
	          contains: [
	            {
	              className: 'xmlDocTag',
	              variants: [
	                {
	                  begin: '///', relevance: 0
	                },
	                {
	                  begin: '<!--|-->'
	                },
	                {
	                  begin: '</?', end: '>'
	                }
	              ]
	            }
	          ]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'preprocessor',
	        begin: '#', end: '$',
	        keywords: 'if else elif endif define undef warning error line region endregion pragma checksum'
	      },
	      {
	        className: 'string',
	        begin: '@"', end: '"',
	        contains: [{begin: '""'}]
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        beginKeywords: 'class interface', end: /[{;=]/,
	        illegal: /[^\s:]/,
	        contains: [
	          hljs.TITLE_MODE,
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        beginKeywords: 'namespace', end: /[{;=]/,
	        illegal: /[^\s:]/,
	        contains: [
	          {
	            // Customization of hljs.TITLE_MODE that allows '.'
	            className: 'title',
	            begin: '[a-zA-Z](\\.?\\w)*',
	            relevance: 0
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        // Expression keywords prevent 'keyword Name(...)' from being
	        // recognized as a function definition
	        beginKeywords: 'new return throw await',
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: hljs.IDENT_RE + '\\s*\\(', returnBegin: true,
	            contains: [hljs.TITLE_MODE],
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            keywords: KEYWORDS,
	            relevance: 0,
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
	  var FUNCTION = {
	    className: 'function',
	    begin: IDENT_RE + '\\(',
	    returnBegin: true,
	    excludeEnd: true,
	    end: '\\('
	  };
	  var RULE = {
	    className: 'rule',
	    begin: /[A-Z\_\.\-]+\s*:/, returnBegin: true, end: ';', endsWithParent: true,
	    contains: [
	      {
	        className: 'attribute',
	        begin: /\S/, end: ':', excludeEnd: true,
	        starts: {
	          className: 'value',
	          endsWithParent: true, excludeEnd: true,
	          contains: [
	            FUNCTION,
	            hljs.CSS_NUMBER_MODE,
	            hljs.QUOTE_STRING_MODE,
	            hljs.APOS_STRING_MODE,
	            hljs.C_BLOCK_COMMENT_MODE,
	            {
	              className: 'hexcolor', begin: '#[0-9A-Fa-f]+'
	            },
	            {
	              className: 'important', begin: '!important'
	            }
	          ]
	        }
	      }
	    ]
	  };

	  return {
	    case_insensitive: true,
	    illegal: /[=\/|'\$]/,
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      RULE,
	      {
	        className: 'id', begin: /\#[A-Za-z0-9_-]+/
	      },
	      {
	        className: 'class', begin: /\.[A-Za-z0-9_-]+/
	      },
	      {
	        className: 'attr_selector',
	        begin: /\[/, end: /\]/,
	        illegal: '$'
	      },
	      {
	        className: 'pseudo',
	        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
	      },
	      {
	        className: 'at_rule',
	        begin: '@(font-face|page)',
	        lexemes: '[a-z-]+',
	        keywords: 'font-face page'
	      },
	      {
	        className: 'at_rule',
	        begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
	                                 // because it doesn’t let it to be parsed as
	                                 // a rule set but instead drops parser into
	                                 // the default mode which is how it should be.
	        contains: [
	          {
	            className: 'keyword',
	            begin: /\S+/
	          },
	          {
	            begin: /\s/, endsWithParent: true, excludeEnd: true,
	            relevance: 0,
	            contains: [
	              FUNCTION,
	              hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE,
	              hljs.CSS_NUMBER_MODE
	            ]
	          }
	        ]
	      },
	      {
	        className: 'tag', begin: IDENT_RE,
	        relevance: 0
	      },
	      {
	        className: 'rules',
	        begin: '{', end: '}',
	        illegal: /\S/,
	        contains: [
	          hljs.C_BLOCK_COMMENT_MODE,
	          RULE,
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = /**
	 * Known issues:
	 *
	 * - invalid hex string literals will be recognized as a double quoted strings
	 *   but 'x' at the beginning of string will not be matched
	 *
	 * - delimited string literals are not checked for matching end delimiter
	 *   (not possible to do with js regexp)
	 *
	 * - content of token string is colored as a string (i.e. no keyword coloring inside a token string)
	 *   also, content of token string is not validated to contain only valid D tokens
	 *
	 * - special token sequence rule is not strictly following D grammar (anything following #line
	 *   up to the end of line is matched as special token sequence)
	 */

	function(hljs) {
	  /**
	   * Language keywords
	   *
	   * @type {Object}
	   */
	  var D_KEYWORDS = {
	    keyword:
	      'abstract alias align asm assert auto body break byte case cast catch class ' +
	      'const continue debug default delete deprecated do else enum export extern final ' +
	      'finally for foreach foreach_reverse|10 goto if immutable import in inout int ' +
	      'interface invariant is lazy macro mixin module new nothrow out override package ' +
	      'pragma private protected public pure ref return scope shared static struct ' +
	      'super switch synchronized template this throw try typedef typeid typeof union ' +
	      'unittest version void volatile while with __FILE__ __LINE__ __gshared|10 ' +
	      '__thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
	    built_in:
	      'bool cdouble cent cfloat char creal dchar delegate double dstring float function ' +
	      'idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar ' +
	      'wstring',
	    literal:
	      'false null true'
	  };

	  /**
	   * Number literal regexps
	   *
	   * @type {String}
	   */
	  var decimal_integer_re = '(0|[1-9][\\d_]*)',
	    decimal_integer_nosus_re = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)',
	    binary_integer_re = '0[bB][01_]+',
	    hexadecimal_digits_re = '([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)',
	    hexadecimal_integer_re = '0[xX]' + hexadecimal_digits_re,

	    decimal_exponent_re = '([eE][+-]?' + decimal_integer_nosus_re + ')',
	    decimal_float_re = '(' + decimal_integer_nosus_re + '(\\.\\d*|' + decimal_exponent_re + ')|' +
	                '\\d+\\.' + decimal_integer_nosus_re + decimal_integer_nosus_re + '|' +
	                '\\.' + decimal_integer_re + decimal_exponent_re + '?' +
	              ')',
	    hexadecimal_float_re = '(0[xX](' +
	                  hexadecimal_digits_re + '\\.' + hexadecimal_digits_re + '|'+
	                  '\\.?' + hexadecimal_digits_re +
	                 ')[pP][+-]?' + decimal_integer_nosus_re + ')',

	    integer_re = '(' +
	      decimal_integer_re + '|' +
	      binary_integer_re  + '|' +
	       hexadecimal_integer_re   +
	    ')',

	    float_re = '(' +
	      hexadecimal_float_re + '|' +
	      decimal_float_re  +
	    ')';

	  /**
	   * Escape sequence supported in D string and character literals
	   *
	   * @type {String}
	   */
	  var escape_sequence_re = '\\\\(' +
	              '[\'"\\?\\\\abfnrtv]|' +  // common escapes
	              'u[\\dA-Fa-f]{4}|' +     // four hex digit unicode codepoint
	              '[0-7]{1,3}|' +       // one to three octal digit ascii char code
	              'x[\\dA-Fa-f]{2}|' +    // two hex digit ascii char code
	              'U[\\dA-Fa-f]{8}' +      // eight hex digit unicode codepoint
	              ')|' +
	              '&[a-zA-Z\\d]{2,};';      // named character entity

	  /**
	   * D integer number literals
	   *
	   * @type {Object}
	   */
	  var D_INTEGER_MODE = {
	    className: 'number',
	      begin: '\\b' + integer_re + '(L|u|U|Lu|LU|uL|UL)?',
	      relevance: 0
	  };

	  /**
	   * [D_FLOAT_MODE description]
	   * @type {Object}
	   */
	  var D_FLOAT_MODE = {
	    className: 'number',
	    begin: '\\b(' +
	        float_re + '([fF]|L|i|[fF]i|Li)?|' +
	        integer_re + '(i|[fF]i|Li)' +
	      ')',
	    relevance: 0
	  };

	  /**
	   * D character literal
	   *
	   * @type {Object}
	   */
	  var D_CHARACTER_MODE = {
	    className: 'string',
	    begin: '\'(' + escape_sequence_re + '|.)', end: '\'',
	    illegal: '.'
	  };

	  /**
	   * D string escape sequence
	   *
	   * @type {Object}
	   */
	  var D_ESCAPE_SEQUENCE = {
	    begin: escape_sequence_re,
	    relevance: 0
	  };

	  /**
	   * D double quoted string literal
	   *
	   * @type {Object}
	   */
	  var D_STRING_MODE = {
	    className: 'string',
	    begin: '"',
	    contains: [D_ESCAPE_SEQUENCE],
	    end: '"[cwd]?'
	  };

	  /**
	   * D wysiwyg and delimited string literals
	   *
	   * @type {Object}
	   */
	  var D_WYSIWYG_DELIMITED_STRING_MODE = {
	    className: 'string',
	    begin: '[rq]"',
	    end: '"[cwd]?',
	    relevance: 5
	  };

	  /**
	   * D alternate wysiwyg string literal
	   *
	   * @type {Object}
	   */
	  var D_ALTERNATE_WYSIWYG_STRING_MODE = {
	    className: 'string',
	    begin: '`',
	    end: '`[cwd]?'
	  };

	  /**
	   * D hexadecimal string literal
	   *
	   * @type {Object}
	   */
	  var D_HEX_STRING_MODE = {
	    className: 'string',
	    begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
	    relevance: 10
	  };

	  /**
	   * D delimited string literal
	   *
	   * @type {Object}
	   */
	  var D_TOKEN_STRING_MODE = {
	    className: 'string',
	    begin: 'q"\\{',
	    end: '\\}"'
	  };

	  /**
	   * Hashbang support
	   *
	   * @type {Object}
	   */
	  var D_HASHBANG_MODE = {
	    className: 'shebang',
	    begin: '^#!',
	    end: '$',
	    relevance: 5
	  };

	  /**
	   * D special token sequence
	   *
	   * @type {Object}
	   */
	  var D_SPECIAL_TOKEN_SEQUENCE_MODE = {
	    className: 'preprocessor',
	    begin: '#(line)',
	    end: '$',
	    relevance: 5
	  };

	  /**
	   * D attributes
	   *
	   * @type {Object}
	   */
	  var D_ATTRIBUTE_MODE = {
	    className: 'keyword',
	    begin: '@[a-zA-Z_][a-zA-Z_\\d]*'
	  };

	  /**
	   * D nesting comment
	   *
	   * @type {Object}
	   */
	  var D_NESTING_COMMENT_MODE = hljs.COMMENT(
	    '\\/\\+',
	    '\\+\\/',
	    {
	      contains: ['self'],
	      relevance: 10
	    }
	  );

	  return {
	    lexemes: hljs.UNDERSCORE_IDENT_RE,
	    keywords: D_KEYWORDS,
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        D_NESTING_COMMENT_MODE,
	        D_HEX_STRING_MODE,
	        D_STRING_MODE,
	        D_WYSIWYG_DELIMITED_STRING_MODE,
	        D_ALTERNATE_WYSIWYG_STRING_MODE,
	        D_TOKEN_STRING_MODE,
	        D_FLOAT_MODE,
	        D_INTEGER_MODE,
	        D_CHARACTER_MODE,
	        D_HASHBANG_MODE,
	        D_SPECIAL_TOKEN_SEQUENCE_MODE,
	        D_ATTRIBUTE_MODE
	    ]
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['md', 'mkdown', 'mkd'],
	    contains: [
	      // highlight headers
	      {
	        className: 'header',
	        variants: [
	          { begin: '^#{1,6}', end: '$' },
	          { begin: '^.+?\\n[=-]{2,}$' }
	        ]
	      },
	      // inline html
	      {
	        begin: '<', end: '>',
	        subLanguage: 'xml',
	        relevance: 0
	      },
	      // lists (indicators only)
	      {
	        className: 'bullet',
	        begin: '^([*+-]|(\\d+\\.))\\s+'
	      },
	      // strong segments
	      {
	        className: 'strong',
	        begin: '[*_]{2}.+?[*_]{2}'
	      },
	      // emphasis segments
	      {
	        className: 'emphasis',
	        variants: [
	          { begin: '\\*.+?\\*' },
	          { begin: '_.+?_'
	          , relevance: 0
	          }
	        ]
	      },
	      // blockquotes
	      {
	        className: 'blockquote',
	        begin: '^>\\s+', end: '$'
	      },
	      // code snippets
	      {
	        className: 'code',
	        variants: [
	          { begin: '`.+?`' },
	          { begin: '^( {4}|\t)', end: '$'
	          , relevance: 0
	          }
	        ]
	      },
	      // horizontal rules
	      {
	        className: 'horizontal_rule',
	        begin: '^[-\\*]{3,}', end: '$'
	      },
	      // using links - title and link
	      {
	        begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
	        returnBegin: true,
	        contains: [
	          {
	            className: 'link_label',
	            begin: '\\[', end: '\\]',
	            excludeBegin: true,
	            returnEnd: true,
	            relevance: 0
	          },
	          {
	            className: 'link_url',
	            begin: '\\]\\(', end: '\\)',
	            excludeBegin: true, excludeEnd: true
	          },
	          {
	            className: 'link_reference',
	            begin: '\\]\\[', end: '\\]',
	            excludeBegin: true, excludeEnd: true
	          }
	        ],
	        relevance: 10
	      },
	      {
	        begin: '^\\[\.+\\]:',
	        returnBegin: true,
	        contains: [
	          {
	            className: 'link_reference',
	            begin: '\\[', end: '\\]:',
	            excludeBegin: true, excludeEnd: true,
	            starts: {
	              className: 'link_url',
	              end: '$'
	            }
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (hljs) {
	  var SUBST = {
	    className: 'subst',
	    begin: '\\$\\{', end: '}',
	    keywords: 'true false null this is new super'
	  };

	  var STRING = {
	    className: 'string',
	    variants: [
	      {
	        begin: 'r\'\'\'', end: '\'\'\''
	      },
	      {
	        begin: 'r"""', end: '"""'
	      },
	      {
	        begin: 'r\'', end: '\'',
	        illegal: '\\n'
	      },
	      {
	        begin: 'r"', end: '"',
	        illegal: '\\n'
	      },
	      {
	        begin: '\'\'\'', end: '\'\'\'',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        begin: '"""', end: '"""',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        begin: '\'', end: '\'',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        begin: '"', end: '"',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      }
	    ]
	  };
	  SUBST.contains = [
	    hljs.C_NUMBER_MODE, STRING
	  ];

	  var KEYWORDS = {
	    keyword: 'assert break case catch class const continue default do else enum extends false final finally for if ' +
	      'in is new null rethrow return super switch this throw true try var void while with',
	    literal: 'abstract as dynamic export external factory get implements import library operator part set static typedef',
	    built_in:
	      // dart:core
	      'print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set ' +
	      'Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num ' +
	      // dart:html
	      'document window querySelector querySelectorAll Element ElementList'
	  };

	  return {
	    keywords: KEYWORDS,
	    contains: [
	      STRING,
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          subLanguage: 'markdown',
	          subLanguageMode: 'continuous'
	        }
	      ),
	      hljs.COMMENT(
	        '///',
	        '$',
	        {
	          subLanguage: 'markdown',
	          subLanguageMode: 'continuous'
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'annotation', begin: '@[A-Za-z]+'
	      },
	      {
	        begin: '=>' // No markup, just a relevance booster
	      }
	    ]
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var KEYWORDS =
	    'exports register file shl array record property for mod while set ally label uses raise not ' +
	    'stored class safecall var interface or private static exit index inherited to else stdcall ' +
	    'override shr asm far resourcestring finalization packed virtual out and protected library do ' +
	    'xorwrite goto near function end div overload object unit begin string on inline repeat until ' +
	    'destructor write message program with read initialization except default nil if case cdecl in ' +
	    'downto threadvar of try pascal const external constructor type public then implementation ' +
	    'finally published procedure';
	  var COMMENT_MODES = [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.COMMENT(
	      /\{/,
	      /\}/,
	      {
	        relevance: 0
	      }
	    ),
	    hljs.COMMENT(
	      /\(\*/,
	      /\*\)/,
	      {
	        relevance: 10
	      }
	    )
	  ];
	  var STRING = {
	    className: 'string',
	    begin: /'/, end: /'/,
	    contains: [{begin: /''/}]
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: /(#\d+)+/
	  };
	  var CLASS = {
	    begin: hljs.IDENT_RE + '\\s*=\\s*class\\s*\\(', returnBegin: true,
	    contains: [
	      hljs.TITLE_MODE
	    ]
	  };
	  var FUNCTION = {
	    className: 'function',
	    beginKeywords: 'function constructor destructor procedure', end: /[:;]/,
	    keywords: 'function constructor|10 destructor|10 procedure|10',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        className: 'params',
	        begin: /\(/, end: /\)/,
	        keywords: KEYWORDS,
	        contains: [STRING, CHAR_STRING]
	      }
	    ].concat(COMMENT_MODES)
	  };
	  return {
	    case_insensitive: true,
	    keywords: KEYWORDS,
	    illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
	    contains: [
	      STRING, CHAR_STRING,
	      hljs.NUMBER_MODE,
	      CLASS,
	      FUNCTION
	    ].concat(COMMENT_MODES)
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['patch'],
	    contains: [
	      {
	        className: 'chunk',
	        relevance: 10,
	        variants: [
	          {begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},
	          {begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/},
	          {begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/}
	        ]
	      },
	      {
	        className: 'header',
	        variants: [
	          {begin: /Index: /, end: /$/},
	          {begin: /=====/, end: /=====$/},
	          {begin: /^\-\-\-/, end: /$/},
	          {begin: /^\*{3} /, end: /$/},
	          {begin: /^\+\+\+/, end: /$/},
	          {begin: /\*{5}/, end: /\*{5}$/}
	        ]
	      },
	      {
	        className: 'addition',
	        begin: '^\\+', end: '$'
	      },
	      {
	        className: 'deletion',
	        begin: '^\\-', end: '$'
	      },
	      {
	        className: 'change',
	        begin: '^\\!', end: '$'
	      }
	    ]
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var FILTER = {
	    className: 'filter',
	    begin: /\|[A-Za-z]+:?/,
	    keywords:
	      'truncatewords removetags linebreaksbr yesno get_digit timesince random striptags ' +
	      'filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands ' +
	      'title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode ' +
	      'timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort ' +
	      'dictsortreversed default_if_none pluralize lower join center default ' +
	      'truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first ' +
	      'escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize ' +
	      'localtime utc timezone',
	    contains: [
	      {className: 'argument', begin: /"/, end: /"/},
	      {className: 'argument', begin: /'/, end: /'/}
	    ]
	  };

	  return {
	    aliases: ['jinja'],
	    case_insensitive: true,
	    subLanguage: 'xml', subLanguageMode: 'continuous',
	    contains: [
	      hljs.COMMENT(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/),
	      hljs.COMMENT(/\{#/, /#}/),
	      {
	        className: 'template_tag',
	        begin: /\{%/, end: /%}/,
	        keywords:
	          'comment endcomment load templatetag ifchanged endifchanged if endif firstof for ' +
	          'endfor in ifnotequal endifnotequal widthratio extends include spaceless ' +
	          'endspaceless regroup by as ifequal endifequal ssi now with cycle url filter ' +
	          'endfilter debug block endblock else autoescape endautoescape csrf_token empty elif ' +
	          'endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix ' +
	          'plural get_current_language language get_available_languages ' +
	          'get_current_language_bidi get_language_info get_language_info_list localize ' +
	          'endlocalize localtime endlocaltime timezone endtimezone get_current_timezone ' +
	          'verbatim',
	        contains: [FILTER]
	      },
	      {
	        className: 'variable',
	        begin: /\{\{/, end: /}}/,
	        contains: [FILTER]
	      }
	    ]
	  };
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['bind', 'zone'],
	    keywords: {
	      keyword:
	        'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX ' +
	        'LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT'
	    },
	    contains: [
	      hljs.COMMENT(';', '$'),
	      {
	        className: 'operator',
	        beginKeywords: '$TTL $GENERATE $INCLUDE $ORIGIN'
	      },
	      // IPv6
	      {
	        className: 'number',
	        begin: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))'
	      },
	      // IPv4
	      {
	        className: 'number',
	        begin: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])'
	      }
	    ]
	  };
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['docker'],
	    case_insensitive: true,
	    keywords: {
	      built_ins: 'from maintainer cmd expose add copy entrypoint volume user workdir onbuild run env'
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        keywords : {
	          built_in: 'run cmd entrypoint volume add copy workdir onbuild'
	        },
	        begin: /^ *(onbuild +)?(run|cmd|entrypoint|volume|add|copy|workdir) +/,
	        starts: {
	          end: /[^\\]\n/,
	          subLanguage: 'bash', subLanguageMode: 'continuous'
	        }
	      },
	      {
	        keywords: {
	          built_in: 'from maintainer expose env user onbuild'
	        },
	        begin: /^ *(onbuild +)?(from|maintainer|expose|env|user|onbuild) +/, end: /[^\\]\n/,
	        contains: [
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.NUMBER_MODE,
	          hljs.HASH_COMMENT_MODE
	        ]
	      }
	    ]
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var COMMENT = hljs.COMMENT(
	    /@?rem\b/, /$/,
	    {
	      relevance: 10
	    }
	  );
	  var LABEL = {
	    className: 'label',
	    begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
	    relevance: 0
	  };
	  return {
	    aliases: ['bat', 'cmd'],
	    case_insensitive: true,
	    keywords: {
	      flow: 'if else goto for in do call exit not exist errorlevel defined',
	      operator: 'equ neq lss leq gtr geq',
	      keyword: 'shift cd dir echo setlocal endlocal set pause copy',
	      stream: 'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux',
	      winutils: 'ping net ipconfig taskkill xcopy ren del',
	      built_in: 'append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color ' +
	        'comp compact convert date dir diskcomp diskcopy doskey erase fs ' +
	        'find findstr format ftype graftabl help keyb label md mkdir mode more move path ' +
	        'pause print popd pushd promt rd recover rem rename replace restore rmdir shift' +
	        'sort start subst time title tree type ver verify vol'
	    },
	    contains: [
	      {
	        className: 'envvar', begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
	      },
	      {
	        className: 'function',
	        begin: LABEL.begin, end: 'goto:eof',
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
	          COMMENT
	        ]
	      },
	      {
	        className: 'number', begin: '\\b\\d+',
	        relevance: 0
	      },
	      COMMENT
	    ]
	  };
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
	  return {
	    aliases: ['dst'],
	    case_insensitive: true,
	    subLanguage: 'xml', subLanguageMode: 'continuous',
	    contains: [
	      {
	        className: 'expression',
	        begin: '{', end: '}',
	        relevance: 0,
	        contains: [
	          {
	            className: 'begin-block', begin: '\#[a-zA-Z\-\ \.]+',
	            keywords: EXPRESSION_KEYWORDS
	          },
	          {
	            className: 'string',
	            begin: '"', end: '"'
	          },
	          {
	            className: 'end-block', begin: '\\\/[a-zA-Z\-\ \.]+',
	            keywords: EXPRESSION_KEYWORDS
	          },
	          {
	            className: 'variable', begin: '[a-zA-Z\-\.]+',
	            keywords: EXPRESSION_KEYWORDS,
	            relevance: 0
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var ELIXIR_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?';
	  var ELIXIR_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
	  var ELIXIR_KEYWORDS =
	    'and false then defined module in return redo retry end for true self when ' +
	    'next until do begin unless nil break not case cond alias while ensure or ' +
	    'include use alias fn quote';
	  var SUBST = {
	    className: 'subst',
	    begin: '#\\{', end: '}',
	    lexemes: ELIXIR_IDENT_RE,
	    keywords: ELIXIR_KEYWORDS
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {
	        begin: /'/, end: /'/
	      },
	      {
	        begin: /"/, end: /"/
	      }
	    ]
	  };
	  var FUNCTION = {
	    className: 'function',
	    beginKeywords: 'def defp defmacro', end: /\B\b/, // the mode is ended by the title
	    contains: [
	      hljs.inherit(hljs.TITLE_MODE, {
	        begin: ELIXIR_IDENT_RE,
	        endsParent: true
	      })
	    ]
	  };
	  var CLASS = hljs.inherit(FUNCTION, {
	    className: 'class',
	    beginKeywords: 'defmodule defrecord', end: /\bdo\b|$|;/
	  });
	  var ELIXIR_DEFAULT_CONTAINS = [
	    STRING,
	    hljs.HASH_COMMENT_MODE,
	    CLASS,
	    FUNCTION,
	    {
	      className: 'constant',
	      begin: '(\\b[A-Z_]\\w*(.)?)+',
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ':',
	      contains: [STRING, {begin: ELIXIR_METHOD_RE}],
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ELIXIR_IDENT_RE + ':',
	      relevance: 0
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    {
	      className: 'variable',
	      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))'
	    },
	    {
	      begin: '->'
	    },
	    { // regexp container
	      begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        {
	          className: 'regexp',
	          illegal: '\\n',
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	          variants: [
	            {
	              begin: '/', end: '/[a-z]*'
	            },
	            {
	              begin: '%r\\[', end: '\\][a-z]*'
	            }
	          ]
	        }
	      ],
	      relevance: 0
	    }
	  ];
	  SUBST.contains = ELIXIR_DEFAULT_CONTAINS;

	  return {
	    lexemes: ELIXIR_IDENT_RE,
	    keywords: ELIXIR_KEYWORDS,
	    contains: ELIXIR_DEFAULT_CONTAINS
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var RUBY_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
	  var RUBY_KEYWORDS =
	    'and false then defined module in return redo if BEGIN retry end for true self when ' +
	    'next until do begin unless END rescue nil else break undef not super class case ' +
	    'require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor';
	  var YARDOCTAG = {
	    className: 'doctag',
	    begin: '@[A-Za-z]+'
	  };
	  var IRB_OBJECT = {
	    className: 'value',
	    begin: '#<', end: '>'
	  };
	  var COMMENT_MODES = [
	    hljs.COMMENT(
	      '#',
	      '$',
	      {
	        contains: [YARDOCTAG]
	      }
	    ),
	    hljs.COMMENT(
	      '^\\=begin',
	      '^\\=end',
	      {
	        contains: [YARDOCTAG],
	        relevance: 10
	      }
	    ),
	    hljs.COMMENT('^__END__', '\\n$')
	  ];
	  var SUBST = {
	    className: 'subst',
	    begin: '#\\{', end: '}',
	    keywords: RUBY_KEYWORDS
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/},
	      {begin: /`/, end: /`/},
	      {begin: '%[qQwWx]?\\(', end: '\\)'},
	      {begin: '%[qQwWx]?\\[', end: '\\]'},
	      {begin: '%[qQwWx]?{', end: '}'},
	      {begin: '%[qQwWx]?<', end: '>'},
	      {begin: '%[qQwWx]?/', end: '/'},
	      {begin: '%[qQwWx]?%', end: '%'},
	      {begin: '%[qQwWx]?-', end: '-'},
	      {begin: '%[qQwWx]?\\|', end: '\\|'},
	      {
	        // \B in the beginning suppresses recognition of ?-sequences where ?
	        // is the last character of a preceding identifier, as in: `func?4`
	        begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
	      }
	    ]
	  };
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)',
	    keywords: RUBY_KEYWORDS
	  };

	  var RUBY_DEFAULT_CONTAINS = [
	    STRING,
	    IRB_OBJECT,
	    {
	      className: 'class',
	      beginKeywords: 'class module', end: '$|;',
	      illegal: /=/,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
	        {
	          className: 'inheritance',
	          begin: '<\\s*',
	          contains: [{
	            className: 'parent',
	            begin: '(' + hljs.IDENT_RE + '::)?' + hljs.IDENT_RE
	          }]
	        }
	      ].concat(COMMENT_MODES)
	    },
	    {
	      className: 'function',
	      beginKeywords: 'def', end: ' |$|;',
	      relevance: 0,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {begin: RUBY_METHOD_RE}),
	        PARAMS
	      ].concat(COMMENT_MODES)
	    },
	    {
	      className: 'constant',
	      begin: '(::)?(\\b[A-Z]\\w*(::)?)+',
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ':',
	      contains: [STRING, {begin: RUBY_METHOD_RE}],
	      relevance: 0
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    {
	      className: 'variable',
	      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))'
	    },
	    { // regexp container
	      begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
	      contains: [
	        IRB_OBJECT,
	        {
	          className: 'regexp',
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	          illegal: /\n/,
	          variants: [
	            {begin: '/', end: '/[a-z]*'},
	            {begin: '%r{', end: '}[a-z]*'},
	            {begin: '%r\\(', end: '\\)[a-z]*'},
	            {begin: '%r!', end: '![a-z]*'},
	            {begin: '%r\\[', end: '\\][a-z]*'}
	          ]
	        }
	      ].concat(COMMENT_MODES),
	      relevance: 0
	    }
	  ].concat(COMMENT_MODES);

	  SUBST.contains = RUBY_DEFAULT_CONTAINS;
	  PARAMS.contains = RUBY_DEFAULT_CONTAINS;

	  var SIMPLE_PROMPT = "[>?]>";
	  var DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+>";
	  var RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>";

	  var IRB_DEFAULT = [
	    {
	      begin: /^\s*=>/,
	      className: 'status',
	      starts: {
	        end: '$', contains: RUBY_DEFAULT_CONTAINS
	      }
	    },
	    {
	      className: 'prompt',
	      begin: '^('+SIMPLE_PROMPT+"|"+DEFAULT_PROMPT+'|'+RVM_PROMPT+')',
	      starts: {
	        end: '$', contains: RUBY_DEFAULT_CONTAINS
	      }
	    }
	  ];

	  return {
	    aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
	    keywords: RUBY_KEYWORDS,
	    contains: COMMENT_MODES.concat(IRB_DEFAULT).concat(RUBY_DEFAULT_CONTAINS)
	  };
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    subLanguage: 'xml', subLanguageMode: 'continuous',
	    contains: [
	      hljs.COMMENT('<%#', '%>'),
	      {
	        begin: '<%[%=-]?', end: '[%-]?%>',
	        subLanguage: 'ruby',
	        excludeBegin: true,
	        excludeEnd: true
	      }
	    ]
	  };
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      special_functions:
	        'spawn spawn_link self',
	      reserved:
	        'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if ' +
	        'let not of or orelse|10 query receive rem try when xor'
	    },
	    contains: [
	      {
	        className: 'prompt', begin: '^[0-9]+> ',
	        relevance: 10
	      },
	      hljs.COMMENT('%', '$'),
	      {
	        className: 'number',
	        begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
	        relevance: 0
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'constant', begin: '\\?(::)?([A-Z]\\w*(::)?)+'
	      },
	      {
	        className: 'arrow', begin: '->'
	      },
	      {
	        className: 'ok', begin: 'ok'
	      },
	      {
	        className: 'exclamation_mark', begin: '!'
	      },
	      {
	        className: 'function_or_atom',
	        begin: '(\\b[a-z\'][a-zA-Z0-9_\']*:[a-z\'][a-zA-Z0-9_\']*)|(\\b[a-z\'][a-zA-Z0-9_\']*)',
	        relevance: 0
	      },
	      {
	        className: 'variable',
	        begin: '[A-Z][a-zA-Z0-9_\']*',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var BASIC_ATOM_RE = '[a-z\'][a-zA-Z0-9_\']*';
	  var FUNCTION_NAME_RE = '(' + BASIC_ATOM_RE + ':' + BASIC_ATOM_RE + '|' + BASIC_ATOM_RE + ')';
	  var ERLANG_RESERVED = {
	    keyword:
	      'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if ' +
	      'let not of orelse|10 query receive rem try when xor',
	    literal:
	      'false true'
	  };

	  var COMMENT = hljs.COMMENT('%', '$');
	  var NUMBER = {
	    className: 'number',
	    begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
	    relevance: 0
	  };
	  var NAMED_FUN = {
	    begin: 'fun\\s+' + BASIC_ATOM_RE + '/\\d+'
	  };
	  var FUNCTION_CALL = {
	    begin: FUNCTION_NAME_RE + '\\(', end: '\\)',
	    returnBegin: true,
	    relevance: 0,
	    contains: [
	      {
	        className: 'function_name', begin: FUNCTION_NAME_RE,
	        relevance: 0
	      },
	      {
	        begin: '\\(', end: '\\)', endsWithParent: true,
	        returnEnd: true,
	        relevance: 0
	        // "contains" defined later
	      }
	    ]
	  };
	  var TUPLE = {
	    className: 'tuple',
	    begin: '{', end: '}',
	    relevance: 0
	    // "contains" defined later
	  };
	  var VAR1 = {
	    className: 'variable',
	    begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
	    relevance: 0
	  };
	  var VAR2 = {
	    className: 'variable',
	    begin: '[A-Z][a-zA-Z0-9_]*',
	    relevance: 0
	  };
	  var RECORD_ACCESS = {
	    begin: '#' + hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0,
	    returnBegin: true,
	    contains: [
	      {
	        className: 'record_name',
	        begin: '#' + hljs.UNDERSCORE_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: '{', end: '}',
	        relevance: 0
	        // "contains" defined later
	      }
	    ]
	  };

	  var BLOCK_STATEMENTS = {
	    beginKeywords: 'fun receive if try case', end: 'end',
	    keywords: ERLANG_RESERVED
	  };
	  BLOCK_STATEMENTS.contains = [
	    COMMENT,
	    NAMED_FUN,
	    hljs.inherit(hljs.APOS_STRING_MODE, {className: ''}),
	    BLOCK_STATEMENTS,
	    FUNCTION_CALL,
	    hljs.QUOTE_STRING_MODE,
	    NUMBER,
	    TUPLE,
	    VAR1, VAR2,
	    RECORD_ACCESS
	  ];

	  var BASIC_MODES = [
	    COMMENT,
	    NAMED_FUN,
	    BLOCK_STATEMENTS,
	    FUNCTION_CALL,
	    hljs.QUOTE_STRING_MODE,
	    NUMBER,
	    TUPLE,
	    VAR1, VAR2,
	    RECORD_ACCESS
	  ];
	  FUNCTION_CALL.contains[1].contains = BASIC_MODES;
	  TUPLE.contains = BASIC_MODES;
	  RECORD_ACCESS.contains[1].contains = BASIC_MODES;

	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)',
	    contains: BASIC_MODES
	  };
	  return {
	    aliases: ['erl'],
	    keywords: ERLANG_RESERVED,
	    illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
	    contains: [
	      {
	        className: 'function',
	        begin: '^' + BASIC_ATOM_RE + '\\s*\\(', end: '->',
	        returnBegin: true,
	        illegal: '\\(|#|//|/\\*|\\\\|:|;',
	        contains: [
	          PARAMS,
	          hljs.inherit(hljs.TITLE_MODE, {begin: BASIC_ATOM_RE})
	        ],
	        starts: {
	          end: ';|\\.',
	          keywords: ERLANG_RESERVED,
	          contains: BASIC_MODES
	        }
	      },
	      COMMENT,
	      {
	        className: 'pp',
	        begin: '^-', end: '\\.',
	        relevance: 0,
	        excludeEnd: true,
	        returnBegin: true,
	        lexemes: '-' + hljs.IDENT_RE,
	        keywords:
	          '-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn ' +
	          '-import -include -include_lib -compile -define -else -endif -file -behaviour ' +
	          '-behavior -spec',
	        contains: [PARAMS]
	      },
	      NUMBER,
	      hljs.QUOTE_STRING_MODE,
	      RECORD_ACCESS,
	      VAR1, VAR2,
	      TUPLE,
	      {begin: /\.$/} // relevance booster
	    ]
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	    {
	      begin: /[^\u2401\u0001]+/,
	      end: /[\u2401\u0001]/,
	      excludeEnd: true,
	      returnBegin: true,
	      returnEnd: false,
	      contains: [
	      {
	        begin: /([^\u2401\u0001=]+)/,
	        end: /=([^\u2401\u0001=]+)/,
	        returnEnd: true,
	        returnBegin: false,
	        className: 'attribute'
	      },
	      {
	        begin: /=/,
	        end: /([\u2401\u0001])/,
	        excludeEnd: true,
	        excludeBegin: true,
	        className: 'string'
	      }]
	    }],
	    case_insensitive: true
	  };
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)'
	  };

	  var F_KEYWORDS = {
	    constant: '.False. .True.',
	    type: 'integer real character complex logical dimension allocatable|10 parameter ' +
	      'external implicit|10 none double precision assign intent optional pointer ' +
	      'target in out common equivalence data',
	    keyword: 'kind do while private call intrinsic where elsewhere ' +
	      'type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then ' +
	      'public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. ' +
	      'goto save else use module select case ' +
	      'access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit ' +
	      'continue format pause cycle exit ' +
	      'c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg ' +
	      'synchronous nopass non_overridable pass protected volatile abstract extends import ' +
	      'non_intrinsic value deferred generic final enumerator class associate bind enum ' +
	      'c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t ' +
	      'c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double ' +
	      'c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr ' +
	      'c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer ' +
	      'c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor ' +
	      'numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ' +
	      'ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous ' +
	      'pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure',
	    built_in: 'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint ' +
	      'dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl ' +
	      'algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama ' +
	      'iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod ' +
	      'qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log ' +
	      'log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate ' +
	      'adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product ' +
	      'eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul ' +
	      'maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product ' +
	      'radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind ' +
	      'set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer ' +
	      'dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ' +
	      'ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode ' +
	      'is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of'  +
	      'acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 ' +
	      'atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits ' +
	      'bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr ' +
	      'num_images parity popcnt poppar shifta shiftl shiftr this_image'
	  };
	  return {
	    case_insensitive: true,
	    aliases: ['f90', 'f95'],
	    keywords: F_KEYWORDS,
	    contains: [
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE,{className: 'string', relevance: 0}),
	      {
	        className: 'function',
	        beginKeywords: 'subroutine function program',
	        illegal: '[${=\\n]',
	        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
	      },
	      hljs.COMMENT('!', '$', {relevance: 0}),
	      {
	        className: 'number',
	        begin: '(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var TYPEPARAM = {
	    begin: '<', end: '>',
	    contains: [
	      hljs.inherit(hljs.TITLE_MODE, {begin: /'[a-zA-Z0-9_]+/})
	    ]
	  };

	  return {
	    aliases: ['fs'],
	    keywords:
	      // monad builder keywords (at top, matches before non-bang kws)
	      'yield! return! let! do!' +
	      // regular keywords
	      'abstract and as assert base begin class default delegate do done ' +
	      'downcast downto elif else end exception extern false finally for ' +
	      'fun function global if in inherit inline interface internal lazy let ' +
	      'match member module mutable namespace new null of open or ' +
	      'override private public rec return sig static struct then to ' +
	      'true try type upcast use val void when while with yield',
	    contains: [
	      {
	        className: 'string',
	        begin: '@"', end: '"',
	        contains: [{begin: '""'}]
	      },
	      {
	        className: 'string',
	        begin: '"""', end: '"""'
	      },
	      hljs.COMMENT('\\(\\*', '\\*\\)'),
	      {
	        className: 'class',
	        beginKeywords: 'type', end: '\\(|=|$', excludeEnd: true,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          TYPEPARAM
	        ]
	      },
	      {
	        className: 'annotation',
	        begin: '\\[<', end: '>\\]',
	        relevance: 10
	      },
	      {
	        className: 'attribute',
	        begin: '\\B(\'[A-Za-z])\\b',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	    var GCODE_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
	    var GCODE_CLOSE_RE = '\\%';
	    var GCODE_KEYWORDS = {
	        literal:
	            '',
	        built_in:
	            '',
	        keyword:
	            'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT ' +
	            'EQ LT GT NE GE LE OR XOR'
	    };
	    var GCODE_START = {
	        className: 'preprocessor',
	        begin: '([O])([0-9]+)'
	    };
	    var GCODE_CODE = [
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        hljs.COMMENT(/\(/, /\)/),
	        hljs.inherit(hljs.C_NUMBER_MODE, {begin: '([-+]?([0-9]*\\.?[0-9]+\\.?))|' + hljs.C_NUMBER_RE}),
	        hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	        hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	        {
	            className: 'keyword',
	            begin: '([G])([0-9]+\\.?[0-9]?)'
	        },
	        {
	            className: 'title',
	            begin: '([M])([0-9]+\\.?[0-9]?)'
	        },
	        {
	            className: 'title',
	            begin: '(VC|VS|#)',
	            end: '(\\d+)'
	        },
	        {
	            className: 'title',
	            begin: '(VZOFX|VZOFY|VZOFZ)'
	        },
	        {
	            className: 'built_in',
	            begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)',
	            end: '([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])'
	        },
	        {
	            className: 'label',
	            variants: [
	                {
	                    begin: 'N', end: '\\d+',
	                    illegal: '\\W'
	                }
	            ]
	        }
	    ];

	    return {
	        aliases: ['nc'],
	        // Some implementations (CNC controls) of G-code are interoperable with uppercase and lowercase letters seamlessly.
	        // However, most prefer all uppercase and uppercase is customary.
	        case_insensitive: true,
	        lexemes: GCODE_IDENT_RE,
	        keywords: GCODE_KEYWORDS,
	        contains: [
	            {
	                className: 'preprocessor',
	                begin: GCODE_CLOSE_RE
	            },
	            GCODE_START
	        ].concat(GCODE_CODE)
	    };
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (hljs) {
	  return {
	    aliases: ['feature'],
	    keywords: 'Feature Background Ability Business\ Need Scenario Scenarios Scenario\ Outline Scenario\ Template Examples Given And Then But When',
	    contains: [
	      {
	        className: 'keyword',
	        begin: '\\*'
	      },
	      hljs.COMMENT('@[^@\r\n\t ]+', '$'),
	      {
	        begin: '\\|', end: '\\|\\w*$',
	        contains: [
	          {
	            className: 'string',
	            begin: '[^|]+'
	          }
	        ]
	      },
	      {
	        className: 'variable',
	        begin: '<', end: '>'
	      },
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'string',
	        begin: '"""', end: '"""'
	      },
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        'atomic_uint attribute bool break bvec2 bvec3 bvec4 case centroid coherent const continue default ' +
	        'discard dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 ' +
	        'dmat4x4 do double dvec2 dvec3 dvec4 else flat float for highp if iimage1D iimage1DArray ' +
	        'iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube ' +
	        'iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect ' +
	        'image3D imageBuffer imageCube imageCubeArray in inout int invariant isampler1D isampler1DArray ' +
	        'isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer ' +
	        'isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 layout lowp mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 ' +
	        'mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 mediump noperspective out patch precision readonly restrict ' +
	        'return sample sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray ' +
	        'sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow ' +
	        'sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow smooth ' +
	        'struct subroutine switch uimage1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray ' +
	        'uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint uniform usampler1D usampler1DArray ' +
	        'usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D usamplerBuffer ' +
	        'usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 varying vec2 vec3 vec4 void volatile while writeonly',
	      built_in:
	        'gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial ' +
	        'gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color ' +
	        'gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord ' +
	        'gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor ' +
	        'gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial ' +
	        'gl_FrontSecondaryColor gl_InstanceID gl_InvocationID gl_Layer gl_LightModel ' +
	        'gl_LightSource gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize ' +
	        'gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers ' +
	        'gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs ' +
	        'gl_MaxCombinedTextureImageUnits gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers ' +
	        'gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents ' +
	        'gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers ' +
	        'gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents ' +
	        'gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits ' +
	        'gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents ' +
	        'gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset ' +
	        'gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms ' +
	        'gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits ' +
	        'gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents ' +
	        'gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters ' +
	        'gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents ' +
	        'gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents ' +
	        'gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits ' +
	        'gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors ' +
	        'gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs ' +
	        'gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexTextureImageUnits ' +
	        'gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset'+
	        'gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose ' +
	        'gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse ' +
	        'gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose ' +
	        'gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 ' +
	        'gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix ' +
	        'gl_NormalScale gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn ' +
	        'gl_PerVertex gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn ' +
	        'gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose ' +
	        'gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition ' +
	        'gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor ' +
	        'gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID ' +
	        'gl_ViewportIndex gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive ' +
	        'abs acos acosh all any asin asinh atan atanh atomicCounter atomicCounterDecrement ' +
	        'atomicCounterIncrement barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ' +
	        'ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward ' +
	        'findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan ' +
	        'greaterThanEqual imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange ' +
	        'imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageStore imulExtended ' +
	        'intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt ' +
	        'isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier ' +
	        'min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 ' +
	        'packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract ' +
	        'round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj ' +
	        'shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture ' +
	        'texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj ' +
	        'texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod ' +
	        'textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod ' +
	        'textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod ' +
	        'textureProjLodOffset textureProjOffset textureQueryLod textureSize transpose trunc uaddCarry ' +
	        'uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 ' +
	        'unpackUnorm2x16 unpackUnorm4x8 usubBorrow gl_TextureMatrix gl_TextureMatrixInverse',
	      literal: 'true false'
	    },
	    illegal: '"',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'preprocessor',
	        begin: '#', end: '$'
	      }
	    ]
	  };
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var GO_KEYWORDS = {
	    keyword:
	      'break default func interface select case map struct chan else goto package switch ' +
	      'const fallthrough if range type continue for import return var go defer',
	    constant:
	       'true false iota nil',
	    typename:
	      'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' +
	      'uint16 uint32 uint64 int uint uintptr rune',
	    built_in:
	      'append cap close complex copy imag len make new panic print println real recover delete'
	  };
	  return {
	    aliases: ["golang"],
	    keywords: GO_KEYWORDS,
	    illegal: '</',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'', end: '[^\\\\]\''
	      },
	      {
	        className: 'string',
	        begin: '`', end: '`'
	      },
	      {
	        className: 'number',
	        begin: hljs.C_NUMBER_RE + '[dflsi]?',
	        relevance: 0
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'task project allprojects subprojects artifacts buildscript configurations ' +
	        'dependencies repositories sourceSets description delete from into include ' +
	        'exclude source classpath destinationDir includes options sourceCompatibility ' +
	        'targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant ' +
	        'def abstract break case catch continue default do else extends final finally ' +
	        'for if implements instanceof native new private protected public return static ' +
	        'switch synchronized throw throws transient try volatile while strictfp package ' +
	        'import false null super this true antlrtask checkstyle codenarc copy boolean ' +
	        'byte char class double float int interface long short void compile runTime ' +
	        'file fileTree abs any append asList asWritable call collect compareTo count ' +
	        'div dump each eachByte eachFile eachLine every find findAll flatten getAt ' +
	        'getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods ' +
	        'isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter ' +
	        'newReader newWriter next plus pop power previous print println push putAt read ' +
	        'readBytes readLines reverse reverseEach round size sort splitEachLine step subMap ' +
	        'times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader ' +
	        'withStream withWriter withWriterAppend write writeLine'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.REGEXP_MODE

	    ]
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	    return {
	        keywords: {
	            typename: 'byte short char int long boolean float double void',
	            literal : 'true false null',
	            keyword:
	            // groovy specific keywords
	            'def as in assert trait ' +
	            // common keywords with Java
	            'super this abstract static volatile transient public private protected synchronized final ' +
	            'class interface enum if else for while switch case break default continue ' +
	            'throw throws try catch finally implements extends new import package return instanceof'
	        },

	        contains: [
	            hljs.COMMENT(
	                '/\\*\\*',
	                '\\*/',
	                {
	                    relevance : 0,
	                    contains : [{
	                        className : 'doctag',
	                        begin : '@[A-Za-z]+'
	                    }]
	                }
	            ),
	            hljs.C_LINE_COMMENT_MODE,
	            hljs.C_BLOCK_COMMENT_MODE,
	            {
	                className: 'string',
	                begin: '"""', end: '"""'
	            },
	            {
	                className: 'string',
	                begin: "'''", end: "'''"
	            },
	            {
	                className: 'string',
	                begin: "\\$/", end: "/\\$",
	                relevance: 10
	            },
	            hljs.APOS_STRING_MODE,
	            {
	                className: 'regexp',
	                begin: /~?\/[^\/\n]+\//,
	                contains: [
	                    hljs.BACKSLASH_ESCAPE
	                ]
	            },
	            hljs.QUOTE_STRING_MODE,
	            {
	                className: 'shebang',
	                begin: "^#!/usr/bin/env", end: '$',
	                illegal: '\n'
	            },
	            hljs.BINARY_NUMBER_MODE,
	            {
	                className: 'class',
	                beginKeywords: 'class interface trait enum', end: '{',
	                illegal: ':',
	                contains: [
	                    {beginKeywords: 'extends implements'},
	                    hljs.UNDERSCORE_TITLE_MODE,
	                ]
	            },
	            hljs.C_NUMBER_MODE,
	            {
	                className: 'annotation', begin: '@[A-Za-z]+'
	            },
	            {
	                // highlight map keys and named parameters as strings
	                className: 'string', begin: /[^\?]{0}[A-Za-z0-9_$]+ *:/
	            },
	            {
	                // catch middle element of the ternary operator
	                // to avoid highlight it as a label, named parameter, or map key
	                begin: /\?/, end: /\:/
	            },
	            {
	                // highlight labeled statements
	                className: 'label', begin: '^\\s*[A-Za-z0-9_$]+:',
	                relevance: 0
	            },
	        ]
	    }
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = // TODO support filter tags like :javascript, support inline HTML
	function(hljs) {
	  return {
	    case_insensitive: true,
	    contains: [
	      {
	        className: 'doctype',
	        begin: '^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$',
	        relevance: 10
	      },
	      // FIXME these comments should be allowed to span indented lines
	      hljs.COMMENT(
	        '^\\s*(!=#|=#|-#|/).*$',
	        false,
	        {
	          relevance: 0
	        }
	      ),
	      {
	        begin: '^\\s*(-|=|!=)(?!#)',
	        starts: {
	          end: '\\n',
	          subLanguage: 'ruby'
	        }
	      },
	      {
	        className: 'tag',
	        begin: '^\\s*%',
	        contains: [
	          {
	            className: 'title',
	            begin: '\\w+'
	          },
	          {
	            className: 'value',
	            begin: '[#\\.][\\w-]+'
	          },
	          {
	            begin: '{\\s*',
	            end: '\\s*}',
	            excludeEnd: true,
	            contains: [
	              {
	                //className: 'attribute',
	                begin: ':\\w+\\s*=>',
	                end: ',\\s+',
	                returnBegin: true,
	                endsWithParent: true,
	                contains: [
	                  {
	                    className: 'symbol',
	                    begin: ':\\w+'
	                  },
	                  hljs.APOS_STRING_MODE,
	                  hljs.QUOTE_STRING_MODE,
	                  {
	                    begin: '\\w+',
	                    relevance: 0
	                  }
	                ]
	              }
	            ]
	          },
	          {
	            begin: '\\(\\s*',
	            end: '\\s*\\)',
	            excludeEnd: true,
	            contains: [
	              {
	                //className: 'attribute',
	                begin: '\\w+\\s*=',
	                end: '\\s+',
	                returnBegin: true,
	                endsWithParent: true,
	                contains: [
	                  {
	                    className: 'attribute',
	                    begin: '\\w+',
	                    relevance: 0
	                  },
	                  hljs.APOS_STRING_MODE,
	                  hljs.QUOTE_STRING_MODE,
	                  {
	                    begin: '\\w+',
	                    relevance: 0
	                  }
	                ]
	              }
	            ]
	          }
	        ]
	      },
	      {
	        className: 'bullet',
	        begin: '^\\s*[=~]\\s*',
	        relevance: 0
	      },
	      {
	        begin: '#{',
	        starts: {
	          end: '}',
	          subLanguage: 'ruby'
	        }
	      }
	    ]
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var EXPRESSION_KEYWORDS = 'each in with if else unless bindattr action collection debugger log outlet template unbound view yield';
	  return {
	    aliases: ['hbs', 'html.hbs', 'html.handlebars'],
	    case_insensitive: true,
	    subLanguage: 'xml', subLanguageMode: 'continuous',
	    contains: [
	      {
	        className: 'expression',
	        begin: '{{', end: '}}',
	        contains: [
	          {
	            className: 'begin-block', begin: '\#[a-zA-Z\-\ \.]+',
	            keywords: EXPRESSION_KEYWORDS
	          },
	          {
	            className: 'string',
	            begin: '"', end: '"'
	          },
	          {
	            className: 'end-block', begin: '\\\/[a-zA-Z\-\ \.]+',
	            keywords: EXPRESSION_KEYWORDS
	          },
	          {
	            className: 'variable', begin: '[a-zA-Z\-\.]+',
	            keywords: EXPRESSION_KEYWORDS
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var COMMENT_MODES = [
	    hljs.COMMENT('--', '$'),
	    hljs.COMMENT(
	      '{-',
	      '-}',
	      {
	        contains: ['self']
	      }
	    )
	  ];

	  var PRAGMA = {
	    className: 'pragma',
	    begin: '{-#', end: '#-}'
	  };

	  var PREPROCESSOR = {
	    className: 'preprocessor',
	    begin: '^#', end: '$'
	  };

	  var CONSTRUCTOR = {
	    className: 'type',
	    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (build-in, infix).
	    relevance: 0
	  };

	  var LIST = {
	    className: 'container',
	    begin: '\\(', end: '\\)',
	    illegal: '"',
	    contains: [
	      PRAGMA,
	      PREPROCESSOR,
	      {className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'},
	      hljs.inherit(hljs.TITLE_MODE, {begin: '[_a-z][\\w\']*'})
	    ].concat(COMMENT_MODES)
	  };

	  var RECORD = {
	    className: 'container',
	    begin: '{', end: '}',
	    contains: LIST.contains
	  };

	  return {
	    aliases: ['hs'],
	    keywords:
	      'let in if then else case of where do module import hiding ' +
	      'qualified type data newtype deriving class instance as default ' +
	      'infix infixl infixr foreign export ccall stdcall cplusplus ' +
	      'jvm dotnet safe unsafe family forall mdo proc rec',
	    contains: [

	      // Top-level constructions.

	      {
	        className: 'module',
	        begin: '\\bmodule\\b', end: 'where',
	        keywords: 'module where',
	        contains: [LIST].concat(COMMENT_MODES),
	        illegal: '\\W\\.|;'
	      },
	      {
	        className: 'import',
	        begin: '\\bimport\\b', end: '$',
	        keywords: 'import|0 qualified as hiding',
	        contains: [LIST].concat(COMMENT_MODES),
	        illegal: '\\W\\.|;'
	      },

	      {
	        className: 'class',
	        begin: '^(\\s*)?(class|instance)\\b', end: 'where',
	        keywords: 'class family instance where',
	        contains: [CONSTRUCTOR, LIST].concat(COMMENT_MODES)
	      },
	      {
	        className: 'typedef',
	        begin: '\\b(data|(new)?type)\\b', end: '$',
	        keywords: 'data family type newtype deriving',
	        contains: [PRAGMA, CONSTRUCTOR, LIST, RECORD].concat(COMMENT_MODES)
	      },
	      {
	        className: 'default',
	        beginKeywords: 'default', end: '$',
	        contains: [CONSTRUCTOR, LIST].concat(COMMENT_MODES)
	      },
	      {
	        className: 'infix',
	        beginKeywords: 'infix infixl infixr', end: '$',
	        contains: [hljs.C_NUMBER_MODE].concat(COMMENT_MODES)
	      },
	      {
	        className: 'foreign',
	        begin: '\\bforeign\\b', end: '$',
	        keywords: 'foreign import export ccall stdcall cplusplus jvm ' +
	                  'dotnet safe unsafe',
	        contains: [CONSTRUCTOR, hljs.QUOTE_STRING_MODE].concat(COMMENT_MODES)
	      },
	      {
	        className: 'shebang',
	        begin: '#!\\/usr\\/bin\\/env\ runhaskell', end: '$'
	      },

	      // "Whitespaces".

	      PRAGMA,
	      PREPROCESSOR,

	      // Literals and names.

	      // TODO: characters.
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      CONSTRUCTOR,
	      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\w\']*'}),

	      {begin: '->|<-'} // No markup, relevance booster
	    ].concat(COMMENT_MODES)
	  };
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
	  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

	  return {
	    aliases: ['hx'],
	    keywords: {
	      keyword: 'break callback case cast catch class continue default do dynamic else enum extends extern ' +
	    'for function here if implements import in inline interface never new override package private ' +
	    'public return static super switch this throw trace try typedef untyped using var while',
	      literal: 'true false null'
	    },
	    contains: [
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.TITLE_MODE
	        ]
	      },
	      {
	        className: 'preprocessor',
	        begin: '#', end: '$',
	        keywords: 'if else elseif end error'
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '[{;]', excludeEnd: true,
	        illegal: '\\S',
	        contains: [
	          hljs.TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          {
	            className: 'type',
	            begin: ':',
	            end: IDENT_FUNC_RETURN_TYPE_RE,
	            relevance: 10
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['https'],
	    illegal: '\\S',
	    contains: [
	      {
	        className: 'status',
	        begin: '^HTTP/[0-9\\.]+', end: '$',
	        contains: [{className: 'number', begin: '\\b\\d{3}\\b'}]
	      },
	      {
	        className: 'request',
	        begin: '^[A-Z]+ (.*?) HTTP/[0-9\\.]+$', returnBegin: true, end: '$',
	        contains: [
	          {
	            className: 'string',
	            begin: ' ', end: ' ',
	            excludeBegin: true, excludeEnd: true
	          }
	        ]
	      },
	      {
	        className: 'attribute',
	        begin: '^\\w', end: ': ', excludeEnd: true,
	        illegal: '\\n|\\s|=',
	        starts: {className: 'string', end: '$'}
	      },
	      {
	        begin: '\\n\\n',
	        starts: {subLanguage: '', endsWithParent: true}
	      }
	    ]
	  };
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var START_BRACKET = '\\[';
	  var END_BRACKET = '\\]';
	  return {
	    aliases: ['i7'],
	    case_insensitive: true,
	    keywords: {
	      // Some keywords more or less unique to I7, for relevance.
	      keyword:
	        // kind:
	        'thing|10 room|10 person|10 man|10 woman|10 animal|10 container ' +
	        'supporter|10 backdrop|10 door|10 ' +
	        // characteristic:
	        'scenery|10 open closed|10 locked|10 inside|10 gender|10 ' +
	        // verb:
	        'is are say|10 understand|10 ' +
	        // misc keyword:
	        'kind|10 of rule|10'
	    },
	    contains: [
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        relevance: 0,
	        contains: [
	          {
	            className: 'subst',
	            begin: START_BRACKET, end: END_BRACKET
	          }
	        ]
	      },
	      {
	        className: 'title',
	        beginKeywords: '^Volume ^Book ^Part ^Chapter ^Section',
	        end: '$',
	        relevance: 10
	      },
	      {
	        // Table
	        className: 'title',
	        beginKeywords: '^Table',
	        end: '$',
	        relevance: 10
	      },
	      {
	        // Rule definition
	        // This is here for relevance.
	        begin: '^\\b(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)',
	        end: ':',
	        contains: [
	          {
	            //Rule name
	            begin: '\\b\\(This',
	            end: '\\)',
	            relevance: 10
	          }
	        ],
	        relevance: 10
	      },
	      {
	        className: 'comment',
	        begin: START_BRACKET, end: END_BRACKET,
	        contains: ['self']
	      }
	    ]
	  };
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    illegal: /\S/,
	    contains: [
	      hljs.COMMENT(';', '$'),
	      {
	        className: 'title',
	        begin: '^\\[', end: '\\]'
	      },
	      {
	        className: 'setting',
	        begin: '^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*', end: '$',
	        contains: [
	          {
	            className: 'value',
	            endsWithParent: true,
	            keywords: 'on off true false yes no',
	            contains: [hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE],
	            relevance: 0
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var GENERIC_IDENT_RE = hljs.UNDERSCORE_IDENT_RE + '(<' + hljs.UNDERSCORE_IDENT_RE + '>)?';
	  var KEYWORDS =
	    'false synchronized int abstract float private char boolean static null if const ' +
	    'for true while long strictfp finally protected import native final void ' +
	    'enum else break transient catch instanceof byte super volatile case assert short ' +
	    'package default double public try this switch continue throws protected public private';

	  // https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html
	  var JAVA_NUMBER_RE = '\\b' +
	    '(' +
	      '0[bB]([01]+[01_]+[01]+|[01]+)' + // 0b...
	      '|' +
	      '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + // 0x...
	      '|' +
	      '(' +
	        '([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?' +
	        '|' +
	        '\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)' +
	      ')' +
	      '([eE][-+]?\\d+)?' + // octal, decimal, float
	    ')' +
	    '[lLfF]?';
	  var JAVA_NUMBER_MODE = {
	    className: 'number',
	    begin: JAVA_NUMBER_RE,
	    relevance: 0
	  };

	  return {
	    aliases: ['jsp'],
	    keywords: KEYWORDS,
	    illegal: /<\//,
	    contains: [
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          relevance : 0,
	          contains : [{
	            className : 'doctag',
	            begin : '@[A-Za-z]+'
	          }]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: /[{;=]/, excludeEnd: true,
	        keywords: 'class interface',
	        illegal: /[:"\[\]]/,
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        // Expression keywords prevent 'keyword Name(...)' from being
	        // recognized as a function definition
	        beginKeywords: 'new throw return else',
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
	            relevance: 0,
	            contains: [hljs.UNDERSCORE_TITLE_MODE]
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            keywords: KEYWORDS,
	            relevance: 0,
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      JAVA_NUMBER_MODE,
	      {
	        className: 'annotation', begin: '@[A-Za-z]+'
	      }
	    ]
	  };
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['js'],
	    keywords: {
	      keyword:
	        'in of if for while finally var new function do return void else break catch ' +
	        'instanceof with throw case default try this switch continue typeof delete ' +
	        'let yield const export super debugger as async await',
	      literal:
	        'true false null undefined NaN Infinity',
	      built_in:
	        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
	        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
	        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
	        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
	        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
	        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
	        'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
	        'Promise'
	    },
	    contains: [
	      {
	        className: 'pi',
	        relevance: 10,
	        begin: /^\s*['"]use (strict|asm)['"]/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      { // template string
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          {
	            className: 'subst',
	            begin: '\\$\\{', end: '\\}'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b(0[bB][01]+)' },
	          { begin: '\\b(0[oO][0-7]+)' },
	          { begin: hljs.C_NUMBER_RE }
	        ],
	        relevance: 0
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.REGEXP_MODE,
	          { // E4X / JSX
	            begin: /</, end: />\s*[);\]]/,
	            relevance: 0,
	            subLanguage: 'xml'
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /\{/, excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ],
	            illegal: /["'\(]/
	          }
	        ],
	        illegal: /\[|%/
	      },
	      {
	        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	      },
	      {
	        begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
	      },
	      // ECMAScript 6 modules import
	      {
	        beginKeywords: 'import', end: '[;$]',
	        keywords: 'import from as',
	        contains: [
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE
	        ]
	      },
	      { // ES6 class
	        className: 'class',
	        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
	        illegal: /[:"\[\]]/,
	        contains: [
	          {beginKeywords: 'extends'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var LITERALS = {literal: 'true false null'};
	  var TYPES = [
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE
	  ];
	  var VALUE_CONTAINER = {
	    className: 'value',
	    end: ',', endsWithParent: true, excludeEnd: true,
	    contains: TYPES,
	    keywords: LITERALS
	  };
	  var OBJECT = {
	    begin: '{', end: '}',
	    contains: [
	      {
	        className: 'attribute',
	        begin: '\\s*"', end: '"\\s*:\\s*', excludeBegin: true, excludeEnd: true,
	        contains: [hljs.BACKSLASH_ESCAPE],
	        illegal: '\\n',
	        starts: VALUE_CONTAINER
	      }
	    ],
	    illegal: '\\S'
	  };
	  var ARRAY = {
	    begin: '\\[', end: '\\]',
	    contains: [hljs.inherit(VALUE_CONTAINER, {className: null})], // inherit is also a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
	    illegal: '\\S'
	  };
	  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
	  return {
	    contains: TYPES,
	    keywords: LITERALS,
	    illegal: '\\S'
	  };
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  // Since there are numerous special names in Julia, it is too much trouble
	  // to maintain them by hand. Hence these names (i.e. keywords, literals and
	  // built-ins) are automatically generated from Julia (v0.3.0) itself through
	  // following scripts for each.

	  var KEYWORDS = {
	    // # keyword generator
	    // println("\"in\",")
	    // for kw in Base.REPLCompletions.complete_keyword("")
	    //     println("\"$kw\",")
	    // end
	    keyword:
	      'in abstract baremodule begin bitstype break catch ccall const continue do else elseif end export ' +
	      'finally for function global if immutable import importall let local macro module quote return try type ' +
	      'typealias using while',

	    // # literal generator
	    // println("\"true\",\n\"false\"")
	    // for name in Base.REPLCompletions.completions("", 0)[1]
	    //     try
	    //         s = symbol(name)
	    //         v = eval(s)
	    //         if !isa(v, Function) &&
	    //            !isa(v, DataType) &&
	    //            !issubtype(typeof(v), Tuple) &&
	    //            !isa(v, UnionType) &&
	    //            !isa(v, Module) &&
	    //            !isa(v, TypeConstructor) &&
	    //            !isa(v, Colon)
	    //             println("\"$name\",")
	    //         end
	    //     end
	    // end
	    literal:
	      'true false ANY ARGS CPU_CORES C_NULL DL_LOAD_PATH DevNull ENDIAN_BOM ENV I|0 Inf Inf16 Inf32 ' +
	      'InsertionSort JULIA_HOME LOAD_PATH MS_ASYNC MS_INVALIDATE MS_SYNC MergeSort NaN NaN16 NaN32 OS_NAME QuickSort ' +
	      'RTLD_DEEPBIND RTLD_FIRST RTLD_GLOBAL RTLD_LAZY RTLD_LOCAL RTLD_NODELETE RTLD_NOLOAD RTLD_NOW RoundDown ' +
	      'RoundFromZero RoundNearest RoundToZero RoundUp STDERR STDIN STDOUT VERSION WORD_SIZE catalan cglobal e eu ' +
	      'eulergamma golden im nothing pi γ π φ',

	    // # built_in generator:
	    // for name in Base.REPLCompletions.completions("", 0)[1]
	    //     try
	    //         v = eval(symbol(name))
	    //         if isa(v, DataType)
	    //             println("\"$name\",")
	    //         end
	    //     end
	    // end
	    built_in:
	      'ASCIIString AbstractArray AbstractRNG AbstractSparseArray Any ArgumentError Array Associative Base64Pipe ' +
	      'Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError Box CFILE Cchar Cdouble Cfloat Char ' +
	      'CharString Cint Clong Clonglong ClusterManager Cmd Coff_t Colon Complex Complex128 Complex32 Complex64 ' +
	      'Condition Cptrdiff_t Cshort Csize_t Cssize_t Cuchar Cuint Culong Culonglong Cushort Cwchar_t DArray DataType ' +
	      'DenseArray Diagonal Dict DimensionMismatch DirectIndexString Display DivideError DomainError EOFError ' +
	      'EachLine Enumerate ErrorException Exception Expr Factorization FileMonitor FileOffset Filter Float16 Float32 ' +
	      'Float64 FloatRange FloatingPoint Function GetfieldNode GotoNode Hermitian IO IOBuffer IOStream IPv4 IPv6 ' +
	      'InexactError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException IntrinsicFunction KeyError ' +
	      'LabelNode LambdaStaticData LineNumberNode LoadError LocalProcess MIME MathConst MemoryError MersenneTwister ' +
	      'Method MethodError MethodTable Module NTuple NewvarNode Nothing Number ObjectIdDict OrdinalRange ' +
	      'OverflowError ParseError PollingFileWatcher ProcessExitedException ProcessGroup Ptr QuoteNode Range Range1 ' +
	      'Ranges Rational RawFD Real Regex RegexMatch RemoteRef RepString RevString RopeString RoundingMode Set ' +
	      'SharedArray Signed SparseMatrixCSC StackOverflowError Stat StatStruct StepRange String SubArray SubString ' +
	      'SymTridiagonal Symbol SymbolNode Symmetric SystemError Task TextDisplay Timer TmStruct TopNode Triangular ' +
	      'Tridiagonal Type TypeConstructor TypeError TypeName TypeVar UTF16String UTF32String UTF8String UdpSocket ' +
	      'Uint Uint128 Uint16 Uint32 Uint64 Uint8 UndefRefError UndefVarError UniformScaling UnionType UnitRange ' +
	      'Unsigned Vararg VersionNumber WString WeakKeyDict WeakRef Woodbury Zip'
	  };

	  // ref: http://julia.readthedocs.org/en/latest/manual/variables/#allowed-variable-names
	  var VARIABLE_NAME_RE = "[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*";

	  // placeholder for recursive self-reference
	  var DEFAULT = { lexemes: VARIABLE_NAME_RE, keywords: KEYWORDS };

	  var TYPE_ANNOTATION = {
	    className: "type-annotation",
	    begin: /::/
	  };

	  var SUBTYPE = {
	    className: "subtype",
	    begin: /<:/
	  };

	  // ref: http://julia.readthedocs.org/en/latest/manual/integers-and-floating-point-numbers/
	  var NUMBER = {
	    className: "number",
	    // supported numeric literals:
	    //  * binary literal (e.g. 0x10)
	    //  * octal literal (e.g. 0o76543210)
	    //  * hexadecimal literal (e.g. 0xfedcba876543210)
	    //  * hexadecimal floating point literal (e.g. 0x1p0, 0x1.2p2)
	    //  * decimal literal (e.g. 9876543210, 100_000_000)
	    //  * floating pointe literal (e.g. 1.2, 1.2f, .2, 1., 1.2e10, 1.2e-10)
	    begin: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
	    relevance: 0
	  };

	  var CHAR = {
	    className: "char",
	    begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
	  };

	  var INTERPOLATION = {
	    className: 'subst',
	    begin: /\$\(/, end: /\)/,
	    keywords: KEYWORDS
	  };

	  var INTERPOLATED_VARIABLE = {
	    className: 'variable',
	    begin: "\\$" + VARIABLE_NAME_RE
	  };

	  // TODO: neatly escape normal code in string literal
	  var STRING = {
	    className: "string",
	    contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
	    variants: [
	      { begin: /\w*"/, end: /"\w*/ },
	      { begin: /\w*"""/, end: /"""\w*/ }
	    ]
	  };

	  var COMMAND = {
	    className: "string",
	    contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
	    begin: '`', end: '`'
	  };

	  var MACROCALL = {
	    className: "macrocall",
	    begin: "@" + VARIABLE_NAME_RE
	  };

	  var COMMENT = {
	    className: "comment",
	    variants: [
	      { begin: "#=", end: "=#", relevance: 10 },
	      { begin: '#', end: '$' }
	    ]
	  };

	  DEFAULT.contains = [
	    NUMBER,
	    CHAR,
	    TYPE_ANNOTATION,
	    SUBTYPE,
	    STRING,
	    COMMAND,
	    MACROCALL,
	    COMMENT,
	    hljs.HASH_COMMENT_MODE
	  ];
	  INTERPOLATION.contains = DEFAULT.contains;

	  return DEFAULT;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (hljs) {
	  var KEYWORDS = 'val var get set class trait object public open private protected ' +
	    'final enum if else do while for when break continue throw try catch finally ' +
	    'import package is as in return fun override default companion reified inline volatile transient native';

	  return {
	    keywords: {
	      typename: 'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
	      literal: 'true false null',
	      keyword: KEYWORDS
	    },
	    contains : [
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          relevance : 0,
	          contains : [{
	            className : 'doctag',
	            begin : '@[A-Za-z]+'
	          }]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'type',
	        begin: /</, end: />/,
	        returnBegin: true,
	        excludeEnd: false,
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'fun', end: '[(]|$',
	        returnBegin: true,
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        illegal: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
	        relevance: 5,
	        contains: [
	          {
	            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
	            relevance: 0,
	            contains: [hljs.UNDERSCORE_TITLE_MODE]
	          },
	          {
	            className: 'type',
	            begin: /</, end: />/, keywords: 'reified',
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            keywords: KEYWORDS,
	            relevance: 0,
	            illegal: /\([^\(,\s:]+,/,
	            contains: [
	              {
	                className: 'typename',
	                begin: /:\s*/, end: /\s*[=\)]/, excludeBegin: true, returnEnd: true,
	                relevance: 0
	              }
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class trait', end: /[:\{(]|$/,
	        excludeEnd: true,
	        illegal: 'extends implements',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'type',
	            begin: /</, end: />/, excludeBegin: true, excludeEnd: true,
	            relevance: 0
	          },
	          {
	            className: 'typename',
	            begin: /[,:]\s*/, end: /[<\(,]|$/, excludeBegin: true, returnEnd: true
	          }
	        ]
	      },
	      {
	        className: 'variable', beginKeywords: 'var val', end: /\s*[=:$]/, excludeEnd: true
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'shebang',
	        begin: "^#!/usr/bin/env", end: '$',
	        illegal: '\n'
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var LASSO_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_.]*';
	  var LASSO_ANGLE_RE = '<\\?(lasso(script)?|=)';
	  var LASSO_CLOSE_RE = '\\]|\\?>';
	  var LASSO_KEYWORDS = {
	    literal:
	      'true false none minimal full all void and or not ' +
	      'bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft',
	    built_in:
	      'array date decimal duration integer map pair string tag xml null ' +
	      'boolean bytes keyword list locale queue set stack staticarray ' +
	      'local var variable global data self inherited',
	    keyword:
	      'error_code error_msg error_pop error_push error_reset cache ' +
	      'database_names database_schemanames database_tablenames define_tag ' +
	      'define_type email_batch encode_set html_comment handle handle_error ' +
	      'header if inline iterate ljax_target link link_currentaction ' +
	      'link_currentgroup link_currentrecord link_detail link_firstgroup ' +
	      'link_firstrecord link_lastgroup link_lastrecord link_nextgroup ' +
	      'link_nextrecord link_prevgroup link_prevrecord log loop ' +
	      'namespace_using output_none portal private protect records referer ' +
	      'referrer repeating resultset rows search_args search_arguments ' +
	      'select sort_args sort_arguments thread_atomic value_list while ' +
	      'abort case else if_empty if_false if_null if_true loop_abort ' +
	      'loop_continue loop_count params params_up return return_value ' +
	      'run_children soap_definetag soap_lastrequest soap_lastresponse ' +
	      'tag_name ascending average by define descending do equals ' +
	      'frozen group handle_failure import in into join let match max ' +
	      'min on order parent protected provide public require returnhome ' +
	      'skip split_thread sum take thread to trait type where with ' +
	      'yield yieldhome'
	  };
	  var HTML_COMMENT = hljs.COMMENT(
	    '<!--',
	    '-->',
	    {
	      relevance: 0
	    }
	  );
	  var LASSO_NOPROCESS = {
	    className: 'preprocessor',
	    begin: '\\[noprocess\\]',
	    starts: {
	      className: 'markup',
	      end: '\\[/noprocess\\]',
	      returnEnd: true,
	      contains: [HTML_COMMENT]
	    }
	  };
	  var LASSO_START = {
	    className: 'preprocessor',
	    begin: '\\[/noprocess|' + LASSO_ANGLE_RE
	  };
	  var LASSO_DATAMEMBER = {
	    className: 'variable',
	    begin: '\'' + LASSO_IDENT_RE + '\''
	  };
	  var LASSO_CODE = [
	    hljs.COMMENT(
	      '/\\*\\*!',
	      '\\*/'
	    ),
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.inherit(hljs.C_NUMBER_MODE, {begin: hljs.C_NUMBER_RE + '|(-?infinity|nan)\\b'}),
	    hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	    hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	    {
	      className: 'string',
	      begin: '`', end: '`'
	    },
	    {
	      className: 'variable',
	      variants: [
	        {
	          begin: '[#$]' + LASSO_IDENT_RE
	        },
	        {
	          begin: '#', end: '\\d+',
	          illegal: '\\W'
	        }
	      ]
	    },
	    {
	      className: 'tag',
	      begin: '::\\s*', end: LASSO_IDENT_RE,
	      illegal: '\\W'
	    },
	    {
	      className: 'attribute',
	      variants: [
	        {
	          begin: '-' + hljs.UNDERSCORE_IDENT_RE,
	          relevance: 0
	        },
	        {
	          begin: '(\\.\\.\\.)'
	        }
	      ]
	    },
	    {
	      className: 'subst',
	      variants: [
	        {
	          begin: '->\\s*',
	          contains: [LASSO_DATAMEMBER]
	        },
	        {
	          begin: ':=|/(?!\\w)=?|[-+*%=<>&|!?\\\\]+',
	          relevance: 0
	        }
	      ]
	    },
	    {
	      className: 'built_in',
	      begin: '\\.\\.?\\s*',
	      relevance: 0,
	      contains: [LASSO_DATAMEMBER]
	    },
	    {
	      className: 'class',
	      beginKeywords: 'define',
	      returnEnd: true, end: '\\(|=>',
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {begin: hljs.UNDERSCORE_IDENT_RE + '(=(?!>))?'})
	      ]
	    }
	  ];
	  return {
	    aliases: ['ls', 'lassoscript'],
	    case_insensitive: true,
	    lexemes: LASSO_IDENT_RE + '|&[lg]t;',
	    keywords: LASSO_KEYWORDS,
	    contains: [
	      {
	        className: 'preprocessor',
	        begin: LASSO_CLOSE_RE,
	        relevance: 0,
	        starts: {
	          className: 'markup',
	          end: '\\[|' + LASSO_ANGLE_RE,
	          returnEnd: true,
	          relevance: 0,
	          contains: [HTML_COMMENT]
	        }
	      },
	      LASSO_NOPROCESS,
	      LASSO_START,
	      {
	        className: 'preprocessor',
	        begin: '\\[no_square_brackets',
	        starts: {
	          end: '\\[/no_square_brackets\\]', // not implemented in the language
	          lexemes: LASSO_IDENT_RE + '|&[lg]t;',
	          keywords: LASSO_KEYWORDS,
	          contains: [
	            {
	              className: 'preprocessor',
	              begin: LASSO_CLOSE_RE,
	              relevance: 0,
	              starts: {
	                className: 'markup',
	                end: '\\[noprocess\\]|' + LASSO_ANGLE_RE,
	                returnEnd: true,
	                contains: [HTML_COMMENT]
	              }
	            },
	            LASSO_NOPROCESS,
	            LASSO_START
	          ].concat(LASSO_CODE)
	        }
	      },
	      {
	        className: 'preprocessor',
	        begin: '\\[',
	        relevance: 0
	      },
	      {
	        className: 'shebang',
	        begin: '^#!.+lasso9\\b',
	        relevance: 10
	      }
	    ].concat(LASSO_CODE)
	  };
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var IDENT_RE        = '[\\w-]+'; // yes, Less identifiers may begin with a digit
	  var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';

	  /* Generic Modes */

	  var RULES = [], VALUE = []; // forward def. for recursive modes

	  var STRING_MODE = function(c) { return {
	    // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
	    className: 'string', begin: '~?' + c + '.*?' + c
	  };};

	  var IDENT_MODE = function(name, begin, relevance) { return {
	    className: name, begin: begin, relevance: relevance
	  };};

	  var FUNCT_MODE = function(name, ident, obj) {
	    return hljs.inherit({
	        className: name, begin: ident + '\\(', end: '\\(',
	        returnBegin: true, excludeEnd: true, relevance: 0
	    }, obj);
	  };

	  var PARENS_MODE = {
	    // used only to properly balance nested parens inside mixin call, def. arg list
	    begin: '\\(', end: '\\)', contains: VALUE, relevance: 0
	  };

	  // generic Less highlighter (used almost everywhere except selectors):
	  VALUE.push(
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    STRING_MODE("'"),
	    STRING_MODE('"'),
	    hljs.CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(
	    IDENT_MODE('hexcolor', '#[0-9A-Fa-f]+\\b'),
	    FUNCT_MODE('function', '(url|data-uri)', {
	      starts: {className: 'string', end: '[\\)\\n]', excludeEnd: true}
	    }),
	    FUNCT_MODE('function', IDENT_RE),
	    PARENS_MODE,
	    IDENT_MODE('variable', '@@?' + IDENT_RE, 10),
	    IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),
	    IDENT_MODE('built_in', '~?`[^`]*?`'), // inline javascript (or whatever host language) *multiline* string
	    { // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
	      className: 'attribute', begin: IDENT_RE + '\\s*:', end: ':', returnBegin: true, excludeEnd: true
	    }
	  );

	  var VALUE_WITH_RULESETS = VALUE.concat({
	    begin: '{', end: '}', contains: RULES
	  });

	  var MIXIN_GUARD_MODE = {
	    beginKeywords: 'when', endsWithParent: true,
	    contains: [{beginKeywords: 'and not'}].concat(VALUE) // using this form to override VALUE’s 'function' match
	  };

	  /* Rule-Level Modes */

	  var RULE_MODE = {
	    className: 'attribute',
	    begin: INTERP_IDENT_RE, end: ':', excludeEnd: true,
	    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE],
	    illegal: /\S/,
	    starts: {end: '[;}]', returnEnd: true, contains: VALUE, illegal: '[<=$]'}
	  };

	  var AT_RULE_MODE = {
	    className: 'at_rule', // highlight only at-rule keyword
	    begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
	    starts: {end: '[;{}]', returnEnd: true, contains: VALUE, relevance: 0}
	  };

	  // variable definitions and calls
	  var VAR_RULE_MODE = {
	    className: 'variable',
	    variants: [
	      // using more strict pattern for higher relevance to increase chances of Less detection.
	      // this is *the only* Less specific statement used in most of the sources, so...
	      // (we’ll still often loose to the css-parser unless there's '//' comment,
	      // simply because 1 variable just can't beat 99 properties :)
	      {begin: '@' + IDENT_RE + '\\s*:', relevance: 15},
	      {begin: '@' + IDENT_RE}
	    ],
	    starts: {end: '[;}]', returnEnd: true, contains: VALUE_WITH_RULESETS}
	  };

	  var SELECTOR_MODE = {
	    // first parse unambiguous selectors (i.e. those not starting with tag)
	    // then fall into the scary lookahead-discriminator variant.
	    // this mode also handles mixin definitions and calls
	    variants: [{
	      begin: '[\\.#:&\\[]', end: '[;{}]'  // mixin calls end with ';'
	      }, {
	      begin: INTERP_IDENT_RE + '[^;]*{',
	      end: '{'
	    }],
	    returnBegin: true,
	    returnEnd:   true,
	    illegal: '[<=\'$"]',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      MIXIN_GUARD_MODE,
	      IDENT_MODE('keyword',  'all\\b'),
	      IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),     // otherwise it’s identified as tag
	      IDENT_MODE('tag',       INTERP_IDENT_RE + '%?', 0), // '%' for more consistent coloring of @keyframes "tags"
	      IDENT_MODE('id',       '#'   + INTERP_IDENT_RE),
	      IDENT_MODE('class',    '\\.' + INTERP_IDENT_RE, 0),
	      IDENT_MODE('keyword',  '&', 0),
	      FUNCT_MODE('pseudo',   ':not'),
	      FUNCT_MODE('keyword',  ':extend'),
	      IDENT_MODE('pseudo',   '::?' + INTERP_IDENT_RE),
	      {className: 'attr_selector', begin: '\\[', end: '\\]'},
	      {begin: '\\(', end: '\\)', contains: VALUE_WITH_RULESETS}, // argument list of parametric mixins
	      {begin: '!important'} // eat !important after mixin call or it will be colored as tag
	    ]
	  };

	  RULES.push(
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    AT_RULE_MODE,
	    VAR_RULE_MODE,
	    SELECTOR_MODE,
	    RULE_MODE
	  );

	  return {
	    case_insensitive: true,
	    illegal: '[=>\'/<($"]',
	    contains: RULES
	  };
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var LISP_IDENT_RE = '[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*';
	  var MEC_RE = '\\|[^]*?\\|';
	  var LISP_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?';
	  var SHEBANG = {
	    className: 'shebang',
	    begin: '^#!', end: '$'
	  };
	  var LITERAL = {
	    className: 'literal',
	    begin: '\\b(t{1}|nil)\\b'
	  };
	  var NUMBER = {
	    className: 'number',
	    variants: [
	      {begin: LISP_SIMPLE_NUMBER_RE, relevance: 0},
	      {begin: '#(b|B)[0-1]+(/[0-1]+)?'},
	      {begin: '#(o|O)[0-7]+(/[0-7]+)?'},
	      {begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?'},
	      {begin: '#(c|C)\\(' + LISP_SIMPLE_NUMBER_RE + ' +' + LISP_SIMPLE_NUMBER_RE, end: '\\)'}
	    ]
	  };
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null});
	  var COMMENT = hljs.COMMENT(
	    ';', '$',
	    {
	      relevance: 0
	    }
	  );
	  var VARIABLE = {
	    className: 'variable',
	    begin: '\\*', end: '\\*'
	  };
	  var KEYWORD = {
	    className: 'keyword',
	    begin: '[:&]' + LISP_IDENT_RE
	  };
	  var IDENT = {
	    begin: LISP_IDENT_RE,
	    relevance: 0
	  };
	  var MEC = {
	    begin: MEC_RE
	  };
	  var QUOTED_LIST = {
	    begin: '\\(', end: '\\)',
	    contains: ['self', LITERAL, STRING, NUMBER, IDENT]
	  };
	  var QUOTED = {
	    className: 'quoted',
	    contains: [NUMBER, STRING, VARIABLE, KEYWORD, QUOTED_LIST, IDENT],
	    variants: [
	      {
	        begin: '[\'`]\\(', end: '\\)'
	      },
	      {
	        begin: '\\(quote ', end: '\\)',
	        keywords: 'quote'
	      },
	      {
	        begin: '\'' + MEC_RE
	      }
	    ]
	  };
	  var QUOTED_ATOM = {
	    className: 'quoted',
	    variants: [
	      {begin: '\'' + LISP_IDENT_RE},
	      {begin: '#\'' + LISP_IDENT_RE + '(::' + LISP_IDENT_RE + ')*'}
	    ]
	  };
	  var LIST = {
	    className: 'list',
	    begin: '\\(\\s*', end: '\\)'
	  };
	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };
	  LIST.contains = [
	    {
	      className: 'keyword',
	      variants: [
	        {begin: LISP_IDENT_RE},
	        {begin: MEC_RE}
	      ]
	    },
	    BODY
	  ];
	  BODY.contains = [QUOTED, QUOTED_ATOM, LIST, LITERAL, NUMBER, STRING, COMMENT, VARIABLE, KEYWORD, MEC, IDENT];

	  return {
	    illegal: /\S/,
	    contains: [
	      NUMBER,
	      SHEBANG,
	      LITERAL,
	      STRING,
	      COMMENT,
	      QUOTED,
	      QUOTED_ATOM,
	      LIST,
	      IDENT
	    ]
	  };
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // JS keywords
	      'in if for while finally new do return else break catch instanceof throw try this ' +
	      'switch continue typeof delete debugger case default function var with ' +
	      // LiveScript keywords
	      'then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super ' +
	      'case default function var void const let enum export import native ' +
	      '__hasProp __extends __slice __bind __indexOf',
	    literal:
	      // JS literals
	      'true false null undefined ' +
	      // LiveScript literals
	      'yes no on off it that void',
	    built_in:
	      'npm require console print module global window document'
	  };
	  var JS_IDENT_RE = '[A-Za-z$_](?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*';
	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
	  var SUBST = {
	    className: 'subst',
	    begin: /#\{/, end: /}/,
	    keywords: KEYWORDS
	  };
	  var SUBST_SIMPLE = {
	    className: 'subst',
	    begin: /#[A-Za-z$_]/, end: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
	    keywords: KEYWORDS
	  };
	  var EXPRESSIONS = [
	    hljs.BINARY_NUMBER_MODE,
	    {
	      className: 'number',
	      begin: '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
	      relevance: 0,
	      starts: {end: '(\\s*/)?', relevance: 0} // a number tries to eat the following slash to prevent treating it as a regexp
	    },
	    {
	      className: 'string',
	      variants: [
	        {
	          begin: /'''/, end: /'''/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /'/, end: /'/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /"""/, end: /"""/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
	        },
	        {
	          begin: /"/, end: /"/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
	        },
	        {
	          begin: /\\/, end: /(\s|$)/,
	          excludeEnd: true
	        }
	      ]
	    },
	    {
	      className: 'pi',
	      variants: [
	        {
	          begin: '//', end: '//[gim]*',
	          contains: [SUBST, hljs.HASH_COMMENT_MODE]
	        },
	        {
	          // regex can't start with space to parse x / 2 / 3 as two divisions
	          // regex can't start with *, and it supports an "illegal" in the main mode
	          begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
	        }
	      ]
	    },
	    {
	      className: 'property',
	      begin: '@' + JS_IDENT_RE
	    },
	    {
	      begin: '``', end: '``',
	      excludeBegin: true, excludeEnd: true,
	      subLanguage: 'javascript'
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', returnBegin: true,
	    /* We need another contained nameless mode to not have every nested
	    pair of parens to be called "params" */
	    contains: [
	      {
	        begin: /\(/, end: /\)/,
	        keywords: KEYWORDS,
	        contains: ['self'].concat(EXPRESSIONS)
	      }
	    ]
	  };

	  return {
	    aliases: ['ls'],
	    keywords: KEYWORDS,
	    illegal: /\/\*/,
	    contains: EXPRESSIONS.concat([
	      hljs.COMMENT('\\/\\*', '\\*\\/'),
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'function',
	        contains: [TITLE, PARAMS],
	        returnBegin: true,
	        variants: [
	          {
	            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?', end: '\\->\\*?'
	          },
	          {
	            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?', end: '[-~]{1,2}>\\*?'
	          },
	          {
	            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?', end: '!?[-~]{1,2}>\\*?'
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class',
	        end: '$',
	        illegal: /[:="\[\]]/,
	        contains: [
	          {
	            beginKeywords: 'extends',
	            endsWithParent: true,
	            illegal: /[:="\[\]]/,
	            contains: [TITLE]
	          },
	          TITLE
	        ]
	      },
	      {
	        className: 'attribute',
	        begin: JS_IDENT_RE + ':', end: ':',
	        returnBegin: true, returnEnd: true,
	        relevance: 0
	      }
	    ])
	  };
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var OPENING_LONG_BRACKET = '\\[=*\\[';
	  var CLOSING_LONG_BRACKET = '\\]=*\\]';
	  var LONG_BRACKETS = {
	    begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
	    contains: ['self']
	  };
	  var COMMENTS = [
	    hljs.COMMENT('--(?!' + OPENING_LONG_BRACKET + ')', '$'),
	    hljs.COMMENT(
	      '--' + OPENING_LONG_BRACKET,
	      CLOSING_LONG_BRACKET,
	      {
	        contains: [LONG_BRACKETS],
	        relevance: 10
	      }
	    )
	  ];
	  return {
	    lexemes: hljs.UNDERSCORE_IDENT_RE,
	    keywords: {
	      keyword:
	        'and break do else elseif end false for if in local nil not or repeat return then ' +
	        'true until while',
	      built_in:
	        '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' +
	        'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' +
	        'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' +
	        'io math os package string table'
	    },
	    contains: COMMENTS.concat([
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '\\)',
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
	          {
	            className: 'params',
	            begin: '\\(', endsWithParent: true,
	            contains: COMMENTS
	          }
	        ].concat(COMMENTS)
	      },
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
	        contains: [LONG_BRACKETS],
	        relevance: 5
	      }
	    ])
	  };
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var VARIABLE = {
	    className: 'variable',
	    begin: /\$\(/, end: /\)/,
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  return {
	    aliases: ['mk', 'mak'],
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        begin: /^\w+\s*\W*=/, returnBegin: true,
	        relevance: 0,
	        starts: {
	          className: 'constant',
	          end: /\s*\W*=/, excludeEnd: true,
	          starts: {
	            end: /$/,
	            relevance: 0,
	            contains: [
	              VARIABLE
	            ]
	          }
	        }
	      },
	      {
	        className: 'title',
	        begin: /^[\w]+:\s*$/
	      },
	      {
	        className: 'phony',
	        begin: /^\.PHONY:/, end: /$/,
	        keywords: '.PHONY', lexemes: /[\.\w]+/
	      },
	      {
	        begin: /^\t+/, end: /$/,
	        relevance: 0,
	        contains: [
	          hljs.QUOTE_STRING_MODE,
	          VARIABLE
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['mma'],
	    lexemes: '(\\$|\\b)' + hljs.IDENT_RE + '\\b',
	    keywords: 'AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis ' +
	      'BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering ' +
	      'C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ' +
	      'ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition ' +
	      'D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform ' +
	      'DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions ' +
	      'E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution ' +
	      'FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve ' +
	      'FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance ' +
	      'GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion ' +
	      'GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution ' +
	      'HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData ' +
	      'I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction ' +
	      'InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess ' +
	      'JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition ' +
	      'K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter ' +
	      'Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions ' +
	      'LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy ' +
	      'MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution ' +
	      'N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator ' +
	      'NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot ' +
	      'O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues ' +
	      'PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList ' +
	      'PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions ' +
	      'QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder ' +
	      'RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity ' +
	      'SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity ' +
	      'SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders ' +
	      'SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub ' +
	      'Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine ' +
	      'Transparent ' +
	      'UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd ' +
	      'V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution ' +
	      'WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian ' +
	      'XMLElement XMLObject Xnor Xor ' +
	      'Yellow YuleDissimilarity ' +
	      'ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform ' +
	      '$Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber',
	    contains: [
	      {
	        className: "comment",
	        begin: /\(\*/, end: /\*\)/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'list',
	        begin: /\{/, end: /\}/,
	        illegal: /:/
	      }
	    ]
	  };
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var COMMON_CONTAINS = [
	    hljs.C_NUMBER_MODE,
	    {
	      className: 'string',
	      begin: '\'', end: '\'',
	      contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
	    }
	  ];
	  var TRANSPOSE = {
	    relevance: 0,
	    contains: [
	      {
	        className: 'operator', begin: /'['\.]*/
	      }
	    ]
	  };

	  return {
	    keywords: {
	      keyword:
	        'break case catch classdef continue else elseif end enumerated events for function ' +
	        'global if methods otherwise parfor persistent properties return spmd switch try while',
	      built_in:
	        'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan ' +
	        'atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot ' +
	        'cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog ' +
	        'realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal ' +
	        'cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli ' +
	        'besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma ' +
	        'gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms ' +
	        'nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones ' +
	        'eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ' +
	        'ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril ' +
	        'triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute ' +
	        'shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan ' +
	        'isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal ' +
	        'rosser toeplitz vander wilkinson'
	    },
	    illegal: '(//|"|#|/\\*|\\s+/\\w+)',
	    contains: [
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '$',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	              className: 'params',
	              begin: '\\(', end: '\\)'
	          },
	          {
	              className: 'params',
	              begin: '\\[', end: '\\]'
	          }
	        ]
	      },
	      {
	        begin: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
	        returnBegin: true,
	        relevance: 0,
	        contains: [
	          {begin: /[a-zA-Z_][a-zA-Z_0-9]*/, relevance: 0},
	          TRANSPOSE.contains[0]
	        ]
	      },
	      {
	        className: 'matrix',
	        begin: '\\[', end: '\\]',
	        contains: COMMON_CONTAINS,
	        relevance: 0,
	        starts: TRANSPOSE
	      },
	      {
	        className: 'cell',
	        begin: '\\{', end: /}/,
	        contains: COMMON_CONTAINS,
	        relevance: 0,
	        starts: TRANSPOSE
	      },
	      {
	        // transpose operators at the end of a function call
	        begin: /\)/,
	        relevance: 0,
	        starts: TRANSPOSE
	      },
	      hljs.COMMENT('^\\s*\\%\\{\\s*$', '^\\s*\\%\\}\\s*$'),
	      hljs.COMMENT('\\%', '$')
	    ].concat(COMMON_CONTAINS)
	  };
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords:
	      'int float string vector matrix if else switch case default while do for in break ' +
	      'continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic ' +
	      'addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey ' +
	      'affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve ' +
	      'alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor ' +
	      'animDisplay animView annotate appendStringArray applicationName applyAttrPreset ' +
	      'applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx ' +
	      'artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu ' +
	      'artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand ' +
	      'assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface ' +
	      'attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu ' +
	      'attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp ' +
	      'attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery ' +
	      'autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults ' +
	      'bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership ' +
	      'bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType ' +
	      'boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu ' +
	      'buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge ' +
	      'cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch ' +
	      'catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox ' +
	      'character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp ' +
	      'checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip ' +
	      'clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore ' +
	      'closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter ' +
	      'cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color ' +
	      'colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp ' +
	      'colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem ' +
	      'componentEditor compositingInterop computePolysetVolume condition cone confirmDialog ' +
	      'connectAttr connectControl connectDynamic connectJoint connectionInfo constrain ' +
	      'constrainValue constructionHistory container containsMultibyte contextInfo control ' +
	      'convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation ' +
	      'convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache ' +
	      'cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel ' +
	      'cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver ' +
	      'cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor ' +
	      'createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer ' +
	      'createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse ' +
	      'currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx ' +
	      'curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface ' +
	      'curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox ' +
	      'defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete ' +
	      'deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes ' +
	      'delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo ' +
	      'dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable ' +
	      'disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected ' +
	      'displayColor displayCull displayLevelOfDetail displayPref displayRGBColor ' +
	      'displaySmoothness displayStats displayString displaySurface distanceDimContext ' +
	      'distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct ' +
	      'doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator ' +
	      'duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression ' +
	      'dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor ' +
	      'dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers ' +
	      'editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor ' +
	      'editorTemplate effector emit emitter enableDevice encodeString endString endsWith env ' +
	      'equivalent equivalentTol erf error eval evalDeferred evalEcho event ' +
	      'exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp ' +
	      'expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof ' +
	      'fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo ' +
	      'filetest filletCurve filter filterCurve filterExpand filterStudioImport ' +
	      'findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster ' +
	      'finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar ' +
	      'floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo ' +
	      'fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint ' +
	      'frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss ' +
	      'geometryConstraint getApplicationVersionAsFloat getAttr getClassification ' +
	      'getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes ' +
	      'getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender ' +
	      'glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl ' +
	      'gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid ' +
	      'gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap ' +
	      'HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor ' +
	      'HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached ' +
	      'HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel ' +
	      'headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey ' +
	      'hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender ' +
	      'hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox ' +
	      'iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ' +
	      'ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ' +
	      'ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform ' +
	      'insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance ' +
	      'instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp ' +
	      'interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf ' +
	      'isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect ' +
	      'itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx ' +
	      'jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner ' +
	      'keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx ' +
	      'keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx ' +
	      'keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx ' +
	      'keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor ' +
	      'layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList ' +
	      'lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep ' +
	      'listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory ' +
	      'listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation ' +
	      'listNodeTypes listPanelCategories listRelatives listSets listTransforms ' +
	      'listUnselected listerEditor loadFluid loadNewShelf loadPlugin ' +
	      'loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log ' +
	      'longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive ' +
	      'makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext ' +
	      'manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx ' +
	      'manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout ' +
	      'menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp ' +
	      'mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move ' +
	      'moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute ' +
	      'nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast ' +
	      'nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint ' +
	      'normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect ' +
	      'nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref ' +
	      'nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType ' +
	      'objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface ' +
	      'offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit ' +
	      'orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier ' +
	      'paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration ' +
	      'panelHistory paramDimContext paramDimension paramLocator parent parentConstraint ' +
	      'particle particleExists particleInstancer particleRenderInfo partition pasteKey ' +
	      'pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture ' +
	      'pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo ' +
	      'pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult ' +
	      'pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend ' +
	      'polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal ' +
	      'polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge ' +
	      'polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge ' +
	      'polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet ' +
	      'polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet ' +
	      'polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection ' +
	      'polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge ' +
	      'polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet ' +
	      'polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix ' +
	      'polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut ' +
	      'polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet ' +
	      'polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge ' +
	      'polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex ' +
	      'polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection ' +
	      'polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection ' +
	      'polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint ' +
	      'polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate ' +
	      'polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge ' +
	      'polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing ' +
	      'polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet ' +
	      'polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace ' +
	      'popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer ' +
	      'projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx ' +
	      'propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd ' +
	      'python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection ' +
	      'radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl ' +
	      'readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference ' +
	      'referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE ' +
	      'registerPluginResource rehash reloadImage removeJoint removeMultiInstance ' +
	      'removePanelCategory rename renameAttr renameSelectionList renameUI render ' +
	      'renderGlobalsNode renderInfo renderLayerButton renderLayerParent ' +
	      'renderLayerPostProcess renderLayerUnparent renderManip renderPartition ' +
	      'renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor ' +
	      'renderWindowSelectContext renderer reorder reorderDeformers requires reroot ' +
	      'resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget ' +
	      'reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx ' +
	      'rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout ' +
	      'runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage ' +
	      'saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale ' +
	      'scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor ' +
	      'sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable ' +
	      'scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt ' +
	      'searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey ' +
	      'selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType ' +
	      'selectedNodes selectionConnection separator setAttr setAttrEnumResource ' +
	      'setAttrMapping setAttrNiceNameResource setConstraintRestPosition ' +
	      'setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr ' +
	      'setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe ' +
	      'setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag ' +
	      'setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject ' +
	      'setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets ' +
	      'shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare ' +
	      'shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField ' +
	      'shortNameOf showHelp showHidden showManipCtx showSelectionInTitle ' +
	      'showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface ' +
	      'size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep ' +
	      'snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound ' +
	      'soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort ' +
	      'spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString ' +
	      'startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp ' +
	      'stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex ' +
	      'stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex ' +
	      'stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString ' +
	      'stringToStringArray strip stripPrefixFromName stroke subdAutoProjection ' +
	      'subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV ' +
	      'subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror ' +
	      'subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease ' +
	      'subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring ' +
	      'surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton ' +
	      'symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext ' +
	      'texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext ' +
	      'texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text ' +
	      'textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList ' +
	      'textToShelf textureDisplacePlane textureHairColor texturePlacementContext ' +
	      'textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath ' +
	      'toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower ' +
	      'toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper ' +
	      'trace track trackCtx transferAttributes transformCompare transformLimits translator ' +
	      'trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence ' +
	      'twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit ' +
	      'unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink ' +
	      'uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane ' +
	      'viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex ' +
	      'waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire ' +
	      'wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform',
	    illegal: '</',
	    contains: [
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        className: 'variable',
	        variants: [
	          {begin: '\\$\\d'},
	          {begin: '[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)'},
	          {begin: '\\*(\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)', relevance: 0}
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      'module use_module import_module include_module end_module initialise ' +
	      'mutable initialize finalize finalise interface implementation pred ' +
	      'mode func type inst solver any_pred any_func is semidet det nondet ' +
	      'multi erroneous failure cc_nondet cc_multi typeclass instance where ' +
	      'pragma promise external trace atomic or_else require_complete_switch ' +
	      'require_det require_semidet require_multi require_nondet ' +
	      'require_cc_multi require_cc_nondet require_erroneous require_failure',
	    pragma:
	      'inline no_inline type_spec source_file fact_table obsolete memo ' +
	      'loop_check minimal_model terminates does_not_terminate ' +
	      'check_termination promise_equivalent_clauses',
	    preprocessor:
	      'foreign_proc foreign_decl foreign_code foreign_type ' +
	      'foreign_import_module foreign_export_enum foreign_export ' +
	      'foreign_enum may_call_mercury will_not_call_mercury thread_safe ' +
	      'not_thread_safe maybe_thread_safe promise_pure promise_semipure ' +
	      'tabled_for_io local untrailed trailed attach_to_io_state ' +
	      'can_pass_as_mercury_type stable will_not_throw_exception ' +
	      'may_modify_trail will_not_modify_trail may_duplicate ' +
	      'may_not_duplicate affects_liveness does_not_affect_liveness ' +
	      'doesnt_affect_liveness no_sharing unknown_sharing sharing',
	    built_in:
	      'some all not if then else true fail false try catch catch_any ' +
	      'semidet_true semidet_false semidet_fail impure_true impure semipure'
	  };

	  var TODO = {
	    className: 'label',
	    begin: 'XXX', end: '$', endsWithParent: true,
	    relevance: 0
	  };
	  var COMMENT = hljs.inherit(hljs.C_LINE_COMMENT_MODE, {begin: '%'});
	  var CCOMMENT = hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, {relevance: 0});
	  COMMENT.contains.push(TODO);
	  CCOMMENT.contains.push(TODO);

	  var NUMCODE = {
	    className: 'number',
	    begin: "0'.\\|0[box][0-9a-fA-F]*"
	  };

	  var ATOM = hljs.inherit(hljs.APOS_STRING_MODE, {relevance: 0});
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {relevance: 0});
	  var STRING_FMT = {
	    className: 'constant',
	    begin: '\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]',
	    relevance: 0
	  };
	  STRING.contains.push(STRING_FMT);

	  var IMPLICATION = {
	    className: 'built_in',
	    variants: [
	      {begin: '<=>'},
	      {begin: '<=', relevance: 0},
	      {begin: '=>', relevance: 0},
	      {begin: '/\\\\'},
	      {begin: '\\\\/'}
	    ]
	  };

	  var HEAD_BODY_CONJUNCTION = {
	    className: 'built_in',
	    variants: [
	      {begin: ':-\\|-->'},
	      {begin: '=', relevance: 0}
	    ]
	  };

	  return {
	    aliases: ['m', 'moo'],
	    keywords: KEYWORDS,
	    contains: [
	      IMPLICATION,
	      HEAD_BODY_CONJUNCTION,
	      COMMENT,
	      CCOMMENT,
	      NUMCODE,
	      hljs.NUMBER_MODE,
	      ATOM,
	      STRING,
	      {begin: /:-/} // relevance booster
	    ]
	  };
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords:
	      'environ vocabularies notations constructors definitions ' +
	      'registrations theorems schemes requirements begin end definition ' +
	      'registration cluster existence pred func defpred deffunc theorem ' +
	      'proof let take assume then thus hence ex for st holds consider ' +
	      'reconsider such that and in provided of as from be being by means ' +
	      'equals implies iff redefine define now not or attr is mode ' +
	      'suppose per cases set thesis contradiction scheme reserve struct ' +
	      'correctness compatibility coherence symmetry assymetry ' +
	      'reflexivity irreflexivity connectedness uniqueness commutativity ' +
	      'idempotence involutiveness projectivity',
	    contains: [
	      hljs.COMMENT('::', '$')
	    ]
	  };
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var NUMBER = {
	    className: 'number', relevance: 0,
	    variants: [
	      {
	        begin: '[$][a-fA-F0-9]+'
	      },
	      hljs.NUMBER_MODE
	    ]
	  };

	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword: 'public private property continue exit extern new try catch ' +
	        'eachin not abstract final select case default const local global field ' +
	        'end if then else elseif endif while wend repeat until forever for to step next return module inline throw',

	      built_in: 'DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil ' +
	        'Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI',

	      literal: 'true false null and or shl shr mod'
	    },
	    contains: [
	      hljs.COMMENT('#rem', '#end'),
	      hljs.COMMENT(
	        "'",
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'function',
	        beginKeywords: 'function method', end: '[(=:]|$',
	        illegal: /\n/,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '$',
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        className: 'variable',
	        begin: '\\b(self|super)\\b'
	      },
	      {
	        className: 'preprocessor',
	        beginKeywords: 'import',
	        end: '$'
	      },
	      {
	        className: 'preprocessor',
	        begin: '\\s*#', end: '$',
	        keywords: 'if else elseif endif end then'
	      },
	      {
	        className: 'pi',
	        begin: '^\\s*strict\\b'
	      },
	      {
	        beginKeywords: 'alias', end: '=',
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      hljs.QUOTE_STRING_MODE,
	      NUMBER
	    ]
	  }
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$\d+/},
	      {begin: /\$\{/, end: /}/},
	      {begin: '[\\$\\@]' + hljs.UNDERSCORE_IDENT_RE}
	    ]
	  };
	  var DEFAULT = {
	    endsWithParent: true,
	    lexemes: '[a-z/_]+',
	    keywords: {
	      built_in:
	        'on off yes no true false none blocked debug info notice warn error crit ' +
	        'select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
	    },
	    relevance: 0,
	    illegal: '=>',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'string',
	        contains: [hljs.BACKSLASH_ESCAPE, VAR],
	        variants: [
	          {begin: /"/, end: /"/},
	          {begin: /'/, end: /'/}
	        ]
	      },
	      {
	        className: 'url',
	        begin: '([a-z]+):/', end: '\\s', endsWithParent: true, excludeEnd: true,
	        contains: [VAR]
	      },
	      {
	        className: 'regexp',
	        contains: [hljs.BACKSLASH_ESCAPE, VAR],
	        variants: [
	          {begin: "\\s\\^", end: "\\s|{|;", returnEnd: true},
	          // regexp locations (~, ~*)
	          {begin: "~\\*?\\s+", end: "\\s|{|;", returnEnd: true},
	          // *.example.com
	          {begin: "\\*(\\.[a-z\\-]+)+"},
	          // sub.example.*
	          {begin: "([a-z\\-]+\\.)+\\*"}
	        ]
	      },
	      // IP
	      {
	        className: 'number',
	        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
	      },
	      // units
	      {
	        className: 'number',
	        begin: '\\b\\d+[kKmMgGdshdwy]*\\b',
	        relevance: 0
	      },
	      VAR
	    ]
	  };

	  return {
	    aliases: ['nginxconf'],
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        begin: hljs.UNDERSCORE_IDENT_RE + '\\s', end: ';|{', returnBegin: true,
	        contains: [
	          {
	            className: 'title',
	            begin: hljs.UNDERSCORE_IDENT_RE,
	            starts: DEFAULT
	          }
	        ],
	        relevance: 0
	      }
	    ],
	    illegal: '[^\\s\\}]'
	  };
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['nim'],
	    keywords: {
	      keyword: 'addr and as asm bind block break|0 case|0 cast const|0 continue|0 converter discard distinct|10 div do elif else|0 end|0 enum|0 except export finally for from generic if|0 import|0 in include|0 interface is isnot|10 iterator|10 let|0 macro method|10 mixin mod nil not notin|10 object|0 of or out proc|10 ptr raise ref|10 return shl shr static template|10 try|0 tuple type|0 using|0 var|0 when while|0 with without xor yield',
	      literal: 'shared guarded stdin stdout stderr result|10 true false'
	    },
	    contains: [ {
	        className: 'decorator', // Actually pragma
	        begin: /{\./,
	        end: /\.}/,
	        relevance: 10
	      }, {
	        className: 'string',
	        begin: /[a-zA-Z]\w*"/,
	        end: /"/,
	        contains: [{begin: /""/}]
	      }, {
	        className: 'string',
	        begin: /([a-zA-Z]\w*)?"""/,
	        end: /"""/
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'type',
	        begin: /\b[A-Z]\w+\b/,
	        relevance: 0
	      }, {
	        className: 'type',
	        begin: /\b(int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|float|float32|float64|bool|char|string|cstring|pointer|expr|stmt|void|auto|any|range|array|openarray|varargs|seq|set|clong|culong|cchar|cschar|cshort|cint|csize|clonglong|cfloat|cdouble|clongdouble|cuchar|cushort|cuint|culonglong|cstringarray|semistatic)\b/
	      }, {
	        className: 'number',
	        begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/,
	        relevance: 0
	      }, {
	        className: 'number',
	        begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/,
	        relevance: 0
	      }, {
	        className: 'number',
	        begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/,
	        relevance: 0
	      }, {
	        className: 'number',
	        begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/,
	        relevance: 0
	      },
	      hljs.HASH_COMMENT_MODE
	    ]
	  }
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var NIX_KEYWORDS = {
	    keyword: 'rec with let in inherit assert if else then',
	    constant: 'true false or and null',
	    built_in:
	      'import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation'
	  };
	  var ANTIQUOTE = {
	    className: 'subst',
	    begin: /\$\{/,
	    end: /}/,
	    keywords: NIX_KEYWORDS
	  };
	  var ATTRS = {
	    className: 'variable',
	    // TODO: we have to figure out a way how to exclude \s*=
	    begin: /[a-zA-Z0-9-_]+(\s*=)/
	  };
	  var SINGLE_QUOTE = {
	    className: 'string',
	    begin: "''",
	    end: "''",
	    contains: [
	      ANTIQUOTE
	    ]
	  };
	  var DOUBLE_QUOTE = {
	    className: 'string',
	    begin: '"',
	    end: '"',
	    contains: [
	      ANTIQUOTE
	    ]
	  };
	  var EXPRESSIONS = [
	    hljs.NUMBER_MODE,
	    hljs.HASH_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    SINGLE_QUOTE,
	    DOUBLE_QUOTE,
	    ATTRS
	  ];
	  ANTIQUOTE.contains = EXPRESSIONS;
	  return {
	    aliases: ["nixos"],
	    keywords: NIX_KEYWORDS,
	    contains: EXPRESSIONS
	  };
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var CONSTANTS = {
	    className: 'symbol',
	    begin: '\\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)'
	  };

	  var DEFINES = {
	    // ${defines}
	    className: 'constant',
	    begin: '\\$+{[a-zA-Z0-9_]+}'
	  };

	  var VARIABLES = {
	    // $variables
	    className: 'variable',
	    begin: '\\$+[a-zA-Z0-9_]+',
	    illegal: '\\(\\){}'
	  };

	  var LANGUAGES = {
	    // $(language_strings)
	    className: 'constant',
	    begin: '\\$+\\([a-zA-Z0-9_]+\\)'
	  };

	  var PARAMETERS = {
	    // command parameters
	    className: 'params',
	    begin: '(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)'
	  };

	  var COMPILER ={
	    // !compiler_flags
	    className: 'constant',
	    begin: '\\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)'
	  };

	  return {
	    case_insensitive: false,
	    keywords: {
	      keyword:
	      'Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileSeek FileWrite FileWriteByte FileWriteUTF16LE FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI FunctionEnd GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText IntCmp IntCmpU IntFmt IntOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PageExEnd Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionEnd SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionGroupEnd SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetPluginUnload SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption SubSectionEnd Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegStr WriteUninstaller XPStyle',
	      literal:
	      'admin all auto both colored current false force hide highest lastused leave listonly none normal notset off on open print show silent silentlog smooth textonly true user '
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        illegal: '\\n',
	        contains: [
	          { // $\n, $\r, $\t, $$
	            className: 'symbol',
	            begin: '\\$(\\\\(n|r|t)|\\$)'
	          },
	          CONSTANTS,
	          DEFINES,
	          VARIABLES,
	          LANGUAGES
	        ]
	      },
	      hljs.COMMENT(
	        ';',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'function',
	        beginKeywords: 'Function PageEx Section SectionGroup SubSection', end: '$'
	      },
	      COMPILER,
	      DEFINES,
	      VARIABLES,
	      LANGUAGES,
	      PARAMETERS,
	      hljs.NUMBER_MODE,
	      { // plug::ins
	        className: 'literal',
	        begin: hljs.IDENT_RE + '::' + hljs.IDENT_RE
	      }
	    ]
	  };
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var API_CLASS = {
	    className: 'built_in',
	    begin: '(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+',
	  };
	  var OBJC_KEYWORDS = {
	    keyword:
	      'int float while char export sizeof typedef const struct for union ' +
	      'unsigned long volatile static bool mutable if do return goto void ' +
	      'enum else break extern asm case short default double register explicit ' +
	      'signed typename this switch continue wchar_t inline readonly assign ' +
	      'readwrite self @synchronized id typeof ' +
	      'nonatomic super unichar IBOutlet IBAction strong weak copy ' +
	      'in out inout bycopy byref oneway __strong __weak __block __autoreleasing ' +
	      '@private @protected @public @try @property @end @throw @catch @finally ' +
	      '@autoreleasepool @synthesize @dynamic @selector @optional @required',
	    literal:
	      'false true FALSE TRUE nil YES NO NULL',
	    built_in:
	      'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
	  };
	  var LEXEMES = /[a-zA-Z@][a-zA-Z0-9_]*/;
	  var CLASS_KEYWORDS = '@interface @class @protocol @implementation';
	  return {
	    aliases: ['mm', 'objc', 'obj-c'],
	    keywords: OBJC_KEYWORDS,
	    lexemes: LEXEMES,
	    illegal: '</',
	    contains: [
	      API_CLASS,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        variants: [
	          {
	            begin: '@"', end: '"',
	            illegal: '\\n',
	            contains: [hljs.BACKSLASH_ESCAPE]
	          },
	          {
	            begin: '\'', end: '[^\\\\]\'',
	            illegal: '[^\\\\][^\']'
	          }
	        ]
	      },
	      {
	        className: 'preprocessor',
	        begin: '#',
	        end: '$',
	        contains: [
	          {
	            className: 'title',
	            variants: [
	              { begin: '\"', end: '\"' },
	              { begin: '<', end: '>' }
	            ]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        begin: '(' + CLASS_KEYWORDS.split(' ').join('|') + ')\\b', end: '({|$)', excludeEnd: true,
	        keywords: CLASS_KEYWORDS, lexemes: LEXEMES,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        className: 'variable',
	        begin: '\\.'+hljs.UNDERSCORE_IDENT_RE,
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  /* missing support for heredoc-like string (OCaml 4.0.2+) */
	  return {
	    aliases: ['ml'],
	    keywords: {
	      keyword:
	        'and as assert asr begin class constraint do done downto else end ' +
	        'exception external for fun function functor if in include ' +
	        'inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method ' +
	        'mod module mutable new object of open! open or private rec sig struct ' +
	        'then to try type val! val virtual when while with ' +
	        /* camlp4 */
	        'parser value',
	      built_in:
	        /* built-in types */
	        'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit ' +
	        /* (some) types in Pervasives */
	        'in_channel out_channel ref',
	      literal:
	        'true false'
	    },
	    illegal: /\/\/|>>/,
	    lexemes: '[a-z_]\\w*!?',
	    contains: [
	      {
	        className: 'literal',
	        begin: '\\[(\\|\\|)?\\]|\\(\\)'
	      },
	      hljs.COMMENT(
	        '\\(\\*',
	        '\\*\\)',
	        {
	          contains: ['self']
	        }
	      ),
	      { /* type variable */
	        className: 'symbol',
	        begin: '\'[A-Za-z_](?!\')[\\w\']*'
	        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
	      },
	      { /* polymorphic variant */
	        className: 'tag',
	        begin: '`[A-Z][\\w\']*'
	      },
	      { /* module or constructor */
	        className: 'type',
	        begin: '\\b[A-Z][\\w\']*',
	        relevance: 0
	      },
	      { /* don't color identifiers, but safely catch all identifiers with '*/
	        begin: '[a-z_]\\w*\'[\\w\']*'
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'char', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      {
	        className: 'number',
	        begin:
	          '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
	          '0[oO][0-7_]+[Lln]?|' +
	          '0[bB][01_]+[Lln]?|' +
	          '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
	        relevance: 0
	      },
	      {
	        begin: /[-=]>/ // relevance booster
	      }
	    ]
	  }
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
		var SPECIAL_VARS = {
			className: 'keyword',
			begin: '\\$(f[asn]|t|vp[rtd]|children)'
		},
		LITERALS = {
			className: 'literal',
			begin: 'false|true|PI|undef'
		},
		NUMBERS = {
			className: 'number',
			begin: '\\b\\d+(\\.\\d+)?(e-?\\d+)?', //adds 1e5, 1e-10
			relevance: 0
		},
		STRING = hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal: null}),
		PREPRO = {
			className: 'preprocessor',
			keywords: 'include use',
			begin: 'include|use <',
			end: '>'
		},
		PARAMS = {
			className: 'params',
			begin: '\\(', end: '\\)',
			contains: ['self', NUMBERS, STRING, SPECIAL_VARS, LITERALS]
		},
		MODIFIERS = {
			className: 'built_in',
			begin: '[*!#%]',
			relevance: 0
		},
		FUNCTIONS = {
			className: 'function',
			beginKeywords: 'module function',
			end: '\\=|\\{',
			contains: [PARAMS, hljs.UNDERSCORE_TITLE_MODE]
		};

		return {
			aliases: ['scad'],
			keywords: {
				keyword: 'function module include use for intersection_for if else \\%',
				literal: 'false true PI undef',
				built_in: 'circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign'
			},
			contains: [
				hljs.C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				NUMBERS,
				PREPRO,
				STRING,
				PARAMS,
				SPECIAL_VARS,
				MODIFIERS,
				FUNCTIONS
			]
		}
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var OXYGENE_KEYWORDS = 'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue '+
	    'create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false '+
	    'final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited '+
	    'inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of '+
	    'old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly '+
	    'record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple '+
	    'type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal '+
	    'register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained';
	  var CURLY_COMMENT =  hljs.COMMENT(
	    '{',
	    '}',
	    {
	      relevance: 0
	    }
	  );
	  var PAREN_COMMENT = hljs.COMMENT(
	    '\\(\\*',
	    '\\*\\)',
	    {
	      relevance: 10
	    }
	  );
	  var STRING = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    contains: [{begin: '\'\''}]
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: '(#\\d+)+'
	  };
	  var FUNCTION = {
	    className: 'function',
	    beginKeywords: 'function constructor destructor procedure method', end: '[:;]',
	    keywords: 'function constructor|10 destructor|10 procedure|10 method|10',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        className: 'params',
	        begin: '\\(', end: '\\)',
	        keywords: OXYGENE_KEYWORDS,
	        contains: [STRING, CHAR_STRING]
	      },
	      CURLY_COMMENT, PAREN_COMMENT
	    ]
	  };
	  return {
	    case_insensitive: true,
	    keywords: OXYGENE_KEYWORDS,
	    illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
	    contains: [
	      CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
	      STRING, CHAR_STRING,
	      hljs.NUMBER_MODE,
	      FUNCTION,
	      {
	        className: 'class',
	        begin: '=\\bclass\\b', end: 'end;',
	        keywords: OXYGENE_KEYWORDS,
	        contains: [
	          STRING, CHAR_STRING,
	          CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
	          FUNCTION
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var CURLY_SUBCOMMENT = hljs.COMMENT(
	    '{',
	    '}',
	    {
	      contains: ['self']
	    }
	  );
	  return {
	    subLanguage: 'xml', relevance: 0,
	    contains: [
	      hljs.COMMENT('^#', '$'),
	      hljs.COMMENT(
	        '\\^rem{',
	        '}',
	        {
	          relevance: 10,
	          contains: [
	            CURLY_SUBCOMMENT
	          ]
	        }
	      ),
	      {
	        className: 'preprocessor',
	        begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
	        relevance: 10
	      },
	      {
	        className: 'title',
	        begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
	      },
	      {
	        className: 'variable',
	        begin: '\\$\\{?[\\w\\-\\.\\:]+\\}?'
	      },
	      {
	        className: 'keyword',
	        begin: '\\^[\\w\\-\\.\\:]+'
	      },
	      {
	        className: 'number',
	        begin: '\\^#[0-9a-fA-F]+'
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var PERL_KEYWORDS = 'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ' +
	    'ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime ' +
	    'readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq' +
	    'fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent ' +
	    'shutdown dump chomp connect getsockname die socketpair close flock exists index shmget' +
	    'sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr ' +
	    'unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 ' +
	    'getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline ' +
	    'endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand ' +
	    'mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink ' +
	    'getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr ' +
	    'untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link ' +
	    'getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller ' +
	    'lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and ' +
	    'sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 ' +
	    'chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach ' +
	    'tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir' +
	    'ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe ' +
	    'atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when';
	  var SUBST = {
	    className: 'subst',
	    begin: '[$@]\\{', end: '\\}',
	    keywords: PERL_KEYWORDS
	  };
	  var METHOD = {
	    begin: '->{', end: '}'
	    // contains defined later
	  };
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$\d/},
	      {begin: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},
	      {begin: /[\$%@][^\s\w{]/, relevance: 0}
	    ]
	  };
	  var COMMENT = hljs.COMMENT(
	    '^(__END__|__DATA__)',
	    '\\n$',
	    {
	      relevance: 5
	    }
	  );
	  var STRING_CONTAINS = [hljs.BACKSLASH_ESCAPE, SUBST, VAR];
	  var PERL_DEFAULT_CONTAINS = [
	    VAR,
	    hljs.HASH_COMMENT_MODE,
	    COMMENT,
	    hljs.COMMENT(
	      '^\\=\\w',
	      '\\=cut',
	      {
	        endsWithParent: true
	      }
	    ),
	    METHOD,
	    {
	      className: 'string',
	      contains: STRING_CONTAINS,
	      variants: [
	        {
	          begin: 'q[qwxr]?\\s*\\(', end: '\\)',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\[', end: '\\]',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\{', end: '\\}',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\|', end: '\\|',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\<', end: '\\>',
	          relevance: 5
	        },
	        {
	          begin: 'qw\\s+q', end: 'q',
	          relevance: 5
	        },
	        {
	          begin: '\'', end: '\'',
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: '"', end: '"'
	        },
	        {
	          begin: '`', end: '`',
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: '{\\w+}',
	          contains: [],
	          relevance: 0
	        },
	        {
	          begin: '\-?\\w+\\s*\\=\\>',
	          contains: [],
	          relevance: 0
	        }
	      ]
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    { // regexp container
	      begin: '(\\/\\/|' + hljs.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
	      keywords: 'split return print reverse grep',
	      relevance: 0,
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        COMMENT,
	        {
	          className: 'regexp',
	          begin: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
	          relevance: 10
	        },
	        {
	          className: 'regexp',
	          begin: '(m|qr)?/', end: '/[a-z]*',
	          contains: [hljs.BACKSLASH_ESCAPE],
	          relevance: 0 // allows empty "//" which is a common comment delimiter in other languages
	        }
	      ]
	    },
	    {
	      className: 'sub',
	      beginKeywords: 'sub', end: '(\\s*\\(.*?\\))?[;{]',
	      relevance: 5
	    },
	    {
	      className: 'operator',
	      begin: '-\\w\\b',
	      relevance: 0
	    }
	  ];
	  SUBST.contains = PERL_DEFAULT_CONTAINS;
	  METHOD.contains = PERL_DEFAULT_CONTAINS;

	  return {
	    aliases: ['pl'],
	    keywords: PERL_KEYWORDS,
	    contains: PERL_DEFAULT_CONTAINS
	  };
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var MACRO = {
	    className: 'variable',
	    begin: /\$[\w\d#@][\w\d_]*/
	  };
	  var TABLE = {
	    className: 'variable',
	    begin: /</, end: />/
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/
	  };

	  return {
	    aliases: ['pf.conf'],
	    lexemes: /[a-z0-9_<>-]+/,
	    keywords: {
	      built_in: /* block match pass are "actions" in pf.conf(5), the rest are
	                 * lexically similar top-level commands.
	                 */
	        'block match pass load anchor|5 antispoof|10 set table',
	      keyword:
	        'in out log quick on rdomain inet inet6 proto from port os to route' +
	        'allow-opts divert-packet divert-reply divert-to flags group icmp-type' +
	        'icmp6-type label once probability recieved-on rtable prio queue' +
	        'tos tag tagged user keep fragment for os drop' +
	        'af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin' +
	        'source-hash static-port' +
	        'dup-to reply-to route-to' +
	        'parent bandwidth default min max qlimit' +
	        'block-policy debug fingerprints hostid limit loginterface optimization' +
	        'reassemble ruleset-optimization basic none profile skip state-defaults' +
	        'state-policy timeout' +
	        'const counters persist' +
	        'no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy' +
	        'source-track global rule max-src-nodes max-src-states max-src-conn' +
	        'max-src-conn-rate overload flush' +
	        'scrub|5 max-mss min-ttl no-df|10 random-id',
	      literal:
	        'all any no-route self urpf-failed egress|5 unknown',
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      hljs.QUOTE_STRING_MODE,
	      MACRO,
	      TABLE,
	    ]
	  };
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var VARIABLE = {
	    className: 'variable', begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
	  };
	  var PREPROCESSOR = {
	    className: 'preprocessor', begin: /<\?(php)?|\?>/
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
	    variants: [
	      {
	        begin: 'b"', end: '"'
	      },
	      {
	        begin: 'b\'', end: '\''
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
	    ]
	  };
	  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
	  return {
	    aliases: ['php3', 'php4', 'php5', 'php6'],
	    case_insensitive: true,
	    keywords:
	      'and include_once list abstract global private echo interface as static endswitch ' +
	      'array null if endwhile or const for endforeach self var while isset public ' +
	      'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
	      'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
	      'catch __METHOD__ case exception default die require __FUNCTION__ ' +
	      'enddeclare final try switch continue endfor endif declare unset true false ' +
	      'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
	      'yield finally',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.HASH_COMMENT_MODE,
	      hljs.COMMENT(
	        '/\\*',
	        '\\*/',
	        {
	          contains: [
	            {
	              className: 'doctag',
	              begin: '@[A-Za-z]+'
	            },
	            PREPROCESSOR
	          ]
	        }
	      ),
	      hljs.COMMENT(
	        '__halt_compiler.+?;',
	        false,
	        {
	          endsWithParent: true,
	          keywords: '__halt_compiler',
	          lexemes: hljs.UNDERSCORE_IDENT_RE
	        }
	      ),
	      {
	        className: 'string',
	        begin: '<<<[\'"]?\\w+[\'"]?$', end: '^\\w+;',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      PREPROCESSOR,
	      VARIABLE,
	      {
	        // swallow composed identifiers to avoid parsing them as keywords
	        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
	        illegal: '\\$|\\[|%',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              'self',
	              VARIABLE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              STRING,
	              NUMBER
	            ]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        illegal: /[:\(\$"]/,
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        beginKeywords: 'namespace', end: ';',
	        illegal: /[\.']/,
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        beginKeywords: 'use', end: ';',
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        begin: '=>' // No markup, just a relevance booster
	      },
	      STRING,
	      NUMBER
	    ]
	  };
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var backtickEscape = {
	    begin: '`[\\s\\S]',
	    relevance: 0
	  };
	  var dollarEscape = {
	    begin: '\\$\\$[\\s\\S]',
	    relevance: 0
	  };
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$[\w\d][\w\d_:]*/}
	    ]
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/,
	    contains: [
	      backtickEscape,
	      VAR,
	      {
	        className: 'variable',
	        begin: /\$[A-z]/, end: /[^A-z]/
	      }
	    ]
	  };
	  var APOS_STRING = {
	    className: 'string',
	    begin: /'/, end: /'/
	  };

	  return {
	    aliases: ['ps'],
	    lexemes: /-?[A-z\.\-]+/,
	    case_insensitive: true,
	    keywords: {
	      keyword: 'if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch',
	      literal: '$null $true $false',
	      built_in: 'Add-Content Add-History Add-Member Add-PSSnapin Clear-Content Clear-Item Clear-Item Property Clear-Variable Compare-Object ConvertFrom-SecureString Convert-Path ConvertTo-Html ConvertTo-SecureString Copy-Item Copy-ItemProperty Export-Alias Export-Clixml Export-Console Export-Csv ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-Content Get-Credential Get-Culture Get-Date Get-EventLog Get-ExecutionPolicy Get-Help Get-History Get-Host Get-Item Get-ItemProperty Get-Location Get-Member Get-PfxCertificate Get-Process Get-PSDrive Get-PSProvider Get-PSSnapin Get-Service Get-TraceSource Get-UICulture Get-Unique Get-Variable Get-WmiObject Group-Object Import-Alias Import-Clixml Import-Csv Invoke-Expression Invoke-History Invoke-Item Join-Path Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Item New-ItemProperty New-Object New-PSDrive New-Service New-TimeSpan New-Variable Out-Default Out-File Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Remove-Item Remove-ItemProperty Remove-PSDrive Remove-PSSnapin Remove-Variable Rename-Item Rename-ItemProperty Resolve-Path Restart-Service Resume-Service Select-Object Select-String Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-Location Set-PSDebug Set-Service Set-TraceSource Set-Variable Sort-Object Split-Path Start-Service Start-Sleep Start-Transcript Stop-Process Stop-Service Stop-Transcript Suspend-Service Tee-Object Test-Path Trace-Command Update-FormatData Update-TypeData Where-Object Write-Debug Write-Error Write-Host Write-Output Write-Progress Write-Verbose Write-Warning',
	      operator: '-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace'
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      QUOTE_STRING,
	      APOS_STRING,
	      VAR
	    ]
	  };
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _RootCss = __webpack_require__(6);

	var _RootCss2 = _interopRequireDefault(_RootCss);

	var _DocumentationDocumentationList = __webpack_require__(3);

	var _DocumentationDocumentationList2 = _interopRequireDefault(_DocumentationDocumentationList);

	var Root = (function (_React$Component) {
	  function Root() {
	    _classCallCheck(this, Root);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Root, _React$Component);

	  _createClass(Root, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: _RootCss2['default'].root },
	        _react2['default'].createElement(
	          'h1',
	          { className: _RootCss2['default'].title },
	          this.props.title,
	          ' ',
	          this.props.version && _react2['default'].createElement(
	            'small',
	            { className: _RootCss2['default'].version },
	            this.props.version
	          )
	        ),
	        this.props.documentation && _react2['default'].createElement(_DocumentationDocumentationList2['default'], { documentation: this.props.documentation })
	      );
	    }
	  }]);

	  return Root;
	})(_react2['default'].Component);

	exports['default'] = Root;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'built_in',
	        begin: '{', end: '}$',
	        excludeBegin: true, excludeEnd: true,
	        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE],
	        relevance: 0
	      },
	      {
	        className: 'filename',
	        begin: '[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}', end: ':',
	        excludeEnd: true
	      },
	      {
	        className: 'header',
	        begin: '(ncalls|tottime|cumtime)', end: '$',
	        keywords: 'ncalls tottime|10 cumtime|10 filename',
	        relevance: 10
	      },
	      {
	        className: 'summary',
	        begin: 'function calls', end: '$',
	        contains: [hljs.C_NUMBER_MODE],
	        relevance: 10
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'function',
	        begin: '\\(', end: '\\)$',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE
	        ],
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {

	  var ATOM = {

	    className: 'atom',
	    begin: /[a-z][A-Za-z0-9_]*/,
	    relevance: 0
	  };

	  var VAR = {

	    className: 'name',
	    variants: [
	      {begin: /[A-Z][a-zA-Z0-9_]*/},
	      {begin: /_[A-Za-z0-9_]*/},
	    ],
	    relevance: 0
	  };

	  var PARENTED = {

	    begin: /\(/,
	    end: /\)/,
	    relevance: 0
	  };

	  var LIST = {

	    begin: /\[/,
	    end: /\]/
	  };

	  var LINE_COMMENT = {

	    className: 'comment',
	    begin: /%/, end: /$/,
	    contains: [hljs.PHRASAL_WORDS_MODE]
	  };

	  var BACKTICK_STRING = {

	    className: 'string',
	    begin: /`/, end: /`/,
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };

	  var CHAR_CODE = {

	    className: 'string', // 0'a etc.
	    begin: /0\'(\\\'|.)/
	  };

	  var SPACE_CODE = {

	    className: 'string',
	    begin: /0\'\\s/ // 0'\s
	  };

	  var PRED_OP = { // relevance booster
	    begin: /:-/
	  };

	  var inner = [

	    ATOM,
	    VAR,
	    PARENTED,
	    PRED_OP,
	    LIST,
	    LINE_COMMENT,
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.QUOTE_STRING_MODE,
	    hljs.APOS_STRING_MODE,
	    BACKTICK_STRING,
	    CHAR_CODE,
	    SPACE_CODE,
	    hljs.C_NUMBER_MODE
	  ];

	  PARENTED.contains = inner;
	  LIST.contains = inner;

	  return {
	    contains: inner.concat([
	      {begin: /\.$/} // relevance booster
	    ])
	  };
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword: 'package import option optional required repeated group',
	      built_in: 'double float int32 int64 uint32 uint64 sint32 sint64 ' +
	        'fixed32 fixed64 sfixed32 sfixed64 bool string bytes',
	      literal: 'true false'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'message enum service', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      },
	      {
	        className: 'function',
	        beginKeywords: 'rpc',
	        end: /;/, excludeEnd: true,
	        keywords: 'rpc returns'
	      },
	      {
	        className: 'constant',
	        begin: /^\s*[A-Z_]+/,
	        end: /\s*=/, excludeEnd: true
	      }
	    ]
	  };
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var PUPPET_TYPE_REFERENCE =
	      'augeas computer cron exec file filebucket host interface k5login macauthorization mailalias maillist mcx mount nagios_command ' +
	      'nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service firewall ' +
	      'nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod notify package resources ' +
	      'router schedule scheduled_task selboolean selmodule service ssh_authorized_key sshkey stage tidy user vlan yumrepo zfs zone zpool';

	  var PUPPET_ATTRIBUTES =
	    /* metaparameters */
	      'alias audit before loglevel noop require subscribe tag ' +
	    /* normal attributes */
	      'owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check ' +
	      'en_address ip_address realname command environment hour monute month monthday special target weekday '+
	      'creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore ' +
	      'links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source ' +
	      'souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid '+
	      'ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel ' +
	      'native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options ' +
	      'device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use ' +
	      'message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform ' +
	      'responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running ' +
	      'start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age ' +
	      'password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled ' +
	      'enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist ' +
	      'priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey ' +
	      'sslverify mounted';

	  var PUPPET_KEYWORDS =
	  {
	  keyword:
	    /* language keywords */
	      'and case class default define else elsif false if in import enherits node or true undef unless main settings $string ' + PUPPET_TYPE_REFERENCE,
	  literal:
	      PUPPET_ATTRIBUTES,

	  built_in:
	    /* core facts */
	      'architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers ' +
	      'domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces '+
	      'ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion ' +
	      'kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease ' +
	      'lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major ' +
	      'macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease '+
	      'operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion '+
	      'rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced '+
	      'selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime '+
	      'uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version'
	  };

	  var COMMENT = hljs.COMMENT('#', '$');

	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/}
	    ]
	  };

	  var PUPPET_DEFAULT_CONTAINS = [
	    STRING,
	    COMMENT,
	    {
	      className: 'keyword',
	      beginKeywords: 'class', end: '$|;',
	      illegal: /=/,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {begin: '(::)?[A-Za-z_]\\w*(::\\w+)*'}),
	        COMMENT,
	        STRING
	      ]
	    },
	    {
	      className: 'keyword',
	      begin: '([a-zA-Z_(::)]+ *\\{)',
	      contains:[STRING, COMMENT],
	      relevance: 0
	    },
	    {
	      className: 'keyword',
	      begin: '(\\}|\\{)',
	      relevance: 0
	    },
	    {
	      className: 'function',
	      begin:'[a-zA-Z_]+\\s*=>'
	    },
	    {
	      className: 'constant',
	      begin: '(::)?(\\b[A-Z][a-z_]*(::)?)+',
	      relevance: 0
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    }
	  ];

	  return {
	    aliases: ['pp'],
	    keywords: PUPPET_KEYWORDS,
	    contains: PUPPET_DEFAULT_CONTAINS
	  }
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var PROMPT = {
	    className: 'prompt',  begin: /^(>>>|\.\.\.) /
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    variants: [
	      {
	        begin: /(u|b)?r?'''/, end: /'''/,
	        contains: [PROMPT],
	        relevance: 10
	      },
	      {
	        begin: /(u|b)?r?"""/, end: /"""/,
	        contains: [PROMPT],
	        relevance: 10
	      },
	      {
	        begin: /(u|r|ur)'/, end: /'/,
	        relevance: 10
	      },
	      {
	        begin: /(u|r|ur)"/, end: /"/,
	        relevance: 10
	      },
	      {
	        begin: /(b|br)'/, end: /'/
	      },
	      {
	        begin: /(b|br)"/, end: /"/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	  var NUMBER = {
	    className: 'number', relevance: 0,
	    variants: [
	      {begin: hljs.BINARY_NUMBER_RE + '[lLjJ]?'},
	      {begin: '\\b(0o[0-7]+)[lLjJ]?'},
	      {begin: hljs.C_NUMBER_RE + '[lLjJ]?'}
	    ]
	  };
	  var PARAMS = {
	    className: 'params',
	    begin: /\(/, end: /\)/,
	    contains: ['self', PROMPT, NUMBER, STRING]
	  };
	  return {
	    aliases: ['py', 'gyp'],
	    keywords: {
	      keyword:
	        'and elif is global as in if from raise for except finally print import pass return ' +
	        'exec else break not with class assert yield try while continue del or def lambda ' +
	        'nonlocal|10 None True False',
	      built_in:
	        'Ellipsis NotImplemented'
	    },
	    illegal: /(<\/|->|\?)/,
	    contains: [
	      PROMPT,
	      NUMBER,
	      STRING,
	      hljs.HASH_COMMENT_MODE,
	      {
	        variants: [
	          {className: 'function', beginKeywords: 'def', relevance: 10},
	          {className: 'class', beginKeywords: 'class'}
	        ],
	        end: /:/,
	        illegal: /[${=;\n,]/,
	        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
	      },
	      {
	        className: 'decorator',
	        begin: /@/, end: /$/
	      },
	      {
	        begin: /\b(print|exec)\(/ // don’t highlight keywords-turned-functions in Python 3
	      }
	    ]
	  };
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var Q_KEYWORDS = {
	  keyword:
	    'do while select delete by update from',
	  constant:
	    '0b 1b',
	  built_in:
	    'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',
	  typename:
	    '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'
	  };
	  return {
	  aliases:['k', 'kdb'],
	  keywords: Q_KEYWORDS,
	  lexemes: /\b(`?)[A-Za-z0-9_]+\b/,
	  contains: [
	  hljs.C_LINE_COMMENT_MODE,
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE
	     ]
	  };
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var IDENT_RE = '([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*';

	  return {
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        begin: IDENT_RE,
	        lexemes: IDENT_RE,
	        keywords: {
	          keyword:
	            'function if in break next repeat else for return switch while try tryCatch ' +
	            'stop warning require library attach detach source setMethod setGeneric ' +
	            'setGroupGeneric setClass ...',
	          literal:
	            'NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 ' +
	            'NA_complex_|10'
	        },
	        relevance: 0
	      },
	      {
	        // hex value
	        className: 'number',
	        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
	        relevance: 0
	      },
	      {
	        // explicit integer
	        className: 'number',
	        begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
	        relevance: 0
	      },
	      {
	        // number with trailing decimal
	        className: 'number',
	        begin: "\\d+\\.(?!\\d)(?:i\\b)?",
	        relevance: 0
	      },
	      {
	        // number
	        className: 'number',
	        begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
	        relevance: 0
	      },
	      {
	        // number with leading decimal
	        className: 'number',
	        begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
	        relevance: 0
	      },

	      {
	        // escaped identifier
	        begin: '`',
	        end: '`',
	        relevance: 0
	      },

	      {
	        className: 'string',
	        contains: [hljs.BACKSLASH_ESCAPE],
	        variants: [
	          {begin: '"', end: '"'},
	          {begin: "'", end: "'"}
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords:
	      'ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis ' +
	      'Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone ' +
	      'CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail ' +
	      'DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format ' +
	      'FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry ' +
	      'Hider Hyperboloid Identity Illuminate Imager Interior LightSource ' +
	      'MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte ' +
	      'MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option ' +
	      'Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples ' +
	      'PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection ' +
	      'Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ' +
	      'ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere ' +
	      'SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd ' +
	      'TransformPoints Translate TrimCurve WorldBegin WorldEnd',
	    illegal: '</',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var IDENTIFIER = '[a-zA-Z-_][^\n{\r\n]+\\{';

	  return {
	    aliases: ['graph', 'instances'],
	    case_insensitive: true,
	    keywords: 'import',
	    contains: [
	      // Facet sections
	      {
	        className: 'facet',
	        begin: '^facet ' + IDENTIFIER,
	        end: '}',
	        keywords: 'facet installer exports children extends',
	        contains: [
	          hljs.HASH_COMMENT_MODE
	        ]
	      },

	      // Instance sections
	      {
	        className: 'instance-of',
	        begin: '^instance of ' + IDENTIFIER,
	        end: '}',
	        keywords: 'name count channels instance-data instance-state instance of',
	        contains: [
	          // Instance overridden properties
	          {
	            className: 'keyword',
	            begin: '[a-zA-Z-_]+( |\t)*:'
	          },
	          hljs.HASH_COMMENT_MODE
	        ]
	      },

	      // Component sections
	      {
	        className: 'component',
	        begin: '^' + IDENTIFIER,
	        end: '}',
	        lexemes: '\\(?[a-zA-Z]+\\)?',
	        keywords: 'installer exports children extends imports facets alias (optional)',
	        contains: [
	          // Imported component variables
	          {
	            className: 'string',
	            begin: '\\.[a-zA-Z-_]+',
	            end: '\\s|,|;',
	            excludeEnd: true
	          },
	          hljs.HASH_COMMENT_MODE
	        ]
	      },

	      // Comments
	      hljs.HASH_COMMENT_MODE
	    ]
	  };
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        'float color point normal vector matrix while for if do return else break extern continue',
	      built_in:
	        'abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise ' +
	        'clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp ' +
	        'faceforward filterstep floor format fresnel incident length lightsource log match ' +
	        'max min mod noise normalize ntransform opposite option phong pnoise pow printf ' +
	        'ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp ' +
	        'setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan ' +
	        'texture textureinfo trace transform vtransform xcomp ycomp zcomp'
	    },
	    illegal: '</',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'preprocessor',
	        begin: '#', end: '$'
	      },
	      {
	        className: 'shader',
	        beginKeywords: 'surface displacement light volume imager', end: '\\('
	      },
	      {
	        className: 'shading',
	        beginKeywords: 'illuminate illuminance gather', end: '\\('
	      }
	    ]
	  };
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	       keyword: 'BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE ' +
	         'INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 ' +
	         'INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 ' +
	         'INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 ' +
	         'INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 ' +
	         'INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 ' +
	         'INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 ' +
	         'INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 ' +
	         'INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 ' +
	         'INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 ' +
	         'INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 ' +
	         'INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 ' +
	         'INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 ' +
	         'INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 ' +
	         'INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 ' +
	         'MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER ' +
	         'OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE ' +
	         'NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH ' +
	         'IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND ' +
	         'UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ' +
	         'ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE ' +
	         'GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE ' +
	         'SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING ' +
	         'DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF ' +
	         'MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY ' +
	         'YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE ' +
	         'COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR ' +
	         'READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ' +
	         'ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE ' +
	         'EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE ' +
	         'SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL ' +
	         'COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN ' +
	         'MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING ' +
	         'FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM ' +
	         'NUMDAYS READ_DATE STAGING',
	       built_in: 'IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML ' +
	         'DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT ' +
	         'DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE ' +
	         'DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT ' +
	         'DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      { className: 'array',
	        begin: '\#[a-zA-Z\ \.]+'
	      }
	    ]
	  };
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var NUM_SUFFIX = '([uif](8|16|32|64|size))\?';
	  var BLOCK_COMMENT = hljs.inherit(hljs.C_BLOCK_COMMENT_MODE);
	  BLOCK_COMMENT.contains.push('self');
	  return {
	    aliases: ['rs'],
	    keywords: {
	      keyword:
	        'alignof as be box break const continue crate do else enum extern ' +
	        'false fn for if impl in let loop match mod mut offsetof once priv ' +
	        'proc pub pure ref return self sizeof static struct super trait true ' +
	        'type typeof unsafe unsized use virtual while yield ' +
	        'int i8 i16 i32 i64 ' +
	        'uint u8 u32 u64 ' +
	        'float f32 f64 ' +
	        'str char bool',
	      built_in:
	        'assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! ' +
	        'debug_assert! debug_assert_eq! env! panic! file! format! format_args! ' +
	        'include_bin! include_str! line! local_data_key! module_path! ' +
	        'option_env! print! println! select! stringify! try! unimplemented! ' +
	        'unreachable! vec! write! writeln!'
	    },
	    lexemes: hljs.IDENT_RE + '!?',
	    illegal: '</',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      BLOCK_COMMENT,
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      {
	        className: 'string',
	        variants: [
	           { begin: /r(#*)".*?"\1(?!#)/ },
	           { begin: /'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ },
	           { begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ }
	        ]
	      },
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b0b([01_]+)' + NUM_SUFFIX },
	          { begin: '\\b0o([0-7_]+)' + NUM_SUFFIX },
	          { begin: '\\b0x([A-Fa-f0-9_]+)' + NUM_SUFFIX },
	          { begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' +
	                   NUM_SUFFIX
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'fn', end: '(\\(|<)', excludeEnd: true,
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        className: 'preprocessor',
	        begin: '#\\!?\\[', end: '\\]'
	      },
	      {
	        beginKeywords: 'type', end: '(=|<)',
	        contains: [hljs.UNDERSCORE_TITLE_MODE],
	        illegal: '\\S'
	      },
	      {
	        beginKeywords: 'trait enum', end: '({|<)',
	        contains: [hljs.UNDERSCORE_TITLE_MODE],
	        illegal: '\\S'
	      },
	      {
	        begin: hljs.IDENT_RE + '::'
	      },
	      {
	        begin: '->'
	      }
	    ]
	  };
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {

	  var ANNOTATION = {
	    className: 'annotation', begin: '@[A-Za-z]+'
	  };

	  var STRING = {
	    className: 'string',
	    begin: 'u?r?"""', end: '"""',
	    relevance: 10
	  };

	  var SYMBOL = {
	    className: 'symbol',
	    begin: '\'\\w[\\w\\d_]*(?!\')'
	  };

	  var TYPE = {
	    className: 'type',
	    begin: '\\b[A-Z][A-Za-z0-9_]*',
	    relevance: 0
	  };

	  var NAME = {
	    className: 'title',
	    begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
	    relevance: 0
	  };

	  var CLASS = {
	    className: 'class',
	    beginKeywords: 'class object trait type',
	    end: /[:={\[(\n;]/,
	    contains: [{className: 'keyword', beginKeywords: 'extends with', relevance: 10}, NAME]
	  };

	  var METHOD = {
	    className: 'function',
	    beginKeywords: 'def val',
	    end: /[:={\[(\n;]/,
	    contains: [NAME]
	  };

	  return {
	    keywords: {
	      literal: 'true false null',
	      keyword: 'type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      STRING,
	      hljs.QUOTE_STRING_MODE,
	      SYMBOL,
	      TYPE,
	      METHOD,
	      CLASS,
	      hljs.C_NUMBER_MODE,
	      ANNOTATION
	    ]
	  };
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var SCHEME_IDENT_RE = '[^\\(\\)\\[\\]\\{\\}",\'`;#|\\\\\\s]+';
	  var SCHEME_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+([./]\\d+)?';
	  var SCHEME_COMPLEX_NUMBER_RE = SCHEME_SIMPLE_NUMBER_RE + '[+\\-]' + SCHEME_SIMPLE_NUMBER_RE + 'i';
	  var BUILTINS = {
	    built_in:
	      'case-lambda call/cc class define-class exit-handler field import ' +
	      'inherit init-field interface let*-values let-values let/ec mixin ' +
	      'opt-lambda override protect provide public rename require ' +
	      'require-for-syntax syntax syntax-case syntax-error unit/sig unless ' +
	      'when with-syntax and begin call-with-current-continuation ' +
	      'call-with-input-file call-with-output-file case cond define ' +
	      'define-syntax delay do dynamic-wind else for-each if lambda let let* ' +
	      'let-syntax letrec letrec-syntax map or syntax-rules \' * + , ,@ - ... / ' +
	      '; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan ' +
	      'boolean? caar cadr call-with-input-file call-with-output-file ' +
	      'call-with-values car cdddar cddddr cdr ceiling char->integer ' +
	      'char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? ' +
	      'char-downcase char-lower-case? char-numeric? char-ready? char-upcase ' +
	      'char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? ' +
	      'char? close-input-port close-output-port complex? cons cos ' +
	      'current-input-port current-output-port denominator display eof-object? ' +
	      'eq? equal? eqv? eval even? exact->inexact exact? exp expt floor ' +
	      'force gcd imag-part inexact->exact inexact? input-port? integer->char ' +
	      'integer? interaction-environment lcm length list list->string ' +
	      'list->vector list-ref list-tail list? load log magnitude make-polar ' +
	      'make-rectangular make-string make-vector max member memq memv min ' +
	      'modulo negative? newline not null-environment null? number->string ' +
	      'number? numerator odd? open-input-file open-output-file output-port? ' +
	      'pair? peek-char port? positive? procedure? quasiquote quote quotient ' +
	      'rational? rationalize read read-char real-part real? remainder reverse ' +
	      'round scheme-report-environment set! set-car! set-cdr! sin sqrt string ' +
	      'string->list string->number string->symbol string-append string-ci<=? ' +
	      'string-ci<? string-ci=? string-ci>=? string-ci>? string-copy ' +
	      'string-fill! string-length string-ref string-set! string<=? string<? ' +
	      'string=? string>=? string>? string? substring symbol->string symbol? ' +
	      'tan transcript-off transcript-on truncate values vector ' +
	      'vector->list vector-fill! vector-length vector-ref vector-set! ' +
	      'with-input-from-file with-output-to-file write write-char zero?'
	  };

	  var SHEBANG = {
	    className: 'shebang',
	    begin: '^#!',
	    end: '$'
	  };

	  var LITERAL = {
	    className: 'literal',
	    begin: '(#t|#f|#\\\\' + SCHEME_IDENT_RE + '|#\\\\.)'
	  };

	  var NUMBER = {
	    className: 'number',
	    variants: [
	      { begin: SCHEME_SIMPLE_NUMBER_RE, relevance: 0 },
	      { begin: SCHEME_COMPLEX_NUMBER_RE, relevance: 0 },
	      { begin: '#b[0-1]+(/[0-1]+)?' },
	      { begin: '#o[0-7]+(/[0-7]+)?' },
	      { begin: '#x[0-9a-f]+(/[0-9a-f]+)?' }
	    ]
	  };

	  var STRING = hljs.QUOTE_STRING_MODE;

	  var REGULAR_EXPRESSION = {
	    className: 'regexp',
	    begin: '#[pr]x"',
	    end: '[^\\\\]"'
	  };

	  var COMMENT_MODES = [
	    hljs.COMMENT(
	      ';',
	      '$',
	      {
	        relevance: 0
	      }
	    ),
	    hljs.COMMENT('#\\|', '\\|#')
	  ];

	  var IDENT = {
	    begin: SCHEME_IDENT_RE,
	    relevance: 0
	  };

	  var QUOTED_IDENT = {
	    className: 'variable',
	    begin: '\'' + SCHEME_IDENT_RE
	  };

	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };

	  var LIST = {
	    className: 'list',
	    variants: [
	      { begin: '\\(', end: '\\)' },
	      { begin: '\\[', end: '\\]' }
	    ],
	    contains: [
	      {
	        className: 'keyword',
	        begin: SCHEME_IDENT_RE,
	        lexemes: SCHEME_IDENT_RE,
	        keywords: BUILTINS
	      },
	      BODY
	    ]
	  };

	  BODY.contains = [LITERAL, NUMBER, STRING, IDENT, QUOTED_IDENT, LIST].concat(COMMENT_MODES);

	  return {
	    illegal: /\S/,
	    contains: [SHEBANG, NUMBER, STRING, QUOTED_IDENT, LIST].concat(COMMENT_MODES)
	  };
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {

	  var COMMON_CONTAINS = [
	    hljs.C_NUMBER_MODE,
	    {
	      className: 'string',
	      begin: '\'|\"', end: '\'|\"',
	      contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
	    }
	  ];

	  return {
	    aliases: ['sci'],
	    keywords: {
	      keyword: 'abort break case clear catch continue do elseif else endfunction end for function'+
	        'global if pause return resume select try then while'+
	        '%f %F %t %T %pi %eps %inf %nan %e %i %z %s',
	      built_in: // Scilab has more than 2000 functions. Just list the most commons
	       'abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error'+
	       'exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty'+
	       'isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log'+
	       'max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real'+
	       'round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan'+
	       'type typename warning zeros matrix'
	    },
	    illegal: '("|#|/\\*|\\s+/\\w+)',
	    contains: [
	      {
	        className: 'function',
	        beginKeywords: 'function endfunction', end: '$',
	        keywords: 'function endfunction|10',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)'
	          }
	        ]
	      },
	      {
	        className: 'transposed_variable',
	        begin: '[a-zA-Z_][a-zA-Z_0-9]*(\'+[\\.\']*|[\\.\']+)', end: '',
	        relevance: 0
	      },
	      {
	        className: 'matrix',
	        begin: '\\[', end: '\\]\'*[\\.\']*',
	        relevance: 0,
	        contains: COMMON_CONTAINS
	      },
	      hljs.COMMENT('//', '$')
	    ].concat(COMMON_CONTAINS)
	  };
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
	  var VARIABLE = {
	    className: 'variable',
	    begin: '(\\$' + IDENT_RE + ')\\b'
	  };
	  var FUNCTION = {
	    className: 'function',
	    begin: IDENT_RE + '\\(',
	    returnBegin: true,
	    excludeEnd: true,
	    end: '\\('
	  };
	  var HEXCOLOR = {
	    className: 'hexcolor', begin: '#[0-9A-Fa-f]+'
	  };
	  var DEF_INTERNALS = {
	    className: 'attribute',
	    begin: '[A-Z\\_\\.\\-]+', end: ':',
	    excludeEnd: true,
	    illegal: '[^\\s]',
	    starts: {
	      className: 'value',
	      endsWithParent: true, excludeEnd: true,
	      contains: [
	        FUNCTION,
	        HEXCOLOR,
	        hljs.CSS_NUMBER_MODE,
	        hljs.QUOTE_STRING_MODE,
	        hljs.APOS_STRING_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        {
	          className: 'important', begin: '!important'
	        }
	      ]
	    }
	  };
	  return {
	    case_insensitive: true,
	    illegal: '[=/|\']',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      FUNCTION,
	      {
	        className: 'id', begin: '\\#[A-Za-z0-9_-]+',
	        relevance: 0
	      },
	      {
	        className: 'class', begin: '\\.[A-Za-z0-9_-]+',
	        relevance: 0
	      },
	      {
	        className: 'attr_selector',
	        begin: '\\[', end: '\\]',
	        illegal: '$'
	      },
	      {
	        className: 'tag', // begin: IDENT_RE, end: '[,|\\s]'
	        begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
	        relevance: 0
	      },
	      {
	        className: 'pseudo',
	        begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
	      },
	      {
	        className: 'pseudo',
	        begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
	      },
	      VARIABLE,
	      {
	        className: 'attribute',
	        begin: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
	        illegal: '[^\\s]'
	      },
	      {
	        className: 'value',
	        begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
	      },
	      {
	        className: 'value',
	        begin: ':', end: ';',
	        contains: [
	          FUNCTION,
	          VARIABLE,
	          HEXCOLOR,
	          hljs.CSS_NUMBER_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          {
	            className: 'important', begin: '!important'
	          }
	        ]
	      },
	      {
	        className: 'at_rule',
	        begin: '@', end: '[{;]',
	        keywords: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
	        contains: [
	          FUNCTION,
	          VARIABLE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          HEXCOLOR,
	          hljs.CSS_NUMBER_MODE,
	          {
	            className: 'preprocessor',
	            begin: '\\s[A-Za-z0-9_.-]+',
	            relevance: 0
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var smali_instr_low_prio = ['add', 'and', 'cmp', 'cmpg', 'cmpl', 'const', 'div', 'double', 'float', 'goto', 'if', 'int', 'long', 'move', 'mul', 'neg', 'new', 'nop', 'not', 'or', 'rem', 'return', 'shl', 'shr', 'sput', 'sub', 'throw', 'ushr', 'xor'];
	  var smali_instr_high_prio = ['aget', 'aput', 'array', 'check', 'execute', 'fill', 'filled', 'goto/16', 'goto/32', 'iget', 'instance', 'invoke', 'iput', 'monitor', 'packed', 'sget', 'sparse'];
	  var smali_keywords = ['transient', 'constructor', 'abstract', 'final', 'synthetic', 'public', 'private', 'protected', 'static', 'bridge', 'system'];
	  return {
	    aliases: ['smali'],
	    contains: [
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        relevance: 0
	      },
	      hljs.COMMENT(
	        '#',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'keyword',
	        begin: '\\s*\\.end\\s[a-zA-Z0-9]*',
	        relevance: 1
	      },
	      {
	        className: 'keyword',
	        begin: '^[ ]*\\.[a-zA-Z]*',
	        relevance: 0
	      },
	      {
	        className: 'keyword',
	        begin: '\\s:[a-zA-Z_0-9]*',
	        relevance: 0
	      },
	      {
	        className: 'keyword',
	        begin: '\\s('+smali_keywords.join('|')+')',
	        relevance: 1
	      },
	      {
	        className: 'keyword',
	        begin: '\\[',
	        relevance: 0
	      },
	      {
	        className: 'instruction',
	        begin: '\\s('+smali_instr_low_prio.join('|')+')\\s',
	        relevance: 1
	      },
	      {
	        className: 'instruction',
	        begin: '\\s('+smali_instr_low_prio.join('|')+')((\\-|/)[a-zA-Z0-9]+)+\\s',
	        relevance: 10
	      },
	      {
	        className: 'instruction',
	        begin: '\\s('+smali_instr_high_prio.join('|')+')((\\-|/)[a-zA-Z0-9]+)*\\s',
	        relevance: 10
	      },
	      {
	        className: 'class',
	        begin: 'L[^\(;:\n]*;',
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '( |->)[^(\n ;"]*\\(',
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '\\)',
	        relevance: 0
	      },
	      {
	        className: 'variable',
	        begin: '[vp][0-9]+',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
	  var CHAR = {
	    className: 'char',
	    begin: '\\$.{1}'
	  };
	  var SYMBOL = {
	    className: 'symbol',
	    begin: '#' + hljs.UNDERSCORE_IDENT_RE
	  };
	  return {
	    aliases: ['st'],
	    keywords: 'self super nil true false thisContext', // only 6
	    contains: [
	      hljs.COMMENT('"', '"'),
	      hljs.APOS_STRING_MODE,
	      {
	        className: 'class',
	        begin: '\\b[A-Z][A-Za-z0-9_]*',
	        relevance: 0
	      },
	      {
	        className: 'method',
	        begin: VAR_IDENT_RE + ':',
	        relevance: 0
	      },
	      hljs.C_NUMBER_MODE,
	      SYMBOL,
	      CHAR,
	      {
	        className: 'localvars',
	        // This looks more complicated than needed to avoid combinatorial
	        // explosion under V8. It effectively means `| var1 var2 ... |` with
	        // whitespace adjacent to `|` being optional.
	        begin: '\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\|',
	        returnBegin: true, end: /\|/,
	        illegal: /\S/,
	        contains: [{begin: '(\\|[ ]*)?' + VAR_IDENT_RE}]
	      },
	      {
	        className: 'array',
	        begin: '\\#\\(', end: '\\)',
	        contains: [
	          hljs.APOS_STRING_MODE,
	          CHAR,
	          hljs.C_NUMBER_MODE,
	          SYMBOL
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['ml'],
	    keywords: {
	      keyword:
	        /* according to Definition of Standard ML 97  */
	        'abstype and andalso as case datatype do else end eqtype ' +
	        'exception fn fun functor handle if in include infix infixr ' +
	        'let local nonfix of op open orelse raise rec sharing sig ' +
	        'signature struct structure then type val with withtype where while',
	      built_in:
	        /* built-in types according to basis library */
	        'array bool char exn int list option order real ref string substring vector unit word',
	      literal:
	        'true false NONE SOME LESS EQUAL GREATER nil'
	    },
	    illegal: /\/\/|>>/,
	    lexemes: '[a-z_]\\w*!?',
	    contains: [
	      {
	        className: 'literal',
	        begin: '\\[(\\|\\|)?\\]|\\(\\)'
	      },
	      hljs.COMMENT(
	        '\\(\\*',
	        '\\*\\)',
	        {
	          contains: ['self']
	        }
	      ),
	      { /* type variable */
	        className: 'symbol',
	        begin: '\'[A-Za-z_](?!\')[\\w\']*'
	        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
	      },
	      { /* polymorphic variant */
	        className: 'tag',
	        begin: '`[A-Z][\\w\']*'
	      },
	      { /* module or constructor */
	        className: 'type',
	        begin: '\\b[A-Z][\\w\']*',
	        relevance: 0
	      },
	      { /* don't color identifiers, but safely catch all identifiers with '*/
	        begin: '[a-z_]\\w*\'[\\w\']*'
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'char', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      {
	        className: 'number',
	        begin:
	          '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
	          '0[oO][0-7_]+[Lln]?|' +
	          '0[bB][01_]+[Lln]?|' +
	          '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
	        relevance: 0
	      },
	      {
	        begin: /[-=]>/ // relevance booster
	      }
	    ]
	  };
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var COMMENT_MODE = hljs.COMMENT('--', '$');
	  return {
	    case_insensitive: true,
	    illegal: /[<>]/,
	    contains: [
	      {
	        className: 'operator',
	        beginKeywords:
	          'begin end start commit rollback savepoint lock alter create drop rename call '+
	          'delete do handler insert load replace select truncate update set show pragma grant '+
	          'merge describe use explain help declare prepare execute deallocate savepoint release '+
	          'unlock purge reset change stop analyze cache flush optimize repair kill '+
	          'install uninstall checksum restore check backup revoke',
	        end: /;/, endsWithParent: true,
	        keywords: {
	          keyword:
	            'abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter ' +
	            'analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup ' +
	            'before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by ' +
	            'cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length ' +
	            'character_length charindex charset check checksum checksum_agg choose close coalesce ' +
	            'coercibility collate collation collationproperty column columns columns_updated commit compress concat ' +
	            'concat_ws concurrent connect connection connection_id consistent constraint constraints continue ' +
	            'contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist ' +
	            'curdate current current_date current_time current_timestamp current_user cursor curtime data database ' +
	            'databases datalength date_add date_format date_sub dateadd datediff datefromparts datename ' +
	            'datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear ' +
	            'deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt ' +
	            'des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct ' +
	            'distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec ' +
	            'engine engines eomonth errors escape escaped event eventdata events except exception exec execute ' +
	            'exists exp explain export_set extended external extract fast fetch field fields find_in_set ' +
	            'first first_value floor flush for force foreign format found found_rows from from_base64 ' +
	            'from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant ' +
	            'grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help ' +
	            'hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore ' +
	            'iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner ' +
	            'innodb input insert install instr intersect into is is_free_lock is_ipv4 ' +
	            'is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill ' +
	            'language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level ' +
	            'like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile ' +
	            'logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max ' +
	            'md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names ' +
	            'national natural nchar next no no_write_to_binlog not now nullif nvarchar oct ' +
	            'octet_length of old_password on only open optimize option optionally or ord order outer outfile output ' +
	            'pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add ' +
	            'period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges ' +
	            'procedure procedure_analyze processlist profile profiles public publishingservername purge quarter ' +
	            'query quick quote quotename radians rand read references regexp relative relaylog release ' +
	            'release_lock rename repair repeat replace replicate reset restore restrict return returns reverse ' +
	            'revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll ' +
	            'sec_to_time second section select serializable server session session_user set sha sha1 sha2 share ' +
	            'show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex ' +
	            'sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache ' +
	            'sql_small_result sql_variant_property sqlstate sqrt square start starting status std ' +
	            'stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff ' +
	            'subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset ' +
	            'system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time ' +
	            'time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour ' +
	            'timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation ' +
	            'trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress ' +
	            'uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade ' +
	            'upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short ' +
	            'validate_password_strength value values var var_pop var_samp variables variance varp ' +
	            'version view warnings week weekday weekofyear weight_string when whenever where with work write xml ' +
	            'xor year yearweek zon',
	          literal:
	            'true false null',
	          built_in:
	            'array bigint binary bit blob boolean char character date dec decimal float int integer interval number ' +
	            'numeric real serial smallint varchar varying int8 serial8 text'
	        },
	        contains: [
	          {
	            className: 'string',
	            begin: '\'', end: '\'',
	            contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
	          },
	          {
	            className: 'string',
	            begin: '"', end: '"',
	            contains: [hljs.BACKSLASH_ESCAPE, {begin: '""'}]
	          },
	          {
	            className: 'string',
	            begin: '`', end: '`',
	            contains: [hljs.BACKSLASH_ESCAPE]
	          },
	          hljs.C_NUMBER_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          COMMENT_MODE
	        ]
	      },
	      hljs.C_BLOCK_COMMENT_MODE,
	      COMMENT_MODE
	    ]
	  };
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['do', 'ado'],
	    case_insensitive: true,
	    keywords: 'if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate g gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l la lab labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize meqparse mer merg merge mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5',
	        contains: [
	      {
	        className: 'label',
	        variants: [
	          {begin: "\\$\\{?[a-zA-Z0-9_]+\\}?"},
	          {begin: "`[a-zA-Z0-9_]+'"}

	        ]
	      },
	      {
	        className: 'string',
	        variants: [
	          {begin: '`"[^\r\n]*?"\''},
	          {begin: '"[^\r\n"]*"'}
	        ]
	      },

	      {
	        className: 'literal',
	        variants: [
	          {
	            begin: '\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\(|$)'
	          }
	        ]
	      },

	      hljs.COMMENT('^[ \t]*\\*.*$', false),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
	  var STEP21_CLOSE_RE = 'END-ISO-10303-21;';
	  var STEP21_KEYWORDS = {
	    literal: '',
	    built_in: '',
	    keyword:
	    'HEADER ENDSEC DATA'
	  };
	  var STEP21_START = {
	    className: 'preprocessor',
	    begin: 'ISO-10303-21;',
	    relevance: 10
	  };
	  var STEP21_CODE = [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.COMMENT('/\\*\\*!', '\\*/'),
	    hljs.C_NUMBER_MODE,
	    hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	    hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	    {
	      className: 'string',
	      begin: "'", end: "'"
	    },
	    {
	      className: 'label',
	      variants: [
	        {
	          begin: '#', end: '\\d+',
	          illegal: '\\W'
	        }
	      ]
	    }
	  ];

	  return {
	    aliases: ['p21', 'step', 'stp'],
	    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.
	    lexemes: STEP21_IDENT_RE,
	    keywords: STEP21_KEYWORDS,
	    contains: [
	      {
	        className: 'preprocessor',
	        begin: STEP21_CLOSE_RE,
	        relevance: 10
	      },
	      STEP21_START
	    ].concat(STEP21_CODE)
	  };
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {

	  var VARIABLE = {
	    className: 'variable',
	    begin: '\\$' + hljs.IDENT_RE
	  };

	  var HEX_COLOR = {
	    className: 'hexcolor',
	    begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})',
	    relevance: 10
	  };

	  var AT_KEYWORDS = [
	    'charset',
	    'css',
	    'debug',
	    'extend',
	    'font-face',
	    'for',
	    'import',
	    'include',
	    'media',
	    'mixin',
	    'page',
	    'warn',
	    'while'
	  ];

	  var PSEUDO_SELECTORS = [
	    'after',
	    'before',
	    'first-letter',
	    'first-line',
	    'active',
	    'first-child',
	    'focus',
	    'hover',
	    'lang',
	    'link',
	    'visited'
	  ];

	  var TAGS = [
	    'a',
	    'abbr',
	    'address',
	    'article',
	    'aside',
	    'audio',
	    'b',
	    'blockquote',
	    'body',
	    'button',
	    'canvas',
	    'caption',
	    'cite',
	    'code',
	    'dd',
	    'del',
	    'details',
	    'dfn',
	    'div',
	    'dl',
	    'dt',
	    'em',
	    'fieldset',
	    'figcaption',
	    'figure',
	    'footer',
	    'form',
	    'h1',
	    'h2',
	    'h3',
	    'h4',
	    'h5',
	    'h6',
	    'header',
	    'hgroup',
	    'html',
	    'i',
	    'iframe',
	    'img',
	    'input',
	    'ins',
	    'kbd',
	    'label',
	    'legend',
	    'li',
	    'mark',
	    'menu',
	    'nav',
	    'object',
	    'ol',
	    'p',
	    'q',
	    'quote',
	    'samp',
	    'section',
	    'span',
	    'strong',
	    'summary',
	    'sup',
	    'table',
	    'tbody',
	    'td',
	    'textarea',
	    'tfoot',
	    'th',
	    'thead',
	    'time',
	    'tr',
	    'ul',
	    'var',
	    'video'
	  ];

	  var TAG_END = '[\\.\\s\\n\\[\\:,]';

	  var ATTRIBUTES = [
	    'align-content',
	    'align-items',
	    'align-self',
	    'animation',
	    'animation-delay',
	    'animation-direction',
	    'animation-duration',
	    'animation-fill-mode',
	    'animation-iteration-count',
	    'animation-name',
	    'animation-play-state',
	    'animation-timing-function',
	    'auto',
	    'backface-visibility',
	    'background',
	    'background-attachment',
	    'background-clip',
	    'background-color',
	    'background-image',
	    'background-origin',
	    'background-position',
	    'background-repeat',
	    'background-size',
	    'border',
	    'border-bottom',
	    'border-bottom-color',
	    'border-bottom-left-radius',
	    'border-bottom-right-radius',
	    'border-bottom-style',
	    'border-bottom-width',
	    'border-collapse',
	    'border-color',
	    'border-image',
	    'border-image-outset',
	    'border-image-repeat',
	    'border-image-slice',
	    'border-image-source',
	    'border-image-width',
	    'border-left',
	    'border-left-color',
	    'border-left-style',
	    'border-left-width',
	    'border-radius',
	    'border-right',
	    'border-right-color',
	    'border-right-style',
	    'border-right-width',
	    'border-spacing',
	    'border-style',
	    'border-top',
	    'border-top-color',
	    'border-top-left-radius',
	    'border-top-right-radius',
	    'border-top-style',
	    'border-top-width',
	    'border-width',
	    'bottom',
	    'box-decoration-break',
	    'box-shadow',
	    'box-sizing',
	    'break-after',
	    'break-before',
	    'break-inside',
	    'caption-side',
	    'clear',
	    'clip',
	    'clip-path',
	    'color',
	    'column-count',
	    'column-fill',
	    'column-gap',
	    'column-rule',
	    'column-rule-color',
	    'column-rule-style',
	    'column-rule-width',
	    'column-span',
	    'column-width',
	    'columns',
	    'content',
	    'counter-increment',
	    'counter-reset',
	    'cursor',
	    'direction',
	    'display',
	    'empty-cells',
	    'filter',
	    'flex',
	    'flex-basis',
	    'flex-direction',
	    'flex-flow',
	    'flex-grow',
	    'flex-shrink',
	    'flex-wrap',
	    'float',
	    'font',
	    'font-family',
	    'font-feature-settings',
	    'font-kerning',
	    'font-language-override',
	    'font-size',
	    'font-size-adjust',
	    'font-stretch',
	    'font-style',
	    'font-variant',
	    'font-variant-ligatures',
	    'font-weight',
	    'height',
	    'hyphens',
	    'icon',
	    'image-orientation',
	    'image-rendering',
	    'image-resolution',
	    'ime-mode',
	    'inherit',
	    'initial',
	    'justify-content',
	    'left',
	    'letter-spacing',
	    'line-height',
	    'list-style',
	    'list-style-image',
	    'list-style-position',
	    'list-style-type',
	    'margin',
	    'margin-bottom',
	    'margin-left',
	    'margin-right',
	    'margin-top',
	    'marks',
	    'mask',
	    'max-height',
	    'max-width',
	    'min-height',
	    'min-width',
	    'nav-down',
	    'nav-index',
	    'nav-left',
	    'nav-right',
	    'nav-up',
	    'none',
	    'normal',
	    'object-fit',
	    'object-position',
	    'opacity',
	    'order',
	    'orphans',
	    'outline',
	    'outline-color',
	    'outline-offset',
	    'outline-style',
	    'outline-width',
	    'overflow',
	    'overflow-wrap',
	    'overflow-x',
	    'overflow-y',
	    'padding',
	    'padding-bottom',
	    'padding-left',
	    'padding-right',
	    'padding-top',
	    'page-break-after',
	    'page-break-before',
	    'page-break-inside',
	    'perspective',
	    'perspective-origin',
	    'pointer-events',
	    'position',
	    'quotes',
	    'resize',
	    'right',
	    'tab-size',
	    'table-layout',
	    'text-align',
	    'text-align-last',
	    'text-decoration',
	    'text-decoration-color',
	    'text-decoration-line',
	    'text-decoration-style',
	    'text-indent',
	    'text-overflow',
	    'text-rendering',
	    'text-shadow',
	    'text-transform',
	    'text-underline-position',
	    'top',
	    'transform',
	    'transform-origin',
	    'transform-style',
	    'transition',
	    'transition-delay',
	    'transition-duration',
	    'transition-property',
	    'transition-timing-function',
	    'unicode-bidi',
	    'vertical-align',
	    'visibility',
	    'white-space',
	    'widows',
	    'width',
	    'word-break',
	    'word-spacing',
	    'word-wrap',
	    'z-index'
	  ];

	  // illegals
	  var ILLEGAL = [
	    '\\{',
	    '\\}',
	    '\\?',
	    '(\\bReturn\\b)', // monkey
	    '(\\bEnd\\b)', // monkey
	    '(\\bend\\b)', // vbscript
	    ';', // sql
	    '#\\s', // markdown
	    '\\*\\s', // markdown
	    '===\\s', // markdown
	    '\\|',
	    '%', // prolog
	  ];

	  return {
	    aliases: ['styl'],
	    case_insensitive: false,
	    illegal: '(' + ILLEGAL.join('|') + ')',
	    keywords: 'if else for in',
	    contains: [

	      // strings
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,

	      // comments
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,

	      // hex colors
	      HEX_COLOR,

	      // class tag
	      {
	        begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*' + TAG_END,
	        returnBegin: true,
	        contains: [
	          {className: 'class', begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*'}
	        ]
	      },

	      // id tag
	      {
	        begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*' + TAG_END,
	        returnBegin: true,
	        contains: [
	          {className: 'id', begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*'}
	        ]
	      },

	      // tags
	      {
	        begin: '\\b(' + TAGS.join('|') + ')' + TAG_END,
	        returnBegin: true,
	        contains: [
	          {className: 'tag', begin: '\\b[a-zA-Z][a-zA-Z0-9_-]*'}
	        ]
	      },

	      // psuedo selectors
	      {
	        className: 'pseudo',
	        begin: '&?:?:\\b(' + PSEUDO_SELECTORS.join('|') + ')' + TAG_END
	      },

	      // @ keywords
	      {
	        className: 'at_rule',
	        begin: '\@(' + AT_KEYWORDS.join('|') + ')\\b'
	      },

	      // variables
	      VARIABLE,

	      // dimension
	      hljs.CSS_NUMBER_MODE,

	      // number
	      hljs.NUMBER_MODE,

	      // functions
	      //  - only from beginning of line + whitespace
	      {
	        className: 'function',
	        begin: '\\b[a-zA-Z][a-zA-Z0-9_\-]*\\(.*\\)',
	        illegal: '[\\n]',
	        returnBegin: true,
	        contains: [
	          {className: 'title', begin: '\\b[a-zA-Z][a-zA-Z0-9_\-]*'},
	          {
	            className: 'params',
	            begin: /\(/,
	            end: /\)/,
	            contains: [
	              HEX_COLOR,
	              VARIABLE,
	              hljs.APOS_STRING_MODE,
	              hljs.CSS_NUMBER_MODE,
	              hljs.NUMBER_MODE,
	              hljs.QUOTE_STRING_MODE
	            ]
	          }
	        ]
	      },

	      // attributes
	      //  - only from beginning of line + whitespace
	      //  - must have whitespace after it
	      {
	        className: 'attribute',
	        begin: '\\b(' + ATTRIBUTES.reverse().join('|') + ')\\b'
	      }
	    ]
	  };
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var SWIFT_KEYWORDS = {
	      keyword: 'class deinit enum extension func import init let protocol static ' +
	        'struct subscript typealias var break case continue default do ' +
	        'else fallthrough if in for return switch where while as dynamicType ' +
	        'is new super self Self Type __COLUMN__ __FILE__ __FUNCTION__ ' +
	        '__LINE__ associativity didSet get infix inout left mutating none ' +
	        'nonmutating operator override postfix precedence prefix right set '+
	        'unowned unowned safe unsafe weak willSet',
	      literal: 'true false nil',
	      built_in: 'abs advance alignof alignofValue assert bridgeFromObjectiveC ' +
	        'bridgeFromObjectiveCUnconditional bridgeToObjectiveC ' +
	        'bridgeToObjectiveCUnconditional c contains count countElements ' +
	        'countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump ' +
	        'encodeBitsAsWords enumerate equal filter find getBridgedObjectiveCType ' +
	        'getVaList indices insertionSort isBridgedToObjectiveC ' +
	        'isBridgedVerbatimToObjectiveC isUniquelyReferenced join ' +
	        'lexicographicalCompare map max maxElement min minElement numericCast ' +
	        'partition posix print println quickSort reduce reflect reinterpretCast ' +
	        'reverse roundUpToAlignment sizeof sizeofValue sort split startsWith strideof ' +
	        'strideofValue swap swift toString transcode underestimateCount ' +
	        'unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer ' +
	        'withUnsafePointerToObject withUnsafePointers withVaList'
	    };

	  var TYPE = {
	    className: 'type',
	    begin: '\\b[A-Z][\\w\']*',
	    relevance: 0
	  };
	  var BLOCK_COMMENT = hljs.COMMENT(
	    '/\\*',
	    '\\*/',
	    {
	      contains: ['self']
	    }
	  );
	  var SUBST = {
	    className: 'subst',
	    begin: /\\\(/, end: '\\)',
	    keywords: SWIFT_KEYWORDS,
	    contains: [] // assigned later
	  };
	  var NUMBERS = {
	      className: 'number',
	      begin: '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
	      relevance: 0
	  };
	  var QUOTE_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
	    contains: [SUBST, hljs.BACKSLASH_ESCAPE]
	  });
	  SUBST.contains = [NUMBERS];

	  return {
	    keywords: SWIFT_KEYWORDS,
	    contains: [
	      QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      BLOCK_COMMENT,
	      TYPE,
	      NUMBERS,
	      {
	        className: 'func',
	        beginKeywords: 'func', end: '{', excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            begin: /[A-Za-z$_][0-9A-Za-z$_]*/,
	            illegal: /\(/
	          }),
	          {
	            className: 'generics',
	            begin: /</, end: />/,
	            illegal: />/
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/, endsParent: true,
	            keywords: SWIFT_KEYWORDS,
	            contains: [
	              'self',
	              NUMBERS,
	              QUOTE_STRING_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              {begin: ':'} // relevance booster
	            ],
	            illegal: /["']/
	          }
	        ],
	        illegal: /\[|%/
	      },
	      {
	        className: 'class',
	        beginKeywords: 'struct protocol class extension enum',
	        keywords: SWIFT_KEYWORDS,
	        end: '\\{',
	        excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/})
	        ]
	      },
	      {
	        className: 'preprocessor', // @attributes
	        begin: '(@assignment|@class_protocol|@exported|@final|@lazy|@noreturn|' +
	                  '@NSCopying|@NSManaged|@objc|@optional|@required|@auto_closure|' +
	                  '@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|' +
	                  '@infix|@prefix|@postfix)'
	      }
	    ]
	  };
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['tk'],
	    keywords: 'after append apply array auto_execok auto_import auto_load auto_mkindex ' +
	      'auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock ' +
	      'close concat continue dde dict encoding eof error eval exec exit expr fblocked ' +
	      'fconfigure fcopy file fileevent filename flush for foreach format gets glob global ' +
	      'history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list ' +
	      'llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 '+
	      'mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex '+
	      'platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename '+
	      'return safe scan seek set socket source split string subst switch tcl_endOfWord '+
	      'tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter '+
	      'tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update '+
	      'uplevel upvar variable vwait while',
	    contains: [
	      hljs.COMMENT(';[ \\t]*#', '$'),
	      hljs.COMMENT('^[ \\t]*#', '$'),
	      {
	        beginKeywords: 'proc',
	        end: '[\\{]',
	        excludeEnd: true,
	        contains: [
	          {
	            className: 'symbol',
	            begin: '[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
	            end: '[ \\t\\n\\r]',
	            endsWithParent: true,
	            excludeEnd: true
	          }
	        ]
	      },
	      {
	        className: 'variable',
	        excludeEnd: true,
	        variants: [
	          {
	            begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)',
	            end: '[^a-zA-Z0-9_\\}\\$]'
	          },
	          {
	            begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
	            end: '(\\))?[^a-zA-Z0-9_\\}\\$]'
	          }
	        ]
	      },
	      {
	        className: 'string',
	        contains: [hljs.BACKSLASH_ESCAPE],
	        variants: [
	          hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	          hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
	        ]
	      },
	      {
	        className: 'number',
	        variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
	      }
	    ]
	  }
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var COMMAND1 = {
	    className: 'command',
	    begin: '\\\\[a-zA-Zа-яА-я]+[\\*]?'
	  };
	  var COMMAND2 = {
	    className: 'command',
	    begin: '\\\\[^a-zA-Zа-яА-я0-9]'
	  };
	  var SPECIAL = {
	    className: 'special',
	    begin: '[{}\\[\\]\\&#~]',
	    relevance: 0
	  };

	  return {
	    contains: [
	      { // parameter
	        begin: '\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?',
	        returnBegin: true,
	        contains: [
	          COMMAND1, COMMAND2,
	          {
	            className: 'number',
	            begin: ' *=', end: '-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?',
	            excludeBegin: true
	          }
	        ],
	        relevance: 10
	      },
	      COMMAND1, COMMAND2,
	      SPECIAL,
	      {
	        className: 'formula',
	        begin: '\\$\\$', end: '\\$\\$',
	        contains: [COMMAND1, COMMAND2, SPECIAL],
	        relevance: 0
	      },
	      {
	        className: 'formula',
	        begin: '\\$', end: '\\$',
	        contains: [COMMAND1, COMMAND2, SPECIAL],
	        relevance: 0
	      },
	      hljs.COMMENT(
	        '%',
	        '$',
	        {
	          relevance: 0
	        }
	      )
	    ]
	  };
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var BUILT_IN_TYPES = 'bool byte i16 i32 i64 double string binary';
	  return {
	    keywords: {
	      keyword:
	        'namespace const typedef struct enum service exception void oneway set list map required optional',
	      built_in:
	        BUILT_IN_TYPES,
	      literal:
	        'true false'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'struct enum service exception', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      },
	      {
	        begin: '\\b(set|list|map)\\s*<', end: '>',
	        keywords: BUILT_IN_TYPES,
	        contains: ['self']
	      }
	    ]
	  };
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var TPID = {
	    className: 'number',
	    begin: '[1-9][0-9]*', /* no leading zeros */
	    relevance: 0
	  }
	  var TPLABEL = {
	    className: 'comment',
	    begin: ':[^\\]]+'
	  }
	  var TPDATA = {
	    className: 'built_in',
	    begin: '(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|\
	    TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[', end: '\\]',
	    contains: [
	      'self',
	      TPID,
	      TPLABEL
	    ]
	  };
	  var TPIO = {
	    className: 'built_in',
	    begin: '(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[', end: '\\]',
	    contains: [
	      'self',
	      TPID,
	      hljs.QUOTE_STRING_MODE, /* for pos section at bottom */
	      TPLABEL
	    ]
	  };

	  return {
	    keywords: {
	      keyword:
	        'ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB ' +
	        'DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC ' +
	        'IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE ' +
	        'PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET ' +
	        'Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN ' +
	        'SUBSTR FINDSTR VOFFSET',
	      constant:
	        'ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET',
	    },
	    contains: [
	      TPDATA,
	      TPIO,
	      {
	        className: 'keyword',
	        begin: '/(PROG|ATTR|MN|POS|END)\\b'
	      },
	      {
	        /* this is for cases like ,CALL */
	        className: 'keyword',
	        begin: '(CALL|RUN|POINT_LOGIC|LBL)\\b'
	      },
	      {
	        /* this is for cases like CNT100 where the default lexemes do not
	         * separate the keyword and the number */
	        className: 'keyword',
	        begin: '\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)'
	      },
	      {
	        /* to catch numbers that do not have a word boundary on the left */
	        className: 'number',
	        begin: '\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b',
	        relevance: 0
	      },
	      hljs.COMMENT('//', '[;$]'),
	      hljs.COMMENT('!', '[;$]'),
	      hljs.COMMENT('--eg:', '$'),
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'', end: '\''
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'variable',
	        begin: '\\$[A-Za-z0-9_]+'
	      }
	    ]
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)'
	  };

	  var FUNCTION_NAMES = 'attribute block constant cycle date dump include ' +
	                  'max min parent random range source template_from_string';

	  var FUNCTIONS = {
	    className: 'function',
	    beginKeywords: FUNCTION_NAMES,
	    relevance: 0,
	    contains: [
	      PARAMS
	    ]
	  };

	  var FILTER = {
	    className: 'filter',
	    begin: /\|[A-Za-z_]+:?/,
	    keywords:
	      'abs batch capitalize convert_encoding date date_modify default ' +
	      'escape first format join json_encode keys last length lower ' +
	      'merge nl2br number_format raw replace reverse round slice sort split ' +
	      'striptags title trim upper url_encode',
	    contains: [
	      FUNCTIONS
	    ]
	  };

	  var TAGS = 'autoescape block do embed extends filter flush for ' +
	    'if import include macro sandbox set spaceless use verbatim';

	  TAGS = TAGS + ' ' + TAGS.split(' ').map(function(t){return 'end' + t}).join(' ');

	  return {
	    aliases: ['craftcms'],
	    case_insensitive: true,
	    subLanguage: 'xml', subLanguageMode: 'continuous',
	    contains: [
	      hljs.COMMENT(/\{#/, /#}/),
	      {
	        className: 'template_tag',
	        begin: /\{%/, end: /%}/,
	        keywords: TAGS,
	        contains: [FILTER, FUNCTIONS]
	      },
	      {
	        className: 'variable',
	        begin: /\{\{/, end: /}}/,
	        contains: [FILTER, FUNCTIONS]
	      }
	    ]
	  };
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      'in if for while finally var new function|0 do return void else break catch ' +
	      'instanceof with throw case default try this switch continue typeof delete ' +
	      'let yield const class public private get set super interface extends' +
	      'static constructor implements enum export import declare type protected',
	    literal:
	      'true false null undefined NaN Infinity',
	    built_in:
	      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
	      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
	      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
	      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
	      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
	      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
	      'module console window document any number boolean string void'
	  }

	  return {
	    aliases: ['ts'],
	    keywords: KEYWORDS,
	    contains: [
	      {
	        className: 'pi',
	        begin: /^\s*['"]use strict['"]/,
	        relevance: 0
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b(0[bB][01]+)' },
	          { begin: '\\b(0[oO][0-7]+)' },
	          { begin: hljs.C_NUMBER_RE }
	        ],
	        relevance: 0
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.REGEXP_MODE,
	          { // E4X
	            begin: /</, end: />;/,
	            relevance: 0,
	            subLanguage: 'xml'
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: 'function', end: /[\{;]/, excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          'self',
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            keywords: KEYWORDS,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ],
	            illegal: /["'\(]/
	          }
	        ],
	        illegal: /\[|%/,
	        relevance: 0 // () => {} is more typical in TypeScript
	      },
	      {
	        className: 'constructor',
	        begin: 'constructor', end: /\{/, excludeEnd: true,
	        keywords: KEYWORDS,
	        relevance: 10
	      },
	      {
	        className: 'module',
	        beginKeywords: 'module', end: /\{/, excludeEnd: true
	      },
	      {
	        className: 'interface',
	        beginKeywords: 'interface', end: /\{/, excludeEnd: true
	      },
	      {
	        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	      },
	      {
	        begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
	      }
	    ]
	  };
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        // Value types
	        'char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 ' +
	        'uint16 uint32 uint64 float double bool struct enum string void ' +
	        // Reference types
	        'weak unowned owned ' +
	        // Modifiers
	        'async signal static abstract interface override ' +
	        // Control Structures
	        'while do for foreach else switch case break default return try catch ' +
	        // Visibility
	        'public private protected internal ' +
	        // Other
	        'using new this get set const stdout stdin stderr var',
	      built_in:
	        'DBus GLib CCode Gee Object',
	      literal:
	        'false true null'
	    },
	    contains: [
	      {
	        className: 'class',
	        beginKeywords: 'class interface delegate namespace', end: '{', excludeEnd: true,
	        illegal: '[^,:\\n\\s\\.]',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'string',
	        begin: '"""', end: '"""',
	        relevance: 5
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'preprocessor',
	        begin: '^#', end: '$',
	        relevance: 2
	      },
	      {
	        className: 'constant',
	        begin: ' [A-Z_]+ ',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['vb'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval ' + /* a-b */
	        'call case catch class compare const continue custom declare default delegate dim distinct do ' + /* c-d */
	        'each equals else elseif end enum erase error event exit explicit finally for friend from function ' + /* e-f */
	        'get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue ' + /* g-i */
	        'join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass ' + /* j-m */
	        'namespace narrowing new next not notinheritable notoverridable ' + /* n */
	        'of off on operator option optional or order orelse overloads overridable overrides ' + /* o */
	        'paramarray partial preserve private property protected public ' + /* p */
	        'raiseevent readonly redim rem removehandler resume return ' + /* r */
	        'select set shadows shared skip static step stop structure strict sub synclock ' + /* s */
	        'take text then throw to try unicode until using when where while widening with withevents writeonly xor', /* t-x */
	      built_in:
	        'boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype ' +  /* b-c */
	        'date decimal directcast double gettype getxmlnamespace iif integer long object ' + /* d-o */
	        'sbyte short single string trycast typeof uinteger ulong ushort', /* s-u */
	      literal:
	        'true false nothing'
	    },
	    illegal: '//|{|}|endif|gosub|variant|wend', /* reserved deprecated keywords */
	    contains: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
	      hljs.COMMENT(
	        '\'',
	        '$',
	        {
	          returnBegin: true,
	          contains: [
	            {
	              className: 'xmlDocTag',
	              begin: '\'\'\'|<!--|-->',
	              contains: [hljs.PHRASAL_WORDS_MODE]
	            },
	            {
	              className: 'xmlDocTag',
	              begin: '</?', end: '>',
	              contains: [hljs.PHRASAL_WORDS_MODE]
	            }
	          ]
	        }
	      ),
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'preprocessor',
	        begin: '#', end: '$',
	        keywords: 'if else elseif end region externalsource'
	      }
	    ]
	  };
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['vbs'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'call class const dim do loop erase execute executeglobal exit for each next function ' +
	        'if then else on error option explicit new private property let get public randomize ' +
	        'redim rem select case set stop sub while wend with end to elseif is or xor and not ' +
	        'class_initialize class_terminate default preserve in me byval byref step resume goto',
	      built_in:
	        'lcase month vartype instrrev ubound setlocale getobject rgb getref string ' +
	        'weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency ' +
	        'conversions csng timevalue second year space abs clng timeserial fixs len asc ' +
	        'isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate ' +
	        'instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex ' +
	        'chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim ' +
	        'strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion ' +
	        'scriptengine split scriptengineminorversion cint sin datepart ltrim sqr ' +
	        'scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw ' +
	        'chrw regexp server response request cstr err',
	      literal:
	        'true false null nothing empty'
	    },
	    illegal: '//',
	    contains: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
	      hljs.COMMENT(
	        /'/,
	        /$/,
	        {
	          relevance: 0
	        }
	      ),
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    subLanguage: 'xml', subLanguageMode: 'continuous',
	    contains: [
	      {
	        begin: '<%', end: '%>',
	        subLanguage: 'vbscript'
	      }
	    ]
	  };
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['v'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'always and assign begin buf bufif0 bufif1 case casex casez cmos deassign ' +
	        'default defparam disable edge else end endcase endfunction endmodule ' +
	        'endprimitive endspecify endtable endtask event for force forever fork ' +
	        'function if ifnone initial inout input join macromodule module nand ' +
	        'negedge nmos nor not notif0 notif1 or output parameter pmos posedge ' +
	        'primitive pulldown pullup rcmos release repeat rnmos rpmos rtran ' +
	        'rtranif0 rtranif1 specify specparam table task timescale tran ' +
	        'tranif0 tranif1 wait while xnor xor',
	      typename:
	        'highz0 highz1 integer large medium pull0 pull1 real realtime reg ' +
	        'scalared signed small strong0 strong1 supply0 supply0 supply1 supply1 ' +
	        'time tri tri0 tri1 triand trior trireg vectored wand weak0 weak1 wire wor'
	    },
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'number',
	        begin: '\\b(\\d+\'(b|h|o|d|B|H|O|D))?[0-9xzXZ]+',
	        contains: [hljs.BACKSLASH_ESCAPE],
	        relevance: 0
	      },
	      /* ports in instances */
	      {
	        className: 'typename',
	        begin: '\\.\\w+',
	        relevance: 0
	      },
	      /* parameters to instances */
	      {
	        className: 'value',
	        begin: '#\\((?!parameter).+\\)'
	      },
	      /* operators */
	      {
	        className: 'keyword',
	        begin: '\\+|-|\\*|/|%|<|>|=|#|`|\\!|&|\\||@|:|\\^|~|\\{|\\}',
	        relevance: 0
	      }
	    ]
	  }; // return
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  // Regular expression for VHDL numeric literals.

	  // Decimal literal:
	  var INTEGER_RE = '\\d(_|\\d)*';
	  var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
	  var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';
	  // Based literal:
	  var BASED_INTEGER_RE = '\\w+';
	  var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

	  var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'abs access after alias all and architecture array assert attribute begin block ' +
	        'body buffer bus case component configuration constant context cover disconnect ' +
	        'downto default else elsif end entity exit fairness file for force function generate ' +
	        'generic group guarded if impure in inertial inout is label library linkage literal ' +
	        'loop map mod nand new next nor not null of on open or others out package port ' +
	        'postponed procedure process property protected pure range record register reject ' +
	        'release rem report restrict restrict_guarantee return rol ror select sequence ' +
	        'severity shared signal sla sll sra srl strong subtype then to transport type ' +
	        'unaffected units until use variable vmode vprop vunit wait when while with xnor xor',
	      typename:
	        'boolean bit character severity_level integer time delay_length natural positive ' +
	        'string bit_vector file_open_kind file_open_status std_ulogic std_ulogic_vector ' +
	        'std_logic std_logic_vector unsigned signed boolean_vector integer_vector ' +
	        'real_vector time_vector'
	    },
	    illegal: '{',
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,        // VHDL-2008 block commenting.
	      hljs.COMMENT('--', '$'),
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'number',
	        begin: NUMBER_RE,
	        relevance: 0
	      },
	      {
	        className: 'literal',
	        begin: '\'(U|X|0|1|Z|W|L|H|-)\'',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        className: 'attribute',
	        begin: '\'[A-Za-z](_?[A-Za-z0-9])*',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    lexemes: /[!#@\w]+/,
	    keywords: {
	      keyword: //ex command
	        // express version except: ! & * < = > !! # @ @@
	        'N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope '+
	        'cp cpf cq cr cs cst cu cuna cunme cw d|0 delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu g|0 go gr grepa gu gv ha h|0 helpf helpg helpt hi hid his i|0 ia iabc if ij il im imapc '+
	        'ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs n|0 new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 '+
	        'profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf q|0 quita qa r|0 rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv s|0 sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor '+
	        'so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync t|0 tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew '+
	        'tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up v|0 ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ '+
	        // full version
	        'Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload '+
	        'bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap '+
	        'cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor '+
	        'endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap '+
	        'imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview '+
	        'lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap '+
	        'nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext '+
	        'ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding '+
	        'scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace '+
	        'startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious '+'trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew '+
	        'vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank',
	      built_in: //built in func
	        'abs acos add and append argc argidx argv asin atan atan2 browse browsedir bufexists buflisted bufloaded bufname bufnr bufwinnr byte2line byteidx call ceil changenr char2nr cindent clearmatches col complete complete_add complete_check confirm copy cos cosh count cscope_connection cursor '+
	        'deepcopy delete did_filetype diff_filler diff_hlID empty escape eval eventhandler executable exists exp expand extend feedkeys filereadable filewritable filter finddir findfile float2nr floor fmod fnameescape fnamemodify foldclosed foldclosedend foldlevel foldtext foldtextresult foreground function '+
	        'garbagecollect get getbufline getbufvar getchar getcharmod getcmdline getcmdpos getcmdtype getcwd getfontname getfperm getfsize getftime getftype getline getloclist getmatches getpid getpos getqflist getreg getregtype gettabvar gettabwinvar getwinposx getwinposy getwinvar glob globpath has has_key '+
	        'haslocaldir hasmapto histadd histdel histget histnr hlexists hlID hostname iconv indent index input inputdialog inputlist inputrestore inputsave inputsecret insert invert isdirectory islocked items join keys len libcall libcallnr line line2byte lispindent localtime log log10 luaeval map maparg mapcheck '+
	        'match matchadd matcharg matchdelete matchend matchlist matchstr max min mkdir mode mzeval nextnonblank nr2char or pathshorten pow prevnonblank printf pumvisible py3eval pyeval range readfile reltime reltimestr remote_expr remote_foreground remote_peek remote_read remote_send remove rename repeat '+
	        'resolve reverse round screenattr screenchar screencol screenrow search searchdecl searchpair searchpairpos searchpos server2client serverlist setbufvar setcmdpos setline setloclist setmatches setpos setqflist setreg settabvar settabwinvar setwinvar sha256 shellescape shiftwidth simplify sin '+
	        'sinh sort soundfold spellbadword spellsuggest split sqrt str2float str2nr strchars strdisplaywidth strftime stridx string strlen strpart strridx strtrans strwidth submatch substitute synconcealed synID synIDattr '+
	        'synIDtrans synstack system tabpagebuflist tabpagenr tabpagewinnr tagfiles taglist tan tanh tempname tolower toupper tr trunc type undofile undotree values virtcol visualmode wildmenumode winbufnr wincol winheight winline winnr winrestcmd winrestview winsaveview winwidth writefile xor'
	    },
	    illegal: /[{:]/,
	    contains: [
	      hljs.NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      {
	        className: 'string',
	        // quote with escape, comment as quote
	        begin: /"((\\")|[^"\n])*("|\n)/
	      },
	      {
	        className: 'variable',
	        begin: /[bwtglsav]:[\w\d_]*/
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function function!', end: '$',
	        relevance: 0,
	        contains: [
	          hljs.TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)'
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      keyword:
	        'lock rep repe repz repne repnz xaquire xrelease bnd nobnd ' +
	        'aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63',
	      literal:
	        // Instruction pointer
	        'ip eip rip ' +
	        // 8-bit registers
	        'al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ' +
	        // 16-bit registers
	        'ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w ' +
	        // 32-bit registers
	        'eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d ' +
	        // 64-bit registers
	        'rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 ' +
	        // Segment registers
	        'cs ds es fs gs ss ' +
	        // Floating point stack registers
	        'st st0 st1 st2 st3 st4 st5 st6 st7 ' +
	        // MMX Registers
	        'mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 ' +
	        // SSE registers
	        'xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 ' +
	        'xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ' +
	        // AVX registers
	        'ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ' +
	        'ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 ' +
	        // AVX-512F registers
	        'zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 ' +
	        'zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 ' +
	        // AVX-512F mask registers
	        'k0 k1 k2 k3 k4 k5 k6 k7 ' +
	        // Bound (MPX) register
	        'bnd0 bnd1 bnd2 bnd3 ' +
	        // Special register
	        'cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 ' +
	        // NASM altreg package
	        'r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b ' +
	        'r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d ' +
	        'r0h r1h r2h r3h ' +
	        'r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l',

	      pseudo:
	        'db dw dd dq dt ddq do dy dz ' +
	        'resb resw resd resq rest resdq reso resy resz ' +
	        'incbin equ times',

	      preprocessor:
	        '%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif ' +
	        '%ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep ' +
	        '%endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment ' +
	        '.nolist ' +
	        'byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr ' +
	        '__FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ ' +
	        '__UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend ' +
	        'align alignb sectalign daz nodaz up down zero default option assume public ',

	      built_in:
	        'bits use16 use32 use64 default section segment absolute extern global common cpu float ' +
	        '__utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ ' +
	        '__float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ ' +
	        '__Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e ' +
	        'float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__'
	    },
	    contains: [
	      hljs.COMMENT(
	        ';',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      // Float number and x87 BCD
	      {
	        className: 'number',
	        begin: '\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b',
	        relevance: 0
	      },
	      // Hex number in $
	      {
	        className: 'number',
	        begin: '\\$[0-9][0-9A-Fa-f]*',
	        relevance: 0
	      },
	      // Number in H,X,D,T,Q,O,B,Y suffix
	      {
	        className: 'number',
	        begin: '\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[HhXx]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b'
	      },
	      // Number in H,X,D,T,Q,O,B,Y prefix
	      {
	        className: 'number',
	        begin: '\\b(?:0[HhXx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b'
	      },
	      // Double quote string
	      hljs.QUOTE_STRING_MODE,
	      // Single-quoted string
	      {
	        className: 'string',
	        begin: '\'',
	        end: '[^\\\\]\'',
	        relevance: 0
	      },
	      // Backquoted string
	      {
	        className: 'string',
	        begin: '`',
	        end: '[^\\\\]`',
	        relevance: 0
	      },
	      // Section name
	      {
	        className: 'string',
	        begin: '\\.[A-Za-z0-9]+',
	        relevance: 0
	      },
	      // Global label and local label
	      {
	        className: 'label',
	        begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
	        relevance: 0
	      },
	      // Macro-local label
	      {
	        className: 'label',
	        begin: '^\\s*%%[A-Za-z0-9_$#@~.?]*:',
	        relevance: 0
	      },
	      // Macro parameter
	      {
	        className: 'argument',
	        begin: '%[0-9]+',
	        relevance: 0
	      },
	      // Macro parameter
	      {
	        className: 'built_in',
	        begin: '%!\S+',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(hljs) {
	  var BUILTIN_MODULES = 'ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts';

	  var XL_KEYWORDS = {
	    keyword: 'if then else do while until for loop import with is as where when by data constant',
	    literal: 'true false nil',
	    type: 'integer real text name boolean symbol infix prefix postfix block tree',
	    built_in: 'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at',
	    module: BUILTIN_MODULES,
	    id: 'text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons'
	  };

	  var XL_CONSTANT = {
	    className: 'constant',
	    begin: '[A-Z][A-Z_0-9]+',
	    relevance: 0
	  };
	  var XL_VARIABLE = {
	    className: 'variable',
	    begin: '([A-Z][a-z_0-9]+)+',
	    relevance: 0
	  };
	  var XL_ID = {
	    className: 'id',
	    begin: '[a-z][a-z_0-9]+',
	    relevance: 0
	  };

	  var DOUBLE_QUOTE_TEXT = {
	    className: 'string',
	    begin: '"', end: '"', illegal: '\\n'
	  };
	  var SINGLE_QUOTE_TEXT = {
	    className: 'string',
	    begin: '\'', end: '\'', illegal: '\\n'
	  };
	  var LONG_TEXT = {
	    className: 'string',
	    begin: '<<', end: '>>'
	  };
	  var BASED_NUMBER = {
	    className: 'number',
	    begin: '[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?',
	    relevance: 10
	  };
	  var IMPORT = {
	    className: 'import',
	    beginKeywords: 'import', end: '$',
	    keywords: {
	      keyword: 'import',
	      module: BUILTIN_MODULES
	    },
	    relevance: 0,
	    contains: [DOUBLE_QUOTE_TEXT]
	  };
	  var FUNCTION_DEFINITION = {
	    className: 'function',
	    begin: '[a-z].*->'
	  };
	  return {
	    aliases: ['tao'],
	    lexemes: /[a-zA-Z][a-zA-Z0-9_?]*/,
	    keywords: XL_KEYWORDS,
	    contains: [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    DOUBLE_QUOTE_TEXT,
	    SINGLE_QUOTE_TEXT,
	    LONG_TEXT,
	    FUNCTION_DEFINITION,
	    IMPORT,
	    XL_CONSTANT,
	    XL_VARIABLE,
	    XL_ID,
	    BASED_NUMBER,
	    hljs.NUMBER_MODE
	    ]
	  };
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var assign       = __webpack_require__(141).assign;
	var Renderer     = __webpack_require__(142);
	var ParserCore   = __webpack_require__(143);
	var ParserBlock  = __webpack_require__(144);
	var ParserInline = __webpack_require__(145);
	var Ruler        = __webpack_require__(140);

	/**
	 * Preset configs
	 */

	var config = {
	  'default':    __webpack_require__(146),
	  'full':       __webpack_require__(147),
	  'commonmark': __webpack_require__(148)
	};

	/**
	 * The `StateCore` class manages state.
	 *
	 * @param {Object} `self` Remarkable instance
	 * @param {String} `str` Markdown string
	 * @param {Object} `env`
	 */

	function StateCore(self, str, env) {
	  this.src = str;
	  this.env = env;
	  this.options = self.options;
	  this.tokens = [];
	  this.inlineMode = false;

	  this.inline = self.inline;
	  this.block = self.block;
	  this.renderer = self.renderer;
	  this.typographer = self.typographer;
	}

	/**
	 * The main `Remarkable` class. Create an instance of
	 * `Remarkable` with a `preset` and/or `options`.
	 *
	 * @param {String} `preset` If no preset is given, `default` is used.
	 * @param {Object} `options`
	 */

	function Remarkable(preset, options) {
	  if (typeof preset !== 'string') {
	    options = preset;
	    preset = 'default';
	  }

	  this.inline   = new ParserInline();
	  this.block    = new ParserBlock();
	  this.core     = new ParserCore();
	  this.renderer = new Renderer();
	  this.ruler    = new Ruler();

	  this.options  = {};
	  this.configure(config[preset]);
	  this.set(options || {});
	}

	/**
	 * Set options as an alternative to passing them
	 * to the constructor.
	 *
	 * ```js
	 * md.set({typographer: true});
	 * ```
	 * @param {Object} `options`
	 * @api public
	 */

	Remarkable.prototype.set = function (options) {
	  assign(this.options, options);
	};

	/**
	 * Batch loader for components rules states, and options
	 *
	 * @param  {Object} `presets`
	 */

	Remarkable.prototype.configure = function (presets) {
	  var self = this;

	  if (!presets) { throw new Error('Wrong `remarkable` preset, check name/content'); }
	  if (presets.options) { self.set(presets.options); }
	  if (presets.components) {
	    Object.keys(presets.components).forEach(function (name) {
	      if (presets.components[name].rules) {
	        self[name].ruler.enable(presets.components[name].rules, true);
	      }
	    });
	  }
	};

	/**
	 * Use a plugin.
	 *
	 * ```js
	 * var md = new Remarkable();
	 *
	 * md.use(plugin1)
	 *   .use(plugin2, opts)
	 *   .use(plugin3);
	 * ```
	 *
	 * @param  {Function} `plugin`
	 * @param  {Object} `options`
	 * @return {Object} `Remarkable` for chaining
	 */

	Remarkable.prototype.use = function (plugin, options) {
	  plugin(this, options);
	  return this;
	};


	/**
	 * Parse the input `string` and return a tokens array.
	 * Modifies `env` with definitions data.
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {Array} Array of tokens
	 */

	Remarkable.prototype.parse = function (str, env) {
	  var state = new StateCore(this, str, env);
	  this.core.process(state);
	  return state.tokens;
	};

	/**
	 * The main `.render()` method that does all the magic :)
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {String} Rendered HTML.
	 */

	Remarkable.prototype.render = function (str, env) {
	  env = env || {};
	  return this.renderer.render(this.parse(str, env), this.options, env);
	};

	/**
	 * Parse the given content `string` as a single string.
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {Array} Array of tokens
	 */

	Remarkable.prototype.parseInline = function (str, env) {
	  var state = new StateCore(this, str, env);
	  state.inlineMode = true;
	  this.core.process(state);
	  return state.tokens;
	};

	/**
	 * Render a single content `string`, without wrapping it
	 * to paragraphs
	 *
	 * @param  {String} `str`
	 * @param  {Object} `env`
	 * @return {String}
	 */

	Remarkable.prototype.renderInline = function (str, env) {
	  env = env || {};
	  return this.renderer.render(this.parseInline(str, env), this.options, env);
	};

	/**
	 * Expose `Remarkable`
	 */

	module.exports = Remarkable;

	/**
	 * Expose `utils`, Useful helper functions for custom
	 * rendering.
	 */

	module.exports.utils = __webpack_require__(141);


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Ruler is a helper class for building responsibility chains from
	 * parse rules. It allows:
	 *
	 *   - easy stack rules chains
	 *   - getting main chain and named chains content (as arrays of functions)
	 *
	 * Helper methods, should not be used directly.
	 * @api private
	 */

	function Ruler() {
	  // List of added rules. Each element is:
	  //
	  // { name: XXX,
	  //   enabled: Boolean,
	  //   fn: Function(),
	  //   alt: [ name2, name3 ] }
	  //
	  this.__rules__ = [];

	  // Cached rule chains.
	  //
	  // First level - chain name, '' for default.
	  // Second level - digital anchor for fast filtering by charcodes.
	  //
	  this.__cache__ = null;
	}

	/**
	 * Find the index of a rule by `name`.
	 *
	 * @param  {String} `name`
	 * @return {Number} Index of the given `name`
	 * @api private
	 */

	Ruler.prototype.__find__ = function (name) {
	  var len = this.__rules__.length;
	  var i = -1;

	  while (len--) {
	    if (this.__rules__[++i].name === name) {
	      return i;
	    }
	  }
	  return -1;
	};

	/**
	 * Build the rules lookup cache
	 *
	 * @api private
	 */

	Ruler.prototype.__compile__ = function () {
	  var self = this;
	  var chains = [ '' ];

	  // collect unique names
	  self.__rules__.forEach(function (rule) {
	    if (!rule.enabled) {
	      return;
	    }

	    rule.alt.forEach(function (altName) {
	      if (chains.indexOf(altName) < 0) {
	        chains.push(altName);
	      }
	    });
	  });

	  self.__cache__ = {};

	  chains.forEach(function (chain) {
	    self.__cache__[chain] = [];
	    self.__rules__.forEach(function (rule) {
	      if (!rule.enabled) {
	        return;
	      }

	      if (chain && rule.alt.indexOf(chain) < 0) {
	        return;
	      }
	      self.__cache__[chain].push(rule.fn);
	    });
	  });
	};

	/**
	 * Ruler public methods
	 * ------------------------------------------------
	 */

	/**
	 * Replace rule function
	 *
	 * @param  {String} `name` Rule name
	 * @param  {Function `fn`
	 * @param  {Object} `options`
	 * @api private
	 */

	Ruler.prototype.at = function (name, fn, options) {
	  var idx = this.__find__(name);
	  var opt = options || {};

	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + name);
	  }

	  this.__rules__[idx].fn = fn;
	  this.__rules__[idx].alt = opt.alt || [];
	  this.__cache__ = null;
	};

	/**
	 * Add a rule to the chain before given the `ruleName`.
	 *
	 * @param  {String}   `beforeName`
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @api private
	 */

	Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
	  var idx = this.__find__(beforeName);
	  var opt = options || {};

	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + beforeName);
	  }

	  this.__rules__.splice(idx, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};

	/**
	 * Add a rule to the chain after the given `ruleName`.
	 *
	 * @param  {String}   `afterName`
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @api private
	 */

	Ruler.prototype.after = function (afterName, ruleName, fn, options) {
	  var idx = this.__find__(afterName);
	  var opt = options || {};

	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + afterName);
	  }

	  this.__rules__.splice(idx + 1, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};

	/**
	 * Add a rule to the end of chain.
	 *
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @return {String}
	 */

	Ruler.prototype.push = function (ruleName, fn, options) {
	  var opt = options || {};

	  this.__rules__.push({
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });

	  this.__cache__ = null;
	};

	/**
	 * Enable a rule or list of rules.
	 *
	 * @param  {String|Array} `list` Name or array of rule names to enable
	 * @param  {Boolean} `strict` If `true`, all non listed rules will be disabled.
	 * @api private
	 */

	Ruler.prototype.enable = function (list, strict) {
	  list = !Array.isArray(list)
	    ? [ list ]
	    : list;

	  // In strict mode disable all existing rules first
	  if (strict) {
	    this.__rules__.forEach(function (rule) {
	      rule.enabled = false;
	    });
	  }

	  // Search by name and enable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);
	    if (idx < 0) {
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = true;
	  }, this);

	  this.__cache__ = null;
	};


	/**
	 * Disable a rule or list of rules.
	 *
	 * @param  {String|Array} `list` Name or array of rule names to disable
	 * @api private
	 */

	Ruler.prototype.disable = function (list) {
	  list = !Array.isArray(list)
	    ? [ list ]
	    : list;

	  // Search by name and disable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);
	    if (idx < 0) {
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = false;
	  }, this);

	  this.__cache__ = null;
	};

	/**
	 * Get a rules list as an array of functions.
	 *
	 * @param  {String} `chainName`
	 * @return {Object}
	 * @api private
	 */

	Ruler.prototype.getRules = function (chainName) {
	  if (this.__cache__ === null) {
	    this.__compile__();
	  }
	  return this.__cache__[chainName];
	};

	/**
	 * Expose `Ruler`
	 */

	module.exports = Ruler;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Utility functions
	 */

	function typeOf(obj) {
	  return Object.prototype.toString.call(obj);
	}

	function isString(obj) {
	  return typeOf(obj) === '[object String]';
	}

	var hasOwn = Object.prototype.hasOwnProperty;

	function has(object, key) {
	  return object
	    ? hasOwn.call(object, key)
	    : false;
	}

	// Extend objects
	//
	function assign(obj /*from1, from2, from3, ...*/) {
	  var sources = [].slice.call(arguments, 1);

	  sources.forEach(function (source) {
	    if (!source) { return; }

	    if (typeof source !== 'object') {
	      throw new TypeError(source + 'must be object');
	    }

	    Object.keys(source).forEach(function (key) {
	      obj[key] = source[key];
	    });
	  });

	  return obj;
	}

	////////////////////////////////////////////////////////////////////////////////

	var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

	function unescapeMd(str) {
	  if (str.indexOf('\\') < 0) { return str; }
	  return str.replace(UNESCAPE_MD_RE, '$1');
	}

	////////////////////////////////////////////////////////////////////////////////

	function isValidEntityCode(c) {
	  /*eslint no-bitwise:0*/
	  // broken sequence
	  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
	  // never used
	  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
	  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
	  // control codes
	  if (c >= 0x00 && c <= 0x08) { return false; }
	  if (c === 0x0B) { return false; }
	  if (c >= 0x0E && c <= 0x1F) { return false; }
	  if (c >= 0x7F && c <= 0x9F) { return false; }
	  // out of range
	  if (c > 0x10FFFF) { return false; }
	  return true;
	}

	function fromCodePoint(c) {
	  /*eslint no-bitwise:0*/
	  if (c > 0xffff) {
	    c -= 0x10000;
	    var surrogate1 = 0xd800 + (c >> 10),
	        surrogate2 = 0xdc00 + (c & 0x3ff);

	    return String.fromCharCode(surrogate1, surrogate2);
	  }
	  return String.fromCharCode(c);
	}

	var NAMED_ENTITY_RE   = /&([a-z#][a-z0-9]{1,31});/gi;
	var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
	var entities = __webpack_require__(149);

	function replaceEntityPattern(match, name) {
	  var code = 0;

	  if (has(entities, name)) {
	    return entities[name];
	  } else if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
	    code = name[1].toLowerCase() === 'x' ?
	      parseInt(name.slice(2), 16)
	    :
	      parseInt(name.slice(1), 10);
	    if (isValidEntityCode(code)) {
	      return fromCodePoint(code);
	    }
	  }
	  return match;
	}

	function replaceEntities(str) {
	  if (str.indexOf('&') < 0) { return str; }

	  return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
	}

	////////////////////////////////////////////////////////////////////////////////

	var HTML_ESCAPE_TEST_RE = /[&<>"]/;
	var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
	var HTML_REPLACEMENTS = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};

	function replaceUnsafeChar(ch) {
	  return HTML_REPLACEMENTS[ch];
	}

	function escapeHtml(str) {
	  if (HTML_ESCAPE_TEST_RE.test(str)) {
	    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
	  }
	  return str;
	}

	////////////////////////////////////////////////////////////////////////////////

	exports.assign            = assign;
	exports.isString          = isString;
	exports.has               = has;
	exports.unescapeMd        = unescapeMd;
	exports.isValidEntityCode = isValidEntityCode;
	exports.fromCodePoint     = fromCodePoint;
	exports.replaceEntities   = replaceEntities;
	exports.escapeHtml        = escapeHtml;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var utils = __webpack_require__(141);
	var rules = __webpack_require__(150);

	/**
	 * Expose `Renderer`
	 */

	module.exports = Renderer;

	/**
	 * Renderer class. Renders HTML and exposes `rules` to allow
	 * local modifications.
	 */

	function Renderer() {
	  this.rules = utils.assign({}, rules);

	  // exported helper, for custom rules only
	  this.getBreak = rules.getBreak;
	}

	/**
	 * Render a string of inline HTML with the given `tokens` and
	 * `options`.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @return {String}
	 * @api public
	 */

	Renderer.prototype.renderInline = function (tokens, options, env) {
	  var _rules = this.rules;
	  var len = tokens.length, i = 0;
	  var result = '';

	  while (len--) {
	    result += _rules[tokens[i].type](tokens, i++, options, env, this);
	  }

	  return result;
	};

	/**
	 * Render a string of HTML with the given `tokens` and
	 * `options`.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @return {String}
	 * @api public
	 */

	Renderer.prototype.render = function (tokens, options, env) {
	  var _rules = this.rules;
	  var len = tokens.length, i = -1;
	  var result = '';

	  while (++i < len) {
	    if (tokens[i].type === 'inline') {
	      result += this.renderInline(tokens[i].children, options, env);
	    } else {
	      result += _rules[tokens[i].type](tokens, i, options, env, this);
	    }
	  }
	  return result;
	};


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var Ruler = __webpack_require__(140);

	/**
	 * Core parser `rules`
	 */

	var _rules = [
	  [ 'block',          __webpack_require__(152)          ],
	  [ 'abbr',           __webpack_require__(153)           ],
	  [ 'references',     __webpack_require__(154)     ],
	  [ 'inline',         __webpack_require__(155)         ],
	  [ 'footnote_tail',  __webpack_require__(151)  ],
	  [ 'abbr2',          __webpack_require__(156)          ],
	  [ 'replacements',   __webpack_require__(157)   ],
	  [ 'smartquotes',    __webpack_require__(158)    ],
	  [ 'linkify',        __webpack_require__(159)        ]
	];

	/**
	 * Class for top level (`core`) parser rules
	 *
	 * @api private
	 */

	function Core() {
	  this.options = {};
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }
	}

	/**
	 * Process rules with the given `state`
	 *
	 * @param  {Object} `state`
	 * @api private
	 */

	Core.prototype.process = function (state) {
	  var i, l, rules;
	  rules = this.ruler.getRules('');
	  for (i = 0, l = rules.length; i < l; i++) {
	    rules[i](state);
	  }
	};

	/**
	 * Expose `Core`
	 */

	module.exports = Core;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var Ruler      = __webpack_require__(140);
	var StateBlock = __webpack_require__(178);

	/**
	 * Parser rules
	 */

	var _rules = [
	  [ 'code',       __webpack_require__(179) ],
	  [ 'fences',     __webpack_require__(180),     [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'blockquote', __webpack_require__(181), [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'hr',         __webpack_require__(182),         [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'list',       __webpack_require__(183),       [ 'paragraph', 'blockquote' ] ],
	  [ 'footnote',   __webpack_require__(177),   [ 'paragraph' ] ],
	  [ 'heading',    __webpack_require__(184),    [ 'paragraph', 'blockquote' ] ],
	  [ 'lheading',   __webpack_require__(185) ],
	  [ 'htmlblock',  __webpack_require__(186),  [ 'paragraph', 'blockquote' ] ],
	  [ 'table',      __webpack_require__(187),      [ 'paragraph' ] ],
	  [ 'deflist',    __webpack_require__(188),    [ 'paragraph' ] ],
	  [ 'paragraph',  __webpack_require__(189) ]
	];

	/**
	 * Block Parser class
	 *
	 * @api private
	 */

	function ParserBlock() {
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1], {
	      alt: (_rules[i][2] || []).slice()
	    });
	  }
	}

	/**
	 * Generate tokens for the given input range.
	 *
	 * @param  {Object} `state` Has properties like `src`, `parser`, `options` etc
	 * @param  {Number} `startLine`
	 * @param  {Number} `endLine`
	 * @api private
	 */

	ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var line = startLine;
	  var hasEmptyLines = false;
	  var ok, i;

	  while (line < endLine) {
	    state.line = line = state.skipEmptyLines(line);
	    if (line >= endLine) {
	      break;
	    }

	    // Termination condition for nested calls.
	    // Nested calls currently used for blockquotes & lists
	    if (state.tShift[line] < state.blkIndent) {
	      break;
	    }

	    // Try all possible rules.
	    // On success, rule should:
	    //
	    // - update `state.line`
	    // - update `state.tokens`
	    // - return true

	    for (i = 0; i < len; i++) {
	      ok = rules[i](state, line, endLine, false);
	      if (ok) {
	        break;
	      }
	    }

	    // set state.tight iff we had an empty line before current tag
	    // i.e. latest empty line should not count
	    state.tight = !hasEmptyLines;

	    // paragraph might "eat" one newline after it in nested lists
	    if (state.isEmpty(state.line - 1)) {
	      hasEmptyLines = true;
	    }

	    line = state.line;

	    if (line < endLine && state.isEmpty(line)) {
	      hasEmptyLines = true;
	      line++;

	      // two empty lines should stop the parser in list mode
	      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
	      state.line = line;
	    }
	  }
	};

	var TABS_SCAN_RE = /[\n\t]/g;
	var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
	var SPACES_RE    = /\u00a0/g;

	/**
	 * Tokenize the given `str`.
	 *
	 * @param  {String} `str` Source string
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @param  {Array} `outTokens`
	 * @api private
	 */

	ParserBlock.prototype.parse = function (str, options, env, outTokens) {
	  var state, lineStart = 0, lastTabPos = 0;
	  if (!str) { return []; }

	  // Normalize spaces
	  str = str.replace(SPACES_RE, ' ');

	  // Normalize newlines
	  str = str.replace(NEWLINES_RE, '\n');

	  // Replace tabs with proper number of spaces (1..4)
	  if (str.indexOf('\t') >= 0) {
	    str = str.replace(TABS_SCAN_RE, function (match, offset) {
	      var result;
	      if (str.charCodeAt(offset) === 0x0A) {
	        lineStart = offset + 1;
	        lastTabPos = 0;
	        return match;
	      }
	      result = '    '.slice((offset - lineStart - lastTabPos) % 4);
	      lastTabPos = offset - lineStart + 1;
	      return result;
	    });
	  }

	  state = new StateBlock(str, this, options, env, outTokens);
	  this.tokenize(state, state.line, state.lineMax);
	};

	/**
	 * Expose `ParserBlock`
	 */

	module.exports = ParserBlock;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var Ruler       = __webpack_require__(140);
	var StateInline = __webpack_require__(160);
	var utils       = __webpack_require__(141);

	/**
	 * Inline Parser `rules`
	 */

	var _rules = [
	  [ 'text',            __webpack_require__(161) ],
	  [ 'newline',         __webpack_require__(162) ],
	  [ 'escape',          __webpack_require__(163) ],
	  [ 'backticks',       __webpack_require__(164) ],
	  [ 'del',             __webpack_require__(165) ],
	  [ 'ins',             __webpack_require__(166) ],
	  [ 'mark',            __webpack_require__(167) ],
	  [ 'emphasis',        __webpack_require__(168) ],
	  [ 'sub',             __webpack_require__(169) ],
	  [ 'sup',             __webpack_require__(170) ],
	  [ 'links',           __webpack_require__(171) ],
	  [ 'footnote_inline', __webpack_require__(172) ],
	  [ 'footnote_ref',    __webpack_require__(173) ],
	  [ 'autolink',        __webpack_require__(174) ],
	  [ 'htmltag',         __webpack_require__(175) ],
	  [ 'entity',          __webpack_require__(176) ]
	];

	/**
	 * Inline Parser class. Note that link validation is stricter
	 * in Remarkable than what is specified by CommonMark. If you
	 * want to change this you can use a custom validator.
	 *
	 * @api private
	 */

	function ParserInline() {
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }

	  // Can be overridden with a custom validator
	  this.validateLink = validateLink;
	}

	/**
	 * Skip a single token by running all rules in validation mode.
	 * Returns `true` if any rule reports success.
	 *
	 * @param  {Object} `state`
	 * @api privage
	 */

	ParserInline.prototype.skipToken = function (state) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var pos = state.pos;
	  var i, cached_pos;

	  if ((cached_pos = state.cacheGet(pos)) > 0) {
	    state.pos = cached_pos;
	    return;
	  }

	  for (i = 0; i < len; i++) {
	    if (rules[i](state, true)) {
	      state.cacheSet(pos, state.pos);
	      return;
	    }
	  }

	  state.pos++;
	  state.cacheSet(pos, state.pos);
	};

	/**
	 * Generate tokens for the given input range.
	 *
	 * @param  {Object} `state`
	 * @api private
	 */

	ParserInline.prototype.tokenize = function (state) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var end = state.posMax;
	  var ok, i;

	  while (state.pos < end) {

	    // Try all possible rules.
	    // On success, the rule should:
	    //
	    // - update `state.pos`
	    // - update `state.tokens`
	    // - return true
	    for (i = 0; i < len; i++) {
	      ok = rules[i](state, false);

	      if (ok) {
	        break;
	      }
	    }

	    if (ok) {
	      if (state.pos >= end) { break; }
	      continue;
	    }

	    state.pending += state.src[state.pos++];
	  }

	  if (state.pending) {
	    state.pushPending();
	  }
	};

	/**
	 * Parse the given input string.
	 *
	 * @param  {String} `str`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @param  {Array} `outTokens`
	 * @api private
	 */

	ParserInline.prototype.parse = function (str, options, env, outTokens) {
	  var state = new StateInline(str, this, options, env, outTokens);
	  this.tokenize(state);
	};

	/**
	 * Validate the given `url` by checking for bad protocols.
	 *
	 * @param  {String} `url`
	 * @return {Boolean}
	 */

	function validateLink(url) {
	  var BAD_PROTOCOLS = [ 'vbscript', 'javascript', 'file' ];
	  var str = url.trim().toLowerCase();
	  // Care about digital entities "javascript&#x3A;alert(1)"
	  str = utils.replaceEntities(str);
	  if (str.indexOf(':') !== -1 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) !== -1) {
	    return false;
	  }
	  return true;
	}

	/**
	 * Expose `ParserInline`
	 */

	module.exports = ParserInline;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// Remarkable default options

	'use strict';


	module.exports = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes: '“”‘’',

	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,

	    maxNesting:   20            // Internal protection, recursion limit
	  },

	  components: {

	    core: {
	      rules: [
	        'block',
	        'inline',
	        'references',
	        'replacements',
	        'linkify',
	        'smartquotes',
	        'references',
	        'abbr2',
	        'footnote_tail'
	      ]
	    },

	    block: {
	      rules: [
	        'blockquote',
	        'code',
	        'fences',
	        'heading',
	        'hr',
	        'htmlblock',
	        'lheading',
	        'list',
	        'paragraph',
	        'table'
	      ]
	    },

	    inline: {
	      rules: [
	        'autolink',
	        'backticks',
	        'del',
	        'emphasis',
	        'entity',
	        'escape',
	        'footnote_ref',
	        'htmltag',
	        'links',
	        'newline',
	        'text'
	      ]
	    }
	  }
	};


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	// Remarkable default options

	'use strict';


	module.exports = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes:       '“”‘’',

	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight:     null,

	    maxNesting:    20            // Internal protection, recursion limit
	  },

	  components: {
	    // Don't restrict core/block/inline rules
	    core: {},
	    block: {},
	    inline: {}
	  }
	};


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// Commonmark default options

	'use strict';


	module.exports = {
	  options: {
	    html:         true,         // Enable HTML tags in source
	    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links

	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,

	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes: '“”‘’',

	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,

	    maxNesting:   20            // Internal protection, recursion limit
	  },

	  components: {

	    core: {
	      rules: [
	        'block',
	        'inline',
	        'references',
	        'abbr2'
	      ]
	    },

	    block: {
	      rules: [
	        'blockquote',
	        'code',
	        'fences',
	        'heading',
	        'hr',
	        'htmlblock',
	        'lheading',
	        'list',
	        'paragraph'
	      ]
	    },

	    inline: {
	      rules: [
	        'autolink',
	        'backticks',
	        'emphasis',
	        'entity',
	        'escape',
	        'htmltag',
	        'links',
	        'newline',
	        'text'
	      ]
	    }
	  }
	};


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// List of valid entities
	//
	// Generate with ./support/entities.js script
	//
	'use strict';

	/*eslint quotes:0*/
	module.exports = {
	  "Aacute":"\u00C1",
	  "aacute":"\u00E1",
	  "Abreve":"\u0102",
	  "abreve":"\u0103",
	  "ac":"\u223E",
	  "acd":"\u223F",
	  "acE":"\u223E\u0333",
	  "Acirc":"\u00C2",
	  "acirc":"\u00E2",
	  "acute":"\u00B4",
	  "Acy":"\u0410",
	  "acy":"\u0430",
	  "AElig":"\u00C6",
	  "aelig":"\u00E6",
	  "af":"\u2061",
	  "Afr":"\uD835\uDD04",
	  "afr":"\uD835\uDD1E",
	  "Agrave":"\u00C0",
	  "agrave":"\u00E0",
	  "alefsym":"\u2135",
	  "aleph":"\u2135",
	  "Alpha":"\u0391",
	  "alpha":"\u03B1",
	  "Amacr":"\u0100",
	  "amacr":"\u0101",
	  "amalg":"\u2A3F",
	  "AMP":"\u0026",
	  "amp":"\u0026",
	  "And":"\u2A53",
	  "and":"\u2227",
	  "andand":"\u2A55",
	  "andd":"\u2A5C",
	  "andslope":"\u2A58",
	  "andv":"\u2A5A",
	  "ang":"\u2220",
	  "ange":"\u29A4",
	  "angle":"\u2220",
	  "angmsd":"\u2221",
	  "angmsdaa":"\u29A8",
	  "angmsdab":"\u29A9",
	  "angmsdac":"\u29AA",
	  "angmsdad":"\u29AB",
	  "angmsdae":"\u29AC",
	  "angmsdaf":"\u29AD",
	  "angmsdag":"\u29AE",
	  "angmsdah":"\u29AF",
	  "angrt":"\u221F",
	  "angrtvb":"\u22BE",
	  "angrtvbd":"\u299D",
	  "angsph":"\u2222",
	  "angst":"\u00C5",
	  "angzarr":"\u237C",
	  "Aogon":"\u0104",
	  "aogon":"\u0105",
	  "Aopf":"\uD835\uDD38",
	  "aopf":"\uD835\uDD52",
	  "ap":"\u2248",
	  "apacir":"\u2A6F",
	  "apE":"\u2A70",
	  "ape":"\u224A",
	  "apid":"\u224B",
	  "apos":"\u0027",
	  "ApplyFunction":"\u2061",
	  "approx":"\u2248",
	  "approxeq":"\u224A",
	  "Aring":"\u00C5",
	  "aring":"\u00E5",
	  "Ascr":"\uD835\uDC9C",
	  "ascr":"\uD835\uDCB6",
	  "Assign":"\u2254",
	  "ast":"\u002A",
	  "asymp":"\u2248",
	  "asympeq":"\u224D",
	  "Atilde":"\u00C3",
	  "atilde":"\u00E3",
	  "Auml":"\u00C4",
	  "auml":"\u00E4",
	  "awconint":"\u2233",
	  "awint":"\u2A11",
	  "backcong":"\u224C",
	  "backepsilon":"\u03F6",
	  "backprime":"\u2035",
	  "backsim":"\u223D",
	  "backsimeq":"\u22CD",
	  "Backslash":"\u2216",
	  "Barv":"\u2AE7",
	  "barvee":"\u22BD",
	  "Barwed":"\u2306",
	  "barwed":"\u2305",
	  "barwedge":"\u2305",
	  "bbrk":"\u23B5",
	  "bbrktbrk":"\u23B6",
	  "bcong":"\u224C",
	  "Bcy":"\u0411",
	  "bcy":"\u0431",
	  "bdquo":"\u201E",
	  "becaus":"\u2235",
	  "Because":"\u2235",
	  "because":"\u2235",
	  "bemptyv":"\u29B0",
	  "bepsi":"\u03F6",
	  "bernou":"\u212C",
	  "Bernoullis":"\u212C",
	  "Beta":"\u0392",
	  "beta":"\u03B2",
	  "beth":"\u2136",
	  "between":"\u226C",
	  "Bfr":"\uD835\uDD05",
	  "bfr":"\uD835\uDD1F",
	  "bigcap":"\u22C2",
	  "bigcirc":"\u25EF",
	  "bigcup":"\u22C3",
	  "bigodot":"\u2A00",
	  "bigoplus":"\u2A01",
	  "bigotimes":"\u2A02",
	  "bigsqcup":"\u2A06",
	  "bigstar":"\u2605",
	  "bigtriangledown":"\u25BD",
	  "bigtriangleup":"\u25B3",
	  "biguplus":"\u2A04",
	  "bigvee":"\u22C1",
	  "bigwedge":"\u22C0",
	  "bkarow":"\u290D",
	  "blacklozenge":"\u29EB",
	  "blacksquare":"\u25AA",
	  "blacktriangle":"\u25B4",
	  "blacktriangledown":"\u25BE",
	  "blacktriangleleft":"\u25C2",
	  "blacktriangleright":"\u25B8",
	  "blank":"\u2423",
	  "blk12":"\u2592",
	  "blk14":"\u2591",
	  "blk34":"\u2593",
	  "block":"\u2588",
	  "bne":"\u003D\u20E5",
	  "bnequiv":"\u2261\u20E5",
	  "bNot":"\u2AED",
	  "bnot":"\u2310",
	  "Bopf":"\uD835\uDD39",
	  "bopf":"\uD835\uDD53",
	  "bot":"\u22A5",
	  "bottom":"\u22A5",
	  "bowtie":"\u22C8",
	  "boxbox":"\u29C9",
	  "boxDL":"\u2557",
	  "boxDl":"\u2556",
	  "boxdL":"\u2555",
	  "boxdl":"\u2510",
	  "boxDR":"\u2554",
	  "boxDr":"\u2553",
	  "boxdR":"\u2552",
	  "boxdr":"\u250C",
	  "boxH":"\u2550",
	  "boxh":"\u2500",
	  "boxHD":"\u2566",
	  "boxHd":"\u2564",
	  "boxhD":"\u2565",
	  "boxhd":"\u252C",
	  "boxHU":"\u2569",
	  "boxHu":"\u2567",
	  "boxhU":"\u2568",
	  "boxhu":"\u2534",
	  "boxminus":"\u229F",
	  "boxplus":"\u229E",
	  "boxtimes":"\u22A0",
	  "boxUL":"\u255D",
	  "boxUl":"\u255C",
	  "boxuL":"\u255B",
	  "boxul":"\u2518",
	  "boxUR":"\u255A",
	  "boxUr":"\u2559",
	  "boxuR":"\u2558",
	  "boxur":"\u2514",
	  "boxV":"\u2551",
	  "boxv":"\u2502",
	  "boxVH":"\u256C",
	  "boxVh":"\u256B",
	  "boxvH":"\u256A",
	  "boxvh":"\u253C",
	  "boxVL":"\u2563",
	  "boxVl":"\u2562",
	  "boxvL":"\u2561",
	  "boxvl":"\u2524",
	  "boxVR":"\u2560",
	  "boxVr":"\u255F",
	  "boxvR":"\u255E",
	  "boxvr":"\u251C",
	  "bprime":"\u2035",
	  "Breve":"\u02D8",
	  "breve":"\u02D8",
	  "brvbar":"\u00A6",
	  "Bscr":"\u212C",
	  "bscr":"\uD835\uDCB7",
	  "bsemi":"\u204F",
	  "bsim":"\u223D",
	  "bsime":"\u22CD",
	  "bsol":"\u005C",
	  "bsolb":"\u29C5",
	  "bsolhsub":"\u27C8",
	  "bull":"\u2022",
	  "bullet":"\u2022",
	  "bump":"\u224E",
	  "bumpE":"\u2AAE",
	  "bumpe":"\u224F",
	  "Bumpeq":"\u224E",
	  "bumpeq":"\u224F",
	  "Cacute":"\u0106",
	  "cacute":"\u0107",
	  "Cap":"\u22D2",
	  "cap":"\u2229",
	  "capand":"\u2A44",
	  "capbrcup":"\u2A49",
	  "capcap":"\u2A4B",
	  "capcup":"\u2A47",
	  "capdot":"\u2A40",
	  "CapitalDifferentialD":"\u2145",
	  "caps":"\u2229\uFE00",
	  "caret":"\u2041",
	  "caron":"\u02C7",
	  "Cayleys":"\u212D",
	  "ccaps":"\u2A4D",
	  "Ccaron":"\u010C",
	  "ccaron":"\u010D",
	  "Ccedil":"\u00C7",
	  "ccedil":"\u00E7",
	  "Ccirc":"\u0108",
	  "ccirc":"\u0109",
	  "Cconint":"\u2230",
	  "ccups":"\u2A4C",
	  "ccupssm":"\u2A50",
	  "Cdot":"\u010A",
	  "cdot":"\u010B",
	  "cedil":"\u00B8",
	  "Cedilla":"\u00B8",
	  "cemptyv":"\u29B2",
	  "cent":"\u00A2",
	  "CenterDot":"\u00B7",
	  "centerdot":"\u00B7",
	  "Cfr":"\u212D",
	  "cfr":"\uD835\uDD20",
	  "CHcy":"\u0427",
	  "chcy":"\u0447",
	  "check":"\u2713",
	  "checkmark":"\u2713",
	  "Chi":"\u03A7",
	  "chi":"\u03C7",
	  "cir":"\u25CB",
	  "circ":"\u02C6",
	  "circeq":"\u2257",
	  "circlearrowleft":"\u21BA",
	  "circlearrowright":"\u21BB",
	  "circledast":"\u229B",
	  "circledcirc":"\u229A",
	  "circleddash":"\u229D",
	  "CircleDot":"\u2299",
	  "circledR":"\u00AE",
	  "circledS":"\u24C8",
	  "CircleMinus":"\u2296",
	  "CirclePlus":"\u2295",
	  "CircleTimes":"\u2297",
	  "cirE":"\u29C3",
	  "cire":"\u2257",
	  "cirfnint":"\u2A10",
	  "cirmid":"\u2AEF",
	  "cirscir":"\u29C2",
	  "ClockwiseContourIntegral":"\u2232",
	  "CloseCurlyDoubleQuote":"\u201D",
	  "CloseCurlyQuote":"\u2019",
	  "clubs":"\u2663",
	  "clubsuit":"\u2663",
	  "Colon":"\u2237",
	  "colon":"\u003A",
	  "Colone":"\u2A74",
	  "colone":"\u2254",
	  "coloneq":"\u2254",
	  "comma":"\u002C",
	  "commat":"\u0040",
	  "comp":"\u2201",
	  "compfn":"\u2218",
	  "complement":"\u2201",
	  "complexes":"\u2102",
	  "cong":"\u2245",
	  "congdot":"\u2A6D",
	  "Congruent":"\u2261",
	  "Conint":"\u222F",
	  "conint":"\u222E",
	  "ContourIntegral":"\u222E",
	  "Copf":"\u2102",
	  "copf":"\uD835\uDD54",
	  "coprod":"\u2210",
	  "Coproduct":"\u2210",
	  "COPY":"\u00A9",
	  "copy":"\u00A9",
	  "copysr":"\u2117",
	  "CounterClockwiseContourIntegral":"\u2233",
	  "crarr":"\u21B5",
	  "Cross":"\u2A2F",
	  "cross":"\u2717",
	  "Cscr":"\uD835\uDC9E",
	  "cscr":"\uD835\uDCB8",
	  "csub":"\u2ACF",
	  "csube":"\u2AD1",
	  "csup":"\u2AD0",
	  "csupe":"\u2AD2",
	  "ctdot":"\u22EF",
	  "cudarrl":"\u2938",
	  "cudarrr":"\u2935",
	  "cuepr":"\u22DE",
	  "cuesc":"\u22DF",
	  "cularr":"\u21B6",
	  "cularrp":"\u293D",
	  "Cup":"\u22D3",
	  "cup":"\u222A",
	  "cupbrcap":"\u2A48",
	  "CupCap":"\u224D",
	  "cupcap":"\u2A46",
	  "cupcup":"\u2A4A",
	  "cupdot":"\u228D",
	  "cupor":"\u2A45",
	  "cups":"\u222A\uFE00",
	  "curarr":"\u21B7",
	  "curarrm":"\u293C",
	  "curlyeqprec":"\u22DE",
	  "curlyeqsucc":"\u22DF",
	  "curlyvee":"\u22CE",
	  "curlywedge":"\u22CF",
	  "curren":"\u00A4",
	  "curvearrowleft":"\u21B6",
	  "curvearrowright":"\u21B7",
	  "cuvee":"\u22CE",
	  "cuwed":"\u22CF",
	  "cwconint":"\u2232",
	  "cwint":"\u2231",
	  "cylcty":"\u232D",
	  "Dagger":"\u2021",
	  "dagger":"\u2020",
	  "daleth":"\u2138",
	  "Darr":"\u21A1",
	  "dArr":"\u21D3",
	  "darr":"\u2193",
	  "dash":"\u2010",
	  "Dashv":"\u2AE4",
	  "dashv":"\u22A3",
	  "dbkarow":"\u290F",
	  "dblac":"\u02DD",
	  "Dcaron":"\u010E",
	  "dcaron":"\u010F",
	  "Dcy":"\u0414",
	  "dcy":"\u0434",
	  "DD":"\u2145",
	  "dd":"\u2146",
	  "ddagger":"\u2021",
	  "ddarr":"\u21CA",
	  "DDotrahd":"\u2911",
	  "ddotseq":"\u2A77",
	  "deg":"\u00B0",
	  "Del":"\u2207",
	  "Delta":"\u0394",
	  "delta":"\u03B4",
	  "demptyv":"\u29B1",
	  "dfisht":"\u297F",
	  "Dfr":"\uD835\uDD07",
	  "dfr":"\uD835\uDD21",
	  "dHar":"\u2965",
	  "dharl":"\u21C3",
	  "dharr":"\u21C2",
	  "DiacriticalAcute":"\u00B4",
	  "DiacriticalDot":"\u02D9",
	  "DiacriticalDoubleAcute":"\u02DD",
	  "DiacriticalGrave":"\u0060",
	  "DiacriticalTilde":"\u02DC",
	  "diam":"\u22C4",
	  "Diamond":"\u22C4",
	  "diamond":"\u22C4",
	  "diamondsuit":"\u2666",
	  "diams":"\u2666",
	  "die":"\u00A8",
	  "DifferentialD":"\u2146",
	  "digamma":"\u03DD",
	  "disin":"\u22F2",
	  "div":"\u00F7",
	  "divide":"\u00F7",
	  "divideontimes":"\u22C7",
	  "divonx":"\u22C7",
	  "DJcy":"\u0402",
	  "djcy":"\u0452",
	  "dlcorn":"\u231E",
	  "dlcrop":"\u230D",
	  "dollar":"\u0024",
	  "Dopf":"\uD835\uDD3B",
	  "dopf":"\uD835\uDD55",
	  "Dot":"\u00A8",
	  "dot":"\u02D9",
	  "DotDot":"\u20DC",
	  "doteq":"\u2250",
	  "doteqdot":"\u2251",
	  "DotEqual":"\u2250",
	  "dotminus":"\u2238",
	  "dotplus":"\u2214",
	  "dotsquare":"\u22A1",
	  "doublebarwedge":"\u2306",
	  "DoubleContourIntegral":"\u222F",
	  "DoubleDot":"\u00A8",
	  "DoubleDownArrow":"\u21D3",
	  "DoubleLeftArrow":"\u21D0",
	  "DoubleLeftRightArrow":"\u21D4",
	  "DoubleLeftTee":"\u2AE4",
	  "DoubleLongLeftArrow":"\u27F8",
	  "DoubleLongLeftRightArrow":"\u27FA",
	  "DoubleLongRightArrow":"\u27F9",
	  "DoubleRightArrow":"\u21D2",
	  "DoubleRightTee":"\u22A8",
	  "DoubleUpArrow":"\u21D1",
	  "DoubleUpDownArrow":"\u21D5",
	  "DoubleVerticalBar":"\u2225",
	  "DownArrow":"\u2193",
	  "Downarrow":"\u21D3",
	  "downarrow":"\u2193",
	  "DownArrowBar":"\u2913",
	  "DownArrowUpArrow":"\u21F5",
	  "DownBreve":"\u0311",
	  "downdownarrows":"\u21CA",
	  "downharpoonleft":"\u21C3",
	  "downharpoonright":"\u21C2",
	  "DownLeftRightVector":"\u2950",
	  "DownLeftTeeVector":"\u295E",
	  "DownLeftVector":"\u21BD",
	  "DownLeftVectorBar":"\u2956",
	  "DownRightTeeVector":"\u295F",
	  "DownRightVector":"\u21C1",
	  "DownRightVectorBar":"\u2957",
	  "DownTee":"\u22A4",
	  "DownTeeArrow":"\u21A7",
	  "drbkarow":"\u2910",
	  "drcorn":"\u231F",
	  "drcrop":"\u230C",
	  "Dscr":"\uD835\uDC9F",
	  "dscr":"\uD835\uDCB9",
	  "DScy":"\u0405",
	  "dscy":"\u0455",
	  "dsol":"\u29F6",
	  "Dstrok":"\u0110",
	  "dstrok":"\u0111",
	  "dtdot":"\u22F1",
	  "dtri":"\u25BF",
	  "dtrif":"\u25BE",
	  "duarr":"\u21F5",
	  "duhar":"\u296F",
	  "dwangle":"\u29A6",
	  "DZcy":"\u040F",
	  "dzcy":"\u045F",
	  "dzigrarr":"\u27FF",
	  "Eacute":"\u00C9",
	  "eacute":"\u00E9",
	  "easter":"\u2A6E",
	  "Ecaron":"\u011A",
	  "ecaron":"\u011B",
	  "ecir":"\u2256",
	  "Ecirc":"\u00CA",
	  "ecirc":"\u00EA",
	  "ecolon":"\u2255",
	  "Ecy":"\u042D",
	  "ecy":"\u044D",
	  "eDDot":"\u2A77",
	  "Edot":"\u0116",
	  "eDot":"\u2251",
	  "edot":"\u0117",
	  "ee":"\u2147",
	  "efDot":"\u2252",
	  "Efr":"\uD835\uDD08",
	  "efr":"\uD835\uDD22",
	  "eg":"\u2A9A",
	  "Egrave":"\u00C8",
	  "egrave":"\u00E8",
	  "egs":"\u2A96",
	  "egsdot":"\u2A98",
	  "el":"\u2A99",
	  "Element":"\u2208",
	  "elinters":"\u23E7",
	  "ell":"\u2113",
	  "els":"\u2A95",
	  "elsdot":"\u2A97",
	  "Emacr":"\u0112",
	  "emacr":"\u0113",
	  "empty":"\u2205",
	  "emptyset":"\u2205",
	  "EmptySmallSquare":"\u25FB",
	  "emptyv":"\u2205",
	  "EmptyVerySmallSquare":"\u25AB",
	  "emsp":"\u2003",
	  "emsp13":"\u2004",
	  "emsp14":"\u2005",
	  "ENG":"\u014A",
	  "eng":"\u014B",
	  "ensp":"\u2002",
	  "Eogon":"\u0118",
	  "eogon":"\u0119",
	  "Eopf":"\uD835\uDD3C",
	  "eopf":"\uD835\uDD56",
	  "epar":"\u22D5",
	  "eparsl":"\u29E3",
	  "eplus":"\u2A71",
	  "epsi":"\u03B5",
	  "Epsilon":"\u0395",
	  "epsilon":"\u03B5",
	  "epsiv":"\u03F5",
	  "eqcirc":"\u2256",
	  "eqcolon":"\u2255",
	  "eqsim":"\u2242",
	  "eqslantgtr":"\u2A96",
	  "eqslantless":"\u2A95",
	  "Equal":"\u2A75",
	  "equals":"\u003D",
	  "EqualTilde":"\u2242",
	  "equest":"\u225F",
	  "Equilibrium":"\u21CC",
	  "equiv":"\u2261",
	  "equivDD":"\u2A78",
	  "eqvparsl":"\u29E5",
	  "erarr":"\u2971",
	  "erDot":"\u2253",
	  "Escr":"\u2130",
	  "escr":"\u212F",
	  "esdot":"\u2250",
	  "Esim":"\u2A73",
	  "esim":"\u2242",
	  "Eta":"\u0397",
	  "eta":"\u03B7",
	  "ETH":"\u00D0",
	  "eth":"\u00F0",
	  "Euml":"\u00CB",
	  "euml":"\u00EB",
	  "euro":"\u20AC",
	  "excl":"\u0021",
	  "exist":"\u2203",
	  "Exists":"\u2203",
	  "expectation":"\u2130",
	  "ExponentialE":"\u2147",
	  "exponentiale":"\u2147",
	  "fallingdotseq":"\u2252",
	  "Fcy":"\u0424",
	  "fcy":"\u0444",
	  "female":"\u2640",
	  "ffilig":"\uFB03",
	  "fflig":"\uFB00",
	  "ffllig":"\uFB04",
	  "Ffr":"\uD835\uDD09",
	  "ffr":"\uD835\uDD23",
	  "filig":"\uFB01",
	  "FilledSmallSquare":"\u25FC",
	  "FilledVerySmallSquare":"\u25AA",
	  "fjlig":"\u0066\u006A",
	  "flat":"\u266D",
	  "fllig":"\uFB02",
	  "fltns":"\u25B1",
	  "fnof":"\u0192",
	  "Fopf":"\uD835\uDD3D",
	  "fopf":"\uD835\uDD57",
	  "ForAll":"\u2200",
	  "forall":"\u2200",
	  "fork":"\u22D4",
	  "forkv":"\u2AD9",
	  "Fouriertrf":"\u2131",
	  "fpartint":"\u2A0D",
	  "frac12":"\u00BD",
	  "frac13":"\u2153",
	  "frac14":"\u00BC",
	  "frac15":"\u2155",
	  "frac16":"\u2159",
	  "frac18":"\u215B",
	  "frac23":"\u2154",
	  "frac25":"\u2156",
	  "frac34":"\u00BE",
	  "frac35":"\u2157",
	  "frac38":"\u215C",
	  "frac45":"\u2158",
	  "frac56":"\u215A",
	  "frac58":"\u215D",
	  "frac78":"\u215E",
	  "frasl":"\u2044",
	  "frown":"\u2322",
	  "Fscr":"\u2131",
	  "fscr":"\uD835\uDCBB",
	  "gacute":"\u01F5",
	  "Gamma":"\u0393",
	  "gamma":"\u03B3",
	  "Gammad":"\u03DC",
	  "gammad":"\u03DD",
	  "gap":"\u2A86",
	  "Gbreve":"\u011E",
	  "gbreve":"\u011F",
	  "Gcedil":"\u0122",
	  "Gcirc":"\u011C",
	  "gcirc":"\u011D",
	  "Gcy":"\u0413",
	  "gcy":"\u0433",
	  "Gdot":"\u0120",
	  "gdot":"\u0121",
	  "gE":"\u2267",
	  "ge":"\u2265",
	  "gEl":"\u2A8C",
	  "gel":"\u22DB",
	  "geq":"\u2265",
	  "geqq":"\u2267",
	  "geqslant":"\u2A7E",
	  "ges":"\u2A7E",
	  "gescc":"\u2AA9",
	  "gesdot":"\u2A80",
	  "gesdoto":"\u2A82",
	  "gesdotol":"\u2A84",
	  "gesl":"\u22DB\uFE00",
	  "gesles":"\u2A94",
	  "Gfr":"\uD835\uDD0A",
	  "gfr":"\uD835\uDD24",
	  "Gg":"\u22D9",
	  "gg":"\u226B",
	  "ggg":"\u22D9",
	  "gimel":"\u2137",
	  "GJcy":"\u0403",
	  "gjcy":"\u0453",
	  "gl":"\u2277",
	  "gla":"\u2AA5",
	  "glE":"\u2A92",
	  "glj":"\u2AA4",
	  "gnap":"\u2A8A",
	  "gnapprox":"\u2A8A",
	  "gnE":"\u2269",
	  "gne":"\u2A88",
	  "gneq":"\u2A88",
	  "gneqq":"\u2269",
	  "gnsim":"\u22E7",
	  "Gopf":"\uD835\uDD3E",
	  "gopf":"\uD835\uDD58",
	  "grave":"\u0060",
	  "GreaterEqual":"\u2265",
	  "GreaterEqualLess":"\u22DB",
	  "GreaterFullEqual":"\u2267",
	  "GreaterGreater":"\u2AA2",
	  "GreaterLess":"\u2277",
	  "GreaterSlantEqual":"\u2A7E",
	  "GreaterTilde":"\u2273",
	  "Gscr":"\uD835\uDCA2",
	  "gscr":"\u210A",
	  "gsim":"\u2273",
	  "gsime":"\u2A8E",
	  "gsiml":"\u2A90",
	  "GT":"\u003E",
	  "Gt":"\u226B",
	  "gt":"\u003E",
	  "gtcc":"\u2AA7",
	  "gtcir":"\u2A7A",
	  "gtdot":"\u22D7",
	  "gtlPar":"\u2995",
	  "gtquest":"\u2A7C",
	  "gtrapprox":"\u2A86",
	  "gtrarr":"\u2978",
	  "gtrdot":"\u22D7",
	  "gtreqless":"\u22DB",
	  "gtreqqless":"\u2A8C",
	  "gtrless":"\u2277",
	  "gtrsim":"\u2273",
	  "gvertneqq":"\u2269\uFE00",
	  "gvnE":"\u2269\uFE00",
	  "Hacek":"\u02C7",
	  "hairsp":"\u200A",
	  "half":"\u00BD",
	  "hamilt":"\u210B",
	  "HARDcy":"\u042A",
	  "hardcy":"\u044A",
	  "hArr":"\u21D4",
	  "harr":"\u2194",
	  "harrcir":"\u2948",
	  "harrw":"\u21AD",
	  "Hat":"\u005E",
	  "hbar":"\u210F",
	  "Hcirc":"\u0124",
	  "hcirc":"\u0125",
	  "hearts":"\u2665",
	  "heartsuit":"\u2665",
	  "hellip":"\u2026",
	  "hercon":"\u22B9",
	  "Hfr":"\u210C",
	  "hfr":"\uD835\uDD25",
	  "HilbertSpace":"\u210B",
	  "hksearow":"\u2925",
	  "hkswarow":"\u2926",
	  "hoarr":"\u21FF",
	  "homtht":"\u223B",
	  "hookleftarrow":"\u21A9",
	  "hookrightarrow":"\u21AA",
	  "Hopf":"\u210D",
	  "hopf":"\uD835\uDD59",
	  "horbar":"\u2015",
	  "HorizontalLine":"\u2500",
	  "Hscr":"\u210B",
	  "hscr":"\uD835\uDCBD",
	  "hslash":"\u210F",
	  "Hstrok":"\u0126",
	  "hstrok":"\u0127",
	  "HumpDownHump":"\u224E",
	  "HumpEqual":"\u224F",
	  "hybull":"\u2043",
	  "hyphen":"\u2010",
	  "Iacute":"\u00CD",
	  "iacute":"\u00ED",
	  "ic":"\u2063",
	  "Icirc":"\u00CE",
	  "icirc":"\u00EE",
	  "Icy":"\u0418",
	  "icy":"\u0438",
	  "Idot":"\u0130",
	  "IEcy":"\u0415",
	  "iecy":"\u0435",
	  "iexcl":"\u00A1",
	  "iff":"\u21D4",
	  "Ifr":"\u2111",
	  "ifr":"\uD835\uDD26",
	  "Igrave":"\u00CC",
	  "igrave":"\u00EC",
	  "ii":"\u2148",
	  "iiiint":"\u2A0C",
	  "iiint":"\u222D",
	  "iinfin":"\u29DC",
	  "iiota":"\u2129",
	  "IJlig":"\u0132",
	  "ijlig":"\u0133",
	  "Im":"\u2111",
	  "Imacr":"\u012A",
	  "imacr":"\u012B",
	  "image":"\u2111",
	  "ImaginaryI":"\u2148",
	  "imagline":"\u2110",
	  "imagpart":"\u2111",
	  "imath":"\u0131",
	  "imof":"\u22B7",
	  "imped":"\u01B5",
	  "Implies":"\u21D2",
	  "in":"\u2208",
	  "incare":"\u2105",
	  "infin":"\u221E",
	  "infintie":"\u29DD",
	  "inodot":"\u0131",
	  "Int":"\u222C",
	  "int":"\u222B",
	  "intcal":"\u22BA",
	  "integers":"\u2124",
	  "Integral":"\u222B",
	  "intercal":"\u22BA",
	  "Intersection":"\u22C2",
	  "intlarhk":"\u2A17",
	  "intprod":"\u2A3C",
	  "InvisibleComma":"\u2063",
	  "InvisibleTimes":"\u2062",
	  "IOcy":"\u0401",
	  "iocy":"\u0451",
	  "Iogon":"\u012E",
	  "iogon":"\u012F",
	  "Iopf":"\uD835\uDD40",
	  "iopf":"\uD835\uDD5A",
	  "Iota":"\u0399",
	  "iota":"\u03B9",
	  "iprod":"\u2A3C",
	  "iquest":"\u00BF",
	  "Iscr":"\u2110",
	  "iscr":"\uD835\uDCBE",
	  "isin":"\u2208",
	  "isindot":"\u22F5",
	  "isinE":"\u22F9",
	  "isins":"\u22F4",
	  "isinsv":"\u22F3",
	  "isinv":"\u2208",
	  "it":"\u2062",
	  "Itilde":"\u0128",
	  "itilde":"\u0129",
	  "Iukcy":"\u0406",
	  "iukcy":"\u0456",
	  "Iuml":"\u00CF",
	  "iuml":"\u00EF",
	  "Jcirc":"\u0134",
	  "jcirc":"\u0135",
	  "Jcy":"\u0419",
	  "jcy":"\u0439",
	  "Jfr":"\uD835\uDD0D",
	  "jfr":"\uD835\uDD27",
	  "jmath":"\u0237",
	  "Jopf":"\uD835\uDD41",
	  "jopf":"\uD835\uDD5B",
	  "Jscr":"\uD835\uDCA5",
	  "jscr":"\uD835\uDCBF",
	  "Jsercy":"\u0408",
	  "jsercy":"\u0458",
	  "Jukcy":"\u0404",
	  "jukcy":"\u0454",
	  "Kappa":"\u039A",
	  "kappa":"\u03BA",
	  "kappav":"\u03F0",
	  "Kcedil":"\u0136",
	  "kcedil":"\u0137",
	  "Kcy":"\u041A",
	  "kcy":"\u043A",
	  "Kfr":"\uD835\uDD0E",
	  "kfr":"\uD835\uDD28",
	  "kgreen":"\u0138",
	  "KHcy":"\u0425",
	  "khcy":"\u0445",
	  "KJcy":"\u040C",
	  "kjcy":"\u045C",
	  "Kopf":"\uD835\uDD42",
	  "kopf":"\uD835\uDD5C",
	  "Kscr":"\uD835\uDCA6",
	  "kscr":"\uD835\uDCC0",
	  "lAarr":"\u21DA",
	  "Lacute":"\u0139",
	  "lacute":"\u013A",
	  "laemptyv":"\u29B4",
	  "lagran":"\u2112",
	  "Lambda":"\u039B",
	  "lambda":"\u03BB",
	  "Lang":"\u27EA",
	  "lang":"\u27E8",
	  "langd":"\u2991",
	  "langle":"\u27E8",
	  "lap":"\u2A85",
	  "Laplacetrf":"\u2112",
	  "laquo":"\u00AB",
	  "Larr":"\u219E",
	  "lArr":"\u21D0",
	  "larr":"\u2190",
	  "larrb":"\u21E4",
	  "larrbfs":"\u291F",
	  "larrfs":"\u291D",
	  "larrhk":"\u21A9",
	  "larrlp":"\u21AB",
	  "larrpl":"\u2939",
	  "larrsim":"\u2973",
	  "larrtl":"\u21A2",
	  "lat":"\u2AAB",
	  "lAtail":"\u291B",
	  "latail":"\u2919",
	  "late":"\u2AAD",
	  "lates":"\u2AAD\uFE00",
	  "lBarr":"\u290E",
	  "lbarr":"\u290C",
	  "lbbrk":"\u2772",
	  "lbrace":"\u007B",
	  "lbrack":"\u005B",
	  "lbrke":"\u298B",
	  "lbrksld":"\u298F",
	  "lbrkslu":"\u298D",
	  "Lcaron":"\u013D",
	  "lcaron":"\u013E",
	  "Lcedil":"\u013B",
	  "lcedil":"\u013C",
	  "lceil":"\u2308",
	  "lcub":"\u007B",
	  "Lcy":"\u041B",
	  "lcy":"\u043B",
	  "ldca":"\u2936",
	  "ldquo":"\u201C",
	  "ldquor":"\u201E",
	  "ldrdhar":"\u2967",
	  "ldrushar":"\u294B",
	  "ldsh":"\u21B2",
	  "lE":"\u2266",
	  "le":"\u2264",
	  "LeftAngleBracket":"\u27E8",
	  "LeftArrow":"\u2190",
	  "Leftarrow":"\u21D0",
	  "leftarrow":"\u2190",
	  "LeftArrowBar":"\u21E4",
	  "LeftArrowRightArrow":"\u21C6",
	  "leftarrowtail":"\u21A2",
	  "LeftCeiling":"\u2308",
	  "LeftDoubleBracket":"\u27E6",
	  "LeftDownTeeVector":"\u2961",
	  "LeftDownVector":"\u21C3",
	  "LeftDownVectorBar":"\u2959",
	  "LeftFloor":"\u230A",
	  "leftharpoondown":"\u21BD",
	  "leftharpoonup":"\u21BC",
	  "leftleftarrows":"\u21C7",
	  "LeftRightArrow":"\u2194",
	  "Leftrightarrow":"\u21D4",
	  "leftrightarrow":"\u2194",
	  "leftrightarrows":"\u21C6",
	  "leftrightharpoons":"\u21CB",
	  "leftrightsquigarrow":"\u21AD",
	  "LeftRightVector":"\u294E",
	  "LeftTee":"\u22A3",
	  "LeftTeeArrow":"\u21A4",
	  "LeftTeeVector":"\u295A",
	  "leftthreetimes":"\u22CB",
	  "LeftTriangle":"\u22B2",
	  "LeftTriangleBar":"\u29CF",
	  "LeftTriangleEqual":"\u22B4",
	  "LeftUpDownVector":"\u2951",
	  "LeftUpTeeVector":"\u2960",
	  "LeftUpVector":"\u21BF",
	  "LeftUpVectorBar":"\u2958",
	  "LeftVector":"\u21BC",
	  "LeftVectorBar":"\u2952",
	  "lEg":"\u2A8B",
	  "leg":"\u22DA",
	  "leq":"\u2264",
	  "leqq":"\u2266",
	  "leqslant":"\u2A7D",
	  "les":"\u2A7D",
	  "lescc":"\u2AA8",
	  "lesdot":"\u2A7F",
	  "lesdoto":"\u2A81",
	  "lesdotor":"\u2A83",
	  "lesg":"\u22DA\uFE00",
	  "lesges":"\u2A93",
	  "lessapprox":"\u2A85",
	  "lessdot":"\u22D6",
	  "lesseqgtr":"\u22DA",
	  "lesseqqgtr":"\u2A8B",
	  "LessEqualGreater":"\u22DA",
	  "LessFullEqual":"\u2266",
	  "LessGreater":"\u2276",
	  "lessgtr":"\u2276",
	  "LessLess":"\u2AA1",
	  "lesssim":"\u2272",
	  "LessSlantEqual":"\u2A7D",
	  "LessTilde":"\u2272",
	  "lfisht":"\u297C",
	  "lfloor":"\u230A",
	  "Lfr":"\uD835\uDD0F",
	  "lfr":"\uD835\uDD29",
	  "lg":"\u2276",
	  "lgE":"\u2A91",
	  "lHar":"\u2962",
	  "lhard":"\u21BD",
	  "lharu":"\u21BC",
	  "lharul":"\u296A",
	  "lhblk":"\u2584",
	  "LJcy":"\u0409",
	  "ljcy":"\u0459",
	  "Ll":"\u22D8",
	  "ll":"\u226A",
	  "llarr":"\u21C7",
	  "llcorner":"\u231E",
	  "Lleftarrow":"\u21DA",
	  "llhard":"\u296B",
	  "lltri":"\u25FA",
	  "Lmidot":"\u013F",
	  "lmidot":"\u0140",
	  "lmoust":"\u23B0",
	  "lmoustache":"\u23B0",
	  "lnap":"\u2A89",
	  "lnapprox":"\u2A89",
	  "lnE":"\u2268",
	  "lne":"\u2A87",
	  "lneq":"\u2A87",
	  "lneqq":"\u2268",
	  "lnsim":"\u22E6",
	  "loang":"\u27EC",
	  "loarr":"\u21FD",
	  "lobrk":"\u27E6",
	  "LongLeftArrow":"\u27F5",
	  "Longleftarrow":"\u27F8",
	  "longleftarrow":"\u27F5",
	  "LongLeftRightArrow":"\u27F7",
	  "Longleftrightarrow":"\u27FA",
	  "longleftrightarrow":"\u27F7",
	  "longmapsto":"\u27FC",
	  "LongRightArrow":"\u27F6",
	  "Longrightarrow":"\u27F9",
	  "longrightarrow":"\u27F6",
	  "looparrowleft":"\u21AB",
	  "looparrowright":"\u21AC",
	  "lopar":"\u2985",
	  "Lopf":"\uD835\uDD43",
	  "lopf":"\uD835\uDD5D",
	  "loplus":"\u2A2D",
	  "lotimes":"\u2A34",
	  "lowast":"\u2217",
	  "lowbar":"\u005F",
	  "LowerLeftArrow":"\u2199",
	  "LowerRightArrow":"\u2198",
	  "loz":"\u25CA",
	  "lozenge":"\u25CA",
	  "lozf":"\u29EB",
	  "lpar":"\u0028",
	  "lparlt":"\u2993",
	  "lrarr":"\u21C6",
	  "lrcorner":"\u231F",
	  "lrhar":"\u21CB",
	  "lrhard":"\u296D",
	  "lrm":"\u200E",
	  "lrtri":"\u22BF",
	  "lsaquo":"\u2039",
	  "Lscr":"\u2112",
	  "lscr":"\uD835\uDCC1",
	  "Lsh":"\u21B0",
	  "lsh":"\u21B0",
	  "lsim":"\u2272",
	  "lsime":"\u2A8D",
	  "lsimg":"\u2A8F",
	  "lsqb":"\u005B",
	  "lsquo":"\u2018",
	  "lsquor":"\u201A",
	  "Lstrok":"\u0141",
	  "lstrok":"\u0142",
	  "LT":"\u003C",
	  "Lt":"\u226A",
	  "lt":"\u003C",
	  "ltcc":"\u2AA6",
	  "ltcir":"\u2A79",
	  "ltdot":"\u22D6",
	  "lthree":"\u22CB",
	  "ltimes":"\u22C9",
	  "ltlarr":"\u2976",
	  "ltquest":"\u2A7B",
	  "ltri":"\u25C3",
	  "ltrie":"\u22B4",
	  "ltrif":"\u25C2",
	  "ltrPar":"\u2996",
	  "lurdshar":"\u294A",
	  "luruhar":"\u2966",
	  "lvertneqq":"\u2268\uFE00",
	  "lvnE":"\u2268\uFE00",
	  "macr":"\u00AF",
	  "male":"\u2642",
	  "malt":"\u2720",
	  "maltese":"\u2720",
	  "Map":"\u2905",
	  "map":"\u21A6",
	  "mapsto":"\u21A6",
	  "mapstodown":"\u21A7",
	  "mapstoleft":"\u21A4",
	  "mapstoup":"\u21A5",
	  "marker":"\u25AE",
	  "mcomma":"\u2A29",
	  "Mcy":"\u041C",
	  "mcy":"\u043C",
	  "mdash":"\u2014",
	  "mDDot":"\u223A",
	  "measuredangle":"\u2221",
	  "MediumSpace":"\u205F",
	  "Mellintrf":"\u2133",
	  "Mfr":"\uD835\uDD10",
	  "mfr":"\uD835\uDD2A",
	  "mho":"\u2127",
	  "micro":"\u00B5",
	  "mid":"\u2223",
	  "midast":"\u002A",
	  "midcir":"\u2AF0",
	  "middot":"\u00B7",
	  "minus":"\u2212",
	  "minusb":"\u229F",
	  "minusd":"\u2238",
	  "minusdu":"\u2A2A",
	  "MinusPlus":"\u2213",
	  "mlcp":"\u2ADB",
	  "mldr":"\u2026",
	  "mnplus":"\u2213",
	  "models":"\u22A7",
	  "Mopf":"\uD835\uDD44",
	  "mopf":"\uD835\uDD5E",
	  "mp":"\u2213",
	  "Mscr":"\u2133",
	  "mscr":"\uD835\uDCC2",
	  "mstpos":"\u223E",
	  "Mu":"\u039C",
	  "mu":"\u03BC",
	  "multimap":"\u22B8",
	  "mumap":"\u22B8",
	  "nabla":"\u2207",
	  "Nacute":"\u0143",
	  "nacute":"\u0144",
	  "nang":"\u2220\u20D2",
	  "nap":"\u2249",
	  "napE":"\u2A70\u0338",
	  "napid":"\u224B\u0338",
	  "napos":"\u0149",
	  "napprox":"\u2249",
	  "natur":"\u266E",
	  "natural":"\u266E",
	  "naturals":"\u2115",
	  "nbsp":"\u00A0",
	  "nbump":"\u224E\u0338",
	  "nbumpe":"\u224F\u0338",
	  "ncap":"\u2A43",
	  "Ncaron":"\u0147",
	  "ncaron":"\u0148",
	  "Ncedil":"\u0145",
	  "ncedil":"\u0146",
	  "ncong":"\u2247",
	  "ncongdot":"\u2A6D\u0338",
	  "ncup":"\u2A42",
	  "Ncy":"\u041D",
	  "ncy":"\u043D",
	  "ndash":"\u2013",
	  "ne":"\u2260",
	  "nearhk":"\u2924",
	  "neArr":"\u21D7",
	  "nearr":"\u2197",
	  "nearrow":"\u2197",
	  "nedot":"\u2250\u0338",
	  "NegativeMediumSpace":"\u200B",
	  "NegativeThickSpace":"\u200B",
	  "NegativeThinSpace":"\u200B",
	  "NegativeVeryThinSpace":"\u200B",
	  "nequiv":"\u2262",
	  "nesear":"\u2928",
	  "nesim":"\u2242\u0338",
	  "NestedGreaterGreater":"\u226B",
	  "NestedLessLess":"\u226A",
	  "NewLine":"\u000A",
	  "nexist":"\u2204",
	  "nexists":"\u2204",
	  "Nfr":"\uD835\uDD11",
	  "nfr":"\uD835\uDD2B",
	  "ngE":"\u2267\u0338",
	  "nge":"\u2271",
	  "ngeq":"\u2271",
	  "ngeqq":"\u2267\u0338",
	  "ngeqslant":"\u2A7E\u0338",
	  "nges":"\u2A7E\u0338",
	  "nGg":"\u22D9\u0338",
	  "ngsim":"\u2275",
	  "nGt":"\u226B\u20D2",
	  "ngt":"\u226F",
	  "ngtr":"\u226F",
	  "nGtv":"\u226B\u0338",
	  "nhArr":"\u21CE",
	  "nharr":"\u21AE",
	  "nhpar":"\u2AF2",
	  "ni":"\u220B",
	  "nis":"\u22FC",
	  "nisd":"\u22FA",
	  "niv":"\u220B",
	  "NJcy":"\u040A",
	  "njcy":"\u045A",
	  "nlArr":"\u21CD",
	  "nlarr":"\u219A",
	  "nldr":"\u2025",
	  "nlE":"\u2266\u0338",
	  "nle":"\u2270",
	  "nLeftarrow":"\u21CD",
	  "nleftarrow":"\u219A",
	  "nLeftrightarrow":"\u21CE",
	  "nleftrightarrow":"\u21AE",
	  "nleq":"\u2270",
	  "nleqq":"\u2266\u0338",
	  "nleqslant":"\u2A7D\u0338",
	  "nles":"\u2A7D\u0338",
	  "nless":"\u226E",
	  "nLl":"\u22D8\u0338",
	  "nlsim":"\u2274",
	  "nLt":"\u226A\u20D2",
	  "nlt":"\u226E",
	  "nltri":"\u22EA",
	  "nltrie":"\u22EC",
	  "nLtv":"\u226A\u0338",
	  "nmid":"\u2224",
	  "NoBreak":"\u2060",
	  "NonBreakingSpace":"\u00A0",
	  "Nopf":"\u2115",
	  "nopf":"\uD835\uDD5F",
	  "Not":"\u2AEC",
	  "not":"\u00AC",
	  "NotCongruent":"\u2262",
	  "NotCupCap":"\u226D",
	  "NotDoubleVerticalBar":"\u2226",
	  "NotElement":"\u2209",
	  "NotEqual":"\u2260",
	  "NotEqualTilde":"\u2242\u0338",
	  "NotExists":"\u2204",
	  "NotGreater":"\u226F",
	  "NotGreaterEqual":"\u2271",
	  "NotGreaterFullEqual":"\u2267\u0338",
	  "NotGreaterGreater":"\u226B\u0338",
	  "NotGreaterLess":"\u2279",
	  "NotGreaterSlantEqual":"\u2A7E\u0338",
	  "NotGreaterTilde":"\u2275",
	  "NotHumpDownHump":"\u224E\u0338",
	  "NotHumpEqual":"\u224F\u0338",
	  "notin":"\u2209",
	  "notindot":"\u22F5\u0338",
	  "notinE":"\u22F9\u0338",
	  "notinva":"\u2209",
	  "notinvb":"\u22F7",
	  "notinvc":"\u22F6",
	  "NotLeftTriangle":"\u22EA",
	  "NotLeftTriangleBar":"\u29CF\u0338",
	  "NotLeftTriangleEqual":"\u22EC",
	  "NotLess":"\u226E",
	  "NotLessEqual":"\u2270",
	  "NotLessGreater":"\u2278",
	  "NotLessLess":"\u226A\u0338",
	  "NotLessSlantEqual":"\u2A7D\u0338",
	  "NotLessTilde":"\u2274",
	  "NotNestedGreaterGreater":"\u2AA2\u0338",
	  "NotNestedLessLess":"\u2AA1\u0338",
	  "notni":"\u220C",
	  "notniva":"\u220C",
	  "notnivb":"\u22FE",
	  "notnivc":"\u22FD",
	  "NotPrecedes":"\u2280",
	  "NotPrecedesEqual":"\u2AAF\u0338",
	  "NotPrecedesSlantEqual":"\u22E0",
	  "NotReverseElement":"\u220C",
	  "NotRightTriangle":"\u22EB",
	  "NotRightTriangleBar":"\u29D0\u0338",
	  "NotRightTriangleEqual":"\u22ED",
	  "NotSquareSubset":"\u228F\u0338",
	  "NotSquareSubsetEqual":"\u22E2",
	  "NotSquareSuperset":"\u2290\u0338",
	  "NotSquareSupersetEqual":"\u22E3",
	  "NotSubset":"\u2282\u20D2",
	  "NotSubsetEqual":"\u2288",
	  "NotSucceeds":"\u2281",
	  "NotSucceedsEqual":"\u2AB0\u0338",
	  "NotSucceedsSlantEqual":"\u22E1",
	  "NotSucceedsTilde":"\u227F\u0338",
	  "NotSuperset":"\u2283\u20D2",
	  "NotSupersetEqual":"\u2289",
	  "NotTilde":"\u2241",
	  "NotTildeEqual":"\u2244",
	  "NotTildeFullEqual":"\u2247",
	  "NotTildeTilde":"\u2249",
	  "NotVerticalBar":"\u2224",
	  "npar":"\u2226",
	  "nparallel":"\u2226",
	  "nparsl":"\u2AFD\u20E5",
	  "npart":"\u2202\u0338",
	  "npolint":"\u2A14",
	  "npr":"\u2280",
	  "nprcue":"\u22E0",
	  "npre":"\u2AAF\u0338",
	  "nprec":"\u2280",
	  "npreceq":"\u2AAF\u0338",
	  "nrArr":"\u21CF",
	  "nrarr":"\u219B",
	  "nrarrc":"\u2933\u0338",
	  "nrarrw":"\u219D\u0338",
	  "nRightarrow":"\u21CF",
	  "nrightarrow":"\u219B",
	  "nrtri":"\u22EB",
	  "nrtrie":"\u22ED",
	  "nsc":"\u2281",
	  "nsccue":"\u22E1",
	  "nsce":"\u2AB0\u0338",
	  "Nscr":"\uD835\uDCA9",
	  "nscr":"\uD835\uDCC3",
	  "nshortmid":"\u2224",
	  "nshortparallel":"\u2226",
	  "nsim":"\u2241",
	  "nsime":"\u2244",
	  "nsimeq":"\u2244",
	  "nsmid":"\u2224",
	  "nspar":"\u2226",
	  "nsqsube":"\u22E2",
	  "nsqsupe":"\u22E3",
	  "nsub":"\u2284",
	  "nsubE":"\u2AC5\u0338",
	  "nsube":"\u2288",
	  "nsubset":"\u2282\u20D2",
	  "nsubseteq":"\u2288",
	  "nsubseteqq":"\u2AC5\u0338",
	  "nsucc":"\u2281",
	  "nsucceq":"\u2AB0\u0338",
	  "nsup":"\u2285",
	  "nsupE":"\u2AC6\u0338",
	  "nsupe":"\u2289",
	  "nsupset":"\u2283\u20D2",
	  "nsupseteq":"\u2289",
	  "nsupseteqq":"\u2AC6\u0338",
	  "ntgl":"\u2279",
	  "Ntilde":"\u00D1",
	  "ntilde":"\u00F1",
	  "ntlg":"\u2278",
	  "ntriangleleft":"\u22EA",
	  "ntrianglelefteq":"\u22EC",
	  "ntriangleright":"\u22EB",
	  "ntrianglerighteq":"\u22ED",
	  "Nu":"\u039D",
	  "nu":"\u03BD",
	  "num":"\u0023",
	  "numero":"\u2116",
	  "numsp":"\u2007",
	  "nvap":"\u224D\u20D2",
	  "nVDash":"\u22AF",
	  "nVdash":"\u22AE",
	  "nvDash":"\u22AD",
	  "nvdash":"\u22AC",
	  "nvge":"\u2265\u20D2",
	  "nvgt":"\u003E\u20D2",
	  "nvHarr":"\u2904",
	  "nvinfin":"\u29DE",
	  "nvlArr":"\u2902",
	  "nvle":"\u2264\u20D2",
	  "nvlt":"\u003C\u20D2",
	  "nvltrie":"\u22B4\u20D2",
	  "nvrArr":"\u2903",
	  "nvrtrie":"\u22B5\u20D2",
	  "nvsim":"\u223C\u20D2",
	  "nwarhk":"\u2923",
	  "nwArr":"\u21D6",
	  "nwarr":"\u2196",
	  "nwarrow":"\u2196",
	  "nwnear":"\u2927",
	  "Oacute":"\u00D3",
	  "oacute":"\u00F3",
	  "oast":"\u229B",
	  "ocir":"\u229A",
	  "Ocirc":"\u00D4",
	  "ocirc":"\u00F4",
	  "Ocy":"\u041E",
	  "ocy":"\u043E",
	  "odash":"\u229D",
	  "Odblac":"\u0150",
	  "odblac":"\u0151",
	  "odiv":"\u2A38",
	  "odot":"\u2299",
	  "odsold":"\u29BC",
	  "OElig":"\u0152",
	  "oelig":"\u0153",
	  "ofcir":"\u29BF",
	  "Ofr":"\uD835\uDD12",
	  "ofr":"\uD835\uDD2C",
	  "ogon":"\u02DB",
	  "Ograve":"\u00D2",
	  "ograve":"\u00F2",
	  "ogt":"\u29C1",
	  "ohbar":"\u29B5",
	  "ohm":"\u03A9",
	  "oint":"\u222E",
	  "olarr":"\u21BA",
	  "olcir":"\u29BE",
	  "olcross":"\u29BB",
	  "oline":"\u203E",
	  "olt":"\u29C0",
	  "Omacr":"\u014C",
	  "omacr":"\u014D",
	  "Omega":"\u03A9",
	  "omega":"\u03C9",
	  "Omicron":"\u039F",
	  "omicron":"\u03BF",
	  "omid":"\u29B6",
	  "ominus":"\u2296",
	  "Oopf":"\uD835\uDD46",
	  "oopf":"\uD835\uDD60",
	  "opar":"\u29B7",
	  "OpenCurlyDoubleQuote":"\u201C",
	  "OpenCurlyQuote":"\u2018",
	  "operp":"\u29B9",
	  "oplus":"\u2295",
	  "Or":"\u2A54",
	  "or":"\u2228",
	  "orarr":"\u21BB",
	  "ord":"\u2A5D",
	  "order":"\u2134",
	  "orderof":"\u2134",
	  "ordf":"\u00AA",
	  "ordm":"\u00BA",
	  "origof":"\u22B6",
	  "oror":"\u2A56",
	  "orslope":"\u2A57",
	  "orv":"\u2A5B",
	  "oS":"\u24C8",
	  "Oscr":"\uD835\uDCAA",
	  "oscr":"\u2134",
	  "Oslash":"\u00D8",
	  "oslash":"\u00F8",
	  "osol":"\u2298",
	  "Otilde":"\u00D5",
	  "otilde":"\u00F5",
	  "Otimes":"\u2A37",
	  "otimes":"\u2297",
	  "otimesas":"\u2A36",
	  "Ouml":"\u00D6",
	  "ouml":"\u00F6",
	  "ovbar":"\u233D",
	  "OverBar":"\u203E",
	  "OverBrace":"\u23DE",
	  "OverBracket":"\u23B4",
	  "OverParenthesis":"\u23DC",
	  "par":"\u2225",
	  "para":"\u00B6",
	  "parallel":"\u2225",
	  "parsim":"\u2AF3",
	  "parsl":"\u2AFD",
	  "part":"\u2202",
	  "PartialD":"\u2202",
	  "Pcy":"\u041F",
	  "pcy":"\u043F",
	  "percnt":"\u0025",
	  "period":"\u002E",
	  "permil":"\u2030",
	  "perp":"\u22A5",
	  "pertenk":"\u2031",
	  "Pfr":"\uD835\uDD13",
	  "pfr":"\uD835\uDD2D",
	  "Phi":"\u03A6",
	  "phi":"\u03C6",
	  "phiv":"\u03D5",
	  "phmmat":"\u2133",
	  "phone":"\u260E",
	  "Pi":"\u03A0",
	  "pi":"\u03C0",
	  "pitchfork":"\u22D4",
	  "piv":"\u03D6",
	  "planck":"\u210F",
	  "planckh":"\u210E",
	  "plankv":"\u210F",
	  "plus":"\u002B",
	  "plusacir":"\u2A23",
	  "plusb":"\u229E",
	  "pluscir":"\u2A22",
	  "plusdo":"\u2214",
	  "plusdu":"\u2A25",
	  "pluse":"\u2A72",
	  "PlusMinus":"\u00B1",
	  "plusmn":"\u00B1",
	  "plussim":"\u2A26",
	  "plustwo":"\u2A27",
	  "pm":"\u00B1",
	  "Poincareplane":"\u210C",
	  "pointint":"\u2A15",
	  "Popf":"\u2119",
	  "popf":"\uD835\uDD61",
	  "pound":"\u00A3",
	  "Pr":"\u2ABB",
	  "pr":"\u227A",
	  "prap":"\u2AB7",
	  "prcue":"\u227C",
	  "prE":"\u2AB3",
	  "pre":"\u2AAF",
	  "prec":"\u227A",
	  "precapprox":"\u2AB7",
	  "preccurlyeq":"\u227C",
	  "Precedes":"\u227A",
	  "PrecedesEqual":"\u2AAF",
	  "PrecedesSlantEqual":"\u227C",
	  "PrecedesTilde":"\u227E",
	  "preceq":"\u2AAF",
	  "precnapprox":"\u2AB9",
	  "precneqq":"\u2AB5",
	  "precnsim":"\u22E8",
	  "precsim":"\u227E",
	  "Prime":"\u2033",
	  "prime":"\u2032",
	  "primes":"\u2119",
	  "prnap":"\u2AB9",
	  "prnE":"\u2AB5",
	  "prnsim":"\u22E8",
	  "prod":"\u220F",
	  "Product":"\u220F",
	  "profalar":"\u232E",
	  "profline":"\u2312",
	  "profsurf":"\u2313",
	  "prop":"\u221D",
	  "Proportion":"\u2237",
	  "Proportional":"\u221D",
	  "propto":"\u221D",
	  "prsim":"\u227E",
	  "prurel":"\u22B0",
	  "Pscr":"\uD835\uDCAB",
	  "pscr":"\uD835\uDCC5",
	  "Psi":"\u03A8",
	  "psi":"\u03C8",
	  "puncsp":"\u2008",
	  "Qfr":"\uD835\uDD14",
	  "qfr":"\uD835\uDD2E",
	  "qint":"\u2A0C",
	  "Qopf":"\u211A",
	  "qopf":"\uD835\uDD62",
	  "qprime":"\u2057",
	  "Qscr":"\uD835\uDCAC",
	  "qscr":"\uD835\uDCC6",
	  "quaternions":"\u210D",
	  "quatint":"\u2A16",
	  "quest":"\u003F",
	  "questeq":"\u225F",
	  "QUOT":"\u0022",
	  "quot":"\u0022",
	  "rAarr":"\u21DB",
	  "race":"\u223D\u0331",
	  "Racute":"\u0154",
	  "racute":"\u0155",
	  "radic":"\u221A",
	  "raemptyv":"\u29B3",
	  "Rang":"\u27EB",
	  "rang":"\u27E9",
	  "rangd":"\u2992",
	  "range":"\u29A5",
	  "rangle":"\u27E9",
	  "raquo":"\u00BB",
	  "Rarr":"\u21A0",
	  "rArr":"\u21D2",
	  "rarr":"\u2192",
	  "rarrap":"\u2975",
	  "rarrb":"\u21E5",
	  "rarrbfs":"\u2920",
	  "rarrc":"\u2933",
	  "rarrfs":"\u291E",
	  "rarrhk":"\u21AA",
	  "rarrlp":"\u21AC",
	  "rarrpl":"\u2945",
	  "rarrsim":"\u2974",
	  "Rarrtl":"\u2916",
	  "rarrtl":"\u21A3",
	  "rarrw":"\u219D",
	  "rAtail":"\u291C",
	  "ratail":"\u291A",
	  "ratio":"\u2236",
	  "rationals":"\u211A",
	  "RBarr":"\u2910",
	  "rBarr":"\u290F",
	  "rbarr":"\u290D",
	  "rbbrk":"\u2773",
	  "rbrace":"\u007D",
	  "rbrack":"\u005D",
	  "rbrke":"\u298C",
	  "rbrksld":"\u298E",
	  "rbrkslu":"\u2990",
	  "Rcaron":"\u0158",
	  "rcaron":"\u0159",
	  "Rcedil":"\u0156",
	  "rcedil":"\u0157",
	  "rceil":"\u2309",
	  "rcub":"\u007D",
	  "Rcy":"\u0420",
	  "rcy":"\u0440",
	  "rdca":"\u2937",
	  "rdldhar":"\u2969",
	  "rdquo":"\u201D",
	  "rdquor":"\u201D",
	  "rdsh":"\u21B3",
	  "Re":"\u211C",
	  "real":"\u211C",
	  "realine":"\u211B",
	  "realpart":"\u211C",
	  "reals":"\u211D",
	  "rect":"\u25AD",
	  "REG":"\u00AE",
	  "reg":"\u00AE",
	  "ReverseElement":"\u220B",
	  "ReverseEquilibrium":"\u21CB",
	  "ReverseUpEquilibrium":"\u296F",
	  "rfisht":"\u297D",
	  "rfloor":"\u230B",
	  "Rfr":"\u211C",
	  "rfr":"\uD835\uDD2F",
	  "rHar":"\u2964",
	  "rhard":"\u21C1",
	  "rharu":"\u21C0",
	  "rharul":"\u296C",
	  "Rho":"\u03A1",
	  "rho":"\u03C1",
	  "rhov":"\u03F1",
	  "RightAngleBracket":"\u27E9",
	  "RightArrow":"\u2192",
	  "Rightarrow":"\u21D2",
	  "rightarrow":"\u2192",
	  "RightArrowBar":"\u21E5",
	  "RightArrowLeftArrow":"\u21C4",
	  "rightarrowtail":"\u21A3",
	  "RightCeiling":"\u2309",
	  "RightDoubleBracket":"\u27E7",
	  "RightDownTeeVector":"\u295D",
	  "RightDownVector":"\u21C2",
	  "RightDownVectorBar":"\u2955",
	  "RightFloor":"\u230B",
	  "rightharpoondown":"\u21C1",
	  "rightharpoonup":"\u21C0",
	  "rightleftarrows":"\u21C4",
	  "rightleftharpoons":"\u21CC",
	  "rightrightarrows":"\u21C9",
	  "rightsquigarrow":"\u219D",
	  "RightTee":"\u22A2",
	  "RightTeeArrow":"\u21A6",
	  "RightTeeVector":"\u295B",
	  "rightthreetimes":"\u22CC",
	  "RightTriangle":"\u22B3",
	  "RightTriangleBar":"\u29D0",
	  "RightTriangleEqual":"\u22B5",
	  "RightUpDownVector":"\u294F",
	  "RightUpTeeVector":"\u295C",
	  "RightUpVector":"\u21BE",
	  "RightUpVectorBar":"\u2954",
	  "RightVector":"\u21C0",
	  "RightVectorBar":"\u2953",
	  "ring":"\u02DA",
	  "risingdotseq":"\u2253",
	  "rlarr":"\u21C4",
	  "rlhar":"\u21CC",
	  "rlm":"\u200F",
	  "rmoust":"\u23B1",
	  "rmoustache":"\u23B1",
	  "rnmid":"\u2AEE",
	  "roang":"\u27ED",
	  "roarr":"\u21FE",
	  "robrk":"\u27E7",
	  "ropar":"\u2986",
	  "Ropf":"\u211D",
	  "ropf":"\uD835\uDD63",
	  "roplus":"\u2A2E",
	  "rotimes":"\u2A35",
	  "RoundImplies":"\u2970",
	  "rpar":"\u0029",
	  "rpargt":"\u2994",
	  "rppolint":"\u2A12",
	  "rrarr":"\u21C9",
	  "Rrightarrow":"\u21DB",
	  "rsaquo":"\u203A",
	  "Rscr":"\u211B",
	  "rscr":"\uD835\uDCC7",
	  "Rsh":"\u21B1",
	  "rsh":"\u21B1",
	  "rsqb":"\u005D",
	  "rsquo":"\u2019",
	  "rsquor":"\u2019",
	  "rthree":"\u22CC",
	  "rtimes":"\u22CA",
	  "rtri":"\u25B9",
	  "rtrie":"\u22B5",
	  "rtrif":"\u25B8",
	  "rtriltri":"\u29CE",
	  "RuleDelayed":"\u29F4",
	  "ruluhar":"\u2968",
	  "rx":"\u211E",
	  "Sacute":"\u015A",
	  "sacute":"\u015B",
	  "sbquo":"\u201A",
	  "Sc":"\u2ABC",
	  "sc":"\u227B",
	  "scap":"\u2AB8",
	  "Scaron":"\u0160",
	  "scaron":"\u0161",
	  "sccue":"\u227D",
	  "scE":"\u2AB4",
	  "sce":"\u2AB0",
	  "Scedil":"\u015E",
	  "scedil":"\u015F",
	  "Scirc":"\u015C",
	  "scirc":"\u015D",
	  "scnap":"\u2ABA",
	  "scnE":"\u2AB6",
	  "scnsim":"\u22E9",
	  "scpolint":"\u2A13",
	  "scsim":"\u227F",
	  "Scy":"\u0421",
	  "scy":"\u0441",
	  "sdot":"\u22C5",
	  "sdotb":"\u22A1",
	  "sdote":"\u2A66",
	  "searhk":"\u2925",
	  "seArr":"\u21D8",
	  "searr":"\u2198",
	  "searrow":"\u2198",
	  "sect":"\u00A7",
	  "semi":"\u003B",
	  "seswar":"\u2929",
	  "setminus":"\u2216",
	  "setmn":"\u2216",
	  "sext":"\u2736",
	  "Sfr":"\uD835\uDD16",
	  "sfr":"\uD835\uDD30",
	  "sfrown":"\u2322",
	  "sharp":"\u266F",
	  "SHCHcy":"\u0429",
	  "shchcy":"\u0449",
	  "SHcy":"\u0428",
	  "shcy":"\u0448",
	  "ShortDownArrow":"\u2193",
	  "ShortLeftArrow":"\u2190",
	  "shortmid":"\u2223",
	  "shortparallel":"\u2225",
	  "ShortRightArrow":"\u2192",
	  "ShortUpArrow":"\u2191",
	  "shy":"\u00AD",
	  "Sigma":"\u03A3",
	  "sigma":"\u03C3",
	  "sigmaf":"\u03C2",
	  "sigmav":"\u03C2",
	  "sim":"\u223C",
	  "simdot":"\u2A6A",
	  "sime":"\u2243",
	  "simeq":"\u2243",
	  "simg":"\u2A9E",
	  "simgE":"\u2AA0",
	  "siml":"\u2A9D",
	  "simlE":"\u2A9F",
	  "simne":"\u2246",
	  "simplus":"\u2A24",
	  "simrarr":"\u2972",
	  "slarr":"\u2190",
	  "SmallCircle":"\u2218",
	  "smallsetminus":"\u2216",
	  "smashp":"\u2A33",
	  "smeparsl":"\u29E4",
	  "smid":"\u2223",
	  "smile":"\u2323",
	  "smt":"\u2AAA",
	  "smte":"\u2AAC",
	  "smtes":"\u2AAC\uFE00",
	  "SOFTcy":"\u042C",
	  "softcy":"\u044C",
	  "sol":"\u002F",
	  "solb":"\u29C4",
	  "solbar":"\u233F",
	  "Sopf":"\uD835\uDD4A",
	  "sopf":"\uD835\uDD64",
	  "spades":"\u2660",
	  "spadesuit":"\u2660",
	  "spar":"\u2225",
	  "sqcap":"\u2293",
	  "sqcaps":"\u2293\uFE00",
	  "sqcup":"\u2294",
	  "sqcups":"\u2294\uFE00",
	  "Sqrt":"\u221A",
	  "sqsub":"\u228F",
	  "sqsube":"\u2291",
	  "sqsubset":"\u228F",
	  "sqsubseteq":"\u2291",
	  "sqsup":"\u2290",
	  "sqsupe":"\u2292",
	  "sqsupset":"\u2290",
	  "sqsupseteq":"\u2292",
	  "squ":"\u25A1",
	  "Square":"\u25A1",
	  "square":"\u25A1",
	  "SquareIntersection":"\u2293",
	  "SquareSubset":"\u228F",
	  "SquareSubsetEqual":"\u2291",
	  "SquareSuperset":"\u2290",
	  "SquareSupersetEqual":"\u2292",
	  "SquareUnion":"\u2294",
	  "squarf":"\u25AA",
	  "squf":"\u25AA",
	  "srarr":"\u2192",
	  "Sscr":"\uD835\uDCAE",
	  "sscr":"\uD835\uDCC8",
	  "ssetmn":"\u2216",
	  "ssmile":"\u2323",
	  "sstarf":"\u22C6",
	  "Star":"\u22C6",
	  "star":"\u2606",
	  "starf":"\u2605",
	  "straightepsilon":"\u03F5",
	  "straightphi":"\u03D5",
	  "strns":"\u00AF",
	  "Sub":"\u22D0",
	  "sub":"\u2282",
	  "subdot":"\u2ABD",
	  "subE":"\u2AC5",
	  "sube":"\u2286",
	  "subedot":"\u2AC3",
	  "submult":"\u2AC1",
	  "subnE":"\u2ACB",
	  "subne":"\u228A",
	  "subplus":"\u2ABF",
	  "subrarr":"\u2979",
	  "Subset":"\u22D0",
	  "subset":"\u2282",
	  "subseteq":"\u2286",
	  "subseteqq":"\u2AC5",
	  "SubsetEqual":"\u2286",
	  "subsetneq":"\u228A",
	  "subsetneqq":"\u2ACB",
	  "subsim":"\u2AC7",
	  "subsub":"\u2AD5",
	  "subsup":"\u2AD3",
	  "succ":"\u227B",
	  "succapprox":"\u2AB8",
	  "succcurlyeq":"\u227D",
	  "Succeeds":"\u227B",
	  "SucceedsEqual":"\u2AB0",
	  "SucceedsSlantEqual":"\u227D",
	  "SucceedsTilde":"\u227F",
	  "succeq":"\u2AB0",
	  "succnapprox":"\u2ABA",
	  "succneqq":"\u2AB6",
	  "succnsim":"\u22E9",
	  "succsim":"\u227F",
	  "SuchThat":"\u220B",
	  "Sum":"\u2211",
	  "sum":"\u2211",
	  "sung":"\u266A",
	  "Sup":"\u22D1",
	  "sup":"\u2283",
	  "sup1":"\u00B9",
	  "sup2":"\u00B2",
	  "sup3":"\u00B3",
	  "supdot":"\u2ABE",
	  "supdsub":"\u2AD8",
	  "supE":"\u2AC6",
	  "supe":"\u2287",
	  "supedot":"\u2AC4",
	  "Superset":"\u2283",
	  "SupersetEqual":"\u2287",
	  "suphsol":"\u27C9",
	  "suphsub":"\u2AD7",
	  "suplarr":"\u297B",
	  "supmult":"\u2AC2",
	  "supnE":"\u2ACC",
	  "supne":"\u228B",
	  "supplus":"\u2AC0",
	  "Supset":"\u22D1",
	  "supset":"\u2283",
	  "supseteq":"\u2287",
	  "supseteqq":"\u2AC6",
	  "supsetneq":"\u228B",
	  "supsetneqq":"\u2ACC",
	  "supsim":"\u2AC8",
	  "supsub":"\u2AD4",
	  "supsup":"\u2AD6",
	  "swarhk":"\u2926",
	  "swArr":"\u21D9",
	  "swarr":"\u2199",
	  "swarrow":"\u2199",
	  "swnwar":"\u292A",
	  "szlig":"\u00DF",
	  "Tab":"\u0009",
	  "target":"\u2316",
	  "Tau":"\u03A4",
	  "tau":"\u03C4",
	  "tbrk":"\u23B4",
	  "Tcaron":"\u0164",
	  "tcaron":"\u0165",
	  "Tcedil":"\u0162",
	  "tcedil":"\u0163",
	  "Tcy":"\u0422",
	  "tcy":"\u0442",
	  "tdot":"\u20DB",
	  "telrec":"\u2315",
	  "Tfr":"\uD835\uDD17",
	  "tfr":"\uD835\uDD31",
	  "there4":"\u2234",
	  "Therefore":"\u2234",
	  "therefore":"\u2234",
	  "Theta":"\u0398",
	  "theta":"\u03B8",
	  "thetasym":"\u03D1",
	  "thetav":"\u03D1",
	  "thickapprox":"\u2248",
	  "thicksim":"\u223C",
	  "ThickSpace":"\u205F\u200A",
	  "thinsp":"\u2009",
	  "ThinSpace":"\u2009",
	  "thkap":"\u2248",
	  "thksim":"\u223C",
	  "THORN":"\u00DE",
	  "thorn":"\u00FE",
	  "Tilde":"\u223C",
	  "tilde":"\u02DC",
	  "TildeEqual":"\u2243",
	  "TildeFullEqual":"\u2245",
	  "TildeTilde":"\u2248",
	  "times":"\u00D7",
	  "timesb":"\u22A0",
	  "timesbar":"\u2A31",
	  "timesd":"\u2A30",
	  "tint":"\u222D",
	  "toea":"\u2928",
	  "top":"\u22A4",
	  "topbot":"\u2336",
	  "topcir":"\u2AF1",
	  "Topf":"\uD835\uDD4B",
	  "topf":"\uD835\uDD65",
	  "topfork":"\u2ADA",
	  "tosa":"\u2929",
	  "tprime":"\u2034",
	  "TRADE":"\u2122",
	  "trade":"\u2122",
	  "triangle":"\u25B5",
	  "triangledown":"\u25BF",
	  "triangleleft":"\u25C3",
	  "trianglelefteq":"\u22B4",
	  "triangleq":"\u225C",
	  "triangleright":"\u25B9",
	  "trianglerighteq":"\u22B5",
	  "tridot":"\u25EC",
	  "trie":"\u225C",
	  "triminus":"\u2A3A",
	  "TripleDot":"\u20DB",
	  "triplus":"\u2A39",
	  "trisb":"\u29CD",
	  "tritime":"\u2A3B",
	  "trpezium":"\u23E2",
	  "Tscr":"\uD835\uDCAF",
	  "tscr":"\uD835\uDCC9",
	  "TScy":"\u0426",
	  "tscy":"\u0446",
	  "TSHcy":"\u040B",
	  "tshcy":"\u045B",
	  "Tstrok":"\u0166",
	  "tstrok":"\u0167",
	  "twixt":"\u226C",
	  "twoheadleftarrow":"\u219E",
	  "twoheadrightarrow":"\u21A0",
	  "Uacute":"\u00DA",
	  "uacute":"\u00FA",
	  "Uarr":"\u219F",
	  "uArr":"\u21D1",
	  "uarr":"\u2191",
	  "Uarrocir":"\u2949",
	  "Ubrcy":"\u040E",
	  "ubrcy":"\u045E",
	  "Ubreve":"\u016C",
	  "ubreve":"\u016D",
	  "Ucirc":"\u00DB",
	  "ucirc":"\u00FB",
	  "Ucy":"\u0423",
	  "ucy":"\u0443",
	  "udarr":"\u21C5",
	  "Udblac":"\u0170",
	  "udblac":"\u0171",
	  "udhar":"\u296E",
	  "ufisht":"\u297E",
	  "Ufr":"\uD835\uDD18",
	  "ufr":"\uD835\uDD32",
	  "Ugrave":"\u00D9",
	  "ugrave":"\u00F9",
	  "uHar":"\u2963",
	  "uharl":"\u21BF",
	  "uharr":"\u21BE",
	  "uhblk":"\u2580",
	  "ulcorn":"\u231C",
	  "ulcorner":"\u231C",
	  "ulcrop":"\u230F",
	  "ultri":"\u25F8",
	  "Umacr":"\u016A",
	  "umacr":"\u016B",
	  "uml":"\u00A8",
	  "UnderBar":"\u005F",
	  "UnderBrace":"\u23DF",
	  "UnderBracket":"\u23B5",
	  "UnderParenthesis":"\u23DD",
	  "Union":"\u22C3",
	  "UnionPlus":"\u228E",
	  "Uogon":"\u0172",
	  "uogon":"\u0173",
	  "Uopf":"\uD835\uDD4C",
	  "uopf":"\uD835\uDD66",
	  "UpArrow":"\u2191",
	  "Uparrow":"\u21D1",
	  "uparrow":"\u2191",
	  "UpArrowBar":"\u2912",
	  "UpArrowDownArrow":"\u21C5",
	  "UpDownArrow":"\u2195",
	  "Updownarrow":"\u21D5",
	  "updownarrow":"\u2195",
	  "UpEquilibrium":"\u296E",
	  "upharpoonleft":"\u21BF",
	  "upharpoonright":"\u21BE",
	  "uplus":"\u228E",
	  "UpperLeftArrow":"\u2196",
	  "UpperRightArrow":"\u2197",
	  "Upsi":"\u03D2",
	  "upsi":"\u03C5",
	  "upsih":"\u03D2",
	  "Upsilon":"\u03A5",
	  "upsilon":"\u03C5",
	  "UpTee":"\u22A5",
	  "UpTeeArrow":"\u21A5",
	  "upuparrows":"\u21C8",
	  "urcorn":"\u231D",
	  "urcorner":"\u231D",
	  "urcrop":"\u230E",
	  "Uring":"\u016E",
	  "uring":"\u016F",
	  "urtri":"\u25F9",
	  "Uscr":"\uD835\uDCB0",
	  "uscr":"\uD835\uDCCA",
	  "utdot":"\u22F0",
	  "Utilde":"\u0168",
	  "utilde":"\u0169",
	  "utri":"\u25B5",
	  "utrif":"\u25B4",
	  "uuarr":"\u21C8",
	  "Uuml":"\u00DC",
	  "uuml":"\u00FC",
	  "uwangle":"\u29A7",
	  "vangrt":"\u299C",
	  "varepsilon":"\u03F5",
	  "varkappa":"\u03F0",
	  "varnothing":"\u2205",
	  "varphi":"\u03D5",
	  "varpi":"\u03D6",
	  "varpropto":"\u221D",
	  "vArr":"\u21D5",
	  "varr":"\u2195",
	  "varrho":"\u03F1",
	  "varsigma":"\u03C2",
	  "varsubsetneq":"\u228A\uFE00",
	  "varsubsetneqq":"\u2ACB\uFE00",
	  "varsupsetneq":"\u228B\uFE00",
	  "varsupsetneqq":"\u2ACC\uFE00",
	  "vartheta":"\u03D1",
	  "vartriangleleft":"\u22B2",
	  "vartriangleright":"\u22B3",
	  "Vbar":"\u2AEB",
	  "vBar":"\u2AE8",
	  "vBarv":"\u2AE9",
	  "Vcy":"\u0412",
	  "vcy":"\u0432",
	  "VDash":"\u22AB",
	  "Vdash":"\u22A9",
	  "vDash":"\u22A8",
	  "vdash":"\u22A2",
	  "Vdashl":"\u2AE6",
	  "Vee":"\u22C1",
	  "vee":"\u2228",
	  "veebar":"\u22BB",
	  "veeeq":"\u225A",
	  "vellip":"\u22EE",
	  "Verbar":"\u2016",
	  "verbar":"\u007C",
	  "Vert":"\u2016",
	  "vert":"\u007C",
	  "VerticalBar":"\u2223",
	  "VerticalLine":"\u007C",
	  "VerticalSeparator":"\u2758",
	  "VerticalTilde":"\u2240",
	  "VeryThinSpace":"\u200A",
	  "Vfr":"\uD835\uDD19",
	  "vfr":"\uD835\uDD33",
	  "vltri":"\u22B2",
	  "vnsub":"\u2282\u20D2",
	  "vnsup":"\u2283\u20D2",
	  "Vopf":"\uD835\uDD4D",
	  "vopf":"\uD835\uDD67",
	  "vprop":"\u221D",
	  "vrtri":"\u22B3",
	  "Vscr":"\uD835\uDCB1",
	  "vscr":"\uD835\uDCCB",
	  "vsubnE":"\u2ACB\uFE00",
	  "vsubne":"\u228A\uFE00",
	  "vsupnE":"\u2ACC\uFE00",
	  "vsupne":"\u228B\uFE00",
	  "Vvdash":"\u22AA",
	  "vzigzag":"\u299A",
	  "Wcirc":"\u0174",
	  "wcirc":"\u0175",
	  "wedbar":"\u2A5F",
	  "Wedge":"\u22C0",
	  "wedge":"\u2227",
	  "wedgeq":"\u2259",
	  "weierp":"\u2118",
	  "Wfr":"\uD835\uDD1A",
	  "wfr":"\uD835\uDD34",
	  "Wopf":"\uD835\uDD4E",
	  "wopf":"\uD835\uDD68",
	  "wp":"\u2118",
	  "wr":"\u2240",
	  "wreath":"\u2240",
	  "Wscr":"\uD835\uDCB2",
	  "wscr":"\uD835\uDCCC",
	  "xcap":"\u22C2",
	  "xcirc":"\u25EF",
	  "xcup":"\u22C3",
	  "xdtri":"\u25BD",
	  "Xfr":"\uD835\uDD1B",
	  "xfr":"\uD835\uDD35",
	  "xhArr":"\u27FA",
	  "xharr":"\u27F7",
	  "Xi":"\u039E",
	  "xi":"\u03BE",
	  "xlArr":"\u27F8",
	  "xlarr":"\u27F5",
	  "xmap":"\u27FC",
	  "xnis":"\u22FB",
	  "xodot":"\u2A00",
	  "Xopf":"\uD835\uDD4F",
	  "xopf":"\uD835\uDD69",
	  "xoplus":"\u2A01",
	  "xotime":"\u2A02",
	  "xrArr":"\u27F9",
	  "xrarr":"\u27F6",
	  "Xscr":"\uD835\uDCB3",
	  "xscr":"\uD835\uDCCD",
	  "xsqcup":"\u2A06",
	  "xuplus":"\u2A04",
	  "xutri":"\u25B3",
	  "xvee":"\u22C1",
	  "xwedge":"\u22C0",
	  "Yacute":"\u00DD",
	  "yacute":"\u00FD",
	  "YAcy":"\u042F",
	  "yacy":"\u044F",
	  "Ycirc":"\u0176",
	  "ycirc":"\u0177",
	  "Ycy":"\u042B",
	  "ycy":"\u044B",
	  "yen":"\u00A5",
	  "Yfr":"\uD835\uDD1C",
	  "yfr":"\uD835\uDD36",
	  "YIcy":"\u0407",
	  "yicy":"\u0457",
	  "Yopf":"\uD835\uDD50",
	  "yopf":"\uD835\uDD6A",
	  "Yscr":"\uD835\uDCB4",
	  "yscr":"\uD835\uDCCE",
	  "YUcy":"\u042E",
	  "yucy":"\u044E",
	  "Yuml":"\u0178",
	  "yuml":"\u00FF",
	  "Zacute":"\u0179",
	  "zacute":"\u017A",
	  "Zcaron":"\u017D",
	  "zcaron":"\u017E",
	  "Zcy":"\u0417",
	  "zcy":"\u0437",
	  "Zdot":"\u017B",
	  "zdot":"\u017C",
	  "zeetrf":"\u2128",
	  "ZeroWidthSpace":"\u200B",
	  "Zeta":"\u0396",
	  "zeta":"\u03B6",
	  "Zfr":"\u2128",
	  "zfr":"\uD835\uDD37",
	  "ZHcy":"\u0416",
	  "zhcy":"\u0436",
	  "zigrarr":"\u21DD",
	  "Zopf":"\u2124",
	  "zopf":"\uD835\uDD6B",
	  "Zscr":"\uD835\uDCB5",
	  "zscr":"\uD835\uDCCF",
	  "zwj":"\u200D",
	  "zwnj":"\u200C"
	};


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Local dependencies
	 */

	var has             = __webpack_require__(141).has;
	var unescapeMd      = __webpack_require__(141).unescapeMd;
	var replaceEntities = __webpack_require__(141).replaceEntities;
	var escapeHtml      = __webpack_require__(141).escapeHtml;

	/**
	 * Renderer rules cache
	 */

	var rules = {};

	/**
	 * Blockquotes
	 */

	rules.blockquote_open = function (/* tokens, idx, options, env */) {
	  return '<blockquote>\n';
	};

	rules.blockquote_close = function (tokens, idx /*, options, env */) {
	  return '</blockquote>' + getBreak(tokens, idx);
	};

	/**
	 * Code
	 */

	rules.code = function (tokens, idx /*, options, env */) {
	  if (tokens[idx].block) {
	    return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>' + getBreak(tokens, idx);
	  }
	  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
	};

	/**
	 * Fenced code blocks
	 */

	rules.fence = function (tokens, idx, options, env, self) {
	  var token = tokens[idx];
	  var langClass = '';
	  var langPrefix = options.langPrefix;
	  var langName = '', fenceName;
	  var highlighted;

	  if (token.params) {

	    //
	    // ```foo bar
	    //
	    // Try custom renderer "foo" first. That will simplify overwrite
	    // for diagrams, latex, and any other fenced block with custom look
	    //

	    fenceName = token.params.split(/\s+/g)[0];

	    if (has(self.rules.fence_custom, fenceName)) {
	      return self.rules.fence_custom[fenceName](tokens, idx, options, env, self);
	    }

	    langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
	    langClass = ' class="' + langPrefix + langName + '"';
	  }

	  if (options.highlight) {
	    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
	  } else {
	    highlighted = escapeHtml(token.content);
	  }

	  return '<pre><code' + langClass + '>'
	        + highlighted
	        + '</code></pre>'
	        + getBreak(tokens, idx);
	};

	rules.fence_custom = {};

	/**
	 * Headings
	 */

	rules.heading_open = function (tokens, idx /*, options, env */) {
	  return '<h' + tokens[idx].hLevel + '>';
	};
	rules.heading_close = function (tokens, idx /*, options, env */) {
	  return '</h' + tokens[idx].hLevel + '>\n';
	};

	/**
	 * Horizontal rules
	 */

	rules.hr = function (tokens, idx, options /*, env */) {
	  return (options.xhtmlOut ? '<hr />' : '<hr>') + getBreak(tokens, idx);
	};

	/**
	 * Bullets
	 */

	rules.bullet_list_open = function (/* tokens, idx, options, env */) {
	  return '<ul>\n';
	};
	rules.bullet_list_close = function (tokens, idx /*, options, env */) {
	  return '</ul>' + getBreak(tokens, idx);
	};

	/**
	 * List items
	 */

	rules.list_item_open = function (/* tokens, idx, options, env */) {
	  return '<li>';
	};
	rules.list_item_close = function (/* tokens, idx, options, env */) {
	  return '</li>\n';
	};

	/**
	 * Ordered list items
	 */

	rules.ordered_list_open = function (tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  var order = token.order > 1 ? ' start="' + token.order + '"' : '';
	  return '<ol' + order + '>\n';
	};
	rules.ordered_list_close = function (tokens, idx /*, options, env */) {
	  return '</ol>' + getBreak(tokens, idx);
	};

	/**
	 * Paragraphs
	 */

	rules.paragraph_open = function (tokens, idx /*, options, env */) {
	  return tokens[idx].tight ? '' : '<p>';
	};
	rules.paragraph_close = function (tokens, idx /*, options, env */) {
	  var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === 'inline' && !tokens[idx - 1].content);
	  return (tokens[idx].tight ? '' : '</p>') + (addBreak ? getBreak(tokens, idx) : '');
	};

	/**
	 * Links
	 */

	rules.link_open = function (tokens, idx /*, options, env */) {
	  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
	  return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + '>';
	};
	rules.link_close = function (/* tokens, idx, options, env */) {
	  return '</a>';
	};

	/**
	 * Images
	 */

	rules.image = function (tokens, idx, options /*, env */) {
	  var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
	  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
	  var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(tokens[idx].alt)) : '') + '"';
	  var suffix = options.xhtmlOut ? ' /' : '';
	  return '<img' + src + alt + title + suffix + '>';
	};

	/**
	 * Tables
	 */

	rules.table_open = function (/* tokens, idx, options, env */) {
	  return '<table>\n';
	};
	rules.table_close = function (/* tokens, idx, options, env */) {
	  return '</table>\n';
	};
	rules.thead_open = function (/* tokens, idx, options, env */) {
	  return '<thead>\n';
	};
	rules.thead_close = function (/* tokens, idx, options, env */) {
	  return '</thead>\n';
	};
	rules.tbody_open = function (/* tokens, idx, options, env */) {
	  return '<tbody>\n';
	};
	rules.tbody_close = function (/* tokens, idx, options, env */) {
	  return '</tbody>\n';
	};
	rules.tr_open = function (/* tokens, idx, options, env */) {
	  return '<tr>';
	};
	rules.tr_close = function (/* tokens, idx, options, env */) {
	  return '</tr>\n';
	};
	rules.th_open = function (tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  return '<th'
	    + (token.align ? ' style="text-align:' + token.align + '"' : '')
	    + '>';
	};
	rules.th_close = function (/* tokens, idx, options, env */) {
	  return '</th>';
	};
	rules.td_open = function (tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  return '<td'
	    + (token.align ? ' style="text-align:' + token.align + '"' : '')
	    + '>';
	};
	rules.td_close = function (/* tokens, idx, options, env */) {
	  return '</td>';
	};

	/**
	 * Bold
	 */

	rules.strong_open = function (/* tokens, idx, options, env */) {
	  return '<strong>';
	};
	rules.strong_close = function (/* tokens, idx, options, env */) {
	  return '</strong>';
	};

	/**
	 * Italicize
	 */

	rules.em_open = function (/* tokens, idx, options, env */) {
	  return '<em>';
	};
	rules.em_close = function (/* tokens, idx, options, env */) {
	  return '</em>';
	};

	/**
	 * Strikethrough
	 */

	rules.del_open = function (/* tokens, idx, options, env */) {
	  return '<del>';
	};
	rules.del_close = function (/* tokens, idx, options, env */) {
	  return '</del>';
	};

	/**
	 * Insert
	 */

	rules.ins_open = function (/* tokens, idx, options, env */) {
	  return '<ins>';
	};
	rules.ins_close = function (/* tokens, idx, options, env */) {
	  return '</ins>';
	};

	/**
	 * Highlight
	 */

	rules.mark_open = function (/* tokens, idx, options, env */) {
	  return '<mark>';
	};
	rules.mark_close = function (/* tokens, idx, options, env */) {
	  return '</mark>';
	};

	/**
	 * Super- and sub-script
	 */

	rules.sub = function (tokens, idx /*, options, env */) {
	  return '<sub>' + escapeHtml(tokens[idx].content) + '</sub>';
	};
	rules.sup = function (tokens, idx /*, options, env */) {
	  return '<sup>' + escapeHtml(tokens[idx].content) + '</sup>';
	};

	/**
	 * Breaks
	 */

	rules.hardbreak = function (tokens, idx, options /*, env */) {
	  return options.xhtmlOut ? '<br />\n' : '<br>\n';
	};
	rules.softbreak = function (tokens, idx, options /*, env */) {
	  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
	};

	/**
	 * Text
	 */

	rules.text = function (tokens, idx /*, options, env */) {
	  return escapeHtml(tokens[idx].content);
	};

	/**
	 * Content
	 */

	rules.htmlblock = function (tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};
	rules.htmltag = function (tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};

	/**
	 * Abbreviations, initialism
	 */

	rules.abbr_open = function (tokens, idx /*, options, env */) {
	  return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
	};
	rules.abbr_close = function (/* tokens, idx, options, env */) {
	  return '</abbr>';
	};

	/**
	 * Footnotes
	 */

	rules.footnote_ref = function (tokens, idx) {
	  var n = Number(tokens[idx].id + 1).toString();
	  var id = 'fnref' + n;
	  if (tokens[idx].subId > 0) {
	    id += ':' + tokens[idx].subId;
	  }
	  return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
	};
	rules.footnote_block_open = function (tokens, idx, options) {
	  var hr = options.xhtmlOut
	    ? '<hr class="footnotes-sep" />\n'
	    : '<hr class="footnotes-sep">\n';
	  return  hr + '<section class="footnotes">\n<ol class="footnotes-list">\n';
	};
	rules.footnote_block_close = function () {
	  return '</ol>\n</section>\n';
	};
	rules.footnote_open = function (tokens, idx) {
	  var id = Number(tokens[idx].id + 1).toString();
	  return '<li id="fn' + id + '"  class="footnote-item">';
	};
	rules.footnote_close = function () {
	  return '</li>\n';
	};
	rules.footnote_anchor = function (tokens, idx) {
	  var n = Number(tokens[idx].id + 1).toString();
	  var id = 'fnref' + n;
	  if (tokens[idx].subId > 0) {
	    id += ':' + tokens[idx].subId;
	  }
	  return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
	};

	/**
	 * Definition lists
	 */

	rules.dl_open = function() {
	  return '<dl>\n';
	};
	rules.dt_open = function() {
	  return '<dt>';
	};
	rules.dd_open = function() {
	  return '<dd>';
	};
	rules.dl_close = function() {
	  return '</dl>\n';
	};
	rules.dt_close = function() {
	  return '</dt>\n';
	};
	rules.dd_close = function() {
	  return '</dd>\n';
	};

	/**
	 * Helper functions
	 */

	function nextToken(tokens, idx) {
	  if (++idx >= tokens.length - 2) {
	    return idx;
	  }
	  if ((tokens[idx].type === 'paragraph_open' && tokens[idx].tight) &&
	      (tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0) &&
	      (tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight)) {
	    return nextToken(tokens, idx + 2);
	  }
	  return idx;
	}

	/**
	 * Check to see if `\n` is needed before the next token.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Number} `idx`
	 * @return {String} Empty string or newline
	 * @api private
	 */

	var getBreak = rules.getBreak = function getBreak(tokens, idx) {
	  idx = nextToken(tokens, idx);
	  if (idx < tokens.length && tokens[idx].type === 'list_item_close') {
	    return '';
	  }
	  return '\n';
	};

	/**
	 * Expose `rules`
	 */

	module.exports = rules;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	module.exports = function footnote_block(state) {
	  var i, l, j, t, lastParagraph, list, tokens, current, currentLabel,
	      level = 0,
	      insideRef = false,
	      refTokens = {};

	  if (!state.env.footnotes) { return; }

	  state.tokens = state.tokens.filter(function(tok) {
	    if (tok.type === 'footnote_reference_open') {
	      insideRef = true;
	      current = [];
	      currentLabel = tok.label;
	      return false;
	    }
	    if (tok.type === 'footnote_reference_close') {
	      insideRef = false;
	      // prepend ':' to avoid conflict with Object.prototype members
	      refTokens[':' + currentLabel] = current;
	      return false;
	    }
	    if (insideRef) { current.push(tok); }
	    return !insideRef;
	  });

	  if (!state.env.footnotes.list) { return; }
	  list = state.env.footnotes.list;

	  state.tokens.push({
	    type: 'footnote_block_open',
	    level: level++
	  });
	  for (i = 0, l = list.length; i < l; i++) {
	    state.tokens.push({
	      type: 'footnote_open',
	      id: i,
	      level: level++
	    });

	    if (list[i].tokens) {
	      tokens = [];
	      tokens.push({
	        type: 'paragraph_open',
	        tight: false,
	        level: level++
	      });
	      tokens.push({
	        type: 'inline',
	        content: '',
	        level: level,
	        children: list[i].tokens
	      });
	      tokens.push({
	        type: 'paragraph_close',
	        tight: false,
	        level: --level
	      });
	    } else if (list[i].label) {
	      tokens = refTokens[':' + list[i].label];
	    }

	    state.tokens = state.tokens.concat(tokens);
	    if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
	      lastParagraph = state.tokens.pop();
	    } else {
	      lastParagraph = null;
	    }

	    t = list[i].count > 0 ? list[i].count : 1;
	    for (j = 0; j < t; j++) {
	      state.tokens.push({
	        type: 'footnote_anchor',
	        id: i,
	        subId: j,
	        level: level
	      });
	    }

	    if (lastParagraph) {
	      state.tokens.push(lastParagraph);
	    }

	    state.tokens.push({
	      type: 'footnote_close',
	      level: --level
	    });
	  }
	  state.tokens.push({
	    type: 'footnote_block_close',
	    level: --level
	  });
	};


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function block(state) {

	  if (state.inlineMode) {
	    state.tokens.push({
	      type: 'inline',
	      content: state.src.replace(/\n/g, ' ').trim(),
	      level: 0,
	      lines: [ 0, 1 ],
	      children: []
	    });

	  } else {
	    state.block.parse(state.src, state.options, state.env, state.tokens);
	  }
	};


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// Parse abbreviation definitions, i.e. `*[abbr]: description`
	//

	'use strict';


	var StateInline    = __webpack_require__(160);
	var parseLinkLabel = __webpack_require__(190);


	function parseAbbr(str, parserInline, options, env) {
	  var state, labelEnd, pos, max, label, title;

	  if (str.charCodeAt(0) !== 0x2A/* * */) { return -1; }
	  if (str.charCodeAt(1) !== 0x5B/* [ */) { return -1; }

	  if (str.indexOf(']:') === -1) { return -1; }

	  state = new StateInline(str, parserInline, options, env, []);
	  labelEnd = parseLinkLabel(state, 1);

	  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

	  max = state.posMax;

	  // abbr title is always one line, so looking for ending "\n" here
	  for (pos = labelEnd + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x0A) { break; }
	  }

	  label = str.slice(2, labelEnd);
	  title = str.slice(labelEnd + 2, pos).trim();
	  if (title.length === 0) { return -1; }
	  if (!env.abbreviations) { env.abbreviations = {}; }
	  // prepend ':' to avoid conflict with Object.prototype members
	  if (typeof env.abbreviations[':' + label] === 'undefined') {
	    env.abbreviations[':' + label] = title;
	  }

	  return pos;
	}

	module.exports = function abbr(state) {
	  var tokens = state.tokens, i, l, content, pos;

	  if (state.inlineMode) {
	    return;
	  }

	  // Parse inlines
	  for (i = 1, l = tokens.length - 1; i < l; i++) {
	    if (tokens[i - 1].type === 'paragraph_open' &&
	        tokens[i].type === 'inline' &&
	        tokens[i + 1].type === 'paragraph_close') {

	      content = tokens[i].content;
	      while (content.length) {
	        pos = parseAbbr(content, state.inline, state.options, state.env);
	        if (pos < 0) { break; }
	        content = content.slice(pos).trim();
	      }

	      tokens[i].content = content;
	      if (!content.length) {
	        tokens[i - 1].tight = true;
	        tokens[i + 1].tight = true;
	      }
	    }
	  }
	};


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	var StateInline          = __webpack_require__(160);
	var parseLinkLabel       = __webpack_require__(190);
	var parseLinkDestination = __webpack_require__(191);
	var parseLinkTitle       = __webpack_require__(192);
	var normalizeReference   = __webpack_require__(193);


	function parseReference(str, parser, options, env) {
	  var state, labelEnd, pos, max, code, start, href, title, label;

	  if (str.charCodeAt(0) !== 0x5B/* [ */) { return -1; }

	  if (str.indexOf(']:') === -1) { return -1; }

	  state = new StateInline(str, parser, options, env, []);
	  labelEnd = parseLinkLabel(state, 0);

	  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

	  max = state.posMax;

	  // [label]:   destination   'title'
	  //         ^^^ skip optional whitespace here
	  for (pos = labelEnd + 2; pos < max; pos++) {
	    code = state.src.charCodeAt(pos);
	    if (code !== 0x20 && code !== 0x0A) { break; }
	  }

	  // [label]:   destination   'title'
	  //            ^^^^^^^^^^^ parse this
	  if (!parseLinkDestination(state, pos)) { return -1; }
	  href = state.linkContent;
	  pos = state.pos;

	  // [label]:   destination   'title'
	  //                       ^^^ skipping those spaces
	  start = pos;
	  for (pos = pos + 1; pos < max; pos++) {
	    code = state.src.charCodeAt(pos);
	    if (code !== 0x20 && code !== 0x0A) { break; }
	  }

	  // [label]:   destination   'title'
	  //                          ^^^^^^^ parse this
	  if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
	    title = state.linkContent;
	    pos = state.pos;
	  } else {
	    title = '';
	    pos = start;
	  }

	  // ensure that the end of the line is empty
	  while (pos < max && state.src.charCodeAt(pos) === 0x20/* space */) { pos++; }
	  if (pos < max && state.src.charCodeAt(pos) !== 0x0A) { return -1; }

	  label = normalizeReference(str.slice(1, labelEnd));
	  if (typeof env.references[label] === 'undefined') {
	    env.references[label] = { title: title, href: href };
	  }

	  return pos;
	}


	module.exports = function references(state) {
	  var tokens = state.tokens, i, l, content, pos;

	  state.env.references = state.env.references || {};

	  if (state.inlineMode) {
	    return;
	  }

	  // Scan definitions in paragraph inlines
	  for (i = 1, l = tokens.length - 1; i < l; i++) {
	    if (tokens[i].type === 'inline' &&
	        tokens[i - 1].type === 'paragraph_open' &&
	        tokens[i + 1].type === 'paragraph_close') {

	      content = tokens[i].content;
	      while (content.length) {
	        pos = parseReference(content, state.inline, state.options, state.env);
	        if (pos < 0) { break; }
	        content = content.slice(pos).trim();
	      }

	      tokens[i].content = content;
	      if (!content.length) {
	        tokens[i - 1].tight = true;
	        tokens[i + 1].tight = true;
	      }
	    }
	  }
	};


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function inline(state) {
	  var tokens = state.tokens, tok, i, l;

	  // Parse inlines
	  for (i = 0, l = tokens.length; i < l; i++) {
	    tok = tokens[i];
	    if (tok.type === 'inline') {
	      state.inline.parse(tok.content, state.options, state.env, tok.children);
	    }
	  }
	};


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// Enclose abbreviations in <abbr> tags
	//
	'use strict';


	var PUNCT_CHARS = ' \n()[]\'".,!?-';


	// from Google closure library
	// http://closure-library.googlecode.com/git-history/docs/local_closure_goog_string_string.js.source.html#line1021
	function regEscape(s) {
	  return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
	}


	module.exports = function abbr2(state) {
	  var i, j, l, tokens, token, text, nodes, pos, level, reg, m, regText,
	      blockTokens = state.tokens;

	  if (!state.env.abbreviations) { return; }
	  if (!state.env.abbrRegExp) {
	    regText = '(^|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])'
	            + '(' + Object.keys(state.env.abbreviations).map(function (x) {
	                      return x.substr(1);
	                    }).sort(function (a, b) {
	                      return b.length - a.length;
	                    }).map(regEscape).join('|') + ')'
	            + '($|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])';
	    state.env.abbrRegExp = new RegExp(regText, 'g');
	  }
	  reg = state.env.abbrRegExp;

	  for (j = 0, l = blockTokens.length; j < l; j++) {
	    if (blockTokens[j].type !== 'inline') { continue; }
	    tokens = blockTokens[j].children;

	    // We scan from the end, to keep position when new tags added.
	    for (i = tokens.length - 1; i >= 0; i--) {
	      token = tokens[i];
	      if (token.type !== 'text') { continue; }

	      pos = 0;
	      text = token.content;
	      reg.lastIndex = 0;
	      level = token.level;
	      nodes = [];

	      while ((m = reg.exec(text))) {
	        if (reg.lastIndex > pos) {
	          nodes.push({
	            type: 'text',
	            content: text.slice(pos, m.index + m[1].length),
	            level: level
	          });
	        }

	        nodes.push({
	          type: 'abbr_open',
	          title: state.env.abbreviations[':' + m[2]],
	          level: level++
	        });
	        nodes.push({
	          type: 'text',
	          content: m[2],
	          level: level
	        });
	        nodes.push({
	          type: 'abbr_close',
	          level: --level
	        });
	        pos = reg.lastIndex - m[3].length;
	      }

	      if (!nodes.length) { continue; }

	      if (pos < text.length) {
	        nodes.push({
	          type: 'text',
	          content: text.slice(pos),
	          level: level
	        });
	      }

	      // replace current node
	      blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
	    }
	  }
	};


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// Simple typographical replacements
	//
	'use strict';

	// TODO:
	// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
	// - miltiplication 2 x 4 -> 2 × 4

	var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

	var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
	var SCOPED_ABBR = {
	  'c': '©',
	  'r': '®',
	  'p': '§',
	  'tm': '™'
	};

	function replaceScopedAbbr(str) {
	  if (str.indexOf('(') < 0) { return str; }

	  return str.replace(SCOPED_ABBR_RE, function(match, name) {
	    return SCOPED_ABBR[name.toLowerCase()];
	  });
	}


	module.exports = function replace(state) {
	  var i, token, text, inlineTokens, blkIdx;

	  if (!state.options.typographer) { return; }

	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

	    if (state.tokens[blkIdx].type !== 'inline') { continue; }

	    inlineTokens = state.tokens[blkIdx].children;

	    for (i = inlineTokens.length - 1; i >= 0; i--) {
	      token = inlineTokens[i];
	      if (token.type === 'text') {
	        text = token.content;

	        text = replaceScopedAbbr(text);

	        if (RARE_RE.test(text)) {
	          text = text
	            .replace(/\+-/g, '±')
	            // .., ..., ....... -> …
	            // but ?..... & !..... -> ?.. & !..
	            .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
	            .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
	            // em-dash
	            .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
	            // en-dash
	            .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
	            .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
	        }

	        token.content = text;
	      }
	    }
	  }
	};


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// Convert straight quotation marks to typographic ones
	//
	'use strict';


	var QUOTE_TEST_RE = /['"]/;
	var QUOTE_RE = /['"]/g;
	var PUNCT_RE = /[-\s()\[\]]/;
	var APOSTROPHE = '’';

	// This function returns true if the character at `pos`
	// could be inside a word.
	function isLetter(str, pos) {
	  if (pos < 0 || pos >= str.length) { return false; }
	  return !PUNCT_RE.test(str[pos]);
	}


	function replaceAt(str, index, ch) {
	  return str.substr(0, index) + ch + str.substr(index + 1);
	}


	module.exports = function smartquotes(state) {
	  /*eslint max-depth:0*/
	  var i, token, text, t, pos, max, thisLevel, lastSpace, nextSpace, item,
	      canOpen, canClose, j, isSingle, blkIdx, tokens,
	      stack;

	  if (!state.options.typographer) { return; }

	  stack = [];

	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

	    if (state.tokens[blkIdx].type !== 'inline') { continue; }

	    tokens = state.tokens[blkIdx].children;
	    stack.length = 0;

	    for (i = 0; i < tokens.length; i++) {
	      token = tokens[i];

	      if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) { continue; }

	      thisLevel = tokens[i].level;

	      for (j = stack.length - 1; j >= 0; j--) {
	        if (stack[j].level <= thisLevel) { break; }
	      }
	      stack.length = j + 1;

	      text = token.content;
	      pos = 0;
	      max = text.length;

	      /*eslint no-labels:0,block-scoped-var:0*/
	      OUTER:
	      while (pos < max) {
	        QUOTE_RE.lastIndex = pos;
	        t = QUOTE_RE.exec(text);
	        if (!t) { break; }

	        lastSpace = !isLetter(text, t.index - 1);
	        pos = t.index + 1;
	        isSingle = (t[0] === "'");
	        nextSpace = !isLetter(text, pos);

	        if (!nextSpace && !lastSpace) {
	          // middle of word
	          if (isSingle) {
	            token.content = replaceAt(token.content, t.index, APOSTROPHE);
	          }
	          continue;
	        }

	        canOpen = !nextSpace;
	        canClose = !lastSpace;

	        if (canClose) {
	          // this could be a closing quote, rewind the stack to get a match
	          for (j = stack.length - 1; j >= 0; j--) {
	            item = stack[j];
	            if (stack[j].level < thisLevel) { break; }
	            if (item.single === isSingle && stack[j].level === thisLevel) {
	              item = stack[j];
	              if (isSingle) {
	                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]);
	                token.content = replaceAt(token.content, t.index, state.options.quotes[3]);
	              } else {
	                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]);
	                token.content = replaceAt(token.content, t.index, state.options.quotes[1]);
	              }
	              stack.length = j;
	              continue OUTER;
	            }
	          }
	        }

	        if (canOpen) {
	          stack.push({
	            token: i,
	            pos: t.index,
	            single: isSingle,
	            level: thisLevel
	          });
	        } else if (canClose && isSingle) {
	          token.content = replaceAt(token.content, t.index, APOSTROPHE);
	        }
	      }
	    }
	  }
	};


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// Replace link-like texts with link nodes.
	//
	// Currently restricted by `inline.validateLink()` to http/https/ftp
	//
	'use strict';


	var Autolinker = __webpack_require__(198);


	var LINK_SCAN_RE = /www|@|\:\/\//;


	function isLinkOpen(str) {
	  return /^<a[>\s]/i.test(str);
	}
	function isLinkClose(str) {
	  return /^<\/a\s*>/i.test(str);
	}

	// Stupid fabric to avoid singletons, for thread safety.
	// Required for engines like Nashorn.
	//
	function createLinkifier() {
	  var links = [];
	  var autolinker = new Autolinker({
	    stripPrefix: false,
	    url: true,
	    email: true,
	    twitter: false,
	    replaceFn: function (autolinker, match) {
	      // Only collect matched strings but don't change anything.
	      switch (match.getType()) {
	        /*eslint default-case:0*/
	        case 'url':
	          links.push({
	            text: match.matchedText,
	            url: match.getUrl()
	          });
	          break;
	        case 'email':
	          links.push({
	            text: match.matchedText,
	            // normalize email protocol
	            url: 'mailto:' + match.getEmail().replace(/^mailto:/i, '')
	          });
	          break;
	      }
	      return false;
	    }
	  });

	  return {
	    links: links,
	    autolinker: autolinker
	  };
	}


	module.exports = function linkify(state) {
	  var i, j, l, tokens, token, text, nodes, ln, pos, level, htmlLinkLevel,
	      blockTokens = state.tokens,
	      linkifier = null, links, autolinker;

	  if (!state.options.linkify) { return; }

	  for (j = 0, l = blockTokens.length; j < l; j++) {
	    if (blockTokens[j].type !== 'inline') { continue; }
	    tokens = blockTokens[j].children;

	    htmlLinkLevel = 0;

	    // We scan from the end, to keep position when new tags added.
	    // Use reversed logic in links start/end match
	    for (i = tokens.length - 1; i >= 0; i--) {
	      token = tokens[i];

	      // Skip content of markdown links
	      if (token.type === 'link_close') {
	        i--;
	        while (tokens[i].level !== token.level && tokens[i].type !== 'link_open') {
	          i--;
	        }
	        continue;
	      }

	      // Skip content of html tag links
	      if (token.type === 'htmltag') {
	        if (isLinkOpen(token.content) && htmlLinkLevel > 0) {
	          htmlLinkLevel--;
	        }
	        if (isLinkClose(token.content)) {
	          htmlLinkLevel++;
	        }
	      }
	      if (htmlLinkLevel > 0) { continue; }

	      if (token.type === 'text' && LINK_SCAN_RE.test(token.content)) {

	        // Init linkifier in lazy manner, only if required.
	        if (!linkifier) {
	          linkifier = createLinkifier();
	          links = linkifier.links;
	          autolinker = linkifier.autolinker;
	        }

	        text = token.content;
	        links.length = 0;
	        autolinker.link(text);

	        if (!links.length) { continue; }

	        // Now split string to nodes
	        nodes = [];
	        level = token.level;

	        for (ln = 0; ln < links.length; ln++) {

	          if (!state.inline.validateLink(links[ln].url)) { continue; }

	          pos = text.indexOf(links[ln].text);

	          if (pos) {
	            level = level;
	            nodes.push({
	              type: 'text',
	              content: text.slice(0, pos),
	              level: level
	            });
	          }
	          nodes.push({
	            type: 'link_open',
	            href: links[ln].url,
	            title: '',
	            level: level++
	          });
	          nodes.push({
	            type: 'text',
	            content: links[ln].text,
	            level: level
	          });
	          nodes.push({
	            type: 'link_close',
	            level: --level
	          });
	          text = text.slice(pos + links[ln].text.length);
	        }
	        if (text.length) {
	          nodes.push({
	            type: 'text',
	            content: text,
	            level: level
	          });
	        }

	        // replace current node
	        blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
	      }
	    }
	  }
	};


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// Inline parser state

	'use strict';


	function StateInline(src, parserInline, options, env, outTokens) {
	  this.src = src;
	  this.env = env;
	  this.options = options;
	  this.parser = parserInline;
	  this.tokens = outTokens;
	  this.pos = 0;
	  this.posMax = this.src.length;
	  this.level = 0;
	  this.pending = '';
	  this.pendingLevel = 0;

	  this.cache = [];        // Stores { start: end } pairs. Useful for backtrack
	                          // optimization of pairs parse (emphasis, strikes).

	  // Link parser state vars

	  this.isInLabel = false; // Set true when seek link label - we should disable
	                          // "paired" rules (emphasis, strikes) to not skip
	                          // tailing `]`

	  this.linkLevel = 0;     // Increment for each nesting link. Used to prevent
	                          // nesting in definitions

	  this.linkContent = '';  // Temporary storage for link url

	  this.labelUnmatchedScopes = 0; // Track unpaired `[` for link labels
	                                 // (backtrack optimization)
	}


	// Flush pending text
	//
	StateInline.prototype.pushPending = function () {
	  this.tokens.push({
	    type: 'text',
	    content: this.pending,
	    level: this.pendingLevel
	  });
	  this.pending = '';
	};


	// Push new token to "stream".
	// If pending text exists - flush it as text token
	//
	StateInline.prototype.push = function (token) {
	  if (this.pending) {
	    this.pushPending();
	  }

	  this.tokens.push(token);
	  this.pendingLevel = this.level;
	};


	// Store value to cache.
	// !!! Implementation has parser-specific optimizations
	// !!! keys MUST be integer, >= 0; values MUST be integer, > 0
	//
	StateInline.prototype.cacheSet = function (key, val) {
	  for (var i = this.cache.length; i <= key; i++) {
	    this.cache.push(0);
	  }

	  this.cache[key] = val;
	};


	// Get cache value
	//
	StateInline.prototype.cacheGet = function (key) {
	  return key < this.cache.length ? this.cache[key] : 0;
	};


	module.exports = StateInline;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// Skip text characters for text token, place those to pending buffer
	// and increment current pos

	'use strict';


	// Rule to skip pure text
	// '{}$%@~+=:' reserved for extentions

	function isTerminatorChar(ch) {
	  switch (ch) {
	    case 0x0A/* \n */:
	    case 0x5C/* \ */:
	    case 0x60/* ` */:
	    case 0x2A/* * */:
	    case 0x5F/* _ */:
	    case 0x5E/* ^ */:
	    case 0x5B/* [ */:
	    case 0x5D/* ] */:
	    case 0x21/* ! */:
	    case 0x26/* & */:
	    case 0x3C/* < */:
	    case 0x3E/* > */:
	    case 0x7B/* { */:
	    case 0x7D/* } */:
	    case 0x24/* $ */:
	    case 0x25/* % */:
	    case 0x40/* @ */:
	    case 0x7E/* ~ */:
	    case 0x2B/* + */:
	    case 0x3D/* = */:
	    case 0x3A/* : */:
	      return true;
	    default:
	      return false;
	  }
	}

	module.exports = function text(state, silent) {
	  var pos = state.pos;

	  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
	    pos++;
	  }

	  if (pos === state.pos) { return false; }

	  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

	  state.pos = pos;

	  return true;
	};


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// Proceess '\n'

	'use strict';

	module.exports = function newline(state, silent) {
	  var pmax, max, pos = state.pos;

	  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

	  pmax = state.pending.length - 1;
	  max = state.posMax;

	  // '  \n' -> hardbreak
	  // Lookup in pending chars is bad practice! Don't copy to other rules!
	  // Pending string is stored in concat mode, indexed lookups will cause
	  // convertion to flat mode.
	  if (!silent) {
	    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
	      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
	        state.pending = state.pending.replace(/ +$/, '');
	        state.push({
	          type: 'hardbreak',
	          level: state.level
	        });
	      } else {
	        state.pending = state.pending.slice(0, -1);
	        state.push({
	          type: 'softbreak',
	          level: state.level
	        });
	      }

	    } else {
	      state.push({
	        type: 'softbreak',
	        level: state.level
	      });
	    }
	  }

	  pos++;

	  // skip heading spaces for next line
	  while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

	  state.pos = pos;
	  return true;
	};


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// Proceess escaped chars and hardbreaks

	'use strict';

	var ESCAPED = [];

	for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

	'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
	  .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


	module.exports = function escape(state, silent) {
	  var ch, pos = state.pos, max = state.posMax;

	  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

	  pos++;

	  if (pos < max) {
	    ch = state.src.charCodeAt(pos);

	    if (ch < 256 && ESCAPED[ch] !== 0) {
	      if (!silent) { state.pending += state.src[pos]; }
	      state.pos += 2;
	      return true;
	    }

	    if (ch === 0x0A) {
	      if (!silent) {
	        state.push({
	          type: 'hardbreak',
	          level: state.level
	        });
	      }

	      pos++;
	      // skip leading whitespaces from next line
	      while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

	      state.pos = pos;
	      return true;
	    }
	  }

	  if (!silent) { state.pending += '\\'; }
	  state.pos++;
	  return true;
	};


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// Parse backticks

	'use strict';

	module.exports = function backticks(state, silent) {
	  var start, max, marker, matchStart, matchEnd,
	      pos = state.pos,
	      ch = state.src.charCodeAt(pos);

	  if (ch !== 0x60/* ` */) { return false; }

	  start = pos;
	  pos++;
	  max = state.posMax;

	  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

	  marker = state.src.slice(start, pos);

	  matchStart = matchEnd = pos;

	  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
	    matchEnd = matchStart + 1;

	    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

	    if (matchEnd - matchStart === marker.length) {
	      if (!silent) {
	        state.push({
	          type: 'code',
	          content: state.src.slice(pos, matchStart)
	                              .replace(/[ \n]+/g, ' ')
	                              .trim(),
	          block: false,
	          level: state.level
	        });
	      }
	      state.pos = matchEnd;
	      return true;
	    }
	  }

	  if (!silent) { state.pending += marker; }
	  state.pos += marker.length;
	  return true;
	};


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// Process ~~deleted text~~

	'use strict';

	module.exports = function del(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;

	  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x7E/* ~ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);

	  if (lastChar === 0x7E/* ~ */) { return false; }
	  if (nextChar === 0x7E/* ~ */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x7E/* ~ */) { pos++; }
	  if (pos > start + 3) {
	    // sequence of 4+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }

	  state.pos = start + 2;
	  stack = 1;

	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x7E/* ~ */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x7E/* ~ */ && lastChar !== 0x7E/* ~ */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '~~'
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '~~'
	            stack++;
	          } // else {
	            //  // standalone ' ~~ ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;

	  if (!silent) {
	    state.push({ type: 'del_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'del_close', level: --state.level });
	  }

	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// Process ++inserted text++

	'use strict';

	module.exports = function ins(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;

	  if (state.src.charCodeAt(start) !== 0x2B/* + */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x2B/* + */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);

	  if (lastChar === 0x2B/* + */) { return false; }
	  if (nextChar === 0x2B/* + */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x2B/* + */) { pos++; }
	  if (pos !== start + 2) {
	    // sequence of 3+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }

	  state.pos = start + 2;
	  stack = 1;

	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x2B/* + */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x2B/* + */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x2B/* + */ && lastChar !== 0x2B/* + */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '++'
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '++'
	            stack++;
	          } // else {
	            //  // standalone ' ++ ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;

	  if (!silent) {
	    state.push({ type: 'ins_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'ins_close', level: --state.level });
	  }

	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// Process ==highlighted text==

	'use strict';

	module.exports = function del(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;

	  if (state.src.charCodeAt(start) !== 0x3D/* = */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x3D/* = */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);

	  if (lastChar === 0x3D/* = */) { return false; }
	  if (nextChar === 0x3D/* = */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x3D/* = */) { pos++; }
	  if (pos !== start + 2) {
	    // sequence of 3+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }

	  state.pos = start + 2;
	  stack = 1;

	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x3D/* = */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x3D/* = */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x3D/* = */ && lastChar !== 0x3D/* = */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '=='
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '=='
	            stack++;
	          } // else {
	            //  // standalone ' == ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;

	  if (!silent) {
	    state.push({ type: 'mark_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'mark_close', level: --state.level });
	  }

	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// Process *this* and _that_

	'use strict';


	function isAlphaNum(code) {
	  return (code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) ||
	         (code >= 0x41 /* A */ && code <= 0x5A /* Z */) ||
	         (code >= 0x61 /* a */ && code <= 0x7A /* z */);
	}

	// parse sequence of emphasis markers,
	// "start" should point at a valid marker
	function scanDelims(state, start) {
	  var pos = start, lastChar, nextChar, count,
	      can_open = true,
	      can_close = true,
	      max = state.posMax,
	      marker = state.src.charCodeAt(start);

	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;

	  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }
	  if (pos >= max) { can_open = false; }
	  count = pos - start;

	  if (count >= 4) {
	    // sequence of four or more unescaped markers can't start/end an emphasis
	    can_open = can_close = false;
	  } else {
	    nextChar = pos < max ? state.src.charCodeAt(pos) : -1;

	    // check whitespace conditions
	    if (nextChar === 0x20 || nextChar === 0x0A) { can_open = false; }
	    if (lastChar === 0x20 || lastChar === 0x0A) { can_close = false; }

	    if (marker === 0x5F /* _ */) {
	      // check if we aren't inside the word
	      if (isAlphaNum(lastChar)) { can_open = false; }
	      if (isAlphaNum(nextChar)) { can_close = false; }
	    }
	  }

	  return {
	    can_open: can_open,
	    can_close: can_close,
	    delims: count
	  };
	}

	module.exports = function emphasis(state, silent) {
	  var startCount,
	      count,
	      found,
	      oldCount,
	      newCount,
	      stack,
	      res,
	      max = state.posMax,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);

	  if (marker !== 0x5F/* _ */ && marker !== 0x2A /* * */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode

	  res = scanDelims(state, start);
	  startCount = res.delims;
	  if (!res.can_open) {
	    state.pos += startCount;
	    if (!silent) { state.pending += state.src.slice(start, state.pos); }
	    return true;
	  }

	  if (state.level >= state.options.maxNesting) { return false; }

	  state.pos = start + startCount;
	  stack = [ startCount ];

	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === marker) {
	      res = scanDelims(state, state.pos);
	      count = res.delims;
	      if (res.can_close) {
	        oldCount = stack.pop();
	        newCount = count;

	        while (oldCount !== newCount) {
	          if (newCount < oldCount) {
	            stack.push(oldCount - newCount);
	            break;
	          }

	          // assert(newCount > oldCount)
	          newCount -= oldCount;

	          if (stack.length === 0) { break; }
	          state.pos += oldCount;
	          oldCount = stack.pop();
	        }

	        if (stack.length === 0) {
	          startCount = oldCount;
	          found = true;
	          break;
	        }
	        state.pos += count;
	        continue;
	      }

	      if (res.can_open) { stack.push(count); }
	      state.pos += count;
	      continue;
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + startCount;

	  if (!silent) {
	    if (startCount === 2 || startCount === 3) {
	      state.push({ type: 'strong_open', level: state.level++ });
	    }
	    if (startCount === 1 || startCount === 3) {
	      state.push({ type: 'em_open', level: state.level++ });
	    }

	    state.parser.tokenize(state);

	    if (startCount === 1 || startCount === 3) {
	      state.push({ type: 'em_close', level: --state.level });
	    }
	    if (startCount === 2 || startCount === 3) {
	      state.push({ type: 'strong_close', level: --state.level });
	    }
	  }

	  state.pos = state.posMax + startCount;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// Process ~subscript~

	'use strict';

	// same as UNESCAPE_MD_RE plus a space
	var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

	module.exports = function sub(state, silent) {
	  var found,
	      content,
	      max = state.posMax,
	      start = state.pos;

	  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 2 >= max) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  state.pos = start + 1;

	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
	      found = true;
	      break;
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found || start + 1 === state.pos) {
	    state.pos = start;
	    return false;
	  }

	  content = state.src.slice(start + 1, state.pos);

	  // don't allow unescaped spaces/newlines inside
	  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 1;

	  if (!silent) {
	    state.push({
	      type: 'sub',
	      level: state.level,
	      content: content.replace(UNESCAPE_RE, '$1')
	    });
	  }

	  state.pos = state.posMax + 1;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// Process ^superscript^

	'use strict';

	// same as UNESCAPE_MD_RE plus a space
	var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

	module.exports = function sup(state, silent) {
	  var found,
	      content,
	      max = state.posMax,
	      start = state.pos;

	  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 2 >= max) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  state.pos = start + 1;

	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === 0x5E/* ^ */) {
	      found = true;
	      break;
	    }

	    state.parser.skipToken(state);
	  }

	  if (!found || start + 1 === state.pos) {
	    state.pos = start;
	    return false;
	  }

	  content = state.src.slice(start + 1, state.pos);

	  // don't allow unescaped spaces/newlines inside
	  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
	    state.pos = start;
	    return false;
	  }

	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 1;

	  if (!silent) {
	    state.push({
	      type: 'sup',
	      level: state.level,
	      content: content.replace(UNESCAPE_RE, '$1')
	    });
	  }

	  state.pos = state.posMax + 1;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// Process [links](<to> "stuff")

	'use strict';

	var parseLinkLabel       = __webpack_require__(190);
	var parseLinkDestination = __webpack_require__(191);
	var parseLinkTitle       = __webpack_require__(192);
	var normalizeReference   = __webpack_require__(193);


	module.exports = function links(state, silent) {
	  var labelStart,
	      labelEnd,
	      label,
	      href,
	      title,
	      pos,
	      ref,
	      code,
	      isImage = false,
	      oldPos = state.pos,
	      max = state.posMax,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);

	  if (marker === 0x21/* ! */) {
	    isImage = true;
	    marker = state.src.charCodeAt(++start);
	  }

	  if (marker !== 0x5B/* [ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  labelStart = start + 1;
	  labelEnd = parseLinkLabel(state, start);

	  // parser failed to find ']', so it's not a valid link
	  if (labelEnd < 0) { return false; }

	  pos = labelEnd + 1;
	  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
	    //
	    // Inline link
	    //

	    // [link](  <href>  "title"  )
	    //        ^^ skipping these spaces
	    pos++;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }
	    if (pos >= max) { return false; }

	    // [link](  <href>  "title"  )
	    //          ^^^^^^ parsing link destination
	    start = pos;
	    if (parseLinkDestination(state, pos)) {
	      href = state.linkContent;
	      pos = state.pos;
	    } else {
	      href = '';
	    }

	    // [link](  <href>  "title"  )
	    //                ^^ skipping these spaces
	    start = pos;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }

	    // [link](  <href>  "title"  )
	    //                  ^^^^^^^ parsing link title
	    if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
	      title = state.linkContent;
	      pos = state.pos;

	      // [link](  <href>  "title"  )
	      //                         ^^ skipping these spaces
	      for (; pos < max; pos++) {
	        code = state.src.charCodeAt(pos);
	        if (code !== 0x20 && code !== 0x0A) { break; }
	      }
	    } else {
	      title = '';
	    }

	    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
	      state.pos = oldPos;
	      return false;
	    }
	    pos++;
	  } else {
	    //
	    // Link reference
	    //

	    // do not allow nested reference links
	    if (state.linkLevel > 0) { return false; }

	    // [foo]  [bar]
	    //      ^^ optional whitespace (can include newlines)
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }

	    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
	      start = pos + 1;
	      pos = parseLinkLabel(state, pos);
	      if (pos >= 0) {
	        label = state.src.slice(start, pos++);
	      } else {
	        pos = start - 1;
	      }
	    }

	    // covers label === '' and label === undefined
	    // (collapsed reference link and shortcut reference link respectively)
	    if (!label) { label = state.src.slice(labelStart, labelEnd); }

	    ref = state.env.references[normalizeReference(label)];
	    if (!ref) {
	      state.pos = oldPos;
	      return false;
	    }
	    href = ref.href;
	    title = ref.title;
	  }

	  //
	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    state.pos = labelStart;
	    state.posMax = labelEnd;

	    if (isImage) {
	      state.push({
	        type: 'image',
	        src: href,
	        title: title,
	        alt: state.src.substr(labelStart, labelEnd - labelStart),
	        level: state.level
	      });
	    } else {
	      state.push({
	        type: 'link_open',
	        href: href,
	        title: title,
	        level: state.level++
	      });
	      state.linkLevel++;
	      state.parser.tokenize(state);
	      state.linkLevel--;
	      state.push({ type: 'link_close', level: --state.level });
	    }
	  }

	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// Process inline footnotes (^[...])

	'use strict';

	var parseLinkLabel = __webpack_require__(190);


	module.exports = function footnote_inline(state, silent) {
	  var labelStart,
	      labelEnd,
	      footnoteId,
	      oldLength,
	      max = state.posMax,
	      start = state.pos;

	  if (start + 2 >= max) { return false; }
	  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  labelStart = start + 2;
	  labelEnd = parseLinkLabel(state, start + 1);

	  // parser failed to find ']', so it's not a valid note
	  if (labelEnd < 0) { return false; }

	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    if (!state.env.footnotes) { state.env.footnotes = {}; }
	    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
	    footnoteId = state.env.footnotes.list.length;

	    state.pos = labelStart;
	    state.posMax = labelEnd;

	    state.push({
	      type: 'footnote_ref',
	      id: footnoteId,
	      level: state.level
	    });
	    state.linkLevel++;
	    oldLength = state.tokens.length;
	    state.parser.tokenize(state);
	    state.env.footnotes.list[footnoteId] = { tokens: state.tokens.splice(oldLength) };
	    state.linkLevel--;
	  }

	  state.pos = labelEnd + 1;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// Process footnote references ([^...])

	'use strict';


	module.exports = function footnote_ref(state, silent) {
	  var label,
	      pos,
	      footnoteId,
	      footnoteSubId,
	      max = state.posMax,
	      start = state.pos;

	  // should be at least 4 chars - "[^x]"
	  if (start + 3 > max) { return false; }

	  if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
	  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  for (pos = start + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x20) { return false; }
	    if (state.src.charCodeAt(pos) === 0x0A) { return false; }
	    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
	      break;
	    }
	  }

	  if (pos === start + 2) { return false; } // no empty footnote labels
	  if (pos >= max) { return false; }
	  pos++;

	  label = state.src.slice(start + 2, pos - 1);
	  if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }

	  if (!silent) {
	    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }

	    if (state.env.footnotes.refs[':' + label] < 0) {
	      footnoteId = state.env.footnotes.list.length;
	      state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
	      state.env.footnotes.refs[':' + label] = footnoteId;
	    } else {
	      footnoteId = state.env.footnotes.refs[':' + label];
	    }

	    footnoteSubId = state.env.footnotes.list[footnoteId].count;
	    state.env.footnotes.list[footnoteId].count++;

	    state.push({
	      type: 'footnote_ref',
	      id: footnoteId,
	      subId: footnoteSubId,
	      level: state.level
	    });
	  }

	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// Process autolinks '<protocol:...>'

	'use strict';

	var url_schemas   = __webpack_require__(194);
	var normalizeLink = __webpack_require__(195);


	/*eslint max-len:0*/
	var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
	var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;


	module.exports = function autolink(state, silent) {
	  var tail, linkMatch, emailMatch, url, fullUrl, pos = state.pos;

	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

	  tail = state.src.slice(pos);

	  if (tail.indexOf('>') < 0) { return false; }

	  linkMatch = tail.match(AUTOLINK_RE);

	  if (linkMatch) {
	    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }

	    url = linkMatch[0].slice(1, -1);
	    fullUrl = normalizeLink(url);
	    if (!state.parser.validateLink(url)) { return false; }

	    if (!silent) {
	      state.push({
	        type: 'link_open',
	        href: fullUrl,
	        level: state.level
	      });
	      state.push({
	        type: 'text',
	        content: url,
	        level: state.level + 1
	      });
	      state.push({ type: 'link_close', level: state.level });
	    }

	    state.pos += linkMatch[0].length;
	    return true;
	  }

	  emailMatch = tail.match(EMAIL_RE);

	  if (emailMatch) {

	    url = emailMatch[0].slice(1, -1);

	    fullUrl = normalizeLink('mailto:' + url);
	    if (!state.parser.validateLink(fullUrl)) { return false; }

	    if (!silent) {
	      state.push({
	        type: 'link_open',
	        href: fullUrl,
	        level: state.level
	      });
	      state.push({
	        type: 'text',
	        content: url,
	        level: state.level + 1
	      });
	      state.push({ type: 'link_close', level: state.level });
	    }

	    state.pos += emailMatch[0].length;
	    return true;
	  }

	  return false;
	};


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// Process html tags

	'use strict';


	var HTML_TAG_RE = __webpack_require__(196).HTML_TAG_RE;


	function isLetter(ch) {
	  /*eslint no-bitwise:0*/
	  var lc = ch | 0x20; // to lower case
	  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
	}


	module.exports = function htmltag(state, silent) {
	  var ch, match, max, pos = state.pos;

	  if (!state.options.html) { return false; }

	  // Check start
	  max = state.posMax;
	  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
	      pos + 2 >= max) {
	    return false;
	  }

	  // Quick fail on second char
	  ch = state.src.charCodeAt(pos + 1);
	  if (ch !== 0x21/* ! */ &&
	      ch !== 0x3F/* ? */ &&
	      ch !== 0x2F/* / */ &&
	      !isLetter(ch)) {
	    return false;
	  }

	  match = state.src.slice(pos).match(HTML_TAG_RE);
	  if (!match) { return false; }

	  if (!silent) {
	    state.push({
	      type: 'htmltag',
	      content: state.src.slice(pos, pos + match[0].length),
	      level: state.level
	    });
	  }
	  state.pos += match[0].length;
	  return true;
	};


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// Process html entity - &#123;, &#xAF;, &quot;, ...

	'use strict';

	var entities          = __webpack_require__(149);
	var has               = __webpack_require__(141).has;
	var isValidEntityCode = __webpack_require__(141).isValidEntityCode;
	var fromCodePoint     = __webpack_require__(141).fromCodePoint;


	var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
	var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


	module.exports = function entity(state, silent) {
	  var ch, code, match, pos = state.pos, max = state.posMax;

	  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

	  if (pos + 1 < max) {
	    ch = state.src.charCodeAt(pos + 1);

	    if (ch === 0x23 /* # */) {
	      match = state.src.slice(pos).match(DIGITAL_RE);
	      if (match) {
	        if (!silent) {
	          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
	          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
	        }
	        state.pos += match[0].length;
	        return true;
	      }
	    } else {
	      match = state.src.slice(pos).match(NAMED_RE);
	      if (match) {
	        if (has(entities, match[1])) {
	          if (!silent) { state.pending += entities[match[1]]; }
	          state.pos += match[0].length;
	          return true;
	        }
	      }
	    }
	  }

	  if (!silent) { state.pending += '&'; }
	  state.pos++;
	  return true;
	};


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// Process footnote reference list

	'use strict';


	module.exports = function footnote(state, startLine, endLine, silent) {
	  var oldBMark, oldTShift, oldParentType, pos, label,
	      start = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  // line should be at least 5 chars - "[^x]:"
	  if (start + 4 > max) { return false; }

	  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }

	  for (pos = start + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x20) { return false; }
	    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
	      break;
	    }
	  }

	  if (pos === start + 2) { return false; } // no empty footnote labels
	  if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
	  if (silent) { return true; }
	  pos++;

	  if (!state.env.footnotes) { state.env.footnotes = {}; }
	  if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
	  label = state.src.slice(start + 2, pos - 2);
	  state.env.footnotes.refs[':' + label] = -1;

	  state.tokens.push({
	    type: 'footnote_reference_open',
	    label: label,
	    level: state.level++
	  });

	  oldBMark = state.bMarks[startLine];
	  oldTShift = state.tShift[startLine];
	  oldParentType = state.parentType;
	  state.tShift[startLine] = state.skipSpaces(pos) - pos;
	  state.bMarks[startLine] = pos;
	  state.blkIndent += 4;
	  state.parentType = 'footnote';

	  if (state.tShift[startLine] < state.blkIndent) {
	    state.tShift[startLine] += state.blkIndent;
	    state.bMarks[startLine] -= state.blkIndent;
	  }

	  state.parser.tokenize(state, startLine, endLine, true);

	  state.parentType = oldParentType;
	  state.blkIndent -= 4;
	  state.tShift[startLine] = oldTShift;
	  state.bMarks[startLine] = oldBMark;

	  state.tokens.push({
	    type: 'footnote_reference_close',
	    level: --state.level
	  });

	  return true;
	};


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// Parser state class

	'use strict';


	function StateBlock(src, parser, options, env, tokens) {
	  var ch, s, start, pos, len, indent, indent_found;

	  this.src = src;

	  // Shortcuts to simplify nested calls
	  this.parser = parser;

	  this.options = options;

	  this.env = env;

	  //
	  // Internal state vartiables
	  //

	  this.tokens = tokens;

	  this.bMarks = [];  // line begin offsets for fast jumps
	  this.eMarks = [];  // line end offsets for fast jumps
	  this.tShift = [];  // indent for each line

	  // block parser variables
	  this.blkIndent  = 0; // required block content indent
	                       // (for example, if we are in list)
	  this.line       = 0; // line index in src
	  this.lineMax    = 0; // lines count
	  this.tight      = false;  // loose/tight mode for lists
	  this.parentType = 'root'; // if `list`, block parser stops on two newlines
	  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)

	  this.level = 0;

	  // renderer
	  this.result = '';

	  // Create caches
	  // Generate markers.
	  s = this.src;
	  indent = 0;
	  indent_found = false;

	  for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
	    ch = s.charCodeAt(pos);

	    if (!indent_found) {
	      if (ch === 0x20/* space */) {
	        indent++;
	        continue;
	      } else {
	        indent_found = true;
	      }
	    }

	    if (ch === 0x0A || pos === len - 1) {
	      if (ch !== 0x0A) { pos++; }
	      this.bMarks.push(start);
	      this.eMarks.push(pos);
	      this.tShift.push(indent);

	      indent_found = false;
	      indent = 0;
	      start = pos + 1;
	    }
	  }

	  // Push fake entry to simplify cache bounds checks
	  this.bMarks.push(s.length);
	  this.eMarks.push(s.length);
	  this.tShift.push(0);

	  this.lineMax = this.bMarks.length - 1; // don't count last fake line
	}

	StateBlock.prototype.isEmpty = function isEmpty(line) {
	  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
	};

	StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
	  for (var max = this.lineMax; from < max; from++) {
	    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
	      break;
	    }
	  }
	  return from;
	};

	// Skip spaces from given position.
	StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== 0x20/* space */) { break; }
	  }
	  return pos;
	};

	// Skip char codes from given position
	StateBlock.prototype.skipChars = function skipChars(pos, code) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== code) { break; }
	  }
	  return pos;
	};

	// Skip char codes reverse from given position - 1
	StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
	  if (pos <= min) { return pos; }

	  while (pos > min) {
	    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
	  }
	  return pos;
	};

	// cut lines range from source.
	StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
	  var i, first, last, queue, shift,
	      line = begin;

	  if (begin >= end) {
	    return '';
	  }

	  // Opt: don't use push queue for single line;
	  if (line + 1 === end) {
	    first = this.bMarks[line] + Math.min(this.tShift[line], indent);
	    last = keepLastLF ? this.bMarks[end] : this.eMarks[end - 1];
	    return this.src.slice(first, last);
	  }

	  queue = new Array(end - begin);

	  for (i = 0; line < end; line++, i++) {
	    shift = this.tShift[line];
	    if (shift > indent) { shift = indent; }
	    if (shift < 0) { shift = 0; }

	    first = this.bMarks[line] + shift;

	    if (line + 1 < end || keepLastLF) {
	      // No need for bounds check because we have fake entry on tail.
	      last = this.eMarks[line] + 1;
	    } else {
	      last = this.eMarks[line];
	    }

	    queue[i] = this.src.slice(first, last);
	  }

	  return queue.join('');
	};


	module.exports = StateBlock;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// Code block (4 spaces padded)

	'use strict';


	module.exports = function code(state, startLine, endLine/*, silent*/) {
	  var nextLine, last;

	  if (state.tShift[startLine] - state.blkIndent < 4) { return false; }

	  last = nextLine = startLine + 1;

	  while (nextLine < endLine) {
	    if (state.isEmpty(nextLine)) {
	      nextLine++;
	      continue;
	    }
	    if (state.tShift[nextLine] - state.blkIndent >= 4) {
	      nextLine++;
	      last = nextLine;
	      continue;
	    }
	    break;
	  }

	  state.line = nextLine;
	  state.tokens.push({
	    type: 'code',
	    content: state.getLines(startLine, last, 4 + state.blkIndent, true),
	    block: true,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });

	  return true;
	};


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// fences (``` lang, ~~~ lang)

	'use strict';


	module.exports = function fences(state, startLine, endLine, silent) {
	  var marker, len, params, nextLine, mem,
	      haveEndMarker = false,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  if (pos + 3 > max) { return false; }

	  marker = state.src.charCodeAt(pos);

	  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
	    return false;
	  }

	  // scan marker length
	  mem = pos;
	  pos = state.skipChars(pos, marker);

	  len = pos - mem;

	  if (len < 3) { return false; }

	  params = state.src.slice(pos, max).trim();

	  if (params.indexOf('`') >= 0) { return false; }

	  // Since start is found, we can report success here in validation mode
	  if (silent) { return true; }

	  // search end of block
	  nextLine = startLine;

	  for (;;) {
	    nextLine++;
	    if (nextLine >= endLine) {
	      // unclosed block should be autoclosed by end of document.
	      // also block seems to be autoclosed by end of parent
	      break;
	    }

	    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];

	    if (pos < max && state.tShift[nextLine] < state.blkIndent) {
	      // non-empty line with negative indent should stop the list:
	      // - ```
	      //  test
	      break;
	    }

	    if (state.src.charCodeAt(pos) !== marker) { continue; }

	    if (state.tShift[nextLine] - state.blkIndent >= 4) {
	      // closing fence should be indented less than 4 spaces
	      continue;
	    }

	    pos = state.skipChars(pos, marker);

	    // closing code fence must be at least as long as the opening one
	    if (pos - mem < len) { continue; }

	    // make sure tail has spaces only
	    pos = state.skipSpaces(pos);

	    if (pos < max) { continue; }

	    haveEndMarker = true;
	    // found!
	    break;
	  }

	  // If a fence has heading spaces, they should be removed from its inner block
	  len = state.tShift[startLine];

	  state.line = nextLine + (haveEndMarker ? 1 : 0);
	  state.tokens.push({
	    type: 'fence',
	    params: params,
	    content: state.getLines(startLine + 1, nextLine, len, true),
	    lines: [ startLine, state.line ],
	    level: state.level
	  });

	  return true;
	};


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// Block quotes

	'use strict';


	module.exports = function blockquote(state, startLine, endLine, silent) {
	  var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines,
	      terminatorRules,
	      i, l, terminate,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  if (pos > max) { return false; }

	  // check the block quote marker
	  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

	  if (state.level >= state.options.maxNesting) { return false; }

	  // we know that it's going to be a valid blockquote,
	  // so no point trying to find the end of it in silent mode
	  if (silent) { return true; }

	  // skip one optional space after '>'
	  if (state.src.charCodeAt(pos) === 0x20) { pos++; }

	  oldIndent = state.blkIndent;
	  state.blkIndent = 0;

	  oldBMarks = [ state.bMarks[startLine] ];
	  state.bMarks[startLine] = pos;

	  // check if we have an empty blockquote
	  pos = pos < max ? state.skipSpaces(pos) : pos;
	  lastLineEmpty = pos >= max;

	  oldTShift = [ state.tShift[startLine] ];
	  state.tShift[startLine] = pos - state.bMarks[startLine];

	  terminatorRules = state.parser.ruler.getRules('blockquote');

	  // Search the end of the block
	  //
	  // Block ends with either:
	  //  1. an empty line outside:
	  //     ```
	  //     > test
	  //
	  //     ```
	  //  2. an empty line inside:
	  //     ```
	  //     >
	  //     test
	  //     ```
	  //  3. another tag
	  //     ```
	  //     > test
	  //      - - -
	  //     ```
	  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
	    pos = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];

	    if (pos >= max) {
	      // Case 1: line is not inside the blockquote, and this line is empty.
	      break;
	    }

	    if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
	      // This line is inside the blockquote.

	      // skip one optional space after '>'
	      if (state.src.charCodeAt(pos) === 0x20) { pos++; }

	      oldBMarks.push(state.bMarks[nextLine]);
	      state.bMarks[nextLine] = pos;

	      pos = pos < max ? state.skipSpaces(pos) : pos;
	      lastLineEmpty = pos >= max;

	      oldTShift.push(state.tShift[nextLine]);
	      state.tShift[nextLine] = pos - state.bMarks[nextLine];
	      continue;
	    }

	    // Case 2: line is not inside the blockquote, and the last line was empty.
	    if (lastLineEmpty) { break; }

	    // Case 3: another tag found.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }

	    oldBMarks.push(state.bMarks[nextLine]);
	    oldTShift.push(state.tShift[nextLine]);

	    // A negative number means that this is a paragraph continuation;
	    //
	    // Any negative number will do the job here, but it's better for it
	    // to be large enough to make any bugs obvious.
	    state.tShift[nextLine] = -1337;
	  }

	  oldParentType = state.parentType;
	  state.parentType = 'blockquote';
	  state.tokens.push({
	    type: 'blockquote_open',
	    lines: lines = [ startLine, 0 ],
	    level: state.level++
	  });
	  state.parser.tokenize(state, startLine, nextLine);
	  state.tokens.push({
	    type: 'blockquote_close',
	    level: --state.level
	  });
	  state.parentType = oldParentType;
	  lines[1] = state.line;

	  // Restore original tShift; this might not be necessary since the parser
	  // has already been here, but just to make sure we can do that.
	  for (i = 0; i < oldTShift.length; i++) {
	    state.bMarks[i + startLine] = oldBMarks[i];
	    state.tShift[i + startLine] = oldTShift[i];
	  }
	  state.blkIndent = oldIndent;

	  return true;
	};


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// Horizontal rule

	'use strict';


	module.exports = function hr(state, startLine, endLine, silent) {
	  var marker, cnt, ch,
	      pos = state.bMarks[startLine],
	      max = state.eMarks[startLine];

	  pos += state.tShift[startLine];

	  if (pos > max) { return false; }

	  marker = state.src.charCodeAt(pos++);

	  // Check hr marker
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x5F/* _ */) {
	    return false;
	  }

	  // markers can be mixed with spaces, but there should be at least 3 one

	  cnt = 1;
	  while (pos < max) {
	    ch = state.src.charCodeAt(pos++);
	    if (ch !== marker && ch !== 0x20/* space */) { return false; }
	    if (ch === marker) { cnt++; }
	  }

	  if (cnt < 3) { return false; }

	  if (silent) { return true; }

	  state.line = startLine + 1;
	  state.tokens.push({
	    type: 'hr',
	    lines: [ startLine, state.line ],
	    level: state.level
	  });

	  return true;
	};


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// Lists

	'use strict';


	// Search `[-+*][\n ]`, returns next pos arter marker on success
	// or -1 on fail.
	function skipBulletListMarker(state, startLine) {
	  var marker, pos, max;

	  pos = state.bMarks[startLine] + state.tShift[startLine];
	  max = state.eMarks[startLine];

	  if (pos >= max) { return -1; }

	  marker = state.src.charCodeAt(pos++);
	  // Check bullet
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x2B/* + */) {
	    return -1;
	  }

	  if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
	    // " 1.test " - is not a list item
	    return -1;
	  }

	  return pos;
	}

	// Search `\d+[.)][\n ]`, returns next pos arter marker on success
	// or -1 on fail.
	function skipOrderedListMarker(state, startLine) {
	  var ch,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  if (pos + 1 >= max) { return -1; }

	  ch = state.src.charCodeAt(pos++);

	  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

	  for (;;) {
	    // EOL -> fail
	    if (pos >= max) { return -1; }

	    ch = state.src.charCodeAt(pos++);

	    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {
	      continue;
	    }

	    // found valid marker
	    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
	      break;
	    }

	    return -1;
	  }


	  if (pos < max && state.src.charCodeAt(pos) !== 0x20/* space */) {
	    // " 1.test " - is not a list item
	    return -1;
	  }
	  return pos;
	}

	function markTightParagraphs(state, idx) {
	  var i, l,
	      level = state.level + 2;

	  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
	    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
	      state.tokens[i + 2].tight = true;
	      state.tokens[i].tight = true;
	      i += 2;
	    }
	  }
	}


	module.exports = function list(state, startLine, endLine, silent) {
	  var nextLine,
	      indent,
	      oldTShift,
	      oldIndent,
	      oldTight,
	      oldParentType,
	      start,
	      posAfterMarker,
	      max,
	      indentAfterMarker,
	      markerValue,
	      markerCharCode,
	      isOrdered,
	      contentStart,
	      listTokIdx,
	      prevEmptyEnd,
	      listLines,
	      itemLines,
	      tight = true,
	      terminatorRules,
	      i, l, terminate;

	  // Detect list type and position after marker
	  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
	    isOrdered = true;
	  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
	    isOrdered = false;
	  } else {
	    return false;
	  }

	  if (state.level >= state.options.maxNesting) { return false; }

	  // We should terminate list on style change. Remember first one to compare.
	  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

	  // For validation mode we can terminate immediately
	  if (silent) { return true; }

	  // Start list
	  listTokIdx = state.tokens.length;

	  if (isOrdered) {
	    start = state.bMarks[startLine] + state.tShift[startLine];
	    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

	    state.tokens.push({
	      type: 'ordered_list_open',
	      order: markerValue,
	      lines: listLines = [ startLine, 0 ],
	      level: state.level++
	    });

	  } else {
	    state.tokens.push({
	      type: 'bullet_list_open',
	      lines: listLines = [ startLine, 0 ],
	      level: state.level++
	    });
	  }

	  //
	  // Iterate list items
	  //

	  nextLine = startLine;
	  prevEmptyEnd = false;
	  terminatorRules = state.parser.ruler.getRules('list');

	  while (nextLine < endLine) {
	    contentStart = state.skipSpaces(posAfterMarker);
	    max = state.eMarks[nextLine];

	    if (contentStart >= max) {
	      // trimming space in "-    \n  3" case, indent is 1 here
	      indentAfterMarker = 1;
	    } else {
	      indentAfterMarker = contentStart - posAfterMarker;
	    }

	    // If we have more than 4 spaces, the indent is 1
	    // (the rest is just indented code block)
	    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

	    // If indent is less than 1, assume that it's one, example:
	    //  "-\n  test"
	    if (indentAfterMarker < 1) { indentAfterMarker = 1; }

	    // "  -  test"
	    //  ^^^^^ - calculating total length of this thing
	    indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;

	    // Run subparser & write tokens
	    state.tokens.push({
	      type: 'list_item_open',
	      lines: itemLines = [ startLine, 0 ],
	      level: state.level++
	    });

	    oldIndent = state.blkIndent;
	    oldTight = state.tight;
	    oldTShift = state.tShift[startLine];
	    oldParentType = state.parentType;
	    state.tShift[startLine] = contentStart - state.bMarks[startLine];
	    state.blkIndent = indent;
	    state.tight = true;
	    state.parentType = 'list';

	    state.parser.tokenize(state, startLine, endLine, true);

	    // If any of list item is tight, mark list as tight
	    if (!state.tight || prevEmptyEnd) {
	      tight = false;
	    }
	    // Item become loose if finish with empty line,
	    // but we should filter last element, because it means list finish
	    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

	    state.blkIndent = oldIndent;
	    state.tShift[startLine] = oldTShift;
	    state.tight = oldTight;
	    state.parentType = oldParentType;

	    state.tokens.push({
	      type: 'list_item_close',
	      level: --state.level
	    });

	    nextLine = startLine = state.line;
	    itemLines[1] = nextLine;
	    contentStart = state.bMarks[startLine];

	    if (nextLine >= endLine) { break; }

	    if (state.isEmpty(nextLine)) {
	      break;
	    }

	    //
	    // Try to check if list is terminated or continued.
	    //
	    if (state.tShift[nextLine] < state.blkIndent) { break; }

	    // fail if terminating block found
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }

	    // fail if list has another type
	    if (isOrdered) {
	      posAfterMarker = skipOrderedListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    } else {
	      posAfterMarker = skipBulletListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    }

	    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
	  }

	  // Finilize list
	  state.tokens.push({
	    type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
	    level: --state.level
	  });
	  listLines[1] = nextLine;

	  state.line = nextLine;

	  // mark paragraphs tight if needed
	  if (tight) {
	    markTightParagraphs(state, listTokIdx);
	  }

	  return true;
	};


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// heading (#, ##, ...)

	'use strict';


	module.exports = function heading(state, startLine, endLine, silent) {
	  var ch, level, tmp,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];

	  if (pos >= max) { return false; }

	  ch  = state.src.charCodeAt(pos);

	  if (ch !== 0x23/* # */ || pos >= max) { return false; }

	  // count heading level
	  level = 1;
	  ch = state.src.charCodeAt(++pos);
	  while (ch === 0x23/* # */ && pos < max && level <= 6) {
	    level++;
	    ch = state.src.charCodeAt(++pos);
	  }

	  if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }

	  if (silent) { return true; }

	  // Let's cut tails like '    ###  ' from the end of string

	  max = state.skipCharsBack(max, 0x20, pos); // space
	  tmp = state.skipCharsBack(max, 0x23, pos); // #
	  if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20/* space */) {
	    max = tmp;
	  }

	  state.line = startLine + 1;

	  state.tokens.push({ type: 'heading_open',
	    hLevel: level,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });

	  // only if header is not empty
	  if (pos < max) {
	    state.tokens.push({
	      type: 'inline',
	      content: state.src.slice(pos, max).trim(),
	      level: state.level + 1,
	      lines: [ startLine, state.line ],
	      children: []
	    });
	  }
	  state.tokens.push({ type: 'heading_close', hLevel: level, level: state.level });

	  return true;
	};


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// lheading (---, ===)

	'use strict';


	module.exports = function lheading(state, startLine, endLine/*, silent*/) {
	  var marker, pos, max,
	      next = startLine + 1;

	  if (next >= endLine) { return false; }
	  if (state.tShift[next] < state.blkIndent) { return false; }

	  // Scan next line

	  if (state.tShift[next] - state.blkIndent > 3) { return false; }

	  pos = state.bMarks[next] + state.tShift[next];
	  max = state.eMarks[next];

	  if (pos >= max) { return false; }

	  marker = state.src.charCodeAt(pos);

	  if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }

	  pos = state.skipChars(pos, marker);

	  pos = state.skipSpaces(pos);

	  if (pos < max) { return false; }

	  pos = state.bMarks[startLine] + state.tShift[startLine];

	  state.line = next + 1;
	  state.tokens.push({
	    type: 'heading_open',
	    hLevel: marker === 0x3D/* = */ ? 1 : 2,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	  state.tokens.push({
	    type: 'inline',
	    content: state.src.slice(pos, state.eMarks[startLine]).trim(),
	    level: state.level + 1,
	    lines: [ startLine, state.line - 1 ],
	    children: []
	  });
	  state.tokens.push({
	    type: 'heading_close',
	    hLevel: marker === 0x3D/* = */ ? 1 : 2,
	    level: state.level
	  });

	  return true;
	};


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// HTML block

	'use strict';


	var block_names = __webpack_require__(197);


	var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
	var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;

	function isLetter(ch) {
	  /*eslint no-bitwise:0*/
	  var lc = ch | 0x20; // to lower case
	  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
	}

	module.exports = function htmlblock(state, startLine, endLine, silent) {
	  var ch, match, nextLine,
	      pos = state.bMarks[startLine],
	      max = state.eMarks[startLine],
	      shift = state.tShift[startLine];

	  pos += shift;

	  if (!state.options.html) { return false; }

	  if (shift > 3 || pos + 2 >= max) { return false; }

	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

	  ch = state.src.charCodeAt(pos + 1);

	  if (ch === 0x21/* ! */ || ch === 0x3F/* ? */) {
	    // Directive start / comment start / processing instruction start
	    if (silent) { return true; }

	  } else if (ch === 0x2F/* / */ || isLetter(ch)) {

	    // Probably start or end of tag
	    if (ch === 0x2F/* \ */) {
	      // closing tag
	      match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
	      if (!match) { return false; }
	    } else {
	      // opening tag
	      match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
	      if (!match) { return false; }
	    }
	    // Make sure tag name is valid
	    if (block_names[match[1].toLowerCase()] !== true) { return false; }
	    if (silent) { return true; }

	  } else {
	    return false;
	  }

	  // If we are here - we detected HTML block.
	  // Let's roll down till empty line (block end).
	  nextLine = startLine + 1;
	  while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
	    nextLine++;
	  }

	  state.line = nextLine;
	  state.tokens.push({
	    type: 'htmlblock',
	    level: state.level,
	    lines: [ startLine, state.line ],
	    content: state.getLines(startLine, nextLine, 0, true)
	  });

	  return true;
	};


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// GFM table, non-standard

	'use strict';


	function getLine(state, line) {
	  var pos = state.bMarks[line] + state.blkIndent,
	      max = state.eMarks[line];

	  return state.src.substr(pos, max - pos);
	}


	module.exports = function table(state, startLine, endLine, silent) {
	  var ch, lineText, pos, i, nextLine, rows,
	      aligns, t, tableLines, tbodyLines;

	  // should have at least three lines
	  if (startLine + 2 > endLine) { return false; }

	  nextLine = startLine + 1;

	  if (state.tShift[nextLine] < state.blkIndent) { return false; }

	  // first character of the second line should be '|' or '-'

	  pos = state.bMarks[nextLine] + state.tShift[nextLine];
	  if (pos >= state.eMarks[nextLine]) { return false; }

	  ch = state.src.charCodeAt(pos);
	  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }

	  lineText = getLine(state, startLine + 1);
	  if (!/^[-:| ]+$/.test(lineText)) { return false; }

	  rows = lineText.split('|');
	  if (rows <= 2) { return false; }
	  aligns = [];
	  for (i = 0; i < rows.length; i++) {
	    t = rows[i].trim();
	    if (!t) {
	      // allow empty columns before and after table, but not in between columns;
	      // e.g. allow ` |---| `, disallow ` ---||--- `
	      if (i === 0 || i === rows.length - 1) {
	        continue;
	      } else {
	        return false;
	      }
	    }

	    if (!/^:?-+:?$/.test(t)) { return false; }
	    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
	      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
	    } else if (t.charCodeAt(0) === 0x3A/* : */) {
	      aligns.push('left');
	    } else {
	      aligns.push('');
	    }
	  }

	  lineText = getLine(state, startLine).trim();
	  if (lineText.indexOf('|') === -1) { return false; }
	  rows = lineText.replace(/^\||\|$/g, '').split('|');
	  if (aligns.length !== rows.length) { return false; }
	  if (silent) { return true; }

	  state.tokens.push({
	    type: 'table_open',
	    lines: tableLines = [ startLine, 0 ],
	    level: state.level++
	  });
	  state.tokens.push({
	    type: 'thead_open',
	    lines: [ startLine, startLine + 1 ],
	    level: state.level++
	  });

	  state.tokens.push({
	    type: 'tr_open',
	    lines: [ startLine, startLine + 1 ],
	    level: state.level++
	  });
	  for (i = 0; i < rows.length; i++) {
	    state.tokens.push({
	      type: 'th_open',
	      align: aligns[i],
	      lines: [ startLine, startLine + 1 ],
	      level: state.level++
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: rows[i].trim(),
	      lines: [ startLine, startLine + 1 ],
	      level: state.level,
	      children: []
	    });
	    state.tokens.push({ type: 'th_close', level: --state.level });
	  }
	  state.tokens.push({ type: 'tr_close', level: --state.level });
	  state.tokens.push({ type: 'thead_close', level: --state.level });

	  state.tokens.push({
	    type: 'tbody_open',
	    lines: tbodyLines = [ startLine + 2, 0 ],
	    level: state.level++
	  });

	  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
	    if (state.tShift[nextLine] < state.blkIndent) { break; }

	    lineText = getLine(state, nextLine).trim();
	    if (lineText.indexOf('|') === -1) { break; }
	    rows = lineText.replace(/^\||\|$/g, '').split('|');

	    state.tokens.push({ type: 'tr_open', level: state.level++ });
	    for (i = 0; i < rows.length; i++) {
	      state.tokens.push({ type: 'td_open', align: aligns[i], level: state.level++ });
	      state.tokens.push({
	        type: 'inline',
	        content: rows[i].replace(/^\|? *| *\|?$/g, ''),
	        level: state.level,
	        children: []
	      });
	      state.tokens.push({ type: 'td_close', level: --state.level });
	    }
	    state.tokens.push({ type: 'tr_close', level: --state.level });
	  }
	  state.tokens.push({ type: 'tbody_close', level: --state.level });
	  state.tokens.push({ type: 'table_close', level: --state.level });

	  tableLines[1] = tbodyLines[1] = nextLine;
	  state.line = nextLine;
	  return true;
	};


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// Definition lists

	'use strict';


	// Search `[:~][\n ]`, returns next pos after marker on success
	// or -1 on fail.
	function skipMarker(state, line) {
	  var pos, marker,
	      start = state.bMarks[line] + state.tShift[line],
	      max = state.eMarks[line];

	  if (start >= max) { return -1; }

	  // Check bullet
	  marker = state.src.charCodeAt(start++);
	  if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }

	  pos = state.skipSpaces(start);

	  // require space after ":"
	  if (start === pos) { return -1; }

	  // no empty definitions, e.g. "  : "
	  if (pos >= max) { return -1; }

	  return pos;
	}

	function markTightParagraphs(state, idx) {
	  var i, l,
	      level = state.level + 2;

	  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
	    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
	      state.tokens[i + 2].tight = true;
	      state.tokens[i].tight = true;
	      i += 2;
	    }
	  }
	}

	module.exports = function deflist(state, startLine, endLine, silent) {
	  var contentStart,
	      ddLine,
	      dtLine,
	      itemLines,
	      listLines,
	      listTokIdx,
	      nextLine,
	      oldIndent,
	      oldDDIndent,
	      oldParentType,
	      oldTShift,
	      oldTight,
	      prevEmptyEnd,
	      tight;

	  if (silent) {
	    // quirk: validation mode validates a dd block only, not a whole deflist
	    if (state.ddIndent < 0) { return false; }
	    return skipMarker(state, startLine) >= 0;
	  }

	  nextLine = startLine + 1;
	  if (state.isEmpty(nextLine)) {
	    if (++nextLine > endLine) { return false; }
	  }

	  if (state.tShift[nextLine] < state.blkIndent) { return false; }
	  contentStart = skipMarker(state, nextLine);
	  if (contentStart < 0) { return false; }

	  if (state.level >= state.options.maxNesting) { return false; }

	  // Start list
	  listTokIdx = state.tokens.length;

	  state.tokens.push({
	    type: 'dl_open',
	    lines: listLines = [ startLine, 0 ],
	    level: state.level++
	  });

	  //
	  // Iterate list items
	  //

	  dtLine = startLine;
	  ddLine = nextLine;

	  // One definition list can contain multiple DTs,
	  // and one DT can be followed by multiple DDs.
	  //
	  // Thus, there is two loops here, and label is
	  // needed to break out of the second one
	  //
	  /*eslint no-labels:0,block-scoped-var:0*/
	  OUTER:
	  for (;;) {
	    tight = true;
	    prevEmptyEnd = false;

	    state.tokens.push({
	      type: 'dt_open',
	      lines: [ dtLine, dtLine ],
	      level: state.level++
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim(),
	      level: state.level + 1,
	      lines: [ dtLine, dtLine ],
	      children: []
	    });
	    state.tokens.push({
	      type: 'dt_close',
	      level: --state.level
	    });

	    for (;;) {
	      state.tokens.push({
	        type: 'dd_open',
	        lines: itemLines = [ nextLine, 0 ],
	        level: state.level++
	      });

	      oldTight = state.tight;
	      oldDDIndent = state.ddIndent;
	      oldIndent = state.blkIndent;
	      oldTShift = state.tShift[ddLine];
	      oldParentType = state.parentType;
	      state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2;
	      state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
	      state.tight = true;
	      state.parentType = 'deflist';

	      state.parser.tokenize(state, ddLine, endLine, true);

	      // If any of list item is tight, mark list as tight
	      if (!state.tight || prevEmptyEnd) {
	        tight = false;
	      }
	      // Item become loose if finish with empty line,
	      // but we should filter last element, because it means list finish
	      prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);

	      state.tShift[ddLine] = oldTShift;
	      state.tight = oldTight;
	      state.parentType = oldParentType;
	      state.blkIndent = oldIndent;
	      state.ddIndent = oldDDIndent;

	      state.tokens.push({
	        type: 'dd_close',
	        level: --state.level
	      });

	      itemLines[1] = nextLine = state.line;

	      if (nextLine >= endLine) { break OUTER; }

	      if (state.tShift[nextLine] < state.blkIndent) { break OUTER; }
	      contentStart = skipMarker(state, nextLine);
	      if (contentStart < 0) { break; }

	      ddLine = nextLine;

	      // go to the next loop iteration:
	      // insert DD tag and repeat checking
	    }

	    if (nextLine >= endLine) { break; }
	    dtLine = nextLine;

	    if (state.isEmpty(dtLine)) { break; }
	    if (state.tShift[dtLine] < state.blkIndent) { break; }

	    ddLine = dtLine + 1;
	    if (ddLine >= endLine) { break; }
	    if (state.isEmpty(ddLine)) { ddLine++; }
	    if (ddLine >= endLine) { break; }

	    if (state.tShift[ddLine] < state.blkIndent) { break; }
	    contentStart = skipMarker(state, ddLine);
	    if (contentStart < 0) { break; }

	    // go to the next loop iteration:
	    // insert DT and DD tags and repeat checking
	  }

	  // Finilize list
	  state.tokens.push({
	    type: 'dl_close',
	    level: --state.level
	  });
	  listLines[1] = nextLine;

	  state.line = nextLine;

	  // mark paragraphs tight if needed
	  if (tight) {
	    markTightParagraphs(state, listTokIdx);
	  }

	  return true;
	};


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// Paragraph

	'use strict';


	module.exports = function paragraph(state, startLine/*, endLine*/) {
	  var endLine, content, terminate, i, l,
	      nextLine = startLine + 1,
	      terminatorRules;

	  endLine = state.lineMax;

	  // jump line-by-line until empty one or EOF
	  if (nextLine < endLine && !state.isEmpty(nextLine)) {
	    terminatorRules = state.parser.ruler.getRules('paragraph');

	    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
	      // this would be a code block normally, but after paragraph
	      // it's considered a lazy continuation regardless of what's there
	      if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }

	      // Some tags can terminate paragraph without empty line.
	      terminate = false;
	      for (i = 0, l = terminatorRules.length; i < l; i++) {
	        if (terminatorRules[i](state, nextLine, endLine, true)) {
	          terminate = true;
	          break;
	        }
	      }
	      if (terminate) { break; }
	    }
	  }

	  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

	  state.line = nextLine;
	  if (content.length) {
	    state.tokens.push({
	      type: 'paragraph_open',
	      tight: false,
	      lines: [ startLine, state.line ],
	      level: state.level
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: content,
	      level: state.level + 1,
	      lines: [ startLine, state.line ],
	      children: []
	    });
	    state.tokens.push({
	      type: 'paragraph_close',
	      tight: false,
	      level: state.level
	    });
	  }

	  return true;
	};


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Parse link labels
	 *
	 * This function assumes that first character (`[`) already matches;
	 * returns the end of the label.
	 *
	 * @param  {Object} state
	 * @param  {Number} start
	 * @api private
	 */

	module.exports = function parseLinkLabel(state, start) {
	  var level, found, marker,
	      labelEnd = -1,
	      max = state.posMax,
	      oldPos = state.pos,
	      oldFlag = state.isInLabel;

	  if (state.isInLabel) { return -1; }

	  if (state.labelUnmatchedScopes) {
	    state.labelUnmatchedScopes--;
	    return -1;
	  }

	  state.pos = start + 1;
	  state.isInLabel = true;
	  level = 1;

	  while (state.pos < max) {
	    marker = state.src.charCodeAt(state.pos);
	    if (marker === 0x5B /* [ */) {
	      level++;
	    } else if (marker === 0x5D /* ] */) {
	      level--;
	      if (level === 0) {
	        found = true;
	        break;
	      }
	    }

	    state.parser.skipToken(state);
	  }

	  if (found) {
	    labelEnd = state.pos;
	    state.labelUnmatchedScopes = 0;
	  } else {
	    state.labelUnmatchedScopes = level - 1;
	  }

	  // restore old state
	  state.pos = oldPos;
	  state.isInLabel = oldFlag;

	  return labelEnd;
	};


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	var normalizeLink = __webpack_require__(195);
	var unescapeMd    = __webpack_require__(141).unescapeMd;

	/**
	 * Parse link destination
	 *
	 *   - on success it returns a string and updates state.pos;
	 *   - on failure it returns null
	 *
	 * @param  {Object} state
	 * @param  {Number} pos
	 * @api private
	 */

	module.exports = function parseLinkDestination(state, pos) {
	  var code, level, link,
	      start = pos,
	      max = state.posMax;

	  if (state.src.charCodeAt(pos) === 0x3C /* < */) {
	    pos++;
	    while (pos < max) {
	      code = state.src.charCodeAt(pos);
	      if (code === 0x0A /* \n */) { return false; }
	      if (code === 0x3E /* > */) {
	        link = normalizeLink(unescapeMd(state.src.slice(start + 1, pos)));
	        if (!state.parser.validateLink(link)) { return false; }
	        state.pos = pos + 1;
	        state.linkContent = link;
	        return true;
	      }
	      if (code === 0x5C /* \ */ && pos + 1 < max) {
	        pos += 2;
	        continue;
	      }

	      pos++;
	    }

	    // no closing '>'
	    return false;
	  }

	  // this should be ... } else { ... branch

	  level = 0;
	  while (pos < max) {
	    code = state.src.charCodeAt(pos);

	    if (code === 0x20) { break; }

	    // ascii control characters
	    if (code < 0x20 || code === 0x7F) { break; }

	    if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos += 2;
	      continue;
	    }

	    if (code === 0x28 /* ( */) {
	      level++;
	      if (level > 1) { break; }
	    }

	    if (code === 0x29 /* ) */) {
	      level--;
	      if (level < 0) { break; }
	    }

	    pos++;
	  }

	  if (start === pos) { return false; }

	  link = normalizeLink(unescapeMd(state.src.slice(start, pos)));
	  if (!state.parser.validateLink(link)) { return false; }

	  state.linkContent = link;
	  state.pos = pos;
	  return true;
	};


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	var unescapeMd = __webpack_require__(141).unescapeMd;

	/**
	 * Parse link title
	 *
	 *   - on success it returns a string and updates state.pos;
	 *   - on failure it returns null
	 *
	 * @param  {Object} state
	 * @param  {Number} pos
	 * @api private
	 */

	module.exports = function parseLinkTitle(state, pos) {
	  var code,
	      start = pos,
	      max = state.posMax,
	      marker = state.src.charCodeAt(pos);

	  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return false; }

	  pos++;

	  // if opening marker is "(", switch it to closing marker ")"
	  if (marker === 0x28) { marker = 0x29; }

	  while (pos < max) {
	    code = state.src.charCodeAt(pos);
	    if (code === marker) {
	      state.pos = pos + 1;
	      state.linkContent = unescapeMd(state.src.slice(start + 1, pos));
	      return true;
	    }
	    if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos += 2;
	      continue;
	    }

	    pos++;
	  }

	  return false;
	};


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function normalizeReference(str) {
	  // use .toUpperCase() instead of .toLowerCase()
	  // here to avoid a conflict with Object.prototype
	  // members (most notably, `__proto__`)
	  return str.trim().replace(/\s+/g, ' ').toUpperCase();
	};


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// List of valid url schemas, accorting to commonmark spec
	// http://jgm.github.io/CommonMark/spec.html#autolinks

	'use strict';


	module.exports = [
	  'coap',
	  'doi',
	  'javascript',
	  'aaa',
	  'aaas',
	  'about',
	  'acap',
	  'cap',
	  'cid',
	  'crid',
	  'data',
	  'dav',
	  'dict',
	  'dns',
	  'file',
	  'ftp',
	  'geo',
	  'go',
	  'gopher',
	  'h323',
	  'http',
	  'https',
	  'iax',
	  'icap',
	  'im',
	  'imap',
	  'info',
	  'ipp',
	  'iris',
	  'iris.beep',
	  'iris.xpc',
	  'iris.xpcs',
	  'iris.lwz',
	  'ldap',
	  'mailto',
	  'mid',
	  'msrp',
	  'msrps',
	  'mtqp',
	  'mupdate',
	  'news',
	  'nfs',
	  'ni',
	  'nih',
	  'nntp',
	  'opaquelocktoken',
	  'pop',
	  'pres',
	  'rtsp',
	  'service',
	  'session',
	  'shttp',
	  'sieve',
	  'sip',
	  'sips',
	  'sms',
	  'snmp',
	  'soap.beep',
	  'soap.beeps',
	  'tag',
	  'tel',
	  'telnet',
	  'tftp',
	  'thismessage',
	  'tn3270',
	  'tip',
	  'tv',
	  'urn',
	  'vemmi',
	  'ws',
	  'wss',
	  'xcon',
	  'xcon-userid',
	  'xmlrpc.beep',
	  'xmlrpc.beeps',
	  'xmpp',
	  'z39.50r',
	  'z39.50s',
	  'adiumxtra',
	  'afp',
	  'afs',
	  'aim',
	  'apt',
	  'attachment',
	  'aw',
	  'beshare',
	  'bitcoin',
	  'bolo',
	  'callto',
	  'chrome',
	  'chrome-extension',
	  'com-eventbrite-attendee',
	  'content',
	  'cvs',
	  'dlna-playsingle',
	  'dlna-playcontainer',
	  'dtn',
	  'dvb',
	  'ed2k',
	  'facetime',
	  'feed',
	  'finger',
	  'fish',
	  'gg',
	  'git',
	  'gizmoproject',
	  'gtalk',
	  'hcp',
	  'icon',
	  'ipn',
	  'irc',
	  'irc6',
	  'ircs',
	  'itms',
	  'jar',
	  'jms',
	  'keyparc',
	  'lastfm',
	  'ldaps',
	  'magnet',
	  'maps',
	  'market',
	  'message',
	  'mms',
	  'ms-help',
	  'msnim',
	  'mumble',
	  'mvn',
	  'notes',
	  'oid',
	  'palm',
	  'paparazzi',
	  'platform',
	  'proxy',
	  'psyc',
	  'query',
	  'res',
	  'resource',
	  'rmi',
	  'rsync',
	  'rtmp',
	  'secondlife',
	  'sftp',
	  'sgn',
	  'skype',
	  'smb',
	  'soldat',
	  'spotify',
	  'ssh',
	  'steam',
	  'svn',
	  'teamspeak',
	  'things',
	  'udp',
	  'unreal',
	  'ut2004',
	  'ventrilo',
	  'view-source',
	  'webcal',
	  'wtai',
	  'wyciwyg',
	  'xfire',
	  'xri',
	  'ymsgr'
	];


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var replaceEntities = __webpack_require__(141).replaceEntities;

	module.exports = function normalizeLink(url) {
	  var normalized = replaceEntities(url);
	  // We shouldn't care about the result of malformed URIs,
	  // and should not throw an exception.
	  try {
	    normalized = decodeURI(normalized);
	  } catch (err) {}
	  return encodeURI(normalized);
	};


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// Regexps to match html elements

	'use strict';


	function replace(regex, options) {
	  regex = regex.source;
	  options = options || '';

	  return function self(name, val) {
	    if (!name) {
	      return new RegExp(regex, options);
	    }
	    val = val.source || val;
	    regex = regex.replace(name, val);
	    return self;
	  };
	}


	var attr_name     = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;

	var unquoted      = /[^"'=<>`\x00-\x20]+/;
	var single_quoted = /'[^']*'/;
	var double_quoted = /"[^"]*"/;

	/*eslint no-spaced-func:0*/
	var attr_value  = replace(/(?:unquoted|single_quoted|double_quoted)/)
	                    ('unquoted', unquoted)
	                    ('single_quoted', single_quoted)
	                    ('double_quoted', double_quoted)
	                    ();

	var attribute   = replace(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)
	                    ('attr_name', attr_name)
	                    ('attr_value', attr_value)
	                    ();

	var open_tag    = replace(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)
	                    ('attribute', attribute)
	                    ();

	var close_tag   = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
	var comment     = /<!--([^-]+|[-][^-]+)*-->/;
	var processing  = /<[?].*?[?]>/;
	var declaration = /<![A-Z]+\s+[^>]*>/;
	var cdata       = /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/;

	var HTML_TAG_RE = replace(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)
	  ('open_tag', open_tag)
	  ('close_tag', close_tag)
	  ('comment', comment)
	  ('processing', processing)
	  ('declaration', declaration)
	  ('cdata', cdata)
	  ();


	module.exports.HTML_TAG_RE = HTML_TAG_RE;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// List of valid html blocks names, accorting to commonmark spec
	// http://jgm.github.io/CommonMark/spec.html#html-blocks

	'use strict';

	var html_blocks = {};

	[
	  'article',
	  'aside',
	  'button',
	  'blockquote',
	  'body',
	  'canvas',
	  'caption',
	  'col',
	  'colgroup',
	  'dd',
	  'div',
	  'dl',
	  'dt',
	  'embed',
	  'fieldset',
	  'figcaption',
	  'figure',
	  'footer',
	  'form',
	  'h1',
	  'h2',
	  'h3',
	  'h4',
	  'h5',
	  'h6',
	  'header',
	  'hgroup',
	  'hr',
	  'iframe',
	  'li',
	  'map',
	  'object',
	  'ol',
	  'output',
	  'p',
	  'pre',
	  'progress',
	  'script',
	  'section',
	  'style',
	  'table',
	  'tbody',
	  'td',
	  'textarea',
	  'tfoot',
	  'th',
	  'tr',
	  'thead',
	  'ul',
	  'video'
	].forEach(function (name) { html_blocks[name] = true; });


	module.exports = html_blocks;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return (root['Autolinker'] = factory());
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    root['Autolinker'] = factory();
	  }
	}(this, function () {

	/*!
	 * Autolinker.js
	 * 0.15.3
	 *
	 * Copyright(c) 2015 Gregory Jacobs <greg@greg-jacobs.com>
	 * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
	 *
	 * https://github.com/gregjacobs/Autolinker.js
	 */
	/**
	 * @class Autolinker
	 * @extends Object
	 * 
	 * Utility class used to process a given string of text, and wrap the URLs, email addresses, and Twitter handles in 
	 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
	 * 
	 * Any of the configuration options may be provided in an Object (map) provided to the Autolinker constructor, which
	 * will configure how the {@link #link link()} method will process the links.
	 * 
	 * For example:
	 * 
	 *     var autolinker = new Autolinker( {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     
	 *     var html = autolinker.link( "Joe went to www.yahoo.com" );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * The {@link #static-link static link()} method may also be used to inline options into a single call, which may
	 * be more convenient for one-off uses. For example:
	 * 
	 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * ## Custom Replacements of Links
	 * 
	 * If the configuration options do not provide enough flexibility, a {@link #replaceFn} may be provided to fully customize
	 * the output of Autolinker. This function is called once for each URL/Email/Twitter handle match that is encountered.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
	 *                         var tag = autolinker.getTagBuilder().build( match );  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
	 *                         tag.setAttr( 'rel', 'nofollow' );
	 *                         tag.addClass( 'external-link' );
	 *                         
	 *                         return tag;
	 *                         
	 *                     } else {
	 *                         return true;  // let Autolinker perform its normal anchor tag replacement
	 *                     }
	 *                     
	 *                 case 'email' :
	 *                     var email = match.getEmail();
	 *                     console.log( "email: ", email );
	 *                     
	 *                     if( email === "my@own.address" ) {
	 *                         return false;  // don't auto-link this particular email address; leave as-is
	 *                     } else {
	 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
	 *                     }
	 *                 
	 *                 case 'twitter' :
	 *                     var twitterHandle = match.getTwitterHandle();
	 *                     console.log( twitterHandle );
	 *                     
	 *                     return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
	 *             }
	 *         }
	 *     } );
	 * 
	 * 
	 * The function may return the following values:
	 * 
	 * - `true` (Boolean): Allow Autolinker to replace the match as it normally would.
	 * - `false` (Boolean): Do not replace the current match at all - leave as-is.
	 * - Any String: If a string is returned from the function, the string will be used directly as the replacement HTML for
	 *   the match.
	 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify an HTML tag before writing out its HTML text.
	 * 
	 * @constructor
	 * @param {Object} [config] The configuration options for the Autolinker instance, specified in an Object (map).
	 */
	var Autolinker = function( cfg ) {
		Autolinker.Util.assign( this, cfg );  // assign the properties of `cfg` onto the Autolinker instance. Prototype properties will be used for missing configs.
	};


	Autolinker.prototype = {
		constructor : Autolinker,  // fix constructor property
		
		/**
		 * @cfg {Boolean} urls
		 * 
		 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
		 */
		urls : true,
		
		/**
		 * @cfg {Boolean} email
		 * 
		 * `true` if email addresses should be automatically linked, `false` if they should not be.
		 */
		email : true,
		
		/**
		 * @cfg {Boolean} twitter
		 * 
		 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
		 */
		twitter : true,
		
		/**
		 * @cfg {Boolean} newWindow
		 * 
		 * `true` if the links should open in a new window, `false` otherwise.
		 */
		newWindow : true,
		
		/**
		 * @cfg {Boolean} stripPrefix
		 * 
		 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text, 
		 * `false` otherwise.
		 */
		stripPrefix : true,
		
		/**
		 * @cfg {Number} truncate
		 * 
		 * A number for how many characters long URLs/emails/twitter handles should be truncated to inside the text of 
		 * a link. If the URL/email/twitter is over this number of characters, it will be truncated to this length by 
		 * adding a two period ellipsis ('..') to the end of the string.
		 * 
		 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file' truncated to 25 characters might look
		 * something like this: 'yahoo.com/some/long/pat..'
		 */
		truncate : undefined,
		
		/**
		 * @cfg {String} className
		 * 
		 * A CSS class name to add to the generated links. This class will be added to all links, as well as this class
		 * plus url/email/twitter suffixes for styling url/email/twitter links differently.
		 * 
		 * For example, if this config is provided as "myLink", then:
		 * 
		 * - URL links will have the CSS classes: "myLink myLink-url"
		 * - Email links will have the CSS classes: "myLink myLink-email", and
		 * - Twitter links will have the CSS classes: "myLink myLink-twitter"
		 */
		className : "",
		
		/**
		 * @cfg {Function} replaceFn
		 * 
		 * A function to individually process each URL/Email/Twitter match found in the input string.
		 * 
		 * See the class's description for usage.
		 * 
		 * This function is called with the following parameters:
		 * 
		 * @cfg {Autolinker} replaceFn.autolinker The Autolinker instance, which may be used to retrieve child objects from (such
		 *   as the instance's {@link #getTagBuilder tag builder}).
		 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which can be used to retrieve information about the
		 *   {@link Autolinker.match.Url URL}/{@link Autolinker.match.Email email}/{@link Autolinker.match.Twitter Twitter}
		 *   match that the `replaceFn` is currently processing.
		 */
		
		
		/**
		 * @private
		 * @property {Autolinker.htmlParser.HtmlParser} htmlParser
		 * 
		 * The HtmlParser instance used to skip over HTML tags, while finding text nodes to process. This is lazily instantiated
		 * in the {@link #getHtmlParser} method.
		 */
		htmlParser : undefined,
		
		/**
		 * @private
		 * @property {Autolinker.matchParser.MatchParser} matchParser
		 * 
		 * The MatchParser instance used to find URL/email/Twitter matches in the text nodes of an input string passed to
		 * {@link #link}. This is lazily instantiated in the {@link #getMatchParser} method.
		 */
		matchParser : undefined,
		
		/**
		 * @private
		 * @property {Autolinker.AnchorTagBuilder} tagBuilder
		 * 
		 * The AnchorTagBuilder instance used to build the URL/email/Twitter replacement anchor tags. This is lazily instantiated
		 * in the {@link #getTagBuilder} method.
		 */
		tagBuilder : undefined,
		
		
		/**
		 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
		 * Does not link URLs found within HTML tags.
		 * 
		 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
		 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
		 * 
		 * This method finds the text around any HTML elements in the input `textOrHtml`, which will be the text that is processed.
		 * Any original HTML elements will be left as-is, as well as the text that is already wrapped in anchor (&lt;a&gt;) tags.
		 * 
		 * @param {String} textOrHtml The HTML or text to link URLs, email addresses, and Twitter handles within (depending on if
		 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
		 * @return {String} The HTML, with URLs/emails/Twitter handles automatically linked.
		 */
		link : function( textOrHtml ) {
			var htmlParser = this.getHtmlParser(),
			    htmlNodes = htmlParser.parse( textOrHtml ),
			    anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have
			    resultHtml = [];
			
			for( var i = 0, len = htmlNodes.length; i < len; i++ ) {
				var node = htmlNodes[ i ],
				    nodeType = node.getType(),
				    nodeText = node.getText();
				
				if( nodeType === 'element' ) {
					// Process HTML nodes in the input `textOrHtml`
					if( node.getTagName() === 'a' ) {
						if( !node.isClosing() ) {  // it's the start <a> tag
							anchorTagStackCount++;
						} else {   // it's the end </a> tag
							anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
						}
					}
					resultHtml.push( nodeText );  // now add the text of the tag itself verbatim
					
				} else if( nodeType === 'entity' ) {
					resultHtml.push( nodeText );  // append HTML entity nodes (such as '&nbsp;') verbatim
					
				} else {
					// Process text nodes in the input `textOrHtml`
					if( anchorTagStackCount === 0 ) {
						// If we're not within an <a> tag, process the text node to linkify
						var linkifiedStr = this.linkifyStr( nodeText );
						resultHtml.push( linkifiedStr );
						
					} else {
						// `text` is within an <a> tag, simply append the text - we do not want to autolink anything 
						// already within an <a>...</a> tag
						resultHtml.push( nodeText );
					}
				}
			}
			
			return resultHtml.join( "" );
		},
		
		
		/**
		 * Process the text that lies in between HTML tags, performing the anchor tag replacements for matched 
		 * URLs/emails/Twitter handles, and returns the string with the replacements made. 
		 * 
		 * This method does the actual wrapping of URLs/emails/Twitter handles with anchor tags.
		 * 
		 * @private
		 * @param {String} str The string of text to auto-link.
		 * @return {String} The text with anchor tags auto-filled.
		 */
		linkifyStr : function( str ) {
			return this.getMatchParser().replace( str, this.createMatchReturnVal, this );
		},
		
		
		/**
		 * Creates the return string value for a given match in the input string, for the {@link #processTextNode} method.
		 * 
		 * This method handles the {@link #replaceFn}, if one was provided.
		 * 
		 * @private
		 * @param {Autolinker.match.Match} match The Match object that represents the match.
		 * @return {String} The string that the `match` should be replaced with. This is usually the anchor tag string, but
		 *   may be the `matchStr` itself if the match is not to be replaced.
		 */
		createMatchReturnVal : function( match ) {
			// Handle a custom `replaceFn` being provided
			var replaceFnResult;
			if( this.replaceFn ) {
				replaceFnResult = this.replaceFn.call( this, this, match );  // Autolinker instance is the context, and the first arg
			}
			
			if( typeof replaceFnResult === 'string' ) {
				return replaceFnResult;  // `replaceFn` returned a string, use that
				
			} else if( replaceFnResult === false ) {
				return match.getMatchedText();  // no replacement for the match
				
			} else if( replaceFnResult instanceof Autolinker.HtmlTag ) {
				return replaceFnResult.toString();
			
			} else {  // replaceFnResult === true, or no/unknown return value from function
				// Perform Autolinker's default anchor tag generation
				var tagBuilder = this.getTagBuilder(),
				    anchorTag = tagBuilder.build( match );  // returns an Autolinker.HtmlTag instance
				
				return anchorTag.toString();
			}
		},
		
		
		/**
		 * Lazily instantiates and returns the {@link #htmlParser} instance for this Autolinker instance.
		 * 
		 * @protected
		 * @return {Autolinker.htmlParser.HtmlParser}
		 */
		getHtmlParser : function() {
			var htmlParser = this.htmlParser;
			
			if( !htmlParser ) {
				htmlParser = this.htmlParser = new Autolinker.htmlParser.HtmlParser();
			}
			
			return htmlParser;
		},
		
		
		/**
		 * Lazily instantiates and returns the {@link #matchParser} instance for this Autolinker instance.
		 * 
		 * @protected
		 * @return {Autolinker.matchParser.MatchParser}
		 */
		getMatchParser : function() {
			var matchParser = this.matchParser;
			
			if( !matchParser ) {
				matchParser = this.matchParser = new Autolinker.matchParser.MatchParser( {
					urls : this.urls,
					email : this.email,
					twitter : this.twitter,
					stripPrefix : this.stripPrefix
				} );
			}
			
			return matchParser;
		},
		
		
		/**
		 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
		 * if it does not yet exist.
		 * 
		 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that 
		 * Autolinker would normally generate, and then allow for modifications before returning it. For example:
		 * 
		 *     var html = Autolinker.link( "Test google.com", {
		 *         replaceFn : function( autolinker, match ) {
		 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
		 *             tag.setAttr( 'rel', 'nofollow' );
		 *             
		 *             return tag;
		 *         }
		 *     } );
		 *     
		 *     // generated html:
		 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
		 * 
		 * @return {Autolinker.AnchorTagBuilder}
		 */
		getTagBuilder : function() {
			var tagBuilder = this.tagBuilder;
			
			if( !tagBuilder ) {
				tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {
					newWindow   : this.newWindow,
					truncate    : this.truncate,
					className   : this.className
				} );
			}
			
			return tagBuilder;
		}

	};


	/**
	 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
	 * Does not link URLs found within HTML tags.
	 * 
	 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
	 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
	 * 
	 * Example:
	 * 
	 *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
	 *     // Produces: "Go to <a href="http://google.com">google.com</a>"
	 * 
	 * @static
	 * @param {String} textOrHtml The HTML or text to find URLs, email addresses, and Twitter handles within (depending on if
	 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
	 * @param {Object} [options] Any of the configuration options for the Autolinker class, specified in an Object (map).
	 *   See the class description for an example call.
	 * @return {String} The HTML text, with URLs automatically linked
	 */
	Autolinker.link = function( textOrHtml, options ) {
		var autolinker = new Autolinker( options );
		return autolinker.link( textOrHtml );
	};


	// Autolinker Namespaces
	Autolinker.match = {};
	Autolinker.htmlParser = {};
	Autolinker.matchParser = {};
	/*global Autolinker */
	/*jshint eqnull:true, boss:true */
	/**
	 * @class Autolinker.Util
	 * @singleton
	 * 
	 * A few utility methods for Autolinker.
	 */
	Autolinker.Util = {
		
		/**
		 * @property {Function} abstractMethod
		 * 
		 * A function object which represents an abstract method.
		 */
		abstractMethod : function() { throw "abstract"; },
		
		
		/**
		 * Assigns (shallow copies) the properties of `src` onto `dest`.
		 * 
		 * @param {Object} dest The destination object.
		 * @param {Object} src The source object.
		 * @return {Object} The destination object (`dest`)
		 */
		assign : function( dest, src ) {
			for( var prop in src ) {
				if( src.hasOwnProperty( prop ) ) {
					dest[ prop ] = src[ prop ];
				}
			}
			
			return dest;
		},
		
		
		/**
		 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
		 * 
		 * @param {Function} superclass The constructor function for the superclass.
		 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
		 *   special property `constructor`, which will be used as the new subclass's constructor function.
		 * @return {Function} The new subclass function.
		 */
		extend : function( superclass, protoProps ) {
			var superclassProto = superclass.prototype;
			
			var F = function() {};
			F.prototype = superclassProto;
			
			var subclass;
			if( protoProps.hasOwnProperty( 'constructor' ) ) {
				subclass = protoProps.constructor;
			} else {
				subclass = function() { superclassProto.constructor.apply( this, arguments ); };
			}
			
			var subclassProto = subclass.prototype = new F();  // set up prototype chain
			subclassProto.constructor = subclass;  // fix constructor property
			subclassProto.superclass = superclassProto;
			
			delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
			Autolinker.Util.assign( subclassProto, protoProps );
			
			return subclass;
		},
		
		
		/**
		 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
		 * end of the string (by default, two periods: '..'). If the `str` length does not exceed 
		 * `len`, the string will be returned unchanged.
		 * 
		 * @param {String} str The string to truncate and add an ellipsis to.
		 * @param {Number} truncateLen The length to truncate the string at.
		 * @param {String} [ellipsisChars=..] The ellipsis character(s) to add to the end of `str`
		 *   when truncated. Defaults to '..'
		 */
		ellipsis : function( str, truncateLen, ellipsisChars ) {
			if( str.length > truncateLen ) {
				ellipsisChars = ( ellipsisChars == null ) ? '..' : ellipsisChars;
				str = str.substring( 0, truncateLen - ellipsisChars.length ) + ellipsisChars;
			}
			return str;
		},
		
		
		/**
		 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
		 * 
		 * @param {Array} arr The array to find an element of.
		 * @param {*} element The element to find in the array, and return the index of.
		 * @return {Number} The index of the `element`, or -1 if it was not found.
		 */
		indexOf : function( arr, element ) {
			if( Array.prototype.indexOf ) {
				return arr.indexOf( element );
				
			} else {
				for( var i = 0, len = arr.length; i < len; i++ ) {
					if( arr[ i ] === element ) return i;
				}
				return -1;
			}
		},
		
		
		
		/**
		 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
		 * with a regular expression that contains capturing parenthesis.
		 * 
		 * For example:
		 * 
		 *     // Modern browsers: 
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
		 *     
		 *     // Old IE (including IE8):
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
		 *     
		 * This method emulates the functionality of modern browsers for the old IE case.
		 * 
		 * @param {String} str The string to split.
		 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
		 *   character(s) will be spliced into the array, as in the "modern browsers" example in the 
		 *   description of this method. 
		 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
		 *   Note #2: for simplicity's sake, the regular expression does not need 
		 *   to contain capturing parenthesis - it will be assumed that any match has them.
		 * @return {String[]} The split array of strings, with the splitting character(s) included.
		 */
		splitAndCapture : function( str, splitRegex ) {
			if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );
			
			var result = [],
			    lastIdx = 0,
			    match;
			
			while( match = splitRegex.exec( str ) ) {
				result.push( str.substring( lastIdx, match.index ) );
				result.push( match[ 0 ] );  // push the splitting char(s)
				
				lastIdx = match.index + match[ 0 ].length;
			}
			result.push( str.substring( lastIdx ) );
			
			return result;
		}
		
	};
	/*global Autolinker */
	/*jshint boss:true */
	/**
	 * @class Autolinker.HtmlTag
	 * @extends Object
	 * 
	 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
	 * 
	 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
	 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
	 * 
	 * ## Examples
	 * 
	 * Example instantiation:
	 * 
	 *     var tag = new Autolinker.HtmlTag( {
	 *         tagName : 'a',
	 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
	 *         innerHtml : 'Google'
	 *     } );
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 *     // Individual accessor methods
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 * 
	 * 
	 * Using mutator methods (which may be used in combination with instantiation config properties):
	 * 
	 *     var tag = new Autolinker.HtmlTag();
	 *     tag.setTagName( 'a' );
	 *     tag.setAttr( 'href', 'http://google.com' );
	 *     tag.addClass( 'external-link' );
	 *     tag.setInnerHtml( 'Google' );
	 *     
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 * 
	 * ## Example use within a {@link Autolinker#replaceFn replaceFn}
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 *     
	 *     
	 * ## Example use with a new tag for the replacement
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = new Autolinker.HtmlTag( {
	 *                 tagName : 'button',
	 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
	 *                 innerHtml : 'Load URL: ' + match.getAnchorText()
	 *             } );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
	 */
	Autolinker.HtmlTag = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} tagName
		 * 
		 * The tag name. Ex: 'a', 'button', etc.
		 * 
		 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toString}
		 * is executed.
		 */
		
		/**
		 * @cfg {Object.<String, String>} attrs
		 * 
		 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
		 * values are the attribute values.
		 */
		
		/**
		 * @cfg {String} innerHtml
		 * 
		 * The inner HTML for the tag. 
		 * 
		 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym 
		 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
		 * if you prefer, but this one is recommended.
		 */
		
		/**
		 * @cfg {String} innerHTML
		 * 
		 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
		 * for acronym names.
		 */
		
		
		/**
		 * @protected
		 * @property {RegExp} whitespaceRegex
		 * 
		 * Regular expression used to match whitespace in a string of CSS classes.
		 */
		whitespaceRegex : /\s+/,
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
			
			this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
		},
		
		
		/**
		 * Sets the tag name that will be used to generate the tag with.
		 * 
		 * @param {String} tagName
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setTagName : function( tagName ) {
			this.tagName = tagName;
			return this;
		},
		
		
		/**
		 * Retrieves the tag name.
		 * 
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName || "";
		},
		
		
		/**
		 * Sets an attribute on the HtmlTag.
		 * 
		 * @param {String} attrName The attribute name to set.
		 * @param {String} attrValue The attribute value to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttr : function( attrName, attrValue ) {
			var tagAttrs = this.getAttrs();
			tagAttrs[ attrName ] = attrValue;
			
			return this;
		},
		
		
		/**
		 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
		 * 
		 * @param {String} name The attribute name to retrieve.
		 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
		 */
		getAttr : function( attrName ) {
			return this.getAttrs()[ attrName ];
		},
		
		
		/**
		 * Sets one or more attributes on the HtmlTag.
		 * 
		 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttrs : function( attrs ) {
			var tagAttrs = this.getAttrs();
			Autolinker.Util.assign( tagAttrs, attrs );
			
			return this;
		},
		
		
		/**
		 * Retrieves the attributes Object (map) for the HtmlTag.
		 * 
		 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
		 */
		getAttrs : function() {
			return this.attrs || ( this.attrs = {} );
		},
		
		
		/**
		 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setClass : function( cssClass ) {
			return this.setAttr( 'class', cssClass );
		},
		
		
		/**
		 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to add.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		addClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    newClasses = cssClass.split( whitespaceRegex ),
			    newClass;
			
			while( newClass = newClasses.shift() ) {
				if( indexOf( classes, newClass ) === -1 ) {
					classes.push( newClass );
				}
			}
			
			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},
		
		
		/**
		 * Convenience method to remove one or more CSS classes from the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to remove.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		removeClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    removeClasses = cssClass.split( whitespaceRegex ),
			    removeClass;
			
			while( classes.length && ( removeClass = removeClasses.shift() ) ) {
				var idx = indexOf( classes, removeClass );
				if( idx !== -1 ) {
					classes.splice( idx, 1 );
				}
			}
			
			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},
		
		
		/**
		 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
		 * there are multiple.
		 * 
		 * @return {String}
		 */
		getClass : function() {
			return this.getAttrs()[ 'class' ] || "";
		},
		
		
		/**
		 * Convenience method to check if the tag has a CSS class or not.
		 * 
		 * @param {String} cssClass The CSS class to check for.
		 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
		 */
		hasClass : function( cssClass ) {
			return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;
		},
		
		
		/**
		 * Sets the inner HTML for the tag.
		 * 
		 * @param {String} html The inner HTML to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setInnerHtml : function( html ) {
			this.innerHtml = html;
			
			return this;
		},
		
		
		/**
		 * Retrieves the inner HTML for the tag.
		 * 
		 * @return {String}
		 */
		getInnerHtml : function() {
			return this.innerHtml || "";
		},
		
		
		/**
		 * Override of superclass method used to generate the HTML string for the tag.
		 * 
		 * @return {String}
		 */
		toString : function() {
			var tagName = this.getTagName(),
			    attrsStr = this.buildAttrsStr();
			
			attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes
			
			return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );
		},
		
		
		/**
		 * Support method for {@link #toString}, returns the string space-separated key="value" pairs, used to populate 
		 * the stringified HtmlTag.
		 * 
		 * @protected
		 * @return {String} Example return: `attr1="value1" attr2="value2"`
		 */
		buildAttrsStr : function() {
			if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string
			
			var attrs = this.getAttrs(),
			    attrsArr = [];
			
			for( var prop in attrs ) {
				if( attrs.hasOwnProperty( prop ) ) {
					attrsArr.push( prop + '="' + attrs[ prop ] + '"' );
				}
			}
			return attrsArr.join( " " );
		}
		
	} );
	/*global Autolinker */
	/*jshint sub:true */
	/**
	 * @protected
	 * @class Autolinker.AnchorTagBuilder
	 * @extends Object
	 * 
	 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found.
	 * 
	 * Normally this class is instantiated, configured, and used internally by an {@link Autolinker} instance, but may 
	 * actually be retrieved in a {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag} instances
	 * which may be modified before returning from the {@link Autolinker#replaceFn replaceFn}. For example:
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 */
	Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {Boolean} newWindow
		 * @inheritdoc Autolinker#newWindow
		 */
		
		/**
		 * @cfg {Number} truncate
		 * @inheritdoc Autolinker#truncate
		 */
		
		/**
		 * @cfg {String} className
		 * @inheritdoc Autolinker#className
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},
		
		
		/**
		 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the matched URL/email/Twitter text,
		 * via its `match` object.
		 * 
		 * @param {Autolinker.match.Match} match The Match instance to generate an anchor tag from.
		 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
		 */
		build : function( match ) {
			var tag = new Autolinker.HtmlTag( {
				tagName   : 'a',
				attrs     : this.createAttrs( match.getType(), match.getAnchorHref() ),
				innerHtml : this.processAnchorText( match.getAnchorText() )
			} );
			
			return tag;
		},
		
		
		/**
		 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;) tag being generated.
		 * 
		 * @protected
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @param {String} href The href for the anchor tag.
		 * @return {Object} A key/value Object (map) of the anchor tag's attributes. 
		 */
		createAttrs : function( matchType, anchorHref ) {
			var attrs = {
				'href' : anchorHref  // we'll always have the `href` attribute
			};
			
			var cssClass = this.createCssClass( matchType );
			if( cssClass ) {
				attrs[ 'class' ] = cssClass;
			}
			if( this.newWindow ) {
				attrs[ 'target' ] = "_blank";
			}
			
			return attrs;
		},
		
		
		/**
		 * Creates the CSS class that will be used for a given anchor tag, based on the `matchType` and the {@link #className}
		 * config.
		 * 
		 * @private
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @return {String} The CSS class string for the link. Example return: "myLink myLink-url". If no {@link #className}
		 *   was configured, returns an empty string.
		 */
		createCssClass : function( matchType ) {
			var className = this.className;
			
			if( !className ) 
				return "";
			else
				return className + " " + className + "-" + matchType;  // ex: "myLink myLink-url", "myLink myLink-email", or "myLink myLink-twitter"
		},
		
		
		/**
		 * Processes the `anchorText` by truncating the text according to the {@link #truncate} config.
		 * 
		 * @private
		 * @param {String} anchorText The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The processed `anchorText`.
		 */
		processAnchorText : function( anchorText ) {
			anchorText = this.doTruncate( anchorText );
			
			return anchorText;
		},
		
		
		/**
		 * Performs the truncation of the `anchorText`, if the `anchorText` is longer than the {@link #truncate} option.
		 * Truncates the text to 2 characters fewer than the {@link #truncate} option, and adds ".." to the end.
		 * 
		 * @private
		 * @param {String} text The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The truncated anchor text.
		 */
		doTruncate : function( anchorText ) {
			return Autolinker.Util.ellipsis( anchorText, this.truncate || Number.POSITIVE_INFINITY );
		}
		
	} );
	/*global Autolinker */
	/**
	 * @private
	 * @class Autolinker.htmlParser.HtmlParser
	 * @extends Object
	 * 
	 * An HTML parser implementation which simply walks an HTML string and returns an array of 
	 * {@link Autolinker.htmlParser.HtmlNode HtmlNodes} that represent the basic HTML structure of the input string.
	 * 
	 * Autolinker uses this to only link URLs/emails/Twitter handles within text nodes, effectively ignoring / "walking
	 * around" HTML tags.
	 */
	Autolinker.htmlParser.HtmlParser = Autolinker.Util.extend( Object, {
		
		/**
		 * @private
		 * @property {RegExp} htmlRegex
		 * 
		 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
		 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
		 * 
		 * Capturing groups:
		 * 
		 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
		 * 2. If it is an end tag, this group will have the '/'.
		 * 3. The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)
		 */
		htmlRegex : (function() {
			var tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
			    attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
			    attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
			    nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'
			
			return new RegExp( [
				// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
				'(?:',
					'<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag
						
						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',  // one or more whitespace chars before an attribute
							
							// Either:
							// A. attr="value", or 
							// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
							'(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',
						')*',
					'>',
				')',
				
				'|',
				
				// All other HTML tags (i.e. tags that are not <!DOCTYPE>)
				'(?:',
					'<(/)?',  // Beginning of a tag. Either '<' for a start tag, or '</' for an end tag. 
					          // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.
				
						// *** Capturing Group 3 - The tag name
						'(' + tagNameRegex.source + ')',
						
						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',                // one or more whitespace chars before an attribute
							nameEqualsValueRegex,  // attr="value" (with optional ="value" part)
						')*',
						
						'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'
					'>',
				')'
			].join( "" ), 'gi' );
		} )(),
		
		/**
		 * @private
		 * @property {RegExp} htmlCharacterEntitiesRegex
		 *
		 * The regular expression that matches common HTML character entities.
		 * 
		 * Ignoring &amp; as it could be part of a query string -- handling it separately.
		 */
		htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
		
		
		/**
		 * Parses an HTML string and returns a simple array of {@link Autolinker.htmlParser.HtmlNode HtmlNodes} to represent
		 * the HTML structure of the input string. 
		 * 
		 * @param {String} html The HTML to parse.
		 * @return {Autolinker.htmlParser.HtmlNode[]}
		 */
		parse : function( html ) {
			var htmlRegex = this.htmlRegex,
			    currentResult,
			    lastIndex = 0,
			    textAndEntityNodes,
			    nodes = [];  // will be the result of the method
			
			while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {
				var tagText = currentResult[ 0 ],
				    tagName = currentResult[ 1 ] || currentResult[ 3 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a" or "img") 
				    isClosingTag = !!currentResult[ 2 ],
				    inBetweenTagsText = html.substring( lastIndex, currentResult.index );
				
				// Push TextNodes and EntityNodes for any text found between tags
				if( inBetweenTagsText ) {
					textAndEntityNodes = this.parseTextAndEntityNodes( inBetweenTagsText );
					nodes.push.apply( nodes, textAndEntityNodes );
				}
				
				// Push the ElementNode
				nodes.push( this.createElementNode( tagText, tagName, isClosingTag ) );
				
				lastIndex = currentResult.index + tagText.length;
			}
			
			// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
			if( lastIndex < html.length ) {
				var text = html.substring( lastIndex );
				
				// Push TextNodes and EntityNodes for any text found between tags
				if( text ) {
					textAndEntityNodes = this.parseTextAndEntityNodes( text );
					nodes.push.apply( nodes, textAndEntityNodes );
				}
			}
			
			return nodes;
		},
		
		
		/**
		 * Parses text and HTML entity nodes from a given string. The input string should not have any HTML tags (elements)
		 * within it.
		 * 
		 * @private
		 * @param {String} text The text to parse.
		 * @return {Autolinker.htmlParser.HtmlNode[]} An array of HtmlNodes to represent the 
		 *   {@link Autolinker.htmlParser.TextNode TextNodes} and {@link Autolinker.htmlParser.EntityNode EntityNodes} found.
		 */
		parseTextAndEntityNodes : function( text ) {
			var nodes = [],
			    textAndEntityTokens = Autolinker.Util.splitAndCapture( text, this.htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array
			
			// Every even numbered token is a TextNode, and every odd numbered token is an EntityNode
			// For example: an input `text` of "Test &quot;this&quot; today" would turn into the 
			//   `textAndEntityTokens`: [ 'Test ', '&quot;', 'this', '&quot;', ' today' ]
			for( var i = 0, len = textAndEntityTokens.length; i < len; i += 2 ) {
				var textToken = textAndEntityTokens[ i ],
				    entityToken = textAndEntityTokens[ i + 1 ];
				
				if( textToken ) nodes.push( this.createTextNode( textToken ) );
				if( entityToken ) nodes.push( this.createEntityNode( entityToken ) );
			}
			return nodes;
		},
		
		
		/**
		 * Factory method to create an {@link Autolinker.htmlParser.ElementNode ElementNode}.
		 * 
		 * @private
		 * @param {String} tagText The full text of the tag (element) that was matched, including its attributes.
		 * @param {String} tagName The name of the tag. Ex: An &lt;img&gt; tag would be passed to this method as "img".
		 * @param {Boolean} isClosingTag `true` if it's a closing tag, false otherwise.
		 * @return {Autolinker.htmlParser.ElementNode}
		 */
		createElementNode : function( tagText, tagName, isClosingTag ) {
			return new Autolinker.htmlParser.ElementNode( {
				text    : tagText,
				tagName : tagName.toLowerCase(),
				closing : isClosingTag
			} );
		},
		
		
		/**
		 * Factory method to create a {@link Autolinker.htmlParser.EntityNode EntityNode}.
		 * 
		 * @private
		 * @param {String} text The text that was matched for the HTML entity (such as '&amp;nbsp;').
		 * @return {Autolinker.htmlParser.EntityNode}
		 */
		createEntityNode : function( text ) {
			return new Autolinker.htmlParser.EntityNode( { text: text } );
		},
		
		
		/**
		 * Factory method to create a {@link Autolinker.htmlParser.TextNode TextNode}.
		 * 
		 * @private
		 * @param {String} text The text that was matched.
		 * @return {Autolinker.htmlParser.TextNode}
		 */
		createTextNode : function( text ) {
			return new Autolinker.htmlParser.TextNode( { text: text } );
		}
		
	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents an HTML node found in an input string. An HTML node is one of the following:
	 * 
	 * 1. An {@link Autolinker.htmlParser.ElementNode ElementNode}, which represents HTML tags.
	 * 2. A {@link Autolinker.htmlParser.TextNode TextNode}, which represents text outside or within HTML tags.
	 * 3. A {@link Autolinker.htmlParser.EntityNode EntityNode}, which represents one of the known HTML
	 *    entities that Autolinker looks for. This includes common ones such as &amp;quot; and &amp;nbsp;
	 */
	Autolinker.htmlParser.HtmlNode = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} text (required)
		 * 
		 * The original text that was matched for the HtmlNode. 
		 * 
		 * - In the case of an {@link Autolinker.htmlParser.ElementNode ElementNode}, this will be the tag's
		 *   text.
		 * - In the case of a {@link Autolinker.htmlParser.TextNode TextNode}, this will be the text itself.
		 * - In the case of a {@link Autolinker.htmlParser.EntityNode EntityNode}, this will be the text of
		 *   the HTML entity.
		 */
		text : "",
		
		
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},

		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Retrieves the {@link #text} for the HtmlNode.
		 * 
		 * @return {String}
		 */
		getText : function() {
			return this.text;
		}

	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.ElementNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents an HTML element node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.ElementNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * @cfg {String} tagName (required)
		 * 
		 * The name of the tag that was matched.
		 */
		tagName : '',
		
		/**
		 * @cfg {Boolean} closing (required)
		 * 
		 * `true` if the element (tag) is a closing tag, `false` if its an opening tag.
		 */
		closing : false,

		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'element';
		},
		

		/**
		 * Returns the HTML element's (tag's) name. Ex: for an &lt;img&gt; tag, returns "img".
		 * 
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName;
		},
		
		
		/**
		 * Determines if the HTML element (tag) is a closing tag. Ex: &lt;div&gt; returns
		 * `false`, while &lt;/div&gt; returns `true`.
		 * 
		 * @return {Boolean}
		 */
		isClosing : function() {
			return this.closing;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.EntityNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents a known HTML entity node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * Ex: '&amp;nbsp;', or '&amp#160;' (which will be retrievable from the {@link #getText} method.
	 * 
	 * Note that this class will only be returned from the HtmlParser for the set of checked HTML entity nodes 
	 * defined by the {@link Autolinker.htmlParser.HtmlParser#htmlCharacterEntitiesRegex}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.EntityNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'entity';
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.TextNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents a text node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.TextNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'text';
		}
		
	} );
	/*global Autolinker */
	/**
	 * @private
	 * @class Autolinker.matchParser.MatchParser
	 * @extends Object
	 * 
	 * Used by Autolinker to parse {@link #urls URLs}, {@link #emails email addresses}, and {@link #twitter Twitter handles}, 
	 * given an input string of text.
	 * 
	 * The MatchParser is fed a non-HTML string in order to search out URLs, email addresses and Twitter handles. Autolinker
	 * first uses the {@link HtmlParser} to "walk around" HTML tags, and then the text around the HTML tags is passed into
	 * the MatchParser in order to find the actual matches.
	 */
	Autolinker.matchParser.MatchParser = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {Boolean} urls
		 * 
		 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
		 */
		urls : true,
		
		/**
		 * @cfg {Boolean} email
		 * 
		 * `true` if email addresses should be automatically linked, `false` if they should not be.
		 */
		email : true,
		
		/**
		 * @cfg {Boolean} twitter
		 * 
		 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
		 */
		twitter : true,
		
		/**
		 * @cfg {Boolean} stripPrefix
		 * 
		 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text
		 * in {@link Autolinker.match.Url URL matches}, `false` otherwise.
		 * 
		 * TODO: Handle this before a URL Match object is instantiated.
		 */
		stripPrefix : true,
		
		
		/**
		 * @private
		 * @property {RegExp} matcherRegex
		 * 
		 * The regular expression that matches URLs, email addresses, and Twitter handles.
		 * 
		 * This regular expression has the following capturing groups:
		 * 
		 * 1. Group that is used to determine if there is a Twitter handle match (i.e. \@someTwitterUser). Simply check for its 
		 *    existence to determine if there is a Twitter handle match. The next couple of capturing groups give information 
		 *    about the Twitter handle match.
		 * 2. The whitespace character before the \@sign in a Twitter handle. This is needed because there are no lookbehinds in
		 *    JS regular expressions, and can be used to reconstruct the original string in a replace().
		 * 3. The Twitter handle itself in a Twitter match. If the match is '@someTwitterUser', the handle is 'someTwitterUser'.
		 * 4. Group that matches an email address. Used to determine if the match is an email address, as well as holding the full 
		 *    address. Ex: 'me@my.com'
		 * 5. Group that matches a URL in the input text. Ex: 'http://google.com', 'www.google.com', or just 'google.com'.
		 *    This also includes a path, url parameters, or hash anchors. Ex: google.com/path/to/file?q1=1&q2=2#myAnchor
		 * 6. Group that matches a protocol URL (i.e. 'http://google.com'). This is used to match protocol URLs with just a single
		 *    word, like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * 7. A protocol-relative ('//') match for the case of a 'www.' prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. We need to know the character before the '//' in order to determine if it is a valid match
		 *    or the // was in a string we don't want to auto-link.
		 * 8. A protocol-relative ('//') match for the case of a known TLD prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. See #6 for more info. 
		 */
		matcherRegex : (function() {
			var twitterRegex = /(^|[^\w])@(\w{1,15})/,              // For matching a twitter handle. Ex: @gregory_jacobs
			    
			    emailRegex = /(?:[\-;:&=\+\$,\w\.]+@)/,             // something@ for email addresses (a.k.a. local-part)
			    
			    protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
			    wwwRegex = /(?:www\.)/,                             // starting with 'www.'
			    domainNameRegex = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,  // anything looking at all like a domain, non-unicode domains, not ending in a period
			    tldRegex = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,   // match our known top level domains (TLDs)
			    
			    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
			    // http://blog.codinghorror.com/the-problem-with-urls/
			    urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
			
			return new RegExp( [
				'(',  // *** Capturing group $1, which can be used to check for a twitter handle match. Use group $3 for the actual twitter handle though. $2 may be used to reconstruct the original string in a replace() 
					// *** Capturing group $2, which matches the whitespace character before the '@' sign (needed because of no lookbehinds), and 
					// *** Capturing group $3, which matches the actual twitter handle
					twitterRegex.source,
				')',
				
				'|',
				
				'(',  // *** Capturing group $4, which is used to determine an email match
					emailRegex.source,
					domainNameRegex.source,
					tldRegex.source,
				')',
				
				'|',
				
				'(',  // *** Capturing group $5, which is used to match a URL
					'(?:', // parens to cover match for protocol (optional), and domain
						'(',  // *** Capturing group $6, for a protocol-prefixed url (ex: http://google.com)
							protocolRegex.source,
							domainNameRegex.source,
						')',
						
						'|',
						
						'(?:',  // non-capturing paren for a 'www.' prefixed url (ex: www.google.com)
							'(.?//)?',  // *** Capturing group $7 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							wwwRegex.source,
							domainNameRegex.source,
						')',
						
						'|',
						
						'(?:',  // non-capturing paren for known a TLD url (ex: google.com)
							'(.?//)?',  // *** Capturing group $8 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							domainNameRegex.source,
							tldRegex.source,
						')',
					')',
					
					'(?:' + urlSuffixRegex.source + ')?',  // match for path, query string, and/or hash anchor - optional
				')'
			].join( "" ), 'gi' );
		} )(),
		
		/**
		 * @private
		 * @property {RegExp} charBeforeProtocolRelMatchRegex
		 * 
		 * The regular expression used to retrieve the character before a protocol-relative URL match.
		 * 
		 * This is used in conjunction with the {@link #matcherRegex}, which needs to grab the character before a protocol-relative
		 * '//' due to the lack of a negative look-behind in JavaScript regular expressions. The character before the match is stripped
		 * from the URL.
		 */
		charBeforeProtocolRelMatchRegex : /^(.)?\/\//,
		
		/**
		 * @private
		 * @property {Autolinker.MatchValidator} matchValidator
		 * 
		 * The MatchValidator object, used to filter out any false positives from the {@link #matcherRegex}. See
		 * {@link Autolinker.MatchValidator} for details.
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		
			this.matchValidator = new Autolinker.MatchValidator();
		},
		
		
		/**
		 * Parses the input `text` to search for URLs/emails/Twitter handles, and calls the `replaceFn`
		 * to allow replacements of the matches. Returns the `text` with matches replaced.
		 * 
		 * @param {String} text The text to search and repace matches in.
		 * @param {Function} replaceFn The iterator function to handle the replacements. The function takes a
		 *   single argument, a {@link Autolinker.match.Match} object, and should return the text that should
		 *   make the replacement.
		 * @param {Object} [contextObj=window] The context object ("scope") to run the `replaceFn` in.
		 * @return {String}
		 */
		replace : function( text, replaceFn, contextObj ) {
			var me = this;  // for closure
			
			return text.replace( this.matcherRegex, function( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 ) {
				var matchDescObj = me.processCandidateMatch( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 );  // "match description" object
				
				// Return out with no changes for match types that are disabled (url, email, twitter), or for matches that are 
				// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
				if( !matchDescObj ) {
					return matchStr;
					
				} else {
					// Generate replacement text for the match from the `replaceFn`
					var replaceStr = replaceFn.call( contextObj, matchDescObj.match );
					return matchDescObj.prefixStr + replaceStr + matchDescObj.suffixStr;
				}
			} );
		},
		
		
		/**
		 * Processes a candidate match from the {@link #matcherRegex}. 
		 * 
		 * Not all matches found by the regex are actual URL/email/Twitter matches, as determined by the {@link #matchValidator}. In
		 * this case, the method returns `null`. Otherwise, a valid Object with `prefixStr`, `match`, and `suffixStr` is returned.
		 * 
		 * @private
		 * @param {String} matchStr The full match that was found by the {@link #matcherRegex}.
		 * @param {String} twitterMatch The matched text of a Twitter handle, if the match is a Twitter match.
		 * @param {String} twitterHandlePrefixWhitespaceChar The whitespace char before the @ sign in a Twitter handle match. This 
		 *   is needed because of no lookbehinds in JS regexes, and is need to re-include the character for the anchor tag replacement.
		 * @param {String} twitterHandle The actual Twitter user (i.e the word after the @ sign in a Twitter match).
		 * @param {String} emailAddressMatch The matched email address for an email address match.
		 * @param {String} urlMatch The matched URL string for a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} wwwProtocolRelativeMatch The '//' for a protocol-relative match from a 'www' url, with the character that 
		 *   comes before the '//'.
		 * @param {String} tldProtocolRelativeMatch The '//' for a protocol-relative match from a TLD (top level domain) match, with 
		 *   the character that comes before the '//'.
		 *   
		 * @return {Object} A "match description object". This will be `null` if the match was invalid, or if a match type is disabled.
		 *   Otherwise, this will be an Object (map) with the following properties:
		 * @return {String} return.prefixStr The char(s) that should be prepended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {String} return.suffixStr The char(s) that should be appended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {Autolinker.match.Match} return.match The Match object that represents the match that was found.
		 */
		processCandidateMatch : function( 
			matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle, 
			emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch, tldProtocolRelativeMatch
		) {
			// Note: The `matchStr` variable wil be fixed up to remove characters that are no longer needed (which will 
			// be added to `prefixStr` and `suffixStr`).
			
			var protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
			    match,  // Will be an Autolinker.match.Match object
			    
			    prefixStr = "",       // A string to use to prefix the anchor tag that is created. This is needed for the Twitter handle match
			    suffixStr = "";       // A string to suffix the anchor tag that is created. This is used if there is a trailing parenthesis that should not be auto-linked.
			    
			
			// Return out with `null` for match types that are disabled (url, email, twitter), or for matches that are 
			// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
			if(
				( twitterMatch && !this.twitter ) || ( emailAddressMatch && !this.email ) || ( urlMatch && !this.urls ) ||
				!this.matchValidator.isValidMatch( urlMatch, protocolUrlMatch, protocolRelativeMatch ) 
			) {
				return null;
			}
			
			// Handle a closing parenthesis at the end of the match, and exclude it if there is not a matching open parenthesis
			// in the match itself. 
			if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
				matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
				suffixStr = ")";  // this will be added after the generated <a> tag
			}
			
			
			if( emailAddressMatch ) {
				match = new Autolinker.match.Email( { matchedText: matchStr, email: emailAddressMatch } );
				
			} else if( twitterMatch ) {
				// fix up the `matchStr` if there was a preceding whitespace char, which was needed to determine the match 
				// itself (since there are no look-behinds in JS regexes)
				if( twitterHandlePrefixWhitespaceChar ) {
					prefixStr = twitterHandlePrefixWhitespaceChar;
					matchStr = matchStr.slice( 1 );  // remove the prefixed whitespace char from the match
				}
				match = new Autolinker.match.Twitter( { matchedText: matchStr, twitterHandle: twitterHandle } );
				
			} else {  // url match
				// If it's a protocol-relative '//' match, remove the character before the '//' (which the matcherRegex needed
				// to match due to the lack of a negative look-behind in JavaScript regular expressions)
				if( protocolRelativeMatch ) {
					var charBeforeMatch = protocolRelativeMatch.match( this.charBeforeProtocolRelMatchRegex )[ 1 ] || "";
					
					if( charBeforeMatch ) {  // fix up the `matchStr` if there was a preceding char before a protocol-relative match, which was needed to determine the match itself (since there are no look-behinds in JS regexes)
						prefixStr = charBeforeMatch;
						matchStr = matchStr.slice( 1 );  // remove the prefixed char from the match
					}
				}
				
				match = new Autolinker.match.Url( {
					matchedText : matchStr,
					url : matchStr,
					protocolUrlMatch : !!protocolUrlMatch,
					protocolRelativeMatch : !!protocolRelativeMatch,
					stripPrefix : this.stripPrefix
				} );
			}
			
			return {
				prefixStr : prefixStr,
				suffixStr : suffixStr,
				match     : match
			};
		},
		
		
		/**
		 * Determines if a match found has an unmatched closing parenthesis. If so, this parenthesis will be removed
		 * from the match itself, and appended after the generated anchor tag in {@link #processTextNode}.
		 * 
		 * A match may have an extra closing parenthesis at the end of the match because the regular expression must include parenthesis
		 * for URLs such as "wikipedia.com/something_(disambiguation)", which should be auto-linked. 
		 * 
		 * However, an extra parenthesis *will* be included when the URL itself is wrapped in parenthesis, such as in the case of
		 * "(wikipedia.com/something_(disambiguation))". In this case, the last closing parenthesis should *not* be part of the URL 
		 * itself, and this method will return `true`.
		 * 
		 * @private
		 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
		 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at the end of the `matchStr`, `false` otherwise.
		 */
		matchHasUnbalancedClosingParen : function( matchStr ) {
			var lastChar = matchStr.charAt( matchStr.length - 1 );
			
			if( lastChar === ')' ) {
				var openParensMatch = matchStr.match( /\(/g ),
				    closeParensMatch = matchStr.match( /\)/g ),
				    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
				    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;
				
				if( numOpenParens < numCloseParens ) {
					return true;
				}
			}
			
			return false;
		}
		
	} );
	/*global Autolinker */
	/*jshint scripturl:true */
	/**
	 * @private
	 * @class Autolinker.MatchValidator
	 * @extends Object
	 * 
	 * Used by Autolinker to filter out false positives from the {@link Autolinker#matcherRegex}.
	 * 
	 * Due to the limitations of regular expressions (including the missing feature of look-behinds in JS regular expressions),
	 * we cannot always determine the validity of a given match. This class applies a bit of additional logic to filter out any
	 * false positives that have been matched by the {@link Autolinker#matcherRegex}.
	 */
	Autolinker.MatchValidator = Autolinker.Util.extend( Object, {
		
		/**
		 * @private
		 * @property {RegExp} invalidProtocolRelMatchRegex
		 * 
		 * The regular expression used to check a potential protocol-relative URL match, coming from the 
		 * {@link Autolinker#matcherRegex}. A protocol-relative URL is, for example, "//yahoo.com"
		 * 
		 * This regular expression checks to see if there is a word character before the '//' match in order to determine if 
		 * we should actually autolink a protocol-relative URL. This is needed because there is no negative look-behind in 
		 * JavaScript regular expressions. 
		 * 
		 * For instance, we want to autolink something like "Go to: //google.com", but we don't want to autolink something 
		 * like "abc//google.com"
		 */
		invalidProtocolRelMatchRegex : /^[\w]\/\//,
		
		/**
		 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
		 * 
		 * @private
		 * @property {RegExp} hasFullProtocolRegex
		 */
		hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
		
		/**
		 * Regex to find the URI scheme, such as 'mailto:'.
		 * 
		 * This is used to filter out 'javascript:' and 'vbscript:' schemes.
		 * 
		 * @private
		 * @property {RegExp} uriSchemeRegex
		 */
		uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]+:/,
		
		/**
		 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
		 * 
		 * @private
		 * @property {RegExp} hasWordCharAfterProtocolRegex
		 */
		hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z]/,
		
		
		/**
		 * Determines if a given match found by {@link Autolinker#processTextNode} is valid. Will return `false` for:
		 * 
		 * 1) URL matches which do not have at least have one period ('.') in the domain name (effectively skipping over 
		 *    matches like "abc:def"). However, URL matches with a protocol will be allowed (ex: 'http://localhost')
		 * 2) URL matches which do not have at least one word character in the domain name (effectively skipping over
		 *    matches like "git:1.0").
		 * 3) A protocol-relative url match (a URL beginning with '//') whose previous character is a word character 
		 *    (effectively skipping over strings like "abc//google.com")
		 * 
		 * Otherwise, returns `true`.
		 * 
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if the match given is valid and should be processed, or `false` if the match is invalid and/or 
		 *   should just not be processed.
		 */
		isValidMatch : function( urlMatch, protocolUrlMatch, protocolRelativeMatch ) {
			if(
				( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||
				this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||       // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
				this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) ||  // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
				this.isInvalidProtocolRelativeMatch( protocolRelativeMatch )                 // A protocol-relative match which has a word character in front of it (so we can skip something like "abc//google.com")
			) {
				return false;
			}
			
			return true;
		},
		
		
		/**
		 * Determines if the URI scheme is a valid scheme to be autolinked. Returns `false` if the scheme is 
		 * 'javascript:' or 'vbscript:'
		 * 
		 * @private
		 * @param {String} uriSchemeMatch The match URL string for a full URI scheme match. Ex: 'http://yahoo.com' 
		 *   or 'mailto:a@a.com'.
		 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
		 */
		isValidUriScheme : function( uriSchemeMatch ) {
			var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ].toLowerCase();
			
			return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );
		},
		
		
		/**
		 * Determines if a URL match does not have either:
		 * 
		 * a) a full protocol (i.e. 'http://'), or
		 * b) at least one dot ('.') in the domain name (for a non-full-protocol match).
		 * 
		 * Either situation is considered an invalid URL (ex: 'git:d' does not have either the '://' part, or at least one dot
		 * in the domain name. If the match was 'git:abc.com', we would consider this valid.)
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @return {Boolean} `true` if the URL match does not have a full protocol, or at least one dot ('.') in a non-full-protocol
		 *   match.
		 */
		urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {
			return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
		},
		
		
		/**
		 * Determines if a URL match does not have at least one word character after the protocol (i.e. in the domain name).
		 * 
		 * At least one letter character must exist in the domain name after a protocol match. Ex: skip over something 
		 * like "git:1.0"
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to
		 *   know whether or not we have a protocol in the URL string, in order to check for a word character after the protocol
		 *   separator (':').
		 * @return {Boolean} `true` if the URL match does not have at least one word character in it after the protocol, `false`
		 *   otherwise.
		 */
		urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {
			if( urlMatch && protocolUrlMatch ) {
				return !this.hasWordCharAfterProtocolRegex.test( urlMatch );
			} else {
				return false;
			}
		},
		
		
		/**
		 * Determines if a protocol-relative match is an invalid one. This method returns `true` if there is a `protocolRelativeMatch`,
		 * and that match contains a word character before the '//' (i.e. it must contain whitespace or nothing before the '//' in
		 * order to be considered valid).
		 * 
		 * @private
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if it is an invalid protocol-relative match, `false` otherwise.
		 */
		isInvalidProtocolRelativeMatch : function( protocolRelativeMatch ) {
			return ( !!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test( protocolRelativeMatch ) );
		}

	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.match.Match
	 * 
	 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a 
	 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                 case 'email' :
	 *                     console.log( "email: ", match.getEmail() );
	 *                     
	 *                 case 'twitter' :
	 *                     console.log( "twitter: ", match.getTwitterHandle() );
	 *             }
	 *         }
	 *     } );
	 *     
	 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
	 */
	Autolinker.match.Match = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} matchedText (required)
		 * 
		 * The original text that was matched.
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},

		
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Returns the original text that was matched.
		 * 
		 * @return {String}
		 */
		getMatchedText : function() {
			return this.matchedText;
		},
		

		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorHref : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorText : Autolinker.Util.abstractMethod

	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Email
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Email match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} email (required)
		 * 
		 * The email address that was matched.
		 */
		

		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'email';
		},
		
		
		/**
		 * Returns the email address that was matched.
		 * 
		 * @return {String}
		 */
		getEmail : function() {
			return this.email;
		},
		

		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'mailto:' + this.email;
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return this.email;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Twitter
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Twitter match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Twitter = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} twitterHandle (required)
		 * 
		 * The Twitter handle that was matched.
		 */
		

		/**
		 * Returns the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'twitter';
		},
		
		
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getTwitterHandle : function() {
			return this.twitterHandle;
		},
		

		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'https://twitter.com/' + this.twitterHandle;
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return '@' + this.twitterHandle;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Url
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Url match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} url (required)
		 * 
		 * The url that was matched.
		 */
		
		/**
		 * @cfg {Boolean} protocolUrlMatch (required)
		 * 
		 * `true` if the URL is a match which already has a protocol (i.e. 'http://'), `false` if the match was from a 'www' or
		 * known TLD match.
		 */
		
		/**
		 * @cfg {Boolean} protocolRelativeMatch (required)
		 * 
		 * `true` if the URL is a protocol-relative match. A protocol-relative match is a URL that starts with '//',
		 * and will be either http:// or https:// based on the protocol that the site is loaded under.
		 */
		
		/**
		 * @cfg {Boolean} stripPrefix (required)
		 * @inheritdoc Autolinker#stripPrefix
		 */
		

		/**
		 * @private
		 * @property {RegExp} urlPrefixRegex
		 * 
		 * A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs.
		 */
		urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
		
		/**
		 * @private
		 * @property {RegExp} protocolRelativeRegex
		 * 
		 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
		 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
		 */
		protocolRelativeRegex : /^\/\//,
		
		/**
		 * @private
		 * @property {Boolean} protocolPrepended
		 * 
		 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
		 * {@link #url} did not have a protocol)
		 */
		protocolPrepended : false,
		

		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'url';
		},
		
		
		/**
		 * Returns the url that was matched, assuming the protocol to be 'http://' if the original
		 * match was missing a protocol.
		 * 
		 * @return {String}
		 */
		getUrl : function() {
			var url = this.url;
			
			// if the url string doesn't begin with a protocol, assume 'http://'
			if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {
				url = this.url = 'http://' + url;
				
				this.protocolPrepended = true;
			}
			
			return url;
		},
		

		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			var url = this.getUrl();
			
			return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html 
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			var anchorText = this.getUrl();
			
			if( this.protocolRelativeMatch ) {
				// Strip off any protocol-relative '//' from the anchor text
				anchorText = this.stripProtocolRelativePrefix( anchorText );
			}
			if( this.stripPrefix ) {
				anchorText = this.stripUrlPrefix( anchorText );
			}
			anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one
			
			return anchorText;
		},
		
		
		// ---------------------------------------
		
		// Utility Functionality
		
		/**
		 * Strips the URL prefix (such as "http://" or "https://") from the given text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   url prefix (such as stripping off "http://")
		 * @return {String} The `anchorText`, with the prefix stripped.
		 */
		stripUrlPrefix : function( text ) {
			return text.replace( this.urlPrefixRegex, '' );
		},
		
		
		/**
		 * Strips any protocol-relative '//' from the anchor text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   protocol-relative prefix (such as stripping off "//")
		 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
		 */
		stripProtocolRelativePrefix : function( text ) {
			return text.replace( this.protocolRelativeRegex, '' );
		},
		
		
		/**
		 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
		 * 
		 * @private
		 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
		 *   slash ('/') that may exist.
		 * @return {String} The `anchorText`, with the trailing slash removed.
		 */
		removeTrailingSlash : function( anchorText ) {
			if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {
				anchorText = anchorText.slice( 0, -1 );
			}
			return anchorText;
		}
		
	} );
	return Autolinker;

	}));


/***/ }
/******/ ]);