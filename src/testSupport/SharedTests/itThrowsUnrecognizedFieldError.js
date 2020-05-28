const expectation = (options) => {
  it(`throws an UnrecognizedFieldError${options.field ? ' with correct message' : null}`, async (done) => {
    expect.assertions(options.field ? 2 : 1)
    try {
      await options.trigger()
    } catch (err) {
      expect(err.name).toEqual('UnrecognizedFieldError')
      if (options.field) {
        expect(err.message).toEqual(`'${options.field}' is an unrecognized field for this operation`)
      }
    }
    done()
  })
}

export default expectation
