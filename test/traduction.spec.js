// Test si le composant Traduction affiche

import { mount } from "@vue/test-utils";
import Traduction from "../src/components/Traduction";

test("monte le composant Traduction", () => {
  const wrapper = mount(Traduction);
  console.log(wrapper);
});
