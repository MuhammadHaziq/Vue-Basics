<template>
  <div>
    {{ message }}
    <button type="button" @click="changeMsg">Child Change Message</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    message: {
      type: String
    }
  },
  methods: {
    changeMsg() {
      this.$emit("changeMsgChild", "Msg Change Using Child Button ");
    }
  }
};
</script>
