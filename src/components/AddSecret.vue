<template>
  <div>
    <input v-model="secret" placeholder="Insert secret" />
    <input v-model="name" placeholder="Insert name" />
    <button v-on:click="emitSecret">save</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({ secret: "", name: "" }),
  methods: {
    emitSecret() {
      this.$emit("new-secret", {
        secret: this.secret,
        code: "",
        name: this.name
      });
      this.secret = "";
      this.name = "";
    }
  }
});
</script>
