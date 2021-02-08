describe('sails.helpers.initializeTransaction()', () => {
  it.only('Successfully initialize Transaction', async () => {
    await global.sails.helpers.paystack.initializeTransaction.with({
      email: 'customer2@email.com',
      amount: 100
    })
  })
})
