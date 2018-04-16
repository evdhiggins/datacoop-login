<template lang="pug">
v-text-field(
  prepend-icon="person"
  v-model="username"
  :disabled="loading"
  :error-messages="errorMessages"
  :loading="loading"
  :label="label"
  :rules="[v => String(v).length > 0 ? true : 'A username must be entered']"
)
</template>

<script>
export default {
  name: "UsernameField",
  props: {
    errorMessages: {
      required: false,
      type: Array,
      default() {
        return [];
      }
    },
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
    loading() {
      return this.$store.getters.loading;
    },
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
