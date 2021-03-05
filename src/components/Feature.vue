<template>
  <div class="feature">
    <div class="feature-wrapper">
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
          image: "https://picsum.photos/1200/628",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          image: "https://picsum.photos/1200/628",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          image: "https://picsum.photos/1200/628",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          image: "https://picsum.photos/1200/628",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          image: "https://picsum.photos/1200/628",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus."
        },
        {
          image: "https://picsum.photos/1200/628",
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
          image: "https://picsum.photos/1200/628",
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
  border: 1px solid slateblue;
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
      font-weight: 900;
      color: $font_color;
      margin-bottom: 15px;
    }
    .description {
      color: $font_color;

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