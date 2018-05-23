<template>
  <div>
    <div :class="{half: isHalf ,right: isRight }" class="backgroundpattern is-hidden-touch" :style="{ 'border-radius':borderradius, 'background-image': `url(`+patternfull+`)` }">
    </div>
    <div class="backgroundpatternmobile is-hidden-desktop" :style="{'background-image': `url(`+patternfull+`)` }">
    </div>
  </div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


export default {
  props: {
    patternfull: {},
    isHalf: {},
    isRight: {},
    borderradius: {
      default:'0'
    }
  },
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

}
</script>
<style scoped lang="scss">

.backgroundpatternmobile{
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 50%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

}
.backgroundpattern {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    &.right {
        right: 0;
    }
    &.half {
        width: 50%;

    }

}
</style>
