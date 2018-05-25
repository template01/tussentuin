<template>
<div>
  <template v-for="layout in content">
    <div v-if="layout.acf_fc_layout === 'vimeo_embed'">
      <div class="container pt-40 pb-40 textphoto">
        <div class="columns is-mobile">
          <iframe style="margin:0 auto" :src="vimeoCode(layout.url)" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div v-if="layout.acf_fc_layout === 'textphoto'">
      <div class="container pt-40 pb-40 textphoto">
        <div class="columns is-mobile">
          <div :class="$mq === 'lg' || $mq === 'xl'? ' column is-8 is-offset-2 ':'column is-10 is-offset-1'">
            <intropart :secondDelay="400" :desc="layout.content">
            </intropart>
          </div>
        </div>
      </div>
    </div>
    <div v-if="layout.acf_fc_layout === 'background_image'">
      <sectionphoto v-if="$mq==='xl'":class="[layout.addpadding['padding-top'] ? 'mt-80':'', layout.addpadding['padding-bottom'] ? 'mb-80':'']" :photoUrlSmall="layout.content.background_image.sizes.thumbnail" :photoUrl="layout.content.background_image.sizes.xxlarge"></sectionphoto>
      <sectionphoto v-if="$mq==='lg'":class="[layout.addpadding['padding-top'] ? 'mt-80':'', layout.addpadding['padding-bottom'] ? 'mb-80':'']" :photoUrlSmall="layout.content.background_image.sizes.thumbnail" :photoUrl="layout.content.background_image.sizes.xlarge"></sectionphoto>
      <sectionphoto v-if="$mq==='sm' || $mq==='md' ":class="[layout.addpadding['padding-top'] ? 'mt-80':'', layout.addpadding['padding-bottom'] ? 'mb-80':'']" :fixed="false" :photoUrlSmall="layout.content.background_image.sizes.thumbnail" :photoUrl="layout.content.background_image.sizes.large"></sectionphoto>
    </div>
    <div v-if="layout.acf_fc_layout === 'gallery'">
      <div class="container ">
        <div class="columns is-mobile">
          <div :class="$mq === 'lg' || $mq === 'xl'? ' column is-8 is-offset-2 ':'column is-10 is-offset-1'">
            <tuingallerycaroussel :secondDelay="400" :content="layout.content"></tuingallerycaroussel>
          </div>
        </div>
      </div>
    </div>
  </template>

</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'

import intropart from '~/components/parts/intropart.vue'
import sectionphoto from '~/components/elements/sectionphoto.vue'
import backgroundpattern from '~/components/elements/backgroundpattern.vue'
import tuingallerycaroussel from '~/components/parts/tuin/tuingallerycaroussel.vue'
import backgroundphoto from '~/components/elements/backgroundphoto.vue'



export default {
  props: ['content'],
  components: {
    intropart,
    sectionphoto,
    backgroundpattern,
    tuingallerycaroussel,
    backgroundphoto
  },
  data: function() {
    return {
      genericData: 'generic component text'
    }
  },
  methods: {
    vimeoCode: function(url) {
      return 'https://player.vimeo.com/video/' + /[^/]*$/.exec(url)[0] + '?title=false&byline=false'
    }
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },

}
</script>
<style  lang="scss">
.textphoto {
    p {
        margin-bottom: 10px !important;
    }
    a {
        color: inherit;
        -webkit-box-shadow: inset 0 -2px 0 0;
        -moz-box-shadow: inset 0 -2px 0 0;
        box-shadow: inset 0 -2px 0 0;
    }

}
</style>

<style scoped lang="scss">
.tuinintro {
    position: relative;
}
.peach-background {
    background: $peach;
}
</style>
