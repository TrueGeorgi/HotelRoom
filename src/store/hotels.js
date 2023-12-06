import { defineStore } from "pinia"

export const useHotels = defineStore('registeredHotels', {
  state: () => ({
    allHotels: [{
        name: 'Radisson Pink Hotel London',
        raiting: 8.0,
        votes: 1031,
        city: 'London',
        country: 'UK',
        price: 134,
        img: "https://www.hotel-frankenland.de/de/photos/crop__338945_t1__1920.jpg",
        //id: 1
      },
      {
        name: 'Motel Two London',
        raiting: 8.5,
        votes: 366,
        city: 'London',
        country: 'UK',
        price: 111,
        img: "https://all.accor.com/middleware/images/1385747632498/1681988911601/so-text-with-image-600x500-low.jpg",
        //id: 2
      },
      {
        name: 'Milton London',
        raiting: 7.9,
        votes: 1410,
        city: 'London',
        country: 'UK',
        price: 194,
        img: "https://assets.hrewards.com/assets/SHR_Hamburg_rooms_Standard_King_1_d5356d0cd0.jpg",
        //id: 3
      },
      {
        name: 'London Marrionn Hotel',
        raiting: 9.0,
        votes: 793,
        city: 'London',
        country: 'UK',
        price: 143,
        img: "https://static.leonardo-hotels.com/image/rcdbl_lhk_01_okt19_4000x2600_6fff045ef02ca4fd3b18bd7ec484c068_2048x1331_desktop_2.jpeg",
        //id: 4
      },
      {
        name: 'Jupiter Hotel London Trafalgar',
        raiting: 8.4,
        votes: 1879,
        city: 'London',
        country: 'UK',
        price: 161,
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/87951681.jpg?k=518627dbfe45c1b118dd5f5c19558cfa8990f10f90a385a276167ccb137dd287&o=&hp=1",
        //id: 5
      }, {
        name: 'Radisson Pink Hotel Paris',
        raiting: 6.5,
        votes: 536,
        city: 'Paris',
        country: 'France',
        price: 184,
        img: "https://www.welcome-hotels.com/site/assets/files/35059/welcome_hotel_marburg_lobby_2k.2560x1600.jpg",
        //id: 6
      },
      {
        name: 'Motel Two Paris',
        raiting: 8.5,
        votes: 366,
        city: 'Paris',
        country: 'France',
        price: 111,
        img: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg",
        //id: 7
      },
      {
        name: 'Milton Paris',
        raiting: 7.9,
        votes: 1410,
        city: 'Paris',
        country: 'France',
        price: 194,
        img: "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
        //id: 8
      },
      {
        name: 'Paris Marrionn Hotel',
        raiting: 9.0,
        votes: 793,
        city: 'Paris',
        country: 'France',
        price: 143,
        img: "https://www.newworldhotels.com/wp-content/uploads/2014/05/Mobile-NWHBR-Exterior.jpg",
        //id: 9
      },
      {
        name: 'Jupiter Hotel Paris',
        raiting: 8.4,
        votes: 1879,
        city: 'Paris',
        country: 'France',
        price: 161,
        img: "https://www.ahstatic.com/photos/c096_ho_00_p_1024x768.jpg",
        //id: 10
      },
      {
        name: 'Radisson Pink Hotel Berlin',
        raiting: 8.0,
        votes: 1031,
        city: 'Berlin',
        country: 'Germany',
        price: 134,
        img: "https://img.freepik.com/vektoren-kostenlos/flache-hotelfassade-hintergrund_23-2148157379.jpg?w=2000",
        //id: 11
      },
      {
        name: 'Motel Two Berlin',
        raiting: 8.5,
        votes: 366,
        city: 'Berlin',
        country: 'Germany',
        price: 111,
        img: "https://mauritius-ht.de/wp-content/uploads/2021/05/Hotel_Zimmer_Mauritius.jpg",
        //id: 12
      },
      {
        name: 'Milton Berlin',
        raiting: 7.9,
        votes: 1410,
        city: 'Berlin',
        country: 'Germany',
        price: 194,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvvNGkglFaJ1eGiEmNdyX5YVrgeQ2dhyJv5BFmb5JuZy3HEMEvRcDwKFoXCuuOn8KOpk&usqp=CAU",
        //id: 13
      },
      {
        name: 'Berlin Marrionn Hotel',
        raiting: 9.0,
        votes: 793,
        city: 'Berlin',
        country: 'Germany',
        price: 143,
        img: "https://cdn5.site-media.eu/images/1200x630/6054406/CHDMoog_Maerz2012_Zuschnitt_Business.jpg",
        //id: 14
      },
      {
        name: 'Jupiter Hotel Berlin',
        raiting: 8.4,
        votes: 1879,
        city: 'Berlin',
        country: 'Germany',
        price: 161,
        img: "https://cf.bstatic.com/xdata/images/hotel/max500/461646933.jpg?k=b90e3488ca35d4fa1b0f69027df76d21a63c0523aa5fc4fd60f27912f7ca8ec3&o=",
        //id: 15
      }, {
        name: 'Radisson Pink Hotel Sofia',
        raiting: 8.0,
        votes: 1031,
        city: 'Sofia',
        country: 'Bulgaria',
        price: 134,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNf9bhqTMHGdNcb3WqPaqgmfQc9NmA1oBYg&usqp=CAU",
        //id: 16
      },
      {
        name: 'Motel Two Sofia',
        raiting: 8.5,
        votes: 366,
        city: 'Sofia',
        country: 'Bulgaria',
        price: 111,
        img: "https://lindnerhotels.com/fileadmin/_processed_/3/7/csm_HHNJN_2_Twin_Beds_eba9961492.jpg",
        //id: 17
      },
      {
        name: 'Milton Sofia',
        raiting: 7.9,
        votes: 1410,
        city: 'Sofia',
        country: 'Bulgaria',
        price: 194,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc9bj8sf_9Ho4sBimEw-gOvDwNjrBcDZiSw&usqp=CAU",
        //id: 18
      },
      {
        name: 'Sofia Marrionn Hotel',
        raiting: 9.0,
        votes: 793,
        city: 'Sofia',
        country: 'Bulgaria',
        price: 143,
        img: "https://amazingarchitecture.com/storage/4192/hotel-interior-design-zikzak-architects.jpg",
        //id: 19
      },
      {
        name: 'Jupiter Hotel Sofia',
        raiting: 8.4,
        votes: 1879,
        city: 'Sofia',
        country: 'Bulgaria',
        price: 161,
        img: "https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlhkg-langham-hong-kongopti:Medium?wid=675&hei=380",
        //id: 20
      }, 
      {
        name: 'Radisson Pink Hotel Athens',
        raiting: 8.0,
        votes: 1031,
        city: 'Athens',
        country: 'Greece',
        price: 134,
        img: "https://www.hotel-juwel.de/wp-content/uploads/2023/01/hotel-bad-fuessing-m.jpg",
        //id: 21
      },
      {
        name: 'Motel Two Athens',
        raiting: 8.5,
        votes: 366,
        city: 'Athens',
        country: 'Greece',
        price: 111,
        img: "https://www.maritim.de/fileadmin/_processed_/4/2/csm_ING_047_Superior_8e76aeb6d2.jpg",
        //id: 22
      },
      {
        name: 'Milton Athens',
        raiting: 7.9,
        votes: 1410,
        city: 'Athens',
        country: 'Greece',
        price: 194,
        img: "https://www.the-weinmeister.com/wp-content/uploads/2023/02/medium-room_startseite_mobile-uai-1024x520.jpg",
        //id: 23
      },
      {
        name: 'Athens Marrionn Hotel',
        raiting: 9.0,
        votes: 793,
        city: 'Athens',
        country: 'Greece',
        price: 143,
        img: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/F/0/%7BAF092C0F-E7AD-4B8D-A450-ABEF73413B1E%7D2023_THKL_Homepage-Room.jpg?width=750&height=752&mode=crop&quality=100&scale=both",
        //id: 24
      },
      {
        name: 'Jupiter Hotel Athens',
        raiting: 8.4,
        votes: 1879,
        city: 'Athens',
        country: 'Greece',
        price: 161,
        img: "https://s7d1.scene7.com/is/image/marriotts7prod/mc-brudt-junior-suite-6-15072:Classic-Hor?wid=1336&fit=constrain",
        //id: 25
      }],
  }),
  getters: {
    numberOfRegisteredHotels(state) {
      return state.allHotels.length;
    },
  },

  actions: {
    isExisting(hotelName) {
      let alreadyExist = false

      this.allHotels.forEach((hotel) => {
        if (hotel.name === hotelName) {
          alreadyExist = true;
        }
      })

      return alreadyExist
    },
    addHotelsFromFirebase(hotelsArray) {
      hotelsArray.forEach((firebaseHotel) => {
        if(!this.isExisting(firebaseHotel.data().name)) {
          const newHotel = {
            name: firebaseHotel.data().name,
            raiting: firebaseHotel.data().raiting,
            votes: firebaseHotel.data().votes,
            city: firebaseHotel.data().city,
            country: firebaseHotel.data().country,
            price: firebaseHotel.data().price,
            img: firebaseHotel.data().img,
            facilities: firebaseHotel.data().facilities
          }
          this.allHotels.push(newHotel)
        }
      })
    }
  },
  });