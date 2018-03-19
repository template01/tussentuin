<template>
<div class="sectionphoto" :style="{'background-image': `url(`+photoUrl+`)` }">

</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


export default {
  props: {
    photoUrl: {},
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
.sectionphoto {
  position: relative;
    width: 100%;
    height: 60vh;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;

}
</style>
