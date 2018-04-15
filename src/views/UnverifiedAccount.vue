<template lang="pug">
login-layout
  template(slot="title") First-time User

  template(slot="body")
    p.body-1 Welcome, {{username}}! Before accessing DataCoop, you must verify your account. Please request a password-reset code.
    p.body-1 The code will be sent to the email associated with your account. Please contact an admin if you experience any issues.

  template(slot="footer")
    v-spacer
    router-link(:to="{name: 'VerifyAccount'}") I already have a password reset code
  template(slot="actions")
    login-button( @click="$router.push({name:'LoginUsername'})" ) Back
    login-button( primary @click="requestToken()" ) Request Token

</template>

<script>
import LoginLayout from "./../layouts/Login";
import LoginButton from "@/components/Button";

export default {
  name: "UnverifiedAccount",
  components: {
    LoginLayout,
    LoginButton
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
    requestToken() {
      // request token
      this.$router.push({ name: "VerifyAccount" });
    }
  }
};
</script>
