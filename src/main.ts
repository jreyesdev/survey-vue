import { createApp } from 'vue';
import App from './App.vue';
import { key, store } from './store';
import router from './router';
import './index.css';

createApp(App).use(store, key).use(router).mount('#app');
