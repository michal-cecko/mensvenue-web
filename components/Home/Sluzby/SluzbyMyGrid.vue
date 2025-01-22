<template>
  <div :class="['myGrid hidden-xs-only', category.text]">
    <div
      :class="['item', category.isExtra ? 'extra' : 'noExtra']"
      v-for="(item, index) in category.items"
      :key="index"
    >
      <div v-if="!category.isExtra">
        <div class="top">
          <span class="name text-uppercase" v-html="item.name"></span>
          <span class="price">{{ item.price }}€</span>
        </div>
        <transition name="viacMenejTextT" mode="out-in">
          <div key="menej" class="text menejText" v-if="!item.viacMenej">
            <span v-html="item.menej"></span>
          </div>
          <div key="viac" class="text viacText" v-else>
            <span v-html="item.viac"></span>
          </div>
        </transition>
        <transition name="viacMenejT" mode="out-in">
          <div
            key="menej"
            :class="[item.viacMenej ? 'active' : '', 'viacMenej']"
            @click="item.viacMenej = !item.viacMenej"
            v-if="item.viacMenej"
          >
            MENEJ O SLUŽBE
          </div>
          <div
            key="viac"
            :class="[item.viacMenej ? '' : 'active', 'viacMenej']"
            @click="item.viacMenej = !item.viacMenej"
            v-else
          >
            VIAC O SLUŽBE
          </div>
        </transition>
      </div>
      <div v-else>
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
      <div class="extraText" v-if="index == 0">
        {{ category.extraText }}
      </div>
      <v-btn
        v-if="index == category.items.length - 1 && !category.isExtra"
        depressed
        width="20rem"
        height="4.125rem"
        color="#fff"
        text
        @click="openBookioLink()"
        :class="[
          'text_uppercase',
          'rezervovat',
          category.extraText ? 'isExtraText' : '',
        ]"
      >
        Rezervovať
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SluzbyMyGrid',
  props: {
    category: Object,
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
<style lang="scss" scoped>
.myGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  & > :only-child {
    grid-column: 1/-1;
    &.item {
      margin-right: 0 !important;
      &::after {
        width: 100% !important;
      }
    }
  }
  &.Komplet {
    .rezervovat {
      bottom: calc(-4.125rem - 8rem);
    }
    .item {
      padding-bottom: 2rem;
    }
    .extraText {
      bottom: -5.8rem !important;
    }
  }
  &.Extra {
    .item {
      padding-bottom: 1rem;
    }
  }
  .item {
    position: relative;
    padding-bottom: 3rem;
    &::after {
      position: absolute;
      bottom: 0;
      content: ' ';
      width: 120%;
      border-bottom: 1px solid #303030;
    }
    &:nth-child(odd) {
      margin-right: calc(3.75rem / 2);
    }
    &:nth-child(even) {
      margin-left: calc(3.75rem / 2);
      &::after {
        right: 0;
      }
    }
    .extraText {
      position: absolute;
      width: 45rem;
      bottom: -6.5rem;
      font-size: 1.25rem;
      letter-spacing: 0.125rem;
      font-family: 'Raleway';
      font-weight: 700;
    }
    &.extra {
      .extraText {
        width: 60rem;
        bottom: -5rem;
      }
      &:nth-child(odd) {
        margin-right: calc(8.25rem / 2) !important;
      }
      &:nth-child(even) {
        margin-left: calc(8.25rem / 2) !important;
      }
    }
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2.25rem;
      margin-bottom: 1.25rem;
      .name {
        font-size: 1.625rem;
        line-height: 1.625rem;
        font-family: 'Raleway';
        font-weight: 600;
      }
      .price {
        display: block;
        color: #fff;
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
        font-size: 1.125rem;
        font-family: 'Raleway';
      }
    }
  }
  .extraItems {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    .extraItem {
      font-family: 'Raleway';
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      &:nth-child(even) {
        justify-self: end;
      }
    }
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
  .rezervovat {
    position: absolute;
    right: 0;
    bottom: calc(-4.125rem - 3.2rem);
    border-radius: 0;
    border: 1.5px #fff solid;
    span {
      font-size: 0.875rem;
      font-family: 'Raleway';
      font-weight: 600;
    }
  }
}
@media only screen and (max-width: 960px) {
  .myGrid {
    .item {
      &::after {
        width: 180%;
      }
      &.extra {
        padding-bottom: 0;
        .extraText {
          width: 80vw;
        }
      }
    }
    .rezervovat.isExtraText {
      bottom: calc(-4.125rem - 6.6rem);
    }
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
</style>
