<template>
  <div>
    <div class="first-block-services">
      <div class="block-services-buttons">
        <h2
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-delay="300">Услуги</h2>
        <div class="block-buttons"
             data-aos="fade-left">
          <div class="block-button">
            <q-btn id="service-btn" outline rounded label="Виниры и коронки" />
            <q-btn id="service-btn" outline rounded label="Имплантация" />
            <q-btn id="service-btn" outline rounded label="Гнатология" />
          </div>
          <div class="block-button">
            <q-btn id="service-btn" outline rounded label="Брекеты и элайнеры" />
            <q-btn id="service-btn" outline rounded label="Хиррургия" />
            <q-btn id="service-btn" outline rounded label="Диагностика" />
          </div>
          <div class="block-button">
            <q-btn id="service-btn" outline rounded label="Чистка и отбеливание" />
            <q-btn id="service-btn" outline rounded label="Лечение кариеса" />
            <q-btn id="service-btn" outline rounded label="Детская стоматология" />
          </div>
        </div>

      </div>
      <div class="block-services-img"
           data-aos="fade-right">
        <img src="/img/blockservices.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.first-block-services{
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
.block-services-buttons{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 20px;
  color: #828560;
}
.block-services-buttons h2{
  font-weight: bold;
}
.block-buttons{
  display: flex;
  flex-flow: column;
}
.block-button{
  display: flex;
  justify-content: center;
}
#service-btn{
  margin: 10px;
  color: #828560;
  width: 220px;
}
.block-services-img{
  display: flex;
  margin-left: 20px;
}
@media screen and (max-width: 1100px) {
 .first-block-services {
   padding-top: 40px;
   height: auto;
   flex-flow: column;
   margin-bottom: 40px;
 }
  .block-services-buttons{
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 800px) {
  .block-buttons{
    flex-flow: column;
  }
  .block-button{
    flex-flow: column;
  }
  #service-btn{
    width: 250px;
  }
  .block-services-buttons{
    margin-right: 0;
  }
  .block-services-img img{
    width: 300px;
  }
}
</style>
