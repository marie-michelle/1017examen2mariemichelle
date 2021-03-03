// Test si le composant Contact affiche
import { mount } from "@vue/test-utils";
import Contact from "../src/views/Contact";

test("monte le composant Contact", () => {
  const wrapper = mount(Contact);
  console.log(wrapper);
});
