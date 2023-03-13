<template>
  <footer class="footer">
    <div class="container">
      <div class="d-flex w-100 justify-content-between align-items-center footer-body">
        <div class="footer-content">
          <img class="footer-logo" src="/logo.svg" alt="TTC-Transtelecom">
          <div class="footer-separate"></div>
          <div class="d-flex flex-column">
            <b class="description-bold">{{'©' + (new Date()).getFullYear()}}{{$t(', АО «ТРАНСТЕЛЕКОМ»')}}</b>
            <span class="description">{{$t('Все права защищены')}}</span>
          </div>
        </div>
        <div class="footer-content">
          <div class="footer-links">
            <a target="_blank" rel="noopener noreferrer" class="footer-link" href="https://youtube.com/@user-fk4hq1rf3c"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="32px" height="32px"><path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 20.15625 17.001953 C 20.526656 16.994297 20.909531 17.081906 21.269531 17.285156 L 29.873047 22.146484 C 31.324047 22.966484 31.324047 25.035469 29.873047 25.855469 L 21.269531 30.716797 C 19.830531 31.528797 18.037109 30.500328 18.037109 28.861328 L 18.037109 19.138672 C 18.037109 17.909422 19.045031 17.024922 20.15625 17.001953 z"/></svg></a>
            <a target="_blank" rel="noopener noreferrer" class="footer-link" href="https://www.linkedin.com/company/transtelecom-jsc/"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="32px" height="32px"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg></a>
            <a target="_blank" rel="noopener noreferrer" class="footer-link" href="https://instagram.com/ttc_kz?igshid=YmMyMTA2M2Y="><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 16C20 16.7911 19.7654 17.5645 19.3259 18.2223C18.8864 18.8801 18.2616 19.3928 17.5307 19.6955C16.7998 19.9983 15.9956 20.0775 15.2196 19.9231C14.4437 19.7688 13.731 19.3878 13.1716 18.8284C12.6122 18.269 12.2312 17.5563 12.0769 16.7804C11.9225 16.0044 12.0017 15.2002 12.3045 14.4693C12.6072 13.7384 13.1199 13.1136 13.7777 12.6741C14.4355 12.2346 15.2089 12 16 12C17.0599 12.0033 18.0754 12.4258 18.8248 13.1752C19.5742 13.9246 19.9967 14.9401 20 16ZM28.5 10.5V21.5C28.5 23.3565 27.7625 25.137 26.4497 26.4497C25.137 27.7625 23.3565 28.5 21.5 28.5H10.5C8.64348 28.5 6.86301 27.7625 5.55025 26.4497C4.2375 25.137 3.5 23.3565 3.5 21.5V10.5C3.5 8.64348 4.2375 6.86301 5.55025 5.55025C6.86301 4.2375 8.64348 3.5 10.5 3.5H21.5C23.3565 3.5 25.137 4.2375 26.4497 5.55025C27.7625 6.86301 28.5 8.64348 28.5 10.5ZM22 16C22 14.8133 21.6481 13.6533 20.9888 12.6666C20.3295 11.6799 19.3925 10.9108 18.2961 10.4567C17.1997 10.0026 15.9933 9.88378 14.8295 10.1153C13.6656 10.3468 12.5965 10.9182 11.7574 11.7574C10.9182 12.5965 10.3468 13.6656 10.1153 14.8295C9.88378 15.9933 10.0026 17.1997 10.4567 18.2961C10.9108 19.3925 11.6799 20.3295 12.6666 20.9888C13.6533 21.6481 14.8133 22 16 22C17.5913 22 19.1174 21.3679 20.2426 20.2426C21.3679 19.1174 22 17.5913 22 16ZM24 9.5C24 9.20333 23.912 8.91332 23.7472 8.66665C23.5824 8.41997 23.3481 8.22771 23.074 8.11418C22.7999 8.00065 22.4983 7.97094 22.2074 8.02882C21.9164 8.0867 21.6491 8.22956 21.4393 8.43934C21.2296 8.64912 21.0867 8.91639 21.0288 9.20736C20.9709 9.49834 21.0007 9.79994 21.1142 10.074C21.2277 10.3481 21.42 10.5824 21.6666 10.7472C21.9133 10.912 22.2033 11 22.5 11C22.8978 11 23.2794 10.842 23.5607 10.5607C23.842 10.2794 24 9.89782 24 9.5Z" fill="#B4C2BB"/></svg></a>
            <a target="_blank" rel="noopener noreferrer" class="footer-link" href="https://www.facebook.com/transtelecom.kz?mibextid=ZbWKwL"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.3337 16.0001C29.3337 8.64008 23.3603 2.66675 16.0003 2.66675C8.64033 2.66675 2.66699 8.64008 2.66699 16.0001C2.66699 22.4534 7.25366 27.8267 13.3337 29.0667V20.0001H10.667V16.0001H13.3337V12.6667C13.3337 10.0934 15.427 8.00008 18.0003 8.00008H21.3337V12.0001H18.667C17.9337 12.0001 17.3337 12.6001 17.3337 13.3334V16.0001H21.3337V20.0001H17.3337V29.2668C24.067 28.6001 29.3337 22.9201 29.3337 16.0001Z" fill="#B4C2BB"/></svg></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
  .footer {
    // background: #FFF;
    width: 100%;
    transition: .2s;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 0;
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
    &-links {
      display: flex;
      align-items: center;
    }
    &-link {
      background: #F2F7F5;
      border-radius: 8px;
      height: 48px;
      width: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 16px;
      svg {
        width: 32px;
        transition: .2s;
        path {
          fill: rgb(180, 194, 187);
        }
      }
      &:hover {
        svg {
          path {
            fill: #273F4F;
          }
        }
      }
    }
    @media (max-width: 991px) {
      &-separate {
        margin-left: 20px;
        margin-right: 20px;
      }
    }
    @media (max-width: 767px) {
      padding: 40px 0;
      .footer-body {
        flex-direction: column;
      }
      .footer-content {
        flex-direction: column;
        text-align: center;
      }
      &-separate {
        display: none;
      }
      &-logo {
        margin-bottom: 20px;
      }
      &-links {
        margin-top: 40px;
      }
    }
  }
</style>
