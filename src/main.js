import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Layout from './components/Layout/Layout.vue';

// CSS
import './assets/dist/css/adminlte.min.css';
import './assets/dist/css/test.css';
import './assets/plugins/fontawesome-free/css/all.min.css';

// JS
// jQuery
import './assets/plugins/jquery/jquery.min.js';
// Bootstrap 4
import './assets/plugins/bootstrap/js/bootstrap.bundle.min.js';
// AdminLTE App
import './assets/dist/js/adminlte.min.js';

const app = createApp(App)

app.component('Layout', Layout);

app.use(router)

app.mount('#app')
