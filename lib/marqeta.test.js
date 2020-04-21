"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _marqeta = _interopRequireDefault(require("./marqeta"));

var _CustomErrors = require("./utils/CustomErrors");

var _faker = _interopRequireDefault(require("faker"));

const token = _faker.default.random.alphaNumeric(8);

const CONFIG_KEYS = ['masterAccessToken'];
describe('Marqeta Client', () => {
  describe('initialization', () => {
    SharedTests.itThrowsArgumentError({
      trigger: () => (0, _marqeta.default)(),
      message: 'client initialization requires appToken as first argument'
    });
    describe('config', () => {
      describe('when not provided as second argument', () => {
        SharedTests.itDoesNotThrowArgumentError({
          trigger: () => (0, _marqeta.default)(token)
        });
      });
      describe('when provided as second argument', () => {
        it('only allows valid config keys', () => {
          for (const key of CONFIG_KEYS) {
            const config = {};
            config[key] = _faker.default.random.alphaNumeric(8);
            expect(() => (0, _marqeta.default)(token, config)).not.toThrow(_CustomErrors.ArgumentError);
          }

          expect(() => (0, _marqeta.default)(token, {
            invalidKey: _faker.default.random.alphaNumeric(8)
          })).toThrow(_CustomErrors.ArgumentError);
        });
      });
    });
  });
  describe('getConfig()', () => {
    describe('arguments', () => {
      const marqeta = (0, _marqeta.default)(token);
      SharedTests.itRestrictsValidArgumentValues({
        method: marqeta.getConfig,
        validValues: CONFIG_KEYS
      });
      SharedTests.itDoesNotThrowArgumentError({
        trigger: () => marqeta.getConfig('appToken')
      });
    });
    describe('when given "appToken"', () => {
      const key = 'appToken';
      it('returns token value', () => {
        const marqeta = (0, _marqeta.default)(token);
        expect(marqeta.getConfig(key)).toEqual(token);
      });
    });
    describe('when given a valid key', () => {
      const key = CONFIG_KEYS[0];
      describe('when key/value not provided in initial config', () => {
        it('returns undefined', () => {
          const marqeta = (0, _marqeta.default)(_faker.default.random.alphaNumeric(8));
          expect(marqeta.getConfig(key)).toBeUndefined();
        });
      });
      describe('when key/value provided in initial config', () => {
        it('returns initial value', () => {
          const config = {};
          config[key] = token;
          const marqeta = (0, _marqeta.default)(_faker.default.random.alphaNumeric(8), config);
          expect(marqeta.getConfig(key)).toEqual(token);
        });
      });
      describe('when key/value set by setConfig', () => {
        it('returns new value', () => {
          const marqeta = (0, _marqeta.default)(_faker.default.random.alphaNumeric(8));
          expect(marqeta.getConfig(key)).not.toEqual(token);
          marqeta.setConfig(key, token);
          expect(marqeta.getConfig(key)).toEqual(token);
        });
      });
    });
  });
  describe('setConfig()', () => {
    const marqeta = (0, _marqeta.default)(_faker.default.random.alphaNumeric(8));
    SharedTests.itRestrictsValidArgumentValues({
      method: marqeta.setConfig,
      validValues: CONFIG_KEYS
    });
    describe('when given appToken', () => {
      SharedTests.itThrowsArgumentError({
        trigger: () => marqeta.setConfig('appToken', token),
        message: 'appToken can only be set at client initialization'
      });
    });
    describe('when given a valid key', () => {
      const key = CONFIG_KEYS[0];
      it('sets the key/value of the config', () => {
        expect(marqeta.getConfig(key)).not.toEqual(token);
        marqeta.setConfig(key, token);
        expect(marqeta.getConfig(key)).toEqual(token);
      });
    });
  });
});