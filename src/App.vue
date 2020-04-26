<template>
  <div id="app">
    <div id="content">
      <home />
    </div>
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

<style scoped>
#app {
  width: 100%;
}
#content {
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
}
</style>
