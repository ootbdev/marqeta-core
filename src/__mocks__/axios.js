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

const request = ({ path, method }) => {
  const spec = getSpec({ path: stripPath(path), method })
  if (spec) {
    return response({ status: 200, body: { success: true } })
  }
  return response({ status: 404 })
}

export default {
  get: jest.fn(path => request({ path, method: 'get' })),
  post: jest.fn(path => request({ path, method: 'post' })),
  put: jest.fn(path => request({ path, method: 'put' }))
}
