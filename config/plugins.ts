export default ({ env }) => ({
  'cloudinary-media-library': {
    enabled: true,
    config: {
      cloudName: 'dzdfldd9j',
      apiKey: '816916541981216',
      encryptionKey: "fm7mNUQagsywJS7ZewS_cmgNxeM"
  // plugin oembed:
    }
  },

  oembed: {
    enable: true,
  },
  // plugin video field:
  "video-field": {
    enable: true,
  },
  
  // import/export CSV
  "strapi-csv-import-export": {
          config: {
            authorizedExports: ["api::machine.machine"],
            authorizedImports: ["api::machine.machine"]
  }
},
// cloudinary upload
      upload: {
          config: {
            provider: 'cloudinary',
            providerOptions: {
              cloud_name: env('CLOUDINARY_NAME'),
              api_key: env('CLOUDINARY_KEY'),
              api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
              upload: {},
              uploadStream: {},
              delete: {},
            },
          },
        },
});

