describe('sails.helpers.listPlans()', () => {
  it('Successfully list plans', async () => {
    await global.sails.helpers.paystack.listPlans()
  })
})
