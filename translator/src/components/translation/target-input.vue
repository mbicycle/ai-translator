<template>
  <text-input
      placeholder="Translation"
      @input="inputText"
      :value="value"
      blocked>
  </text-input>
</template>

<script>
import TextInput from "@/components/elements/text-input.vue";

export default {
  name: "target-input",
  components: { TextInput },
  props: {
    value: String
  },
  methods: {
    inputText() { }
  }
}
</script>

<style scoped>
</style>
