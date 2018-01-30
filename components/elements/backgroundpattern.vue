<template>
  <div class="backgroundpattern" :style="{ 'background-image': 'url(' + pattern }">
  </div>
</template>
<script>

import {
  mapGetters
} from 'vuex'


export default {
  props:['pattern'],
  data: function() {
    return {
      genericData: 'generic component text'
    }
  },
  methods:{
  },
  computed: {
    ...mapGetters({
     appinitated: "GET_APP_INITIATED",
    }),
  },

}
</script>
<style scoped lang="scss">

  .backgroundpattern{
    position: absolute;
    height: 100%;
    width: 100%;
    background-attachment: fixed;
  }
</style>
