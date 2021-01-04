"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonContainer = exports.ImageSecContent = exports.ImageSecContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var color = _interopRequireWildcard(require("../../../common/colors"));

var _car = _interopRequireDefault(require("../../../../Assets/Images/car.jpg"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n    position: absolute;\n    top: 43em;\n    left:50%;\n    transform: translate(-50%, -50%);\n    a {\n        color: ", ";\n        border: 2px solid red;\n        padding:20px 25px;\n        line-height:4;\n        border-radius: 0.5em;\n    }\n    a: hover {\n        border-radius: 1em;\n        padding:25px 30px;\n    }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n    position: absolute;\n    top: 28em;\n    left:7.6%;\n    color: ", ";\n    \n    div {\n        height:10em;\n        margin-bottom:0.2em;\n    }\n   \n    p {\n        margin:auto;\n        font-size:3.5em;\n        font-weight:200;\n    }\n    small {\n        font-size:1.1em;\n        font-weight:300;\n    }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\nheight:50em;\nbackground-image: url(", ");\nbackground-position: center;\nbackground-repeat: no-repeat; \nbackground-size: cover;\n.highlight {\n    background-color:", ";   \n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImageSecContainer = _styledComponents["default"].section(_templateObject(), _car["default"], color.red);

exports.ImageSecContainer = ImageSecContainer;

var ImageSecContent = _styledComponents["default"].div(_templateObject2(), color.white);

exports.ImageSecContent = ImageSecContent;

var ButtonContainer = _styledComponents["default"].div(_templateObject3(), color.white);

exports.ButtonContainer = ButtonContainer;