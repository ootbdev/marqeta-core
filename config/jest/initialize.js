// Make the following oft-used modules accessible
global.SharedTests = require('../../src/testSupport/SharedTests').default
global.Factories = require('../../src/testSupport/Factories').default

beforeEach(jest.clearAllMocks)