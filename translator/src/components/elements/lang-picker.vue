<template>
  <div class="btn-group w-50">
    <button type="button"
            class="btn btn-success dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false">
      {{ langs[current_lang].name }}
    </button>
    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
      <li v-for="(lang, index) in langs" v-bind:key="index">
        <button
            class="dropdown-item"
            value="lang"
            v-on:click="pick(index)">
          {{ lang.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "lang-picker",
  emits: ['lang-changed'],
  props: {
    langs: [],
    current: Number
  },
  data() {
    return {
      current_lang: this.current
    }
  },
  methods: {
    pick: function (index) {
      this.current_lang = index;
      this.$emit('lang-changed', index)
    }
  }
}
</script>

<style scoped>
.dropdown-item:focus {
  background: #157347;
}
</style>
