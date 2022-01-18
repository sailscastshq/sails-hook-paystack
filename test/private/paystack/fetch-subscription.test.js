describe('sails.helpers.fetchSubscription()', () => {
  it('Successfully fetch a subscription', async () => {
    await global.sails.helpers.paystack.fetchSubscription.with({
      idOrCode: 'SUB_kedt1ji8487vdqg'
    })
  })
})
