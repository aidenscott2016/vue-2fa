<template>
  <div class="home">{{ code }}{{ remainingTime }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import OTPAuth from "otpauth";

const secret = "JBSWY3DPEHPK3PXP";
const period = 30;
interface Data {
  code: string;
  intervalId?: ReturnType<typeof setInterval>;
  remainingTime: number;
}

const getCode = (secret: string) => new OTPAuth.TOTP({ secret }).generate();

const getCurrentSeconds = () => Math.round(new Date().getTime() / 1000);

export default Vue.extend({
  name: "Home",
  data: (): Data => ({
    code: "",
    remainingTime: 30
  }),
  mounted() {
    this.updateCode();
    this.intervalId = setInterval(this.updateCode, 1000);
  },
  methods: {
    updateCode() {
      this.remainingTime = period - (getCurrentSeconds() % period);
      this.code = getCode(secret);
    }
  },
  destroyed() {
    clearInterval(this.intervalId);
  },
  components: {}
});
</script>
