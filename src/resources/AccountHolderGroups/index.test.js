/* eslint-disable */
import AccountHolderGroupsResource from './index'
import faker from 'faker'
import { BASE_URL } from '../../constants'
const AccountHolderGroups = new AccountHolderGroupsResource({ config: Factories.MarqetaConfig.build() })

const token = faker.random.alphaNumeric(16)

describe('AccountholderGroups Resource', () => {
  describe('create', () => {
    const url = `${BASE_URL}/accountholdergroups`
  })
  describe('retrieve', () => {
    const url = `${BASE_URL}/accountholdergroups/${token}`
  })
  describe('update', () => {
    const url = `${BASE_URL}/accountholdergroups/${token}`
  })
  describe('list', () => {
    const url = `${BASE_URL}/accountholdergroups`
  })
})