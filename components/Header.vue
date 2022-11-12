<template>
  <nav>
    <v-toolbar flat class="transparent myToolbar" height="inherit">
      <v-toolbar-items>
        <transition name="socialsT">
          <v-row
            v-if="this.isLoaded"
            class="socials hidden-xs-only align-center ma-0"
          >
            <v-flex>
              <a
                href="https://www.facebook.com/mensvenuebarbershop"
                target="_blank"
                class="text-decoration-none"
              >
                <span> FB </span>
              </a>
            </v-flex>

            <v-flex>
              <a
                href="https://www.instagram.com/mens_venue/"
                target="_blank"
                class="text-decoration-none"
              >
                <span> IG </span>
              </a>
            </v-flex>
          </v-row>
        </transition>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items class="menuItem">
        <transition name="menuT">
          <v-row
            v-if="this.isLoaded"
            :class="['menu align-center', this.isAnimating ? 'disabled' : '']"
          >
            <transition name="menuTextT">
              <caption
                v-if="!this.isOpened"
                :class="['text-uppercase hidden-sm-and-down noselect']"
                @click="toggleMenu()"
              >
                Menu
              </caption>
            </transition>
            <transition name="menuTextT">
              <caption
                :class="['text-uppercase noselect']"
                v-if="this.isOpened"
                @click="toggleMenu()"
              >
                Zavrieť
              </caption>
            </transition>
            <Hamburger
              :isOpened="isOpened"
              @click.native="toggleMenu()"
              :class="[this.isAnimating ? 'disabled' : '']"
            />
            <Menu
              :isOpened="isOpened"
              :isAnimating="isAnimating"
              @animating="animatingFunc"
              @closeMenuWithScroll="closeMenuWithScrollFunc"
            />
          </v-row>
        </transition>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
import animateScrollTo from 'animated-scroll-to'
import Menu from '@/components/Header/Menu.vue'
import Hamburger from '@/components/Header/Hamburger.vue'
export default {
  name: 'Header',
  components: {
    Menu,
    Hamburger,
  },
  props: {
    isLoaded: Boolean,
  },
  data() {
    return {
      isAnimating: false,
      isOpened: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpened = !this.isOpened
      document.body.classList.toggle('stop-scrolling')
    },
    animatingFunc(value) {
      this.isAnimating = value
    },
    closeMenuWithScrollFunc(href) {
      this.toggleMenu()
      setTimeout(() => {
        animateScrollTo(document.getElementById(href))
      }, 100)
    },
  },
}
</script>

<style scoped lang="scss">
$header-height: 8.7rem;
nav {
  z-index: 5;
  background-color: #000000;
  height: $header-height;
  .myToolbar {
    z-index: 5;
    padding: 0 4.5rem;
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
  .socials {
    a:first-child {
      margin-right: 3rem;
    }
    span {
      font-size: 1.25rem;
    }
  }
  .menu {
    position: relative;
    caption {
      position: absolute;
      outline: none;
      z-index: 10;
      cursor: pointer;
      font-size: 1rem;
      right: 5rem;
    }
  }
}
@media only screen and (max-width: 960px) {
  nav {
    height: 7rem;
    .myToolbar {
      padding: 0 3.125rem !important;
      padding-top: 4rem !important;
      padding-bottom: 0;
    }
    .socials {
      a:first-child {
        margin-right: 2.4rem !important;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  nav {
    height: 5rem;
    .myToolbar {
      padding: 0 1.25rem !important;
      padding-top: 2rem !important;
      padding-bottom: 0;
      .menuItem {
        top: -4px;
        width: 3rem;
        height: 3rem;
        position: relative;
        .menu {
          position: relative;
          margin: 0;
          caption {
            top: 0.1rem;
            right: 2rem;
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}

.menuT-enter {
  transform: translateX(40rem);
  @media only screen and (max-width: 600px) {
    transform: translateX(10rem);
  }
}
.socialsT-enter {
  transform: translateX(-40rem);
}
.menuT-enter-active,
.socialsT-enter-active {
  transition: all 1s ease-in-out;
}
$menuTextTime: 0.3s; //dava sa podla dlzky animacie vysunutia menu
.menuTextT-enter,
.menuTextT-leave-to {
  opacity: 0;
}
.menuTextT-enter-to,
.menuTextT-leave {
  opacity: 1;
}

.menuTextT-enter-active {
  transition-delay: $menuTextTime !important;
}
.menuTextT-enter-active,
.menuTextT-leave-active {
  transition: all $menuTextTime linear;
}
@media only screen and (max-width: 960px) {
  .menuTextT-leave-active {
    transition: all 0.1s linear !important;
  }
}
</style>
