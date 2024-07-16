module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', ''), // Replace 'your-admin-jwt-secret' with your own secure secret
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', ''),
  },
});
