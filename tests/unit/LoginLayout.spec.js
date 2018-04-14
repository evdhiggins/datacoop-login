import { createLocalVue, mount } from "@vue/test-utils";
import vuetify from "vuetify";
import VueRouter from "vue-router";
import LoginLayout from "@/layouts/Login.vue";

/**
 * Tests the basic functionality of the Login layout via the named slots.
 * Evaluates custom and default content, ensuring basic rendering.
 *
 * Vue router is only loaded to avoid console.log warnings due to router-link
 */

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(vuetify);

const routes = [
  { name: "ForgotPassword", path: "/" },
  { name: "VerifyAccount", path: "/t" }
];

const defaultWrapper = mount(LoginLayout, {
  localVue,
  router: new VueRouter({ routes })
});

const customData = {
  title: "A-Test-Title",
  body: "A-Test-Body",
  footer: "A-test-footer",
  actions: "Test-action"
};

const customWrapper = mount(LoginLayout, {
  localVue,
  router: new VueRouter({ routes }),
  slots: {
    ...customData
  }
});

describe("Layouts/Login.vue", () => {
  describe("Slots", () => {
    describe("Title slot", () => {
      it("Should render default title", () => {
        expect(defaultWrapper.text()).toContain("Login to DataCoop");
      });
      it("Should render a custom title slot", () => {
        expect(customWrapper.text()).toContain(customData.title);
      });
    });

    describe("Body slot", () => {
      it("Should render custom body text", () => {
        expect(customWrapper.text()).toContain(customData.body);
      });
    });

    describe("Footer slot", () => {
      it("Should render default footer text", () => {
        expect(defaultWrapper.text()).toContain("I forgot my password");
        expect(defaultWrapper.text()).toContain("I have a password reset code");
      });
      it("Should render custom footer text", () => {
        expect(customWrapper.text()).toContain(customData.footer);
      });
    });

    describe("Actions slot", () => {
      it("Should render custom actions text", () => {
        expect(customWrapper.text()).toContain(customData.actions);
      });
    });
  });
});
