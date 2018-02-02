<template>
<div class="intropart" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
  <div v-html="headertext" class=" has-text-weight-bold" :class="[slideIn ? 'slideIn':'', inViewClass, islarge ? 'is-size-1':'is-size-2', isgreen ? 'has-text-primary':'has-text-info']">
    <!-- <span>Collective</span><span>groene ruimten</span> -->
  </div>
  <div v-html="blurbtext" class="is-size-4 has-text-weight-semibold pt-10 transitionOpacity" :class="[ islarge ? 'is-size-4':'is-size-5', isgreen ? 'has-text-primary':'has-text-info']" :style="[slideIn ? {'opacity':'1'}:{'opacity':'0'},{'transition-delay':'1300ms'}]">

  </div>
</div>
</template>
<script>
import scrollMonitor from 'scrollmonitor'
// import {
//   mapGetters
// } from 'vuex'



export default {
  props: ['headertext', 'blurbtext', 'islarge', 'isgreen'],
  data: function() {
    return {
      slideIn: false,
      inViewClass: 'slideInTitle'
    }
  },
  methods: {},
  mounted() {
    var myElement = this.$el.querySelector("."+this.inViewClass);
    var elementWatcher = scrollMonitor.create(myElement);
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
          padding-top: 0px;
          // line-height: 1.2 !important;
            margin-top: -20px;
        }
    }

    .is-size-2 {
        p {
          padding-top: 0px;
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
