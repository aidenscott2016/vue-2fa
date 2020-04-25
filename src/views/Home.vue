<template>
  <div class="home">
    <ul>
      <code-generator v-for="secret in secrets" :key="secret" />
    </ul>
  </div>
</template>

<script lang="ts">
import CodeGenerator from "@/components/CodeGenerator.vue";
interface Data {
  secrets: string[];
}
export default {
  name: "Home",
  data: (): Data => ({
    secrets: ["JBSWY3DPEHPK3PXP" /* , "JBQWE3DPEHPK3PXP" */]
  }),
  components: {
    CodeGenerator
  }
};
</script>
