<template>
  <text-input
      placeholder="Input any text..."
      @input="inputText">
  </text-input>
</template>

<script>
import TextInput from "@/components/elements/text-input.vue";

export default {
  name: "source-input",
  components: { TextInput },
  emits: ['input'],
  data() {
    return {
      delay: 800,
      timer: null
    }
  },
  methods: {
    inputText: function(text) {
      clearTimeout(this.timer);
      this.timer = setTimeout(
          () => this.$emit('input', text),
          this.delay);
    }
  }
}
</script>
