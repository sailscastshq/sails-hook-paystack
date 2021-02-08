/**
 * Common input definitions (i.e. parameter definitions) that are shared by multiple files.
 *
 * @type {Dictionary}
 * @constant
 */
module.exports = {
  PAYSTACK_SECRET: {
    type: 'string',
    friendlyName: 'Secret',
    description: 'A valid Paystack "Secret key" (aka "secret API key", or "API secret").',
    extendedDescription: 'Like any other input, this can be set globally using .configure().',
    example: 'sk_test_f01df68ffa23d136959f2c532c583f7be2763932',
    protect: true,
    whereToGet: {
      url: 'https://dashboard.paystack.com/#/settings/developer',
      description: 'Copy a "Secret key" from your Paystack dashboard.',
      extendedDescription: 'Make sure you are logged in to your Paystack account, or create an account if you have not already done so.'
    }
  },
  PAYSTACK_AMOUNT: {
    type: 'number',
    isInteger: true,
    min: 100,
    description: 'Amount should be in kobo if currency is NGN and cents for USD',
    required: true
  },
  PAYSTACK_CURRENCY: {
    type: 'string',
    description: 'Currency in which amount is set',
    isIn: ['NGN', 'USD', 'GHS'],
    defaultsTo: 'NGN'
  },
  PAYSTACK_INVOICE_LIMIT: {
    type: 'number',
    isInteger: true,
    min: 1,
    description: 'Number of invoices to raise during subscription to this plan. Can be overridden by specifying an invoice_limit while subscribing.'
  }
}
