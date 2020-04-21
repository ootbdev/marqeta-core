import { makeRequest } from '../../utils'

export default async ({ baseURL, appToken, accessToken }) => {
  return makeRequest({
    url: `${baseURL}/users`,
    method: 'GET',
    appToken,
    accessToken
  })
}
