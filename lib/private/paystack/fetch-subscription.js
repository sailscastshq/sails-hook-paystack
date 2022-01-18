module.exports = {
  friendlyName: 'Fetch Subscription',
  description: 'Get details of a subscription on your integration',

  inputs: {
    secret: require('../PARAMETERS').PAYSTACK_SECRET,
    idOrCode: {
      description: 'The subscription ID or code you want to fetch',
      type: 'ref',
      required: true
    }
  },
  exits: {
    success: {
      description: 'Subscription retrieved'
    }
  },

  fn: async function ({ secret, idOrCode }, exits) {
    const { fetchSubscription } = require('machinepack-paystack')
    fetchSubscription({
      apiKey: secret || sails.config.paystackSecret || sails.config.custom.paystackSecret || process.env.PAYSTACK_SECRET,
      id_or_code: idOrCode
    }).exec(function (error, fetchedSubscription) {
      if (error) return exits.error(error)
      return exits.success(fetchedSubscription)
    })
  }
}
