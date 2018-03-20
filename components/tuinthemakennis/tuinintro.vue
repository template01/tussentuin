<template>
  <div class="tuinintro window-full-height">
    <backgroundpattern class="peach-background" :patternfull="'../../drawing.svg'"></backgroundpattern>
    <div class="container pt-80  pb-80 window-full-height aligner">
      <div class="pb-80 pt-80">

        <div class="columns is-mobile pt-80 pb-80">
          <div class="column is-offset-7 is-5">
            <intropart :islarge="true" :titletext="title">
            </intropart>
            <intropart :islarge="true" :blurbtext="intro">
            </intropart>
          </div>

        </div>
      </div>
    </div>
    <backgroundphoto :isHalf="'true'" :patternfull="image"></backgroundphoto>

  </div>


</template>
<script>
import {
  mapGetters
} from 'vuex'

import intropart from '~/components/parts/intropart.vue'
import backgroundpattern from '~/components/elements/backgroundpattern.vue'
import backgroundphoto from '~/components/elements/backgroundphoto.vue'



export default {
  props: ['image','title','intro'],
  components: {
    intropart,
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

.tuinintro{
  position: relative;
}


</style>
