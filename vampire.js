class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfDescedents = 0;
    let currentVampire = this;

    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numOfDescedents++;
    }

    return numOfDescedents;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal <= vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let currentVampire = this;
    while(currentVampire !== vampire) {
      if (currentVampire.creator && vampire.isMoreSeniorThan(currentVampire)) {
        currentVampire = currentVampire.creator;
      } else if (vampire.creator && currentVampire.isMoreSeniorThan(vampire)) {
        vampire = vampire.creator
      } else if (vampire.creator && currentVampire) {
        vampire = vampire.creator;
        currentVampire = currentVampire.creator;
      }
    }
    return currentVampire;
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let vampire = null;

    if (this.name === name) {
      vampire = this;
      return vampire;
    }
    
    for (const offspring of this.offspring) {
      vampire = offspring.vampireWithName(name);

      if (vampire !== null) {
        return vampire;
      }
    }

    return vampire;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let currentVampire = this;
    let number = 1;

    
    for (const offspring of this.offspring) {
      currentVampire = offspring;
      if (currentVampire){
        number += currentVampire.totalDescendents;
      }
    }

    return number;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let newBornVampires = [];
    let currentVampire = this;
    if (currentVampire.yearConverted > 1980) {
      newBornVampires.push(currentVampire);
    }

    for (const offspring of currentVampire.offspring) {
      currentVampire = offspring;
      if (currentVampire.allMillennialVampires.length > 0){
        newBornVampires.push(currentVampire.allMillennialVampires);
      }
    }

    return newBornVampires;
  }
}
  let rootVampire = new Vampire("root");
  rootVampire.yearConverted = 1900


  let offspringA = new Vampire("a");
  offspringA.yearConverted = 1925;
  let offspringB = new Vampire("b");
  offspringB.yearConverted = 1950;
  let offspringC = new Vampire("c");
  offspringC.yearConverted = 1981;
  let offspringD = new Vampire("d");
  offspringD.yearConverted = 1990;
  let offspringE = new Vampire("e");
  offspringE.yearConverted = 1995;
  let offspringF = new Vampire("F");
  offspringF.yearConverted = 1990;
  let offspringG = new Vampire("G");
  offspringG.yearConverted = 1990;
  let offspringH = new Vampire("h");
  offspringH.yearConverted = 1991;

  rootVampire.addOffspring(offspringA);
  rootVampire.addOffspring(offspringB);
  rootVampire.addOffspring(offspringC);
  offspringA.addOffspring(offspringF);
  offspringB.addOffspring(offspringG);
  offspringC.addOffspring(offspringD);
  offspringC.addOffspring(offspringE);
  offspringB.addOffspring(offspringH);
  //console.log((rootVampire));
 // console.log(rootVampire.vampireWithName("a"));
  console.log("--------");
  console.log(rootVampire.vampireWithName("b"));
  console.log("--------");
  console.log(rootVampire.vampireWithName("c"));
  console.log("--------");
  console.log(rootVampire.totalDescendents);
  console.log("--------");
  console.log(offspringA.totalDescendents);
  console.log("--------");
  console.log(offspringC.totalDescendents);
  console.log("--------");
  console.log(offspringH.totalDescendents);
  console.log("--------");
  console.log(rootVampire.allMillennialVampires);
  console.log("--------");
  console.log(offspringB.allMillennialVampires);
  console.log("--------");
  console.log(offspringC.allMillennialVampires);
module.exports = Vampire;

