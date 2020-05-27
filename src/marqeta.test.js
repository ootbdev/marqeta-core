import Marqeta from './marqeta'
import faker from 'faker'

const baseURL = faker.internet.url()
const marqeta = new Marqeta(faker.random.alphaNumeric(32), { baseURL })

describe('Marqeta Client', () => {
  describe('initialization', () => {
    describe('without appToken as first argument', () => {
      SharedTests.itThrowsArgumentError({
        trigger: () => new Marqeta(),
        message: 'client initialization requires appToken as first argument'
      })
    })
    describe('with baseURL in the config', () => {
      it('sets the baseURL accordingly', () => {
        expect(marqeta.getConfig('baseURL')).toEqual(baseURL)
      })
    })
  })
  describe('resources', () => {
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Cards' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Users' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'RealTimeFeeGroups' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Pins' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'BusinessTransitions' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'FundingSources' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Ping' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'PeerTransfers' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Balances' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'DepositAccounts' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'UserTransitions' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'DigitalWalletTokenTransitions' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'GPAOrders' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'MCCGroups' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'AcceptedCountries' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'VelocityControls' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Campaigns' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'ProgramReserve' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Stores' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'ProgramTransfers' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Offers' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'CardProducts' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'AccountHolderGroups' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'OfferOrders' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'AuthControls' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'DigitalWalletTokens' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'FeeTransfers' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Transactions' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'KYC' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Chargebacks' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Fees' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'MSAOrders' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'BulkIssuances' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'DigitalWalletProvisionRequests' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'DirectDeposits' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Merchants' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'AutoReloads' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Simulate' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'Webhooks' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'PushToCards' })
    SharedTests.itHasKeyDefined({ object: marqeta, key: 'CommandoModes' })
  })
})
