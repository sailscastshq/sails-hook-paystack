describe('sails.helpers.initializeTransaction()', () => {
  it('Successfully initialize Transaction', async () => {
    await global.sails.helpers.paystack.initializeTransaction.with({
      email: 'customer@email.com',
      amount: 100
      // plan: 'PLN_u0pyhde6eqtuedk'
    })
  })
})
