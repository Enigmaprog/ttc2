<template>
  <main class="ttc-app">
    <img class="ttc-app-bg ttc-app-bg-1" src="/bg-1.svg" alt="">
    <div class="container container-header">
      <Header />
    </div>

    <div class="container">
      <div class="banner">
        <div class="row">
          <div class="col-lg-5">
            <div class="banner-body">
              <h1 class="mb-2 pb-1">{{$t('Public Cloud')}}</h1>
              <h3 class="d-flex sub mb-4 pb-3">{{$t('Переноси свою работу в облако вместе с нами')}}</h3>
              <a href="https://console.ttc.kz" class="btn btn-primary">{{$t('Подключить услугу')}}</a>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="banner-img">
              <div class="video-intro">
                <!-- <img src="/banner-1.png" alt=""> -->
                <video autoplay loop muted class="bgvideo" id="bgvideo" poster="/banner-1.png">
                  <source src="/intro.mp4" type="video/mp4" />
                  <source src="/intro.webm" type="video/webm">
                  Your browser doesn't support HTML5 video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="service">
      <img class="ttc-app-bg ttc-app-bg-2" src="/bg-2.svg" alt="">
      <img class="ttc-app-bg ttc-app-bg-3" src="/bg-3.svg" alt="">
      <div class="container">
        <h2 class="text-center">{{$t('Основные услуги')}}</h2>
        <div class="row">
          <div v-for="service in services" :key="`service-${service.id}`" class="col-xl-4 col-lg-6 col-md-6">
            <div class="service-card">
              <div class="service-card-body">
                <div>
                  <img :src="service.img" alt="">
                  <h4>{{ $t(service.title) }}</h4>
                  <div>
                    <ul>
                      <li v-for="(l, i) in service.list" :key="`listitem-${service.id}-${i}`">{{$t(l)}}</li>
                      <!-- <li>Единый центр мониторинга</li>
                      <li>Оплата Pay as you GO</li> -->
                    </ul>
                  </div>
                </div>
                <a :href="service.link" class="btn btn-primary">{{$t('Подробнее')}}</a>
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
          <h2 class="mb-3 pb-1">{{$t('Подключите наши услуги прямо сейчас и заберите свой подарок в личном кабинете')}} </h2>
          <span class="sub mb-4 pb-3">{{$t('Зарегистрируйтесь на платформе и получите ваучер на бесплатное пользование')}}</span>
          <a href="https://console.ttc.kz" class="btn btn-light">{{$t('Перейти в Личный кабинет')}}</a>
        </div>
      </div>
    </div>

    <Footer />

    <img class="ttc-app-bg ttc-app-bg-4" src="/bg-4.svg" alt="">
    <img class="ttc-app-bg ttc-app-bg-5" src="/bg-5.svg" alt="">

  </main>
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
          list: ['Интуитивно понятный интерфейс', 'Единый центр мониторинга', 'Оплата Pay as you GO'],
          link: 'https://console.ttc.kz/auth/signup'
        },
        {
          id: 2,
          img: '/service-2.png',
          title: 'Виртуальный сервер',
          html: `<ul>
                    <li>Гибкая настройка виртуальной машины</li>
                    <li>Широкий выбор операционных систем</li>
                    <li>Высокая отказоустойчивость</li>
                  </ul>`,
          list: ['Гибкая настройка виртуальной машины', 'Широкий выбор операционных систем', 'Высокая отказоустойчивость'],
          link: 'https://docs-cloud.ttc.kz/userguide/console/instance'
        },
        {
          id: 3,
          img: '/service-3.png',
          title: 'Объектное хранилище S3',
          html: `<ul>
                    <li>Надежно и безопасно</li>
                    <li>Простой обмен документами</li>
                    <li>Без дополнительных платежей</li>
                  </ul>`,
          list: ['Надежно и безопасно', 'Простой обмен документами', 'Без дополнительных платежей'],
          link: 'https://docs-cloud.ttc.kz/userguide/console/object-storage'
        },
        {
          id: 4,
          img: '/service-4.png',
          title: 'Kubernetes',
          html: `<ul>
                    <li>Инструменты для контейнерных приложений</li>
                    <li>Выстраивание CI/CD </li>
                    <li>Высоконагруженные приложения</li>
                  </ul>`,
          list: ['Инструменты для контейнерных приложений', 'Выстраивание CI/CD', 'Высоконагруженные приложения'],
          link: 'https://docs-cloud.ttc.kz/userguide/console/managed-kubernetes'
        },
        {
          id: 5,
          img: '/service-5.png',
          title: 'Платформа приложений',
          html: `<ul>
                    <li>Доступ к Github, Gitlab, Docker</li>
                    <li>Масштабируемость решения</li>
                    <li>Удобное управление и мониторинг</li>
                  </ul>`,
          list: ['Доступ к Github, Gitlab, Docker', 'Масштабируемость решения', 'Удобное управление и мониторинг'],
          link: 'https://docs-cloud.ttc.kz/userguide/console/app-platform'
        },
        {
          id: 6,
          img: '/service-6.png',
          title: 'Маркетплейс',
          html: `<ul>
                    <li>Большой выбор сервисов</li>
                    <li>Быстрая развертка</li>
                    <li>Непрерывное обновление</li>
                  </ul>`,
          list: ['Большой выбор сервисов', 'Быстрая развертка', 'Непрерывное обновление'],
          link: 'https://docs-cloud.ttc.kz/userguide/console/simplehost'
        },
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
        z-index: -2;
        // height: 704px;
      }
      &-5 {
        bottom: 0px;
      }
      @media (max-width: 1919px) {
        &-1 {
          height: 894px;
        }
        &-2 {
          height: 1050px;
        }
        &-3 {
          bottom: -280px;
        }
        &-4 {
          bottom: 150px;
        }
        &-5 {
          height: 400px;
        }
      }
      @media (max-width: 1199px) {
        &-2 {
          height: 1740px;
        }
        &-4 {
          bottom: 360px;
        }
      }
      @media (max-width: 991px) {
        &-1 {
          height: 600px;
          object-position: -120px;
        }
        &-2 {
          top: -400px;
          height: 2200px;
        }
        &-3 {
          width: 200%;
          bottom: -500px;
          object-position: -500px;
          z-index: -2;
        }
      }
      @media (max-width: 767px) {
        &-1 {
          object-position: 0 -40px;
          height: 300px;
        }
        &-2 {
          top: -550px;
          height: 3520px;
        }
        &-3 {
          bottom: -540px;
        }
        &-4 {
          display: none;
        }
        &-5 {
          height: 500px;
        }
      }
    }

    .banner {
      padding: 80px 0;
      padding-bottom: 160px;
      &-body {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 500px;
      }
      &-img {
        width: 1080px;
        height: 800px;
        position: absolute;
        overflow: hidden;
        display: flex;
        align-items: center;
        top: 135px;
        outline: none;
        border: none;
        .video-intro {
          z-index: 0;
          width: 100%;
          position: absolute;
          top: -300px;
          height: 1080px;
          overflow: hidden;
          outline: none;
          border: none;
        }
        img, video {
          height: 100%;
          width: 100%;
          outline: none;
          border: none;
        }
      }
      @media (max-width: 991px) {
        padding: 40px 0;
        &-body {
          height: 260px;
        }
        &-img {
          width: 110%;
          height: 500px;
          position: relative;
          top: 30px;
          .video-intro {
            top: -85px;
            position: relative;
          }
        }
      }
      @media (max-width: 767px) {
        padding-bottom: 100px;
        &-img {
          height: 300px;
          width: 140%;
          left: -16px;
          top: 40px;
          .video-intro {
            top: -50px;
            left: -20px;
          }
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
        height: 100%;
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
      @media (max-width: 1440px) {
        .row {
          --bs-gutter-x: 20px;
        }
         &-card {
          padding: 14px;
          &-body {
            padding: 32px 18px;
          }
         }
      }
      @media (max-width: 991px) {
        &-card {
          &-body {
            padding: 30px 16px;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            min-height: 394px;
            h4 {
              font-weight: 700;
              font-size: 22px;
              line-height: 22px;
            }
          }
        }
        .row {
          --bs-gutter-y: 80px;
        }
      }
      @media (max-width: 767px) {
        &-card {
          &-body {
            min-height: 326px;
            img {
              height: 140px;
              margin-bottom: 4px;
            }
          }
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
      @media (max-width: 1919px) {
        padding: 80px 110px;
      }
      @media (max-width: 991px) {
        margin-top: 40px;
        padding: 60px 20px;
      }
      @media (max-width: 767px) {
        padding: 40px 12px;
        border-radius: 20px;
        h2 {
          font-weight: 700;
          font-size: 28px;
          line-height: 36px;
        }
        .sub {
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
        }
      }
    }

  }
</style>
