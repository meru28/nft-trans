<template>
  <div>
    <Navigation />
    <main class="">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
<script lang="ts">
import Navigation from '~/components/_base/Navigation.vue'
import Footer from '~/components/_base/Footer.vue'
export default {
  name: 'DefaultLayout',
  components: { Navigation, Footer }
}
</script>
<style>
 body {
    font-family: 'Helvetica Neue', Fallback, sans-serif;
  }
</style>
