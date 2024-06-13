import { createApp } from 'vue';
import { createPinia} from 'pinia';
import App from './App.vue';
// import BaseCard from './components/UI/BaseCard.vue';
const pinia=createPinia();

// app.component('base-card',BaseCard);
createApp(App).use(pinia).mount('#app')
