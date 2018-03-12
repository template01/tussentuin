<template>
<div>
  <backgroundpattern :pattern="'patternGreen.svg'"></backgroundpattern>
  <!-- <growelement></growelement> -->
  <div class="container pt-80 pb-80">
    <div class="pb-80 pt-80">

      <div class="columns is-mobile pt-80 pb-80">
        <div class="column is-6">
          <intropart :islarge="true" :titletext="'<p>Collective</p><p>groene ruimten</p>'">
          </intropart>
        </div>
        <div class="column is-6">
          <intropart :islarge="true" :blurbtext="'<p>Stichting Tussentuin heeft als doel het ontwikkelen en verspreiden van kennis over collectieve groene ruimten tussen de bebouwde omgeving.</p>'">
          </intropart>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'

import logo from '~/components/logo/logo.vue'
import intropart from '~/components/parts/intropart.vue'
// import introparttitle from '~/components/parts/introparttitle.vue'
// import intropartblurb from '~/components/parts/intropartblurb.vue'
import growelement from '~/components/elements/growelement.vue'
import backgroundpattern from '~/components/elements/backgroundpattern.vue'


export default {
  props: ['boomfile'],
  components: {
    logo,
    intropart,
    // introparttitle,
    // intropartblurb,
    growelement,
    backgroundpattern
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

*{
    background: $darkblue;
}
.indexsection-outer {
    overflow-y: hidden;
    position: relative;
    .columns:last-child {
        margin-bottom: 0;
    }
}
</style>
