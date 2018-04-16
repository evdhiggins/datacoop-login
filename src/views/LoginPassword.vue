<template lang="pug">
login-layout
  template(slot="body")
    v-form(v-model="validForm" ref="form" @submit.prevent="login()" lazy-validation)
      password-field(v-model="password" :errorMessages="errors")

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
      errors: [],
      password: "",
      validForm: null
    };
  },
  methods: {
    login() {
      this.errors = [];
      if (!this.$refs.form.validate()) {
        return false;
      }
      this.$store
        .dispatch("apiCall", {
          callName: "login",
          data: { password: this.password }
        })
        .then(response => {
          if (response === true) {
            location.reload();
          } else {
            this.errors.push(
              "Password was incorrect. Please try again, or reset your password."
            );
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
