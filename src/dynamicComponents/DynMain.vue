<template>
  <div>
    <keep-alive>
      <component v-if="formName" :is="DynStudentForm"></component>
      <component v-else :is="DynEmployeeForm"></component>
    </keep-alive>
    <!-- <DynEmployeeForm /> -->
    <!-- <DynStudentForm /> -->
    <button type="button" @click="changeForm(formName)">
      Change Form Toggle
    </button>
    <button type="button" @click="changeForm(false)">
      Student Form
    </button>
    <button type="button" @click="changeForm(true)">
      Employee Form
    </button>
  </div>
</template>
<script>
import DynStudentForm from "./DynStudentForm";
import DynEmployeeForm from "./DynEmployeeForm";
export default {
  components: {
    DynStudentForm,
    DynEmployeeForm
  },
  name: "DynMain",
  data() {
    return {
      DynStudentForm: "DynStudentForm",
      DynEmployeeForm: "DynEmployeeForm",
      formName: true
    };
  },
  methods: {
    changeForm(val) {
      this.formName = !val;
    }
  }
};
</script>
