<template>
  <table>
    <tbody>
      <tr v-for="({ name, code, secret }, i) in accounts" :key="i">
        <td>{{ name }}</td>
        <td>{{ code }}</td>
        <td>
          <delete-secret
            :secret="name"
            @delete-secret="$emit('delete-secret', $event)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import DeleteSecret from "./DeleteSecret.vue";
import { OTPCode } from "../store/state";
export default Vue.extend({
  components: {
    DeleteSecret
  },
  props: {
    accounts: Array as PropType<OTPCode[]>
  }
});
</script>
<style scoped>
table {
  width: 100%;
}
</style>
