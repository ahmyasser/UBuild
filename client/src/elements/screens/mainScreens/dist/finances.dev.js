"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinancesContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var color = _interopRequireWildcard(require("../../common/colors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 840px;\n    background-color: ", ";\n\n    .container { \n       p {  margin:120px;\n            font-weight:300;\n            font-size:32px;\n        }\n       margin-bottom:50px;\n\n    }\n    .table {   \n        float:left;\n        width:1000px;\n        border: 1px solid ", ";\n        \n    }\n    .wrapper {\n        height: 90px;\n        display:flex;\n        border: 2px solid ", ";\n    }\n    .logo {\n        height:100%;\n        width:400px;\n        border-right: 3px solid ", ";\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        img{\n            margin-left:40px;\n            height:28px;\n        }\n        \n    }\n    .link{\n        height:100%;\n        width:700px;\n        display:flex;\n        justify-content:flex-start;\n        align-items:center;\n      \n        a  {\n           text-decoration: underline;\n            color: ", ";\n            font-size:30px;\n            font-weight:200;\n            margin-left:10%;\n        }\n    }\n\n   \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FinancesContainer = _styledComponents["default"].div(_templateObject(), color.bg, color.white, color.white, color.white, color.darkRed);

exports.FinancesContainer = FinancesContainer;