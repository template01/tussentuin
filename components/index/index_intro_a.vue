<template>
  <div class="window-full-height"  v-if="$mq==='lg' || $mq==='xl'">
    <backgroundpattern :patternfull="'/patternGreen.svg'"></backgroundpattern>

    <div class="container">
      <div class="pr-20 pl-20 pt-80 pb-80 window-full-height aligner  window-half-width ">
        <div class="pb-80 pt-80 ">

          <div class="columns is-mobile pt-80 pb-80">
            <div class="column is-12 is-offset-0">
              <intropart :islarge="true" :titletext="intro">
              </intropart>
            </div>
          </div>
        </div>
      </div>

    </div>
    <backgroundphoto v-if="$mq==='lg'" :isHalf="'true'" :isRight="'true'" :patternfull="image.sizes.xlarge"></backgroundphoto>
    <backgroundphoto v-if="$mq==='xl'" :isHalf="'true'" :isRight="'true'" :patternfull="image.sizes.xxlarge"></backgroundphoto>

  </div>

<div class="" v-else>
  <backgroundpattern :patternfull="'/patternGreen.svg'"></backgroundpattern>

  <div class="container pt-80">
    <div class="pr-20 pl-20 pt-80 pb-80 ">
      <div class="pt-80 ">
        <div class="">
          <intropart :islarge="true" :titletext="intro">
          </intropart>
        </div>
      </div>
    </div>
    <slot>
    </slot>
    <img style="display:block" :src="image.sizes.large" />
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
import backgroundphoto from '~/components/elements/backgroundphoto.vue'


export default {
  props: {
    intro: {
      default: '<p>...</p>'
    },
    image: {
      default: ''
    }
  },
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
