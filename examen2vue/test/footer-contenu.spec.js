// Test si le footer retourne la direvtive 'footer'.

import { Pieddepage } from "../src/components/Pieddepage";

const Pieddepage = require(".Pieddepage");
test("Retourne la traduction anglaise du mot entete", () => {
  expect(Pieddepage("footer")).toBe(
    '© <a href="https://www.marie-michelle.com" target="_blank">marie-michelle.com</a> ' +
      new Date().getFullYear() +
      " Tous droits réservés."
  );
});
