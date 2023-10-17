import { InjectionKey } from "vue";
import TranslationService from "./services/TranslationService";

export const TRANSLATION_SERVICE_KEY: InjectionKey<TranslationService> = Symbol('TRANSLATION_SERVICE');