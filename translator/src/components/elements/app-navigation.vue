<template>
  <ul class="d-flex justify-content-around fs-4 fw-bold w-25">
    <li><a href="#">Translate</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
</template>

<script>
export default {
  name: "app-navigation"
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
}

li a {
  color: #289860;
  text-decoration: none;
}

li a:hover {
  color: #a9fdd0;
}
</style>
