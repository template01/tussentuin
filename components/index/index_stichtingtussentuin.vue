<template>
<div class="window-full-height">
  <backgroundpattern class="peach-background" :patternfull="'drawing.svg'"></backgroundpattern>
  <div class="container pt-80 pb-80 window-full-height aligner is-hidden-touch">
    <div class="pb-80 pt-80">
      <div class="columns is-mobile pt-80 pb-80">
        <div class="column is-offset-7 is-5">
          <intropart :islarge="true" :titletext="title">
          </intropart>
          <intropart :islarge="true" :blurbtext="intro">
          </intropart>
          <div  class="pt-80">
            <slot>
            </slot>
          </div>
        </div>

      </div>
    </div>
  </div>
  <backgroundphoto :isHalf="'true'" :patternfull="image.url"></backgroundphoto>

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
import backgroundphoto from '~/components/elements/backgroundphoto.vue'


export default {
  props: ['intro','image','title'],
  components: {
    logo,
    intropart,
    // introparttitle,
    // intropartblurb,
    growelement,
    backgroundpattern,
    backgroundphoto
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
    .columns:last-child {
        margin-bottom: 0;
    }
}
</style>
