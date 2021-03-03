// Test si le composant Projet affiche

import { mount } from "@vue/test-utils";
import Projets from "../src/views/Projets";

test("monte le composant Projet", () => {
  const wrapper = mount(Projets);
  console.log(wrapper);
});
