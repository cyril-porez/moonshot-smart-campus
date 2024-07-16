module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'your-admin-jwt-secret'), // Replace 'your-admin-jwt-secret' with your own secure secret
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'vmF4oCS1w/Jv1HwRR29qLw=='),
  },
});