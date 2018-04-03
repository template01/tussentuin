<template>
<div class="" style="" v-if="loaderhasrun">
  <div class="">
    <tuinthemakennis_section id="" class="pt-80 has-text-info">
      <intro_section_top :pattern="'/patternDroplet.svg'" :title="fetchedContent.acf.titel" :desc="fetchedContent.acf.desc">
        <tonextsection class="mt-80" :relative="true"  :ignorepaddingbottom="true" :delay="'1700'" :text="'Ga verder'" :classobj="{class:'indexsection-outer',index:1}"></tonextsection>
      </intro_section_top>
      <div v-if="fetchedContent.acf.intro_foto">
        <sectionphoto v-if="$mq==='xl'" :photoUrl="fetchedContent.acf.intro_foto.background_image.sizes.xxlarge"></sectionphoto>
        <sectionphoto v-if="$mq==='lg'" :photoUrl="fetchedContent.acf.intro_foto.background_image.sizes.xlarge"></sectionphoto>
        <sectionphoto v-if="$mq==='sm' || $mq==='md' " :fixed="false" :photoUrl="fetchedContent.acf.intro_foto.background_image.sizes.large"></sectionphoto>
      </div>
    </tuinthemakennis_section>
    <tuinthemakennis_section id="" class="pb-80 has-text-dark">
      <intro_section :pattern="'/patternDroplet_inverted.svg'">
        <section_content_kennis :content="kennisContent"></section_content_kennis>
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
import intropart from '~/components/parts/intropart.vue'
import section_content_kennis from '~/components/tuinthemakennis/section_content_kennis.vue'
import sectionphoto from '~/components/elements/sectionphoto.vue'
import tonextsection from '~/components/parts/tonextsection.vue'


import axios from 'axios'

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
    section_content_kennis,
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

    let [pagecontentRes,kennisContentRes] = await Promise.all([
      axios.get(store.state.apiRoot + '/wp/v2/pages?slug=kennis'),
      axios.get(store.state.apiRoot + '/wp/v2/kennissoort'),
    ])

    console.log(pagecontentRes.data[0].acf)
    return {
      fetchedContent: pagecontentRes.data[0],
      kennisContent: kennisContentRes.data,
    }

  },


}
</script>

<style lang="scss">

</style>
