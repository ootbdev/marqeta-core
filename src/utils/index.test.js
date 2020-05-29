import { assertValidConfigKey, getConfig, setConfig, CustomErrors } from './'
import { CONFIG_KEYS } from '../constants'
import faker from 'faker'

const ArgumentError = CustomErrors.ArgumentError
const validConfig = {
  appToken: faker.random.alphaNumeric(8),
  masterAccessToken: faker.random.alphaNumeric(8),
  baseURL: faker.internet.url()
}

describe('assertValidConfigKey', () => {
  describe('when given key is valid', () => {
    for (const value of CONFIG_KEYS) {
      SharedTests.itDoesNotThrowArgumentError({
        trigger: () => assertValidConfigKey(value)
      })
    }
  })
  describe('when given key is invalid', () => {
    const invalidKey = 'not-a-valid-key'
    SharedTests.itThrowsArgumentError({
      trigger: () => assertValidConfigKey(invalidKey),
      message: `'${invalidKey}' is not a valid config key`
    })
  })
})
describe('getConfig()', () => {
  describe('arguments', () => {
    it('only allows valid config keys as second argument', () => {
      for (const key of CONFIG_KEYS) {
        expect(() => getConfig(validConfig, key)).not.toThrow(ArgumentError)
      }
      expect(() => getConfig(validConfig, 'invalid-key')).toThrow(ArgumentError)
    })
    it('also allows "appToken" key as second argument', () => {
      expect(() => getConfig(validConfig, 'appToken')).not.toThrow(ArgumentError)
    })
  })
  describe('when given "appToken"', () => {
    it('returns token value', () => {
      expect(getConfig(validConfig, 'appToken')).toEqual(validConfig.appToken)
    })
  })
  describe('when given a valid key', () => {
    const key = CONFIG_KEYS[0]
    describe('when key/value not provided in initial config', () => {
      const bareConfig = { appToken: faker.random.alphaNumeric(8) }
      it('returns undefined', () => {
        expect(getConfig(bareConfig, key)).toBeUndefined()
      })
    })
    describe('when key/value provided in config', () => {
      it('returns value', () => {
        expect(getConfig(validConfig, key)).toEqual(validConfig[key])
      })
    })
  })
})
describe('setConfig()', () => {
  it('only allows valid config keys as second argument', () => {
    for (const key of CONFIG_KEYS) {
      expect(() => setConfig(validConfig, key, faker.random.alphaNumeric(8))).not.toThrow(ArgumentError)
    }
    expect(() => setConfig(validConfig, 'invalid-key', faker.random.alphaNumeric(8))).toThrow(ArgumentError)
  })
  it('disallows "appToken" key as second argument', () => {
    expect(() => setConfig(validConfig, 'appToken', faker.random.alphaNumeric(8))).toThrow(ArgumentError)
  })
  describe('when given a valid key', () => {
    const key = CONFIG_KEYS[0]
    it('sets the key/value of the config', () => {
      expect(getConfig(validConfig, key)).toEqual(validConfig[key])
      const newValue = faker.random.alphaNumeric(8)
      setConfig(validConfig, key, newValue)
      expect(getConfig(validConfig, key)).toEqual(newValue)
    })
  })
})
