import axios from 'axios'

const expectation = ({ trigger }) => {
  it('does not call Axios', async (done) => {
    try {
      await trigger()
    } catch (_) {
    }
    expect(axios).toHaveBeenCalledTimes(0)
    done()
  })
}

export default expectation
