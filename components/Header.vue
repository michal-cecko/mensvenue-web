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
                <span>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M22.6667 2.66663H18.6667C16.8986 2.66663 15.2029 3.369 13.9526 4.61925C12.7024 5.86949 12 7.56518 12 9.33329V13.3333H8V18.6666H12V29.3333H17.3333V18.6666H21.3333L22.6667 13.3333H17.3333V9.33329C17.3333 8.97967 17.4738 8.64053 17.7239 8.39048C17.9739 8.14044 18.313 7.99996 18.6667 7.99996H22.6667V2.66663Z"
                          stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </a>
            </v-flex>

            <v-flex>
              <a
                  href="https://www.instagram.com/mens_venue/"
                  target="_blank"
                  class="text-decoration-none"
              >
                <span>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.0003 21.3333C17.4148 21.3333 18.7714 20.7714 19.7716 19.7712C20.7718 18.771 21.3337 17.4144 21.3337 16C21.3337 14.5855 20.7718 13.2289 19.7716 12.2287C18.7714 11.2285 17.4148 10.6666 16.0003 10.6666C14.5858 10.6666 13.2293 11.2285 12.2291 12.2287C11.2289 13.2289 10.667 14.5855 10.667 16C10.667 17.4144 11.2289 18.771 12.2291 19.7712C13.2293 20.7714 14.5858 21.3333 16.0003 21.3333V21.3333Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M4 21.3333V10.6667C4 8.89856 4.70238 7.20286 5.95262 5.95262C7.20286 4.70238 8.89856 4 10.6667 4H21.3333C23.1014 4 24.7971 4.70238 26.0474 5.95262C27.2976 7.20286 28 8.89856 28 10.6667V21.3333C28 23.1014 27.2976 24.7971 26.0474 26.0474C24.7971 27.2976 23.1014 28 21.3333 28H10.6667C8.89856 28 7.20286 27.2976 5.95262 26.0474C4.70238 24.7971 4 23.1014 4 21.3333Z"
                        stroke="white" stroke-width="1.5"/>
                    <path d="M23.333 8.67995L23.3463 8.66528" stroke="white" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </span>
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
