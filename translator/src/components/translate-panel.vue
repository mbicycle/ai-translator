<template>
  <div class="d-flex flex-column h-100">
    <!-- HEADER -->
    <div class="d-flex align-items-center justify-content-center h-25">
      <app-navigation/>
    </div>

    <!-- BODY -->
    <div class="flex-grow-1 d-flex justify-content-center">
      <div class="w-25 m-3">
        <lang-picker
            class="mb-2"
            :langs="langs"
            :current="sourceLang"
            @lang-changed="changeSourceLang"/>
        <source-input @input="translate"/>
      </div>
      <div class="w-25 m-3">
        <lang-picker
            class="mb-2"
            :langs="langs"
            :current="targetLang"
            @lang-changed="changeTargetLang"/>
        <target-input :value="translation"/>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="h-25"></div>
  </div>
</template>

<script>
import SourceInput from "@/components/translation/source-input.vue";
import TargetInput from "@/components/translation/target-input.vue";
import LangPicker from "@/components/elements/lang-picker.vue";
import AppNavigation from "@/components/elements/app-navigation.vue";
import TranslationService from "@/services/TranslationService.ts";

const translationService = new TranslationService();

export default {
  name: 'translate-panel',
  components: {
    AppNavigation,
    TargetInput,
    SourceInput,
    LangPicker,
  },
  data() {
    return {
      langs: [
        { name: "English", code: "en" },
        { name: "Deutsche", code: "de" },
        { name: "Polski", code: "pl" },
        { name: "Українська", code: "uk" },
        { name: "Беларуская", code: "be" },
        { name: "Русский", code: "ru" }
      ],
      sourceLang: 0,
      targetLang: 1,
      translation: ''
    }
  },
  methods: {
    changeSourceLang: function(index) {
      this.sourceLang = index;
    },
    changeTargetLang: function(index) {
      this.targetLang = index;
    },
    translate: async function (text) {
      let source = this.langs[this.sourceLang];
      let target = this.langs[this.targetLang];
      if (text === '') {
        this.translation = '';
      }
      else {
        this.translation = translationService.translate(text, source.code, target.code); 
      }
    }
  }
}
</script>
