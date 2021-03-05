<template>
  <div class="feature">
    <div class="feature-wrapper">
      <div class="row">
        <div class="col-12" v-for="(feature, index) in features" :key="index">
          <div class="feature-image-wrapper">
            <img :src="feature.image" />
          </div>
          <div class="feauture-content">
            <p>{{ feature.title }}</p>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  data() {
    return {
        features: [
          {
            image: 'https://picsum.photos/1200/628',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
          },
          {
            image: 'https://picsum.photos/1200/628',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
          },
          {
            image: 'https://picsum.photos/1200/628',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
          },
          {
            image: 'https://picsum.photos/1200/628',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
          },
          {
            image: 'https://picsum.photos/1200/628',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
          },
          {
            image: 'https://picsum.photos/1200/628',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
          },
          {
            image: 'https://picsum.photos/1200/628',
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna eu pulvinar. Nulla sit amet rutrum tellus.'
          }
        ]
    }
  }
}
</script>