export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const barString: Mojiretsu = 'Hello';

const example1 = {
  name: 'ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'ham',
  age: 43,
};

type Profile2 = typeof example1;
