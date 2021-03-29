"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SummaryContainer = exports.CustomizeContainer = exports.GetStartedContainer = exports.CostumizeSection = exports.UnityContainer = exports.MidSection = exports.Header = exports.CostumizeContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var color = _interopRequireWildcard(require("../../../common/colors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        margin-top:-10%;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    overflow:visible; \n    a {\n        text-align:center;\n        color:black;\n        padding:1px 25px;\n        display:flex;\n        align-items:center;\n        justify-content:space-between;\n        border-bottom: 1px ", " solid;\n    }\n\n    div {\n        border-radius:15px;\n        display:flex;\n        flex-direction:column;\n        background-color:white;\n    }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n.container{\n    background-color: white;\n    border-radius:15px;\n    margin:4% 0;\n}    \n  \n.categories {\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:space-between;\n    border-bottom: 1px red solid;\n    padding:10px 20px; \n\n    a {\n        font-weight:300;\n        margin:3% 0;\n        font-size   :13px;\n    }\n    \n    \n}\n.types{\n    display:flex;\n    flex-wrap: wrap;\n    justify-content:flex-start;\n    padding:2px 0px; \n    a {\n        font-weight:200;\n        margin:2% 5%;\n        font-size:13px;\n        padding:7px;\n        border: 1px #00000029 solid;\n        border-radius:15px;\n    }\n    \n}\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    height:92vh;\n    width:23%;\n    a {\n        color:black;\n    }\n    .title{\n        font-weight:700;\n        font-size:18px;\n        line-height:1;\n    }\n    \n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nheight:92vh;  \nwidth: 74%;\n    .my-unity-app {\n        border-radius:15px;\n    }\n       \n "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    height:auto;\n    flex-wrap:stretch;\n    justify-content:flex-start;\n    align-items:flex-start;\n\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nmargin:6.5em 0 2em 3em;\ntext-align:left;\np {\n    font-size:45px;\n    font-weight:200;\n    margin:0;\n}\nspan{\n    color:", ";\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height:auto;\n    min-height:150vh;\n    background-color: ", ";\n    .wrapper{\n        width:90%;\n    }\n "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CostumizeContainer = _styledComponents["default"].div(_templateObject(), color.bg);

exports.CostumizeContainer = CostumizeContainer;

var Header = _styledComponents["default"].div(_templateObject2(), color.darkRed);

exports.Header = Header;

var MidSection = _styledComponents["default"].div(_templateObject3());

exports.MidSection = MidSection;

var UnityContainer = _styledComponents["default"].div(_templateObject4());

exports.UnityContainer = UnityContainer;

var CostumizeSection = _styledComponents["default"].div(_templateObject5());

exports.CostumizeSection = CostumizeSection;

var GetStartedContainer = _styledComponents["default"].div(_templateObject6());

exports.GetStartedContainer = GetStartedContainer;

var CustomizeContainer = _styledComponents["default"].div(_templateObject7(), color.bg);

exports.CustomizeContainer = CustomizeContainer;

var SummaryContainer = _styledComponents["default"].div(_templateObject8());

exports.SummaryContainer = SummaryContainer;