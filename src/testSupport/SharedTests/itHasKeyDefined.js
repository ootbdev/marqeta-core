const expectation = (options) => {
  it(`'${options.key}' is defined`, () => {
    expect(options.object[options.key]).toBeDefined()
  })
}

export default expectation
