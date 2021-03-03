// Test si le composant Accueil affiche

import Accueil from "../src/components/Accueil";
import { mount } from "@vue/test-utils";

test("monte le composant Accueil", () => {
  const wrapper = mount(Accueil);
  console.log(wrapper);
});
