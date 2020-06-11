import PingResource from './index'
import faker from 'faker'
import { BASE_URL } from '../../constants'
const Ping = new PingResource({ config: Factories.MarqetaConfig.build() })

const url = `${BASE_URL}/ping`
const token = faker.random.alphaNumeric(16)
const payload = faker.random.alphaNumeric(16)

describe('Ping Resource', () => {
  describe('ping', () => {
    describe('without data', () => {
      SharedTests.itGets({ trigger: async () => Ping.ping(), url })
    })
    describe('with data', () => {
      describe('when data empty', () => {
        const data = {}
        SharedTests.itPostsWithData({ trigger: async () => Ping.ping(data), data, url })
      })
      describe('when data includes \'token\'', () => {
        const data = { token }
        SharedTests.itPostsWithData({ trigger: async () => Ping.ping(data), data, url })
      })
      describe('when data includes \'payload\'', () => {
        const data = { payload }
        SharedTests.itPostsWithData({ trigger: async () => Ping.ping(data), data, url })
      })
      describe('when data includes \'token\' and \'payload\'', () => {
        const data = { token, payload }
        SharedTests.itPostsWithData({ trigger: async () => Ping.ping(data), data, url })
      })
      describe('when data includes another key/value pair', () => {
        const data = { other: 'not a valid field' }
        const trigger = async () => { await Ping.ping(data) }
        SharedTests.itDoesNotCallAxios({ trigger })
        SharedTests.itThrowsUnrecognizedFieldError({ trigger, field: 'other' })
      })
    })
  })
})
