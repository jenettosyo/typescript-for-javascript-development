export {};

class VisaCard {
  constructor(public readonly owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('Sho');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'shota'
