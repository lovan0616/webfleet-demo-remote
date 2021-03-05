<template>
  <div class="home">
    <section id="hedaer-section">

    </section>

    <section id="main-section">
      <div class="main-background">
        <div class="container">
          <div class="main-info-wrapper">
            <h2 class="main-title">{{ main.title }}</h2>
            <div class="main-description">
              <p>{{ main.description }}</p>
              <ol></ol>
            </div>
          </div>
          <div class="main-image-wrapper">
            <img src="" alt="">
          </div>
          <button class="trial-btn"></button>
        </div>
      </div>
    </section>

    <section id="benefit-section">

    </section>

    <section id="feature-section">

    </section>

    <section id="testimonial-section">

    </section>

    <section id="banner-section">

    </section>

    <section id="sns-section">

    </section>

    <section id="footer-section">
      
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      main: {
        title: 'INSTALL YOURSELF AND TRY WEBFLEET FOR FREE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.',
        list: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        image: 'https://picsum.photos/1200/628'
      }
    }
  }
}
