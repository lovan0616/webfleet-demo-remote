<template>
  <div class="form" id="trial-form">
    <form>
      <h2 class="title">
        REQUEST 3 MONTHS
        <span class="text-highlight">FREE</span> TRIAL
      </h2>
      <div class="form-group">
        <input type="text" class="form-control" id="firstName" required />
        <label for="firstName">First name</label>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="lastName" required />
        <label for="lastName">Last name</label>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="company" required />
        <label for="company">Company</label>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="phone" required />
        <label for="phone">Phone</label>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="email" required />
        <label for="email">Bussiness e-mail</label>
      </div>

      <button class="my-3">Request FREE trial</button>

      <div class="policy-wrapper d-flex align-items-center">
        <div class="icon-wrapper">
          <font-awesome-icon :icon="['fas', 'lock']" />
        </div>
        <p class="ml-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          <span class="highlight">tempor incididunt</span> ut labore.
        </p>
      </div>

      <p class="terms-condiions mt-5 d-none d-sm-block">Terms & Conditions</p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
form {
  background-color: $form_color;
  padding: 20px;
  .title {
    font-weight: 900;
    color: $font_color;
    font-size: 21px;
    margin-bottom: 20px;
    .text-highlight {
      color: $theme_color;
    }
  }
  .form-group {
    position: relative;
    input {
      &:focus {
        border-color: yellow;
        ~ label {
          transform: translate(5px, -90%) scale(0.8);
          transition: transform 0.1s ease-in;
          color: gray;
        }
      }
      &:valid {
        padding-top: 25px;
        ~ label {
          transform: translate(5px, -90%) scale(0.8);
          transition: transform 0.1s ease-in;
          color: gray;
        }
      }
    }
    label {
      position: absolute;
      top: 50%;
      transform: translate(10px, -50%);
      color: $font_color;
    }
  }
  button {
   @include btnStyle(220px)
  }
  .policy-wrapper {
    .icon-wrapper {
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
      display: block;
      height: auto;
      width: calc(100% - 100px);
      color: #6a7780;
      .highlight {
        color: $theme_color;
      }
    }
  }
  .terms-conditions {
    color: $font_color;
    cursor: pointer;
  }
}

@media (max-width: 480px), print {
  form {
    button {
      width: 100%;
    }
  }
}

@media (min-width: 576px), print {
  form {
    background-color: #ffffff;
    box-shadow: 1px 1px 10px 0.1px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    max-width: 600px;
    .title {
      text-align: center;
    }
    button {
      width: 100%;
    }
  }
}
</style>




