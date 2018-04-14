import { createLocalVue, mount } from "@vue/test-utils";
import vuetify from "vuetify";
import UsernameField from "@/components/UsernameField.vue";
import PasswordField from "@/components/PasswordField.vue";

// Not yet the most useful set of tests...

const localVue = createLocalVue();
localVue.use(vuetify);

const testLabel = "A test label";

describe("UsernameField.vue", () => {
  it("Renders the given label", () => {
    const wrapper = mount(UsernameField, {
      localVue,
      propsData: { label: testLabel, value: "" }
    });
    expect(wrapper.text()).toMatch(testLabel);
  });

  it("Renders the default label", () => {
    const defaultLabel = "Username";
    const wrapper = mount(UsernameField, {
      localVue,
      propsData: { value: "" }
    });
    expect(wrapper.text()).toMatch(defaultLabel);
  });
});

describe("PasswordField.vue", () => {
  it("Renders the given label", () => {
    const wrapper = mount(PasswordField, {
      localVue,
      propsData: { label: testLabel, value: "" }
    });
    expect(wrapper.text()).toMatch(testLabel);
  });

  it("Renders the default label", () => {
    const defaultLabel = "Password";
    const wrapper = mount(PasswordField, {
      localVue,
      propsData: { value: "" }
    });
    expect(wrapper.text()).toMatch(defaultLabel);
  });
});
