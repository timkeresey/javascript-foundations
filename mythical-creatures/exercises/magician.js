class Magician {
  constructor(obj) {
    this.name = obj.name;
    this.topHat = obj.topHat == undefined ? true : obj.topHat;
    this.confident = false;
    this.count = 0
  }
  incantation(spell) {
     return `${spell.toUpperCase()}!`;
  };
  cast() {
    this.count++;
    if (this.count >= 3) {
      this.confident = true;
    };
    if (this.topHat === true) {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    };
  };
  performShowStopper() {
    if (this.confident === false) {
      return 'Oh no! Practice more before attempting this trick!';
    } else {
      return 'WOW! The magician totally just sawed that person in half!';
    };
  };
}


module.exports = Magician;
