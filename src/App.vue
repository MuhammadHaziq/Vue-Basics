<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <GlobleComponent />
    <FirstTest /> -->
    <!-- <Content /> -->
    <!-- <Parent /> -->
    <!-- <Student />
    <Teacher /> -->
    <!-- <Manager />
    <Employee />
    {{ msg }}
    <button type="button" @click="updateFunction">Updat Text</button> -->
    <!-- <parentSlot /> -->
    <!-- <DynMain /> -->
    <!-- <Form /> -->
    <p>
      <router-link to="/"> Home</router-link>
      <router-link to="/about"> About</router-link>
      <router-link to="/content">Content</router-link>
      <router-link to="/showBlogs">Show Blogs</router-link>
      <router-link to="/storeActions">Store Action</router-link>
    </p>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import FirstTest from "./components/FirstTest.vue";
// import Content from "./view/Content";
// import Parent from "./childToparent/Parent";

// import Student from "./eventBus/Student";
// import Teacher from "./eventBus/Teacher";

// import Employee from "./componentHooks/Employee";
// import Manager from "./componentHooks/Manager";

// import parentSlot from "./slot/parentSlot";

// import DynMain from "./dynamicComponents/DynMain";

// import Form from "./formHttp/Form";
export default {
  name: "App",
  components: {
    // Form
    // DynMain
    // parentSlot
    // Employee,
    // Manager
    // Student,
    // Teacher
    // Parent
    // Content
    // FirstTest
    // HelloWorld
  },
  data() {
    return {
      msg: "App Message"
    };
  }
  // methods: {
  //   updateFunction() {
  //     this.msg = "Msg Update and Update Hook Calll";
  //   }
  // },
  // beforeCreate() {
  //   alert("Call Before Create");
  // },
  // created() {
  //   alert("Call When Created");
  // },
  // beforeMount() {
  //   alert("call Before Mount");
  // },
  // mounted() {
  //   alert("Call When Mounted");
  // },
  // beforeUpdate() {
  //   alert("Call Before Update");
  // },
  // updated() {
  //   alert("Call When Update");
  // },
  // destroyed() {
  //   alert("Call When Destroyed");
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
