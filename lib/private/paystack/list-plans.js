module.exports = {
  friendlyName: 'List Subscriptions',
  description: 'List subscriptions available on your integration.',

  inputs: {
    secret: require('../PARAMETERS').PAYSTACK_SECRET,
    perPage: require('../PARAMETERS').PAYSTACK_PER_PAGE,
    page: require('../PARAMETERS').PAYSTACK_PAGE,
    interval: {
      type: 'string',
      isIn: ['hourly', 'daily', 'weekly', 'monthly', 'biannually', 'annually'],
      description: 'Filter list by plans with specified interval.'
    },
    amount: {
      type: 'number',
      isInteger: true,
      min: 100,
      description: 'Filter list by plans with specified amount ( kobo if currency is NGN, cents for USD and pesewas for GHS)'
    }
  },

  exits: {
    success: {
      description: 'Plans retrieved successfully'
    }
  },

  fn: function ({ secret, ...params }, exits) {
    const { listPlans } = require('machinepack-paystack')
    listPlans({
      apiKey: secret || sails.config.paystackSecret || sails.config.custom.paystackSecret || process.env.PAYSTACK_SECRET,
      ...params
    }).exec(function (error, plans) {
      if (error) return exits.error(error)
      return exits.success(plans)
    })
  }
}
