<template lang="pug">
login-layout
  template(slot="title") Change password

  template(slot="body")
    v-form(v-model="validForm" ref="form" @submit.prevent="submit" lazy-validation)
      password-field(v-model="password")
      password-field(v-model="password2" label="Verify Password")

  template(slot="footer") &nbsp;

  template(slot="actions")
    v-btn(color="primary" @click="resetPassword()") Change password
</template>

<script>
import LoginLayout from "./../layouts/Login";
import PasswordField from "@/components/PasswordField";
import UsernameField from "@/components/UsernameField";
export default {
  name: "ChangePassword",
  components: {
    LoginLayout,
    PasswordField,
    UsernameField
  },
  data() {
    return {
      password: "",
      password2: "",
      validForm: null
    };
  },
  methods: {
    resetPassword() {
      if (!this.$refs.form.validate()) {
        return false;
      }
    }
  }
};
</script>
