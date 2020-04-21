import { makeRequest } from '../utils'

export default async ({ baseURL }) => {
  return makeRequest({
    url: `${baseURL}/ping`,
    method: 'GET'
  })
}
