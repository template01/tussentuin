<template>
<div class="" style="" v-if="loaderhasrun">
  <div class="">
    <tuinthemakennis_section id="" class="has-text-info">
      <tuinintro :image="fetchedContent.acf.achtergronds_foto" :title="fetchedContent.title.rendered" :intro="fetchedContent.acf.intro"></tuinintro>
    </tuinthemakennis_section>
    <tuinthemakennis_section id="" class="pt-20 has-text-dark">
      <intro_section :pattern="'/drawing_inverted.svg'">
        <section_content_tuin :content="fetchedContent.acf.content"></section_content_tuin>
      </intro_section>
    </tuinthemakennis_section>
    <tuinthemakennis_section id="" class="has-text-dark">
      <intro_section :pattern="'/drawing_inverted.svg'">
        <tuinfooter :id="fetchedContent.id" :content="fetchedContent.acf"></tuinfooter>
        <!-- <section_content_tuin :content="fetchedContent.acf.content"></section_content_tuin> -->
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
import section_content_tuin from '~/components/tuinthemakennis/section_content_tuin.vue'
import tuinfooter from '~/components/tuinthemakennis/tuinfooter.vue'
import tuinintro from '~/components/tuinthemakennis/tuinintro.vue'
import intropart from '~/components/parts/intropart.vue'

import axios from 'axios'

import {
  mapGetters
} from 'vuex'


export default {
  components: {
    tuinthemakennis_section,
    intro_section,
    section_content_tuin,
    tuinintro,
    tuinfooter,
    intro_section_top,
    intropart
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
      axios.get(store.state.apiRoot + '/wp/v2/tuin?slug='+route.params.slug),

    ])

    console.log(pagecontentRes.data[0].acf)
    return {
      fetchedContent: pagecontentRes.data[0],
    }

  },


}
</script>

<style lang="scss">

</style>
