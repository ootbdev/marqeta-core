import Marqeta from './marqeta'
import { ArgumentError } from './utils/CustomErrors'
import faker from 'faker'

const token = faker.random.alphaNumeric(8)

const CONFIG_KEYS = ['masterAccessToken']

describe('Marqeta Client', () => {
  describe('initialization', () => {
    SharedTests.itThrowsArgumentError({
      trigger: () => Marqeta(),
      message: 'client initialization requires appToken as first argument'
    })
    describe('config', () => {
      describe('when not provided as second argument', () => {
        SharedTests.itDoesNotThrowArgumentError({
          trigger: () => Marqeta(token)
        })
      })
      describe('when provided as second argument', () => {
        it('only allows valid config keys', () => {
          for (const key of CONFIG_KEYS) {
            const config = {}
            config[key] = faker.random.alphaNumeric(8)
            expect(() => Marqeta(token, config)).not.toThrow(ArgumentError)
          }
          expect(() => Marqeta(token, { invalidKey: faker.random.alphaNumeric(8) })).toThrow(ArgumentError)
        })
      })
    })
  })
  describe('getConfig()', () => {
    describe('arguments', () => {
      const marqeta = Marqeta(token)
      SharedTests.itRestrictsValidArgumentValues({
        method: marqeta.getConfig,
        validValues: CONFIG_KEYS
      })
      SharedTests.itDoesNotThrowArgumentError({
        trigger: () => marqeta.getConfig('appToken')
      })
    })
    describe('when given "appToken"', () => {
      const key = 'appToken'
      it('returns token value', () => {
        const marqeta = Marqeta(token)
        expect(marqeta.getConfig(key)).toEqual(token)
      })
    })
    describe('when given a valid key', () => {
      const key = CONFIG_KEYS[0]
      describe('when key/value not provided in initial config', () => {
        it('returns undefined', () => {
          const marqeta = Marqeta(faker.random.alphaNumeric(8))
          expect(marqeta.getConfig(key)).toBeUndefined()
        })
      })
      describe('when key/value provided in initial config', () => {
        it('returns initial value', () => {
          const config = {}
          config[key] = token
          const marqeta = Marqeta(faker.random.alphaNumeric(8), config)
          expect(marqeta.getConfig(key)).toEqual(token)
        })
      })
      describe('when key/value set by setConfig', () => {
        it('returns new value', () => {
          const marqeta = Marqeta(faker.random.alphaNumeric(8))
          expect(marqeta.getConfig(key)).not.toEqual(token)
          marqeta.setConfig(key, token)
          expect(marqeta.getConfig(key)).toEqual(token)
        })
      })
    })
  })
  describe('setConfig()', () => {
    const marqeta = Marqeta(faker.random.alphaNumeric(8))
    SharedTests.itRestrictsValidArgumentValues({
      method: marqeta.setConfig,
      validValues: CONFIG_KEYS
    })
    describe('when given appToken', () => {
      SharedTests.itThrowsArgumentError({
        trigger: () => marqeta.setConfig('appToken', token),
        message: 'appToken can only be set at client initialization'
      })
    })
    describe('when given a valid key', () => {
      const key = CONFIG_KEYS[0]
      it('sets the key/value of the config', () => {
        expect(marqeta.getConfig(key)).not.toEqual(token)
        marqeta.setConfig(key, token)
        expect(marqeta.getConfig(key)).toEqual(token)
      })
    })
  })
})
