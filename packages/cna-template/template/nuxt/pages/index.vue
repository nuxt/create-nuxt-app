<template>
  <Tutorial/>
</template>

<%_ if (typescript) { _%>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<%_ } else { _%>
<script>
export default {}
</script>
<%_ } _%>
