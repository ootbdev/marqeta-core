const expectation = ({ trigger, url }) => {
  SharedTests.itCallsAxios({
    trigger,
    args: {
      method: 'get',
      url
    }
  })
}

export default expectation
