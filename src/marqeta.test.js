import Marqeta from './marqeta'

describe('Marqeta Client', () => {
  describe('getAppToken()', () => {
    it('returns app token', () => {
      const token = 'abcde'
      const marqeta = Marqeta(token)
      expect(marqeta.getAppToken()).toEqual(token)
    })
  })
})
