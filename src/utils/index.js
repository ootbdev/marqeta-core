import * as CustomErrors from './CustomErrors'
import { CONFIG_KEYS } from '../constants'

export { CustomErrors }
export { default as makeRequest } from './makeRequest'

export const assertValidConfigKey = (key) => {
  if (CONFIG_KEYS.indexOf(key) === -1) {
    throw new CustomErrors.ArgumentError(`'${key}' is not a valid config key`)
  }
}

export const getConfig = (config, key) => {
  if (key !== 'appToken') {
    assertValidConfigKey(key)
  }
  return config[key]
}

export const setConfig = (config, key, value) => {
  assertValidConfigKey(key)
  config[key] = value
  return config
}
