<template>
  <div>

    <div class="grow delay-750" :style="{ 'background-image': 'url(' + 'boomtop' + '.svg)' }" :class="[slideIn ? 'growStart':'']">
    </div>
  </div>
</template>
<script>

import {
  mapGetters
} from 'vuex'

import scrollMonitor from 'scrollmonitor'


export default {
  props: [],
  data: function() {
    return {
      slideIn: false,
      inViewClass: 'grow'
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
.grow {
    width: 100%;
    height: 100%;
    position: absolute;
    background-attachment: fixed;
    background-position: 90% bottom;
    background-size: contain;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    transform: translateY(50vh);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
}
.growStart{
  transform: translateY(0vh);
  opacity: 1;

}

.background-tree {
    background-image: url("~/patternLeaf.svg");
    // background-size:contain;
    // background-position: bottom center;
    // background-repeat: no-repeat;
    background-attachment: fixed;
    /* <- here it is */
}
</style>
