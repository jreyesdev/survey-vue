<script lang="ts">
import { computed, defineComponent } from 'vue'
import { mapState } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'


export default defineComponent({
  computed: {
    ...mapState(['user'])
  },
  components: { HelloWorld }
})
</script>

<template>
  <pre>{{ user }}</pre>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
