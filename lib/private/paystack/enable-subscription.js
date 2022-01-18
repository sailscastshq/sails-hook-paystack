module.exports = {
  friendlyName: 'Enable Subscription',
  description: 'Enable a subscription on your integration',

  inputs: {
    secret: require('../PARAMETERS').PAYSTACK_SECRET,
    code: {
      description: 'Subscription code',
      type: 'string',
      requred: true
    },
    token: {
      description: 'Email token',
      type: 'string',
      required: true
    }
  },

  exits: {
    success: {
      description: 'Subscription enabled successfully'
    }
  },

  fn: async function ({ secret, code, token }, exits) {
    const { enableSubscription } = require('machinepack-paystack')
    enableSubscription({
      apiKey: secret || sails.config.paystackSecret || sails.config.custom.paystackSecret || process.env.PAYSTACK_SECRET,
      code,
      token
    }).exec(function (error, response) {
      if (error) return exits.error(error)
      return exits.success(response)
    })
  }
}
