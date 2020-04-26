<template>
  <div class="home">
    <ul>
      <p>{{ this.countdown.remainingTime }} time</p>
      <div v-for="(secret, i) in secrets" :key="i">
        <code-generator :name="secret.name" :code="secret.code" />

        <!-- TODO delete secrets but not using secret.secret -->
        <delete-secret :secret="secret.secret" @delete-secret="deleteSecret" />
      </div>
    </ul>
    <add-secret @new-secret="addSecret" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

import CodeGenerator from "@/components/CodeGenerator.vue";
import AddSecret from "@/components/AddSecret.vue";
import DeleteSecret from "@/components/DeleteSecret.vue";
import useSetInterval from "@/mixins/useSetInterval";
import { OTPCode } from "@/store";

interface Data {
  secrets: OTPCode[];
}

// TS mixin support not good
export default useSetInterval.extend({
  name: "Home",
  computed: mapState({ secrets: "secrets" }),
  mounted() {
    this.createInterval(this.handleTick, 1000);
  },
  methods: {
    ...mapActions({ addSecret: "addSecret", deleteSecret: "deleteSecret" }),
    handleTick() {
      console.log("tock");
    }
  },
  components: {
    CodeGenerator,
    AddSecret,
    DeleteSecret
  },
  mixins: [useSetInterval]
});
</script>
