<template>
    <div class="info-slider">
      <div class="container">
        <h2 class="mb-3 pb-1 text-center">Информативные дашборды и понятный интерфейс</h2>
        <h4 class="sub text-center">Информация об используемых и доступных виртуальных ресурсах всегда под рукой. </h4>

        <div class="info-swiper-wrap">
          <div class="info-swiper-wrap-bg"></div>
          <img class="info-swiper-wrap-shadow" src="/slider-shadow.png" alt="">
            <div @click="swiper.slidePrev()" :class="{'disabled' : swiper.isBeginning }" class="swiper-button-nav swiper-button-nav__small swiper-button-nav-prev"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 36L30 24L18 12" stroke="#273F4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="info-swiper">
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide" v-for="(slide, i) in 3" :key="`slide-${i}`">
                        <img :src="`/slide-${i+1}.jpeg`" alt="">
                    </div>
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-infoSlider"></div>
            <div @click="swiper.slideNext()" :class="{'disabled' : swiper.isEnd }" class="swiper-button-nav swiper-button-nav__small swiper-button-nav-next"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 36L30 24L18 12" stroke="#273F4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>
    </div>
</template>

<script lang="js">
import Vue from 'vue'

// import Swiper JS
import Swiper, { Pagination, Autoplay } from 'swiper';
Swiper.use([Pagination, Autoplay]);
// import Swiper styles
import 'swiper/swiper-bundle.min.css';

export default Vue.extend({
  name: 'IndexSlider',
  mounted() {
    this.swiper = new Swiper('.info-swiper', {
      pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true
      },
      autoplay: {
          delay: 10000
      },
      slidesPerView: 1,
      spaceBetween: 0,
      // centeredSlides: true,
      enabled: 2 > 1,
      breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 1,
            spaceBetween: 0
        }
      }
    });
  },
  data() {
    return {
      swiper: {},
    };
  },
})
</script>

<style lang="scss">
.info-slider {
    margin-top: 140px;
    // overflow: hidden;
    padding-bottom: 120px;
    .swiper-button-nav {
    background: #F2F7F5;
    border: 1px solid #DFE2E5;
    height: 340px;
    width: 340px;
    border-radius: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    transition: .2s;
    &::after {
        content: '';
        background: url(/slider-design.svg);
        height: 280px;
        width: 272px;
        display: block;
        position: absolute;
        z-index: -1;
    }
    svg path{
        stroke: #B4C2BB;
    }
    &:hover {
        background: #EBF1EF;
        svg path{
        stroke: #273F4F;
        }
    }
    &-prev {
        left: -40px;
        padding-left: 74px;
        &::after {
        left: -110px;
        top: 75px;
        }
        svg {
        transform: rotate(180deg);
        }
    }
    &-next {
        right: -40px;
        justify-content: flex-end;
        padding-right: 74px;
        &::after {
        right: -110px;
        bottom: 75px;
        transform: rotate(180deg);
        }
    }
    }
    .swiper-pagination-infoSlider {
    position: absolute;
    bottom: -22px;
    .swiper-pagination-bullet {
        width: 24px;
        height: 8px;
        background: #273F4F;
        opacity: 0.3;
        border-radius: 10px;
        margin: 0 2px;
        &-active {
        background: #273F4F;
        width: 48px;
        opacity: 1;
        }
    }
    }
    .info-swiper {
        padding-bottom: 16px;
        overflow: hidden;
        position: relative;
        z-index: 2;
        width: 1280px;
        .swiper-slide {
        overflow: hidden;
        border-radius: 20px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        }
        .swiper-wrapper {
            
        }
        &-wrap {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 120px;
        &-bg {
            background: #E9F0EE;
            border-radius: 40px;
            height: 720px;
            width: 1020px;
            position: absolute;
            z-index: -1;
        }
        &-shadow {
            // height: 665px;
            // width: 1162px;
            position: absolute;
            // top: 100px;
            z-index: -1;
        }
        }
    }


    @media (max-width: 1919px) {
      .info-swiper {
        width: 916px;
        &-wrap {
          &-bg {
            height: 515px;
            width: 730px;
          }
          &-shadow {
            height: 700px;
          }
        }
      }
      .swiper-button-nav { 
        &-prev {
          left: 40px;
        }
        &-next {
          right: 40px;
        }
      }
    }
    @media (max-width: 1199px) {
      .info-swiper {
        width: 800px;
        &-wrap {
          &-bg {
            height: 480px;
            width: 630px;
          }
          &-shadow {
            height: 630px;
          }
        }
      }
      .swiper-button-nav { 
        width: 300px;
        height: 300px;
        &-prev {
          left: 0px;
          padding-left: 15px;
        }
        &-next {
          right: 0px;
          padding-right: 15px;
        }
      }
    }

    @media (max-width: 991px) {
      .info-swiper {
        width: 650px;
        &-wrap {
          margin-top: 60px;
          &-bg {
            height: 360px;
            width: 530px;
          }
          &-shadow {
            height: 530px;
          }
        }
      }
      .swiper-pagination {
        bottom: -66px;
      }
      .swiper-button-nav { 
        width: 60px;
        height: 60px;
        left: auto;
        right: auto;
        bottom: -86px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #EBF1EF;
        border: 1px solid #DFE2E5;
        svg {
          height: 32px;
          width: 32px;
        }
        &::after {
          content: none;
        }
        &-prev {
          padding: 0;
          left: 100px;
        }
        &-next {
          padding: 0;
          right: 100px;
        }
      }
    }

    @media (max-width: 767px) {
      margin-top: 80px;
      h2 {
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
      }
      h4 {
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
      }
      .info-swiper {
        width: 332px;
        .swiper-slide {
          border-radius: 10px;
        }
        &-wrap {
          margin-top: 60px;
          &-bg {
            height: 190px;
            width: 270px;
            top: -15px;
            border-radius: 10px;
          }
          &-shadow {
            height: 230px;
          }
        }
      }
      .swiper-button-nav { 
        &-prev {
          padding: 0;
          left: 18px;
        }
        &-next {
          padding: 0;
          right: 18px;
        }
      }
      .swiper-pagination-infoSlider {
        .swiper-pagination {
          &-bullet {
            width: 20px;
            &-active {
              width: 40px;
            }
          }
        }
      }
    }
}
</style>