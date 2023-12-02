import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import Hotels from '../pages/Hotels.vue'
import ListProperty from '../pages/ListProperty.vue'
import MyBookings from '../pages/MyBookings.vue'
import LogIn from '../pages/LogIn.vue'
import Jobs from '../pages/Jobs.vue'
import ContactUs from '../pages/ContactUs.vue'
import SingleHotel from '../pages/SingleHotel.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  {
  path: '/',
  name: 'home',
  component: Home
},{
  path: '/hotels',
  component: Hotels
},
 {
  path: '/hotels/:id',
  name: 'hotel',
  component: SingleHotel
  // -01:03:41 - този сегмент ще ми трябва, за да взема правилният хотел за букване по-късно.
  // Чилдрен са на -43:30
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
  path: '/jobs',
  component: Jobs
},
{
  path: '/contact-us',
  component: ContactUs
},
{ 
  path: '/:pathMatch(.*)*', 
  name: 'NotFound', 
  component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;