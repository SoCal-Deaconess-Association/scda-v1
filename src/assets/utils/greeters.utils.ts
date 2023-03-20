/* eslint-disable */
// @ts-nocheck
import greeting_1 from '@assets/videos/greeting_1.zip';
import greeting_2 from '@assets/videos/greeting_2.zip';
import greeting_3 from '@assets/videos/greeting_3.zip';
import greeting_4 from '@assets/videos/greeting_4.zip';
import greeting_5 from '@assets/videos/greeting_5.zip';
import greeting_6 from '@assets/videos/greeting_6.zip';
import greeting_7 from '@assets/videos/greeting_7.zip';
import greeting_8 from '@assets/videos/greeting_8.zip';
import greeting_9 from '@assets/videos/greeting_9.zip';
import greeting_10 from '@assets/videos/greeting_10.zip';
import greeting_11 from '@assets/videos/greeting_11.zip';
import greeting_12 from '@assets/videos/greeting_12.zip';
import greeting_13 from '@assets/videos/greeting_13.zip';
import greeting_14 from '@assets/videos/greeting_14.zip';
import greeting_15 from '@assets/videos/greeting_15.zip';
import greeting_16 from '@assets/videos/greeting_16.zip';
import greeting_17 from '@assets/videos/greeting_17.zip';
import greeting_18 from '@assets/videos/greeting_18.zip';

import map_1 from '@assets/images/maps/map_1.jpg';
import map_2 from '@assets/images/maps/map_2.jpg';
import map_3 from '@assets/images/maps/map_3.jpg';
import map_4 from '@assets/images/maps/map_4.jpg';
import map_5 from '@assets/images/maps/map_5.jpg';
import map_6 from '@assets/images/maps/map_6.jpg';
import map_7 from '@assets/images/maps/map_7.jpg';
import map_8 from '@assets/images/maps/map_8.jpg';
import map_9 from '@assets/images/maps/map_9.jpg';
import map_10 from '@assets/images/maps/map_10.jpg';
import map_11 from '@assets/images/maps/map_11.jpg';
import map_12 from '@assets/images/maps/map_12.jpg';
import map_13 from '@assets/images/maps/map_13.jpg';
import map_14 from '@assets/images/maps/map_14.jpg';
import map_15 from '@assets/images/maps/map_15.jpg';
import map_16 from '@assets/images/maps/map_16.jpg';
import map_17 from '@assets/images/maps/map_17.jpg';
import map_18 from '@assets/images/maps/map_18.jpg';

export type Greeter = {
  id: number;
  name: string;
  year: number | null;
  province: Province;
  video: any;
  map: any;
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

export const Greeters: Greeter[] = [
  {
    id: 0,
    name: 'Agnes Dauz Cadlaon',
    year: 1981,
    province: Province.pangasinan,
    video: greeting_1,
    map: map_1,
  },

  {
    id: 1,
    name: 'Alice Pinky Ramirez Oreas',
    year: 1987,
    province: Province.pangasinan,
    video: greeting_2,
    map: map_2,
  },

  {
    id: 2,
    name: 'Araceli Gorospe Lambinicio',
    year: 1961,
    province: Province.pampanga,
    video: greeting_3,
    map: map_3,
  },

  {
    id: 3,
    name: 'Brenda Faye Reyes DePano',
    year: 1983,
    province: Province.nuevaEcija,
    video: greeting_4,
    map: map_4,
  },

  {
    id: 4,
    name: 'Crispina Estaris',
    year: 1954,
    province: Province.cagayan,
    video: greeting_5,
    map: map_5,
  },

  {
    id: 5,
    name: 'Edna Soriano Santos',
    year: 1959,
    province: Province.manila,
    video: greeting_6,
    map: map_6,
  },

  {
    id: 6,
    name: 'Eunice Bautista Laureano',
    year: 1955,
    province: Province.bataan,
    video: greeting_7,
    map: map_7,
  },

  {
    id: 7,
    name: 'Fe Isabel Cruz Gorospe',
    year: 1957,
    province: Province.manila,
    video: greeting_8,
    map: map_8,
  },

  {
    id: 8,
    name: 'Helen Rabina Sicat',
    year: null,
    province: Province.tarlac,
    video: greeting_9,
    map: map_9,
  },

  {
    id: 9,
    name: 'Lila Valencia Lusung',
    year: 1952,
    province: Province.tarlac,
    video: greeting_10,
    map: map_10,
  },

  {
    id: 10,
    name: 'Noemi Bagasin Villanueva',
    year: 1983,
    province: Province.cagayan,
    video: greeting_11,
    map: map_11,
  },

  {
    id: 11,
    name: 'Olive Asis Dugay',
    year: 1981,
    province: Province.nuevaVizcaya,
    video: greeting_12,
    map: map_12,
  },

  {
    id: 12,
    name: 'Pacita Gomintong DelAmen',
    year: 1967,
    province: Province.llocosSur,
    video: greeting_13,
    map: map_13,
  },

  {
    id: 13,
    name: 'Rosario Nicolas Pangilinan',
    year: 1963,
    province: Province.bulacan,
    video: greeting_14,
    map: map_14,
  },

  {
    id: 14,
    name: 'Fabiola Sanchez Carreon',
    year: 1973,
    province: Province.pampanga,
    video: greeting_15,
    map: map_15,
  },

  {
    id: 15,
    name: 'Cecil Bucud Arceo',
    year: 1996,
    province: Province.pampanga,
    video: greeting_16,
    map: map_16,
  },

  {
    id: 16,
    name: 'Erlinda Villanueva Pastrana',
    year: 1961,
    province: Province.camarinesSur,
    video: greeting_17,
    map: map_17,
  },

  {
    id: 17,
    name: 'Perla Cunanan Baker',
    year: 1971,
    province: Province.tarlac,
    video: greeting_18,
    map: map_18,
  },
];
