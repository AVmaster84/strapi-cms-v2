export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'console.cloudinary.com',
            'res.cloudinary.com',
          ],
          'script-src': [
            "'self'",
            'example.com',
            'media-library.cloudinary.com',
            'upload-widget.cloudinary.com',
            'console.cloudinary.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
          ],
          'frame-src': [
            "'self'",
            'media-library.cloudinary.com',
            'market-assets.strapi.io',
            'upload-widget.cloudinary.com',
            'console.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];