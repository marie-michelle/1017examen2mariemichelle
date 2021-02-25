// Test si le composant affiche

import { mount } from "@vue/test-utils";
import Projets from "../src/views/Projets";

test("mount a vue component", () => {
  const wrapper = mount(Projets);
  console.log(wrapper);
});
