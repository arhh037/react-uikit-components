webpackHotUpdate(0,{

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(75);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(155);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(89);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitButton = __webpack_require__(253);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Dialog = (function (_React$Component) {\n  _inherits(Dialog, _React$Component);\n\n  function Dialog() {\n    _classCallCheck(this, Dialog);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).apply(this, arguments));\n  }\n\n  _createClass(Dialog, [{\n    key: 'render',\n    value: function render() {\n      var props = this.props;\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-modal-dialog', props.lightbox ? 'uk-modal-dialog-lightbox' : null]);\n\n      // Elements\n      var close = _ufunc2.default.maybeIf(_react2.default.createElement(_reactUikitButton2.default, {\n        className: 'uk-modal-close uk-close',\n        type: 'close',\n        kitid: props.kitid ? props.kitid : 'close-' + props.kitid,\n        onClick: props.onClose,\n        float: 'right' }))(props.onClose);\n\n      var header = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-modal-header' }, props.header))(props.header);\n\n      var footer = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-modal-footwer' }, props.footer))(props.footer);\n\n      // Return Component\n      return _react2.default.createElement('div', {\n        className: cssClassNames,\n        'data-kitid': props.kitid ? props.kitid : 'dialog-' + props.kitid\n      }, close, header, props.children, footer);\n    }\n  }]);\n\n  return Dialog;\n})(_react2.default.Component);\n\nDialog.propTypes = {\n  close: _react2.default.PropTypes.bool,\n  footer: _react2.default.PropTypes.node,\n  header: _react2.default.PropTypes.node,\n  lightbox: _react2.default.PropTypes.bool\n};\n\nexports.default = _reactUikitBase2.default.base(Dialog);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1tb2RhbC9saWIvZGlhbG9nLmpzP2YxY2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7O0FBRWIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUFFO0dBQUcsT0FBTyxVQUFVLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0FBQUUsUUFBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBRSxJQUFJLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUUsT0FBTyxXQUFXLENBQUM7R0FBRSxDQUFDO0NBQUUsR0FBRyxDQUFDOztBQUV0akIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDLE9BQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDOztBQUVILElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsRUFBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFD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Qzs7QUFFSixTQUFPLE1BQU0sQ0FBQztDQUNmLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFOUIsTUFBTSxDQUFDLFNBQVMsR0FBRztBQUNqQixPQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNyQyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxRQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUN0QyxVQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtDQUN6QyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMiLCJmaWxlIjoiNjA3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZSA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJhc2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFzZSk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9yZWFjdFVpa2l0QnV0dG9uID0gcmVxdWlyZSgncmVhY3QtdWlraXQtYnV0dG9uJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRGlhbG9nID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEaWFsb2csIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERpYWxvZygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlhbG9nKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGlhbG9nKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEaWFsb2csIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgLy8gQ1NTIGNsYXNzZXNcbiAgICAgIHZhciBjc3NDbGFzc05hbWVzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5DbGFzc2VzKFsndWstbW9kYWwtZGlhbG9nJywgcHJvcHMubGlnaHRib3ggPyAndWstbW9kYWwtZGlhbG9nLWxpZ2h0Ym94JyA6IG51bGxdKTtcblxuICAgICAgLy8gRWxlbWVudHNcbiAgICAgIHZhciBjbG9zZSA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFVpa2l0QnV0dG9uMi5kZWZhdWx0LCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3VrLW1vZGFsLWNsb3NlIHVrLWNsb3NlJyxcbiAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAga2l0aWQ6IHByb3BzLmtpdGlkID8gcHJvcHMua2l0aWQgOiAnY2xvc2UtJyArIHByb3BzLmtpdGlkLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcy5vbkNsb3NlLFxuICAgICAgICBmbG9hdDogJ3JpZ2h0JyB9KSkocHJvcHMub25DbG9zZSk7XG5cbiAgICAgIHZhciBoZWFkZXIgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAndWstbW9kYWwtaGVhZGVyJyB9LFxuICAgICAgICBwcm9wcy5oZWFkZXJcbiAgICAgICkpKHByb3BzLmhlYWRlcik7XG5cbiAgICAgIHZhciBmb290ZXIgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAndWstbW9kYWwtZm9vdHdlcicgfSxcbiAgICAgICAgcHJvcHMuZm9vdGVyXG4gICAgICApKShwcm9wcy5mb290ZXIpO1xuXG4gICAgICAvLyBSZXR1cm4gQ29tcG9uZW50XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzLFxuICAgICAgICAgICdkYXRhLWtpdGlkJzogcHJvcHMua2l0aWQgPyBwcm9wcy5raXRpZCA6ICdkaWFsb2ctJyArIHByb3BzLmtpdGlkXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlLFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBmb290ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERpYWxvZztcbn0pKF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5EaWFsb2cucHJvcFR5cGVzID0ge1xuICBjbG9zZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBmb290ZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMubm9kZSxcbiAgaGVhZGVyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm5vZGUsXG4gIGxpZ2h0Ym94OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKERpYWxvZyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1tb2RhbC9saWIvZGlhbG9nLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})