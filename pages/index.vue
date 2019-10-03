<template>
  <div>
    <Intro></Intro>
    <Content :posts="posts"></Content>
  </div>
</template>

<script>
import Content from "~~/components/Contents.vue";
import Intro from "~~/components/Intro.vue";

export default {
  components: {
    Content,
    Intro
  },
  async asyncData({ $axios }) {
    let { data } = await $axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/imawrr27.wordpress.com/posts?page=1"
    );

    return { posts: data.posts };
  }
};
</script>
