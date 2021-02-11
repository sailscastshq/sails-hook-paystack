module.exports = {
  friendlyName: 'List Subscriptions',
  description: 'List subscriptions available on your integration.',

  inputs: {
    secret: require('../PARAMETERS').PAYSTACK_SECRET,
    perPage: require('../PARAMETERS').PAYSTACK_PER_PAGE,
    page: require('../PARAMETERS').PAYSTACK_PAGE,
    customer: {
      type: 'number',
      isInteger: true,
      description: 'Filter by Customer ID'
    },
    plan: {
      type: 'number',
      isInteger: true,
      description: 'Filter by Plan ID'
    }
  },

  exits: {
    success: {
      description: 'Subscriptions retrieved successfully'
    }
  },

  fn: function ({ secret, ...params }, exits) {
    const { listSubscriptions } = require('machinepack-paystack')
    listSubscriptions({
      apiKey: secret || sails.config.paystackSecret || sails.config.custom.paystackSecret || process.env.PAYSTACK_SECRET,
      ...params
    }).exec(function (error, subscriptions) {
      if (error) return exits.error(error)
      return exits.success(subscriptions)
    })
  }
}
