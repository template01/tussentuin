<template>
  <div id="togglemenu-outer" class="mt-20" >
    <!-- OPEN MENU -->
    <a @click="openmenu()" v-if="!menuopen" id="togglemenu" class="button is-centered is-success is-rounded color-offset-green">
      <div class="p-10 ">
        <div class="" id="nav-icon1">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </a>
    <!-- CLOSE MENU -->

    <a @click="closemenu()" v-else id="togglemenu" class="button is-centered is-rounded color-offset-green">
      <div class="p-10 ">
        <div class="open" id="nav-icon1">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </a>
  </div>

</template>
<script>
import axios from 'axios'

import {
  mapGetters
} from 'vuex'


export default {
  computed: {
    ...mapGetters({
      menuopen: "GET_MENUOPEN",
    }),
  },
  methods:{
    openmenu:function(){
      this.$store.commit('SET_MENUOPEN')
    },
    closemenu:function(){
      this.$store.commit('SET_MENUCLOSE')
    }
  }
}
</script>
<style lang="scss" scoped>
#togglemenu-outer{
  z-index: 1000;
  position: fixed;
  display: flex;
  width: 100%;
  #togglemenu{
    border: 0px !important;
    min-width: 60px;
    min-height: 60px;
    margin: 0 auto;
  }
}

/* Icon 1 */

#nav-icon1{
  width: 40px;
  height: 36px;
  position: relative;
  // margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon1 span{
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: white;
  border-radius: 10px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2) {
  top: 16px;
}

#nav-icon1 span:nth-child(3) {
  top: 31px;
}
#nav-icon1.open span {
  background: $green;
}

#nav-icon1.open span:nth-child(1) {
  top: 16px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -40px;
}

#nav-icon1.open span:nth-child(3) {
  top: 16px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

</style>
