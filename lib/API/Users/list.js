"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../utils");

var _default = async ({
  baseURL,
  appToken,
  accessToken
}) => {
  return (0, _utils.makeRequest)({
    url: `${baseURL}/users`,
    method: 'GET',
    appToken,
    accessToken
  });
};

exports.default = _default;