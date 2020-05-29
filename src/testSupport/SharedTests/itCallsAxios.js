import axios from 'axios'

const expectation = ({ trigger, args: expectedArgs }) => {
  it(`calls Axios with the correct method (${expectedArgs.method})`, async (done) => {
    await trigger()
    const actualArgs = axios.mock.calls[0][0]
    expect(actualArgs.method).toEqual(expectedArgs.method)
    done()
  })
  it('calls Axios with the correct url', async (done) => {
    await trigger()
    const actualArgs = axios.mock.calls[0][0]
    expect(actualArgs.url).toEqual(expectedArgs.url)
    done()
  })
  const { params, data, appToken, accessToken } = expectedArgs
  if (params) {
    it('calls Axios with params', async (done) => {
      await trigger()
      const actualArgs = axios.mock.calls[0][0]
      expect(actualArgs.params).toEqual(params)
      done()
    })
  }
  if (data) {
    it('calls Axios with data', async (done) => {
      await trigger()
      const actualArgs = axios.mock.calls[0][0]
      expect(actualArgs.data).toEqual(data)
      done()
    })
  }
  if (appToken && accessToken) {
    it('calls Axios with auth credentials', async (done) => {
      await trigger()
      const actualArgs = axios.mock.calls[0][0]
      expect(actualArgs.auth).toEqual({ username: appToken, password: accessToken })
      done()
    })
  }
}

export default expectation
