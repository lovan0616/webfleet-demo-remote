<template>
  <div class="home">
    <header id="hedaer-section">
      <Header />
    </header>

    <section id="news-section">
      <div class="news">
        COVID-19 Updates.
        <span class="highlight">Learn more &#62;</span>
      </div>
    </section>

    <section id="main-section">
      <div class="main-background">
        <div class="cus-container d-flex py-5">
          <div class="left-content">
            <div class="main-info-wrapper">
              <h2 class="main-title">
                INSTALL YOURSELF AND TRY WEBFLEET FOR
                <span class="text-highlight">FREE</span>
              </h2>
              <div class="main-description">
                <p
                  class="my-3"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.</p>
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
          <div class="form-wrapper d-none d-sm-block ml-3">
            <Form />
          </div>
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
      <div class="testimonial-background">
        <h2 class="testimonial-title">What our customers say</h2>
        <Case />
      </div>
    </section>

    <section id="form-section">
      <Form class="d-sm-none" />
      <FormAnchor class="d-none d-sm-block" />
    </section>

    <section id="sns-section">
      <SNS />
    </section>

    <section id="footer-section">
      <Footer />
    </section>
  </div>
</template>

<script>
import Benefit from "../components/Benefit";
import Feature from "../components/Feature";
import Case from "../components/Case";
import Form from "../components/Form";
import FormAnchor from "../components/FormAnchor";
import Header from "../components/Header";
import SNS from "../components/SNS";
import Footer from "../components/Footer"
export default {
  name: "Home",
  components: {
    Benefit,
    Feature,
    Case,
    Form,
    FormAnchor,
    Header,
    SNS,
    Footer
  },
  data() {
    return {
      main: {
        list: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ],
        image:
          "https://media.webfleet.com/f_auto,c_pad,q_auto,w_518,dpr_2.0/media/img/photos/products/bundles/wfdesktop-mobile-link210-all.png"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#news-section {
  padding-top: 80px;
  .news {
    width: 100%;
    height: 31.5px;
    background-color: $font_color;
    color: #ffffff;
    line-height: 31.5px;
    padding-left: #{"min(4vw, 40px)"};
    .highlight {
      color: $theme_color;
      font-weight: 600;
    }
  }
}

.main-background {
  width: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.85)
    ),
    url("https://pwbgis.kcg.gov.tw/construction/Images/24_00-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid red;
  .cus-container {
    .main-info-wrapper {
      .main-title {
        font-size: #{"max(4vw, 32px)"};
        font-weight: 900;
        color: $font_color;
        .text-highlight {
          color: $theme_color;
        }
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
      @include btnStyle(60%,20px, 30px);
    }
  }
}

.benefit-title {
  font-weight: 900;
  color: $font_color;
}

.feature-background {
  background-color: #f1f2f3;
  .feature-title {
    font-weight: 900;
    color: $font_color;
    text-align: center;
  }
}

.testimonial-background {
  background-color: $font_color;
  .testimonial-title {
    font-weight: 900;
    color: #ffffff;
    text-align: center;
  }
}

.benefit-title,
.feature-title,
.testimonial-title {
  padding: 21px;
  font-size: 4vw;
}

@media (min-width: 576px), print {
  .main-background {
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0)
      ),
      url("https://pwbgis.kcg.gov.tw/construction/Images/24_00-1.jpg");
  }

  .benefit-title,
  .feature-title,
  .testimonial-title {
    padding: 42px;
    font-size: 4vw;
    text-align: center;
  }
}
</style>