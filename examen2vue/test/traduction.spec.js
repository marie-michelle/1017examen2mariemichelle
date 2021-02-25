// Test si le composant affiche

import { mount } from "@vue/test-utils";
import Traduction from "../src/components/Traduction";

test("mount a vue component", () => {
  const wrapper = mount(Traduction);
  console.log(wrapper);
});
