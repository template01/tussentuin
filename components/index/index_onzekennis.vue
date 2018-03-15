<template>
<div>
  <backgroundpattern class="blue-background" :patternfull="'rain.svg'"></backgroundpattern>
  <div class="container pt-30 pb-80">

    <div class="columns is-mobile pt-80">
      <div class=" column is-8 is-offset-2 ">
        <intropart :islarge="true" :titletext="'<p>Onze</p><p>kennis</p>'">
        </intropart>
        <intropart :islarge="true" :blurbtext="'<p>Fusce et facilisis dolor. Suspendisse cursus urna sit amet orci iaculis vehicula aenean molestie turpis justo ultricies. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.</p>'">
        </intropart>
      </div>
    </div>
    <div class="columns is-mobile pt-80">
      <div class=" column ">
        <slot>
        </slot>
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
import themas from '~/components/parts/themas.vue'
import backgroundpattern from '~/components/elements/backgroundpattern.vue'


export default {
  props: ['boomfile'],
  components: {
    logo,
    intropart,
    growelement,
    themas,
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
.peach-background {
    background: $peach;
}
.indexsection-outer {
    overflow-y: hidden;
    position: relative;

    .columns {
        margin-bottom: 0;
        margin-top: 0;
    }
}
</style>
