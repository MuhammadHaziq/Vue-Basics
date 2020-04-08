<template>
  <div class="section">
    {{ name }} Full Name {{ fullName }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <button type="button" @click="getProps()">Get Prop Name</button>
    <ul>
      <li v-for="(name, key) in myNames" :key="key" :title="name">
        {{ name }}
      </li>
    </ul>
    <button type="button" @click="deleteUser">Reference Delete</button>
  </div>
</template>

<script>
export default {
  // use when we not want to validate the props
  // props: ["name", "myNames"],
  //  If we want to  validate the props then we have to check

  props: {
    name: {
      type: String,
      // it is required otherwise it give error
      required: true
    },
    myNames: {
      type: Array
    },
    fullName: {
      type: String,
      //  if we not pass full-name props then it dispaly this
      default: "No Name Pass As Props"
    }
  },
  name: "Section",

  methods: {
    getProps() {
      alert("name pass from props" + this.name);
    },
    deleteUser() {
      this.myNames.pop();
    }
  }
};
</script>
<style scoped>
ul > li {
  list-style: none;
  color: "yellow";
}
</style>
