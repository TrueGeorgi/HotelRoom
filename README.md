# Hotel Room

A hotel booking website created as a final Project for the Vue.JS 3 course by https://softuni.bg/

Give the website a try: https://truegeorgi.github.io/

## Introduction

A hotel bookings website, where every registered user can :
1: See all the hotels on the website and sort them by country and city
2: Book a hotel for a certain period of time
3: List a new hotel on the platform
4: Delete booked hotels
5: See the total amount of all the bookings

If a user is not registered, he can only see the hotels, listed on the platform

## Project Structure

├── src/                    # Source code
│   ├── assets/             # Static assets
│   ├── components/         # Vue components
│   ├── firebase/           # Firebase integration
│   ├── pages/              # Vue views (pages)
│   ├── router/             # Vue router configuration
│   ├── store/              # Pinia store modules
│   ├── styles/             # styles (given with the main package at the start of the course)
│   └── App.vue             # Main Vue application component

## Installation

#### Clone the repository
git clone https://github.com/TrueGeorgi/HotelRoom

#### Navigate to the project directory
cd HotelRoom

#### Install dependencies
npm install

## Usage

#### Run the development server
npm run dev

## Dependencies

  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.5.1",
    "@fortawesome/free-solid-svg-icons": "^6.5.1",
    "@fortawesome/vue-fontawesome": "^3.0.0-5",
    "@vuelidate/core": "^2.0.3",
    "@vuelidate/validators": "^2.0.4",
    "axios": "^1.6.2",
    "firebase": "^10.7.0",
    "pinia": "^2.1.7",
    "vue": "^3.3.4",
    "vue-router": "^4.2.5"
  },
  "devDependencies": {
    "@antfu/eslint-config": "^1.0.0",
    "@vitejs/plugin-vue": "^4.2.3",
    "eslint": "^8.51.0",
    "vite": "^4.4.5",
    "vue-tsc": "^1.8.8"
  }
