"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CustomErrors = require("../../utils/CustomErrors");

const expectation = options => {
  it('restricts argument values to set of valid values', () => {
    for (const value of options.validValues) {
      expect(() => options.method(value)).not.toThrow(_CustomErrors.ArgumentError);
    }

    expect(() => options.method('not-a-valid-value')).toThrow(_CustomErrors.ArgumentError);
  });
};

var _default = expectation;
exports.default = _default;