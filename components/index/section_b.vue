<template>
  <div>
    <backgroundpattern :pattern="'patternDroplet.svg'"></backgroundpattern>
    <div class="container pt-30 pb-80">
      <div class="columns is-mobile pt-80">
        <div class=" column is-4 is-offset-4 ">
          <intropart></intropart>
        </div>
      </div>

      <div class="is-mobile pt-80">
        <tuincards></tuincards>
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
import growelement from '~/components/elements/growelement.vue'
import tuincards from '~/components/parts/tuincards.vue'
import backgroundpattern from '~/components/elements/backgroundpattern.vue'


export default {
  props: ['boomfile'],
  components: {
    logo,
    intropart,
    growelement,
    tuincards,
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
.indexsection-outer {
    overflow-y: hidden;
    position: relative;

    .columns {
      margin-bottom: 0;
      margin-top: 0;
    }
}
</style>
