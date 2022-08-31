import '../bootstrap';

import { createApp } from 'vue';
import SlotApp from '../components/Slot/Slot-App.vue';

const app = createApp(SlotApp);

app.mount('#app');