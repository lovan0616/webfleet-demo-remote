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
  name: 'Benefit',
  data() {
    return {
      benefits: [
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
        },
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
        },
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu.'
        },
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
        },
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna.'
        },
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.one-col {
  display: flex;
  align-items: center;
  font-size: .8rem;
  justify-content: space-around;
  border: 1px solid green;
  .benefit-icon-wrapper {
    width: 45px;
    height: 45px;
    border: 1px solid $light_color;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: #6a7780;
  }
  p {
    border: 1px solid blue;
    display: block;
    height: auto;
    width: calc(100% - 100px)
  }
}

@media (min-width: 576px), print {
  .one-col {
    flex-direction: column;
    justify-content: flex-start;
    p {
      width: 100%;
      margin-top: 10px ;
      text-align: center;
    }
  }
}
</style>