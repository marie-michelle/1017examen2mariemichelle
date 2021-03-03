import { shallowMount } from "@vue/test-utils";
import Projet from "../src/components/Projet";

describe("Projet", () => {
  it("retourne correctement les projets", () => {
    const wrapper = shallowMount(Projet, {
      data() {
        return {
          projets: [
            { projet: 'React.js - Projet "Netflix"' },
            { projet: "Angular 2 - Projet Forfait Voyage" },
            { projet: "Vue 2 - Projet Exercices Vue" },
          ],
        };
      },
    });

    // vérifie que `message` est restitué
    expect(wrapper.find(".projets").text()).toEqual([
      { projet: 'React.js - Projet "Netflix"' },
      { projet: "Angular 2 - Projet Forfait Voyage" },
      { projet: "Vue 2 - Projet Exercices Vue" },
    ]);
  });
});
