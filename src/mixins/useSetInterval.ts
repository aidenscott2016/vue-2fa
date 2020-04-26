import Vue from "vue";

const getCurrentSeconds = () => Math.round(new Date().getTime() / 1000);
const period = 30;

export interface Data {
  countdown: {
    intervalId?: number;
    remainingTime: number;
  };
}
export default Vue.extend({
  data(): Data {
    return { countdown: { remainingTime: 30 } };
  },
  destroyed() {
    if (this.countdown.intervalId != undefined) {
      clearInterval(this.countdown.intervalId);
    }
  },
  methods: {
    createInterval(intervalHandler: () => any, interval: number) {
      const handle = () => {
        this.countdown.remainingTime = period - (getCurrentSeconds() % period);
        intervalHandler();
      };
      this.countdown.intervalId = setInterval(handle, interval);
    }
  }
});
