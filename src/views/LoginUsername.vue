<template lang="pug">
login-layout
  template(slot="body")
    v-form(v-model="validForm" ref="form" @submit.prevent="submit" lazy-validation)
      username-field(v-model="username")

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
      if (!this.$refs.form.validate()) {
        return false;
      }
      if (this.username === "test") {
        this.$router.push({ name: "UnverifiedAccount" });
      } else {
        this.$router.push({ name: "LoginPassword" });
      }
    }
  }
};
</script>
