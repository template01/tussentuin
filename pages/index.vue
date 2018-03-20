<template>
<div class="" style="" v-if="loaderhasrun">
  <div class=" has-text-info">
    <indexsection :fullheight="true">
      <index_intro_a :intro="indexContent.intro_a.bam_text" :image="indexContent.intro_a.background_image.sizes.large">
      </index_intro_a>
      <tonextsection :text="'Ga verder'" :idprop="'tuinen'"></tonextsection>
    </indexsection>

    <indexsection id="tuinen">
      <index_intro_b :intro="indexContent.intro_b"></index_intro_b>
    </indexsection>
    <indexsection id="">
      <index_onzetuinen :title="indexContent.onze_tuinen.titel" :intro="indexContent.onze_tuinen.desc">
        <tuincards :tuinsoorten="tuinsoortenContent"></tuincards>
      </index_onzetuinen>
      <topage :text="'Lees meer'"></topage>
    </indexsection>
    <indexsection id="">
      <index_onzethemas :desc="indexContent.onze_themas.desc" :title="indexContent.onze_themas.titel">
        <themas :themas="fetchedContent"></themas>
      </index_onzethemas>
      <topage :text="'Lees meer'"></topage>

    </indexsection>
    <indexsection id="">
      <index_onzekennis :desc="indexContent.onze_kennis.desc" :title="indexContent.onze_kennis.titel">
        <kenniscard :kennissoorten="kennissoortContent"></kenniscard>
      </index_onzekennis>
      <topage :text="'Lees meer'"></topage>

    </indexsection>
    <indexsection :fullheight="true">
      <index_stichtingtussentuin>
        <topage :left="true" :text="'Lees meer'"></topage>
      </index_stichtingtussentuin>
    </indexsection>
  </div>
</div>
</div>
</template>

<script>
import genericcomp from '~/components/_genericComp.vue'
import postlistcomp from '~/components/postListComp.vue'
import tonextsection from '~/components/parts/tonextsection.vue'
import topage from '~/components/parts/topage.vue'
import indexsection from '~/components/index/indexsection.vue'
import index_intro_a from '~/components/index/index_intro_a.vue'
import index_intro_b from '~/components/index/index_intro_b.vue'
import index_onzetuinen from '~/components/index/index_onzetuinen.vue'
import tuincards from '~/components/parts/tuincards.vue'
import index_onzethemas from '~/components/index/index_onzethemas.vue'
import themas from '~/components/parts/themas.vue'
import index_onzekennis from '~/components/index/index_onzekennis.vue'
import kenniscard from '~/components/parts/kenniscard.vue'
import index_stichtingtussentuin from '~/components/index/index_stichtingtussentuin.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    genericcomp,
    postlistcomp,
    indexsection,
    tonextsection,
    topage,
    index_intro_a,
    index_intro_b,
    index_onzetuinen,
    tuincards,
    index_onzethemas,
    themas,
    index_onzekennis,
    kenniscard,
    index_stichtingtussentuin,
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

    let [pagecontentRes,tuinsoortenRes,kennissoortRes,themaRes] = await Promise.all([
      axios.get(store.state.apiRoot + '/wp/v2/pages?slug=index'),
      axios.get(store.state.apiRoot + '/wp/v2/tuinsoort'),
      axios.get(store.state.apiRoot + '/wp/v2/kennissoort'),
      axios.get(store.state.apiRoot + '/wp/v2/thema'),
    ])
    return {
      indexContent: pagecontentRes.data[0].acf,
      tuinsoortenContent: tuinsoortenRes.data,
      kennissoortContent: kennissoortRes.data,
      fetchedContent: themaRes.data,
    }

  },


}
</script>

<style lang="scss">

</style>
