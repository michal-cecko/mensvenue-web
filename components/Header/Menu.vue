<template>
  <transition
    name="drawerT"
    v-on:before-enter="beforeEnter"
    v-on:before-leave="beforeLeave"
    v-on:after-enter="afterEnter"
    v-on:after-leave="afterLeave"
  >
    <div v-if="isOpened" class="drawer">
      <v-row class="ma-0">
        <v-col class="left pa-0">
          <transition-group
            v-if="afterIsOpened"
            appear
            name="leftT"
            class="obal"
            tag="div"
          >
            <v-row
              align="center"
              v-for="link in this.links"
              :key="link.id"
              :style="{ '--i': link.id }"
            >
              <a
                class="text-decoration-none linkObal"
                @click="closeMenuWithScroll(link.href)"
              >
                <span class="linkId">0{{ link.id }}</span>
                <span class="text-uppercase linkText">{{ link.text }}</span>
              </a>
            </v-row>
          </transition-group>
        </v-col>

        <transition name="horizontalT">
          <div
            class="horizontalSpacer hidden-xs-only"
            v-if="afterIsOpened"
          ></div>
        </transition>

        <v-col class="right pa-0 hidden-xs-only">
          <v-layout column align-center>
            <transition name="rightT">
              <v-btn
                v-if="afterIsOpened"
                dark
                depressed
                class="text-uppercase rezerveBtn transparent"
                height="4.5rem"
                width="100%"
                href="https://services.bookio.com/mens-venue/widget?lang=sk"
                >Rezervovať</v-btn
              >
            </transition>
            <transition name="rightT2">
              <div class="pa-0 rightTexty" v-if="afterIsOpened">
                <div class="text-uppercase otvHod">Otváracie hodiny</div>
                <v-row
                  class="mt-0 mx-auto pa-0 daysDiv"
                  justify-space-between
                  v-for="day in this.openClock"
                  :key="day.id"
                >
                  <v-col class="pa-0">{{ day.id }}</v-col>
                  <v-col class="pa-0">{{ day.text }}</v-col>
                </v-row>
              </div>
            </transition>
          </v-layout>
        </v-col>
      </v-row>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Menu",
  props: {
    isOpened: Boolean,
  },
  data() {
    return {
      afterIsOpened: false,
      isAnimating: false,
      links: [
        { id: "1", text: "Domov", href: "uvod" },
        { id: "2", text: "O nás", href: "onas" },
        { id: "3", text: "Služby", href: "sluzby" },
        { id: "4", text: "Feedback", href: "feedback" },
        { id: "5", text: "Kontakt", href: "footer" },
      ],
      openClock: [
        { id: "Pondelok", text: "Na objednávku" },
        { id: "Utorok", text: "Na objednávku" },
        { id: "Streda", text: "Na objednávku" },
        { id: "Štvrtok", text: "Na objednávku" },
        { id: "Piatok", text: "Na objednávku" },
        { id: "Sobota", text: "Na objednávku" },
        { id: "Nedeľa", text: "Na objednávku" },
      ],
    };
  },
  methods: {
    beforeEnter() {
      this.isAnimating = true;
      this.$emit("animating", this.isAnimating);
    },
    beforeLeave() {
      this.isAnimating = true;
      this.$emit("animating", this.isAnimating);
    },
    afterEnter() {
      this.afterIsOpened = !this.afterIsOpened;
      this.isAnimating = false;
      this.$emit("animating", this.isAnimating);
    },
    afterLeave() {
      this.afterIsOpened = !this.afterIsOpened;
      this.isAnimating = false;
      this.$emit("animating", this.isAnimating);
    },
    closeMenuWithScroll(href) {
      this.$emit("closeMenuWithScroll", href);
    },
  },
};
</script>
<style lang="scss" scoped>
//ANIMACIE
//cele menu
.drawerT-enter {
  transform: translateY(-100vh);
}
.drawerT-leave-to {
  transform: translateY(-100vh);
}
.drawerT-enter-active,
.drawerT-leave-active {
  transition: all 0.3s linear;
}
//left
.leftT-enter {
  transform: translateX(-3rem);
  opacity: 0;
}
.leftT-enter-active {
  transition: all 0.2s linear;
  transition-delay: calc(0.2s * 0.5 * var(--i));
}
//stred
.horizontalT-enter {
  top: -100%;
}
.horizontalT-enter-to {
  top: 0;
}
.horizontalT-leave-to {
  top: -100%;
}
.horizontalT-enter-active,
.horizontalT-leave-active {
  transition: all 0.7s ease-in-out;
}
//right
.rightT-enter,
.rightT2-enter {
  transform: translateX(3rem);
  opacity: 0;
}
.rightT-enter-active,
.rightT2-enter-active {
  transition: all 0.4s linear;
}
.rightT2-enter-active {
  transition-delay: 0.3s;
}
//ANIMACIE
.drawer {
  position: fixed;
  left: -4.5rem !important;
  top: 0rem !important;
  max-width: unset !important;
  width: calc(100% + 9rem) !important;
  background-color: #202020;
  height: 100vh;
}
.horizontalSpacer {
  background-color: #7c7c7c;
  width: 1px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.left {
  height: 100vh;
  position: relative;
  .obal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    & > div {
      margin-bottom: 3.75rem;
      margin-top: 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .linkObal {
    display: flex;
    align-items: center;
  }
  .linkId {
    transform: translateY(3px);
    font-size: 0.875rem;
    font-family: "Raleway";
    font-weight: 700;
    margin-right: 2rem;
  }
  .linkText {
    font-size: 3.75rem;
    font-family: "Gruppo";
    line-height: 3.75rem;
    letter-spacing: 0.375rem;
  }
}
.right {
  position: relative;
  height: 100vh;
  .rightTexty {
    width: 100%;
  }
  .layout {
    width: 18rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .rezerveBtn {
    border: 3px #fff solid !important;
    border-radius: 0;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 0.125rem;
    margin-bottom: 4.25rem;
  }
  .otvHod {
    text-align: center;
    font-size: 1.45rem;
    letter-spacing: 0.2rem;
    margin-bottom: 2.375rem;
    font-weight: 700;
  }
  .daysDiv {
    width: 100%;
    line-height: 1.2rem;
    margin-bottom: 1.44rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-family: "Raleway";
    & > div:nth-child(2) {
      flex-grow: 2;
      text-align: right;
      font-weight: 600;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media only screen and (max-width: 1440px) {
  .obal {
    & > div {
      margin-bottom: 2.75rem !important;
      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
  .linkId {
    font-size: 0.75rem !important;
  }
  .linkText {
    font-size: 3rem !important;
    line-height: 3rem !important;
    letter-spacing: 0.3rem !important;
  }
  .right {
    .layout {
      top: 55% !important;
    }
    .rezerveBtn {
      height: 3.5rem !important;
      width: 15rem !important;
      font-size: 1rem !important;
      letter-spacing: 0.125rem !important;
      margin-bottom: 3rem !important;
    }
    .otvHod {
      font-size: 1.3rem !important;
      letter-spacing: 0.1rem !important;
      margin-bottom: 1.9rem !important;
    }
    .daysDiv {
      width: 15rem !important;
      line-height: 1rem !important;
      margin-bottom: 1.2rem !important;
      font-size: 1rem !important;
    }
  }
}
@media only screen and (max-width: 960px) {
  .drawer {
    left: -3.125rem !important;
    top: 0rem !important;
    width: calc(100% + 6.25rem) !important;
  }
  .left {
    .obal {
      left: 56%;
      & > div {
        margin-bottom: 4rem;
        margin-top: 0;
      }
    }
    .linkId {
      margin-right: 1.8rem;
    }
    .linkText {
      font-size: 2.8rem;
      line-height: 2.8rem;
      letter-spacing: 0.28rem;
    }
  }
  .right {
    .layout {
      top: 50% !important;
    }
  }
}
@media only screen and (max-width: 600px) {
  .drawer {
    position: fixed;
    left: -1.25rem !important;
    top: -0rem !important;
    max-width: unset !important;
    width: calc(100% + 2.5rem) !important;
    background-color: #202020;
    height: 100vh;
  }

  .left {
    .obal {
      left: 50%;
    }
    .linkId {
      font-size: 1.125rem;
      margin-right: 1.125rem;
    }
    .linkText {
      font-size: 2.5rem;
      line-height: 2.5rem;
      letter-spacing: 0.25rem;
    }
  }
}
</style>