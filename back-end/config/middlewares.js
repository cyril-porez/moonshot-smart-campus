module.exports = [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "script-src": ["'self'", "editor.unlayer.com"],
          "frame-src": ["'self'", "editor.unlayer.com"],
          'img-src': [
           "'self'",
           'data:',
           'blob:',
           'minio.dev.atelier.ovh',
         ],
         'media-src': [
           "'self'",
           'data:',
           'blob:',
           'minio.dev.atelier.ovh',
         ]
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];