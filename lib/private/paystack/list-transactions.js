
module.exports = {
  friendlyName: 'List Transactions',
  description: 'List transactions carried out on your integration.',

  inputs: {
    secret: require('../PARAMETERS').PAYSTACK_SECRET,
    perPage: require('../PARAMETERS').PAYSTACK_PER_PAGE,
    page: require('../PARAMETERS').PAYSTACK_PAGE,
    customer: {
      type: 'string',
      example: 'CUS_1uld4hluw0g2gn0',
      description: 'Specify an ID for the customer whose transactions you want to retrieve'
    },
    status: {
      type: 'string',
      description: "Filter transactions by status ('failed', 'success', 'abandoned')"
    },
    from: {
      example: '2016-09-24T00:00:05.000Z',
      description: 'A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21'
    },
    to: {
      example: '2016-09-24T00:00:05.000Z',
      description: 'A timestamp from which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21'
    },
    amount: {
      type: 'number',
      isInteger: true,
      example: 100,
      description: 'Filter transactions by amount. Specify the amount, in kobo if currency is NGN and pesewas if currency is GHS'
    }
  },

  exits: {
    success: {
      description: 'Transactions retrieved successfully'
    }
  },

  fn: function ({ secret, ...params }, exits) {
    const { listTransactions } = require('machinepack-paystack')
    listTransactions({
      apiKey: secret || sails.config.paystackSecret || sails.config.custom.paystackSecret || process.env.PAYSTACK_SECRET,
      ...params
    }).exec(function (error, transactions) {
      if (error) return exits.error(error)
      return exits.success(transactions)
    })
  }
}
