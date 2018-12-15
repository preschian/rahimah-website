<template>
  <div id="app">
    <Head></Head>

    <router-view></router-view>
  </div>
</template>

<script>
import Head from "./components/Head";

export default {
  components: {
    Head
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:400,700|Raleway");

body {
  color: #4b4b4b;
  font-family: "Josefin Sans", sans-serif;
}

a {
  color: inherit;
  display: inline-block;
  text-decoration: none;
}

.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 1120px;
}

p {
  font-family: Raleway, sans-serif;
}
</style>
