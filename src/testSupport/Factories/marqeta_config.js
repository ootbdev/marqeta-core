import faker from 'faker'

const build = (opts = {}) => {
  return {
    appToken: opts.appToken || faker.random.alphaNumeric(32),
    masterAccessToken: opts.masterAccessToken || faker.random.alphaNumeric(32),
    baseURL: opts.baseURL || (require('../../constants').BASE_URL)
  }
}

const create = async (opts = {}) => {
  console.warn('MarqetaConfig factory does not create, only builds. Next time, use build() to avoid this warning.')
  return build(opts)
}

export default {
  build,
  create
}
