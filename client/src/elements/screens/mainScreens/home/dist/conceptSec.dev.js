"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConceptPic = exports.ConceptText = exports.ConceptContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var color = _interopRequireWildcard(require("../../../common/colors"));

var _graphic = _interopRequireDefault(require("../../../../Assets/Images/graphic.png"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        width: 62%;\n        height:100%;\n        margin-right:40px;\n        div {\n            float:center;\n            margin-top:40px; \n            height:80%;\n            background-image: url(", ");\n            background-position: left;\n            background-repeat: no-repeat; \n            background-size: cover;  \n          img{\n            float:right;\n            margin-top:30px;\n            padding:10px;\n            height:280px;\n            border:1px solid black;\n          }      \n        }\n    \n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 38%;\n    height:80%;\n    .title{\n        margin-bottom:2em;\n    }\n    b {\n        font-size:1.9em;\n        font-weight:400;\n        line-height:1;\n\n    }\n    .content {\n        margin-top:2em;\n        line-height:2;\n        width:95%;\n    }\n    \n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    \n    width: 93%;\n    height: 30em;\n    background-color: ", ";\n    float:left;\n    display:flex;\n    border-radius:13px;\n    margin-bottom:60px;\n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ConceptContainer = _styledComponents["default"].div(_templateObject(), color.white);

exports.ConceptContainer = ConceptContainer;

var ConceptText = _styledComponents["default"].div(_templateObject2());

exports.ConceptText = ConceptText;

var ConceptPic = _styledComponents["default"].div(_templateObject3(), _graphic["default"]);

exports.ConceptPic = ConceptPic;