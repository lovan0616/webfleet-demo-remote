<template>
  <div class="benefit">
    <div class="row">
      <div class="col-12 col-sm-4" v-for="(benefit, index) in benefits" :key="index">
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
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          icon: {
            type: 'fas',
            name: 'car'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
      ]
    }
  }
}
</script>