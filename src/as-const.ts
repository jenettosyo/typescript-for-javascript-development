export {};

let name = 'Sho';

name = 'hanamiti';

let nickname = 'ham' as const;
nickname = 'ham';

let profile = {
  name: 'sho',
  height: 167,
} as const;

profile.name = 'sho';
profile.height = 170;
