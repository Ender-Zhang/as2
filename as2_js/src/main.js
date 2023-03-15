// import { createApp } from 'vue';
// import App from './App.vue';

// createApp(App).mount('#app');


import { createApp } from 'vue';
import App from './App.vue';

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

const app = createApp(App);

app.use(BalmUI);
app.use(BalmUIPlus);

app.mount('#app');