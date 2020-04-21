"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }

}

var _default = ArgumentError;
exports.default = _default;