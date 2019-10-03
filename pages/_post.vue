<template>
  <div>
    <div class="post">
      <div class="post-container">
        <img class="post-featured" :src="featuredMedia" v-if="featuredMedia" width="100%" />

        <div class="post-entry">
          <h1 class="post-title">{{title}}</h1>
          <div class="post-content" v-html="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  async asyncData({ $axios, params }) {
    let { data } = await $axios.get(
      `https://public-api.wordpress.com/rest/v1.1/sites/imawrr27.wordpress.com/posts/slug:${params.post}`
    );

    return {
      featuredMedia: data.post_thumbnail && data.post_thumbnail.URL,
      title: data.title,
      content: data.content
    };
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
    p {
      font-family: "PT Serif", Georgia, "Times New Roman", Times, serif;
      line-height: 1.4;
    }
    p:not(:first-child) {
      margin-top: 1rem;
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
