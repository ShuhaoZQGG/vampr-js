const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("closestCommonAncestor", function() {

    let offspringA, offspringB, offspringC, offspringD, offspringE, offspringF, offspringG, offspringH;
    beforeEach(() => {
      offspringA = new Vampire("a");
      offspringB = new Vampire("b");
      offspringC = new Vampire("c");
      offspringD = new Vampire("d");
      offspringE = new Vampire("e");
      offspringH = new Vampire("h");

      rootVampire.addOffspring(offspringA);
      rootVampire.addOffspring(offspringB);
      rootVampire.addOffspring(offspringC);
      offspringC.addOffspring(offspringD);
      offspringC.addOffspring(offspringE);
      offspringB.addOffspring(offspringH);
      console.log(rootVampire);
    });

    it("should return the entire tree for root node", () => {
    })

   
  });
});
