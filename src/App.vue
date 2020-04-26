<template>
  <div id="app">
    <home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "@/views/Home.vue";
export default Vue.extend({
  components: {
    Home
  }
});
</script>
