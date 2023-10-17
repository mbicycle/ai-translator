import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//import TranslationService from './services/TranslationService';

//const OPENAI_KEY = process.env.VUE_APP_OPENAI_KEY;
//const openai = new OpenAI({ apiKey: OPENAI_KEY, dangerouslyAllowBrowser: true });

const app = createApp(App);

//app.provide("translationService", new TranslationService(openai));

app.mount('#app')
