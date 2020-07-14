class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
  }
  drink(thirsty) {
    this.thirsty = false;
  }
}



module.exports = Vampire
