import { ArgumentError } from '../../utils/CustomErrors'
const expectation = (options) => {
  it('does not throw an ArgumentError', async () => {
    expect(() => options.trigger()).not.toThrow(ArgumentError)
  })
}

export default expectation
