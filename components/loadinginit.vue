<template>
  <div class="loader-leaf aligner">
    <div class="align-item" id="my-div">
    </div>
  </div>
</template>
<script>
import {
  mapGetters
} from 'vuex'

import Vivus from 'vivus'

export default {
  props: [],
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
  mounted() {

    new Vivus('my-div', {
      duration: 200,
      type: 'oneByOne',
      file: 'leafLoading.svg',
      animTimingFunction: Vivus.EASE
    }, function(myVivus) {
      myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
    })

  }

}
</script>
<style scoped lang="scss">
.loader-leaf {
    z-index: 1001;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;

}
</style>
