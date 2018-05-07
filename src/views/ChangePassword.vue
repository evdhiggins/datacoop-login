<template lang="pug">
login-layout
  template(slot="title") Change password

  template(slot="body")
    v-form(v-model="validForm" ref="form" @submit.prevent="resetPassword()" lazy-validation)
      password-field(v-model="password")
      password-field(v-model="password2" label="Verify Password" :errorMessages="errors")

  template(slot="footer") &nbsp;

  template(slot="actions")
    login-button(primary @click="resetPassword()") Change password
</template>

<script>
import LoginLayout from "./../layouts/Login";
import PasswordField from "@/components/PasswordField";
import UsernameField from "@/components/UsernameField";
import LoginButton from "@/components/Button";

export default {
  name: "ChangePassword",
  components: {
    LoginButton,
    LoginLayout,
    PasswordField,
    UsernameField
  },
  data() {
    return {
      errors: [],
      password: "",
      password2: "",
      validForm: null
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    }
  },
  methods: {
    resetPassword() {
      this.errors = [];
      if (!this.$refs.form.validate()) {
        return false;
      }
      if (this.password !== this.password2) {
        return this.errors.push("Passwords do not match.");
      }
      this.$store
        .dispatch("apiCall", {
          callName: "updatePassword",
          data: { password: this.password, token: this.token }
        })
        .then(response => {
          if (!response.updated && !response.token_valid) {
            this.errors.push(
              "The reset code is not valid. Please try again, or request a new code."
            );
          } else if (!response.updated !== true) {
            this.errors.push(
              "The server encountered an error. Please try again later"
            );
          } else {
            this.$store.dispatch(
              "message",
              "Password successfully updated! Please log in using your new password."
            );
            this.$router.push({ name: "LoginUsername" });
          }
        });
    }
  },
  mounted() {
    if (this.$store.getters.username === "") {
      this.$router.push({ name: "LoginUsername" });
    }
  }
};
</script>
