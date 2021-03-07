<template>
  <div class="header">
    <router-link to="/" class="navbar-brand">Webfleet solutions</router-link>
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <label for="navbar-toggle" class="navbar-toggle-label">
      <span class="hamburger"></span>
      <span class="close"></span>
    </label>

    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in navItem" :key="'item-'+index">
          <input type="checkbox" class="navitem-toggle" :id="'navitem-toggle-'+index" />
          <label :for="'navitem-toggle-'+index" class="navitem-toggle-label">{{ item }}</label>
          <div class="nav-link-wrapper">
            <router-link to="/" v-for="(product, index) in products" :key="'product-' + index">{{ product }}</router-link>
          </div>
        </li>

      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navItem: ["Products", "Solutions", "Industries", "App Center"],
      products: [
        "Lorem ipsum dolor",
        "dolor sit amet",
        "sit amet adipiscig",
        "Lorem sit amet",
        "Lorem ipsum dolor",
        "dolor sit amet",
        "sit amet adipiscig",
        "Lorem sit amet"
      ],
      solutions: ["dolor sit amet", "sit amet adipiscig", "Lorem sit amet"],
      industries: [
        "Lorem ipsum dolor",
        "dolor sit amet",
        "sit amet adipiscig",
        "Lorem sit amet",
        "Lorem ipsum dolor",
        "dolor sit amet",
        "sit amet adipiscig",
        "Lorem sit amet"
      ],
      appCenter: [
        "Lorem ipsum dolor",
        "dolor sit amet",
        "sit amet adipiscig",
        "Lorem sit amet",
        "Lorem ipsum dolor",
        "dolor sit amet",
        "sit amet adipiscig",
        "Lorem sit amet"
      ]
    };
  }
};
</script>