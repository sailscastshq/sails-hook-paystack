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
  }
}
