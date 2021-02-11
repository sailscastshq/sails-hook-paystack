module.exports = {
  friendlyName: 'Initialize Transaction',
  description: 'Initialize a transaction from your backend',

  inputs: {
    secret: require('../PARAMETERS').PAYSTACK_SECRET,
    amount: require('../PARAMETERS').PAYSTACK_AMOUNT,
    email: {
      type: 'string',
      description: 'Customer\'s email address',
      required: true
    },
    currency: require('../PARAMETERS').PAYSTACK_CURRENCY,
    reference: {
      type: 'string',
      description: 'Unique transaction reference. Only -, ., = and alphanumeric characters allowed'
    },
    callback_url: {
      type: 'string',
      description: 'Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction'
    },
    plan: {
      type: 'string',
      description: 'If transaction is to create a subscription to a predefined plan, provide plan code here. This would invalidate the value provided in amount'
    },
    invoice_limit: require('../PARAMETERS').PAYSTACK_INVOICE_LIMIT,
    metadata: {
      type: 'string',
      description: 'Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard.'
    },
    channels: {
      type: 'ref',
      description: "An array of payment channels to control what channels you want to make available to the user to make a payment with. Available channels include: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer']"
    },
    split_code: {
      type: 'string',
      description: 'The split code of the transaction split.'
    },
    subaccount: {
      type: 'string',
      description: 'The code for the subaccount that owns the payment.'
    },
    transaction_charge: {
      type: 'number',
      isInteger: true,
      description: 'A flat fee to charge the subaccount for this transaction, in kobo if currency is NGN and pesewas if currency is GHS. This overrides the split percentage set when the subaccount was created. Ideally, you will need to use this if you are splitting in flat rates'
    },
    bearer: {
      type: 'string',
      description: 'Who bears Paystack charges? account or subaccount (defaults to account).',
      isIn: ['account', 'subaccount']
    }
  },

  exits: {
    success: {
      description: 'Authorization URL created'
    }
  },

  fn: function ({ secret, ...bodyParams }, exits) {
    const { initializeTransaction } = require('machinepack-paystack')
    initializeTransaction({
      apiKey: secret || sails.config.paystackSecret || sails.config.custom.paystackSecret || process.env.PAYSTACK_SECRET,
      ...bodyParams
    }).exec(function (error, initializedTransaction) {
      if (error) return exits.error(error)
      return exits.success(initializedTransaction)
    })
  }
}
