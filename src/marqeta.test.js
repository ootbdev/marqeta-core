import Marqeta from './marqeta'

describe('Marqeta Client', () => {
  describe('initialization', () => {
    describe('without appToken as first argument', () => {
      SharedTests.itThrowsArgumentError({
        trigger: () => new Marqeta(),
        message: 'client initialization requires appToken as first argument'
      })
    })
  })
})
