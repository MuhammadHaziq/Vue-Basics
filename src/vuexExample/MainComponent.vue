<template>
  <div>
    <RegisterUsers />
    <NotRegister />
  </div>
</template>

<script>
import RegisterUsers from "./RegisterUsers";
import NotRegister from "./NotRegister";
export default {
  name: "MainComponent",
  components: {
    RegisterUsers,
    NotRegister
  }
};
</script>
