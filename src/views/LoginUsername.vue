<template lang="pug">
login-layout
  template(slot="body")
    v-form(v-model="validForm" ref="form" @submit.prevent="continueLogin()" lazy-validation)
      username-field(v-model="username" :errorMessages="errors")

  template(slot="actions")
    login-button( primary @click="continueLogin()") Continue

</template>

<script>
import LoginLayout from "./../layouts/Login";
import UsernameField from "@/components/UsernameField";
import LoginButton from "@/components/Button";

export default {
  name: "LoginUsername",
  components: {
    LoginLayout,
    LoginButton,
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
    }
  },
  methods: {
    continueLogin() {
      this.errors = [];
      if (!this.$refs.form.validate()) {
        return false;
      }
      this.$store
        .dispatch("apiCall", { callName: "verifyUsername" })
        .then(response => {
          if (response.exists && response.setup) {
            this.$router.push({ name: "LoginPassword" });
          } else if (response.exists && !response.setup) {
            this.$router.push({ name: "UnverifiedAccount" });
          } else {
            this.errors.push(
              `An account with the username "${this.username}" does not exist.`
            );
          }
        });
    }
  }
};
</script>
