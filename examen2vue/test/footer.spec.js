// Import the `mount()` method from Vue Test Utils
import { mount } from "@vue/test-utils";
import Pieddepage from "../src/components/Pieddepage";
// The component to test

test("mount a vue component", () => {
  const wrapper = mount(Pieddepage);
  console.log(wrapper);
});
