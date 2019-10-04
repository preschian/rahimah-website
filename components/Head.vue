<template>
  <div class="header">
    <div class="header-col">
      <!-- <ul class="header-menu">
        <li>
          <a href="#!">home</a>
        </li>
        <li>
          <a href="#!">post layout</a>
        </li>
        <li>
          <a href="#!">various page</a>
        </li>
        <li>
          <a href="#!">contact</a>
        </li>
      </ul>-->
    </div>

    <div class="header-col header-col-logo">
      <h1 class="header-logo">
        <!-- <router-link to="/">Rahimah Muslihah</router-link> -->
        <a href="/">Rahimah Muslihah</a>
      </h1>
    </div>

    <div class="header-col">
      <ul class="header-menu header-menu-social">
        <li>
          <a href="https://twitter.com/imawrr" target="_blank">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/imawrr/" target="_blank">
            <i class="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "node_modules/flexiblegs-scss/flexiblegs-scss";
.header {
  @include wrap;
  padding: 32px;
  &-col {
    @include col;
    @include col(2, 5);
    @media (max-width: 720px) {
      display: none;
    }
    &-logo {
      @include col(1, 5);
      text-align: center;
      @media (max-width: 720px) {
        @include col(1, 1);
        display: initial;
      }
    }
  }
  @media (max-width: 720px) {
    padding: 1rem;
  }
  &-menu {
    font-size: 0;
    font-weight: bold;
    list-style: none;
    li {
      color: #4b4b4b;
      display: inline-block;
      font-size: 14px;
      line-height: 27px;
      margin-right: 32px;
      text-transform: uppercase;
      &:hover {
        color: black;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &-social {
      text-align: right;
      li {
        font-size: 18px;
        margin-right: 24px;
      }
    }
  }
  &-logo {
    font-size: 18px;
    position: relative;
    text-transform: uppercase;
    &:before {
      background-color: #ab924e;
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      width: 30%;
    }
  }
}
</style>