import { defineStore } from "pinia";

export const useHotels = defineStore('registeredHotels', {
  state: () => ({
    allHotels: [{
        name: 'Radisson Pink Hotel London',
        raiting: 8.0,
        votes: 1031,
        city: 'London',
        country: 'UK',
        price: 134,
        img: "src/assets/images/Radisson-Pink-Hotel-London.jpg",
        id: 1
      },
      {
        name: 'Motel Two London',
        raiting: 8.5,
        votes: 366,
        city: 'London',
        country: 'UK',
        price: 111,
        img: "src/assets/images/Motel-Two-London.jpg",
        id: 2
      },
      {
        name: 'Milton London',
        raiting: 7.9,
        votes: 1410,
        city: 'London',
        country: 'UK',
        price: 194,
        img: "src/assets/images/Milton-London.jpg",
        id: 3
      },
      {
        name: 'London Marrionn Hotel',
        raiting: 9.0,
        votes: 793,
        city: 'London',
        country: 'UK',
        price: 143,
        img: "src/assets/images/London-Marrionn-Hotel.jpg",
        id: 4
      },
      {
        name: 'Jupiter Hotel London Trafalgar',
        raiting: 8.4,
        votes: 1879,
        city: 'London',
        country: 'UK',
        price: 161,
        img: "src/assets/images/Jupiter-Hotel-London-Trafalgar.jpg",
        id: 5
      }, {
        name: 'Radisson Pink Hotel Paris',
        raiting: 6.5,
        votes: 536,
        city: 'Paris',
        country: 'France',
        price: 184,
        img: "src/assets/images/Radisson-Pink-Hotel-Paris.jpg",
        id: 6
      },
      {
        name: 'Motel Two Paris',
        raiting: 8.5,
        votes: 366,
        city: 'Paris',
        country: 'France',
        price: 111,
        img: "src/assets/images/Motel-Two-Paris.jpg",
        id: 7
      },
      {
        name: 'Milton Paris',
        raiting: 7.9,
        votes: 1410,
        city: 'Paris',
        country: 'France',
        price: 194,
        img: "src/assets/images/Milton-Paris.jpg",
        id: 8
      },
      {
        name: 'Paris Marrionn Hotel',
        raiting: 9.0,
        votes: 793,
        city: 'Paris',
        country: 'France',
        price: 143,
        img: "src/assets/images/Paris-Marrionn-Hotel.jpg",
        id: 9
      },
      {
        name: 'Jupiter Hotel Paris',
        raiting: 8.4,
        votes: 1879,
        city: 'Paris',
        country: 'France',
        price: 161,
        img: "src/assets/images/Jupiter-Hotel-Paris.jpg",
        id: 10
      },
      {
        name: 'Radisson Pink Hotel Berlin',
        raiting: 8.0,
        votes: 1031,
        city: 'Berlin',
        country: 'Germany',
        price: 134,
        img: "src/assets/images/Radisson-Pink-Hotel-Berlin.jpg",
        id: 11
      },
      {
        name: 'Motel Two Berlin',
        raiting: 8.5,
        votes: 366,
        city: 'Berlin',
        country: 'Germany',
        price: 111,
        img: "src/assets/images/Motel-Two-Berlin.jpg",
        id: 12
      },
      {
        name: 'Milton Berlin',
        raiting: 7.9,
        votes: 1410,
        city: 'Berlin',
        country: 'Germany',
        price: 194,
        img: "src/assets/images/Milton-Berlin.jpg",
        id: 13
      },
      {
        name: 'Berlin Marrionn Hotel',
        raiting: 9.0,
        votes: 793,
        city: 'Berlin',
        country: 'Germany',
        price: 143,
        img: "src/assets/images/Berlin-Marrionn-Hotel.jpg",
        id: 14
      },
      {
        name: 'Jupiter Hotel Berlin',
        raiting: 8.4,
        votes: 1879,
        city: 'Berlin',
        country: 'Germany',
        price: 161,
        img: "src/assets/images/Jupiter-Hotel-Berlin.jpg",
        id: 15
      }, {
        name: 'Radisson Pink Hotel Sofia',
        raiting: 8.0,
        votes: 1031,
        city: 'Sofia',
        country: 'Bulgaria',
        price: 134,
        img: "src/assets/images/Radisson-Pink-Hotel-Sofia.jpg",
        id: 16
      },
      {
        name: 'Motel Two Sofia',
        raiting: 8.5,
        votes: 366,
        city: 'Sofia',
        country: 'Bulgaria',
        price: 111,
        img: "src/assets/images/Motel-Two-Sofia.jpg",
        id: 17
      },
      {
        name: 'Milton Sofia',
        raiting: 7.9,
        votes: 1410,
        city: 'Sofia',
        country: 'Bulgaria',
        price: 194,
        img: "src/assets/images/Milton-Sofia.jpg",
        id: 18
      },
      {
        name: 'Sofia Marrionn Hotel',
        raiting: 9.0,
        votes: 793,
        city: 'Sofia',
        country: 'Bulgaria',
        price: 143,
        img: "src/assets/images/Sofia-Marrionn-Hotel.jpg",
        id: 19
      },
      {
        name: 'Jupiter Hotel Sofia',
        raiting: 8.4,
        votes: 1879,
        city: 'Sofia',
        country: 'Bulgaria',
        price: 161,
        img: "src/assets/images/Jupiter-Hotel-Sofia.jpg",
        id: 20
      }, {
        name: 'Radisson Pink Hotel Athens',
        raiting: 8.0,
        votes: 1031,
        city: 'Athens',
        country: 'Greece',
        price: 134,
        img: "src/assets/images/Radisson-Pink-Hotel-Athens.jpg",
        id: 21
      },
      {
        name: 'Motel Two Athens',
        raiting: 8.5,
        votes: 366,
        city: 'Athens',
        country: 'Greece',
        price: 111,
        img: "src/assets/images/Motel-Two-Athens.jpg",
        id: 22
      },
      {
        name: 'Milton Athens',
        raiting: 7.9,
        votes: 1410,
        city: 'Athens',
        country: 'Greece',
        price: 194,
        img: "src/assets/images/Milton-Athens.jpg",
        id: 23
      },
      {
        name: 'Athens Marrionn Hotel',
        raiting: 9.0,
        votes: 793,
        city: 'Athens',
        country: 'Greece',
        price: 143,
        img: "src/assets/images/Athens-Marrionn-Hotel.jpg",
        id: 24
      },
      {
        name: 'Jupiter Hotel Athens',
        raiting: 8.4,
        votes: 1879,
        city: 'Athens',
        country: 'Greece',
        price: 161,
        img: "src/assets/images/Jupiter-Hotel-Athens.jpg",
        id: 25
      }],
  }),
  getters: {
    numberOfRegisteredHotels(state) {
      return state.allHotels.length;
    }
  },
});