import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/index.css'

// Import the library
import 'img-comparison-slider';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.ignoredElements = [/img-comparison-slider/];

app.mount('#app')
