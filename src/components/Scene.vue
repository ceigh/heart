<template>
  <div ref="scene" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { appendRenderer } from '../three'

export default defineComponent({
  name: 'Scene',

  mounted () {
    appendRenderer(this.$refs.scene as HTMLElement)
  }
})
</script>
