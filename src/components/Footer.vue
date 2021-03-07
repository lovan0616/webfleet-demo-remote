<template>
  <div class="footer">
    <div class="resource">
      <div class="area subscribe">
        <span>SUBSCRIBE TO OUR NEWLETTER</span>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis urna."</p>
        <button class="subscribe-btn">Subscribe</button>
      </div>
      <div class="area products">
        <span>PRODUCTS</span>
        <ol>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum dolor gous</li>
          <li>Wem ipsum Slor st</li>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum dolor gous</li>
          <li>Wem ipsum Slor st</li>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum dolor gous</li>
          <li>Wem ipsum Slor st</li>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum dolor gous</li>
        </ol>
      </div>
      <div class="area technology">
        <span>TECHNOLOGY</span>
        <ol>
          <li>Wem ipsum Slor st</li>
          <li>Lorem dolor sit</li>
          <li>ipsum dolor gous</li>
        </ol>
        <br />
        <span>BUY</span>
        <ol>
          <li>Slor st</li>
          <li>Lorem ipsum</li>
          <li>dolor gous</li>
        </ol>
      </div>
      <div class="area industries">
        <span>INDUSTRIES</span>
        <ol>
          <li>dolor sit</li>
          <li>ipsum dolor gous</li>
          <li>Wem ipsum Slor st</li>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum</li>
          <li>Wem ipsum Slor st</li>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum dolor gous</li>
          <li>Wem st</li>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum gous</li>
        </ol>
      </div>
      <div class="area partners">
        <span>PARTNERS</span>
        <ol>
          <li>ipsum</li>
          <li>Wem ipsum Slor st</li>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum dolor gous</li>
          <li>ipsum gous</li>
        </ol>
      </div>
      <div class="area help">
        <span>HELP</span>
        <ol>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum dolor gous</li>
          <li>Wem ipsum Slor st</li>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum dolor gous</li>
        </ol>
      </div>
      <div class="area learn">
        <span>LEARN</span>
        <ol>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum dolor gous</li>
          <li>Wem ipsum Slor st</li>
          <li>Lorem ipsum dolor sit</li>
          <li>ipsum dolor gous</li>
        </ol>
      </div>
      <div class="area talk">
        <span>TALK TO SALES</span>
        <P>0908 822 3605</P>
      </div>
      <div class="area also">
        <span>ALSO VISIT</span>
        <p>ipsum dolor gous</p>
      </div>
      <div class="area info">
        <span>INFO</span>
        <ol>
          <li>Lorem ipsum</li>
          <li>gous</li>
          <li>Slor st</li>
          <li>Lorem ipsum dolor sit</li>
          <li>gous</li>
          <li>ipsu</li>
        </ol>
      </div>
    </div>

    <div
      class="bottom d-flex flex-column flex-md-row justify-content-center align-items-start align-items-md-center justify-content-md-between"
    >
      <div>
        <p>Copyright &#169; 2006 - {{ year }} Webfleet solutions B.V. all rights reserved</p>
        <p class="my-4">Webfleet solutions story</p>
      </div>
      <div>United Kingdom</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
.resource {
  background-color: #53616c;
  color: #a2aaaf;
  font-weight: 600;
  padding: 25px 15px;
  span {
    color: #ffffff;
    font-weight: 800;
  }
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  grid-template-areas:
    "subscribe"
    "products"
    "technology"
    "industries"
    "partners"
    "help"
    "learn"
    "talk"
    "also"
    "info";
}

.bottom {
  background-color: $font_color;
  height: #{"max(2vw, 217px)"};
  color: #a2aaaf;
  padding: 30px;
}

.subscribe {
  grid-area: subscribe;
  .subscribe-btn {
    @include btnStyle(106px, 10px, 30px);
  }
}
.products {
  grid-area: products;
}
.technology {
  grid-area: technology;
}
.industries {
  grid-area: industries;
}
.partners {
  grid-area: partners;
}
.help {
  grid-area: help;
}
.learn {
  grid-area: learn;
}
.talk {
  grid-area: talk;
}
.also {
  grid-area: also;
}
.info {
  grid-area: info;
}

@media (min-width: 641px), print {
  .resource {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "subscribe subscribe"
      "products technology"
      "industries partners"
      "help learn"
      "talk also"
      "info info";
  }
}

@media (min-width: 1024px), print {
  .resource {
    padding: 45px 35px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(
        0,
        1fr
      );
    grid-template-areas:
      "products technology industries talk "
      "products technology industries subscribe "
      "products technology industries also "
      "help learn partners info";
  }
}
</style>
