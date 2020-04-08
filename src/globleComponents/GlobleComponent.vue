<template>
  <div class="globalCOmponent">
    <h1>Globle Component</h1>
    <h1>{{ sayCompute }}</h1>
    <ul>
      <li v-for="(name, key) in names" :key="key" :title="name">
        {{ name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "GlobleComponent",
  data() {
    return {
      names: ["Hassan", "Taha", "Ali", "Uzair"],
      message: "First Test Coponent Create",
      firstName: "Haziq",
      desg: "Develop"
    };
  },
  computed: {
    sayCompute() {
      return this.desg + " By " + this.firstName;
    }
  }
};
</script>
<style scoped>
h1 {
  color: yellow;
}
ul > li {
  list-style: none;
}
</style>
