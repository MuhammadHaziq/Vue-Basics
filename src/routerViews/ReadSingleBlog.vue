<template>
  <div>
    <h1>Single Blog Post</h1>
    <div v-list="'narrow'">
      <h3 v-customFormat>{{ dataArray.title | doCapital | doSlice }}</h3>
      <p>{{ dataArray.body | blogBodyLength }}</p>
    </div>
  </div>
</template>
<script>
import mixins from "../formHttp/mixins";
export default {
  mixins: [mixins],
  name: "ReadSingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      dataArray: {}
    };
  },
  methods: {
    getListDetail() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts" + this.id)
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
