<template>
  <div>
    <childSlot>
      <h1>Pass tags from parent to Child</h1>
      <h2 slot="formHeader">
        Sign Up (pass tags to child using (slot='formHeader'))
      </h2>
    </childSlot>
  </div>
</template>

<script>
import childSlot from "./childSlot";
export default {
  components: {
    childSlot
  },
  name: "parentSlot",
  data() {
    return {
      message: "Parent Message"
    };
  }
};
</script>
