<template>
<div>

  <div :class="[slideIn ? 'slideIn':'', inViewClass]" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
    <div class="thema-wrapper" v-if="slideIn">

      <div v-for="i in 6" class="thema-inner pb-40 pr-20 pl-20">
        <div class="logo mb-20":style="{ 'background-image': 'url(' + 'thema-0' + i + '.svg)' }">
        </div>
        <p class="pb-20 has-text-centered has-text-dark is-size-4 has-text-weight-semibold">
          Vergroening
        </p>
        <p class="has-text-centered has-text-dark is-size-5">
          Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
        </p>
      </div>



    </div>
  </div>
</div>
</template>
<script>
import scrollMonitor from 'scrollmonitor'
import card from '~/components/parts/card.vue'

// import {
//   mapGetters
// } from 'vuex'



export default {
  props: ['islarge', 'isblue', 'isbrown'],
  components: {
    card
  },
  data: function() {
    return {
      slideIn: false,
      inViewClass: 'themas'
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
<style scoped lang="scss">

.thema-wrapper{
  & > * {
    // transition: opacity 0.5
    opacity: 0;
    animation-delay: 0.5;
    animation-name: titleAnimation;
    animation-timing-function: ease;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }

  @for $i from 1 through 30 {
      & > *:nth-child(#{$i}) {
          animation-delay: $i*0.25+s;
      }
  }
}
.thema-inner{
  width: 50%;
  float: left;
  display: block;

  .logo{
    width: 100%;
    height: 60px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }


}

@keyframes titleAnimation {
    0% {
        transform: translateY(50px);
        opacity: 0;

    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}


</style>
