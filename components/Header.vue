<template>
  <header class="header" :class="{'sticky': sticky}">
    <div class="header-content">
      <img class="header-logo" src="/logo.svg" alt="TTC-Transtelecom">
      <div class="header-separate"></div>
      <div>
        <a class="a-btn header-phone" href="tel:191">
          <img class="me-2 icon" src="/icons/phone-fill.svg" alt="phone">
          <span class="header-phone-number">191</span>
          <span class="t2 ms-1">- круглосуточный контакт центр</span>
        </a>
      </div>
    </div>
    <div class="header-content">
      <button class="btn btn-secondary"> <img src="/icons/user-fill.svg" alt=""><span>Личный кабинет</span></button>
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
  created() {
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
        height: 40px;
      }
      &-separate {
        height: 24px;
        margin-left: 12px;
        margin-right: 12px;
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
      background: #FFFFFF;
      box-shadow: 0px 4px 50px rgba(169, 169, 169, 0.3);
      border-radius: 0px 0px 16px 16px;
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
        max-width: 936px;
      }
      @media (min-width: 1200px) {
        max-width: 1116px;
      }
      @media (min-width: 1440px) {
        max-width: 1324px;
      }
      @media (min-width: 1920px) {
        max-width: 1540px;
      }
    }
  }
</style>
