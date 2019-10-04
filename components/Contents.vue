<template>
  <div class="content">
    <div class="container">
      <div class="masonry">
        <div class="item-sizer"></div>
        <div class="gutter-sizer"></div>
        <div class="item" v-for="post in posts" :key="post.ID">
          <router-link class="item-figure" :to="post.slug" v-if="getFeatured(post)">
            <img :src="getFeatured(post)" />
          </router-link>
          <div class="item-entry">
            <!-- <a href="#!" class="item-entry-category">improving life</a> -->
            <router-link :to="post.slug" class="item-entry-title">{{post.title}}</router-link>
            <p class="item-entry-meta">{{post.date | date}}</p>
            <div class="item-entry-summary" v-html="post.excerpt"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <a class="load-more" @click="getPost()" v-show="!loading">Load More</a> -->
  </div>
</template>

<script>
import { format } from "date-fns";

let masonry;

export default {
  data() {
    return {
      page: 1,
      loading: false,
      options: {
        columnWidth: ".item-sizer",
        gutter: ".gutter-sizer",
        itemSelector: ".item",
        percentPosition: true
      }
    };
  },
  props: {
    posts: {
      type: Array,
      default: []
    }
  },
  filters: {
    date(value) {
      return format(new Date(value), "MMM dd, yyyy");
    }
  },
  methods: {
    async getPost() {
      // this.loading = true;
      // const post = (await api.get(`/posts?_embed&page=${this.page}&per_page=6`))
      //   .data;
      // this.posts = [...this.posts, post].flat();
      // if (this.page !== 1 && window.innerWidth > 1024) {
      //   setTimeout(function() {
      //     masonry.reloadItems();
      //     masonry.layout();
      //   }, 100);
      // }
      // this.page += 1;
      // if (post.length < 6) return;
      // this.loading = false;
      return true;
    },
    getFeatured(post) {
      return post.post_thumbnail && post.post_thumbnail.URL;
    }
  },
  async mounted() {
    if (window.innerWidth > 1024) {
      masonry = new Masonry(document.querySelector(".masonry"), this.options);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "node_modules/flexiblegs-scss/flexiblegs-scss";
.masonry {
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
.gutter-sizer {
  width: 2%;
}
.item-sizer {
  width: 32%;
}
.item {
  margin-bottom: 32px;
  float: left;
  width: 32%;
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
    }
  }
  @media (max-width: 720px) {
    width: 100%;
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

<style lang="scss">
.item-entry-summary p {
  font-family: "PT Serif", Georgia, "Times New Roman", Times, serif;
  line-height: 1.4;
}
</style>