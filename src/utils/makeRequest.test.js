import makeRequest from './makeRequest'
import faker from 'faker'

const url = faker.internet.url()
const object = {
  key1: faker.lorem.word(),
  key2: faker.lorem.sentence()
}

describe('makeRequest', () => {
  describe('when url not given', () => {
    SharedTests.itThrowsArgumentError({
      trigger: async () => { await makeRequest() },
      message: 'makeRequest requires a url'
    })
  })
  describe('when method not given', () => {
    const trigger = async () => { await makeRequest({ url }) }
    SharedTests.itCallsAxios({
      trigger,
      args: {
        url,
        method: 'get'
      }
    })
  })
  describe('auth credentials', () => {
    const appToken = faker.random.alphaNumeric(16)
    const accessToken = faker.random.alphaNumeric(16)
    const argumentErrorMessage = 'makeRequest with auth requires both appToken and accessToken'
    describe('when both appToken and accessToken given', () => {
      const trigger = async () => { await makeRequest({ url, appToken, accessToken }) }
      SharedTests.itCallsAxios({
        trigger,
        args: {
          url,
          method: 'get',
          appToken,
          accessToken
        }
      })
    })
    describe('when only appToken given', () => {
      const trigger = async () => { await makeRequest({ url, appToken }) }
      SharedTests.itDoesNotCallAxios({ trigger })
      SharedTests.itThrowsArgumentError({ trigger, message: argumentErrorMessage })
    })
    describe('when only accessToken given', () => {
      const trigger = async () => { await makeRequest({ url, accessToken }) }
      SharedTests.itDoesNotCallAxios({ trigger })
      SharedTests.itThrowsArgumentError({ trigger, message: argumentErrorMessage })
    })
  })
  describe('when method is get', () => {
    const options = { url, method: 'get' }
    describe('when params given', () => {
      const trigger = async () => { await makeRequest({ ...options, params: object }) }
      SharedTests.itCallsAxios({
        trigger,
        args: {
          url,
          method: 'get',
          params: object
        }
      })
    })
    describe('when params not given', () => {
      const trigger = async () => { await makeRequest(options) }
      SharedTests.itCallsAxios({
        trigger,
        args: {
          url,
          method: 'get'
        }
      })
    })
    describe('when data given', () => {
      const trigger = async () => { await makeRequest({ ...options, data: object }) }
      SharedTests.itCallsAxios({
        trigger,
        args: {
          url,
          method: 'get'
        }
      })
    })
  })
  describe('when method is post', () => {
    const options = { url, method: 'post' }
    describe('when data given', () => {
      const trigger = async () => { await makeRequest({ ...options, data: object }) }
      SharedTests.itCallsAxios({
        trigger,
        args: {
          url,
          method: 'post',
          data: object
        }
      })
    })
    describe('when data not given', () => {
      const trigger = async () => { await makeRequest(options) }
      SharedTests.itCallsAxios({
        trigger,
        args: {
          url,
          method: 'post'
        }
      })
    })
    describe('when params given', () => {
      const trigger = async () => { await makeRequest({ ...options, params: object }) }
      SharedTests.itCallsAxios({
        trigger,
        args: {
          url,
          method: 'post'
        }
      })
    })
  })
})
