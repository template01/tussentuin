<template>
<div class="sectionphoto" :style="[fixed && !$store.state.iOS ? {'background-attachment':'fixed'}:{'background-attachment':''}]" v-lazy:background-image="imgObj">
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


export default {
  props: {
    photoUrl: {},
    photoUrlSmall: {
      default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Fresh_green_maple_leaves_%287185025589%29.jpg/218px-Fresh_green_maple_leaves_%287185025589%29.jpg'
    },
    fixed: {
      default: true
    },
    isHalf: {},
    isRight: {},
    borderradius: {
      default: '0'
    }
  },
  data() {
    return {
      imgObj: {
        src: this.photoUrl,
        // error: ,
        loading: this.photoUrlSmall
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
.sectionphoto[lazy=loading] {
    filter:blur(20px);
}

.sectionphoto[lazy=loaded] {
    animation-name: example;
    animation-duration: 0.25s;
}
@keyframes example {
    from {
        filter:blur(20px);
    }
    to {
        filter:blur(0px);
    }
}

.sectionphoto {
    position: relative;
    width: 100%;
    height: 60vh;
    background-position: center center;
    // background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;

}
</style>
