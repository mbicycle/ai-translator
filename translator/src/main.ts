import { createApp, inject, provide } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import OpenAI from 'openai';
import TranslationService from './services/TranslationService';
import { TRANSLATION_SERVICE_KEY } from './injectionSymbols';

const OPENAI_KEY = process.env.VUE_APP_OPENAI_KEY;
const openai = new OpenAI({ apiKey: OPENAI_KEY, dangerouslyAllowBrowser: true });

const app = createApp(App);

// Register TranslationService application scoped.
app.provide(TRANSLATION_SERVICE_KEY, new TranslationService(openai));

app.mount('#app')
