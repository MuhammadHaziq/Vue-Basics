<template>
  <div>
    <h1>Blog Post</h1>
    <div v-list="'narrow'">
      <div v-for="(blogs, index) in dataArray" :key="index">
        <h3 v-customFormat>{{ blogs.title | doCapital | doSlice }}</h3>
        <p>{{ blogs.body | blogBodyLength }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from "./mixins";
export default {
  mixins: [mixins],
  name: "ShowBlogs",
  data() {
    return {
      dataArray: []
    };
  },
  methods: {
    getListDetail() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          console.log(response.body);
          this.dataArray = response.body;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  filters: {
    doCapital(value) {
      return value.toUpperCase();
    }
  },
  mounted() {
    this.getListDetail();
  }
};
</script>
