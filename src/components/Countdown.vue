<template>
  <div>{{ remainingTime }}</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

interface Data {
  intervalId?: ReturnType<typeof setInterval>;
  remainingTime: number;
}

const period = 30;
const getCurrentSeconds = () => Math.round(new Date().getTime() / 1000);

export default Vue.extend({
  data: (): Data => ({
    remainingTime: 30
  }),
  mounted() {
    this.intervalId = setInterval(this.updateCode, 1000);
  },
  methods: {
    updateCode() {
      this.remainingTime = period - (getCurrentSeconds() % period);
      // this.code = getCode(this.secret);
      // dispatch update
      // WIP moving the code generation to vuexc
    }
  },
  destroyed() {
    clearInterval(this.intervalId);
  },
  components: {}
});
</script>
