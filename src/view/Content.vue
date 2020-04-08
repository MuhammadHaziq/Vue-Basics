<template>
  <div class="content">
    <Header />
    <Section name="Develop By Haziq" v-bind:myNames="names" full-name="Haziq" />

    <Footer />
  </div>
</template>
<script>
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";

export default {
  components: {
    Header: Header,
    Footer: Footer,
    Section: Section
  },
  name: "Content",
  data() {
    return {
      names: ["Hassan", "Taha", "Ali", "Uzair"],
      content: "Content Data"
    };
  }
};
</script>
