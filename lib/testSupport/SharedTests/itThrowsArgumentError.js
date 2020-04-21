"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CustomErrors = require("../../utils/CustomErrors");

const expectation = options => {
  it('throws an ArgumentError', async () => {
    expect(() => options.trigger()).toThrow(_CustomErrors.ArgumentError);
  });
};

var _default = expectation;
exports.default = _default;