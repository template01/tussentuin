<template>
<div>
  <transition name="fade">
    <loadinginit v-if="!appinitated"></loadinginit>
  </transition>
  <!-- {{loaderhasrun}} -->
  <div>

    <navbar v-if="loaderhasrun"></navbar>
    <menucomp v-if="loaderhasrun"></menucomp>
    <togglemenu v-if="loaderhasrun"></togglemenu>
    <nuxt/>
    <footercomp v-if="loaderhasrun"></footercomp>
  </div>
</div>
</template>


<script>
import togglemenu from '~/components/menu/togglemenu.vue'
import navbar from '~/components/nav/navbar.vue'
import menucomp from '~/components/menu/menu.vue'
import footercomp from '~/components/parts/footer.vue'
import logo from '~/components/logo/logo.vue'
import loadinginit from '~/components/loadinginit.vue'


import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    togglemenu,
    menucomp,
    footercomp,
    navbar,
    logo,
    loadinginit,
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
      loaderhasrun: "GET_LOADER_RUN"
    }),
  },
  mounted() {
    var vm = this

    window.addEventListener("load", function(event) {
      console.log("DOM fully loaded and parsed");
      setTimeout(function(){
        vm.$store.commit('SET_APPINITIATED', true)
      },1500)
      setTimeout(function(){
        vm.$store.commit('SET_LOADER_RUN', true)
      },1000)
    });


  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

  {
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

*,
*:before,
*:after {
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
