import { ArgumentError } from '../../utils/CustomErrors'
const expectation = (options) => {
  it('throws an ArgumentError', async () => {
    expect(() => options.trigger()).toThrow(ArgumentError)
  })
}

export default expectation
