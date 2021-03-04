import { shallowMount } from "@vue/test-utils";
import Accueil from "../src/components/Accueil";

describe("Accueil", () => {
  it("retourne correctement un message à l'utilisateur", () => {
    const wrapper = shallowMount(Accueil, {
      data() {
        return {
          text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aliquid amet consequuntur dolorum enim eum ex, voluptatem. Consequatur
          dolores, voluptatum?`,
        };
      },
    });

    // vérifie que `message` est restitué
    expect(wrapper.find(".text").text())
      .toEqual(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
    aliquid amet consequuntur dolorum enim eum ex, voluptatem. Consequatur
    dolores, voluptatum?`);

    // vérifie que `error` est restituée
    expect(wrapper.find(".error").exists()).toBeTruthy();
  });
});
