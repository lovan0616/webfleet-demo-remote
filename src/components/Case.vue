<template>
  <div class="case">
    <div class="carousel-wrapper d-block d-sm-none w-100">
      <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            v-for="(item, index) in cases"
            :key="index"
            data-target="#carouselIndicators"
            :data-slide-to="index"
            :class="{'active':index === 0}"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="{'active':index === 0}"
            v-for="(item, index) in cases"
            :key="index"
          >
            <div class="case-image-wrapper mx-auto">
              <img class="d-block w-100" :src="item.image" alt="First slide" />
            </div>
            <p class="highlight text-center mt-4">{{ item.hightlight }}</p>
            <p class="customer text-center mt-3">{{ item.customer }}</p>
            <div class="mx-auto mt-4 read-more-btn">Read more +</div>
          </div>
        </div>
      </div>
    </div>

    <div class="case-wrapper w-100">
      <div class="one-case p-2" v-for="(item, index) in cases" :key="index">
        <div class="case-image-wrapper mx-auto">
          <img class="d-block w-100" :src="item.image" alt="First slide" />
        </div>
        <p class="highlight text-center mt-4">{{ item.hightlight }}</p>
        <p class="customer text-center mt-3">{{ item.customer }}</p>
        <div class="mx-auto mt-4 read-more-btn">Read more +</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Case",
  data() {
    return {
      cases: [
        {
          image: "https://picsum.photos/1200/628",
          hightlight: "Lorem ipsum dolor sit amet, adipiscing elit.",
          customer: "Lorem ipsum dolor sit amet"
        },
        {
          image: "https://picsum.photos/1200/628",
          hightlight: "Lorem ipsum dolor sit amet, adipiscing elit.",
          customer: "Lorem ipsum dolor sit amet"
        },
        {
          image: "https://picsum.photos/1200/628",
          hightlight: "Lorem ipsum dolor sit amet, adipiscing elit.",
          customer: "Lorem ipsum dolor sit amet"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  border: 4px solid green;
  width: 100%;
  .carousel-indicators {
    li {
      width: 10px;
      height: 10px;
      background-color: transparent;
      border: 1px solid #ffffff;
      border-radius: 50%;
      &.active {
        background-color: $theme_color;
        border: 1px solid $theme_color;
      }
    }
  }

  .carousel-inner {
    width: 100%;
    .carousel-item {
      height: 360px;
      .case-image-wrapper {
        width: 85%;
        height: 30vw;
        border: 1px solid #a2aaaf;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .highlight {
        font-weight: 900;
        color: #ffffff;
      }
      .customer {
        color: #a2aaaf;
        font-size: 9px;
      }
      .read-more-btn {
        width: 30%;
        text-align: center;
        border: 1px solid #a2aaaf;
        color: #ffffff;
        padding: 15px 15px;
        border-radius: 30px;
      }
    }
  }
}

.case-wrapper {
  display: none;
}

@media (min-width: 576px), print {
  .case-wrapper {
    display: flex;
    .one-case {
      .case-image-wrapper {
        width: 95%;
        height: 12vw;
        border: 1px solid #a2aaaf;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .highlight {
        font-weight: 900;
        color: #ffffff;
      }
      .customer {
        color: #a2aaaf;
        font-size: 9px;
      }
      .read-more-btn {
        width: 75%;
        max-width: 204px;
        text-align: center;
        border: 1px solid #a2aaaf;
        color: #ffffff;
        padding: 15px 15px;
        border-radius: 30px;
      }
    }
  }
}
</style>