<template lang="pug">
div
  v-snackbar(
      bottom
      multi-line
      v-model="snackbar"
      :timeout="0"
  )
    span {{text}}
    v-btn(
        flat
        color="red"
        @click.stop="snackbar = false"
    ) Close
</template>
<script>
import MessageBus from "@/MessageBus.js";

export default {
  name: "SnackBar",
  data() {
    return {
      text: "",
      snackbar: false
    };
  },
  created() {
    MessageBus.$on("message", text => {
      this.text = text;
      this.snackbar = true;
    });
  }
};
</script>
