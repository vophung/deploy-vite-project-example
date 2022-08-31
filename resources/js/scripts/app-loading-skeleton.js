import '../bootstrap';

import { createApp } from 'vue';
import AppSkeletonLoading from '../components/Skeleton-loading/App-Skeleton-Loading.vue';

const app = createApp(AppSkeletonLoading);

app.mount('#app');