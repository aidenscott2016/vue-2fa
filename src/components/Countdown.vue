<template>
  <progress max="100" :value="percent" />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    time: {
      type: Number,
      required: true
    }
  },
  computed: {
    percent() {
      return Math.round(((this.time as number) / 30) * 100);
    }
  }
});
</script>
