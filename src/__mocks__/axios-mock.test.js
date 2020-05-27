import axios from 'axios'
import faker from 'faker'
const BASE_URL = 'https://sandbox-api.marqeta.com/v3'

const sendRequest = async ({ method, path }) => {
  return axios[method.toLowerCase()](`${BASE_URL}${path}`)
}

const itRespondsWithStatus = ({ method, path, status }) => {
  it(`returns status code ${status}`, async (done) => {
    const response = await sendRequest({ method, path })
    expect(response.status).toEqual(status)
    done()
  })
}

describe('Axios mock', () => {
  describe('GET ping/', () => {
    const method = 'GET'
    const path = '/ping'
    itRespondsWithStatus({ method, path, status: 200 })
  })
  describe('GET acceptedcountries/', () => {
    const method = 'GET'
    const path = '/acceptedcountries'
    itRespondsWithStatus({ method, path, status: 200 })
  })
  describe('GET acceptedcountries/{token}', () => {
    const token = faker.random.alphaNumeric(64)
    const method = 'GET'
    const path = `/acceptedcountries/${token}`
    itRespondsWithStatus({ method, path, status: 200 })
  })
  describe('GET acceptedcountries/{token}/foobar (BAD ROUTE)', () => {
    const token = faker.random.alphaNumeric(64)
    const method = 'GET'
    const path = `/acceptedcountries/${token}/foobar`
    itRespondsWithStatus({ method, path, status: 404 })
  })
})
