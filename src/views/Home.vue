<template>
  <div class="home">
    <section id="hedaer-section"></section>

    <section id="main-section">
      <div class="main-background">
        <div class="cus-container d-flex flex-column">
          <div class="main-info-wrapper">
            <h2 class="main-title mt-4">{{ main.title }}</h2>
            <div class="main-description">
              <p class="my-3">{{ main.description }}</p>
              <ol>
                <li v-for="(item, index) in main.list" :key="index" class="my-1">{{ item }}</li>
              </ol>
            </div>
          </div>
          <div class="main-image-wrapper mx-auto my-3">
            <img :src="main.image" />
          </div>
          <button class="trial-btn">Try it for free</button>
        </div>
      </div>
    </section>

    <section id="benefit-section">
      <div class="cus-container">
        <h2 class="benefit-title">WEBFLEET helps you</h2>
        <Benefit />
      </div>
    </section>

    <section id="feature-section">
      <div class="feature-background">
        <h2 class="feature-title">Key featues</h2>
        <Feature />
      </div>
    </section>

    <section id="testimonial-section">
      <div class="testimonial background">
        <h2 class="case-title">What our customers say</h2>
        <Case />
      </div>
    </section>

    <section id="banner-section"></section>

    <section id="sns-section"></section>

    <section id="footer-section"></section>
  </div>
</template>

<script>
import Benefit from "../components/Benefit";
import Feature from "../components/Feature";
import Case from "../components/Case"
export default {
  name: "Home",
  components: {
    Benefit,
    Feature,
    Case
  },
  data() {
    return {
      main: {
        title: "INSTALL YOURSELF AND TRY WEBFLEET FOR FREE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.",
        list: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ],
        image: "https://media.webfleet.com/f_auto,c_pad,q_auto,w_518,dpr_2.0/media/img/photos/products/bundles/wfdesktop-mobile-link210-all.png"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.cus-container {
  width: 95%;
  border: 1px solid goldenrod;
  margin: 15px auto;
}

.main-background {
  width: 100%;
  background-image: linear-gradient(rgba(255,255,255, .85), rgba(255,255,255, .85)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtlhWuhgJsJ0qBdvop9612WKJ4NMQC1VrbA&usqp=CAU');
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid red;
  .cus-container {
    z-index: 10;
    width: 100%;
    padding: 5px 10px;
    .main-info-wrapper {
      .main-title {
        font-size: 28px;
        font-weight:900;
        color: $font_color;
      }
      .main-description {
        color: $font_color;
        li::before {
          content: "\2714";
          color: $theme_color;
        }
      }
    }
    .main-image-wrapper {
      width: 80%;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    .trial-btn {
      width: 60%;
      padding: 20px;
      border-radius: 30px;
      border: none;
      background-color: $theme_color;
    }
  }
}

.benefit-title {
  font-weight: 900;
  color: $font_color;
}
</style>