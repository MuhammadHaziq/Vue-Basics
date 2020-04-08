<template>
  <div>
    <h2>HTML Forms</h2>

    <form method="post">
      <label for="fname">Title:</label><br />
      <input
        type="text"
        id="title"
        name="title"
        v-model.lazy="data.title"
      /><br />
      <label for="lname">Desc:</label><br />
      <textarea
        type="text"
        id="desc"
        name="desc"
        v-model.lazy="data.desc"
      /><br /><br />
      <input type="submit" value="Submit" @click.prevent="submitForm" />
    </form>
    <h1>Form Data</h1>
    <p>Title {{ data.title }}</p>
    <br />
    <p>Desc {{ data.desc }}</p>
    <ShowBlogs />
  </div>
</template>
<script>
import ShowBlogs from "./ShowBlogs";
export default {
  components: {
    ShowBlogs
  },
  name: "Form",
  data() {
    return {
      data: {
        title: "",
        desc: "",
        userId: 1
      }
    };
  },
  methods: {
    submitForm() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: {
            title: this.data.title,
            body: this.data.desc,
            userId: this.data.userId
          },
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
      alert(this.data.title);
    }
  }
};
</script>
