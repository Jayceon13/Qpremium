<template>
  <q-layout view="lHh Lpr lFf">
    <preloader-menu></preloader-menu>
    <header-block></header-block>
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-block></footer-block>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import PreloaderMenu from "components/PreloaderMenu";
import HeaderBlock from "components/HeaderBlock";
import FooterBlock from "components/FooterBlock";

export default defineComponent({
  name: 'MainLayout',

  components: {
    PreloaderMenu,
    HeaderBlock,
    FooterBlock
  },

})
</script>
