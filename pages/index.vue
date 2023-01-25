<template>
  <div class="ttc-app">
    <img class="ttc-app-bg ttc-app-bg-1" src="/bg-1.svg" alt="">
    <div class="container container-header">
      <Header />
    </div>

    <div class="container">
      <div class="banner">
        <div class="row">
          <div class="col-lg-5">
            <div class="d-flex h-100 flex-column justify-content-center">
              <h1 class="mb-2 pb-1">Public Cloud</h1>
              <span class="d-flex sub mb-4 pb-3">Переноси свою работу в облако вместе с нами</span>
              <a href="#" class="btn btn-primary">Подключить услугу</a>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="banner-img">
              <img src="/banner-1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="service">
      <img class="ttc-app-bg ttc-app-bg-2" src="/bg-2.svg" alt="">
      <img class="ttc-app-bg ttc-app-bg-3" src="/bg-3.svg" alt="">
      <div class="container">
        <h2 class="text-center">Основные услуги</h2>
        <div class="row">
          <div v-for="service in services" :key="`service-${service.id}`" class="col-lg-4 col-md-6">
            <div class="service-card">
              <div class="service-card-body">
                <div>
                  <img :src="service.img" alt="">
                  <h4>{{ service.title }}</h4>
                  <div v-html="service.html">
                    <ul>
                      <li>Интуитивно понятный интерфейс</li>
                      <li>Единый центр мониторинга</li>
                      <li>Оплата Pay as you GO</li>
                    </ul>
                  </div>
                </div>
                <a :href="service.link" class="btn btn-primary">Подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Slider />

    <div class="call-block">
      <div class="container">
        <div class="call-block-body">
          <h2 class="mb-3 pb-1">Подключите наши услуги прямо сейчас и заберите свой подарок в личном кабинете </h2>
          <span class="sub mb-4 pb-3">Зарегистрируйтесь на платформе и получите ваучер на бесплатное пользование</span>
          <button class="btn btn-light">Перейти в Личный кабинет</button>
        </div>
      </div>
    </div>

    <Footer />

    <img class="ttc-app-bg ttc-app-bg-4" src="/bg-4.svg" alt="">
    <img class="ttc-app-bg ttc-app-bg-5" src="/bg-5.svg" alt="">

  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  
  name: 'IndexPage',
  data() {
    return {
      services: [
        {
          id: 1,
          img: '/service-1.png',
          title: 'Облачная платформа',
          html: `<ul>
                    <li>Интуитивно понятный интерфейс</li>
                    <li>Единый центр мониторинга</li>
                    <li>Оплата Pay as you GO</li>
                  </ul>`,
          link: '#'
        },
        {
          id: 2,
          img: '/service-2.png',
          title: 'Облачная платформа',
          html: `<ul>
                    <li>Интуитивно понятный интерфейс</li>
                    <li>Единый центр мониторинга</li>
                    <li>Оплата Pay as you GO</li>
                  </ul>`,
          link: '#'
        },
        {
          id: 3,
          img: '/service-3.png',
          title: 'Облачная платформа',
          html: `<ul>
                    <li>Интуитивно понятный интерфейс</li>
                    <li>Единый центр мониторинга</li>
                    <li>Оплата Pay as you GO</li>
                  </ul>`,
          link: '#'
        },
        {
          id: 4,
          img: '/service-4.png',
          title: 'Облачная платформа',
          html: `<ul>
                    <li>Интуитивно понятный интерфейс</li>
                    <li>Единый центр мониторинга</li>
                    <li>Оплата Pay as you GO</li>
                  </ul>`,
          link: '#'
        },
        {
          id: 5,
          img: '/service-5.png',
          title: 'Облачная платформа',
          html: `<ul>
                    <li>Интуитивно понятный интерфейс</li>
                    <li>Единый центр мониторинга</li>
                    <li>Оплата Pay as you GO</li>
                  </ul>`,
          link: '#'
        },
        {
          id: 6,
          img: '/service-6.png',
          title: 'Облачная платформа',
          html: `<ul>
                    <li>Интуитивно понятный интерфейс</li>
                    <li>Единый центр мониторинга</li>
                    <li>Оплата Pay as you GO</li>
                  </ul>`,
          link: '#'
        }
      ],
    };
  },
})
</script>

<style lang="scss">
  .ttc-app {
    position: relative;
    overflow: hidden;
    .container-header {
      height: 100px;
      @media (max-width: 991px) {
        height: 84px;
        padding: 0;
      }
    }
    &-bg {
      position: absolute;
      z-index: -1;
      height: auto;
      width: 100%;
      object-fit: cover;
      &-1 {
        top: 0;
        left: 0;
        right: 0;
      }
      &-2 {
        top: -64px;
        height: 880px;
      }
      &-3 {
        bottom: -152px;
        width: 95%;
      }
      &-4 {
        bottom: 0px;
        width: 95%;
        right: 0;
        // height: 704px;
      }
      &-5 {
        bottom: 0px;
      }
    }

    .banner {
      height: 600px;
      &-img {
        width: 100%;
        height: 500px;
        overflow: hidden;
        display: flex;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }

    .service {
      position: relative;
      .row {
        --bs-gutter-y: 104px;
        margin-top: 0px;
      }
      &-card {
        background: #FFFFFF;
        border: 1px solid rgba(39, 63, 79, 0.15);
        border-radius: 16px;
        padding: 16px;
        transition: .2s;
        &:hover {
          box-shadow: 0px 30px 70px rgba(214, 219, 217, 0.5);
          transform: scale(1.02);
          transition: .2s;
        }
        &-body {
          min-height: 428px;
          padding: 32px;
          background: linear-gradient(230.76deg, #F2F7F5 1.05%, rgba(242, 247, 245, 0) 100%), url(/service-bg.png);
          background-repeat: no-repeat;
          border-radius: 12px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: .2s;
          h4 {
            margin-bottom: 24px;
          }
          ul {
            padding-left: 20px;
            li {
              margin-bottom: 16px;
              &::marker {
                color: #1C984F;
              }
            }
          }
          img {
            height: 168px;
            margin-top: -104px;
            margin-bottom: 16px;
          }
        }
        &:hover .service-card-body {
          background: linear-gradient(230.76deg, #F2F7F5 1.05%, rgba(242, 247, 245, 0) 100%), url(/service-bg-hover.png);
          transition: .2s;
        }
      }
    }

    .call-block-body {
      background: linear-gradient(289.76deg, #279D50 0%, #70BE55 100%);
      box-shadow: 0px 50px 100px rgba(32, 154, 79, 0.15);
      border-radius: 40px;
      margin-top: 100px;
      color: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      padding: 80px 155px;
      span {
        color: rgba(255, 255, 255, 0.8);
      }
    }

  }
</style>
