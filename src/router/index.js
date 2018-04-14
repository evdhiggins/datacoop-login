import Vue from "vue";
import Router from "vue-router";
import ChangePassword from "@/views/ChangePassword";
import ForgotPassword from "@/views/ForgotPassword";
import LoginPassword from "@/views/LoginPassword";
import LoginUsername from "@/views/LoginUsername";
import UnverifiedAccount from "@/views/UnverifiedAccount";
import VerifyAccount from "@/views/VerifyAccount";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/u/f/c",
      name: "ChangePassword",
      component: ChangePassword
    },
    {
      path: "/f",
      name: "ForgotPassword",
      component: ForgotPassword
    },
    {
      path: "/",
      name: "LoginUsername",
      component: LoginUsername
    },
    {
      path: "/p",
      name: "LoginPassword",
      component: LoginPassword
    },
    {
      path: "/u",
      name: "UnverifiedAccount",
      component: UnverifiedAccount
    },
    {
      path: "/u/v",
      name: "VerifyAccount",
      component: VerifyAccount
    }
  ]
});
