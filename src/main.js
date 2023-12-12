import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/reset.css';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.component('fa', FontAwesomeIcon)
app.mount('#app');
