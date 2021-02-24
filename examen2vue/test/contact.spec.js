// Import the `mount()` method from Vue Test Utils
import { mount } from "@vue/test-utils";
import Contact from "../src/views/Contact";
// The component to test

test("mount a vue component", () => {
  const wrapper = mount(Contact);
  console.log(wrapper);
});
