<template>
  <div class="d-flex flex-column h-100">
    <!-- HEADER -->
    <div class="d-flex align-items-center justify-content-center h-25">
      <app-navigation/>
    </div>

    <!-- BODY -->
    <div class="flex-grow-1 d-flex justify-content-center">
      <div class="w-50 m-3">
        <lang-picker
            class="mb-2"
            :langs="langs"
            :current="sourceLang"
            @lang-changed="changeSourceLang"/>
        <source-input @input="sourceTextChanged"/>
      </div>
      <div class="w-50 m-3">
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
import { inject } from 'vue';
import SourceInput from "@/components/translation/source-input.vue";
import TargetInput from "@/components/translation/target-input.vue";
import LangPicker from "@/components/elements/lang-picker.vue";
import AppNavigation from "@/components/elements/app-navigation.vue";
import { TRANSLATION_SERVICE_KEY } from '@/injectionSymbols';

export default {
  name: 'translate-panel',
  components: {
    AppNavigation,
    TargetInput,
    SourceInput,
    LangPicker,
  },
  setup() {
    const translationService = inject(TRANSLATION_SERVICE_KEY);

    return { translationService };
  },
  data() {
    return {
      langs: [
        { name: "English", code: "en" },
        { name: "Русский", code: "ru" },
        { name: "Беларуская", code: "be" },
        { name: "Українська", code: "uk" },
        { name: "Polski", code: "pl" },
        { name: "Deutsche", code: "de" },
      ],
      sourceLang: 0,
      targetLang: 1,
      originText: '',
      translation: ''
    }
  },
  methods: {
    changeSourceLang: function(index) {
      this.sourceLang = index;
      this.translate();
    },
    changeTargetLang: function(index) {
      this.targetLang = index;
      this.translate();
    },
    sourceTextChanged: function(text) {
      this.originText = text;
      this.translate();
    },
    translate: async function() {
      let source = this.langs[this.sourceLang];
      let target = this.langs[this.targetLang];
      if (this.originText === '') {
        this.translation = '';
      }
      else {
        this.translation = await this.translationService.translate(this.originText, source.code, target.code); 
      }
    }
  }
}
</script>
