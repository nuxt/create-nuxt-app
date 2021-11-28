<template>
  <div class="container">
    <img class="logo" src="~/assets/oruga.png">
    <h1 class="title">
      Oruga
    </h1>
    <p class="subtitle">
      Oruga UI is like a caterpillar, minimal and yet functional.<br>It's in your hands turning it into a butterfly.
    </p>
    <div class="buttons">
      <o-button root-class="button" variant-class="button-" variant="light" @click="goToDocs()">
        Documentation
      </o-button>
      <o-button root-class="button" variant-class="button-" variant="dark" @click="goToGithub()">
        GitHub
      </o-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    goToDocs () {
      window.location = 'https://oruga.io/documentation/#nuxt-module'
    },
    goToGithub () {
      window.location = 'https://github.com/oruga-ui/oruga'
    }
  }
}
</script>

<style>
.logo {
  max-width: 300px;
}

.o-button {
  padding: 10px 30px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family:
    Quicksand,
    "Source Sans Pro",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
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

.buttons {
  padding-top: 15px;
}

.button {
  padding: 1rem;
  min-width: 10rem;
}

.button-light {
  background-color: #9dbe43;
}

.button-dark {
  background-color: #293923;
}
</style>
