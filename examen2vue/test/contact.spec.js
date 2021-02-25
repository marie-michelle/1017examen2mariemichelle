// Test si le composant affiche
import { mount } from "@vue/test-utils";
import Contact from "../src/views/Contact";

test("mount a vue component", () => {
  const wrapper = mount(Contact);
  console.log(wrapper);
});
