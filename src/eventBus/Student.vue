<template>
  <div>{{ msg }}</div>
</template>

<script>
import { EVENT_BUS } from "../main";
export default {
  name: "Student",
  data() {
    return {
      msg: "Message From Student"
    };
  },
  methods: {},
  mounted() {
    EVENT_BUS.$on("messageEmitTeacher", data => {
      this.msg = data;
    });
  }
};
</script>
