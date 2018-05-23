<template>
  <div class="tuinintro" :class="$mq ==='lg'? 'window-full-height':''">
    <backgroundpattern class="peach-background" :patternfull="'/drawing.svg'"></backgroundpattern>
    <div class="container " :class="$mq ==='lg'? 'pt-80  pb-80 window-full-height aligner':''">
      <div class="pt-80" :class="$mq ==='lg'? 'pb-80':''">

        <div class="columns is-mobile pt-80 " :class="$mq ==='lg'? '':''">
          <div class="column" :class="$mq ==='lg'? 'is-offset-7 is-5':'is-offset-1 is-10'">
            <intropart :islarge="true" :titletext="title">
            </intropart>
            <intropart :islarge="true" :blurbtext="intro">
            </intropart>
          </div>

        </div>
        <div class="columns is-paddingless is-mobile " :class="$mq ==='lg'? 'pb-40':''">
          <div class="column" style="padding-bottom:0; padding-top:0;" :class="$mq ==='lg'? 'is-offset-7 is-5':'is-offset-1 is-10'">
            <intropart>
              <tonextsection class="mt-40" :relative="true" :left="$mq ==='lg'? true: false" :text="'Ga verder'" :classobj="{class:'indexsection-outer',index:1}"></tonextsection>
            </intropart>
          </div>

        </div>
      </div>
      <img style="display:block" v-if="$mq !='lg'" :src="image.sizes.large"/>
    </div>
    <backgroundphoto v-if="$mq ==='lg'" :isHalf="'true'" :patternSmall="image.sizes.thumbnail" :patternfull="image.sizes.xlarge"></backgroundphoto>
    <backgroundphoto v-if="$mq ==='xl'" :isHalf="'true'" :patternSmall="image.sizes.thumbnail" :patternfull="image.sizes.xxlarge"></backgroundphoto>
    <!-- <backgroundphoto v-if="$mq==='lg'" :isHalf="'true'" :isRight="'true'" :patternfull="image.sizes.xlarge"></backgroundphoto> -->
    <!-- <backgroundphoto v-if="$mq==='xl'" :isHalf="'true'" :isRight="'true'" :patternfull="image.sizes.xxlarge"></backgroundphoto> -->
  </div>


</template>
<script>
import {
  mapGetters
} from 'vuex'

import intropart from '~/components/parts/intropart.vue'
import backgroundpattern from '~/components/elements/backgroundpattern.vue'
import backgroundphoto from '~/components/elements/backgroundphoto.vue'
import tonextsection from '~/components/parts/tonextsection.vue'


export default {
  props: ['image','title','intro'],
  components: {
    intropart,
    backgroundpattern,
    backgroundphoto,
    tonextsection,
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
