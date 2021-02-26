describe('sails.helpers.listTransactions()', () => {
  it('Successfully list transactions', async () => {
    await global.sails.helpers.paystack.listTransactions()
  })
})
