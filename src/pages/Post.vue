<template>
  <div>
    <div class="post">
      <div class="post-container">
        <img class="post-featured" :src="featuredMedia" v-if="featuredMedia" width="100%">

        <div class="post-entry">
          <h1 class="post-title">{{title}}</h1>
          <div class="post-content" v-html="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "regenerator-runtime/runtime";
import axios from "axios";
import wrapper from "axios-cache-plugin-localstorage";
import { format } from "date-fns";

let http = axios.create({
  baseURL: "https://rahimah-muslihah.febryantara.preschian.com/wp-json/wp/v2/",
  withCredentials: false
});
let api = wrapper(http, {
  maxCacheSize: 15,
  local: true,
  localTTL: 24 * 60 * 60 * 1000
});

export default {
  data() {
    return {
      post: null,
      featuredMedia: null,
      title: "",
      content: ""
    };
  },
  async created() {
    await this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    async fetchData() {
      const post = (await api.get(
        `/posts?_embed&slug=${this.$route.params.slug}`
      )).data[0];

      const featuredMedia = post._embedded["wp:featuredmedia"];
      this.post = post;
      this.featuredMedia =
        (featuredMedia && featuredMedia[0].source_url) || null;
      this.title = post.title.rendered;
      this.content = post.content.rendered;
    }
  }
};
</script>

<style lang="scss">
.post {
  background-color: #f2f2f2;
  padding: 70px 0;

  &-container {
    background-color: white;
    max-width: 1170px;
    margin: 0 auto;
  }

  &-featured {
    display: block;
  }

  &-entry {
    padding: 0 245px;
  }

  &-title {
    padding: 40px 0;
  }

  &-content {
    padding-bottom: 40px;

    p:not(:first-child) {
      margin-top: 1.5rem;
    }

    a[rel*="attachment"] {
      display: block;
      width: 100%;

      img {
        display: block;
        height: auto;
        width: 100%;
      }
    }
  }

  @media (max-width: 720px) {
    padding: 2rem 0;

    &-entry {
      padding: 0 2rem;
    }

    &-title {
      font-size: 1.75rem;
      padding: 1rem 0;
    }
  }
}
</style>
