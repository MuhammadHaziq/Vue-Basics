<template>
  <div>
    <p>Dyn Student Component</p>

    <form>
      <p>
        <label>
          Stud Name:
        </label>
        <input type="text" name="dynStudentName" />
      </p>
      <p>
        <label>
          Stud Email:
        </label>
        <input type="text" name="dynStudentEmail" />
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name: "DynStudentForm"
};
</script>
