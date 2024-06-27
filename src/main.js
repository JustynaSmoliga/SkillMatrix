import { createApp } from 'vue';
import { createPinia} from 'pinia';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import ModalWindow from './components/UI/ModalWindow.vue';
const pinia=createPinia();
const app=createApp(App);

app.component('BaseCard',BaseCard).component('BaseButton',BaseButton).component('ModalWindow',ModalWindow);
app.use(pinia).mount('#app')

