class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(guy) {
    guy.stoned = true;
    if (this.statues.length < 3) {
      this.statues.push(guy);
    } else {
      this.statues[0].stoned = false;
      this.statues.shift(this.statues[0]);
      this.statues.push(guy);
    }
  }
}




module.exports = Medusa
