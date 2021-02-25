// Test si le composant affiche
import { mount } from "@vue/test-utils";
import Pieddepage from "../src/components/Pieddepage";

test("mount a vue component", () => {
  const wrapper = mount(Pieddepage);
  console.log(wrapper);
});
