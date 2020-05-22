"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _marqetaSwagger = _interopRequireDefault(require("./marqeta-swagger.json"));

const BASE_URL = `https://sandbox-api.marqeta.com${_marqetaSwagger.default.basePath}`;
const paths = Object.keys(_marqetaSwagger.default.paths);

const stripPath = path => {
  return path.replace(BASE_URL, '');
};

const getSpec = ({
  path,
  method
}) => {
  if (_marqetaSwagger.default.paths[path] && _marqetaSwagger.default.paths[path][method]) {
    return _marqetaSwagger.default.paths[path];
  }

  const pathParts = path.split('/');
  const pathRegExp = new RegExp(`^/${pathParts[1]}`);
  const pathsWithMatchingHead = paths.filter(path => path.match(pathRegExp));
  const possibleMatchingPaths = pathsWithMatchingHead.filter(path => path.split('/').length === pathParts.length);

  for (const possibleMatchingPath of possibleMatchingPaths) {
    const parts = possibleMatchingPath.split('/');
    let match = true;

    for (let i = 0; i < parts.length; i++) {
      if (pathParts[i] !== parts[i] && !parts[i].match(/\{/)) {
        match = false;
      }

      if (match) {
        return _marqetaSwagger.default.paths[possibleMatchingPath];
      }
    }
  }

  return null;
};

const response = ({
  status,
  body = {}
}) => {
  return {
    status,
    body
  };
};

const request = ({
  path,
  method
}) => {
  const spec = getSpec({
    path: stripPath(path),
    method
  });

  if (spec) {
    return response({
      status: 200,
      body: {
        success: true
      }
    });
  }

  return response({
    status: 404
  });
};

var _default = {
  get: jest.fn(path => request({
    path,
    method: 'get'
  })),
  post: jest.fn(path => request({
    path,
    method: 'post'
  })),
  put: jest.fn(path => request({
    path,
    method: 'put'
  }))
};
exports.default = _default;