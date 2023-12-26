module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array(['29d33fae0bff833f07d361e8e2b890e61ad918ca517dece4f90e214e4137a2f484a4b0d2f9526d77c160a19c17fbd500a98c25f4b6eeb0370bbc5cfec6932306']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
