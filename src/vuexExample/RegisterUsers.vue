<template>
  <div>
    <h1>Register View {{ totalRegister }}</h1>
    <div v-for="(register, index) in registerUsers" :key="index">
      <p>Name {{ register.name }} , Email {{ register.email }}</p>
      <button type="button" @click="unRegister(register)">Unregister</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "RegisterUsers",
  methods: {
    //  use action dispatch method
    // dispatch('actionName', any param)
    unRegister(user) {
      return this.$store.dispatch("unRegister", user);
    }
    //  use mutations method to class this methods

    // unRegister(user) {
    //   this.$store.commit({
    //     type: "unRegister",
    //     userId: user.userId
    //   });
    // }
    // unRegister(user) {
    //   return this.$store.state.unRegisterUsers.push({
    //     userId: user.userId,
    //     name: user.name,
    //     registerd: true
    //   });
    // }
  },
  computed: {
    // ?can be written as it
    ...mapGetters({
      registerUsers: "getRegisterUsers",
      totalRegister: "totalRegisters"
    })

    // //  Practice Getter Method
    // registerUsers() {
    //   return this.$store.getters.getRegisterUsers;
    //   // return this.$store.state.users;
    // },
    // totalRegister() {
    //   return this.$store.getters.totalRegisters;
    // }
  }
};
</script>
