describe('sails.helpers.fetchSubscription()', () => {
  it.only('Successfully create a plan', async () => {
    await global.sails.helpers.paystack.fetchSubscription.with({
      idOrCode: 'SUB_6j05mg4rtud2f56'
    })
  })
})
