<script setup>
useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  title: 'Home test',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'description', content: 'test test' },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'author', content: 'test' },
    { property: 'og:title', content: 'Test'},
    { property: 'og:url', content: 'https://pfv-company.ru/'},
    { property: 'og:description', content: 'test test test'},
  ],
});
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
