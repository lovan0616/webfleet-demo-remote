<template>
  <div class="feature">
    <div class="cus-container">
      <div class="row">
        <div class="one-col col-12 pb-4" v-for="(feature, index) in features" :key="index">
          <div class="feature-image-wrapper">
            <img :src="feature.image" />
          </div>
          <div class="feauture-content">
            <p class="title">{{ feature.title }}</p>
            <p class="description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feature",
  data() {
    return {
      features: [
        {
          image: "https://www.pointit.com/wp-content/uploads/2014/05/Grid.png",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          image: "https://www.pointit.com/wp-content/uploads/2014/05/Grid.png",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          image: "https://www.pointit.com/wp-content/uploads/2014/05/Grid.png",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          image: "https://www.pointit.com/wp-content/uploads/2014/05/Grid.png",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          image: "https://www.pointit.com/wp-content/uploads/2014/05/Grid.png",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus."
        },
        {
          image: "https://www.pointit.com/wp-content/uploads/2014/05/Grid.png",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          image: "https://www.pointit.com/wp-content/uploads/2014/05/Grid.png",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.one-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .feature-image-wrapper {
    width: 100%;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .feauture-content {
    padding: 15px 15px 35px 15px;
    .title {
      font-weight: 800;
      font-size: 1.2rem;
      color: $font_color;
      margin-bottom: 15px;
    }
    .description {
      color: $font_color;
      line-height: 1.6rem;
    }
  }
}

@media (min-width: 576px), print {
  .one-col {
    flex-direction: row;
    align-items: center;
    .feauture-content {
      width: 80%;
      height: auto;
    }
    &:nth-child(2n - 1) {
      flex-flow: row-reverse;
    }
  }
}
</style>