<template>
  <div class="sns w-100">
    <ol class="sns-list w-25 mx-auto d-flex justify-content-center">
      <li v-for="sns in snss" :key="sns">
        <div class="icon-wrapper d-flex justify-content-center align-items-center">
          <font-awesome-icon :icon="['fab' , sns ]" />
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'SNS',
  data() {
    return {
      snss: ['twitter','youtube','linkedin','facebook-square']
    }
  }
}
</script>

<style lang="scss" scoped>
.sns {
  background-color: $font_color;
  height: #{"max(4vw, 49px)"} ;
  .sns-list {
    height: 100%;

    .icon-wrapper {
      width: #{"max(4vw, 49px)"};
      height: #{"max(4vw, 49px)"};
      font-size: #{"max(2vw, 24px)"};
      color: #ffffff;

    }
  }
}
</style>