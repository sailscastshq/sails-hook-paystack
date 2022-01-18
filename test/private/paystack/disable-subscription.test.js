describe('sails.helpers.disableSubscription()', () => {
  it('Successfully disabled a subscription', async () => {
    await global.sails.helpers.paystack.disableSubscription.with({
      code: 'SUB_kedt1ji8487vdqg',
      token: 'x77l0lmgk1t8b9g'
    })
  })
})
