// Vérifie que les sujets sont bien retournée à l'utilisateur

import { shallowMount } from "@vue/test-utils";
import { Contact } from "../src/components/Contact";

describe("Contact", () => {
  it("retourne correctement un message à l'utilisateur", () => {
    const wrapper = shallowMount(Contact, {
      data() {
        return {
          categories: [
            { categorie: "Information" },
            { categorie: "Soumission" },
            { categorie: "Soutien technique" },
            { categorie: "Autre" },
          ],
        };
      },
    });

    // vérifie que les catégories sont restituées
    expect(wrapper.find(".categories").text()).toEqual(
      { categorie: "Information" },
      { categorie: "Soumission" },
      { categorie: "Soutien technique" },
      { categorie: "Autre" }
    );
  });
});
