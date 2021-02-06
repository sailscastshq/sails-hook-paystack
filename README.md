# sails-hook-paystack
This Sails hook exposes methods for interacting with the Paystack API.
Internally it uses the [machinepack-paystack](https://www.npmjs.com/package/machinepack-paystack) package

## Getting Started

```sh
npm i sails-hook-paystack --save
```

## Usage

After installation, you can access the methods to interact with Paystack API as helpers in your Sails application. Like so:

```js
// api/controllers/admin/create-plan

// ...
const createdPlan = await global.sails.helpers.paystack.createPlan.with({
      name: 'Plan from Sails Hook',
      amount: 10000,
      interval: 'monthly'
    })
exits.success({createdPlan})
```

## Secret Key
Note you didn't need to specify your Paystack secret key because this hook look for your secret key if not defined in the call to the helper in 3 places

1. In `config/local.js` via `sails.config.paystackSecret`
2. In `config/custom.js` (which you can override in your `env/production.js` or `env/staging.js`) via `sails.config.custom.paystackSecret`
3. In your app environment via `process.env.PAYSTACK_SECRET`


## Test

To run the test in this machine, rename `env.example` to `.env` then replace the content with your Paystack test API Key
Now run test simply with:

```sh
npm test
```

Alternatively you can run tests by

```sh
PAYSTACK_API_KEY_FOR_TESTS=YOUR_PAYSTACK_TEST_API_KEY npm test
```
