'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _marqeta = _interopRequireDefault(require('./marqeta'))

describe('Marqeta Client', () => {
  describe('getAppToken()', () => {
    it('returns app token', () => {
      const token = 'abcde'
      const marqeta = (0, _marqeta.default)(token)
      expect(marqeta.getAppToken()).toEqual(token)
    })
  })
})
