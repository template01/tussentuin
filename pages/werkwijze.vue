<template>
<div class="" style="" v-if="loaderhasrun">
  <div class="">
    <tuinthemakennis_section id="" class="pt-80 has-text-info peach-background">
      <intro_section_top  :pattern="'/drawing.svg'" :title="fetchedContent.acf.titel" :desc="fetchedContent.acf.desc">
        <tonextsection class="mt-80" :relative="true" :ignorepaddingbottom="true" :delay="'1700'"  :text="'Ga verder'" :classobj="{class:'indexsection-outer',index:1}"></tonextsection>
      </intro_section_top>
      <div v-if="fetchedContent.acf.intro_foto" >
        <sectionphoto v-if="$mq==='xl'" :photoUrlSmall="fetchedContent.acf.intro_foto.background_image.sizes.thumbnail" :photoUrl="fetchedContent.acf.intro_foto.background_image.sizes.xxlarge"></sectionphoto>
        <sectionphoto v-if="$mq==='lg'"  :photoUrlSmall="fetchedContent.acf.intro_foto.background_image.sizes.thumbnail" :photoUrl="fetchedContent.acf.intro_foto.background_image.sizes.xlarge"></sectionphoto>
        <sectionphoto v-if="$mq==='sm' || $mq==='md' " :fixed="false"  :photoUrlSmall="fetchedContent.acf.intro_foto.background_image.sizes.thumbnail" :photoUrl="fetchedContent.acf.intro_foto.background_image.sizes.large"></sectionphoto>
      </div>

    </tuinthemakennis_section>
    <tuinthemakennis_section id="" class="pt-80 pb-80 has-text-dark">
      <intro_section :pattern="'/drawing_inverted.svg'">
        <!-- {{fetchedContent.acf}} -->
        <section_content_werkwijze :content="fetchedContent.acf.werkwijze_item"></section_content_werkwijze>
      </intro_section>
    </tuinthemakennis_section>
  </div>
</div>
</div>
</template>

<script>
import tuinthemakennis_section from '~/components/tuinthemakennis/section.vue'
import intro_section from '~/components/tuinthemakennis/intro_section.vue'
import intro_section_top from '~/components/tuinthemakennis/intro_section_top.vue'
import section_content from '~/components/tuinthemakennis/section_content.vue'
import section_content_werkwijze from '~/components/tuinthemakennis/section_content_werkwijze.vue'
import intropart from '~/components/parts/intropart.vue'
import sectionphoto from '~/components/elements/sectionphoto.vue'
import tonextsection from '~/components/parts/tonextsection.vue'

import axios from 'axios'

// if (process.browser) {
//   var offset = require('document-offset')
//
// }

import {
  mapGetters
} from 'vuex'


export default {
  components: {
    tuinthemakennis_section,
    intro_section,
    section_content,
    intro_section_top,
    intropart,
    section_content_werkwijze,
    sectionphoto,
    tonextsection
  },
  computed: {
    ...mapGetters({
      loaderhasrun: "GET_LOADER_RUN",
    }),
  },


  async asyncData({
    params,
    query,
    error,
    store,
    route,
    redirect
  }) {

    let [pagecontentRes] = await Promise.all([
      axios.get(store.state.apiRoot + '/wp/v2/pages?slug=werkwijze'),
    ])

    return {
      fetchedContent: pagecontentRes.data[0],
    }

  },


}
</script>

<style lang="scss">

</style>
