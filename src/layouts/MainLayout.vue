<template>
  <q-layout view="lHh Lpr lFf">
    <preloader-menu v-if="showPreloader"></preloader-menu>
    <header-block></header-block>
    <q-page-container>
      <transition :key="$route.meta.key" name="router-anim">
        <router-view />
      </transition>
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
  computed: {
    showPreloader() {
      return this.$route.path === '/'
    }
  }
})
</script>
