class UnrecognizedFieldError extends Error {
  constructor (field) {
    super(`'${field}' is an unrecognized field for this operation`)
    this.name = this.constructor.name
  }
}

export default UnrecognizedFieldError
