<template>
  <div class="home">
    <section id="hedaer-section"></section>

    <section id="main-section">
      <div class="main-background">
        <div class="container">
          <div class="main-info-wrapper">
            <h2 class="main-title">{{ main.title }}</h2>
            <div class="main-description">
              <p>{{ main.description }}</p>
              <ol>
                <li v-for="(item, index) in main.list" :key="index">{{ item }}</li>
              </ol>
            </div>
          </div>
          <div class="main-image-wrapper">
            <img :src="main.image" />
          </div>
          <button class="trial-btn">Try it for free</button>
        </div>
      </div>
    </section>

    <section id="benefit-section">
      <div class="container">
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
        image: "https://picsum.photos/1200/628"
      }
    };
  }
};
</script>