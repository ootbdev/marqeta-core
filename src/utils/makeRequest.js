import axios from 'axios'
const VALID_METHODS = ['get', 'post', 'put', 'delete']

const makeRequest = async ({ url, method, params = {}, data, appToken, accessToken }) => {
  try {
    method = String(method).toLowerCase()
    if (VALID_METHODS.indexOf(method) === -1) {
      method = 'get'
    }
    const config = {
      url,
      method
    }
    if (typeof appToken !== 'undefined' && appToken.length &&
        typeof accessToken !== 'undefined' && accessToken.length) {
      config.auth = {
        username: appToken,
        password: accessToken
      }
    }
    if (method === 'get' && Object.keys(params).length) {
      config.params = params
    } else if (typeof data === 'object') {
      config.data = data
    }
    return axios(config)
  } catch (err) {
    console.log(err)
  }
}

export default makeRequest
