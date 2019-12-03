<template>
  <div>
    <div class="sliding-background-wrapper">
      <div class="sliding-background"></div>
    </div>
    <div class="container">
      <div>
        <logo />
        <h1 class="title">
          <%= name %>
        </h1>
        <h2 class="subtitle">
          <%= description %>
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
<%_ if (ui === 'tailwind') { _%>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto relative;
}
*/
<%_ } _%>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.sliding-background-wrapper {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
}

.sliding-background {
  background: url('/nuxt-bg.png') repeat;
  width: calc(100vw + 1800px);
  height: calc(100vh + 1500px);
  animation: slide 40s linear infinite;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1800px, -1500px, 0);
  }
}
</style>
