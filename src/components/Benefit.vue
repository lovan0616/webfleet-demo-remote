<template>
  <div class="benefit">
    <div class="row">
      <div class="one-col col-12 col-sm-4 py-2" v-for="(benefit, index) in benefits" :key="index">
        <div class="benefit-icon-wrapper">
          <font-awesome-icon :icon="[benefit.icon.type, benefit.icon.name]" />
        </div>
        <p>{{ benefit.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Benefit",
  data() {
    return {
      benefits: [
        {
          icon: {
            type: "fas",
            name: "car"
          },
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus."
        },
        {
          icon: {
            type: "fas",
            name: "car"
          },
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus."
        },
        {
          icon: {
            type: "fas",
            name: "car"
          },
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu."
        },
        {
          icon: {
            type: "fas",
            name: "car"
          },
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus."
        },
        {
          icon: {
            type: "fas",
            name: "car"
          },
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna."
        },
        {
          icon: {
            type: "fas",
            name: "car"
          },
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.one-col {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  justify-content: space-around;
  .benefit-icon-wrapper {
    width: 10vw;
    height: 10vw;
    min-width: 67px;
    max-width: 92px;
    min-height: 67px;
    max-height: 92px;
    border: 2px solid #d9dddf;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: #6a7780;
  }
  p {
    display: block;
    height: auto;
    line-height: 1.5rem;
    color: $font_color;
    font-weight: 500;
    width: calc(100% - 100px);
  }
}

@media (min-width: 576px), print {
  .one-col {
    flex-direction: column;
    justify-content: flex-start;
    p {
      width: 80%;
      margin-top: 10px;
      text-align: center;
    }
    .benefit-icon-wrapper {
      font-size: 2.5rem;
    }
  }
}
</style>