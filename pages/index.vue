<template>
  <div>
    <Intro :text="text" :desc="desc"></Intro>
    <Content :posts="posts"></Content>

    <div class="content" style="padding-top: 0;">
      <div class="container">
        <div class="page">
          <div class="page-prev">
            <a :href="prevPage" v-if="page > 1">PREV PAGE</a>
          </div>
          <div class="page-next">
            <a :href="nextPage" v-if="posts.length === 6">NEXT PAGE</a>
          </div>
        </div>
      </div>
    </div>
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
  async asyncData({ $axios, query }) {
    const page = query.page || 1;
    const posts = await $axios.get(
      `${process.env.api}/posts?page=${page}&number=6`
    );
    const sites = await $axios.get(process.env.api);

    return {
      posts: posts.data.posts,
      page,
      text: sites.data.name,
      desc: sites.data.description
    };
  },
  computed: {
    nextPage() {
      return `?page=${parseInt(this.page) + 1}`;
    },
    prevPage() {
      return `?page=${parseInt(this.page) - 1}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  display: inline-block;
  font-size: 0;
  width: 100%;

  a {
    display: inline-block;
    border: 2px solid #999;
    color: #4b4b4b;
    font-size: 14px;
    padding: 10px 26px 6px;
    transition: 0.2s;

    &:hover {
      border-color: black;
      background-color: black;
      color: white;
    }
  }

  &-next,
  &-prev {
    display: inline-block;
    width: 50%;
  }

  &-next {
    text-align: right;
  }
}
</style>