import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import Hotels from '../pages/Hotels.vue'
import ListProperty from '../pages/ListProperty.vue'
import MyBookings from '../pages/MyBookings.vue'
import LogIn from '../pages/LogIn.vue'
import ContactUs from '../pages/ContactUs.vue'
import SingleHotel from '../pages/SingleHotel.vue'
import NotFound from '../pages/NotFound.vue'
import SuccessfulSubmition from '../pages/SuccessfulSubmition.vue'
import Register from '../pages/Register.vue'
import Profile from '../pages/Profile.vue'

const routes = [
  {
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/hotels',
  component: Hotels
},
 {
  path: '/hotels/:id',
  name: 'hotel',
  component: SingleHotel
},
{
  path: '/list-property',
  component: ListProperty
},
{
  path: '/my-bookings',
  component: MyBookings
},
{
  path: '/log-in',
  component: LogIn
},
{
  path: '/contact-us',
  component: ContactUs
},
{ 
  path: '/:pathMatch(.*)*', 
  name: 'NotFound', 
  component: NotFound 
},
{
  path: '/successfulsubmition/:message',
  name: 'successfulSubmition',
  component: SuccessfulSubmition
},
{
  path: '/register',
  component: Register
},
{
  path: '/profile',
  component: Profile
},
{
  path: '/HotelRoom',
  redirect: '/',
},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;