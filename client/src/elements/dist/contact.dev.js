"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var color = _interopRequireWildcard(require("./common/colors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\nwidth: 100%;\nheight: 840px;\nbackground-color: ", ";\n\n.container {\n    margin:135px; \n    p { \n        margin:30px; \n        margin-bottom:80px;\n        font-weight:200;\n        font-size:32px;\n        \n     }\n    margin-bottom:50px;\n\n }\n .body {   \n    float:left;\n    width:860px;\n    height:400px;\n    border: 2px solid ", ";\n    border-radius:20px;\n    input {\n        margin-right:7px;\n        background-color:transparent;\n        width: 100%;\n        height:60px;\n        border:none;\n        border-bottom: 2px solid ", ";\n    }\n    input::placeholder {\n        color: black;\n        padding-left: 30px;\n        font-size:15px;\n      }\n      \n    #message {\n        height:200px;\n        border:none;\n    }\n}\n\n \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContactContainer = _styledComponents["default"].div(_templateObject(), color.bg, color.white, color.white);

exports.ContactContainer = ContactContainer;