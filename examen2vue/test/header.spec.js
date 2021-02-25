// Test si le composant affiche
import { mount } from "@vue/test-utils";
import Entete from "../src/components/Entete";

test("mount a vue component", () => {
  const wrapper = mount(Entete);
  console.log(wrapper);
});
