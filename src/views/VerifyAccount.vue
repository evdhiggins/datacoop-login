<template lang="pug">
login-layout
  template(slot="title") Verify reset code

  template(slot="body")
    v-form(v-model="validForm" ref="form" @submit.prevent="submit" lazy-validation)
      p.body-1 Please enter your username and the reset code.
      p.body-1 If your code has  expired, you can&nbsp;
        router-link(:to="{name: 'ForgotPassword'}") request a new one
        span .
      username-field(v-model="username")
      password-field(v-model="token" label="Token")

  template(slot="footer") &nbsp;

  template(slot="actions")
    v-btn( @click="$router.push({name: 'LoginUsername'})") Back
    v-btn(color="primary" @click="VerifyAccount()") Continue

</template>

<script>
import LoginLayout from "./../layouts/Login";
import PasswordField from "@/components/PasswordField";
import UsernameField from "@/components/UsernameField";
export default {
  name: "VerifyAccount",
  components: {
    LoginLayout,
    PasswordField,
    UsernameField
  },
  data() {
    return {
      validForm: null
    };
  },
  computed: {
    username: {
      get() {
        return this.$store.getters.username;
      },
      set(value) {
        return this.$store.dispatch("updateUsername", value);
      }
    },
    token: {
      get() {
        return this.$store.getters.token;
      },
      set(value) {
        return this.$store.dispatch("updateToken", value);
      }
    }
  },
  methods: {
    VerifyAccount() {
      if (this.$refs.form.validate()) {
        this.$router.push({ name: "ChangePassword" });
      }
    }
  }
};
</script>
