<template>
  <div class="uvod" id="uvod">
    <div class="blackDivUvod">
      <div class="contentWrapper">
        <div class="left">
          <transition name="leftT">
            <img
                v-if="this.isLoaded"
                class="logo"
                src="~/assets/images/svg/Logo.svg"
                alt="Logo"
            />
          </transition>
          <transition name="leftT">
            <img
                v-if="this.isLoaded"
                class="textSvg"
                src="~/assets/images/svg/uvod_text.svg"
                alt="Barber & Shop"
            />
          </transition>
          <transition name="leftT">
            <div class="down" v-if="this.isLoaded">
              <v-btn
                  depressed
                  width="319px"
                  height="66px"
                  color="#fff"
                  text
                  class="text_uppercase rezervovat"
                  href="https://services.bookio.com/mens-venue/widget?lang=sk"
                  target="_blank"
              >
                Rezervovať
              </v-btn>
              <div class="middle">
                <span>alebo</span>
              </div>
              <button class="text-decoration-none" @click="scrollTo('sluzby')">
                <div class="viac">
                  <span>Zisti viac</span>
                </div>
              </button>
            </div>
          </transition>
        </div>
        <transition name="heroImgT">
          <img
              v-if="this.isLoaded"
              class="image"
              src="~/assets/images/hero_2.jpg"
              alt="Hero"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import animateScrollTo from 'animated-scroll-to'

export default {
  name: 'Uvod',
  data() {
    return {
      isLoaded: false,
    }
  },
  mounted() {
    this.isLoaded = true
  },
  methods: {
    scrollTo(href) {
      animateScrollTo(document.getElementById(href))
    },
  },
}
</script>

<style lang="scss" scoped>
$animTime: 0.4s;
.uvod {
  position: relative;
  height: calc(100vh - 8.7rem);
  overflow: hidden;

  .blackDivUvod {
    position: relative;
    padding-left: 75px;
    padding-top: 210px;
    background-color: black;
    height: 100%;

    .left {
      position: relative;
      z-index: 2;
      width: 707px;

      .logo {
        width: 100%;
        margin-bottom: 47px;
        transition: $animTime all ease-in-out;
        transition-delay: 0.3s;
      }

      .textSvg {
        transition: $animTime all ease-in-out;
        transition-delay: calc(#{$animTime} * 0.75 + 0.3s);
        width: 391px;
        margin-bottom: 157px;
      }

      .down {
        display: flex;
        align-items: center;
        transition: $animTime all ease-in-out;
        transition-delay: calc(#{$animTime} * 1.5 + 0.3s);

        .rezervovat {
          border-radius: 0;
          border: 2px solid white;
          font-family: 'Raleway';
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .middle {
          margin-inline: 33px;

          span {
            font-family: 'Raleway';
            font-size: 16px;
            font-weight: 300;
          }
        }

        .viac {
          span {
            text-transform: uppercase;
            font-family: 'Raleway';
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 2px;
          }
        }
      }
    }

    .image {
      z-index: 1;
      position: absolute;
      right: 43px;
      top: 0;
      max-width: 630px;
    }
  }
}

@media only screen and (max-width: 1600px) and (min-width: 1441px) {
  .uvod {
    .blackDivUvod {
      padding-top: 150px;

      .image {
        transform: scale(0.8);
        top: -69px;
      }
    }
  }
}

@media only screen and (max-width: 1440px) and (min-width: 961px) {
  .uvod {
    .blackDivUvod {
      padding-top: 150px;

      .image {
        transform: scale(0.8);
        top: -69px;
        right: -40px;
      }
    }
  }
}

@media only screen and (max-width: 1240px) and (min-width: 961px) {
  .uvod {
    .blackDivUvod {
      .left {
        transform: scale(0.8) translateX(-70px);
      }

      .image {
        right: 0;
      }
    }
  }
}

@media only screen and (max-width: 960px) {
  .uvod {
    height: calc(100vh - 7rem);

    .blackDivUvod {
      padding: 0;

      .contentWrapper {
        height: 100%;
      }

      .left {
        height: 100%;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        z-index: 3;

        .logo {
          position: absolute;
          left: 0;
          bottom: calc(25px + 60px + 104px + 66px + 32px + 44px);
          margin-bottom: 0;
        }

        .textSvg {
          position: absolute;
          left: 0;
          bottom: calc(25px + 60px + 104px + 66px);
          margin-bottom: 0;
        }

        .down {
          position: absolute;
          bottom: calc(25px + 60px);
        }
      }

      .image {
        z-index: 2;
        right: unset;
        top: 2rem;
        left: 58%;
        transform: translate(-50%);
        width: auto;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .uvod {
    height: calc(100vh - 5rem);

    .blackDivUvod {
      .left {
        width: 85vw;

        .logo {
          width: 325px;
          bottom: calc(53px + 42px + 59px + 16px + 16px);
        }

        .textSvg {
          width: 193px;
          bottom: calc(53px + 42px + 59px);
        }

        .down {
          bottom: calc(53px);

          .rezervovat {
            width: 140px !important;
            height: 42px !important;
            font-size: 14px;
          }

          .middle {
            margin-inline: 19px;

            span {
              font-size: 14px;
            }
          }

          .viac {
            span {
              font-size: 14px;
            }
          }
        }
      }

      .image {
        top: unset;
        height: 486px;
        width: auto;
        bottom: 24vh;
        @media only screen and (max-height: 700px) {
          bottom: 16vh;
        }
      }
    }
  }
}

@media only screen and (min-width: 1921px) {
  .uvod {
    .left {
      transform: translateX(-21px);
    }

    max-height: 900px;

    .blackDivUvod .image {
      top: -12rem;
      transform: scale(1.1);
    }
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1000px) and (max-height: 650px) {
  .uvod {
    .blackDivUvod {
      padding-top: 100px;
      padding-left: 0px;

      .contentWrapper {
        .left {
          transform: scale(0.7);

          .textSvg {
            margin-bottom: 100px;
          }
        }

        .image {
          transform: scale(0.6);
          top: -169px;
        }
      }
    }
  }
}

//ANIMACKY
.heroImgT-enter {
  opacity: 0;
}

.heroImgT-enter-active {
  transition: all 1s ease-in-out;
}

.leftT-enter {
  transform: translate(-150px, 0);
  opacity: 0;
}

.leftT-enter-active {
  transition: all 1s ease-in-out;
}

//ANIMACKY
</style>
