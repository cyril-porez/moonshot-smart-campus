module.exports = ({ env }) => {
  console.log('APP_KEYS:', env.array('APP_KEYS', ['myKeyA', 'myKeyB']));

  return {
    host: env('HOST', 'localhost'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
    },
  };
};
