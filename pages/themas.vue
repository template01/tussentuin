<template>
<div class="" style="">
  <div class="">
    <tuinthemakennis_section id="" class="pt-80">
      <intro_section_top :pattern="'pattern_grass1.svg'" :title="themaContent.titel" :desc="themaContent.desc">
      </intro_section_top>
    </tuinthemakennis_section>
    <tuinthemakennis_section id="" class="pt-80">
      <!-- {{layout}} -->
      <intro_section :pattern="'patternLeafLighter.svg'">
        <template v-for="layout in themaContent.content">
          <div v-if="layout.acf_fc_layout === 'thema_soort'">
            <div class="container pt-30 pb-80">
              <div class="columns is-mobile pt-80">
                <div class=" column is-8 is-offset-2 ">
                  <intropart :hascentertext="true" :islarge="true" :titletext="layout.content.post_title">
                  </intropart>
                  <intropart :islarge="true" :blurbtext="layout.content.acf.desc_intro">
                  </intropart>
                </div>
              </div>
            </div>
          </div>
        </template>
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
import intropart from '~/components/parts/intropart.vue'

// import genericcomp from '~/components/_genericComp.vue'
// import postlistcomp from '~/components/postListComp.vue'
// import tonextsection from '~/components/parts/tonextsection.vue'
// import topage from '~/components/parts/topage.vue'
// import index_intro_a from '~/components/index/index_intro_a.vue'
// import index_intro_b from '~/components/index/index_intro_b.vue'
// import index_onzetuinen from '~/components/index/index_onzetuinen.vue'
// import tuincards from '~/components/parts/tuincards.vue'
// import index_onzethemas from '~/components/index/index_onzethemas.vue'
// import themas from '~/components/parts/themas.vue'
// import index_onzekennis from '~/components/index/index_onzekennis.vue'
// import kenniscard from '~/components/parts/kenniscard.vue'
// import index_stichtingtussentuin from '~/components/index/index_stichtingtussentuin.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    tuinthemakennis_section,
    intro_section,
    intro_section_top,
    intropart
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
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
      axios.get(store.state.apiRoot + '/wp/v2/pages?slug=themas'),

    ])

    console.log(pagecontentRes.data[0].acf)
    return {
      themaContent: pagecontentRes.data[0].acf,
    }

  },


}
</script>

<style lang="scss">

</style>
