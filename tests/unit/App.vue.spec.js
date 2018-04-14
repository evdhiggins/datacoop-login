import { createLocalVue, mount } from "@vue/test-utils";
import VueRouter from "vue-router";
import vuetify from "vuetify";
import app from "@/App.vue";
import EmptyComponent from "@/components/EmptyComponent.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(vuetify);

const routes = [{ path: "/", component: EmptyComponent }];
const router = new VueRouter({ routes });

const wrapper = mount(app, {
  localVue,
  router
});

describe("App.vue", () => {
  describe("getDepth(url)", () => {
    it("Should return the correct depth for a url", () => {
      expect(wrapper.vm.getDepth("/home/first/second")).toEqual(5);
    });
    it("Should properly handle empty strings", () => {
      expect(wrapper.vm.getDepth("")).toEqual(1);
    });
  });

  describe("Initial transition values", () => {
    it("Before any navigation, animation values should be null", () => {
      expect(wrapper.vm.transitionEnterName).toEqual(null);
      expect(wrapper.vm.transitionLeaveName).toEqual(null);
    });
  });

  describe("After an 'inward' (deeper) navigation", () => {
    it("Animation values should exit left, enter right", () => {
      wrapper.vm.$router.push("/test/deeper");
      expect(wrapper.vm.transitionEnterName).toEqual("animated bounceInRight");
      expect(wrapper.vm.transitionLeaveName).toEqual("animated bounceOutLeft");
    });
  });

  describe("After a 'outward' (shallower) navigation", () => {
    it("Animation should exit right, enter left", () => {
      wrapper.vm.$router.push("/test");
      expect(wrapper.vm.transitionEnterName).toEqual("animated bounceInLeft");
      expect(wrapper.vm.transitionLeaveName).toEqual("animated bounceOutRight");
    });
  });

  describe("After a 'same-depth' navigation", () => {
    it("Animation should exit left, enter left", () => {
      wrapper.vm.$router.push("/differentTest");
      expect(wrapper.vm.transitionEnterName).toEqual("animated bounceInLeft");
      expect(wrapper.vm.transitionLeaveName).toEqual("animated bounceOutLeft");
    });
  });
});
