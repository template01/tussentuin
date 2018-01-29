<template>
<div class="" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
  <p class="is-size-1 has-text-weight-bold has-text-info	 " :class="[slideIn ? 'slideIn':'', inViewClass]">
    <span>Collective</span>
    <span>groene ruimten</span>
  </p>
  <p class="is-size-4 has-text-weight-semibold has-text-info	 pt-10 transitionOpacity" :style="[slideIn ? {'opacity':'1'}:{'opacity':'0'},{'transition-delay':'1300ms'}]">
    Stichting Tussentuin heeft als doel het ontwikkelen en verspreiden van kennis over collectieve groene ruimten tussen de bebouwde omgeving.
  </p>
</div>
</template>
<script>
import inView from 'in-view'
// import {
//   mapGetters
// } from 'vuex'



export default {
  props: [],
  data: function() {
    return {
      slideIn: false,
      inViewClass: 'slideInTitle'
    }
  },
  methods: {},
  mounted() {
    var vm = this
    this.$nextTick()
      .then(function() {
        var inViewClass = vm.inViewClass
        inView('.' + inViewClass).on('enter', function() {
          console.log(vm.slideIn)
          console.log(inView.is(vm.$el.querySelector('.' + inViewClass)))
          // IF SPECIFIC ITEM IN VIEW
          if (inView.is(vm.$el.querySelector('.' + inViewClass))) {
            vm.slideIn = true
          }

        });
      })
  }
  // computed: {
  //   ...mapGetters({
  //    appinitated: "GET_APP_INITIATED",
  //   }),
  // },

}
</script>
<style scoped lang="scss">
.is-size-1 {
    // line-height: 0.95;
    margin-top: 20px;
    span {
        margin-top: -20px;
    }
}
.slideIn {
    display: inline-block;
    span {
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
.slideIn span {
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
        -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
}
</style>
