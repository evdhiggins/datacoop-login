<template lang="pug">
v-text-field(
  prepend-icon="person"
  v-model="username"
  :label="label"
  :rules="[v => String(v).length > 0 ? true : 'A username must be entered']"
)
</template>

<script>
export default {
  name: "UsernameField",
  props: {
    value: {
      required: true,
      type: String
    },
    label: {
      required: false,
      type: String,
      default: "Username"
    }
  },
  computed: {
    username: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
