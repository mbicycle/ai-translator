<template>
  <textarea
      class="form-control w-100 h-75 fs-3"
      type="text"
      :placeholder="placeholder"
      :disabled="blocked"
      :value="value"
      @input="inputText"></textarea>
</template>

<script>
export default {
  name: "text-input",
  emits: ['input'],
  props: {
    placeholder: String,
    blocked: Boolean,
    value: String
  },
  methods: {
    inputText: function(event) {
      let text = event.target.value;
      this.$emit('input', text);
    }
  }
}
</script>

<style scoped>
.form-control:focus {
  border-color: #41BA83;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 12px rgba(65,186,131, 0.9);
}
</style>
