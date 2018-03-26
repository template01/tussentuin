<template>
  <div >
    <backgroundpattern class="blue-background" :patternfull="'rain.svg'"></backgroundpattern>
    <div class="container pt-30 pb-80">
      <div class="columns is-mobile pt-80" :class="$mq === 'lg'? 'pt-80':'pt-40'">
        <div class="" :class="$mq === 'lg'? ' column is-8 is-offset-2 ':'column is-10 is-offset-1'">
          <intropart :islarge="true" :secondDelay="200" :blurbtext="intro">
          </intropart>
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
import growelement from '~/components/elements/growelement.vue'
import tuincards from '~/components/parts/tuincards.vue'
import backgroundpattern from '~/components/elements/backgroundpattern.vue'


export default {
  props: {
    intro:{
      default:'<p>...</p>'
    },
  },
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
