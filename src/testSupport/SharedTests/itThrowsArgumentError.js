const expectation = (options) => {
  it(`throws an ArgumentError${options.message ? ' with correct message' : null}`, async (done) => {
    expect.assertions(options.message ? 2 : 1)
    try {
      await options.trigger()
    } catch (err) {
      expect(err.name).toEqual('ArgumentError')
      if (options.message) {
        expect(err.message).toEqual(options.message)
      }
    }
    done()
  })
}

export default expectation
