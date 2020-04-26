<template>
  <div class="home">
    <ul>
      <countdown :time="countdown.remainingTime" />
      <div v-for="(secret, i) in secrets" :key="i">
        <code-display :name="secret.name" :code="secret.code" />

        <!-- TODO delete secrets but not using secret.secret -->
        <delete-secret :secret="secret.secret" @delete-secret="deleteSecret" />
      </div>
    </ul>
    <add-secret @new-secret="addSecret" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

import CodeDisplay from "@/components/CodeDisplay.vue";
import AddSecret from "@/components/AddSecret.vue";
import DeleteSecret from "@/components/DeleteSecret.vue";
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
    CodeDisplay,
    AddSecret,
    DeleteSecret,
    Countdown
  },
  mixins: [useCountdown]
});
</script>
