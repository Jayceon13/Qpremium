<template>
  <div class="header-block">
    <div class="block-logo-header" @click="$router.push ('/')">
      <img id="logohome" src="/icons/logoblack.png">
    </div>
    <div class="block-languages">
      <div id="language" class="language-ru">
        RU
      </div>
      <div id="language" class="language-en">
        EN
      </div>
      <div id="language" class="language-tr">
        TR
      </div>
    </div>
    <div :class= "!showBurgerMenu? 'hamburger hamburger--elastic' : 'hamburger is-active hamburger--elastic'" @click="blockBurgerMenu">
      <div class="hamburger-box">
        <div class="hamburger-inner" >
        </div>
      </div>
    </div>
  </div>
  <transition name="menu">
    <div class="block-menu"
         v-if="showBurgerMenu"
         @click="blockBurgerMenu">
      <div class="block-menu-tabs">
      <div @click="() => {$router.push ('/'); showBurgerMenu}"
           class="block-home"
           id="menutab"
      >
        ГЛАВНАЯ
      </div>
        <div @click="() => {$router.push ('/services'); showBurgerMenu}"
             class="block-services"
             id="menutab">
          УСЛУГИ
        </div>
        <div @click="() => {$router.push ('/contacts'); showBurgerMenu}"
             class="block-about"
             id="menutab"
        >
          О КЛИНИКЕ
        </div>
        <div @click="() => {$router.push ('/contacts'); showBurgerMenu}"
             class="block-doctors"
             id="menutab"
        >
          ВРАЧИ
        </div>
        <div @click="() => {$router.push ('/contacts'); showBurgerMenu}"
             class="block-examples"
             id="menutab"
        >
          ПРИМЕРЫ РАБОТ
        </div>
        <div @click="() => {$router.push ('/contacts'); showBurgerMenu}"
             class="block-contacts"
             id="menutab"
        >
          КОНТАКТЫ
        </div>
      </div>
    </div>
  </transition>
  <transition name="bg-block">
  <div class="block-background" v-if="showBurgerMenu">
  </div>
  </transition>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "HeaderBlock",
  setup () {
    const showBurgerMenu = ref(false)

    return {
      showBurgerMenu,
      blockBurgerMenu() {
        showBurgerMenu.value = !showBurgerMenu.value;
      },
    }
  }
}
</script>

<style scoped>
#menutab{
  cursor: pointer;
}
.block-logo-header{
  display: flex;
  width: 40px;
  position: fixed;
  margin: 15px;
  z-index: 90;
}
#logohome {
  cursor: pointer;
  width: 70px;
}
.block-languages{
  display: flex;
  margin-left: 25%;
  margin-top: 15px;
}
#language{
  margin-left: 10px;
  font-size: 20px;
  color: #828560;
}
.block-background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
}
.router-animation-leave-active,
.router-animation-enter-active{
  transition: opacity 0.5s ease-in-out;
}
.bg-block-leave-active,
.bg-block-enter-active {
  transition: opacity 0.5s ease-in-out;
}
.bg-block-enter-from,
.bg-block-leave-to {
  opacity: 0;
}
.menu-leave-active {
  z-index: 999;
  animation: slide-up 0.5s ease-in-out;
}
@keyframes slide-up {
  0%{
    transform: translate(0, 0);
  }
  100%{
    transform: translate(100%, -200%);
  }
}
.menu-enter-active{
  z-index: 999;
  animation: slide-down 0.5s ease-in-out;
}
@keyframes slide-down {
  0%{
    transform: translate(100%, -200%);
  }
  100%{
    transform: translate(0, 0);
  }
}
.block-menu{
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99;
}
.block-menu-tabs{
  display: flex;
}
.header-block{
  width: 100%;
  display: flex;
  height: 50px;
  position: absolute;
}
.block-menu{
  display: flex;
  justify-content: flex-end;
}
@media screen and (min-width: 650px) {
  .block-menu-tabs{
    width: 100%;
    justify-content: flex-end;
  }
  .block-home img:hover{
    background-color: rgba(200, 200, 200, 0.5);
    border-radius: 30px;
    transition: 1s;
  }
.block-home{
  display: flex;
  width: 30%;
  height: 30%;
  position: absolute;
  z-index: 99999;
  background-color: white;
  border-radius: 30px;
  border: black 1px solid;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  margin-top: 34vh;
  margin-right: 18%;
  font-size: 25px;
  font-weight: bold;
}
.block-home:hover{
  background-color: #828560;
  color: white;
  transition: 0.5s;
}
@media screen and (max-width: 1100px) {
  .block-home{
    margin-top: 25%;
    font-size: 20px;
  }
}

.block-services{
  width: 18.1%;
  height: 50%;
  position: absolute;
  z-index: 99991;
  background-color: white;
  border-left: black 1px solid;
  border-top: black 1px solid;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-top: 50vh;
  font-size: 25px;
  font-weight: bold;
  display: flex;
}
@media screen and (max-width: 1100px) {
  .block-services{
    font-size: 20px;
  }
}
.block-services:hover{
  background-color: #828560;
  color: white;
  transition: 0.5s;
}
.block-about{
  cursor: pointer;
  height: 50%;
  width: 70%;
  background: white;
  border: black 1px solid;
  position: absolute;
  font-weight: bold;
  display: flex;
  padding: 80px;
  font-size: 25px;
  margin-top: 50vh;
  border-bottom-left-radius: 100px;
  align-items: center;
}
.block-about:hover{
  background-color: #828560;
  color: white;
  transition: 0.5s;
}
@media screen and (max-width: 1100px) {
  .block-about{
    font-size: 20px;
  }
}
.block-contacts{
  cursor: pointer;
  height: 50%;
  width: 70%;
  background: white;
  border-left: black 1px solid;
  position: absolute;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 12%;
  font-size: 25px;
  border-top-left-radius: 100px;
}
.block-contacts:hover{
  background-color: #828560;
  color: white;
  transition: 0.5s;
}
@media screen and (max-width: 1100px) {
  .block-contacts{
    font-size: 20px;
  }
}

.block-examples{
  cursor: pointer;
  font-size: 25px;
  height: 50%;
  width: 33%;
  background: white;
  border-left: black 1px solid;
  font-weight: bold;
  display: flex;
  z-index: 9999;
  align-items: center;
  justify-content: center;
}
.block-examples:hover{
  background-color: #828560;
  color: white;
  transition: 0.5s;
}

@media screen and (max-width: 1100px) {
  .block-examples{
    font-size: 20px;
  }
}

.block-doctors{
  cursor: pointer;
  padding-left: 12%;
  font-size: 25px;
  height: 50%;
  width: 48%;
  margin-top: 50vh;
  background: white;
  border-left: black 1px solid;
  font-weight: bold;
  display: flex;
  align-items: center;
  z-index: 9999;
  position: absolute;
}
.block-doctors:hover{
  background-color: #828560;
  color: white;
  transition: 0.5s;
}
@media screen and (max-width: 1100px) {
  .block-doctors{
    font-size: 20px;
  }
}
@media screen and (max-width: 900px) {
  .block-home{
    margin-right: 28%;
    margin-top: 34vh;
  }
  .block-contacts{
    width: 85%;
  }
  .block-about{
    width: 85%;
    padding: 40px;
  }
  .block-examples{
    width: 43%;
  }
  .block-doctors{
    width: 58%;
    padding-left: 9%;
  }
  .block-services{
    width: 28.2%;
  }
}
}
@media screen and (max-width: 650px){
  .block-menu-tabs{
    width: 85%;
    background: white;
    flex-flow: column;
    padding: 20px;
  }
  #menutab{
    margin-top: 15px;
    color: #828560;
    font-size: 20px;
  }
}
.hamburger {
  right: 0;
  z-index: 9999;
  position: fixed;
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  mix-blend-mode: difference;
  overflow: visible; }
.hamburger:hover {
  opacity: 0.7; }
.hamburger.is-active:hover {
  opacity: 0.7; }
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #828560; }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #828560;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease; }
.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block; }
.hamburger-inner::before {
  top: -10px; }
.hamburger-inner::after {
  bottom: -10px; }
.hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.hamburger--elastic .hamburger-inner::before {
  top: 10px;
  transition: opacity 0.125s 0.275s ease; }
.hamburger--elastic .hamburger-inner::after {
  top: 20px;
  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(135deg);
  transition-delay: 0.075s; }
.hamburger--elastic.is-active .hamburger-inner::before {
  transition-delay: 0s;
  opacity: 0; }
.hamburger--elastic.is-active .hamburger-inner::after {
  transform: translate3d(0, -20px, 0) rotate(-270deg);
  transition-delay: 0.075s; }

</style>
