<template>
  <transition name="fade">
  <div class="loaderOuter" v-if="loading">
    <div class="loaderInner aligner">
      <div>
        <img class="pb-40" src="http://api.tussentuin.nl/wp-content/uploads/2018/03/LogoLoaderwhite.svg"/>
        <p class="loaderInnerText is-size-3 has-text-weight-semibold">Aan het laden<span>.</span><span>.</span><span>.</span></p>
      </div>
    </div>
<div class="ripple-button1">
</div>
</div>
</transition>
</template>
<script>
import {
  mapGetters
} from 'vuex'

export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      var vm = this
      setTimeout(function() {
        vm.loading = false
      }, 1500)
    }
  }
}
</script>
<style scoped lang="scss">

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}


.loaderOuter{
  position: fixed;
  top: -40%;
  left: -40%;
  width: 180%;
  height: 180%;
  z-index: 1001;
}
.loaderInner {
    z-index: 1001;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: $white;
    animation-duration: 0.5s;
     animation-delay: 0.25s;
    animation-name: opacityTextIn;
    animation-fill-mode: forwards;
    opacity: 0;

    img{
      margin: 0 auto;
      display: block;
      // max-width: 200%;
      width: 240px
    }
}

.ripple-button1 {
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
        border-radius: 0;
    }
    20% {
        transform: scale(1);
        opacity: 1;
        border-radius: 0;
    }
    60% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        border-radius: 0;

    }
}
@keyframes opacityTextIn {
    from {opacity: 0;}
    to {opacity: 1;}
}



@keyframes blink {
    /**
     * At the start of the animation the dot
     * has an opacity of .2
     */
    0% {
      top: 0px
    }
    /**
     * At 20% the dot is fully visible and
     * then fades out slowly
     */
    50% {
      top: -15%
    }
    /**
     * Until it reaches an opacity of .2 and
     * the animation can start again
     */
    100% {
      top: 0px
    }
}
.loaderInnerText{
  position: relative;
  text-align: center;
  margin-left: -16px;
}
.loaderInnerText span {
    display: inline-block;
    position: absolute;
    /**
     * Use the blink animation, which is defined above
     */
    animation-name: blink;
    /**
     * The animation should take 1.4 seconds
     */
    animation-duration: 1.5s;
    /**
     * It will repeat itself forever
     */
    animation-iteration-count: infinite;
    // animation-timing-function: linear;
    /**
     * This makes sure that the starting style (opacity: .2)
     * of the animation is applied before the animation starts.
     * Otherwise we would see a short flash or would have
     * to set the default styling of the dots to the same
     * as the animation. Same applies for the ending styles.
     */
    // animation-fill-mode: both;
}

.loaderInner span:nth-child(1) {
    /**
     * Starts the animation of the third dot
     * with a delay of .2s, otherwise all dots
     * would animate at the same time
     */
     margin-left: 0px
}


.loaderInner span:nth-child(2) {
    /**
     * Starts the animation of the third dot
     * with a delay of .2s, otherwise all dots
     * would animate at the same time
     */
    animation-delay: .3s;
    margin-left: 10px
}

.loaderInner span:nth-child(3) {
    /**
     * Starts the animation of the third dot
     * with a delay of .4s, otherwise all dots
     * would animate at the same time
     */
    animation-delay: .6s;
    margin-left: 20px
}


</style>
