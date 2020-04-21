import { ArgumentError } from '../../utils/CustomErrors'
const expectation = (options) => {
  it('restricts argument values to set of valid values', () => {
    for (const value of options.validValues) {
      expect(() => options.method(value)).not.toThrow(ArgumentError)
    }
    expect(() => options.method('not-a-valid-value')).toThrow(ArgumentError)
  })
}

export default expectation
