import { mount } from "@vue/test-utils";
import NuxtLogo from "@/components/NuxtLogo.vue";
import Vuex from "vuex";
// Enable when you want to import Vuex Srore automatically.
import { createStore } from "../.nuxt/store.js";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("NuxtLogo", () => {
  test("is a Vue instance", () => {
    const store = createStore();
    const wrapper = mount(NuxtLogo, {
      store,
      localVue,
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
