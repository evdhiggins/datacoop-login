<template lang="pug">
login-layout
  template(slot="body")
    v-form(v-model="validForm" ref="form" @submit.prevent="submit" lazy-validation)
      password-field(v-model="password")

  template(slot="actions")
    login-button( @click="$router.push({name: 'LoginUsername'})") Back
    login-button( primary @click="login()") Login

</template>

<script>
import LoginLayout from "./../layouts/Login";
import PasswordField from "@/components/PasswordField";
import UsernameField from "@/components/UsernameField";
import LoginButton from "@/components/Button";

export default {
  name: "LoginPassword",
  components: {
    LoginButton,
    LoginLayout,
    PasswordField,
    UsernameField
  },
  data() {
    return {
      password: "",
      validForm: null
    };
  },
  methods: {
    login() {
      if (!this.$refs.form.validate()) {
        return false;
      }
    }
  }
};
</script>
