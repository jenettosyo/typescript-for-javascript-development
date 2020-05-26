export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName = 'Sho';
  static lastName = 'Yokoi';

  static work() {
    return `Hey, ${this.firstName}! Are you interested in TypeScript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
