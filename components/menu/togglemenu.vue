<template>
<div id="togglemenu-outer" class="mt-20">
  <a @click="openmenu()" v-if="!menuopen" id="togglemenu" class="button expand ignore is-info is-centered is-rounded">
    <div class="innerwrapper aligner" :style="$mq === 'lg' || $mq === 'xl' ? {} : {'position':'absolute'}">
      <div class="" id="nav-icon1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </a>
  <a @click="closemenu()" v-else id="togglemenu" class="button expand ignore is-centered is-rounded">
    <div class="innerwrapper aligner" :style="$mq === 'lg' || $mq === 'xl' ? {} : {'position':'absolute'}">
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
  methods: {
    openmenu: function() {
      this.$store.commit('SET_MENUOPEN')
    },
    closemenu: function() {
      this.$store.commit('SET_MENUCLOSE')
    }
  }
}
</script>
<style lang="scss" scoped>
#togglemenu-outer {
    z-index: 1000;
    position: fixed;
    display: flex;
    width: 100%;
    top: 0;
    #togglemenu {
        border: 0 !important;
        padding: 15px;
        min-width: 45px;
        min-height: 45px;
        height: 70px;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        width: auto;
        right: 10px;
        margin-top: 10px;
        #togglemenu {
            border: 0 !important;
            padding: 14px;
            width: 12px;
            height: 12px;
            margin: 0 auto;
            min-width: 32px;
            min-height: 32px;
        }

    }

}

.innerwrapper{
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  // position: absolute;
}

/* Icon 1 */

#nav-icon1 {
    width: 25px;
    height: 25px;
    margin: 7px;
    position: relative;
    // margin: 50px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 18px;
        height: 16px;
        margin: 2px;
    }
}

#nav-icon1 span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background:white;
    // border-radius: 10px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    @media (max-width: 768px) {
        height: 2px;
    }

}

#nav-icon1 span:nth-child(1) {
    top: 0;
}

#nav-icon1 span:nth-child(2) {
    top: 10px;
}

#nav-icon1 span:nth-child(3) {
    top: 20px;
}
#nav-icon1.open span {
    background: $darkblue;
}

#nav-icon1.open span:nth-child(1) {
    top: 10px;
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
    top: 10px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
}

@media (max-width: 768px) {
    #nav-icon1 span:nth-child(1) {
        top: 0;
    }

    #nav-icon1 span:nth-child(2) {
        top: 7px;
    }

    #nav-icon1 span:nth-child(3) {
        top: 14px;
    }


    #nav-icon1.open span:nth-child(1) {
        top: 7px;
    }


    #nav-icon1.open span:nth-child(3) {
        top: 7px;
    }

}

</style>
