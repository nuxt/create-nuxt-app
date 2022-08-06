<%_ if (pug) { _%>
<template lang="pug">
  Tutorial
</template>
<%_ } else { _%>
<template>
  <Tutorial />
</template>
<%_ } _%>

<%_ if (typescript) { _%>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
<%_ } else { _%>
<script>
export default {
  name: 'IndexPage'
}
</script>
<%_ } _%>
