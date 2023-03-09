<template>
  <div :class="['footer', { 'footer-black': isBlack }]" >
    <div :class="['footer_block', { 'footer_block-black': isBlack }]">
      <div class="main-block">
        <div class="footer-logo">
          <img id="footerlogo" src="/icons/logoblack.png" alt="">
        </div>
        <div class="first-block">
            <div class="block-phone">
              +904444444
            </div>
            <div class="block-messagers">
              <div id="messager" class="block-dubai" @click="goToDubai">
                <img class="whatsapp-logo" src="/icons/whatsapp.svg">
              </div>
              <div id="messager" class="block-turkey" @click="goToTurkey">
                <img class="telegram-logo" src="/icons/telegram.svg">
              </div>
              <div id="messager" class="block-turkmenistan" @click="goToTurkmenistan">
                <img class="phone-logo" src="/icons/instagram.svg">
              </div>
            </div>
        </div>
        <div class="second-block">
          <div class="block-address">
            Адрес стоматологии
          </div>
        </div>
        <div class="third-block">
          <div class="request-block">
            <p>Запись на консультацию</p>
            <q-btn outline rounded style="color: #828560" label="Записаться" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, watch} from 'vue'

export default {
  data() {
    return {
      isBlack: false
    }
  },
  methods: {
    goToDubai() {
      window.location.href = 'https://api.whatsapp.com/send?phone=79811853911&text='
    },
    goToTurkey() {
      window.location.href = 'https://t.me/k_alferuk'
    },
    goToTurkmenistan() {
      window.location.href = 'https://instagram.com/kikkkamakeup'
    }
  },
}
</script>

<style scoped>
#messager{
  margin: 10px;
}
.block-phone{
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}
.block-messagers{
  display: flex;
}
#footerlogo{
  width: 100px;
}
.footer-logo{
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100px;
  height: 100%;
  align-items: center;
  display: flex;
}
.telegram-logo{
  width: 40px;
}
.whatsapp-logo{
  width: 40px;
}
.phone-logo{
  width: 40px;
}
.footer {
  color: white;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #C2C0C0;
  flex-direction: column;
}
.footer_block {
  display: flex;
  justify-content: center;
  color: black;
  width: 100%;
}
.main-block {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  padding: 10px;
}
.first-block{
  display: flex;
  flex-flow: column;
  margin: 15px;
}
.footer_block-item{
  justify-content: end;
}
.block-address{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
}
.request-block{
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}
@media screen and (max-width: 920px) {
  .footer_block{
    width: 100%;
    display: flex;
    flex-flow: column;
  }
  .main-block{
    display: flex;
    width: 100%;
    flex-flow: wrap;
  }

  .footer-logo{
    justify-content: center;
    width: 40%;
  }
  .first-block{
    flex-flow: column;
    width: 40%;
    justify-content: center;
  }
  .block-messagers{
    justify-content: center;
  }

  .block-dubai{
  }
  .second-block{
    width: 40%;
  }
  .third-block{
    width: 40%;
  }
  .request-block{
  }
  .block-address{
    text-align: center;
  }
}
@media screen and (max-width: 427px) {
  .footer_block-logo {
    display: flex;
    align-items: center;
    height: 100px;
    align-self: center;
  }
  .footer-logo-black{
    width: 100%;
  }
  .block-dubai{
  }
  .footer-logo{
    width: 150px;
  }
}
@media screen and (max-width: 429px) {
  .footer_block-logo {
    height: 100px;
  }
  .footer-logo{
    width: 150px;
  }
}

@media screen and (min-width: 920px) {
  .footer_block-item {
    display: flex;
  }
  .footer_block-item-black {
    display: flex;
  }
  .footer_block{
    display: flex;
  }
  .block-dubai{
  }
  .footer_block-black{
    display: flex;
  }
  .main-block{
    text-align: center;
    align-self: center;
    height: 250px;
  }
  .footer_block-logo {
    height: 100px;
    padding: 20px;
    text-align: center;
    align-self: center;
  }
  .second-block{
    display: flex;
  }
  .footer-logo-black {
    height: 130px;
  }
  .footer_block-item--mail{
    width: min-content;
  }
  .footer_block-item--mail-black{
    width: min-content;
  }
}

.block-dubai{
  cursor: pointer;
  text-align: center;

}
.block-turkey{
  cursor: pointer;
  text-align: center;

}
.block-turkmenistan{
  cursor: pointer;
  text-align: center;
}
.footer_block-item--mail{
  padding: 30px;
  text-align: center;
}
.footer_block-item--mail-black{
  text-align: center;
  padding: 30px;
}
.block-rights{
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.footer_block-mail{
  text-decoration: none;
  color: white;
}
.footer_block-mail-black{
  text-decoration: none;
  color: white;
}
.footer-black {
  background-color: black;
  color: white;
}
.footer_block-black{
  color: white;
  border-bottom: solid 1px white;
}
.footer_block-item-black{
  color: white;
}
.footer_block-item--mail-black{
  color: white;
}
</style>
