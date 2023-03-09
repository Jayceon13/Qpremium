<template>
  <div class="preloader">
    <div class="preloader-logo">
      <img class="preloader-img" src="/img/preload.png">
    </div>
  </div>
</template>

<style>
.preloader-img{
  width: 500px;
}
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  background: #828560;
  color: white;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  animation: slide-fade 1s ease-in-out forwards;
  animation-delay: 1.3s;
}
.preloader-logo {
  animation: zoom .5s ease-in-out forwards;
  transform: scale(1);
  position: relative;
  overflow: hidden;
}

@keyframes zoom {
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(1.2);
  }
}



@keyframes slide-fade {
  0%{
    transform: translateX(0%);
  }
  100%{
    transform: translateX(120%);
  }
}

.preloader-logo:before{
position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  transform: translateX(-110%);
  animation: slideRight 1s ease-in-out forwards;
  animation-delay: .5s;
}
</style>

<script>
export default {
  name: "preloader-menu"
}
</script>

