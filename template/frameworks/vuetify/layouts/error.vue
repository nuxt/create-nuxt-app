<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ this.pageNotFound }}
    </h1>
    <h1 v-else>
      {{ this.otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: ['error'],
  head () {
    const pageTitle = this.error.statusCode === 404
      ? this.pageNotFound
      : this.otherError
    return {
      pageTitle
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
