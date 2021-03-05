<template>
  <div class="case">
    <div class="case-wrapper" v-for="(item, index) in cases" :key="index">
      <div class="case-image-wrapper">
        <img :src="item.image"/>
      </div>
      <p>{{ item.hightlight }}</p>
      <p>{{ item.customer }}</p>
      <button class="case-read-more">Read more +</button>
    </div>
    <div class="dot-wrapper">
      <span v-for="(item, index) in cases" :key="index">o</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Case',
  data() {
    return {
      cases: [
        {
          image: 'https://picsum.photos/1200/628',
          hightlight: "Lorem ipsum dolor sit amet, adipiscing elit.",
          customer: "Lorem ipsum dolor sit amet"
        },
        {
          image: 'https://picsum.photos/1200/628',
          hightlight: "Lorem ipsum dolor sit amet, adipiscing elit.",
          customer: "Lorem ipsum dolor sit amet"
        },
        {
          image: 'https://picsum.photos/1200/628',
          hightlight: "Lorem ipsum dolor sit amet, adipiscing elit.",
          customer: "Lorem ipsum dolor sit amet"
        },
      ]
    }
  }
}
</script>