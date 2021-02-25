// Test si le composant affiche

import Accueil from "../src/components/Accueil";
import { mount } from "@vue/test-utils";

test("mount a vue component", () => {
  const wrapper = mount(Accueil);
  console.log(wrapper);
});
