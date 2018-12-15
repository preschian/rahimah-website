<template>
  <div class="content">
    <div class="container">
      <div class="content-post">
        <div class="content-post-col" v-for="post in posts" :key="post.id">
          <div class="item">
            <router-link class="item-figure" :to="post.slug" v-if="getFeatured(post)">
              <img :src="getFeatured(post)">
            </router-link>
            <div class="item-entry">
              <!-- <a href="#!" class="item-entry-category">improving life</a> -->
              <router-link :to="post.slug" class="item-entry-title">{{post.title.rendered}}</router-link>
              <p class="item-entry-meta">{{post.date | date}}</p>
              <p class="item-entry-summary" v-html="post.excerpt.rendered"></p>
            </div>
          </div>
        </div>
      </div>
      <a class="load-more" @click="getPost()" v-show="!loading">Load More</a>
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
      posts: [],
      page: 1,
      loading: false
    };
  },
  filters: {
    date(value) {
      return format(value, "MMM DD, YYYY");
    }
  },
  methods: {
    async getPost() {
      this.loading = true;
      const post = (await api.get(`/posts?_embed&page=${this.page}&per_page=6`))
        .data;
      this.posts = [...this.posts, post].flat();
      this.page += 1;

      if (post.length < 6) return;
      this.loading = false;
    },
    getFeatured(post) {
      const featuredMedia = post._embedded["wp:featuredmedia"];

      return (featuredMedia && featuredMedia[0].source_url) || "";
    }
  },
  async created() {
    await this.getPost();
  }
};
</script>


<style lang="scss" scoped>
@import "node_modules/flexiblegs-scss/flexiblegs-scss";

.content {
  background-color: #f2f2f2;
  padding: 60px 32px 28px 32px;
}

.content-post {
  @include wrap;
  @include wrap("gutter", 32);
  @include wrap("top");
  @include wrap("masonry", 3);

  &-col {
    @include col;
    @include col(1, 1);
  }

  @media (max-width: 720px) {
    @include wrap("masonry", 1);
  }
}

.item {
  margin-bottom: 32px;

  &-figure {
    display: block;
    overflow: hidden;

    img {
      display: block;
      object-fit: cover;
      height: 240px;
      width: 100%;
    }
  }

  &-entry {
    background-color: white;
    padding: 24px;

    &-category {
      color: #ab924e;
      font-family: "Raleway", sans-serif;
      font-size: 12px;
      text-transform: uppercase;
    }

    &-title {
      font-size: 22px;
      font-weight: bold;
      margin-top: 12px;
    }

    &-meta {
      color: #757575;
      font-size: 12px;
      margin-top: 8px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    &-summary {
      color: #4b4b4b;
      font-family: "Raleway", sans-serif;
    }
  }
}

.load-more {
  display: block;
  text-align: center;
  width: 10rem;
  background-color: white;
  padding: 6px;
  cursor: pointer;
  margin: 0 auto;
}
</style>
