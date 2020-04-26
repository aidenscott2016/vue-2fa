<template>
  <div>
    <input v-model="secret" placeholder="Insert secret" />
    <button v-on:click="emitSecret">save</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({ secret: "" }),
  methods: {
    emitSecret() {
      this.$emit("new-secret", {
        secret: this.secret,
        code: "",
        name: this.secret
      });
      this.secret = "";
    }
  }
});
</script>
