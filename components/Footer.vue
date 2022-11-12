<template>
  <div class="footer" id="footer">
    <div class="contentWrapper">
      <div class="flexDivs">
        <div class="infoDiv">
          <div class="title">
            <img src="~/assets/images/svg/footer/logo.svg" alt="Logo" />
          </div>
          <div class="myContent">
            <div class="left">
              <div class="phone">
                <div class="image">
                  <img
                    src="~/assets/images/svg/footer/phone.svg"
                    alt="Telefón"
                  />
                </div>
                <div class="texty">
                  <div class="nazov">
                    <span>Telefón</span>
                  </div>
                  <div class="udaj">
                    <a href="tel:+421951022146" class="text-decoration-none">
                      <span>+421 951 022 146</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="email">
                <div class="image">
                  <img
                    src="~/assets/images/svg/footer/email.svg"
                    alt="E-Mail"
                  />
                </div>
                <div class="texty">
                  <div class="nazov">
                    <span>Email</span>
                  </div>
                  <div class="udaj">
                    <a
                      href="mailto:mensvenuesk@gmail.com"
                      class="text-decoration-none"
                    >
                      <span>mensvenuesk@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="adresa">
                <div class="image">
                  <img
                    src="~/assets/images/svg/footer/adresa.svg"
                    alt="Adresa"
                  />
                </div>
                <div class="texty">
                  <div class="nazov">
                    <span>Adresa</span>
                  </div>
                  <div class="udaj">
                    <span>SNP 1715, 02302 <br />Krásno nad Kysucou</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="image">
                <img src="~/assets/images/svg/footer/clock.svg" alt="Hodiny" />
              </div>
              <div class="texty">
                <div class="nazov">
                  <span>Otváracie hodiny</span>
                </div>
                <div class="udaje">
                  <div class="udaj" v-for="day in this.openClock" :key="day.id">
                    <div class="day">
                      <span>{{ day.id }}</span>
                    </div>

                    <div class="hours">
                      <span>{{ day.text }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="socials">
            <div class="text">
              <span>Naše sociálne siete</span>
            </div>
            <div class="images">
              <a href="https://www.instagram.com/mens_venue/" target="_blank">
                <div class="insta">
                  <img
                    src="~/assets/images/svg/footer/insta.svg"
                    alt="Instagram"
                  />
                </div>
              </a>
              <a
                href="https://www.facebook.com/mensvenuebarbershop"
                target="_blank"
              >
                <div class="fb">
                  <img src="~/assets/images/svg/footer/fb.svg" alt="Facebook" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="mapa">
          <GoogleMap />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/Home/GoogleMap.vue'
export default {
  name: 'Footer',
  components: { GoogleMap },
  data() {
    return {
      openClock: [
        { id: 'Pondelok', text: 'Na objednávku' },
        { id: 'Utorok', text: 'Na objednávku' },
        { id: 'Streda', text: 'Na objednávku' },
        { id: 'Štvrtok', text: 'Na objednávku' },
        { id: 'Piatok', text: 'Na objednávku' },
        { id: 'Sobota', text: 'Na objednávku' },
        { id: 'Nedeľa', text: 'Na objednávku' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.footer {
  position: relative;
  background-color: #000000;
  padding-inline: 85px;
  padding-block: 69px;
  .contentWrapper {
    overflow-y: hidden;
  }
  .flexDivs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .infoDiv {
      display: flex;
      flex-wrap: wrap;
      width: 640px;
      .title {
        position: relative;
        width: 442px;
        height: 34px;
        margin-bottom: 40px;
        img {
          width: 100%;
        }
      }
      .myContent {
        display: flex;
        .left {
          display: flex;
          flex-direction: column;
          margin-right: 44px;

          .phone,
          .email,
          .adresa {
            display: flex;
            margin-bottom: 36px;
            .image {
              width: 49px;
              height: 49px;
              border-radius: 80%;
              background-color: #1f1f1f;
              margin-right: 18px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .texty {
              display: flex;
              flex-direction: column;
              margin-top: 5px;
              .nazov {
                span {
                  text-transform: uppercase;
                  color: #8a8a8a;
                  font-size: 14px;
                  letter-spacing: 1.4px;
                  font-weight: 300;
                  font-family: 'Raleway';
                }
              }
              .udaj {
                span {
                  color: white;
                  font-size: 16px;
                  letter-spacing: 1.6px;
                  font-family: 'Raleway';
                  font-weight: 500;
                }
              }
            }
          }
          .adresa {
            margin-bottom: 0;
          }
        }
        .right {
          display: flex;
          .image {
            width: 49px;
            height: 49px;
            border-radius: 80%;
            background-color: #1f1f1f;
            margin-right: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .texty {
            margin-top: 9px;
            .nazov {
              margin-bottom: 12px;
              span {
                text-transform: uppercase;
                color: #8a8a8a;
                font-size: 14px;
                letter-spacing: 1.4px;
                font-weight: 300;
                font-family: 'Raleway';
              }
            }
            .udaje {
              display: flex;
              flex-direction: column;
              .udaj {
                display: flex;
                justify-content: space-between;
                .day {
                  margin-right: 35px;
                  margin-bottom: 26px;
                  span {
                    font-size: 16px;
                    font-family: 'Raleway';
                    letter-spacing: 1.6px;
                    line-height: 1;
                    display: block;
                  }
                }
                .hours {
                  span {
                    font-size: 16px;
                    font-family: 'Raleway';
                    font-weight: 600;
                    letter-spacing: 1.6px;
                    line-height: 1;
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
      .socials {
        position: absolute;
        bottom: 2rem;
        .text {
          margin-bottom: 1rem;
          span {
            font-size: 1rem;
            font-family: 'Raleway';
            font-weight: 500;
            letter-spacing: 0.1rem;
          }
        }
        .images {
          display: flex;
          .fb,
          .insta {
            width: 49px;
            height: 49px;
            border-radius: 80%;
            background-color: #1f1f1f;
            margin-right: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .insta {
            margin-right: 1rem;
          }
        }
      }
    }
    .mapa {
      position: relative;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
      }
      width: 603px;
      height: 448px;
    }
  }
}
@media only screen and (max-width: 1920px) and (min-width: 1441px) {
  .footer {
    .flexDivs {
      .infoDiv {
        width: 700px;
      }
    }
  }
}
@media only screen and (max-width: 1350px) {
  .footer .flexDivs .mapa {
    width: 450px;
  }
}
@media only screen and (max-width: 960px) {
  .footer {
    padding-block: 79px;
    overflow: hidden;
    .flexDivs {
      flex-direction: column;
      align-items: center;
      .infoDiv {
        margin-bottom: 150px;
        .title {
          margin-inline: auto;
          margin-bottom: 58px;
        }
        .myContent {
          width: 100%;
          .left {
            margin-right: 0;
            .phone,
            .email,
            .adresa {
              .texty {
                margin-top: 0;
              }
            }
          }
          .right {
            margin-left: auto;
            .texty {
              margin-top: 0;
            }
          }
        }
        .socials {
          bottom: 31rem;
        }
      }
      .mapa {
        width: 642px;
        height: 375px;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .footer {
    padding-block: 39px;
    padding-inline: 0;
    .contentWrapper {
      overflow-y: hidden;
    }
    .flexDivs {
      height: 100%;
      .infoDiv {
        width: 90vw;
        margin-inline: auto;
        .title {
          width: 322px;
          height: 25px;
          margin-bottom: 46px;
        }
        .myContent {
          flex-direction: column;
          padding-left: 18px;
          .left {
            margin-bottom: 31px;
          }
          .right {
            margin-left: unset;
          }
        }
        .socials {
          left: 10vw;
          bottom: 27rem;
        }
      }
      .mapa {
        width: 100%;
        height: 346px;
        bottom: 0;
        position: relative;
      }
    }
  }
}
@media only screen and (min-width: 1921px) {
  .footer {
    .socials {
      bottom: -1rem !important;
    }
  }
}

@media only screen and (min-width: 1441px) {
  .footer {
    padding-inline: 100px;
  }
}
@media only screen and (min-width: 1600px) {
  .footer {
    padding-inline: 200px;
  }
}
@media only screen and (max-width: 1350px) and (min-width: 961px) {
  .footer {
    padding-block: 39px;
    padding-inline: 0;
    .flexDivs {
      height: 100%;
      flex-direction: column;

      .infoDiv {
        margin-inline: calc(5rem + 3rem);
        margin-block: 2rem;
        margin-bottom: 9rem;
        flex-direction: column;
        width: 100vw;
        .title {
          width: 322px;
          height: 25px;
          margin-bottom: 46px;
        }
        .myContent {
          padding-left: 18px;
          .left {
            margin-bottom: 31px;
          }
          .right {
            margin-left: unset;
          }
        }
        .socials {
          top: 28rem;
          left: 10rem;
        }
      }
      .mapa {
        width: 100%;
        height: 378px;
        bottom: 0;
        position: relative;
      }
    }
  }
}

@media only screen and (max-width: 1460px) and (min-width: 1351px) {
  .footer .flexDivs {
    display: grid;
    grid-template-columns: 1fr 460px;
    .infoDiv {
      width: unset;
    }
    .mapa {
      width: 450px;
    }
  }
}
@media only screen and (min-width: 1921px) {
  .footer .contentWrapper {
    overflow-y: visible;
  }
  .footer .flexDivs .infoDiv {
    width: 750px;
  }
}
@media only screen and (max-width: 400px) {
  .footer {
    .flexDivs {
      .infoDiv {
        width: 100vw;
        .socials {
          left: 20px;
          bottom: 27rem;
        }
      }
    }
  }
}
</style>
