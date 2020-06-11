const expectation = ({ trigger, url, data }) => {
  SharedTests.itCallsAxios({
    trigger,
    args: {
      method: 'post',
      url,
      data
    }
  })
}

export default expectation
