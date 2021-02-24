// Import the `mount()` method from Vue Test Utils
import { mount } from "@vue/test-utils";
import Entete from "../src/components/Entete";
// The component to test

test("mount a vue component", () => {
  const wrapper = mount(Entete);
  console.log(wrapper);
});
