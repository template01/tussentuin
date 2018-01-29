<template>
<div class="indexsection-outer window-full-height background-tree" :style="{ 'background-image': 'url(' + 'patternLeafLighter' + '.svg)' }">
  <div <section class="section is-paddingless">
    <div class="container">
      <logo></logo>
      <div class="columns is-mobile pt-80">
        <div class="column is-4 is-offset-1 ">
          <intropart>
          </intropart>
        </div>
      </div>
    </div>
    </section>
    <growelement></growelement>

  </div>
</template>
<script>
import {
  mapGetters
} from 'vuex'

import logo from '~/components/logo/logo.vue'
import intropart from '~/components/parts/intropart.vue'
import growelement from '~/components/elements/growelement.vue'


export default {
  props: ['boomfile'],
  components: {
    logo,
    intropart,
    growelement
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
.indexsection-outer{
  position: relative;
}

</style>
