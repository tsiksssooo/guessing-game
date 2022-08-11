
class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.minimum = min;
      this.maximum = max;
    }

    guess() {
      this.result = Math.round((this.maximum + this.minimum)/ 2);
      return this.result
    }

    lower() {
      this.setRange(this.minimum, this.result)
    }

    greater() {
      this.setRange(this.result, this.maximum)
    }
}

module.exports = GuessingGame;