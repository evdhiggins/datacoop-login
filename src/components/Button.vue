<template lang="pug">
v-btn(
  @click.stop="$emit('click')"
  :loading="loading && showLoading"
  :disabled="loading"
  :color="primary ? 'primary' : ''"
) {{label}}
  slot
</template>

<script>
export default {
  name: "LoginButton",
  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    showLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>
