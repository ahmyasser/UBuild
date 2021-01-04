"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pinned = exports.Paragraph2 = exports.Paragraph1 = exports.StoryContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var color = _interopRequireWildcard(require("../../common/colors"));

var _pinned = _interopRequireDefault(require("../../../Assets/Images/pinned.png"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nz-index: 100;\nposition: fixed;\ntop:60%;\nleft:70%;\nbackground-image: url(", ");\nbackground-position: center;\nbackground-repeat: no-repeat; \nbackground-size: cover;\n\nheight:65px;\nwidth:180px;\n   \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nwidth:100%;\nh2 {\n   margin-bottom:-20px;\n   margin-top:16px;\n   font-size:45px;\n   font-weight: 200;\n}\np {\n   font-weight:400;\n   font-size:22px;\n   padding-top:14px\n   }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nwidth:60%;\nmax-width:1000px;\nb {\n      font-size:28px;\n      font-weight: 500;\n   }\n\n   p {\n      \n      font-size:24px;\n      font-weight: 300;\n\n   }\n\n   h1 {\n      font-size:53px;\n      font-weight: 400;\n      margin-bottom:-10px;\n   }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height:1050px;\n    margin:auto;\n    background-color: ", "; \n    color:white;\n    display: flex;\n    flex-direction:column;\n    .container {\n      float:left;\n        width:80%;\n        height:90%;\n\n    }\n    div {\n       float:left;\n\n    }    \n "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StoryContainer = _styledComponents["default"].section(_templateObject(), color.darkRed);

exports.StoryContainer = StoryContainer;

var Paragraph1 = _styledComponents["default"].div(_templateObject2());

exports.Paragraph1 = Paragraph1;

var Paragraph2 = _styledComponents["default"].div(_templateObject3());

exports.Paragraph2 = Paragraph2;

var Pinned = _styledComponents["default"].div(_templateObject4(), _pinned["default"]);

exports.Pinned = Pinned;