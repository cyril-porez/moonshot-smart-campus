module.exports = ({ env }) => {
  console.log('APP_KEYS:', env.array('APP_KEYS', ['myKeyA', 'myKeyB']));

  return {
    host: env('HOST', ''),
    port: env.int('PORT', ),
    app: {
      keys: env.array('APP_KEYS', ''),
    },
  };
};
