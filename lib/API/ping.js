"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _default = async ({
  baseURL
}) => {
  return (0, _utils.makeRequest)({
    url: `${baseURL}/ping`,
    method: 'GET'
  });
};

exports.default = _default;