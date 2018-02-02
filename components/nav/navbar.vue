<template>
<div class="container">
  <div class="navbar  mt-20">
        <a class="valign is-size-4 has-text-weight-semibold has-text-info">Stichting Tussentuin</a>
  </div>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


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

}
</script>
<style scoped lang="scss">
.navbar {
    background: transparent;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 1;
    height: 80px;
    -webkit-transform-style: preserve-3d;
-moz-transform-style: preserve-3d;
transform-style: preserve-3d;
    .valign {
      display: table;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
