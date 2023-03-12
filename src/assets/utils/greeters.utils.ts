export type Greeters = {
  [name: string]: Greeter;
};

export type Greeter = {
  name: string;
  year: number;
  province: Province;
};

export enum Province {
  pangasinan = 'Pangasinan',
  pampanga = 'Pampanga',
  nuevaEcija = 'Nueva Ecija',
  cagayan = 'Cagayan',
  manila = 'Manila',
  bataan = 'Bataan',
  tarlac = 'Tarlac',
  nuevaVizcaya = 'Nueva Vizcaya',
  llocosSur = 'Llocos Sur',
  bulacan = 'Bulacan',
  camarinesSur = 'Camarines Sur',
}

export const Greeters: Greeters = {
  'Agnes Dauz Cadlaon': {
    name: 'Agnes Dauz Cadlaon',
    year: 1981,
    province: Province.pangasinan,
  },

  'Alice Pinky Ramirez Oreas': {
    name: 'Alice Pinky Ramirez Oreas',
    year: 1987,
    province: Province.pangasinan,
  },

  'Araceli Gorospe Lambinicio': {
    name: 'Araceli Gorospe Lambinicio',
    year: 1961,
    province: Province.pampanga,
  },

  'Brenda Faye Reyes DePano': {
    name: 'Brenda Faye Reyes DePano',
    year: 1983,
    province: Province.nuevaEcija,
  },

  'Crispina Estaris': {
    name: 'Crispina Estaris',
    year: 1954,
    province: Province.cagayan,
  },

  'Edna Soriano Santos': {
    name: 'Edna Soriano Santos',
    year: 1959,
    province: Province.manila,
  },

  'Eunice Bautista Laureano': {
    name: 'Eunice Bautista Laureano',
    year: 1955,
    province: Province.bataan,
  },

  'Fe Isabel Cruz Gorospe': {
    name: 'Fe Isabel Cruz Gorospe',
    year: 1957,
    province: Province.manila,
  },

  'Helen Rabina Sicat': {
    name: 'Helen Rabina Sicat',
    year: 1973,
    province: Province.tarlac,
  },

  'Lila Valencia Lusung': {
    name: 'Lila Valencia Lusung',
    year: 1952,
    province: Province.tarlac,
  },

  'Noemi Bagasin Villanueva': {
    name: 'Noemi Bagasin Villanueva',
    year: 1983,
    province: Province.cagayan,
  },

  'Olive Asis Dugay': {
    name: 'Olive Asis Dugay',
    year: 1981,
    province: Province.nuevaVizcaya,
  },

  'Pacita Gomintong DelAmen': {
    name: 'Pacita Gomintong DelAmen',
    year: 1967,
    province: Province.llocosSur,
  },

  'Rosario Nicolas Pangilinan': {
    name: 'Rosario Nicolas Pangilinan',
    year: 1963,
    province: Province.bulacan,
  },

  'Fabiola Sanchez Carreon': {
    name: 'Fabiola Sanchez Carreon',
    year: 1973,
    province: Province.pampanga,
  },

  'Cecil Bucud Arceo': {
    name: 'Cecil Bucud Arceo',
    year: 1996,
    province: Province.pampanga,
  },

  'Erlinda Villanueva Pastrana': {
    name: 'Erlinda Villanueva Pastrana',
    year: 1961,
    province: Province.camarinesSur,
  },

  'Perla Cunanan Baker': {
    name: 'Perla Cunanan Baker',
    year: 1971,
    province: Province.tarlac,
  },
};
