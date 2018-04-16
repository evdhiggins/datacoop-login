<template lang="pug">
login-layout
  template(slot="title") Verify reset code

  template(slot="body")
    v-form(v-model="validForm" ref="form" @submit.prevent="VerifyAccount()" lazy-validation)
      p.body-1 Please enter your username and the reset code.
      p.body-1 If your code has  expired, you can&nbsp;
        router-link(:to="{name: 'ForgotPassword'}") request a new one
        span .
      username-field(v-model="username")
      password-field(v-model="token" label="Token" :errorMessages="errors")

  template(slot="footer") &nbsp;

  template(slot="actions")
    login-button( @click="$router.push({name: 'LoginUsername'})" ) Back
    login-button( primary @click="VerifyAccount()")  Continue

</template>

<script>
import LoginLayout from "./../layouts/Login";
import PasswordField from "@/components/PasswordField";
import UsernameField from "@/components/UsernameField";
import LoginButton from "@/components/Button";

export default {
  name: "VerifyAccount",
  components: {
    LoginButton,
    LoginLayout,
    PasswordField,
    UsernameField
  },
  data() {
    return {
      errors: [],
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
      this.errors = [];
      if (!this.$refs.form.validate()) {
        return false;
      }
      this.$store
        .dispatch("apiCall", {
          callName: "verifyToken",
          data: { token: this.token, username: this.username }
        })
        .then(response => {
          if (!response.exists) {
            return this.errors.push(
              "Hmm, that doesn't seem correct. Please try again, or request a new code."
            );
          } else if (response.exists && !response.valid) {
            return this.errors.push(
              "Your password-reset code has expired. Please request a new one."
            );
          } else {
            return this.$router.push({ name: "ChangePassword" });
          }
        });
    }
  }
};
</script>
