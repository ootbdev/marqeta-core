import Marqeta from './marqeta'
import faker from 'faker'

const token = faker.random.alphaNumeric(32)

describe('Marqeta Client', () => {
  describe('getConfig()', () => {
    describe('when given "appToken"', () => {
      const key = 'appToken'
      it('returns token value', () => {
        const marqeta = Marqeta(token)
        expect(marqeta.getConfig(key)).toEqual(token)
      })
    })
    describe('when given "masterAccessToken"', () => {
      const key = 'masterAccessToken'
      describe('when "masterAccessToken" not provided in initial config', () => {
        it('returns undefined', () => {
          const marqeta = Marqeta('some app token value', {})
          expect(marqeta.getConfig(key)).toBeUndefined()
        })
      })
      describe('when "masterAccessToken" provided in initial config', () => {
        it('returns token value', () => {
          const config = {}
          config[key] = token
          const marqeta = Marqeta('some app token value', config)
          expect(marqeta.getConfig(key)).toEqual(token)
        })
      })
      describe('when "masterAccessToken" set by setConfig', () => {
        it('returns token value', () => {
          const marqeta = Marqeta('some app token value')
          expect(marqeta.getConfig(key)).not.toEqual(token)
          marqeta.setConfig(key, token)
          expect(marqeta.getConfig(key)).toEqual(token)
        })
      })
    })
  })
})
