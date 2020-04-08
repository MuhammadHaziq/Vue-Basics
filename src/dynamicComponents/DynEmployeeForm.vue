<template>
  <div>
    <p>Dyn Employee Component</p>

    <form>
      <p>
        <label>
          Emp Name:
        </label>
        <input type="text" name="dynEmployeeName" />
      </p>
      <p>
        <label>
          Emp Email:
        </label>
        <input type="text" name="dynEmployeeEmail" />
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name: "DynEmployeeForm"
};
</script>
