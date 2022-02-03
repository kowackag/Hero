export default class Hero {
    constructor(name, power=10) {
        this.name = name;
        this.power = power;
    }

    getCurrentPowerCount() {
        return this.power;
    }

    train() {
      this.power = this.power + 1
    }
}