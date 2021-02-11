module.exports = {
  friendlyName: 'Create Plan',
  description: 'Create a plan on your integration',

  inputs: {
    secret: require('../PARAMETERS').PAYSTACK_SECRET,
    name: {
      type: 'string',
      description: 'The name of plan',
      required: true
    },
    amount: require('../PARAMETERS').PAYSTACK_AMOUNT,
    interval: {
      type: 'string',
      description: 'Interval in words. Valid intervals are hourly, daily, weekly, monthly,biannually, annually.',
      isIn: ['hourly', 'daily', 'weekly', 'monthly', 'biannually', 'annually'],
      required: true
    },
    description: {
      type: 'string',
      description: 'A description for this plan'
    },
    send_invoices: {
      type: 'boolean',
      description: 'Set to false if you don\'t want invoices to be sent to your customers',
      defaultsTo: true
    },
    send_sms: {
      type: 'boolean',
      description: 'Set to false if you don\'t want text messages to be sent to your customers',
      defaultsTo: true
    },
    currency: require('../PARAMETERS').PAYSTACK_CURRENCY,
    invoice_limit: require('../PARAMETERS').PAYSTACK_INVOICE_LIMIT
  },
  exits: {
    success: {
      description: 'Plan created successfully',
      outputFriendlyName: 'Created Paystack Plan',
      outputType: 'ref'
    }
  },

  fn: function ({ secret, ...bodyParams }, exits) {
    const { createPlan } = require('machinepack-paystack')
    createPlan({
      apiKey: secret || sails.config.paystackSecret || sails.config.custom.paystackSecret || process.env.PAYSTACK_SECRET,
      ...bodyParams
    }).exec(function (error, createdPlan) {
      if (error) return exits.error(error)
      return exits.success(createdPlan)
    })
  }
}
