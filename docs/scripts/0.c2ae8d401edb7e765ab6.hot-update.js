webpackHotUpdate(0,{

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitButton = __webpack_require__(69);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitCodeblock = __webpack_require__(15);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(16);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitModal = __webpack_require__(608);\n\nvar _reactUikitModal2 = _interopRequireDefault(_reactUikitModal);\n\nvar _velocityAnimate = __webpack_require__(242);\n\nvar _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar animateIn = function animateIn(modal, dialog) {\n  (0, _velocityAnimate2.default)(modal, { opacity: 1 }, { display: 'block' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: 1, opacity: 1 }, { display: 'block' }, 200);\n};\n\nvar animateOut = function animateOut(modal, dialog) {\n  (0, _velocityAnimate2.default)(modal, { opacity: 0 }, { display: 'none' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: -100, opacity: 0 }, { display: 'none' }, 200);\n};\n\nvar blankAnimateIn = function blankAnimateIn(modal, dialog) {\n  (0, _velocityAnimate2.default)(modal, { opacity: 1 }, { display: 'block' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: 100, opacity: 1 }, { display: 'block' }, 200);\n};\n\nvar blankAnimateOut = function blankAnimateOut(modal, dialog) {\n  (0, _velocityAnimate2.default)(modal, { opacity: 0 }, { display: 'none' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: -100, opacity: 0 }, { display: 'none' }, 200);\n};\n\nvar ModalDoc = function ModalDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Modal'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Displays dialogs prompts.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-modal' },\n          'react-uikit-modal'\n        ),\n        ' on github.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-modal --save;\\n// ES6\\nimport Modal from \\'react-uikit-modal\\';\\n\\n// ES5\\nvar Modal = require(\\'react-uikit-modal\\');'\n      ),\n      _react2.default.createElement('hr', { className: 'uk-article-divider' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Headline'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Modal\\n  close\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n>\\n  <h2>Headline</h2>\\n  <p>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\\n    ea commodo consequat. Duis aute irure dolor in reprehenderit in\\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\\n    mollit anim id est laborum.\\n  </p>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal header and footer'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          header: 'With header and footer',\n          footer: _react2.default.createElement(_reactUikitButton2.default, { body: 'Save' }),\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n\n        },\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Modal\\n  close\\n  header=\\'With header and footer\\'\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n  footer={<Button body=\\'Save\\' />}\\n>\\n  <p>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\\n    ea commodo consequat. Duis aute irure dolor in reprehenderit in\\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\\n    mollit anim id est laborum.\\n  </p>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal Caption'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          caption: 'this is a caption',\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'h2',\n          null,\n          'With caption'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        ' <Modal\\n  caption=\\'this is a caption\\'\\n  close\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n>\\n  <h2>With caption</h2>\\n  <p>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\\n    ea commodo consequat. Duis aute irure dolor in reprehenderit in\\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\\n    mollit anim id est laborum.\\n  </p>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal lightbox'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          lightbox: true,\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement('img', {\n          src: '../docs/images/placeholder_600x400.svg',\n          alt: 'Image place holder',\n          width: '100%',\n          height: '400' })\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Modal\\n  lightbox\\n  close\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n>\\n  <img\\n    src=\\'../docs/images/placeholder_600x400.svg\\'\\n    alt=\\'Image place holder\\'\\n    width=\"100%\"\\n    height=\"400\"/>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal blank'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          blank: true,\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return blankAnimateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return blankAnimateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'h2',\n          null,\n          'With caption'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          '<Modal>'\n        ),\n        ' props and their types.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement('code', null)\n            ),\n            _react2.default.createElement('td', { className: 'uk-text-left' }),\n            _react2.default.createElement('td', { className: 'uk-text-left' })\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ModalDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RhbC1kb2MuanN4P2YzZjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdiLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBUyxDQUFJLEtBQUssRUFBRSxNQUFNLEVBQUs7QUFDbkMsaUNBQVMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELGlDQUFTLE1BQU0sRUFBRSxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ3hFLENBQUM7O0FBRUYsSUFBTSxVQUFVLEdBQUcsU0FBYixVQUFVLENBQUksS0FBSyxFQUFFLE1BQU0sRUFBSztBQUNwQyxpQ0FBUyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkQsaUNBQVMsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUM1RSxDQUFDOztBQUVGLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWMsQ0FBSSxLQUFLLEVBQUUsTUFBTSxFQUFLO0FBQ3hDLGlDQUFTLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2RCxpQ0FBUyxNQUFNLEVBQUUsRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLE9BQU8s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O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVTtZQUN0Qzs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7V0FDbkM7U0FDQztRQUNSOzs7VUFDRTs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCLDJDQUFhO2FBQ1Y7WUFDTCxzQ0FBSSxTQUFTLEVBQUMsY0FBYyxHQUFNO1lBQ2xDLHNDQUFJLFNBQVMsRUFBQyxjQUFjLEdBQU07V0FDL0I7U0FFQztPQUNGO0tBQ0E7R0FHTjtDQUNQLENBQUM7O2tCQUVhLFFBQVEiLCJmaWxlIjoiNjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LXVpa2l0LWJ1dHRvbic7XG5pbXBvcnQgQ29kZWJsb2NrIGZyb20gJ3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgVGFibGUgZnJvbSAncmVhY3QtdWlraXQtdGFibGUnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtbW9kYWwnO1xuaW1wb3J0IHZlbG9jaXR5IGZyb20gJ3ZlbG9jaXR5LWFuaW1hdGUnO1xuXG5cbmNvbnN0IGFuaW1hdGVJbiA9IChtb2RhbCwgZGlhbG9nKSA9PiB7XG4gIHZlbG9jaXR5KG1vZGFsLCB7b3BhY2l0eTogMX0sIHtkaXNwbGF5OiAnYmxvY2snfSwgMzAwKTtcbiAgdmVsb2NpdHkoZGlhbG9nLCB7dHJhbnNsYXRlWTogMSwgb3BhY2l0eTogMX0sIHtkaXNwbGF5OiAnYmxvY2snfSwgMjAwKTtcbn07XG5cbmNvbnN0IGFuaW1hdGVPdXQgPSAobW9kYWwsIGRpYWxvZykgPT4ge1xuICB2ZWxvY2l0eShtb2RhbCwge29wYWNpdHk6MH0sIHsgZGlzcGxheTogJ25vbmUnIH0sIDMwMCk7XG4gIHZlbG9jaXR5KGRpYWxvZywge3RyYW5zbGF0ZVk6IC0xMDAsIG9wYWNpdHk6IDB9LCB7IGRpc3BsYXk6ICdub25lJyB9LCAyMDApO1xufTtcblxuY29uc3QgYmxhbmtBbmltYXRlSW4gPSAobW9kYWwsIGRpYWxvZykgPT4ge1xuICB2ZWxvY2l0eShtb2RhbCwge29wYWNpdHk6IDF9LCB7ZGlzcGxheTogJ2Jsb2NrJ30sIDMwMCk7XG4gIHZlbG9jaXR5KGRpYWxvZywge3RyYW5zbGF0ZVk6IDEwMCwgb3BhY2l0eTogMX0sIHtkaXNwbGF5OiAnYmxvY2snfSwgMjAwKTtcbn07XG5cbmNvbnN0IGJsYW5rQW5pbWF0ZU91dCA9IChtb2RhbCwgZGlhbG9nKSA9PiB7XG4gIHZlbG9jaXR5KG1vZGFsLCB7b3BhY2l0eTowfSwgeyBkaXNwbGF5OiAnbm9uZScgfSwgMzAwKTtcbiAgdmVsb2NpdHkoZGlhbG9nLCB7dHJhbnNsYXRlWTogLTEwMCwgb3BhY2l0eTogMH0sIHsgZGlzcGxheTogJ25vbmUnIH0sIDIwMCk7XG59O1xuXG5jb25zdCBNb2RhbERvYyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPk1vZGFsPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndWstYXJ0aWNsZS1sZWFkJz5cbiAgICAgICAgRGlzcGxheXMgZGlhbG9ncyBwcm9tcHRzLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL290aXNzdi9yZWFjdC11aWtpdC1tb2RhbCc+cmVhY3QtdWlraXQtbW9kYWw8L2E+IG9uIGdpdGh1Yi5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICA8Q29kZWJsb2NrPlxue2BucG0gaW5zdGFsbCByZWFjdC11aWtpdC1tb2RhbCAtLXNhdmU7XG4vLyBFUzZcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC11aWtpdC1tb2RhbCc7XG5cbi8vIEVTNVxudmFyIE1vZGFsID0gcmVxdWlyZSgncmVhY3QtdWlraXQtbW9kYWwnKTtgfVxuICAgICAgPC9Db2RlYmxvY2s+XG5cbiAgICAgIDxociBjbGFzc05hbWU9J3VrLWFydGljbGUtZGl2aWRlcicgLz5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG5cbiAgICAgIDxNb2RhbFxuICAgICAgICBjbG9zZVxuICAgICAgICB0cmlnZ2VyPXt7XG4gICAgICAgICAgYm9keTogJ09wZW4nLFxuICAgICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICAgICdpbic6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlSW4obW9kYWwsIGRpYWxvZyksXG4gICAgICAgICAgICBvdXQ6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlT3V0KG1vZGFsLCBkaWFsb2cpXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aDI+SGVhZGxpbmU8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbVxuICAgICAgICAgIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4XG4gICAgICAgICAgZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXG4gICAgICAgICAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1clxuICAgICAgICAgIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudFxuICAgICAgICAgIG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICA8L3A+XG4gICAgICA8L01vZGFsPlxuXG4gICAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2A8TW9kYWxcbiAgY2xvc2VcbiAgdHJpZ2dlcj17e1xuICAgIGJvZHk6ICdPcGVuJyxcbiAgICBhbmltYXRlOiB7XG4gICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgb3V0OiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgIH1cbiAgfX1cbj5cbiAgPGgyPkhlYWRsaW5lPC9oMj5cbiAgPHA+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW1cbiAgICB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleFxuICAgIGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpblxuICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXJcbiAgICBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnRcbiAgICBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgPC9wPlxuPC9Nb2RhbD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPk1vZGFsIGhlYWRlciBhbmQgZm9vdGVyPC9oMj5cbiAgICAgIDxwPlxuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBoZWFkZXI9J1dpdGggaGVhZGVyIGFuZCBmb290ZXInXG4gICAgICAgICAgZm9vdGVyPXs8QnV0dG9uIGJvZHk9J1NhdmUnIC8+fVxuICAgICAgICAgIGNsb3NlXG4gICAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgICAgYm9keTogJ09wZW4nLFxuICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgICAgICAgICBvdXQ6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlT3V0KG1vZGFsLCBkaWFsb2cpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cblxuICAgICAgICA+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltXG4gICAgICAgICAgICB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleFxuICAgICAgICAgICAgZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXG4gICAgICAgICAgICB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyXG4gICAgICAgICAgICBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnRcbiAgICAgICAgICAgIG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Nb2RhbD5cblxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57YDxNb2RhbFxuICBjbG9zZVxuICBoZWFkZXI9J1dpdGggaGVhZGVyIGFuZCBmb290ZXInXG4gIHRyaWdnZXI9e3tcbiAgICBib2R5OiAnT3BlbicsXG4gICAgYW5pbWF0ZToge1xuICAgICAgJ2luJzogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVJbihtb2RhbCwgZGlhbG9nKSxcbiAgICAgIG91dDogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVPdXQobW9kYWwsIGRpYWxvZylcbiAgICB9XG4gIH19XG4gIGZvb3Rlcj17PEJ1dHRvbiBib2R5PSdTYXZlJyAvPn1cbj5cbiAgPHA+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW1cbiAgICB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleFxuICAgIGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpblxuICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXJcbiAgICBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnRcbiAgICBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgPC9wPlxuPC9Nb2RhbD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPk1vZGFsIENhcHRpb248L2gyPlxuICAgICAgPHA+XG5cbiAgICAgIDwvcD5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGNhcHRpb249J3RoaXMgaXMgYSBjYXB0aW9uJ1xuICAgICAgICAgIGNsb3NlXG4gICAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgICAgYm9keTogJ09wZW4nLFxuICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgICAgICAgICBvdXQ6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlT3V0KG1vZGFsLCBkaWFsb2cpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMj5XaXRoIGNhcHRpb248L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbVxuICAgICAgICAgICAgdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXhcbiAgICAgICAgICAgIGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpblxuICAgICAgICAgICAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1clxuICAgICAgICAgICAgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50XG4gICAgICAgICAgICBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2AgPE1vZGFsXG4gIGNhcHRpb249J3RoaXMgaXMgYSBjYXB0aW9uJ1xuICBjbG9zZVxuICB0cmlnZ2VyPXt7XG4gICAgYm9keTogJ09wZW4nLFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICdpbic6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlSW4obW9kYWwsIGRpYWxvZyksXG4gICAgICBvdXQ6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlT3V0KG1vZGFsLCBkaWFsb2cpXG4gICAgfVxuICB9fVxuPlxuICA8aDI+V2l0aCBjYXB0aW9uPC9oMj5cbiAgPHA+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW1cbiAgICB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleFxuICAgIGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpblxuICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXJcbiAgICBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnRcbiAgICBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgPC9wPlxuPC9Nb2RhbD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPk1vZGFsIGxpZ2h0Ym94PC9oMj5cbiAgICAgIDxwPlxuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBsaWdodGJveFxuICAgICAgICAgIGNsb3NlXG4gICAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgICAgYm9keTogJ09wZW4nLFxuICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgICAgICAgICBvdXQ6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlT3V0KG1vZGFsLCBkaWFsb2cpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz0nLi4vZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfNjAweDQwMC5zdmcnXG4gICAgICAgICAgICBhbHQ9J0ltYWdlIHBsYWNlIGhvbGRlcidcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI0MDBcIi8+XG4gICAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2A8TW9kYWxcbiAgbGlnaHRib3hcbiAgY2xvc2VcbiAgdHJpZ2dlcj17e1xuICAgIGJvZHk6ICdPcGVuJyxcbiAgICBhbmltYXRlOiB7XG4gICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgb3V0OiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgIH1cbiAgfX1cbj5cbiAgPGltZ1xuICAgIHNyYz0nLi4vZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfNjAweDQwMC5zdmcnXG4gICAgYWx0PSdJbWFnZSBwbGFjZSBob2xkZXInXG4gICAgd2lkdGg9XCIxMDAlXCJcbiAgICBoZWlnaHQ9XCI0MDBcIi8+XG48L01vZGFsPlxuYH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPk1vZGFsIGJsYW5rPC9oMj5cbiAgICAgIDxwPlxuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBibGFua1xuICAgICAgICAgIGNsb3NlXG4gICAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgICAgYm9keTogJ09wZW4nLFxuICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYmxhbmtBbmltYXRlSW4obW9kYWwsIGRpYWxvZyksXG4gICAgICAgICAgICAgIG91dDogKG1vZGFsLCBkaWFsb2cpID0+IGJsYW5rQW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aDI+V2l0aCBjYXB0aW9uPC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW1cbiAgICAgICAgICAgIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4XG4gICAgICAgICAgICBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW5cbiAgICAgICAgICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXJcbiAgICAgICAgICAgIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudFxuICAgICAgICAgICAgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgXG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+TW9kYWwgUHJvcHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxjb2RlPiZsdDtNb2RhbCZndDs8L2NvZGU+IHByb3BzIGFuZCB0aGVpciB0eXBlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBTZWUgYmFzZSBjb21wb25lbnQgZm9yIGFkZGl0aW9uYWwgdXRpbGl0eSBwcm9wcy5cbiAgICAgIDwvcD5cblxuICAgICAgPFRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5Qcm9wPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+VHlwZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPjwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPjwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPjwvdGQ+XG4gICAgICAgICAgPC90cj5cblxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L3NlY3Rpb24+XG5cblxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsRG9jO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2RhbC1kb2MuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})