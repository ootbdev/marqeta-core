import Resource from './index'
import faker from 'faker'
import { BASE_URL } from '../../constants'
const Ping = new Resource({ config: Factories.MarqetaConfig.build() })

const token = faker.random.alphaNumeric(16)
const payload = faker.random.alphaNumeric(16)

describe('Ping', () => {
  const url = `${BASE_URL}/ping`
  describe('without data', () => {
    SharedTests.itCallsAxios({
      trigger: async () => { await Ping.ping() },
      args: {
        method: 'get',
        url
      }
    })
  })
  describe('with data', () => {
    const itPostsWithData = (data) => {
      SharedTests.itCallsAxios({
        trigger: async () => { await Ping.ping(data) },
        args: {
          method: 'post',
          url,
          data
        }
      })
    }
    describe('when data empty', () => {
      const data = {}
      itPostsWithData(data)
      test.todo('it returns success')
    })
    describe('when data includes \'token\'', () => {
      const data = { token }
      itPostsWithData(data)
      test.todo('it returns success')
      test.todo('it returns data with id as value of token')
    })
    describe('when data includes \'payload\'', () => {
      const data = { payload }
      itPostsWithData(data)
      test.todo('it returns success')
      test.todo('it returns data with payload value echoed back')
    })
    describe('when data includes \'token\' and \'payload\'', () => {
      const data = { token, payload }
      itPostsWithData(data)
      test.todo('it returns success')
      test.todo('it returns data with id as value of token')
      test.todo('it returns data with payload value echoed back')
    })
    describe('when data includes another key/value pair', () => {
      const data = { other: 'not a valid field' }
      const trigger = async () => { await Ping.ping(data) }
      SharedTests.itDoesNotCallAxios({ trigger })
      SharedTests.itThrowsUnrecognizedFieldError({ trigger, field: 'other' })
    })
  })
})
