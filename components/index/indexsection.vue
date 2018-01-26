<template>
<div class="window-full-height background-tree" :style="{ 'background-image': 'url(' + boomfile + '.svg)' }">
  <div class="container">
    <slot>
    </slot>
  </div>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


export default {
  props: ['boomfile'],
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
.background-tree {
    background-image: url("~/boom.svg");
    background-size:contain;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-attachment: fixed;  /* <- here it is */
}
</style>
