// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    apiEndpoint: '',
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'home p',
      },
      script: [
        {
          src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js',
        },
        {
          src: '/js/jquery.inview_set.js',
        },
        {
          src: '/js/main.js',
        },
      ],
    },
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
});
