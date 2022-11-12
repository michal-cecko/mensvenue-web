<template>
  <div id="onas" class="onas">
    <div
      data-aos="scrollTONas"
      data-aos-anchor-placement="top-center"
      data-aos-duration="500"
      class="blackDivONas"
    >
      <div class="contentWrapper">
        <div class="top">
          <div class="lineH"></div>
          <div class="text">O nás</div>
          <div class="lineH2 hidden-md-and-up"></div>
        </div>
        <div class="longtext" v-html="this.goodText"></div>
        <div class="images">
          <img
            class="greyBG"
            src="~/assets/images/ONas_grey.png"
            alt="O Nas Fotka"
          />
          <img
            class="myPhoto"
            src="~/assets/images/ONas_foto.png"
            alt="O Nas Pozadie"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ONas',
  data() {
    return {
      text: 'Náš cieľ je tvoriť obraz moderného barberingu v spojení s vizuálom osobnosti. O štýl a výsledok priamo pre Vás sa postará skúsený personál školený skvelými edukátormi z domova i zo zahraničia. <br><br> Príďte sa presvedčiť o zážitku',
      addToWrap:
        '<a href="https://services.bookio.com/mens-venue/widget?lang=sk" target="_blank"><span>TU</span></a><span>.</span>',
      goodText: '',
    }
  },
  mounted() {
    this.goodText = this.$options.filters.wrapText(this.text, this.addToWrap)
  },
}
</script>
<style lang="scss">
.onas {
  width: 100%;
  //border: 1px white solid;
  margin-top: 60px;
  margin-bottom: 8rem;
  height: 32.5rem;
  .blackDivONas {
    height: 21.25rem;
    position: relative;
    padding-top: 8rem;
    background-color: #000000;
    .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.5rem;
      transition: 0.5s all ease-in-out;
      .lineH,
      .lineH2 {
        width: 6.25rem;
        height: 1.5px;
        background-color: #9d9d9d;
        margin-right: 2.5rem;
        transition: 0.5s all ease-in-out;
      }
      .text {
        text-transform: uppercase;
        font-family: 'Gruppo';
        color: #9d9d9d;
        font-size: 2.5rem;
        letter-spacing: 0.25rem;
        transition: 0.5s all ease-in-out;
      }
    }
    .longtext {
      position: relative;
      margin-left: calc(7.5rem + 3.4rem);
      width: 26rem;
      opacity: 0;
      transition: 0.5s all ease-in-out;
      span {
        transition: 0.5s all ease-in-out;
        clip-path: inset(100% 0 0 0);
        font-family: 'Raleway';
        font-weight: 300;
        font-size: 1rem;
        letter-spacing: 0.1rem;
      }
      a {
        text-decoration: underline;
        color: white;
        span {
          clip-path: none;
          font-weight: 600;
          text-transform: uppercase;
        }
      }
    }
    .images {
      right: 0;
      top: 0;
      position: absolute;
      pointer-events: none;
      img {
        opacity: 0;
        transition: 0.5s all ease-in-out;
        right: 0;
        position: absolute;
      }
      .myPhoto {
        width: 631px;
        height: 386px;
        transform: translateX(-50px);
        top: 7.8rem;
      }
      .greyBG {
        top: 16.25rem;
      }
    }
  }
}
[data-aos='scrollTONas'] {
  transition-property: all;
  &.aos-animate {
    height: 32.5rem;
    .top {
      margin-bottom: 2rem !important;
    }
    .lineH {
      background-color: #fff !important;
      width: 7.5rem !important;
      margin-right: 3.4rem !important;
    }
    .text {
      color: #fff !important;
      font-size: 3.125rem !important;
      letter-spacing: 0.3125rem !important;
    }
    .longtext {
      left: 0 !important;
      opacity: 1 !important;
      & > span {
        clip-path: inset(0% 0 0 0);
        //transition-delay: 0 !important;
      }
    }

    .myPhoto {
      opacity: 1 !important;
      right: 0 !important;
      transform: translateX(0px) !important;
    }
    .greyBG {
      opacity: 1 !important;
      right: 7.375rem !important;
    }
  }
}
@media only screen and (max-width: 1440px) {
  .onas {
    .blackDivONas {
      .top {
        .lineH {
          width: 4rem;
          margin-right: 2rem;
        }
        .text {
          font-size: 2.2rem;
          letter-spacing: 0.22rem;
        }
      }
      .longtext {
        margin-left: calc(5rem + 3rem);
        span {
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
        }
      }
      .images {
        .myPhoto {
          width: 37.5rem;
        }
        .greyBG {
          width: 32.5rem;
        }
      }
    }
  }
  [data-aos='scrollTONas'] {
    &.aos-animate {
      .lineH {
        width: 5rem !important;
        margin-right: 3rem !important;
      }
      .text {
        font-size: 3rem !important;
        letter-spacing: 0.3rem !important;
      }
    }
  }
}
@media only screen and (max-width: 960px) {
  .onas {
    margin-top: 4rem;
    height: 47.5rem;
    .blackDivONas {
      height: 21rem;
      padding-top: 9rem;
      .top {
        justify-content: space-between;
        margin-bottom: 4rem;
        .text {
          font-size: 2.5rem;
          letter-spacing: 0.25rem;
        }
        .lineH,
        .lineH2 {
          margin-right: 0;
          width: 17rem;
        }
      }
      .longtext {
        font-weight: 300;
        margin-inline: auto;
        padding-inline: 4rem;
        text-align: center;
        width: unset;
      }
      .images {
        height: 5rem;
        left: 0;
        top: 17rem;
        img {
          right: unset;
        }
        .myPhoto {
          right: 0;
          width: 40rem;
        }
        .greyBG {
          left: 0;
          width: 38.4rem;
        }
      }
    }
  }
  [data-aos='scrollTONas'] {
    transition-property: all;
    &.aos-animate {
      height: 47.5rem;
      .top {
        justify-content: space-between !important;
        margin-bottom: 3rem !important;
      }
      .lineH,
      .lineH2 {
        background-color: #fff !important;
        margin-right: 0 !important;
        width: 17rem !important;
      }
      .text {
        font-size: 2.5rem !important;
        letter-spacing: 0.25rem !important;
      }
      .myPhoto {
        right: 3.375rem !important;
      }
      .greyBG {
        left: 3.375rem !important;
        top: 14rem !important;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .onas {
    height: 40rem;
    margin-top: 3rem;
    margin-bottom: 6rem;
    .blackDivONas {
      overflow: hidden;
      height: 13.75rem;
      padding-top: 0;
      .top {
        padding-top: 20%;
        .lineH,
        .lineH2 {
          width: 1rem;
        }
      }
      .longtext {
        margin-left: unset;
        padding-inline: 1rem;
        font-size: 0.875rem;
      }
      .images {
        width: 100vw !important;
        img {
          width: 105vw !important;
        }
        .myPhoto {
          right: 5rem;
          height: unset;
        }
        .greyBG {
          left: 5rem;
        }
      }
    }
  }
  [data-aos='scrollTONas'] {
    transition-property: all;
    &.aos-animate {
      height: 40rem;
      .top {
        margin-bottom: 3.5rem !important;
      }
      .lineH,
      .lineH2 {
        width: 6rem !important;
      }
      .myPhoto {
        right: 0 !important;
      }
      .greyBG {
        left: 0 !important;
        top: 11.5rem !important;
      }
    }
  }
}
@media only screen and (max-width: 1200px) and (min-width: 961px) {
  .onas .blackDivONas {
    .images {
      top: 3rem;
      transform: scale(0.7);
    }
  }
}
@media only screen and (min-width: 1921px) {
  .onas .blackDivONas {
    .top {
      .lineH,
      .lineH2 {
        display: none;
      }
    }
    .longtext {
      margin-left: 0 !important;
    }
    .images {
      right: 65px;
      top: -134px;
      .myPhoto,
      .greyBG {
        transform: scale(1.2);
      }
    }
  }
}
</style>
