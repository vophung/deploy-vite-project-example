import '../bootstrap';

import { createApp } from 'vue';
import SuspenseApp from '../components/Suspense/ArticlePost.vue';

const app = createApp(SuspenseApp);

app.mount('#app');