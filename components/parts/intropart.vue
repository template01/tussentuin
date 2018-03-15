<template>
<div class="intropart " :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
  <div :class="[inViewClass]">
    <div v-show="titletext" v-html="'<p>'+titletext+'</p>'" class=" has-text-weight-bold" :class="[slideIn ? 'slideIn':'',  islarge ? 'is-size-1':'is-size-2', isgreen ? 'has-text-primary':'has-text-info']">
    </div>
    <div v-show="blurbtext" v-html="blurbtext" class="is-size-4 has-text-weight-semibold pt-10 transitionOpacity" :class="[ islarge ? 'is-size-4':'is-size-5', isgreen ? 'has-text-primary':'has-text-info']" :style="[slideIn ? {'opacity':'1'}:{'opacity':'0'},{'transition-delay':secondDelay+'ms'}]">
    </div>
  </div>
</div>
</template>
<script>
import scrollMonitor from 'scrollmonitor'
// import {
//   mapGetters
// } from 'vuex'



export default {
  props: {
    titletext: {

    },
    islarge: {

    },
    isgreen: {

    },
    blurbtext: {

    },
    offset: {

    },
    secondDelay: {
      type: Number,
      default: 1300
    },


  },

  data: function() {
    return {
      slideIn: false,
      inViewClass: 'slideInTitle'
    }
  },
  methods: {


  },
  mounted() {
    var myElement = this.$el.querySelector("." + this.inViewClass);
    var elementWatcher = scrollMonitor.create(myElement, this.offset);
    var vm = this

    elementWatcher.enterViewport(function() {
      vm.slideIn = true
    });

    elementWatcher.exitViewport(function() {
      // vm.slideIn = false
    });
  }
  // computed: {
  //   ...mapGetters({
  //    appinitated: "GET_APP_INITIATED",
  //   }),
  // },

}
</script>

<style lang="scss">
.intropart {
    .is-size-1 {
        p {
            padding-top: 0;
            line-height: 1.15 !important;
            // margin-top: -20px;
        }
    }

    .is-size-2 {
        p {
            padding-top: 0;
            // line-height: 1.2 !important;
            // margin-top: -20px;
        }
    }
    .slideIn {
        display: inline-block;
        p {

            width: 100%;
            float: left;
            -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
            clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
            transform: translateY(-50px);
            opacity: 0;
            animation-delay: 0.5;
            animation-name: titleAnimation;
            animation-timing-function: ease;
            animation-duration: 0.8s;
            animation-fill-mode: forwards;
        }
    }
    .slideIn p {
        animation-delay: 0.6s;
        -webkit-animation-fill-mode: forwards;

        &:first-child {
            animation-delay: 0.7s;

        }

        &:last-child {
            animation-delay: 0.5s;
        }
    }

    @keyframes titleAnimation {
        0% {
            transform: translateY(-50px);
            opacity: 0;
            -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
            clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
        }
        100% {
            transform: translateY(0);
            opacity: 1;
            -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%);
            clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%);
        }
    }
}
</style>
