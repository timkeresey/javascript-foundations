class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false
    this.hungry = false;
  }
  transform() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
  }
  eat(vic) {
    if (this.hungry === true && this.human === false) {
      vic.eaten = true;
      this.transform();
    }
  }
}




module.exports = Werewolf;
