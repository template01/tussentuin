<template>
<div :class="{half: isHalf ,right: isRight }" class="backgroundpattern" :style="{ 'border-radius':borderradius, 'background-image': `url(`+patternfull+`)` }">
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
.backgroundpattern {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    // background-attachment: fixed;
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
