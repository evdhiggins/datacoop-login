<template lang="pug">
v-container(fluid fill-height)
  v-layout(align-center justify-center)
    v-flex(xs12 sm8 md4)
      v-card(class="elevation-10")
        v-toolbar(dark color="primary")
          v-toolbar-title
            slot(name="title") Login to DataCoop
          v-spacer
        v-card-text
          slot(name="body")
          slot(name="footer")
            v-spacer
            router-link(:to="{name: 'ForgotPassword'}") I forgot my password
            v-spacer
            router-link(:to="{name: 'VerifyAccount'}") I have a password reset code
        v-card-actions
          v-spacer
          slot(name="actions")
</template>

<script>
export default {
  name: "LoginLayout",
  props: {
    value: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    validForm: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        return this.value;
      }
    }
  }
};
</script>
