// Import the `mount()` method from Vue Test Utils
import { mount } from "@vue/test-utils";
import Traduction from "../src/components/Traduction";
// The component to test

test("mount a vue component", () => {
  const wrapper = mount(Traduction);
  console.log(wrapper);
});
