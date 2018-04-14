<template lang="pug">
login-layout
  template(slot="body")
    v-form(v-model="validForm" ref="form" @submit.prevent="submit" lazy-validation)
      password-field(v-model="password")

  template(slot="actions")
    v-btn( @click="$router.push({name: 'LoginUsername'})") Back
    v-btn(color="primary" @click="login()") Login

</template>

<script>
import LoginLayout from "./../layouts/Login";
import PasswordField from "@/components/PasswordField";
import UsernameField from "@/components/UsernameField";
export default {
  name: "LoginPassword",
  components: {
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
