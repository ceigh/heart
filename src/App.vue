<template>
  <div ref="rendererContainer" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { init } from './three'

export default defineComponent({
  mounted () {
    init(this.$refs.rendererContainer as HTMLElement)
  }
})
</script>

<style>
@import './assets/styles/index.css'
</style>
