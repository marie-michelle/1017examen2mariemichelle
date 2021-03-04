// Test si la traduction du libellé 'header' retourne 'header.'.

import { mixinTraduction } from "../src/mixins/mixinTraduction";

const mixinTraduction = require(".mixinTraduction");
test("Retourne la traduction anglaise du mot entete", () => {
  expect(mixinTraduction("header")).toBe("header.");
});
