<template>
  <footer>
    <p>{{ footer }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footer: "Footer of Vue Js"
    };
  }
};
</script>

<style scoped>
footer {
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
}
</style>
