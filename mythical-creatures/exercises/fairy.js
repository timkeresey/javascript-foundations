class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.count = 0;
  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowers) {
    for (var i = 0; i < flowers.length; i++) {
      this.clothes.dresses.push(flowers[i]);
    }
  }
  provoke() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant) {
    this.count++;
    if (this.count < 3 && this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
    } else {
      this.disposition = 'Good natured';
    }
  }
}



module.exports = Fairy;
