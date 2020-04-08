<template>
  <header>
    <h2>{{ header }}</h2>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      header: "Header of Vue Js"
    };
  }
};
</script>

<style scoped>
header {
  background-color: #666;
  /* padding: 30px; */
  text-align: center;
  font-size: 35px;
  color: white;
}
</style>
