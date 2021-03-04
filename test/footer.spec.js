// Test si le composant Pieddepage affiche
import { mount } from "@vue/test-utils";
import Pieddepage from "../src/components/Pieddepage";

test("monte le composant Pieddepage", () => {
  const wrapper = mount(Pieddepage);
  console.log(wrapper);
});
