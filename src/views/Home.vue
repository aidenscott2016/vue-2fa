<template>
  <div class="home">
    <ul>
      <div v-for="(secret, i) in secrets" :key="i">
        <code-generator :name="secret.name" :code="secret.code" />
        <delete-secret :secret="secret.secret" @delete-secret="deleteSecret" />
      </div>
    </ul>
    <add-secret @new-secret="addSecret" />
  </div>
</template>

<script lang="ts">
import CodeGenerator from "@/components/CodeGenerator.vue";
import AddSecret from "@/components/AddSecret.vue";
import DeleteSecret from "@/components/DeleteSecret.vue";
import Vue from "vue";
import { mapState, mapActions } from "vuex";
interface Data {
  secrets: string[];
}
export default Vue.extend({
  name: "Home",
  computed: mapState({ secrets: "secrets" }),
  methods: mapActions({ addSecret: "addSecret", deleteSecret: "deleteSecret" }),
  components: {
    CodeGenerator,
    AddSecret,
    DeleteSecret
  }
});
</script>
