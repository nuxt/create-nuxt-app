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

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Error extends Vue {
  layout: String = 'empty'
  pageNotFound:string = '404 Not Found'
  otherError:string = 'An error occurred'
  @Prop({ type: Object, default: null }) error: any
  head() {
    const pageTitle =
      this.error.statusCode === 404
      ? this.pageNotFound
      : this.otherError
    return {
      pageTitle
    }
  }
  
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
