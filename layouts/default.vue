<template>
  <div>
    <transition name="fade">
    <loading v-if="!appinitated"></loading>
    </transition>
    <menucomp></menucomp>
    <togglemenu></togglemenu>
    <nuxt/>
  </div>
</template>


<script>
import togglemenu from '~/components/menu/togglemenu.vue'
import menucomp from '~/components/menu/menu.vue'
import logo from '~/components/logo/logo.vue'
import loading from '~/components/loading.vue'


import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    togglemenu,
    menucomp,
    logo,
    loading,
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

html {

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
