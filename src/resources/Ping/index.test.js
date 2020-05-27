import Resource from './index'
import faker from 'faker'
const config = {
  appToken: faker.random.alphaNumeric(32),
  masterAccessToken: faker.random.alphaNumeric(32),
  baseURL: require('../../constants').BASE_URL
}
const Ping = new Resource({ config })

describe('Ping', () => {
  it('works', async (done) => {
    const response = await Ping.ping()
    expect(response.status).toEqual(200)
    done()
  })
})
