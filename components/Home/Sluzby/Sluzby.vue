<template>
  <div id="sluzby" class="sluzby">
    <div
      data-aos="scrollTSluzby"
      data-aos-anchor-placement="top-center"
      data-aos-duration="500"
      class="blackDivSluzby"
    >
      <div class="contentWrapper">
        <div class="top">
          <div class="lineH hidden-md-and-up"></div>
          <div class="text">Služby</div>
          <div class="lineH2"></div>
        </div>
        <div class="smalltext text-uppercase">Naša ponuka</div>
        <div class="categories">
          <div
            :key="index"
            :class="[
              'category',
              category.active ? 'active' : '',
              category.disable ? 'disable' : '',
            ]"
            v-for="(category, index) in this.categories"
            :style="{ '--i': category.id }"
            @click.prevent="categoryDisable ? null : activateCat(index)"
          >
            <div class="absoluteCat">
              <div class="number">0{{ category.id }}</div>
              <div class="catText text-uppercase">{{ category.text }}</div>
              <div
                class="zobrazitViac"
                @click="categoryDisable ? closeCat() : null"
              >
                <transition name="zobrazitViacTextT">
                  <span v-if="!category.active" class="text-uppercase opened"
                    >Zobraziť</span
                  >
                </transition>
                <transition name="zobrazitViacTextT">
                  <span v-if="category.active" class="text-uppercase closed"
                    >Zavrieť</span
                  >
                </transition>
                <div
                  :class="[
                    'icon',
                    'dev-icon',
                    'close',
                    category.active ? '' : 'activated',
                    ,
                    'first-hover',
                  ]"
                >
                  <div class="rect tr"></div>
                  <div class="rect mr"></div>
                  <div class="rect br"></div>
                </div>
              </div>
              <div class="content">
                <SluzbyMyGrid :category="categories[index]" />
                <div class="mobileContent hidden-sm-and-up">
                  <SluzbyMobileCarousel :category="categories[index]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="[
            'images',
            'hidden-sm-and-down',
            categoryDisable ? 'opened' : 'closed',
          ]"
        >
          <img
            class="greyBG"
            src="../../../assets/images/Sluzby_grey.png"
            alt="Sluzby Fotka"
          />
          <img
            class="myPhoto"
            src="../../../assets/images/Sluzby_foto.png"
            alt="Sluzby Pozadie"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SluzbyMobileCarousel from '@/components/Home/Sluzby/SluzbyMobileCarousel.vue'
import SluzbyMyGrid from '@/components/Home/Sluzby/SluzbyMyGrid.vue'
export default {
  name: 'Sluzby',
  components: {
    SluzbyMyGrid,
    SluzbyMobileCarousel,
  },
  data() {
    return {
      categoryDisable: false,
      categories: [
        {
          id: '1',
          text: 'Vlasy',
          active: false,
          disable: false,
          items: [
            {
              name: 'Detský strih (4-13r.)',
              price: '14',
              menej: 'konzultácia, strih, umytie, styling, servis',
              viac: 'konzultácia, strih vlasov, zaholenie kontúr, opálenie uší, umytie, masáž hlavy, styling, servis v podobe nápoja.',
              viacMenej: false,
            },
            {
              name: 'Študentský strih (14-18r.)',
              price: '18',
              menej: 'konzultácia, strih, umytie, styling, servis',
              viac: 'konzultácia, strih vlasov, zaholenie kontúr, opálenie uší, umytie, masáž hlavy, styling, servis v podobe nápoja.',
              viacMenej: false,
            },
            {
              name: 'Pánsky strih',
              price: '23',
              menej: 'konzultácia, strih, umytie, styling, servis',
              viac: 'konzultácia, strih vlasov, zaholenie kontúr, opálenie uší, umytie, masáž hlavy, styling, servis v podobe nápoja.',
              viacMenej: false,
            },
          ],
        },
        {
          id: '2',
          text: 'Brada',
          active: false,
          disable: false,
          items: [
            {
              name: 'Úprava brady',
              price: '13',
              menej: 'konzultácia, úprava, naparenie, styling, servis',
              viac: 'konzultácia, skrátenie, úprava brady, naparenie, zaholenie kontúr, ošetrenie, styling, servis v podobe nápoja.',
              viacMenej: false,
            },
            {
              name: 'Holenie do hladka',
              price: '15',
              menej:
                "<span class='bold'>HOT & COLD TOWEL</span> - konzultácia, naparenie, holenie, ošetrenie, servis",
              viac: 'konzultácia, 2x naparenie horúcim uterákom, holenie, studený uterák, ošetrenie pokožky, servis v podobe nápoja.',
              viacMenej: false,
            },
          ],
        },
        {
          id: '3',
          text: 'Komplet',
          active: false,
          disable: false,
          extraText:
            '* Platí aj pre prípad kombinácie Pánskeho strihu a holenia pomocou HOT & COLD TOWEL.',
          items: [
            {
              name: "Pánsky strih a <br class='hidden-sm-and-up'> úprava brady",
              price: '33',
              menej:
                'konzultácia, strih, úprava brady, umytie, styling, servis',
              viac: 'konzultácia, strih vlasov, opálenie uší, úprava brady, naparenie, zaholenie kontúr, ošetrenie, umytie, masáž hlavy, styling vlasov a brady, servis v podobe nápoja. ',
              viacMenej: false,
            },
          ],
        },
        {
          id: '4',
          text: 'Extra',
          active: false,
          disable: false,
          isExtra: true,
          extraText: '* EXTRA službu je klient povinný hlásiť vopred.',
          items: [
            {
              name: 'EXTRA I',
              price: '5',
              extraItems: ['Umytie a Styling', 'Masáž hlavy', 'Maska na tvár '],
            },
            {
              name: 'EXTRA II',
              price: '3',
              extraItems: [
                'Depilácia chĺpkov',
                'Úprava obočia',
                'Hair tattoo ',
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    activateCat(index) {
      this.categories = this.categories.map((category, i) =>
        i !== index
          ? { ...category, disable: true }
          : { ...category, active: true }
      )
      setTimeout(() => {
        this.categoryDisable = true
      }, 200)
    },
    closeCat() {
      this.categories = this.categories.map((category) => {
        const cat = category
        cat.disable = false
        cat.active = false
        return cat
      })
      setTimeout(() => {
        this.categoryDisable = false
      }, 200)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../../assets/style/ArrowCross.scss';
.sluzby {
  width: 100%;
  margin-bottom: 8rem;
  position: relative;
  height: 50rem;
  .blackDivSluzby {
    height: 20.3rem;
    position: relative;
    padding-top: 7.6rem;
    background-color: #000000;
    .contentWrapper {
      overflow-x: visible;
    }
    .top {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      align-items: center;

      transition: 0.5s all ease-in-out;
      margin-bottom: 1rem;
      .lineH,
      .lineH2 {
        width: 6.5rem;
        height: 1.5px;
        background-color: #9d9d9d;
        margin-left: 2.5rem;
        transition: 0.5s all ease-in-out;
      }
      .text {
        text-transform: uppercase;
        font-family: 'Gruppo';
        color: #9d9d9d;
        font-size: 2.5rem;
        line-height: 2.5rem;
        letter-spacing: 0.25rem;
        transition: 0.5s all ease-in-out;
      }
    }
    .smalltext {
      font-size: 0.875rem;
      letter-spacing: 0.0875rem;
      font-family: 'Raleway';
      color: #9d9d9d;
      position: relative;
      text-align: right;
      right: calc(2.5rem + 6.25rem + 0.2rem);
      transition: 0.5s all ease-in-out;
      margin-bottom: 3rem;
    }
    .categories {
      position: relative;
      right: calc(2.5rem + 6.25rem + 0.2rem);
      display: flex;
      flex-direction: column;
      float: right;
      transition: 0.5s all ease-in-out;
      .category {
        cursor: pointer;
        position: relative;
        right: -3rem;
        opacity: 0;
        width: 52.875rem;
        height: calc(1.6875rem + 1.875rem + 3.125rem);

        padding-top: 1.6875rem;
        padding-bottom: 1.875rem;
        transition: 0.2s all ease-in-out;
        &:last-child:not(.active) {
          .absoluteCat {
            border-bottom: none;
          }
        }
        &.active {
          transition-delay: 0.5s;
          cursor: default;
          .absoluteCat {
            transition-delay: 0.5s;
            top: calc(
              (1.6875rem + 1.875rem + 3.125rem) * (var(--i) - 1) * (-1)
            ) !important;
            width: 65rem;
            .content {
              transition-delay: 0.5s;
              transform: scaleY(1);
            }
          }
        }
        &.disable {
          opacity: 0 !important;
          pointer-events: none;
        }
        .absoluteCat {
          position: absolute;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          border-bottom: 1px solid #303030;
          padding-bottom: 1.875rem;
          width: 100%;

          right: 0;
          top: 0;
          transition: 0.5s all ease-in-out;
          transition-delay: calc(0.2s * 0.5 * var(--i));
          .number {
            color: #515151;
            margin-right: 1.75rem;
            font-size: 1.5rem;
            letter-spacing: 0.15rem;
            font-family: 'Raleway';
            font-weight: 700;
          }
          .catText {
            font-family: 'Gruppo';
            font-size: 4rem;
            line-height: 4rem;
            letter-spacing: 0.5rem;
            font-weight: 700;
            margin-right: auto;
            color: #a8a8a8;
          }
          .zobrazitViac {
            position: relative;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 8rem;
            justify-content: flex-end;
            height: 3.125rem;
            span {
              position: absolute;
              font-size: 1rem;
              line-height: 1rem;
              letter-spacing: 0.075rem;
              color: #9e9e9e;
              right: 4rem;
            }
          }
          .content {
            width: 100%;
            height: 20rem;
            top: 100%;
            transition: 0.5s all ease-in-out;
            transition-delay: calc(0.2s * 0.5 * var(--i));
            transform-origin: 0% 0%;
            transform: scaleY(0);
          }
        }
      }
    }
    .images {
      transition: 0.5s all ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
      img {
        position: absolute;
        opacity: 0;
        transition: 0.5s all ease-in-out;
      }
      .greyBG {
        width: 28.5rem;
        left: -2.8rem;
        top: 6.75rem;
      }
      .myPhoto {
        width: 26.68rem;
        left: -3.6rem;
        top: 4.8rem;
      }
    }
  }
}

[data-aos='scrollTSluzby'] {
  transition-property: all;
  &.aos-animate {
    height: 50rem !important;
    .lineH,
    .lineH2 {
      background-color: #fff !important;
      width: 10.5rem !important;
      margin-left: 3.4rem !important;
    }
    .text {
      color: #fff !important;
      font-size: 3.5rem !important;
      line-height: 3.5rem !important;
      letter-spacing: 0.35rem !important;
    }
    .smalltext {
      right: calc(3.4rem + 10.5rem + 0.2rem);
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
    }
    .categories {
      right: calc(3.4rem + 10.5rem + 0.2rem);
      .category {
        transition: 0.5s all ease-in-out;
        transition-delay: calc(0.2s * 0.5 * var(--i));
        right: 0;
        opacity: 1;
      }
    }
    .images {
      img {
        opacity: 1 !important;
      }
      .greyBG {
        left: 6.8rem !important;
      }
      .myPhoto {
        left: 6.5rem !important;
      }
    }
  }
}

@media only screen and (max-width: 1600px) {
  .sluzby {
    height: 50rem;
    .blackDivSluzby {
      .top {
        margin-bottom: 1rem;
        .lineH,
        .lineH2 {
          width: 6.25rem;
          height: 1.5px;
          margin-left: 2.5rem;
        }
        .text {
          font-size: 2.5rem;
          line-height: 2.5rem;
          letter-spacing: 0.25rem;
        }
      }
      .smalltext {
        font-size: 0.875rem;
        letter-spacing: 0.0875rem;
        right: calc(2.5rem + 6.25rem + 0.2rem);
        margin-bottom: 3rem;
      }
      .categories {
        right: calc(2.5rem + 6.25rem + 0.2rem);
        .category {
          width: 46.875rem;
          height: calc(1.6875rem + 1.875rem + 3.125rem);
          padding-top: 1.6875rem;
          padding-bottom: 1.875rem;
          &.active {
            .absoluteCat {
              top: calc(
                (1.6875rem + 1.875rem + 3.125rem) * (var(--i) - 1) * (-1)
              ) !important;
              width: 56rem;
              .content {
                transition-delay: 0.5s;
                transform: scaleY(1);
              }
            }
          }
          .absoluteCat {
            padding-bottom: 1.875rem;
            .number {
              margin-right: 1.375rem;
              font-size: 1rem;
              letter-spacing: 0.15rem;
            }
            .catText {
              font-size: 3.125rem;
              line-height: 3.125rem;
              letter-spacing: 0.5rem;
            }
            .zobrazitViac {
              width: 8rem;
              height: 3.125rem;
              span {
                font-size: 0.75rem;
                line-height: 0.75rem;
                letter-spacing: 0.075rem;
                right: 3.3rem;
              }
            }
          }
        }
      }
      .images {
        .greyBG {
          width: 25.5rem;
          left: -2.8rem;
          top: 6.75rem;
        }
        .myPhoto {
          width: 22.68rem;
          left: -3.6rem;
          top: 4.8rem;
        }
      }
    }
  }

  [data-aos='scrollTSluzby'] {
    &.aos-animate {
      height: 50rem !important;
      .lineH,
      .lineH2 {
        width: 7.5rem !important;
        margin-left: 3.4rem !important;
      }
      .text {
        font-size: 2.5rem !important;
        line-height: 2.5rem !important;
        letter-spacing: 0.25rem !important;
      }
      .smalltext {
        right: calc(3.4rem + 7.5rem + 0.2rem);
        font-size: 1rem;
        letter-spacing: 0.1rem;
      }
      .categories {
        right: calc(3.4rem + 7.5rem + 0.2rem);
      }
      .images {
        .greyBG {
          left: -0.8rem !important;
        }
        .myPhoto {
          left: -1.6rem !important;
        }
      }
    }
  }
}
@media only screen and (max-width: 1440px) {
  .sluzby {
    .blackDivSluzby {
      .top {
        margin-bottom: 1rem;
        .lineH,
        .lineH2 {
          width: 3.25rem;
          height: 1.5px;
          margin-left: 2.5rem;
        }
        .text {
          font-size: 2.5rem;
          line-height: 2.5rem;
          letter-spacing: 0.25rem;
        }
      }
      .smalltext {
        font-size: 0.875rem;
        letter-spacing: 0.0875rem;
        right: calc(2.5rem + 3.25rem + 0.2rem);
        margin-bottom: 3rem;
      }
      .categories {
        right: calc(2.5rem + 3.25rem + 0.2rem);
        .category {
          width: 42.875rem;
          height: calc(1.6875rem + 1.875rem + 3.125rem);
          padding-top: 1.6875rem;
          padding-bottom: 1.875rem;
          &.active {
            .absoluteCat {
              top: calc(
                (1.6875rem + 1.875rem + 3.125rem) * (var(--i) - 1) * (-1)
              ) !important;
              width: 46rem;
              .content {
                transition-delay: 0.5s;
                transform: scaleY(1);
              }
            }
          }
          .absoluteCat {
            padding-bottom: 1.875rem;
            .number {
              margin-right: 1.375rem;
              font-size: 1rem;
              letter-spacing: 0.15rem;
            }
            .catText {
              font-size: 3.125rem;
              line-height: 3.125rem;
              letter-spacing: 0.5rem;
            }
            .zobrazitViac {
              width: 8rem;
              height: 3.125rem;
              span {
                font-size: 0.75rem;
                line-height: 0.75rem;
                letter-spacing: 0.075rem;
                right: 3.3rem;
              }
            }
          }
        }
      }
      .images {
        .greyBG {
          width: 20.5rem;
          left: -2.8rem;
          top: 10.75rem;
        }
        .myPhoto {
          width: 18.68rem;
          left: -3.6rem;
          top: 8.8rem;
        }
      }
    }
  }

  [data-aos='scrollTSluzby'] {
    &.aos-animate {
      height: 50rem !important;
      .lineH,
      .lineH2 {
        width: 5.5rem !important;
        margin-left: 3.4rem !important;
      }
      .smalltext {
        right: calc(3.4rem + 5.5rem + 0.2rem);
        font-size: 1rem;
        letter-spacing: 0.1rem;
      }
      .categories {
        right: calc(3.4rem + 5.5rem + 0.2rem);
      }
      .images {
        .greyBG {
          left: -2.8rem !important;
        }
        .myPhoto {
          left: -3.6rem !important;
        }
      }
    }
  }
}
@media only screen and (max-width: 960px) {
  .sluzby {
    height: 48rem;
    margin-bottom: 4rem;
    .blackDivSluzby {
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        .lineH,
        .lineH2 {
          width: 10.25rem;
          height: 1.5px;
          margin-left: 0;
        }
        .text {
          font-size: 2.5rem;
          line-height: 2.5rem;
          letter-spacing: 0.25rem;
        }
      }
      .smalltext {
        font-size: 0.875rem;
        letter-spacing: 0.0875rem;
        right: unset;
        width: 100%;
        text-align: center;
        margin-bottom: 3rem;
      }
      .categories {
        right: calc(2.5rem + 3.25rem + 0.2rem);
        .category {
          width: 42.875rem;
          height: calc(1.6875rem + 1.875rem + 3.125rem);
          padding-top: 1.6875rem;
          padding-bottom: 1.875rem;
          &.active {
            .absoluteCat {
              top: calc(
                (1.6875rem + 1.875rem + 3.125rem) * (var(--i) - 1) * (-1)
              ) !important;
              width: 46rem;
              .content {
                transition-delay: 0.5s;
                transform: scaleY(1);
              }
            }
          }
          .absoluteCat {
            padding-bottom: 1.875rem;
            .number {
              margin-right: 1.375rem;
              font-size: 1rem;
              letter-spacing: 0.15rem;
            }
            .catText {
              font-size: 3.125rem;
              line-height: 3.125rem;
              letter-spacing: 0.5rem;
            }
            .zobrazitViac {
              width: 8rem;
              height: 3.125rem;
              span {
                font-size: 0.75rem;
                line-height: 0.75rem;
                letter-spacing: 0.075rem;
                right: 3.3rem;
              }
            }
          }
        }
      }
    }
  }

  [data-aos='scrollTSluzby'] {
    &.aos-animate {
      height: 48rem !important;
      .lineH,
      .lineH2 {
        width: 16.5rem !important;
        margin-left: 0rem !important;
      }
      .smalltext {
        right: unset;
        font-size: 1rem;
        letter-spacing: 0.1rem;
      }
      .categories {
        right: unset;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        .absoluteCat {
          right: unset;
          left: 50%;
          transform: translate(-50%);
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .sluzby {
    height: 48rem;
    margin-bottom: 4rem;
    .blackDivSluzby {
      .contentWrapper {
        height: 100%;
      }
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        .lineH,
        .lineH2 {
          width: 2.25rem;
          height: 1.5px;
          margin-left: 0;
        }
      }
      .smalltext {
        font-size: 0.875rem;
        letter-spacing: 0.0875rem;
        right: unset;
        width: 100%;
        text-align: center;
        margin-bottom: 3rem;
      }
      .categories {
        position: absolute;
        right: unset;
        width: 100%;
        display: flex;
        align-items: center;
        /* right: calc(2.5rem + 2.25rem + 0.2rem); */
        .category {
          width: 82%;
          height: calc(1.6875rem + 1.875rem + 3.125rem);
          padding-top: 1.6875rem;
          padding-bottom: 1.875rem;
          right: unset;
          &.active {
            .absoluteCat {
              top: calc(
                (1.6875rem + 1.875rem + 3.125rem) * (var(--i) - 1) * (-1)
              ) !important;
              width: 100%;
              .content {
                transition-delay: 0.5s;
                transform: scaleY(1);
              }
            }
          }
          .absoluteCat {
            padding-bottom: 1.875rem;
            transform: none;
            left: unset;
            .number {
              margin-right: 0.75rem;
              font-size: 1rem;
              letter-spacing: 0.15rem;
            }
            .catText {
              font-size: 1.875rem;
              line-height: 1.875rem;
              letter-spacing: 0.1875rem;
            }
            .zobrazitViac {
              width: 8rem;
              height: 3.125rem;
              span {
                font-size: 0.625rem;
                line-height: 0.625rem;
                letter-spacing: 0.075rem;
                right: 2.3rem;
              }
            }
          }
        }
      }
    }
  }

  [data-aos='scrollTSluzby'] {
    &.aos-animate {
      height: 48rem !important;
      .lineH,
      .lineH2 {
        width: 4.5rem !important;
        margin-left: 0rem !important;
      }

      .smalltext {
        font-size: 1rem !important;
        letter-spacing: 0.1rem !important;
      }
      /*  .categories {
        .absoluteCat {
          right: unset;
          left: 50%;
          transform: translate(-50%);
        }
      } */
    }
  }
}

//zobraziť zavrieť text animacia
.zobrazitViacTextT-enter,
.zobrazitViacTextT-leave-to {
  opacity: 0;
}
.zobrazitViacTextT-enter-to,
.zobrazitViacTextT-leave {
  opacity: 1;
}

.zobrazitViacTextT-enter-active {
  transition-delay: 0.5s !important;
}
.zobrazitViacTextT-enter-active,
.zobrazitViacTextT-leave-active {
  transition: all 0.5s linear;
}
//zobraziť zavrieť text animacia

@media only screen and (min-width: 1921px) {
  .sluzby .blackDivSluzby {
    .top {
      .lineH,
      .lineH2 {
        display: none !important;
      }
    }
    .smalltext {
      right: 10px;
    }
    .categories {
      right: 7px;
    }
    .images {
      top: -75px;
      left: -65px;
      .greyBG,
      .myPhoto {
        transform: scale(1.2);
      }
      .greyBG {
        left: 8.8rem !important;
        top: 7.75rem !important;
      }
    }
  }
}
@media only screen and (max-width: 1200px) and (min-width: 961px) {
  .sluzby .blackDivSluzby {
    .categories .category {
      width: 34rem;
      &.active {
        width: 40rem;
        .absoluteCat {
          width: 100%;
        }
      }
    }
    .images.opened {
      left: -8rem;
    }
  }
}
</style>
