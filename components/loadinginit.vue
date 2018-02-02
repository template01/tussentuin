<template>
<div class="loader-leaf aligner">
  <!-- <div class="align-item" id="my-div">
    </div> -->
  <div class="loadlogo" style="background-image:url('LogoAnim.svg')">

  </div>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'

import Vivus from 'vivus'

export default {
  props: [],
  data: function() {
    return {
      genericData: 'generic component text'
    }
  },
  methods: {},
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },
  // mounted() {
  //
  //   new Vivus('my-div', {
  //     duration: 200,
  //     type: 'oneByOne',
  //     file: 'LogoAnim.svg',
  //     animTimingFunction: Vivus.EASE
  //   }, function(myVivus) {
  //     myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
  //   })
  //
  // }

}
</script>
<style scoped lang="scss">
.loadlogo {
    height: 400px;
    width: 400px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    // -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 100% 100%);
    // clip-path: polygon(100% 0, 100% 100%, 0 100%, 100% 100%);
    // clip-path:circle(30px at 35px 35px);
    clip-path:circle(0px at 50% 50%);
    opacity: 1;
    // animation-delay: 0.5;
    animation-name: titleAnimation;
    animation-timing-function: ease;
    animation-duration: 3s;
    animation-iteration-count:infinite;
    // animation-direction: alternate;
    // -webkit-animation-fill-mode: forwards;
}

@keyframes titleAnimation {
    0% {
      clip-path:circle(0px at 50% 50%);
        opacity: 0;
        // -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 100% 100%);
        // clip-path: polygon(100% 0, 100% 100%, 0 100%, 100% 100%);
    }
    25%{
      opacity: 1;
    }
    50% {
      clip-path:circle(100% at 50% 50%);
        opacity: 1;
        // -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%);
        // clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%);
    }
    75%{
      opacity: 1;
    }
    100% {
      clip-path:circle(0px at 50% 50%);
        opacity: 0;
        // -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 100% 100%);
        // clip-path: polygon(100% 0, 100% 100%, 0 100%, 100% 100%);
    }
}

.loader-leaf {
    z-index: 1001;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;

}
</style>
