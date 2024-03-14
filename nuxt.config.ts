// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap'],
  /*sitemap: {
    routes: async () => {
      const { data: response } = await $fetch(
          'http://localhost:3000/posts'
      )
      return response.map((post) => `/posts/${post.id}`)
    },
  },*/
  ssr: true,
  builder: "vite",
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', 'sitemap.xml'],
      ignore: ['/tak', '/konfiguration', '/checkout'],
    },
  },
  sitemap: {
    sources: ['/api/sitemap'],
  },
})
