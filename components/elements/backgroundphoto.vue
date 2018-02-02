<template>
<div class="backgroundphoto-wrapper" >
  <div class="backgroundphoto" :style="{ 'background-image': 'url(' + pattern }" :class="[slideIn ? 'parallaxIn':'']">
  </div>
</div>
</template>
<script>
// import Rellax from 'rellax'
// import inView from 'in-view'
import scrollMonitor from 'scrollmonitor'
import {
  mapGetters
} from 'vuex'


export default {
  props: ['pattern',],
  data: function() {
    return {
      slideIn: false,
      inViewClass: 'backgroundphoto'
    }
  },
  methods: {},
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },
  mounted() {

    var myElement = this.$el.querySelector("."+this.inViewClass);
    var elementWatcher = scrollMonitor.create(myElement, -500);
    var vm = this

    elementWatcher.enterViewport(function() {
        vm.slideIn = true
    });

    elementWatcher.exitViewport(function() {
        vm.slideIn = false
    });

    // var vm = this
    //     var inViewClass = vm.inViewClass
    //
    //     inView('.' + inViewClass).on('enter', function() {
    //       // IF SPECIFIC ITEM IN VIEW
    //       if (inView.is(vm.$el.querySelector('.' + inViewClass))) {
    //         vm.slideIn = true
    //       }
    //   });
  }

}
</script>
<style scoped lang="scss">
.backgroundphoto-wrapper{
  position: absolute;
  height: 100%;
  width: 100%;
}
.backgroundphoto {
    position: absolute;
    height: calc(100% + 50px);
    // bottom:25px;
    width: calc(100% + 50px);
    margin-left: -50px;
    margin-right: 50px;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    transition: transform 2s, filter 0.25s;
    transform: translateY( 0px);
    // filter: blur(5px);

}
.parallaxIn {
    transform: translateY(-25px);
    // filter: blur(0px);


}
</style>
