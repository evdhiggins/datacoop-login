<template lang="pug">
v-text-field(
  prepend-icon="lock"
  v-model="password"
  :disabled="loading"
  :error-messages="errorMessages"
  :loading="loading"
  :label="label"
  type="password"
  :rules="[v => String(v).length > 6 ? true : 'Must be longer than 6 characters.']"
)
</template>

<script>
export default {
  name: "PasswordField",
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
      default: "Password"
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    password: {
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
