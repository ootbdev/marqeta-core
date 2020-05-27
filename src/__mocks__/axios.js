import apiSpec from './marqeta-swagger.json'
const BASE_URL = `https://sandbox-api.marqeta.com${apiSpec.basePath}`
const paths = Object.keys(apiSpec.paths)

const stripPath = (path) => {
  return path.replace(BASE_URL, '')
}

const getSpec = ({ path, method }) => {
  if (apiSpec.paths[path] && apiSpec.paths[path][method]) {
    return apiSpec.paths[path]
  }
  const pathParts = path.split('/')
  const pathRegExp = new RegExp(`^/${pathParts[1]}`)
  const pathsWithMatchingHead = paths.filter((path) => path.match(pathRegExp))
  const possibleMatchingPaths = pathsWithMatchingHead.filter((path) => path.split('/').length === pathParts.length)
  for (const possibleMatchingPath of possibleMatchingPaths) {
    const parts = possibleMatchingPath.split('/')
    let match = true
    for (let i = 0; i < parts.length; i++) {
      if (pathParts[i] !== parts[i] && !parts[i].match(/\{/)) {
        match = false
      }
      if (match) {
        return apiSpec.paths[possibleMatchingPath]
      }
    }
  }
  return null
}

const response = ({ status, body = {} }) => {
  return {
    status,
    body
  }
}

const request = ({ url, method }) => {
  const spec = getSpec({ path: stripPath(url), method })
  if (spec) {
    return response({ status: 200, body: { success: true } })
  }
  return response({ status: 404 })
}

const sendDelete = jest.fn(url => request({ url, method: 'delete' }))
const sendGet = jest.fn(url => request({ url, method: 'get' }))
const sendPatch = jest.fn(url => request({ url, method: 'patch' }))
const sendPost = jest.fn(url => request({ url, method: 'post' }))
const sendPut = jest.fn(url => request({ url, method: 'put' }))

const axios = jest.fn(config => {
  switch ((config.method || 'get').toLowerCase()) {
    case 'post':
      return sendPost(config.url)
    case 'patch':
      return sendPatch(config.url)
    case 'put':
      return sendPut(config.url)
    case 'delete':
      return sendDelete(config.url)
    default:
      return sendGet(config.url)
  }
})

axios.get = sendGet
axios.post = sendPost
axios.patch = sendPatch
axios.put = sendPut
axios.delete = sendDelete

export default axios
