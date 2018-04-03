<template>
<div class="" style="" v-if="loaderhasrun">
  <div class="">
    <tuinthemakennis_section id="" class="pt-80 has-text-info peach-background">
      <intro_section_top class="" :pattern="'/drawing.svg'" :title="fetchedContent.titel" :desc="fetchedContent.desc">
        <div class="mt-20">
          <!-- SNEL ALLE TUINEN -->
          <div :class="hasrun ?'':'animate-in'" >
            <nuxt-link  class="mr-5 mt-5 has-text-weight-bold button is-centered is-info is-rounded" :to="'tuinen/'+item.slug" v-for="item in tuinContentLimited" v-html="item.title.rendered"></nuxt-link>
            <a class="mr-5 mt-5 has-text-weight-bold button is-centered is-info is-rounded" @click="showmore = !showmore; hasrun = true"><div>{{showmore? '...Toch minder':'...Laad meer'}}</div></a>
          </div>
        </div>
      </intro_section_top>
    </tuinthemakennis_section>
    <tuinthemakennis_section id="" class="has-text-dark">

      <intro_section :pattern="'/drawing_inverted.svg'">
        <div class="container pt-30 pb-80">
          <div class="pt-80">
            <tuincard v-for="(soortdata,index) in tuinsoortenContent"  :reverse="index & 1 ? false:true" :tuinsortdata="soortdata"></tuincard>
          </div>
        </div>
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
import tuincard from '~/components/parts/tuinen/tuincard.vue'
import intropart from '~/components/parts/intropart.vue'

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
    tuincard,
    intropart
  },
  computed: {
    ...mapGetters({
      loaderhasrun: "GET_LOADER_RUN",
    }),
    tuinContentLimited: function(){
      if(!this.showmore){
        return this.tuinContent.slice(0, 3);
      }else{
        return this.tuinContent
      }
    }
  },

  mounted(){
    this.scrollToHash()
  },

  data: function(){
    return{
        showmore: false,
        hasrun:false,
    }
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

    let [pagecontentRes, tuinsoortenRes, tuinRes] = await Promise.all([
      axios.get(store.state.apiRoot + '/wp/v2/pages?slug=tuinen'),
      axios.get(store.state.apiRoot + '/wp/v2/tuinsoort'),
      axios.get(store.state.apiRoot + '/wp/v2/tuin?per_page=100&fields=title.rendered,slug'),
    ])

    console.log(pagecontentRes.data[0].acf)
    return {
      fetchedContent: pagecontentRes.data[0].acf,
      tuinsoortenContent: tuinsoortenRes.data,
      tuinContent: tuinRes.data,
    }

  },


}
</script>

<style lang="scss">

.animate-in {

    a {
      opacity: 0;
      animation: fade-in 0.3s;
      animation-fill-mode: forwards;
    }



    @for $i from 0 through 30 {
        a:nth-child(#{$i}) {
            animation-delay: 1.2+$i*0.35+s;
        }
    }

}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


</style>
