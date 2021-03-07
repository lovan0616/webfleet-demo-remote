<template>
  <div class="form-anchor">
    <div class="cus-container d-flex flex-column align-items-center justify-content-center">
      <p class="title">START YOUR THREE MONTHS FREE TRIAL NOW</p>
      <p class="description my-4">Get to know WEBFLEET, Europe's #1 fleet management solution</p>
      <a href="#trial-form">
        Request your FREE trial
        <span>&lt;</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-anchor {
  width: 100%;
  height: 27vw;
  max-height: 380px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("https://bodylanguagecentral.com/wp-content/uploads/2019/10/woman-talking-on-phone.jpg");
  background-size: cover;
  background-position: center;
  .cus-container {
    width: 100%;
    height: 100%;
    .title {
      font-weight: 900;
      color: $font_color;
      font-size: 1.6rem;
    }
    .description {
      color: $font_color;
      font-size: 1.25rem;
    }
    a {
      @include btnStyle(315px, 20px, 30px);
      text-decoration: none;
      color: inherit;
      text-align: center;
      span {
        display: inline-block;
        transform: rotate(0.25turn) scale(1, 1.5) translate(0, -5px);
      }
    }
  }
}
</style>