<template>
  <div class="home">
    <countdown :time="countdown.remainingTime" />
    <code-table :accounts="secrets" @delete-secret="deleteSecret" />
    <add-secret @new-secret="addSecret" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

import CodeTable from "@/components/CodeTable.vue";
import AddSecret from "@/components/AddSecret.vue";
import Countdown from "@/components/Countdown.vue";
import useCountdown from "@/mixins/useCountdown";
import { State } from "@/store/state";
import { Actions } from "@/store/actions";

// TS mixin support not good
export default useCountdown.extend({
  name: "Home",
  computed: mapState({ secrets: "secrets" }),
  created() {
    this.createInterval(this.handleTick, 30);
  },
  methods: {
    ...mapActions({
      addSecret: Actions.AddSecret,
      deleteSecret: Actions.DeleteSecret,
      refreshCodes: Actions.RefreshCodes
    }),
    handleTick() {
      this.refreshCodes();
    }
  },
  components: {
    CodeTable,
    AddSecret,
    Countdown
  },
  mixins: [useCountdown]
});
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
}
</style>
