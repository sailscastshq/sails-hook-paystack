describe('sails.helpers.enableSubscription()', () => {
  it('Successfully enabled a subscription', async () => {
    await global.sails.helpers.paystack.enableSubscription.with({
      code: 'SUB_kedt1ji8487vdqg',
      token: 'x77l0lmgk1t8b9g'
    })
  })
})
