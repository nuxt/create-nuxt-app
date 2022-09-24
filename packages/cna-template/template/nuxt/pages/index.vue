<template>
  <Tutorial/>
</template>

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
