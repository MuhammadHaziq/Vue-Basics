<template>
  <div>
    <h1>Not Register View {{ totalUnRegister }}</h1>
    <div v-for="(notRegister, index) in notregisterUsers" :key="index">
      <p>Name {{ notRegister.name }} , Email {{ notRegister.email }}</p>
      <button type="button" @click="Register(notRegister)">Register</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotRegister",
  methods: {
    //  use action dispatch method
    // dispatch('actionName', any param)
    Register(user) {
      return this.$store.dispatch("Register", user);
    }
    //  use mutations method to class this methods
    // Register(user) {
    //   this.$store.commit({
    //     type: "Register",
    //     userId: user.userId
    //   });
    // }
    // Register(user) {
    //   return this.$store.state.users.push({
    //     userId: user.userId,
    //     name: user.name,
    //     registerd: false
    //   });
    // }
  },
  computed: {
    //  Practice Getter Method
    notregisterUsers() {
      return this.$store.getters.notRegisterUsers;
      // return this.$store.state.unRegisterUsers;
    },
    totalUnRegister() {
      return this.$store.getters.totalNotRegister;
    }
  }
};
</script>
