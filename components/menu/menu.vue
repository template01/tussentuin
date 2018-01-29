<template>
<transition name="fade">
  <div v-if="menuopen" id="menu-outer">
    <div class="ripple-button1">
      <div id="menu-inner" class="aligner">
        <div id="menu-list" class="aligner-item">
          <a class="is-size-1">Tuinen</a>
          <a class="is-size-1">Tuinen</a>
          <a class="is-size-1">Tuinen</a>
          <a class="is-size-1">Tuinen</a>
        </div>
      </div>
    </div>
  </div>
</transition>
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

#menu-outer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    #menu-inner {
        // margin-top: 80px;
        height: 100%;
        a {
            // transition-delay: 1s;
            opacity: 0;
            animation: fade-in 0.3s;
            animation-fill-mode: forwards;
            display: inline-block;
            clear: both;
            width: 100%;
        }

        @for $i from 1 through 30 {
            a:nth-child(#{$i}) {
                animation-delay: $i*0.25+s;
            }
        }

        * {
            color: white;
        }
    }
}

.ripple-button1,{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: $darkgreen;
    -webkit-box-shadow: 0px 0px 100px 27px $darkgreen;
    -moz-box-shadow: 0px 0px 100px 27px $darkgreen;
    box-shadow: 0px 0px 100px 27px $darkgreen;
    color: #FFF;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    animation: ripple-in1 1s;
    animation-fill-mode: forwards;
    border-radius: 8000px;
    transition: border-radius 0.3s;
}
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes ripple-in1 {

    0% {
        border-radius: 8000px;
        transform: scale(0);
    }
    15% {
        border-radius: 0px;
    }
    20% {
        transform: scale(1);
        opacity: 0.3;
        border-radius: 0px;
    }
    60% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
      border-radius: 0px;

    }
}
</style>
