class Centaur {
  constructor(obj) {
    this.name = obj.name;
    this.breed = obj.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
  }
  counter() {
    this.count++;
    if (this.count >= 3) {
      this.cranky = true;
    }
  };
  shoot() {
    this.counter();
    if (this.cranky === false && this.layingDown === false) {
      return 'Twang!!!';
    } else {
      return 'NO!';
    }
  };
  run() {
    this.counter();
    if (this.cranky === false && this.layingDown === false) {
      return 'Clop clop clop clop!!!';
    } else {
      return 'NO!';
    }
  };
  sleep() {
    this.count = 0;
    if (this.standing === false && this.layingDown) {
      this.cranky = false;
      return 'ZZZZ';
    } else {
      return 'NO!';
    }
  };
  layDown() {
    this.standing = false;
    this.layingDown = true;
  };
  standUp() {
    this.standing = true;
    this.layingDown = false;
  };
  drinkPotion() {
    console.log(this.standing);
    if (this.standing && this.count > 0) {
      this.cranky = false;
    } else {
      this.cranky = true;
      return 'Not while I\'m laying down!';
    }
  }
}



module.exports = Centaur
