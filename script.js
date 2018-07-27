var john = {
  fullName: "John Smith",
  mass: 82,
  height: 1.82,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var neo = {
  fullName: "Neo Bassas",
  mass: 72,
  height: 1.82,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

john.calcBMI();
console.log(john.bmi);
neo.calcBMI();
console.log(neo.bmi);
