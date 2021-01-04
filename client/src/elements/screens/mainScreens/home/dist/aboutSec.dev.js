"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var color = _interopRequireWildcard(require("../../../common/colors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 28em;\n    display:flex;\n    flex-direction:column;\n    justify-content:flex-start;\n    align-items:center;\n    .title {\n        margin-top: 3em;\n        font-size:18px;\n        font-weight:400;\n    }\n    .border {\n        width:1100px;\n        height:290px;\n        border: 2px solid ", "; \n        border-radius:0.5em;\n        display:flex;\n        flex-direction:column;\n        justify-content:center;\n        align-items:center;     \n        .border {\n            width:1085px;\n            height:275px;\n            .border {\n                width:1070px;\n                height:260px;\n\n                .border {\n                    width:1055px;\n                    height:245px;\n                    text-align:center;\n                    \n                    b{\n                        padding:2% 1%;\n                        line-height: 1;\n                        font-size:40px;\n                        font-weight:500;\n                    }\n                   \n                    p{\n\n                    }\n                    div {\n                        width:630px;\n                    }\n                }\n\n            }\n        }\n    }\n   \n@media screen and (min-width: 900px) {\n    b {\n      margin:0 10%;\n    }\n  }\n    \n "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AboutContainer = _styledComponents["default"].div(_templateObject(), color.white);

exports.AboutContainer = AboutContainer;