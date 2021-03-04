// Test si le composant Entete affiche
import { mount } from "@vue/test-utils";
import Entete from "../src/components/Entete";

test("monte le composant Entete", () => {
  const wrapper = mount(Entete);
  console.log(wrapper);
});
