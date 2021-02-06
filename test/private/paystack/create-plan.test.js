describe('sails.helpers.createPlan()', () => {
  it('Successfully create a plan', async () => {
    await global.sails.helpers.paystack.createPlan.with({
      name: 'Plan from Sails Hook',
      amount: 10000,
      interval: 'monthly'
    })
  })
})
