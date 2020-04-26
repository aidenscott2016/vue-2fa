import Vue from "vue";

const getCurrentSeconds = () => Math.round(new Date().getTime() / 1000);

export interface Data {
  countdown: {
    intervalId?: number;
    remainingTime: number;
  };
}
export default Vue.extend({
  data(): Data {
    return { countdown: { remainingTime: 0 } };
  },
  destroyed() {
    if (this.countdown.intervalId != undefined) {
      clearInterval(this.countdown.intervalId);
    }
  },
  methods: {
    createInterval(intervalHandler: () => any, period: number) {
      const handle = () => {
        const elapsed = getCurrentSeconds() % period;
        this.countdown.remainingTime = period - elapsed;
        if (elapsed == 0) {
          intervalHandler();
        }
      };
      this.countdown.intervalId = setInterval(handle, 1000);
    }
  }
});
