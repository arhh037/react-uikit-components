webpackHotUpdate(0,{

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(75);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(155);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(89);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _dialog = __webpack_require__(607);\n\nvar _dialog2 = _interopRequireDefault(_dialog);\n\nvar _reactUikitTrigger = __webpack_require__(471);\n\nvar _reactUikitTrigger2 = _interopRequireDefault(_reactUikitTrigger);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Modal = (function (_React$Component) {\n  _inherits(Modal, _React$Component);\n\n  function Modal(props) {\n    _classCallCheck(this, Modal);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));\n\n    _this.state = {\n      show: props.show\n    };\n    return _this;\n  }\n\n  _createClass(Modal, [{\n    key: 'handleCloseClick',\n    value: function handleCloseClick(e) {\n      e.stopPropagation();\n      console.log(e.target.dataset.kitid);\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      _reactUikitBase2.default.helpers.getElement('modal-' + this.props.kitid).addEventListener('click', this.handleCloseClick);\n    }\n  }, {\n    key: 'toggleModal',\n    value: function toggleModal(e) {\n      var _this2 = this;\n\n      var props = this.props;\n      var modal = _reactUikitBase2.default.helpers.getElement('modal-' + props.kitid);\n      var dialog = _reactUikitBase2.default.helpers.getElement('dialog-' + props.kitid);\n      var body = document.getElementsByTagName('body');\n\n      var show = function show() {\n        body[0].style.paddingRight = '16px';\n        body[0].style.overflow = 'hidden';\n        _this2.setState({ show: true });\n        props.trigger.animate.in(modal, dialog);\n      };\n\n      var hide = function hide() {\n        if (e.target.getAttribute('data-toggle')) {\n          body[0].style.paddingRight = '';\n          body[0].style.overflow = '';\n          _this2.setState({ show: false });\n          props.trigger.animate.out(modal, dialog);\n        }\n      };\n\n      _ufunc2.default.either(show, hide)(!this.state.show);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var props = this.props;\n\n      // CSS classes\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-modal', props.classes, props.className]);\n\n      // Elements\n      var caption = _react2.default.createElement('div', { className: 'uk-modal-caption' }, props.caption);\n\n      // Return Component\n      return _react2.default.createElement('div', null, _react2.default.createElement(_reactUikitTrigger2.default, _extends({}, props.trigger, { kitid: 'trigger-' + props.kitid, onClick: function onClick(e) {\n          return _this3.toggleModal(e);\n        } })), _react2.default.createElement('div', _extends({}, props, {\n        className: cssClassNames,\n        'data-kitid': 'modal-' + props.kitid,\n        onClick: function onClick(e) {\n          return _this3.toggleModal(e);\n        }\n      }), _react2.default.createElement(_dialog2.default, _extends({}, props.dialog, {\n        header: props.header,\n        footer: props.footer,\n        kitid: 'dialog-' + props.kitid,\n        onClose: function onClose(e) {\n          return props.onClose(e);\n        }\n      }), props.children), caption));\n    }\n  }]);\n\n  return Modal;\n})(_react2.default.Component);\n\nModal.propTypes = {\n  caption: _react2.default.PropTypes.node,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  close: _react2.default.PropTypes.bool,\n  dialog: _react2.default.PropTypes.object,\n  footer: _react2.default.PropTypes.any,\n  kitid: _react2.default.PropTypes.string,\n  header: _react2.default.PropTypes.string,\n  show: _react2.default.PropTypes.bool,\n  trigger: _react2.default.PropTypes.object\n};\n\nexports.default = _reactUikitBase2.default.base(Modal);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1tb2RhbC9saWIvbW9kYWwuanM/Y2RhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENB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TSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc7QUFDckMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsUUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDeEMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDcEMsU0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07Q0FDMUMsQ0FBQzs7QUFFRixPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDIiwiZmlsZSI6IjYwOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbnZhciBfZGlhbG9nID0gcmVxdWlyZSgnLi9kaWFsb2cnKTtcblxudmFyIF9kaWFsb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlhbG9nKTtcblxudmFyIF9yZWFjdFVpa2l0VHJpZ2dlciA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LXRyaWdnZXInKTtcblxudmFyIF9yZWFjdFVpa2l0VHJpZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0VHJpZ2dlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1vZGFsID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWwocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3c6IHByb3BzLnNob3dcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICBrZXk6ICdoYW5kbGVDbG9zZUNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2xvc2VDbGljayhlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC5raXRpZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmdldEVsZW1lbnQoJ21vZGFsLScgKyB0aGlzLnByb3BzLmtpdGlkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xvc2VDbGljayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9nZ2xlTW9kYWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVNb2RhbChlKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBtb2RhbCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmdldEVsZW1lbnQoJ21vZGFsLScgKyBwcm9wcy5raXRpZCk7XG4gICAgICB2YXIgZGlhbG9nID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuZ2V0RWxlbWVudCgnZGlhbG9nLScgKyBwcm9wcy5raXRpZCk7XG4gICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG5cbiAgICAgIHZhciBzaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgYm9keVswXS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMTZweCc7XG4gICAgICAgIGJvZHlbMF0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcbiAgICAgICAgcHJvcHMudHJpZ2dlci5hbmltYXRlLmluKG1vZGFsLCBkaWFsb2cpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpKSB7XG4gICAgICAgICAgYm9keVswXS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgICBib2R5WzBdLnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XG4gICAgICAgICAgcHJvcHMudHJpZ2dlci5hbmltYXRlLm91dChtb2RhbCwgZGlhbG9nKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihzaG93LCBoaWRlKSghdGhpcy5zdGF0ZS5zaG93KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgLy8gQ1NTIGNsYXNzZXNcbiAgICAgIHZhciBjc3NDbGFzc05hbWVzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5DbGFzc2VzKFsndWstbW9kYWwnLCBwcm9wcy5jbGFzc2VzLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAgICAgLy8gRWxlbWVudHNcbiAgICAgIHZhciBjYXB0aW9uID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3VrLW1vZGFsLWNhcHRpb24nIH0sXG4gICAgICAgIHByb3BzLmNhcHRpb25cbiAgICAgICk7XG5cbiAgICAgIC8vIFJldHVybiBDb21wb25lbnRcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFVpa2l0VHJpZ2dlcjIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLnRyaWdnZXIsIHsga2l0aWQ6ICd0cmlnZ2VyLScgKyBwcm9wcy5raXRpZCwgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLnRvZ2dsZU1vZGFsKGUpO1xuICAgICAgICAgIH0gfSkpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lcyxcbiAgICAgICAgICAgICdkYXRhLWtpdGlkJzogJ21vZGFsLScgKyBwcm9wcy5raXRpZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnRvZ2dsZU1vZGFsKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX2RpYWxvZzIuZGVmYXVsdCxcbiAgICAgICAgICAgIF9leHRlbmRzKHt9LCBwcm9wcy5kaWFsb2csIHtcbiAgICAgICAgICAgICAgaGVhZGVyOiBwcm9wcy5oZWFkZXIsXG4gICAgICAgICAgICAgIGZvb3RlcjogcHJvcHMuZm9vdGVyLFxuICAgICAgICAgICAgICBraXRpZDogJ2RpYWxvZy0nICsgcHJvcHMua2l0aWQsXG4gICAgICAgICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5vbkNsb3NlKGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXB0aW9uXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsO1xufSkoX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgY2FwdGlvbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ub2RlLFxuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzZXM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGNsb3NlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGRpYWxvZzogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3QsXG4gIGZvb3RlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGVyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvdzogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICB0cmlnZ2VyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoTW9kYWwpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtbW9kYWwvbGliL21vZGFsLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})