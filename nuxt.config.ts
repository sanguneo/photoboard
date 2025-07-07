// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  appId: 'photoboard-app',
  devtools: { enabled: false },
  srcDir: 'src/',
  ssr: false,
  app: {
    head: {
      meta: [
        { name: 'charset', charset: 'UTF-8' },
        { name: 'httpEquiv', 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
      link: [],
      style: [],
      script: [],
      title: 'Xp사진보드판',
    },
  },
  runtimeConfig: {
    public: {
      API_BASE: process.env.API_BASE,
      RUN_MODE: process.env.RUN_MODE,
    },
  },
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
    '@vee-validate/nuxt',
    '@crazydos/nuxt-msw',
  ],
  css: [
    '@/assets/scss/style.scss',
    '@vuepic/vue-datepicker/dist/main.css',
  ],
  msw: {
    folderPath: '@/mocks',
    // enable: JSON.parse(process.env.USE_MOCK || 'true'),
    enable: false,
  },
  imports: {
    dirs: [
      'composables/**',
      'stores/**',
    ],
  },
  hooks: {
    'prepare:types': (options) => {
      if (!options?.tsConfig?.compilerOptions) return;
      const { ['~']: wave, ['~/*']: waveAst, ...paths } = options.tsConfig.compilerOptions.paths;
      paths['@/*'].push('../src/*/index.vue');
      waveAst.push('../src/*/index.vue');
      options.tsConfig.compilerOptions.paths = Object.assign({}, paths, { '~': wave, '~/*': waveAst });
      console.log('\x1b[32m√\x1b[0m Update has been made to "compilerOptions.paths" in tsconfig.json');
    },
  },
  vite: {
    resolve: {
      extensions: ['.js', '.ts', '.vue'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          quietDeps: true,
          additionalData: '@use "@/assets/scss/util/_predefined.scss" as *;',
        },
      },
    },
    esbuild: {
      legalComments: 'none',
    },
    build: {
      terserOptions: {
        format: {
          comments: false,
        },
      },
    },
  },
  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },
});
