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
interface Data {
  secrets: string[];
}
export default Vue.extend({
  name: "Home",
  data: (): Data => ({
    secrets: ["JBSWY3DPEHPK3PXP", "JBQWE3DPEHPK3PXP"]
  }),
  methods: {
    addSecret(secret: string) {
      this.secrets.push(secret);
    }
  },
  components: {
    CodeGenerator,
    AddSecret
  }
});
</script>
