const sails = require('sails')
require('dotenv').config()
exports.mochaHooks = {
  beforeAll (done) {
    if (!process.env.PAYSTACK_API_KEY_FOR_TESTS) {
      throw new Error('In order to run tests, the `PAYSTACK_API_KEY_FOR_TESTS` environment variable must be set!')
    }
    sails.lift({
      log: {
        level: 'warn'
      },
      hooks: {
        paystack: require('../lib/sails-hook-paystack'),
        grunt: false
      }
    }, (error, sails) => {
      if (error) return done(error)
      sails.config.paystackSecret = process.env.PAYSTACK_API_KEY_FOR_TESTS
      global.sails = sails
      return done()
    })
  },
  afterAll (done) {
    try {
      sails.lower(done)
    } catch (error) {
      return done(error)
    }
  }
}
