<template>
  <div>
    <div :class="{half: isHalf ,right: isRight }" class="backgroundpattern is-hidden-touch" v-lazy:background-image="imgObj" :style="{ 'border-radius':borderradius, 'background-image': `url(`+patternfull+`)` }">
    </div>
    <div class="backgroundpatternmobile is-hidden-desktop" v-lazy:background-image="imgObj" :style="{'background-image': `url(`+patternfull+`)` }">
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
    patternSmall: {
      default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Fresh_green_maple_leaves_%287185025589%29.jpg/218px-Fresh_green_maple_leaves_%287185025589%29.jpg'
    },
    isHalf: {},
    isRight: {},
    borderradius: {
      default:'0'
    }
  },
  data () {
    return {
      imgObj: {
        src: this.patternfull,
        // error: ,
        loading: this.patternSmall
      }
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

.backgroundpattern[lazy=loading] {
  filter:blur(20px);
}

.backgroundpattern[lazy=loaded] {
  animation-name: example;
  animation-duration: 0.25s;
}
@keyframes example {
    from {filter:blur(20px);}
    to {filter:blur(0px);}
}



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
