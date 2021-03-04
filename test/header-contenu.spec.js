// Importation du mixin mixinTraduction

import { shallowMount } from "@vue/test-utils";
import { Entete } from "../src/components/entete";
import { mixinTraduction } from "../src/mixins/mixinTraduction";

describe("Entete", () => {
  it("importe le mixinTraduction", () => {
    const wrapper = shallowMount(Entete, {
      mixins: [mixinTraduction],
    });

    // vérifie que `message` est restitué
    expect(wrapper.find(".mixinTraduction").mixins()).toEqual(mixinTraduction);
  });
});
