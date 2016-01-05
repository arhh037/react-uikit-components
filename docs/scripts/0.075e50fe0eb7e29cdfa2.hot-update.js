webpackHotUpdate(0,{

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitButton = __webpack_require__(69);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitCodeblock = __webpack_require__(15);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(16);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitModal = __webpack_require__(608);\n\nvar _reactUikitModal2 = _interopRequireDefault(_reactUikitModal);\n\nvar _velocityAnimate = __webpack_require__(242);\n\nvar _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar animateIn = function animateIn(modal, dialog) {\n  console.log(modal);\n  (0, _velocityAnimate2.default)(modal, { opacity: 1 }, { display: 'block' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: 1, opacity: 1 }, { display: 'block' }, 200);\n};\n\nvar animateOut = function animateOut(modal, dialog) {\n  (0, _velocityAnimate2.default)(modal, { opacity: 0 }, { display: 'none' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: -100, opacity: 0 }, { display: 'none' }, 200);\n};\n\nvar blankAnimateIn = function blankAnimateIn(modal, dialog) {\n  (0, _velocityAnimate2.default)(modal, { opacity: 1 }, { display: 'block' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: [0, 0], opacity: 1 }, { display: 'block' }, 200);\n};\n\nvar blankAnimateOut = function blankAnimateOut(modal, dialog) {\n  (0, _velocityAnimate2.default)(modal, { opacity: 0 }, { display: 'none' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: [0, 0], opacity: 0 }, { display: 'none' }, 200);\n};\n\nvar ModalDoc = function ModalDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Modal'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Displays dialogs prompts.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-modal' },\n          'react-uikit-modal'\n        ),\n        ' on github.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-modal --save;\\n// ES6\\nimport Modal from \\'react-uikit-modal\\';\\n\\n// ES5\\nvar Modal = require(\\'react-uikit-modal\\');'\n      ),\n      _react2.default.createElement('hr', { className: 'uk-article-divider' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Headline'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Modal\\n  close\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n>\\n  <h2>Headline</h2>\\n  <p>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\\n    ea commodo consequat. Duis aute irure dolor in reprehenderit in\\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\\n    mollit anim id est laborum.\\n  </p>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal header and footer'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          header: 'Modal with header and footer',\n          footer: _react2.default.createElement(_reactUikitButton2.default, { body: 'Save' }),\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n\n        },\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Modal\\n  close\\n  header=\\'Modal with header and footer\\'\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n  footer={<Button body=\\'Save\\' />}\\n>\\n  <p>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\\n    ea commodo consequat. Duis aute irure dolor in reprehenderit in\\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\\n    mollit anim id est laborum.\\n  </p>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal Caption'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          caption: 'This is a caption',\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Modal with caption'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        ' <Modal\\n  caption=\\'this is a caption\\'\\n  close\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n>\\n  <h2>With caption</h2>\\n  <p>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\\n    ea commodo consequat. Duis aute irure dolor in reprehenderit in\\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\\n    mollit anim id est laborum.\\n  </p>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal lightbox'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          lightbox: true,\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement('img', {\n          src: '../docs/images/placeholder_600x400.svg',\n          alt: 'Image place holder',\n          width: '100%',\n          height: '400' })\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Modal\\n  lightbox\\n  close\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n>\\n  <img\\n    src=\\'../docs/images/placeholder_600x400.svg\\'\\n    alt=\\'Image place holder\\'\\n    width=\"100%\"\\n    height=\"400\"/>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal blank'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          blank: true,\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return blankAnimateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return blankAnimateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Blank modal'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal types'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        null,\n        'Alert'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          ok: { context: 'primary' },\n          type: 'alert',\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'p',\n          null,\n          'Attention!'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          '<Modal>'\n        ),\n        ' props and their types.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement('code', null)\n            ),\n            _react2.default.createElement('td', { className: 'uk-text-left' }),\n            _react2.default.createElement('td', { className: 'uk-text-left' })\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ModalDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RhbC1kb2MuanN4P2YzZjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdiLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBUyxDQUFJLEtBQUssRUFBRSxNQUFNLEVBQUs7QUFDbkMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixpQ0FBUyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkQsaUNBQVMsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDeEUsQ0FBQzs7QUFFRixJQUFNLFVBQVUsR0FBRyxTQUFiLFVBQVUsQ0FBSSxLQUFLLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLGlDQUFTLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2RCxpQ0FBUyxNQUFNLEVBQUUsRUFBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzVFLENBQUM7O0FBR0YsSUFBTSxjQUFjLEdBQUcsU0FBakIsY0FBYyxDQUFJLEtBQUssRUFBRSxNQUFNLEVBQUs7QUFDeEMsaUNBQVMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELGlDQUFT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SUFHVjs7O01BQ0U7Ozs7T0FBb0I7TUFDcEIsd0NBRUk7TUFFSjs7OztPQUFjO01BQ2Q7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDbEM7OztBQUNFLFlBQUUsRUFBRSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFDekIsY0FBSSxFQUFDLE9BQU87QUFDWixpQkFBTyxFQUFFO0FBQ1AsZ0JBQUksRUFBRSxNQUFNO0FBQ1osbUJBQU8sRUFBRTtBQUNQLGtCQUFJLEVBQUUsYUFBQyxLQUFLLEVBQUUsTUFBTTt1QkFBSyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztlQUFBO0FBQ2pELGlCQUFHLEVBQUcsYUFBQyxLQUFLLEVBQUUsTUFBTTt1QkFBSyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztlQUFBO2FBQ25EO1dBQ0Q7O1FBRUY7Ozs7U0FFSTtPQUNFO01BRVY7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BR1g7S0FDSjtJQUVWOzs7TUFDRTs7OztPQUFvQjtNQUNwQjs7O1FBQ0U7Ozs7U0FBMEI7O09BQ3hCO01BQ0o7Ozs7T0FFSTtNQUVKOzs7UUFDRTs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVTtZQUN0Qzs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7V0FDbkM7U0FDQztRQUNSOzs7VUFDRTs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCLDJDQUFhO2FBQ1Y7WUFDTCxzQ0FBSSxTQUFTLEVBQUMsY0FBYyxHQUFNO1lBQ2xDLHNDQUFJLFNBQVMsRUFBQyxjQUFjLEdBQU07V0FDL0I7U0FFQztPQUNGO0tBQ0E7R0FHTjtDQUNQLENBQUM7O2tCQUVhLFFBQVEiLCJmaWxlIjoiNjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LXVpa2l0LWJ1dHRvbic7XG5pbXBvcnQgQ29kZWJsb2NrIGZyb20gJ3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgVGFibGUgZnJvbSAncmVhY3QtdWlraXQtdGFibGUnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtbW9kYWwnO1xuaW1wb3J0IHZlbG9jaXR5IGZyb20gJ3ZlbG9jaXR5LWFuaW1hdGUnO1xuXG5cbmNvbnN0IGFuaW1hdGVJbiA9IChtb2RhbCwgZGlhbG9nKSA9PiB7XG4gIGNvbnNvbGUubG9nKG1vZGFsKTtcbiAgdmVsb2NpdHkobW9kYWwsIHtvcGFjaXR5OiAxfSwge2Rpc3BsYXk6ICdibG9jayd9LCAzMDApO1xuICB2ZWxvY2l0eShkaWFsb2csIHt0cmFuc2xhdGVZOiAxLCBvcGFjaXR5OiAxfSwge2Rpc3BsYXk6ICdibG9jayd9LCAyMDApO1xufTtcblxuY29uc3QgYW5pbWF0ZU91dCA9IChtb2RhbCwgZGlhbG9nKSA9PiB7XG4gIHZlbG9jaXR5KG1vZGFsLCB7b3BhY2l0eTowfSwgeyBkaXNwbGF5OiAnbm9uZScgfSwgMzAwKTtcbiAgdmVsb2NpdHkoZGlhbG9nLCB7dHJhbnNsYXRlWTogLTEwMCwgb3BhY2l0eTogMH0sIHsgZGlzcGxheTogJ25vbmUnIH0sIDIwMCk7XG59O1xuXG5cbmNvbnN0IGJsYW5rQW5pbWF0ZUluID0gKG1vZGFsLCBkaWFsb2cpID0+IHtcbiAgdmVsb2NpdHkobW9kYWwsIHtvcGFjaXR5OiAxfSwge2Rpc3BsYXk6ICdibG9jayd9LCAzMDApO1xuICB2ZWxvY2l0eShkaWFsb2csIHt0cmFuc2xhdGVZOiBbMCwgMF0sIG9wYWNpdHk6IDF9LCB7ZGlzcGxheTogJ2Jsb2NrJ30sIDIwMCk7XG59O1xuXG5jb25zdCBibGFua0FuaW1hdGVPdXQgPSAobW9kYWwsIGRpYWxvZykgPT4ge1xuICB2ZWxvY2l0eShtb2RhbCwge29wYWNpdHk6MH0sIHsgZGlzcGxheTogJ25vbmUnIH0sIDMwMCk7XG4gIHZlbG9jaXR5KGRpYWxvZywge3RyYW5zbGF0ZVk6IFswLCAwXSwgb3BhY2l0eTogMH0sIHsgZGlzcGxheTogJ25vbmUnIH0sIDIwMCk7XG59O1xuXG5cbmNvbnN0IE1vZGFsRG9jID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+TW9kYWw8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPSd1ay1hcnRpY2xlLWxlYWQnPlxuICAgICAgICBEaXNwbGF5cyBkaWFsb2dzIHByb21wdHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vb3Rpc3N2L3JlYWN0LXVpa2l0LW1vZGFsJz5yZWFjdC11aWtpdC1tb2RhbDwvYT4gb24gZ2l0aHViLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlVzYWdlPC9oMj5cbiAgICAgIDxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LW1vZGFsIC0tc2F2ZTtcbi8vIEVTNlxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LXVpa2l0LW1vZGFsJztcblxuLy8gRVM1XG52YXIgTW9kYWwgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1tb2RhbCcpO2B9XG4gICAgICA8L0NvZGVibG9jaz5cblxuICAgICAgPGhyIGNsYXNzTmFtZT0ndWstYXJ0aWNsZS1kaXZpZGVyJyAvPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cblxuICAgICAgPE1vZGFsXG4gICAgICAgIGNsb3NlXG4gICAgICAgIHRyaWdnZXI9e3tcbiAgICAgICAgICBib2R5OiAnT3BlbicsXG4gICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgJ2luJzogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVJbihtb2RhbCwgZGlhbG9nKSxcbiAgICAgICAgICAgIG91dDogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVPdXQobW9kYWwsIGRpYWxvZylcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMj5IZWFkbGluZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltXG4gICAgICAgICAgdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXhcbiAgICAgICAgICBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW5cbiAgICAgICAgICB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyXG4gICAgICAgICAgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50XG4gICAgICAgICAgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YDxNb2RhbFxuICBjbG9zZVxuICB0cmlnZ2VyPXt7XG4gICAgYm9keTogJ09wZW4nLFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICdpbic6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlSW4obW9kYWwsIGRpYWxvZyksXG4gICAgICBvdXQ6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlT3V0KG1vZGFsLCBkaWFsb2cpXG4gICAgfVxuICB9fVxuPlxuICA8aDI+SGVhZGxpbmU8L2gyPlxuICA8cD5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbVxuICAgIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4XG4gICAgZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXG4gICAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1clxuICAgIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudFxuICAgIG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICA8L3A+XG48L01vZGFsPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+TW9kYWwgaGVhZGVyIGFuZCBmb290ZXI8L2gyPlxuICAgICAgPHA+XG5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGhlYWRlcj0nTW9kYWwgd2l0aCBoZWFkZXIgYW5kIGZvb3RlcidcbiAgICAgICAgICBmb290ZXI9ezxCdXR0b24gYm9keT0nU2F2ZScgLz59XG4gICAgICAgICAgY2xvc2VcbiAgICAgICAgICB0cmlnZ2VyPXt7XG4gICAgICAgICAgICBib2R5OiAnT3BlbicsXG4gICAgICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICAgICdpbic6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlSW4obW9kYWwsIGRpYWxvZyksXG4gICAgICAgICAgICAgIG91dDogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVPdXQobW9kYWwsIGRpYWxvZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuXG4gICAgICAgID5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW1cbiAgICAgICAgICAgIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4XG4gICAgICAgICAgICBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW5cbiAgICAgICAgICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXJcbiAgICAgICAgICAgIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudFxuICAgICAgICAgICAgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgPE1vZGFsXG4gIGNsb3NlXG4gIGhlYWRlcj0nTW9kYWwgd2l0aCBoZWFkZXIgYW5kIGZvb3RlcidcbiAgdHJpZ2dlcj17e1xuICAgIGJvZHk6ICdPcGVuJyxcbiAgICBhbmltYXRlOiB7XG4gICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgb3V0OiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgIH1cbiAgfX1cbiAgZm9vdGVyPXs8QnV0dG9uIGJvZHk9J1NhdmUnIC8+fVxuPlxuICA8cD5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbVxuICAgIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4XG4gICAgZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXG4gICAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1clxuICAgIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudFxuICAgIG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICA8L3A+XG48L01vZGFsPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+TW9kYWwgQ2FwdGlvbjwvaDI+XG4gICAgICA8cD5cblxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgY2FwdGlvbj0nVGhpcyBpcyBhIGNhcHRpb24nXG4gICAgICAgICAgY2xvc2VcbiAgICAgICAgICB0cmlnZ2VyPXt7XG4gICAgICAgICAgICBib2R5OiAnT3BlbicsXG4gICAgICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICAgICdpbic6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlSW4obW9kYWwsIGRpYWxvZyksXG4gICAgICAgICAgICAgIG91dDogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVPdXQobW9kYWwsIGRpYWxvZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgyPk1vZGFsIHdpdGggY2FwdGlvbjwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltXG4gICAgICAgICAgICB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleFxuICAgICAgICAgICAgZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXG4gICAgICAgICAgICB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyXG4gICAgICAgICAgICBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnRcbiAgICAgICAgICAgIG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Nb2RhbD5cblxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YCA8TW9kYWxcbiAgY2FwdGlvbj0ndGhpcyBpcyBhIGNhcHRpb24nXG4gIGNsb3NlXG4gIHRyaWdnZXI9e3tcbiAgICBib2R5OiAnT3BlbicsXG4gICAgYW5pbWF0ZToge1xuICAgICAgJ2luJzogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVJbihtb2RhbCwgZGlhbG9nKSxcbiAgICAgIG91dDogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVPdXQobW9kYWwsIGRpYWxvZylcbiAgICB9XG4gIH19XG4+XG4gIDxoMj5XaXRoIGNhcHRpb248L2gyPlxuICA8cD5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbVxuICAgIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4XG4gICAgZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXG4gICAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1clxuICAgIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudFxuICAgIG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICA8L3A+XG48L01vZGFsPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+TW9kYWwgbGlnaHRib3g8L2gyPlxuICAgICAgPHA+XG5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGxpZ2h0Ym94XG4gICAgICAgICAgY2xvc2VcbiAgICAgICAgICB0cmlnZ2VyPXt7XG4gICAgICAgICAgICBib2R5OiAnT3BlbicsXG4gICAgICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICAgICdpbic6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlSW4obW9kYWwsIGRpYWxvZyksXG4gICAgICAgICAgICAgIG91dDogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVPdXQobW9kYWwsIGRpYWxvZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPScuLi9kb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl82MDB4NDAwLnN2ZydcbiAgICAgICAgICAgIGFsdD0nSW1hZ2UgcGxhY2UgaG9sZGVyJ1xuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjQwMFwiLz5cbiAgICAgICAgPC9Nb2RhbD5cblxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YDxNb2RhbFxuICBsaWdodGJveFxuICBjbG9zZVxuICB0cmlnZ2VyPXt7XG4gICAgYm9keTogJ09wZW4nLFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICdpbic6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlSW4obW9kYWwsIGRpYWxvZyksXG4gICAgICBvdXQ6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlT3V0KG1vZGFsLCBkaWFsb2cpXG4gICAgfVxuICB9fVxuPlxuICA8aW1nXG4gICAgc3JjPScuLi9kb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl82MDB4NDAwLnN2ZydcbiAgICBhbHQ9J0ltYWdlIHBsYWNlIGhvbGRlcidcbiAgICB3aWR0aD1cIjEwMCVcIlxuICAgIGhlaWdodD1cIjQwMFwiLz5cbjwvTW9kYWw+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+TW9kYWwgYmxhbms8L2gyPlxuICAgICAgPHA+XG5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGJsYW5rXG4gICAgICAgICAgY2xvc2VcbiAgICAgICAgICB0cmlnZ2VyPXt7XG4gICAgICAgICAgICBib2R5OiAnT3BlbicsXG4gICAgICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICAgICdpbic6IChtb2RhbCwgZGlhbG9nKSA9PiBibGFua0FuaW1hdGVJbihtb2RhbCwgZGlhbG9nKSxcbiAgICAgICAgICAgICAgb3V0OiAobW9kYWwsIGRpYWxvZykgPT4gYmxhbmtBbmltYXRlT3V0KG1vZGFsLCBkaWFsb2cpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMj5CbGFuayBtb2RhbDwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltXG4gICAgICAgICAgICB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleFxuICAgICAgICAgICAgZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXG4gICAgICAgICAgICB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyXG4gICAgICAgICAgICBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnRcbiAgICAgICAgICAgIG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Nb2RhbD5cblxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YFxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+TW9kYWwgdHlwZXM8L2gyPlxuICAgICAgPHA+XG5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzPkFsZXJ0PC9oMz5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2g0PlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBvaz17e2NvbnRleHQ6ICdwcmltYXJ5J319XG4gICAgICAgICAgdHlwZT0nYWxlcnQnXG4gICAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgICAgYm9keTogJ09wZW4nLFxuICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgICAgICAgICBvdXQgOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEF0dGVudGlvbiFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2BcbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Nb2RhbCBQcm9wczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGNvZGU+Jmx0O01vZGFsJmd0OzwvY29kZT4gcHJvcHMgYW5kIHRoZWlyIHR5cGVzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFNlZSBiYXNlIGNvbXBvbmVudCBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlByb3A8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UeXBlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxEb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZGFsLWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})