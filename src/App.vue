<template>
  <scene>
    <heart />
  </scene>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Scene from './components/Scene.vue'
import Heart from './components/Heart.vue'

export default defineComponent({
  name: 'App',

  components: {
    Scene,
    Heart
  }
})
</script>

<style>
@import './assets/styles/index.css'
</style>
