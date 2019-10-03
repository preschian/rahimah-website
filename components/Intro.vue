<template>
  <div class="intro">
    <h2 class="intro-text">Dreamer.</h2>
    <h3 class="intro-desc">If you can dream, you can do.</h3>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  margin: 80px auto;
  max-width: 750px;
  text-align: center;
  &-text {
    font-size: 60px;
  }
  &-desc {
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    font-weight: normal;
    margin-top: 16px;
  }
  @media (max-width: 720px) {
    margin: 1rem auto;
    &-text {
      font-size: 1.25rem;
    }
    &-desc {
      font-size: 1rem;
      margin-top: 0;
    }
  }
}
</style>