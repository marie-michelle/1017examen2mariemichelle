// Import the `mount()` method from Vue Test Utils
import { mount } from "@vue/test-utils";
import Projets from "../src/views/Projets";
// The component to test

test("mount a vue component", () => {
  const wrapper = mount(Projets);
  console.log(wrapper);
});
