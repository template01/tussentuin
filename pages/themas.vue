<template>
<div class="" style="" v-if="loaderhasrun">
  <div class="">
    <tuinthemakennis_section id="" class="pt-80 has-text-info">
      <intro_section_top :pattern="'/pattern_grass1.svg'" :title="fetchedContent.titel" :desc="fetchedContent.desc">
      </intro_section_top>
    </tuinthemakennis_section>
    <tuinthemakennis_section id="" class="pt-80 pb-80 has-text-dark">
      <intro_section :pattern="'/pattern_grass1_inverted.svg'">
        <section_content_thema :content="themaContent"></section_content_thema>
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
import section_content_thema from '~/components/tuinthemakennis/section_content_thema.vue'
import intropart from '~/components/parts/intropart.vue'

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
    section_content_thema
  },
  computed: {
    ...mapGetters({
      loaderhasrun: "GET_LOADER_RUN",
    }),
  },

  mounted(){
    this.scrollToHash()
  },
  methods:{
    scrollToHash: function(){

          function getOffsetSum(elem) {
              var top=0, left=0;
              while(elem) {
                  top = top + parseInt(elem.offsetTop);
                  left = left + parseInt(elem.offsetLeft);
                  elem = elem.offsetParent;
              }
              return {top: top, left: left};
          }

          var mq = this.$mq

          setTimeout(function(){
            var hash = window.location.hash.slice(1)
            if(hash.length>0){

              var target = document.getElementById(hash)

              var offset = mq==='sm'|| mq==='md'? 20: 170

              window.scrollTo({ top: getOffsetSum(target).top - offset, left: 0, behavior: 'smooth' });
            }
          },1500)
    }
  },

  async asyncData({
    params,
    query,
    error,
    store,
    route,
    redirect
  }) {

    let [pagecontentRes, themaRes] = await Promise.all([
      axios.get(store.state.apiRoot + '/wp/v2/pages?slug=themas'),
      axios.get(store.state.apiRoot + '/wp/v2/thema'),

    ])

    console.log(pagecontentRes.data[0].acf)
    return {
      fetchedContent: pagecontentRes.data[0].acf,
      themaContent: themaRes.data,
    }

  },


}
</script>

<style lang="scss">

</style>
