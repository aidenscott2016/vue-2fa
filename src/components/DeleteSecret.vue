<template>
  <font-awesome-icon
    v-on:click="$emit('delete-secret', secret)"
    icon="trash"
  ></font-awesome-icon>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    secret: {
      type: String,
      required: true
    }
  }
});
</script>

<style></style>
