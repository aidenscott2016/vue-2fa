<template>
  <div class="home">{{ name }} - {{ code }}</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { OTPCode } from "@/store";

type Props = Pick<OTPCode, "name" | "code">;
export default Vue.extend<Props>({
  functional: false,
  props: { name: {}, code: {} }
});
</script>
