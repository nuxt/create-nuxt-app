<template>
  <div class="logo" :class="{ready: isReady }">
    <svg
      id="Layer_2"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="534px"
      height="420px"
      viewBox="0 0 534 420"
      enable-background="new 0 0 534 420"
      xml:space="preserve"
    >
      <path
        fill="#35495E"
        d="M320.296,71.189c0,0-16.014-0.447-22.081,3.909c0,0,6.068-14.188,20.215-25.191
        c2.799-2.177-19.282-19.904-49.138-19.904c-31.1,0-51.937,17.727-49.138,19.904c14.147,11.003,20.215,25.191,20.215,25.191
        c-6.067-4.356-22.081-3.909-22.081-3.909c1.801,9.907-13.913,46.987-13.913,46.987l64.917,101.488l64.917-101.488
        C334.209,118.176,318.494,81.096,320.296,71.189z M269.292,128.67c-3.732-16.092-14.928-36.155-14.928-41.288
        c0-5.133,9.796-21.458,14.928-21.458c3.732,0,14.928,16.326,14.928,21.458C284.22,92.514,273.024,112.578,269.292,128.67z"
      />
      <polygon fill="#41B883" points="416.507,44 269.292,266.825 122.077,44 10.029,14 269.292,400.888 528.555,14 " />
    </svg>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReady: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.isReady = true
    }, 1000)
  }
}
</script>

<style scoped>
.logo {
  height: auto;
  display: inline-block;
  vertical-align: middle;
  width: 43px;
}

.logo svg {
  width: 100%;
  height: auto;
  max-height: 12em;
  margin: 0 auto;
}

.logo svg polygon {
  transform: translateY(-100%);
  transition-duration: 2s;
}

.logo svg path {
  fill: transparent;
  transition-delay: 0.6s;
  transition-duration: 1s;
}

.logo.ready svg polygon {
  transform: translateY(0);
  fill: #fff;
}

.logo.ready svg path {
  stroke: transparent;
  stroke-width: 0;
  fill: #fff;
}
</style>
