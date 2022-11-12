<template>
  <div
    :class="[
      'sluzbyMobileCarousel',
      category.isExtra ? 'extra' : 'noExtra',
      category.text,
    ]"
  >
    <VueSlickCarousel v-bind="settings" v-if="!this.category.isExtra">
      <div v-for="(item, index) in this.category.items" :key="index">
        <div class="top noExtra">
          <span class="name text-uppercase" v-html="item.name"></span>
          <span class="price">{{ item.price }}€</span>
        </div>
        <transition name="viacMenejTextT" mode="out-in">
          <div key="menej" class="menejText" v-if="!item.viacMenej">
            <span v-html="item.menej"></span>
          </div>
          <div key="viac" class="viacText" v-else>
            <span>{{ item.viac }}</span>
          </div>
        </transition>
        <transition name="viacMenejT" mode="out-in">
          <div
            key="menej"
            :class="[item.viacMenej ? 'active' : '', 'viacMenej']"
            @click="item.viacMenej = !item.viacMenej"
            v-if="item.viacMenej"
          >
            MENEJ O STRIHU
          </div>
          <div
            key="viac"
            :class="[item.viacMenej ? '' : 'active', 'viacMenej']"
            @click="item.viacMenej = !item.viacMenej"
            v-else
          >
            VIAC O STRIHU
          </div>
        </transition>
      </div>
    </VueSlickCarousel>
    <VueSlickCarousel v-bind="settings" v-if="this.category.isExtra">
      <div v-for="(item, index) in this.category.items" :key="index">
        <div class="top extra">
          <span class="name">{{ item.name }}</span>
          <span class="price">{{ item.price }}€<span> / služba</span></span>
        </div>
        <div class="extraItems">
          <div
            class="extraItem"
            v-for="(extraItem, indexExtra) in item.extraItems"
            :key="indexExtra"
          >
            {{ extraItem }}
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <div class="extraText">
      {{ category.extraText }}
    </div>
    <v-btn
      v-if="!category.isExtra"
      depressed
      absolute
      width="8.75rem"
      height="2.625rem"
      color="#fff"
      text
      @click="openBookioLink()"
      class="text_uppercase rezervovat"
    >
      Rezervovať
    </v-btn>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'SluzbyMobileCarousel',
  components: {
    VueSlickCarousel,
  },
  props: {
    category: Object,
  },
  data() {
    return {
      settings: {
        fade: true,
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
      },
    }
  },
  methods: {
    openBookioLink() {
      window
        .open('https://services.bookio.com/mens-venue/widget?lang=sk', '_blank')
        .focus()
    },
  },
}
</script>

<style lang="scss">
.sluzbyMobileCarousel {
  position: relative;
  color: white;
  height: fit-content;
  &.Komplet {
    .top {
      align-items: start !important;
    }
  }
  .extraText {
    position: absolute;
    color: #a0a0a0;
    margin-top: 1.5rem;
    font-size: 0.8rem;
    font-family: 'Raleway';
    font-weight: 700;
  }
  &.extra {
    .extraText {
      margin-top: 6rem;
    }
  }
  .rezervovat {
    top: calc(100% + 6rem);
    border-radius: 0;
    border: 1.5px #fff solid;
    transform: translate(-50%);
    left: 50%;
    span {
      font-size: 0.875rem;
      font-family: 'Raleway';
      font-weight: 600;
    }
  }
  .slick-slider.slick-initialized {
    height: 100%;
    .slick-list {
      height: 100%;
      .slick-active {
        z-index: 5;
      }
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.7rem;
        margin-bottom: 1.5625rem;
        .name {
          font-size: 1.25rem;
          font-family: 'Raleway';
          font-weight: 600;
        }
        .price {
          display: block;
          color: #a0a0a0;
          font-size: 1.5625rem;
          font-family: 'Raleway';
          font-weight: 600;
        }
        &.extra {
          .price {
            color: #fff;
            span {
              color: #a0a0a0;
              font-size: 1.2rem;
            }
          }
        }
      }
      .text {
        span {
          color: #a0a0a0;
          font-size: 0.875rem;
          font-family: 'Raleway';
        }
      }
      .extraItems {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        .extraItem {
          font-family: 'Raleway';
          font-size: 1rem;
          margin-bottom: 0.8rem;
          &:nth-child(even) {
            justify-self: end;
          }
        }
      }
    }
    .custom-dot-class {
      position: absolute;
      top: calc(100% + 2.3rem);
      bottom: unset;
      height: fit-content;
      padding: 0 !important;
      li {
        height: 0.625rem;
        width: 0.625rem;
        background-color: #303030;
        &.slick-active {
          background-color: #6f6f6f;
        }
        button::before {
          color: transparent;
        }
      }
    }
    button.slick-prev,
    button.slick-next {
      z-index: 5;
      width: 2rem;
      height: 2rem;
      background-color: #979797;
      border-radius: 50%;
      position: absolute;
      top: calc(100% + 3rem);
    }
    button.slick-prev {
      left: 0;
    }
    button.slick-next {
      right: 0;
    }
    button.slick-prev:before {
      content: url('../../../assets/images/svg/SluzbyCarouselArrowLeft.svg');
    }
    button.slick-next:before {
      content: url('../../../assets/images/svg/SluzbyCarouselArrowRight.svg');
    }
    .menejText,
    .viacText {
      span {
        color: #a0a0a0;
        font-family: 'Raleway';
        font-size: 0.875rem;
        .bold {
          font-weight: 700;
        }
      }
    }
    .viacMenej {
      cursor: pointer;
      z-index: 5;
      margin-top: 0.8rem;
      color: #a0a0a0;
      font-family: 'Raleway';
      font-size: 0.875rem;
      font-weight: 700;
    }
  }
  //ANIMACIE
  .viacMenejTextT-enter-active,
  .viacMenejT-enter-active,
  .viacMenejT-leave-active {
    animation: myAnim 0.5s ease 0s 1 normal forwards;
  }

  .viacMenejTextT-leave-to,
  .viacMenejT-enter-from,
  .viacMenejT-leave-to {
    animation: myAnim 0.5s ease 0s 1 reverse;
  }

  @keyframes myAnim {
    0% {
      max-height: 2rem;
      clip-path: inset(100% 0 0 0);
    }

    100% {
      max-height: 10rem;
      clip-path: inset(0% 0 0 0);
    }
  }
}
</style>
