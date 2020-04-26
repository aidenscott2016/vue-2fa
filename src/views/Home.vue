<template>
  <div class="home">
    <ul>
      <code-generator
        v-for="(secret, i) in secrets"
        :key="i"
        :secret="secret"
      />
    </ul>
    <add-secret @new-secret="addSecret" />
  </div>
</template>

<script lang="ts">
import CodeGenerator from "@/components/CodeGenerator.vue";
import AddSecret from "@/components/AddSecret.vue";
import Vue from "vue";
import { mapState, mapActions } from "vuex";
interface Data {
  secrets: string[];
}
export default Vue.extend({
  name: "Home",
  computed: mapState({ secrets: "secrets" }),
  methods: mapActions({ addSecret: "addSecret" }),
  components: {
    CodeGenerator,
    AddSecret
  }
});
</script>
