<template>
  <div class="firstTest">
    <h1>Message => {{ message }}</h1>
    <ul>
      <li v-for="(name, key) in names" :key="key" :title="name">
        {{ name }}
      </li>
    </ul>
    Function => {{ sayHello("Haziq") }} Compute=> {{ sayCompute }}
  </div>
</template>

<script>
export default {
  name: "FirstTest",
  data() {
    return {
      names: ["Hassan", "Taha", "Ali", "Uzair"],
      message: "First Test Local Component",
      firstName: "Haziq",
      desg: "Developer"
    };
  },
  methods: {
    sayHello(name) {
      return "Hello " + name;
    }
  },
  computed: {
    sayCompute() {
      return this.firstName;
    }
  }
};
</script>
<style scoped>
h1 {
  color: blue;
}
ul > li {
  list-style: none;
  color: "yellow";
}
</style>
