import { ArgumentError } from '../../utils/CustomErrors'
const expectation = (options) => {
  it('throws an ArgumentError', async () => {
    expect(() => options.trigger()).toThrow(ArgumentError)
  })
  if (options.message) {
    it('sets correct message for the ArgumentError', async () => {
      expect.assertions(1)
      try {
        options.trigger()
      } catch (err) {
        expect(err.message).toEqual(options.message)
      }
    })
  }
}

export default expectation
