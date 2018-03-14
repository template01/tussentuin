<template>
<div>

  <div :class="[slideIn ? 'slideIn':'', inViewClass]" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
    <div class="card-wrapper">
      <kenniscardsingle class="kenniscardsingleouter" >
    </kenniscardsingle>
    </div>

  </div>
</div>
</template>
<script>
import scrollMonitor from 'scrollmonitor'
import kenniscardsingle from '~/components/parts/kenniscardsingle.vue'


// import {
//   mapGetters
// } from 'vuex'



export default {
  props: ['islarge', 'isblue', 'isbrown'],
  components: {
    kenniscardsingle
  },
  data: function() {
    return {
      slideIn: false,
      inViewClass: 'kenniscards'
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
        vm.slideIn = false
    });
  }
  // computed: {
  //   ...mapGetters({
  //    appinitated: "GET_APP_INITIATED",
  //   }),
  // },

}
</script>
<style scoped lang="scss">
.card-wrapper{


  .kenniscardsingleouter {
    // transition: opacity 0.5
    opacity: 1;
    // animation-delay: 0.5;
    // animation-name: titleAnimation;
    // animation-timing-function: ease;
    // animation-duration: 0.8s;
    // animation-fill-mode: forwards;
    // animation-delay: 0.25s;
  }


}

// @keyframes titleAnimation {
//     0% {
//         transform: translateY(50px);
//         opacity: 0;
//
//     }
//     100% {
//         transform: translateY(0);
//         opacity: 1;
//     }
// }


</style>
