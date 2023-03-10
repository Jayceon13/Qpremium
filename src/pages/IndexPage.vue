<template>
  <q-page>
    <div class="block-main">
        <video autoplay muted loop playsinline poster="public/img/poster.jpg" id="myVideo">
          <source src="/video/bgvdo.mp4" type="video/mp4">
        </video>
      <div class="block-video-bg">
        <h3>Добро пожаловать</h3>
      </div>
    </div>
    <div class="second-block">
      <h2>Услуги</h2>
      <div class="second-block-items">
      <div class="second-block-img">
        <img src="/img/block2.png">
      </div>
      <div class="second-block-services">
        <div class="block-services">
          <div class="block-service-img">
            <img id="serviceimg" src="/icons/service1.svg" alt="">
          </div>
          <div class="block-services-item-1">
            <p>Терапия</p>
            <q-btn id="service-btn" outline rounded label="Подробнее" />
          </div>
          <div class="block-services-item-2">
            <q-btn id="service-btn" outline rounded label="Примеры работ" />
            <q-btn id="service-btn" outline rounded label="Врачи" />
          </div>
        </div>
        <div class="block-services">
          <div class="block-service-img">
            <img id="serviceimg" src="/icons/service2.svg" alt="">
          </div>
          <div class="block-services-item-1">
            <p>Ортопедия</p>
            <q-btn id="service-btn" outline rounded label="Подробнее" />
          </div>
          <div class="block-services-item-2">
            <q-btn id="service-btn" outline rounded label="Примеры работ" />
            <q-btn id="service-btn" outline rounded label="Врачи" />
          </div>
        </div>
        <div class="block-services">
          <div class="block-service-img">
            <img id="serviceimg" src="/icons/service3.svg" alt="">
          </div>
          <div class="block-services-item-1">
            <p>Ортодонтия</p>
            <q-btn id="service-btn" outline rounded label="Подробнее" />
          </div>
          <div class="block-services-item-2">
            <q-btn id="service-btn" outline rounded label="Примеры работ" />
            <q-btn id="service-btn" outline rounded label="Врачи" />
          </div>
        </div>
        <div class="block-services">
          <div class="block-service-img">
            <img id="serviceimg" src="/icons/service4.svg" alt="">
          </div>
          <div class="block-services-item-1">
            <p>Хиррургия</p>
            <q-btn id="service-btn" outline rounded label="Подробнее" />
          </div>
          <div class="block-services-item-2">
            <q-btn id="service-btn" outline rounded label="Примеры работ" />
            <q-btn id="service-btn" outline rounded label="Врачи" />
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="third-block">
      <h2>Кто мы?</h2>
      <div class="third-block-items">
        <div class="third-block-text">
          <p>описание описание описание описание описание описание описание описание описание описание описание описание описание описание </p>
        </div>
        <div class="third-block-img">
          <img src="/img/block3.png" alt="">
        </div>
      </div>
    </div>
    <div class="fourth-block">
      <div class="block-doctors-text">
        <h3>Наши врачи</h3>
        <p>Познакомьтесь ближе с нашими врачами</p>
        <q-btn id="service-btn" outline rounded label="Подробнее" />
      </div>
      <div class="block-doctors-img">
        <div class="doctor-block1">
          <img id="doctor1" src="">
        </div>
        <div class="doctor-block2">
          <img id="doctor2" src="">
        </div>
        <div class="doctor-block3">
          <img id="doctor3" src="">
        </div>
        <div class="doctor-block4">
          <img id="doctor4" src="">
        </div>
      </div>
    </div>
    <div class="fifth-block">
      <div class="fifth-block-text">
        <h2>Отзывы</h2>
      </div>
      <q-carousel
        style="border-radius: 20px"
        v-if="$q.screen.width <= 600"
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        infinite
        autoplay
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-grey-1 shadow-2 rounded-borders"
      >
        <q-carousel-slide style="border-radius: 20px" :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide style="border-radius: 20px" :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide style="border-radius: 20px" :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide style="border-radius: 20px" :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
      <q-carousel
        style="border-radius: 20px"
        v-if="$q.screen.width >= 600"
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        infinite
        autoplay
        control-color="black"
        navigation
        padding
        arrows
        height="300px"
        class="bg-grey-1 shadow-2 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      slide: ref(1)
    }
  },
  mounted() {
    const container = this.$el.querySelector('.fourth-block');
    const elements = container.querySelectorAll('.doctor-block1, .doctor-block2, .doctor-block3, .doctor-block4');

    container.addEventListener('mousemove', e => {
      const bounds = container.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      elements.forEach(element => {
        const bounds = element.getBoundingClientRect();
        const elementX = bounds.left + bounds.width / 2;
        const elementY = bounds.top + bounds.height / 2;

        const distanceX = mouseX - elementX;
        const distanceY = mouseY - elementY;

        const strength = -20;

        let x = 0;
        let y = 0;

        if (distanceX < 0 && Math.abs(distanceX) > Math.abs(distanceY)) {
          x = -strength;
        } else if (distanceX > 0 && Math.abs(distanceX) > Math.abs(distanceY)) {
          x = strength;
        }

        if (distanceY < 0 && Math.abs(distanceY) > Math.abs(distanceX)) {
          y = -strength;
        } else if (distanceY > 0 && Math.abs(distanceY) > Math.abs(distanceX)) {
          y = strength;
        }

        if (element.style.transform !== `translate3d(${x}px, ${y}px, 0)`) {

          element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    });

    container.addEventListener('mouseleave', () => {
      elements.forEach(element => {
        element.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  },
})
</script>

<style scoped>
.doctor-block1, .doctor-block2, .doctor-block3, .doctor-block4 {
  transition: transform 0.3s ease-out;
}
.block-service-img{
  height: inherit;
  width: 100%;
  text-align: center;
}
#serviceimg{
  height: inherit;
  padding: 10px;
}
#service-btn{
  color: #828560;
  margin: 5px;
  width: 160px;
}
.block-main{
  display: flex;
  height: 100vh;
}
.second-block{
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
}
.second-block-items{
  height: 75vh;
  display: flex;
}
@media screen and (max-width: 1190px){
  .second-block-items{
    height: auto;
    flex-flow: column;
    width: 70%;
  }
  .second-block{
    height: auto;
    align-items: center;
  }
  .second-block-img{
    width: auto;
  }
  .second-block-services{
    width: auto;
  }
  .second-block h2{
    margin-left: 0;
  }
}
@media screen and (min-width: 1190px){
  .second-block-items{
    height: auto;
  }
  .second-block{
    height: auto;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 100px 0 100px;
  }
  .second-block-img img{
    width: 75%;
  }
  .second-block-services{
    width: 50%;
  }
  .second-block-services{
    padding-left: 60px;
    border-left: white 1px solid;
  }
}
.second-block-img{
  display: flex;
  height: 100%;
  flex-flow: column;
  align-items: center;
}
.second-block-img img{
  height: 95%;
}
.second-block h2{
  color: #828560;
  font-weight: bold;
}
#myVideo {
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -2;
  border-radius: 10px;
}
.block-video-bg{
  background: rgba(0,0,0,0.7);
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #828560;
  border-radius: 10px;
}
.second-block-services{
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  padding-bottom: 50px;
}
.block-services{
  width: 100%;
  height: 100px;
  background: white;
  margin-top: 20px;
  border-radius: 30px;
}
.block-services{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #828560;
}
.block-services p{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.block-services-item-1{
  display: flex;
  flex-flow: column;
}
.block-services-item-2{
  display: flex;
  flex-flow: column;
}
@media screen and (max-width: 650px){
  .second-block-items{
    height: auto;
    flex-flow: column;
  }
  .second-block{
    height: auto;
    align-items: center;
  }
  .second-block-img img{
    width: 100%;
  }
  #serviceimg{
    width: 150px;
  }
  .second-block-services{
    width: auto;
  }
  .block-services{
    flex-flow: column;
    height: auto;
  }
  .second-block h2{
    margin-left: 0;
  }
}
.third-block{
  display: flex;
  align-items: center;
  flex-flow: column;
}
.third-block h2{
  font-weight: bold;
  color: #828560;
}
.third-block-items{
  display: flex;
}
.third-block-img{
  display: flex;
  justify-content: center;
}
.third-block-text{
  display: flex;
  color: #828560;
  font-size: 20px;
}
@media screen and (min-width: 1150px) {
  .third-block{
    padding: 0 100px 0 100px;
  }
  .third-block-items{
   align-items: center;
    margin-bottom: 20px;
  }
  .third-block-img img{
    width: 80%;
  }
  .third-block-img{
    justify-content: center;
    width: 50%;
  }
  .third-block-text{
    width: 50%;
    justify-content: flex-end;
  }
  .third-block-text p{
    width: 75%;
  }
}
@media screen and (max-width: 1190px){
  .third-block-items{
    flex-flow: column;
  }
  .third-block-text{
    width: 80%;
    align-self: center;

  }
}
@media screen and (max-width: 650px){
  .third-block-img img{
    width: 70%;
  }
  .third-block-text{
    width: 70%;
    align-self: center;
    text-align: center;
  }
}
.fourth-block{
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
.block-doctors-text{
  width: 40%;
  display: flex;
  flex-flow: column;
  height: 100%;
  align-items: end;
  justify-content: center;
  place-items: center;
}
.block-doctors-img{
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: end;
  height: 100%;
}
.doctor-block1{
  height: 400px;
  width: 250px;
  background-color: white;
  border-radius: 20px;
  border: black 1px solid;
}
.doctor-block2{
  height: 350px;
  width: 230px;
  background-color: white;
  border-radius: 20px;
  border: black 1px solid;

}
.doctor-block3{
  height: 300px;
  width: 200px;
  background-color: white;
  border-radius: 20px;
  border: black 1px solid;

}
.doctor-block4{
  height: 250px;
  width: 170px;
  background-color: white;
  border-radius: 20px;
  border: black 1px solid;
}
#doctor1{
  background-color: white;
}
#doctor2{

  background-color: white;
}
#doctor3{

  background-color: white;
}
#doctor4{

  background-color: white;
}
@media screen and (min-width: 1180px){
 .fourth-block{
   padding: 0 100px 0 100px;
 }
}
@media screen and (max-width: 1180px){
  .fourth-block{
    flex-flow: column-reverse;
    padding: 0;
    height: auto;
    margin-top: 30px;
  }
  .block-doctors-text{
    text-align: center;
  }
}
@media screen and (max-width: 800px){
  .block-doctors-img{
    flex-flow: column;
  }
  .doctor-block1{
    margin: 15px 0 15px 0;
  }
  .doctor-block2{
    margin: 15px 0 15px 0;
  }
  .doctor-block3{
    margin: 15px 0 15px 0;
  }
  .doctor-block4{
    margin: 15px 0 15px 0;
  }
}
.fifth-block{
  display: flex;
  flex-flow: column;
}
.fifth-block-text{
  display: flex;
  justify-content: center;
  color: #828560;
}
.fifth-block-text h2{
  font-weight: bold;
}
</style>
