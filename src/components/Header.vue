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
          <input
            type="radio"
            name="nav-item"
            class="navitem-toggle"
            :id="item.name"
            v-if="isWideViewport()"
          />
          <input type="checkbox" class="navitem-toggle" :id="item.name" v-else />
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
        <li class="nav2-item py-3">
          <p class="title">Individual recomendation</p>
          <div class="nav2-item-wrapper">
            <div class="icon-wrapper">
              <font-awesome-icon :icon="['fas' , 'phone' ]" />
            </div>
            <router-link to="/">Solution Advisor</router-link>
          </div>
          <div class="nav2-item-wrapper">
            <div class="icon-wrapper">
              <font-awesome-icon :icon="['fas' , 'phone' ]" />
            </div>
            <router-link to="/">Savings Calculator</router-link>
          </div>
        </li>
        <li class="nav3-item">
          <div class="nav3-item-wrapper">
            <router-link to="/">Partners</router-link>
            <router-link to="/">Ablut</router-link>
            <router-link to="/">Blog</router-link>
            <router-link to="/">Contact</router-link>
          </div>
        </li>
      </ul>
    </nav>

    <div class="contact-us">
      <div class="icon-wrapper">
        <font-awesome-icon :icon="['fas' , 'phone' ]" />
      </div>
      <div class="number-wrapper">
        <div class="d-flex flex-column align-items-end">
          <p>Call Sales</p>
          <p>0208 822 305</p>
        </div>
        <button class="ml-3 contact-btn">Contact us</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      viewPort: window.innerWidth,
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
            "Lorem ipsum dolor"
          ]
        },
        {
          name: "App Center",
          contents: [
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
  },
  methods: {
    isWideViewport() {
      this.viewPort = window.innerWidth;
      const isWideViewport = this.viewPort >= 1024;
      console.log(isWideViewport);
      return isWideViewport;
    }
  },
  created() {
    window.addEventListener("resize", this.isWideViewport);
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
      .nav-item {
        padding-top: 30px;
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
      .nav2-item {
        margin-top: 30px;
        padding-left: 20px;
        display: grid;
        grid-gap: 10px;
        background-color: #616e78;
        .title {
          display: none;
        }
        .nav2-item-wrapper {
          display: flex;
          align-items: center;
          color: #ffffff;
          .icon-wrapper {
            width: 47px;
            height: 47px;
            border-radius: 50%;
            border: 1px solid #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            margin-right: 10px;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }

      .nav3-item {
        padding-left: 20px;
        background-color: #748088;
        .nav3-item-wrapper {
          padding-top: 30px;
          padding-bottom: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-gap: 20px;
          color: #ffffff;
          a {
            text-decoration: none;
            color: inherit;
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
    .number-wrapper {
      display: none;
    }
  }
}

@media (min-width: 1024px), print {
  .header {
    display: flex;
    border-bottom: 1px solid #d0d4d7;
    .navbar-brand {
      width: 260px;
      padding-left: 20px;
    }

    .navbar-toggle-label {
      display: none;
    }
    .nav {
      all: unset;
      .nav-list {
        display: grid;
        grid-auto-flow: column;
        padding: 0px;
        .nav-item {
          padding-top: 0px;
          margin-right: 30px;
          display: flex;
          align-items: center;
          height: 100%;

          .navitem-toggle {
            display: inline;

            &:checked ~ .navitem-toggle-label {
              border-bottom: 3px solid $theme_color;
              .back {
                display: none;
              }
              .item-name {
                display: inline;
              }
            }
            &:checked ~ .nav-link-wrapper {
              position: absolute;
              left: 0;
              top: 100%;
              width: 100%;
              background-color: $nav_color;
              .nav-link {
                color: $font_color;
                &::before {
                  display: none;
                }
              }
            }
          }

          .navitem-toggle-label {
            display: flex;
            align-items: center;
            height: 100%;
            &:hover .item-name {
              font-weight: 900;
            }
            &::before {
              display: none;
            }
            color: $font_color;
            text-transform: uppercase;
            font-size: 13px;
          }

          .nav-link-wrapper {
            display: none;
          }
        }

        .nav2-item {
          display: none;
        }

        .nav3-item {
          display: none;
        }
      }
    }

    .contact-us {
      .icon-wrapper {
        display: none;
      }
      .number-wrapper {
        display: flex;
        p {
          color: $font_color;
          font-size: 8px;
          &:nth-child(2) {
            font-size: 18px;
            font-weight: 700;
          }
        }
        .contact-btn {
          width: 127px;
          background-color: $theme_color;
          border-radius: 20px;
          padding: 10px;
          border: transparent;
          font-weight: 600;
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>