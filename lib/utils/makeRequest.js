"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

/*
const generateHeader = ({ appToken, accessToken }) => {
  const token = Buffer.from(`${appToken}:${accessToken}`, 'utf8').toString('base64')
  return {
    Authorization: `Basic ${token}`
  }
}
*/
const VALID_METHODS = ['get', 'post', 'put', 'delete'];

const makeRequest = async ({
  url,
  method,
  params = {},
  body = {},
  appToken,
  accessToken
}) => {
  try {
    method = String(method).toLowerCase();

    if (VALID_METHODS.indexOf(method) === -1) {
      method = 'get';
    }

    const config = {
      url,
      method
    };

    if (typeof appToken !== 'undefined' && appToken.length && typeof accessToken !== 'undefined' && accessToken.length) {
      config.auth = {
        username: appToken,
        password: accessToken
      };
    }

    if (method === 'get' && Object.keys(params).length) {
      config.params = params;
    } else if (Object.keys(body).length) {
      config.data = body;
    }

    const request = await (0, _axios.default)(config);
    return request.data;
  } catch (err) {
    console.log(err);
  }
};

var _default = makeRequest;
exports.default = _default;