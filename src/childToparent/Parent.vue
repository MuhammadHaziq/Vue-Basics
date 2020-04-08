<template>
  <div>
    <Child :message="msg" @changeMsgChild="changeChild($event)" />
    <button type="button" @click="changeMsg">Parent Change Message</button>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  components: {
    Child: Child
  },
  name: "Parent",
  data() {
    return {
      msg: "Msg Display From Parent"
    };
  },
  methods: {
    changeMsg() {
      this.msg = "Message Change From Parent Button";
    },
    changeChild(event) {
      this.msg = event;
    }
  }
};
</script>
