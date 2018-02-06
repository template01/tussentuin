<template>
<div>

  <div :class="[slideIn ? 'slideIn':'', inViewClass]" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
    <div class="" v-if="slideIn">
      <div>
        <p class="has-text-info is-size-4 has-text-weight-semibold has-text-grey-dark">
          hey
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
      inViewClass: 'tuincards'
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
