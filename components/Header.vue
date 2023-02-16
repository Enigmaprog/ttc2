<template>
  <header class="header" :class="{'sticky': sticky}">
    <div class="header-content">
      <a href="/"><img class="header-logo" src="/logo.svg" alt="TTC-Transtelecom"></a>
      <div class="header-separate"></div>
      <div>
        <a class="a-btn header-phone" href="tel:191">
          <img class="me-2 icon" src="/icons/phone-fill.svg" alt="phone">
          <span class="header-phone-number">191</span>
          <span class="t2 ms-1">{{$t('- круглосуточный контакт центр')}}</span>
        </a>
      </div>
    </div>
    <div class="header-content">
      <div class="dropdown">
        <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_19_1801)">
            <path d="M12 0C5.3835 0 0 5.3835 0 12C0 18.6165 5.3835 24 12 24C18.6165 24 24 18.6165 24 12C24 5.3835 18.6165 0 12 0ZM20.496 5.8545C19.203 6.3675 17.874 6.774 16.5105 7.041C15.9315 5.1345 15.012 3.309 13.749 1.6575C16.515 2.1255 18.912 3.672 20.496 5.8545ZM15.396 15.27C13.143 14.961 10.8555 14.961 8.6025 15.27C8.1405 13.119 8.139 10.893 8.5995 8.7405C9.7185 8.8935 10.8495 9 12 9C13.1505 9 14.28 8.8935 15.399 8.7405C15.8595 10.893 15.858 13.119 15.396 15.27ZM15.0075 7.2735C13.011 7.5315 10.9875 7.5315 8.991 7.2735C9.606 5.3445 10.611 3.516 12 1.896C13.389 3.516 14.3925 5.3445 15.0075 7.2735ZM10.248 1.6575C8.985 3.309 8.067 5.1345 7.488 7.041C6.126 6.774 4.797 6.3675 3.504 5.8545C5.0865 3.672 7.4835 2.1255 10.248 1.6575ZM1.5 12C1.5 10.251 1.9365 8.604 2.6955 7.152C4.1295 7.7415 5.601 8.205 7.1145 8.5095C6.633 10.815 6.633 13.1955 7.116 15.5025C5.604 15.804 4.1265 16.2645 2.6955 16.8525C1.9365 15.3975 1.5 13.7505 1.5 12ZM3.504 18.1455C4.797 17.6325 6.126 17.226 7.488 16.959C8.067 18.8655 8.9865 20.691 10.2495 22.3425C7.4835 21.8745 5.0865 20.328 3.504 18.1455ZM8.9925 16.7265C10.9875 16.4685 13.011 16.4685 15.0075 16.7265C14.3925 18.6555 13.3875 20.484 12 22.104C10.611 20.484 9.6075 18.6555 8.9925 16.7265ZM13.749 22.3425C15.012 20.691 15.9315 18.8655 16.5105 16.959C17.8725 17.226 19.203 17.634 20.496 18.1455C18.912 20.328 16.515 21.8745 13.749 22.3425ZM16.8825 15.4995C17.3655 13.194 17.367 10.8135 16.884 8.508C18.3975 8.2035 19.8705 7.7415 21.3045 7.1505C22.0635 8.604 22.5 10.251 22.5 12C22.5 13.7505 22.0635 15.3975 21.3045 16.8495C19.8735 16.263 18.396 15.8025 16.8825 15.4995Z" fill="url(#paint0_linear_19_1801)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_19_1801" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
            <stop stop-color="#75BF55"/>
            <stop offset="1" stop-color="#1F9A50"/>
            </linearGradient>
            <clipPath id="clip0_19_1801">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <span>{{ $i18n.locale == 'ru' ? 'Ru' : $i18n.locale == 'en' ? 'En' : 'Kz' }}</span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <nuxt-link class="dropdown-item" v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
          <!-- <li><a  class="dropdown-item" href="#">Русский</a></li>
          <li><a class="dropdown-item" href="#">Казак</a></li>
          <li><a class="dropdown-item" href="#">English</a></li> -->
        </ul>
      </div>
      <a href="https://console.ttc.kz/auth/signin" class="btn btn-secondary"> <img src="/icons/user-fill.svg" alt=""><span>{{$t('Личный кабинет')}}</span></a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      sticky: false,
    };
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.sticky = window.scrollY > 0
    },
  },
}
</script>

<style lang="scss" scoped>
  .header {
    transition: .2s;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-content {
      display: flex;
      align-items: center;
    }
    &-logo {
      height: 60px;
      display: flex;
      align-items: center;
    }
    &-separate {
      border-left: 1px solid rgba(39, 63, 79, 0.15);
      height: 40px;
      margin-left: 40px;
      margin-right: 40px;
    }
    &-phone {
      display: flex;
      align-items: center;
    }
    @media (max-width: 991px) {
      padding: 16px 14px;
      height: 100%;
      &-logo {
        height: 60px;
      }
      &-separate {
        height: 40px;
        margin-left: 20px;
        margin-right: 20px;
      }
      &-phone {
        span {
          display: none;
        }
      }
      &-content {
        .btn {
          padding: 12px;
          span {
            display: none;
          }
          img {
            margin: 0;
          }
        }
      }
    }
    @media (max-width: 767px) {
      &-logo {
        height: 40px;
      }
      &-separate {
        height: 24px;
        margin-left: 12px;
        margin-right: 12px;
      }
    }
    @media (min-width: 768px) {
      &-phone {
        &-number {
          display: inline!important;
        }
      }
    }


    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #FFFFFF;
      box-shadow: 0px 4px 50px rgba(169, 169, 169, 0.3);
      // border-radius: 0px 0px 16px 16px;
      width: 100%;
      z-index: 100;
      @media (max-width: 991px) {
        left: 0;
        right: 0;
        border-radius: 0;
        box-shadow: none;
        height: auto;
        filter: drop-shadow(0px 4px 50px rgba(169, 169, 169, 0.3));
      }
      @media (min-width: 992px) {
        // max-width: 936px;
      }
      @media (min-width: 1200px) {
        // max-width: 1116px;
      }
      @media (min-width: 1440px) {
        // max-width: 1324px;
      }
      @media (min-width: 1920px) {
        // max-width: 1540px;
      }
    }
  }
</style>
