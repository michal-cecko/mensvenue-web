<template>
  <div class="feedback" id="feedback">
    <div
      data-aos="scrollTFeedback"
      data-aos-anchor-placement="top-center"
      data-aos-duration="5000"
      class="blackDivFeedback"
    >
      <div class="contentWrapper">
        <div class="top">
          <div class="title">
            <div class="lineH"></div>
            <div class="text text-uppercase">
              <span>Feedback</span>
            </div>
            <div class="lineH2 hidden-md-and-up"></div>
          </div>

          <div class="smalltext text-uppercase">
            <span>Povedali o nás</span>
          </div>
        </div>

        <div class="myCarousel">
          <client-only>
            <Flickity
              class="flickity"
              ref="flickity"
              :options="flickityOptions"
            >
              <div
                v-for="(feedback, index) in this.feedbacks"
                :key="index"
                class="carousel-cell"
              >
                <div class="imageDiv">
                  <img :src="feedback.image" alt="Feedback image" />
                </div>
              </div>
            </Flickity>
          </client-only>
        </div>

        <div class="rightCarousel">
          <client-only>
            <Flickity
              class="flickityText"
              ref="flickityText"
              :options="flickityOptionsText"
            >
              <div
                v-for="(feedback, index) in this.feedbacks"
                :key="index"
                class="carousel-cell-text"
              >
                <div class="rightDiv">
                  <div class="texty">
                    <div class="rightTop">
                      <div class="name">
                        <span>{{ feedback.name }}</span>
                      </div>
                      <div class="count">
                        <span>{{ index + 1 }}/{{ feedbacks.length }}</span>
                      </div>
                    </div>
                    <div
                      class="desc"
                      :inner-html.prop="feedback.text | wrapText('')"
                    ></div>
                  </div>
                </div>
              </div>
            </Flickity>
          </client-only>
        </div>

        <div class="buttons">
          <v-btn @click="showPrev()" class="prevBtn" fab>
            <img
              src="~/assets/images/svg/feedback_arrow.svg"
              alt="feedback arrow"
            />
          </v-btn>
          <v-btn @click="showNext()" class="nextBtn" fab>
            <img
              src="~/assets/images/svg/feedback_arrow.svg"
              alt="feedback arrow"
            />
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Feedback',
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        draggable: true,
        freeScroll: false,
        imagesLoaded: true,
        pageDots: false,
        wrapAround: true,
        cellAlign: 'right',
        accessibility: true,
        percentPosition: false,
        resize: true,
        autoPlay: 8000,
      },
      flickityOptionsText: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        cellAlign: 'center',
        accessibility: false,
        fade: true,
        draggable: true,
      },

      feedbacks: [
        {
          name: 'Marko',
          image: 'images/feedback/1.jpg',
          text: '"Oceňujem prístup a služby k zákazníkovi od prvého momentu po príchode. Som vždy spokojný na 110 percent, Určite sa objednám znova."',
        },
        {
          name: 'Filip',
          image: 'images/feedback/2.jpg',
          text: '"Som veľmi spokojný s prístupom personálu, veľmi pekné priestory, teším sa na ďalšiu návštevu."',
        },
        {
          name: 'Braňo',
          image: 'images/feedback/3.jpg',
          text: '"Ohurújuce priestory, ktoré na mňa zapôsobili viac asi ako na bežného klienta. Jednoduché, vkusné, detailné. Tak ako sa mi to páči. Samotný výsledok strihania je už len čerešničkou na torte 🔥"',
        },
        {
          name: 'Ondrej',
          image: 'images/feedback/4.jpg',
          text: '"Precíznosť a dôraz na detaily - presne to ponúka Men\'s Venue barbershop s modernými priestormi, ktoré vo Vás spolu so službami vzbudia pocit exkluzívnosti a výnimočnosti."',
        },
        {
          name: 'Tomáš',
          image: 'images/feedback/5.jpg',
          text: '"Men\'s venue je špičkový barbershop na Kysuciach. So službami som vždy nadmieru spokojný, je vidieť, že barber Tomáš patrí medzi kvalitných a veľmi zručných barberov."',
        },
      ],
    }
  },
  updated() {
    this.slideEventListener()
    this.slideEventListenerMobileChange()
    this.slideEventListenerChange()
  },
  methods: {
    slideEventListenerChange() {
      let carText = this.$refs.flickityText
      this.$refs.flickity.on('change', function (index) {
        if (typeof index == 'number') {
          carText.selectCell(index, true, false)
        }
      })
    },
    slideEventListenerMobileChange() {
      let myCar = this.$refs.flickity
      this.$refs.flickityText.on('change', function (index) {
        if (typeof index == 'number') {
          myCar.selectCell(index, true, false)
        }
      })
    },
    slideEventListener() {
      this.$refs.flickity.on(
        'staticClick',
        function (event, pointer, cellElement, cellIndex) {
          if (typeof cellIndex == 'number') {
            this.selectCell(cellIndex, true, false)
            setTimeout(() => {
              this.playPlayer()
            }, 1000)
          }
        }
      )
    },
    showPrev() {
      this.$refs.flickity.previous()
      this.$refs.flickity.stopPlayer()
      setTimeout(() => {
        this.$refs.flickity.playPlayer()
      }, 500)
    },
    showNext() {
      this.$refs.flickity.next()
      this.$refs.flickity.stopPlayer()
      setTimeout(() => {
        this.$refs.flickity.playPlayer()
      }, 500)
    },
  },
}
</script>
<style lang="scss">
.rightCarousel .flickity-slider {
  transform: translateX(0) !important;
  .carousel-cell-text {
    transform: translateX(0) !important;
  }
}
@media only screen and (max-width: 780px) {
  .feedback {
    .blackDivFeedback {
      .rightCarousel {
        width: 250px;
      }
    }
  }
}
@media only screen and (max-width: 720px) {
  .feedback {
    .blackDivFeedback {
      .rightCarousel {
        width: 200px;
      }
    }
  }
}
@media only screen and (max-width: 680px) {
  .feedback {
    .blackDivFeedback {
      .rightCarousel {
        width: 180px;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .rightCarousel .flickity-slider {
    transform: translateX(0) !important;
  }
}
</style>
<style lang="scss" scoped>
.feedback {
  width: 100%;
  margin-bottom: 11.875rem;
  height: 29.375rem;
  .blackDivFeedback {
    position: relative;
    height: 20rem;
    background-color: #000000;
    .top {
      padding-top: 7.5rem;
      .title {
        display: flex;
        flex-direction: row;
        align-items: center;

        transition: 0.5s all ease-in-out;
        margin-bottom: 1.3rem;
        .lineH,
        .lineH2 {
          width: 4.5rem;
          height: 1.5px;
          background-color: #9d9d9d;
          margin-right: 2.5rem;
          transition: 0.5s all ease-in-out;
        }
        .text {
          span {
            font-family: 'Gruppo';
            font-weight: 600;
            color: #9d9d9d;
            font-size: 2.5rem;
            line-height: 2.5rem;
            letter-spacing: 0.25rem;
            transition: 0.5s all ease-in-out;
          }
        }
      }
      .smalltext {
        position: absolute;
        left: calc(4.5rem + 2.5rem);
        transition: 0.5s all ease-in-out;
        span {
          font-family: 'Raleway';
          font-weight: 500;
          font-size: 0.8rem;
          letter-spacing: 0.08rem;
          color: #9d9d9d;
          transition: 0.5s all ease-in-out;
        }
      }
    }
    .myCarousel,
    .buttons {
      opacity: 0;
      transform: scale(0.8);
      transition: 0.5s all ease-in-out;
    }
    .myCarousel {
      width: calc(180px + 180px * 3 + 23px * 3 + 35px + 80px);
      position: absolute;
      bottom: -66px;
      left: calc(6.5rem + 3.5rem);
      .carousel-cell {
        position: relative;
        max-width: 180px;
        width: 100%;
        height: 431px;
        margin-right: 23px;
        z-index: 5;
        .imageDiv {
          -moz-transition: all 0.5s ease;
          -o-transition: all 0.5s ease;
          -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;

          bottom: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          max-width: 180px;
          max-height: 250px;
          img {
            display: block;
            width: auto;
            position: absolute;
            bottom: 0;
            left: 50%;
            height: 100%;
            filter: grayscale(100%);
            -moz-transition: all 0.5s ease;
            -o-transition: all 0.5s ease;
            -webkit-transition: all 0.5s ease;
            transition: all 0.5s ease;
            -webkit-transform: translateX(-218px);
            -moz-transform: translateX(-218px);
            transform: translateX(-218px);
          }
        }

        &.is-selected {
          z-index: 50;
          transition: z-index 1ms;
          .imageDiv {
            max-height: 431px;
            img {
              filter: grayscale(0);
            }
          }
        }
      }
    }
    .rightCarousel {
      width: 360px;
      margin-left: auto;
      position: relative;
      transform: translate(-250px, -60px);
      .flickityText {
        .carousel-cell-text {
          opacity: 0;
          margin-right: 0px;
          transition: opacity 500ms;
          height: 500px;
          width: 100%;
          &.is-selected {
            opacity: 1;
            .rightDiv {
              .texty {
                .rightTop {
                  .name {
                    span {
                      clip-path: inset(0% 0 0 0);
                    }
                  }
                  .count {
                    span {
                      clip-path: inset(0% 0 0 0);
                    }
                  }
                }
                .desc::v-deep {
                  span {
                    clip-path: inset(0% 0 0 0);
                  }
                }
              }
            }
          }
          .rightDiv {
            transition: all 500ms ease-in-out;
            opacity: 0;

            width: 100%;
            position: absolute;
            top: 0rem;
            right: 0rem;
            .texty {
              width: 100%;
              .rightTop {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 29px;
                .name {
                  span {
                    transition: 1.2s all ease-in-out;
                    font-family: 'Raleway';
                    font-size: 14px;
                    color: #7d7d7d;
                    font-weight: 700;
                    clip-path: inset(100% 0 0 0);
                  }
                }
                .count {
                  span {
                    transition: 1.2s all ease-in-out;
                    font-family: 'Raleway';
                    font-size: 1.125rem;
                    letter-spacing: 0.1125rem;
                    clip-path: inset(100% 0 0 0);
                  }
                }
              }
              .desc::v-deep {
                span {
                  transition: 1.2s all ease-in-out;
                  font-family: 'Raleway';
                  font-size: 1.1rem;
                  font-weight: 600;
                  line-height: 2rem;
                  clip-path: inset(100% 0 0 0);
                }
              }
            }
          }
        }
      }
    }
    .buttons {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      right: 250px;
      bottom: -25px;
      .prevBtn,
      .nextBtn {
        background-color: #979797;
        height: 50px;
        width: 50px;
      }
      .prevBtn {
        margin-right: 25px;
      }
      .nextBtn {
        transform: rotate(180deg);
      }
    }
  }
}
[data-aos='scrollTFeedback'] {
  transition-property: all;
  &.aos-animate {
    height: 29.375rem !important;
    .top {
      .lineH,
      .lineH2 {
        background-color: #fff !important;
        width: 6.5rem !important;
        margin-right: 3.5rem !important;
      }
      .text {
        span {
          font-size: 3.125rem !important;
          color: #fff !important;
        }
      }
      .smalltext {
        left: calc(6.5rem + 3.5rem) !important;
        span {
          letter-spacing: 0.1rem !important;
          font-size: 1rem !important;
          color: #fff !important;
        }
      }
    }
    .myCarousel,
    .buttons {
      transition: 0.5s all ease-in-out;
      transform: scale(1);
      opacity: 1;
    }
    .rightDiv {
      opacity: 1 !important;
      .texty {
        .rightTop {
          .name {
            span {
              clip-path: inset(0% 0 0 0);
            }
          }
          .count {
            span {
              clip-path: inset(0% 0 0 0);
            }
          }
        }
        .desc::v-deep {
          span {
            clip-path: inset(0% 0 0 0);
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1690px) and (min-width: 1441px) {
  .feedback {
    .blackDivFeedback {
      .myCarousel {
        transform: scale(0.8) translateX(-200px);
      }
    }
  }
}
@media only screen and (max-width: 1440px) {
  .feedback {
    margin-bottom: 9.875rem;
    .blackDivFeedback {
      .myCarousel {
        left: 47px;
      }
      .rightCarousel {
        width: 321px;
        transform: translate(-125px, -60px);
      }
      .buttons {
        right: 7.8125rem;
      }
    }
  }
}
@media only screen and (max-width: 1400px) and (min-width: 961px) {
  .feedback {
    .blackDivFeedback {
      .myCarousel {
        transform: scale(0.8) translate(-125px, 0px);
      }
      .rightCarousel {
        transform: scale(0.8) translate(-125px, -60px);
      }
      .buttons {
        right: 7.8125rem;
      }
    }
  }
}
@media only screen and (max-width: 960px) {
  .feedback {
    height: 51rem;
    .blackDivFeedback {
      height: 20rem;
      .contentWrapper {
        overflow-y: hidden;
      }
      .top {
        .title {
          justify-content: space-between;
          .lineH,
          .lineH2 {
            margin: 0 !important;
            width: 9.125rem;
          }
        }
        .smalltext {
          left: 50% !important;
          transform: translate(-50%) !important;
          span {
          }
        }
      }
      .myCarousel,
      .buttons {
        transition: all 100ms;
      }
      .myCarousel {
        width: 310px;
        left: 60px;
        bottom: 82px;
        .carousel-cell {
          margin-right: 200px;
        }
      }
      .rightCarousel {
        transform: translate(-60px, 115px);
        .flickityText {
          .carousel-cell-text {
            .rightDiv {
              transition: all 100ms;
            }
          }
        }
      }
      .buttons {
        bottom: 82px;
        right: 60px;
      }
    }
  }
  [data-aos='scrollTFeedback'] {
    &.aos-animate {
      height: 51rem !important;
      .top {
        .lineH,
        .lineH2 {
          width: 12.125rem !important;
        }
      }
      .myCarousel,
      .buttons {
        transition: all 500ms !important;
      }
      .rightCarousel {
        .flickityText {
          .carousel-cell-text {
            .rightDiv {
              transition: all 500ms !important;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .feedback {
    height: 47rem;
    .blackDivFeedback {
      height: 15rem;
      .contentWrapper {
        overflow: hidden;
        height: 100%;
      }
      .top {
        padding-top: 69px;
        .title {
          .lineH,
          .lineH2 {
            width: 0.5rem;
          }
          .text {
            span {
              font-size: 30px;
            }
          }
        }
      }
      .myCarousel {
        bottom: unset;
        top: 229px;
        left: 22px;
        width: 263px;
        .carousel-cell {
          height: 337px;
          margin-right: 200px;
          &.is-selected {
            .imageDiv img {
              transform: translateX(-170px);
            }
          }
        }
      }
      .rightCarousel {
        width: 100vw;
        transform: translate(0px, 95px);
        .flickityText {
          .carousel-cell-text {
            &.is-selected {
              z-index: 999;
              transform: translateX(0) !important;
            }
            .rightDiv {
              height: 100%;
              .texty {
                .rightTop {
                  padding-bottom: 29px;
                  .name {
                    position: absolute;
                    top: 412px;
                    left: 35px;
                  }
                  .count {
                    position: absolute;
                    top: 0;
                    right: 19px;
                  }
                }
                .desc::v-deep {
                  width: 313px;
                  position: absolute;
                  bottom: 125px;
                  left: 35px;
                  span {
                    line-height: 1.5rem;
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
      .buttons {
        bottom: 85px;
        right: 21px;
        .prevBtn,
        .nextBtn {
          width: 32px;
          height: 32px;
          img {
            transform: scale(0.8);
          }
        }
        .prevBtn {
          margin-right: 20px;
        }
      }
    }
  }
  [data-aos='scrollTFeedback'] {
    &.aos-animate {
      height: 47rem !important;
      .top {
        .lineH,
        .lineH2 {
          width: 1rem !important;
        }
        .text {
          span {
            font-size: 40px !important;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 1921px) {
  .feedback {
    height: 38rem !important;
    .blackDivFeedback {
      .contentWrapper {
        height: 100%;
      }
      .lineH,
      .lineH2 {
        display: none;
      }
      .top {
        .smalltext {
          left: 0 !important;
        }
      }
      .myCarousel {
        top: 180px;
        left: 8.5rem;
        transform: scale(1.3);
      }
      .rightCarousel {
        margin-right: 65px;
        transform: scale(1.3);
        .carousel-cell-text {
          height: 300px !important;
        }
      }
      .buttons {
        //ROB TY
        transform: scale(1.3) translateX(-1.5rem);
        bottom: -25px !important;
        right: 0 !important;
      }
    }
  }
  [data-aos='scrollTFeedback'] {
    &.aos-animate {
      height: 38rem !important;
    }
  }
}
@media only screen and (max-width: 1200px) and (min-width: 961px) {
  .feedback .blackDivFeedback .myCarousel {
    transform: scale(0.65) translate(-270px, 56px);
  }
}
</style>
