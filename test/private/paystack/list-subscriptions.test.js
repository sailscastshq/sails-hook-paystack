describe('sails.helpers.listSubscriptions()', () => {
  it('Successfully list subscriptions', async () => {
    await global.sails.helpers.paystack.listSubscriptions()
  })
})
