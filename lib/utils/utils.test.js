"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ = require("./");

var _constants = require("../constants");

var _faker = _interopRequireDefault(require("faker"));

const ArgumentError = _.CustomErrors.ArgumentError;
const validConfig = {
  appToken: _faker.default.random.alphaNumeric(8),
  masterAccessToken: _faker.default.random.alphaNumeric(8),
  baseURL: _faker.default.internet.url()
};
describe('assertValidConfigKey', () => {});
describe('getConfig()', () => {
  describe('arguments', () => {
    it('only allows valid config keys as second argument', () => {
      for (const key of _constants.CONFIG_KEYS) {
        expect(() => (0, _.getConfig)(validConfig, key)).not.toThrow(ArgumentError);
      }

      expect(() => (0, _.getConfig)(validConfig, 'invalid-key')).toThrow(ArgumentError);
    });
    it('also allows "appToken" key as second argument', () => {
      expect(() => (0, _.getConfig)(validConfig, 'appToken')).not.toThrow(ArgumentError);
    });
  });
  describe('when given "appToken"', () => {
    it('returns token value', () => {
      expect((0, _.getConfig)(validConfig, 'appToken')).toEqual(validConfig.appToken);
    });
  });
  describe('when given a valid key', () => {
    const key = _constants.CONFIG_KEYS[0];
    describe('when key/value not provided in initial config', () => {
      const bareConfig = {
        appToken: _faker.default.random.alphaNumeric(8)
      };
      it('returns undefined', () => {
        expect((0, _.getConfig)(bareConfig, key)).toBeUndefined();
      });
    });
    describe('when key/value provided in config', () => {
      it('returns value', () => {
        expect((0, _.getConfig)(validConfig, key)).toEqual(validConfig[key]);
      });
    });
  });
});
describe('setConfig()', () => {
  it('only allows valid config keys as second argument', () => {
    for (const key of _constants.CONFIG_KEYS) {
      expect(() => (0, _.setConfig)(validConfig, key, _faker.default.random.alphaNumeric(8))).not.toThrow(ArgumentError);
    }

    expect(() => (0, _.setConfig)(validConfig, 'invalid-key', _faker.default.random.alphaNumeric(8))).toThrow(ArgumentError);
  });
  it('disallows "appToken" key as second argument', () => {
    expect(() => (0, _.setConfig)(validConfig, 'appToken', _faker.default.random.alphaNumeric(8))).toThrow(ArgumentError);
  });
  describe('when given a valid key', () => {
    const key = _constants.CONFIG_KEYS[0];
    it('sets the key/value of the config', () => {
      expect((0, _.getConfig)(validConfig, key)).toEqual(validConfig[key]);

      const newValue = _faker.default.random.alphaNumeric(8);

      (0, _.setConfig)(validConfig, key, newValue);
      expect((0, _.getConfig)(validConfig, key)).toEqual(newValue);
    });
  });
});