<template>
  <div>
    <button type="button" @click="setMessageTeacher">Teacher Click</button>
  </div>
</template>

<script>
import { EVENT_BUS } from "../main.js";
export default {
  name: "Teacher",
  methods: {
    setMessageTeacher() {
      EVENT_BUS.$emit(
        "messageEmitTeacher",
        "Message Come From Teacher To Student"
      );
    }
  }
};
</script>
