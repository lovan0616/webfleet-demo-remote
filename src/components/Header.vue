<template>
  <div class="header">
    <router-link to="/" class="navbar-brand text-center">
      <p>Webfleet solutions</p>
    </router-link>
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <label for="navbar-toggle" class="navbar-toggle-label">
      <span class="hamburger"></span>
      <span class="close"></span>
    </label>

    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item" v-for="item in navItem" :key="item.name">
          <input type="checkbox" class="navitem-toggle" :id="item.name" />
          <label :for="item.name" class="navitem-toggle-label">
            <span class="item-name">{{ item.name }}</span>
            <span class="back">Back</span>
          </label>
          <div class="nav-link-wrapper">
            <ul class="nav-link-list">
              <li>
                <router-link
                  to="/"
                  v-for="(content, index) in item.contents"
                  :key="item.name + index"
                  class="nav-link"
                >{{ content }}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>

    <div class="contact-us">
      <div class="icon-wrapper">
        <font-awesome-icon :icon="['fas' , 'phone' ]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navItem: [
        {
          name: "Products",
          contents: [
            "Lorem ipsum dolor",
            "dolor sit amet",
            "sit amet adipiscig",
            "Lorem sit amet",
            "Lorem ipsum dolor",
            "dolor sit amet",
            "sit amet adipiscig",
            "Lorem sit amet"
          ]
        },
        {
          name: "Solutions",
          contents: ["dolor sit amet", "sit amet adipiscig", "Lorem sit amet"]
        },
        {
          name: "Indutries",
          contents: [
            "Lorem ipsum dolor",
            "dolor sit amet",
            "sit amet adipiscig",
            "Lorem sit amet",
            "Lorem ipsum dolor",
            "dolor sit amet",
            "sit amet adipiscig",
            "Lorem sit amet"
          ]
        },
        {
          name: "App Center",
          contents: [
            "Lorem ipsum dolor",
            "dolor sit amet",
            "sit amet adipiscig",
            "Lorem sit amet",
            "Lorem ipsum dolor",
            "dolor sit amet",
            "sit amet adipiscig",
            "Lorem sit amet"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  z-index: 100;
  position: fixed;
  background-color: #ffffff;

  .navbar-brand {
    font-weight: 700;
    line-height: 80px;
    width: 100vw;
  }

  .navbar-toggle {
    visibility: hidden;
    position: absolute;
    &:checked ~ .nav {
      display: block;
    }
    &:checked ~ label .hamburger {
      display: none;
    }
    &:checked ~ label .close {
      display: block;
    }
  }

  .navbar-toggle-label {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    left: 4.5%;
    align-items: center;
  }

  .hamburger {
    position: relative;
    width: 22px;
    height: 3px;
    background: $font_color;
    &::before,
    &::after {
      width: 22px;
      height: 3px;
      background: $font_color;
      content: "";
      position: absolute;
      left: 0;
    }
    &::before {
      bottom: 8px;
    }
    &::after {
      top: 8px;
    }
  }

  .close {
    position: relative;
    width: 22px;
    height: 3px;
    background: $font_color;
    transform-origin: center;
    transform: rotate(0.375turn);
    display: none;
    &::before {
      content: "";
      width: 22px;
      height: 3px;
      background: $font_color;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: rotate(0.75turn);
    }
  }

  .nav {
    position: absolute;
    width: 100%;
    top: 100%;
    background-color: $font_color;
    display: none;

    .nav-list {
      height: 100%;
      display: grid;
      grid-auto-flow: row;
      grid-gap: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      .nav-item {
        border: 1px solid salmon;
        .navitem-toggle {
          visibility: hidden;
          position: absolute;
          &:checked ~ .nav-link-wrapper {
            display: block;
          }
          &:checked ~ .navitem-toggle-label {
            &::before {
              content: "\003c";
            }
            .back {
              display: inline;
            }
            .item-name {
              display: none;
            }
          }
        }
        .navitem-toggle-label {
          color: #ffffff;
          font-weight: 600;
          &::before {
            content: "\003e";
            color: $theme_color;
            margin-right: 20px;
            margin-left: 16px;
          }
          .back {
            display: none;
          }
        }
        .nav-link-wrapper {
          display: none;
          .nav-link-list {
            height: 100%;
            display: grid;
            grid-auto-flow: row;
            grid-gap: 20px;
            padding-top: 20px;
            padding-bottom: 20px;
            border: 1px solid wheat;
            color: #ffffff;
            .nav-link {
              text-decoration: none;
              color: inherit;
              font-weight: 600;
              &::before {
                content: "\003e";
                color: $theme_color;
                margin-right: 20px;
              }
            }
          }
        }
      }
    }
  }

  .contact-us {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 4.5%;
    display: flex;
    align-items: center;
    .icon-wrapper {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: $theme_color;
      font-size: 1.2rem;
      text-align: center;
      line-height: 40px;
      transform: scaleX(-1);
    }
  }
}
</style>