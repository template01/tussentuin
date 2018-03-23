<template>
<div class="container">
  <transition name="fade">
    <div v-if="!menuopen" class="navbar pr-20 pl-20  mt-20">
      <nuxt-link to="/" class=" cool-link cool-link-blue valign is-size-4 has-text-weight-semibold has-text-info">Stichting Tussentuin</nuxt-link>
    </div>
  </transition>
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
      menuopen: "GET_MENUOPEN",
    }),
  },

}
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.navbar {
    background: transparent;
    position: absolute;
    // width: 100%;
    top: 0;
    z-index: 1001;
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
