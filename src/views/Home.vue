<template>
  <div class="home">
    {{ code }}
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  computed: {
    code() {
      return 666;
    }
  },
  components: {}
});
</script>
