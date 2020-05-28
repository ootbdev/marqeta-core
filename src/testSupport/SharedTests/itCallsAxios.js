import axios from 'axios'

const expectation = ({ trigger, args: expectedArgs }) => {
  it(`calls Axios with method ${expectedArgs.method} and url ${expectedArgs.url}`, async (done) => {
    await trigger()
    const actualArgs = axios.mock.calls[0][0]
    expect(actualArgs.method).toEqual(expectedArgs.method)
    expect(actualArgs.url).toEqual(expectedArgs.url)
    done()
  })
  if (expectedArgs.data) {
    it('calls Axios with data', async (done) => {
      await trigger()
      const actualArgs = axios.mock.calls[0][0]
      expect(actualArgs.data).toEqual(expectedArgs.data)
      done()
    })
  }
}

export default expectation
