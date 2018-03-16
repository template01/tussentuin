<template>
<transition name="fade">
  <div v-if="menuopen" id="menu-outer">
    <div class="ripple-button1">
      <div id="menu-inner" class="aligner">
        <div id="menu-list" class="aligner-item">
          <nuxt-link v-for="link in menuContent.acf.linktointern" class="is-size-1 has-text-weight-semibold" :to="link.intern_link" v-html="link.naam"></nuxt-link>
            <a v-for="(link,index) in menuContent.acf.linktoextern" :class="{'mt-80' : index === 0}" class="is-size-3 has-text-weight-semibold" target="_blank" :href="link.extern_link" v-html="link.naam"></a>

        </div>
<!-- {{menuContent.acf.linktointern}} -->
        <!-- <span v-for="link in footerContent.acf.linkto">
          <nuxt-link  v-if="link.inten_of_extern" class="has-text-dark pr-80"  :to="link.intern_link" v-html="link.naam"></nuxt-link>
          <a v-else class="has-text-dark pr-80" target="_blank" :href="link.extern_link" v-html="link.naam"></a>
        </span> -->
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
      menuContent: "GET_MENU",
    }),
  },
  methods: {
    openmenu: function() {
      this.$store.commit('SET_MENUOPEN')
    },
    closemenu: function() {
      this.$store.commit('SET_MENUCLOSE')
    }
  },
  watch:{
    $route:function(){
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
    top: -40%;
    left: -40%;
    width: 180%;
    height: 180%;
    z-index: 1000;

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
    background-color: $darkblue;
    // -webkit-box-shadow: 0px 0px 100px 27px $darkblue;
    // -moz-box-shadow: 0px 0px 100px 27px $darkblue;
    // box-shadow: 0px 0px 100px 27px $darkblue;
    color: #FFF;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    animation: ripple-in1 3s;
    animation-fill-mode: forwards;
    border-radius: 8000px;
    transition: border-radius 1s;
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
        opacity: 1;
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
