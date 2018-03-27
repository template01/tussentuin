<template>
<div class="" style="" v-if="loaderhasrun">
  <div class="">
    <tuinthemakennis_section id="" class="pt-80 has-text-info">
      <intro_section_top :ignorepaddingbottom="true" :pattern="'/patternGreen.svg'" :title="fetchedContent.acf.titel" :desc="fetchedContent.acf.desc">
      </intro_section_top>
      <intro_section>
        <div class="container pt-40 pb-40">
          <div class="columns is-mobile">
            <div :class="$mq === 'lg' || $mq === 'xl'? ' column is-8 is-offset-2 ':'column is-10 is-offset-1'">
              <!-- <intropart :secondDelay="400" :desc="layout.content">
            </intropart> -->
            <div class="columns pb-40">
              <div class=" column is-size-4 has-text-weight-semibold" v-html="fetchedContent.acf.general_contact.column_i">
              </div>
              <div class=" column is-size-4 has-text-weight-semibold" v-html="fetchedContent.acf.general_contact.column_ii">
              </div>
            </div>
            <div class="columns">
              <div class=" column is-size-4">
                <div v-for="person in chunkContactPersons[0]"  >
                    <p v-html="person.naam">
                    </p>
                    <p>
                      <a class="has-text-info" :href="'mailto:'+person.email+'?Subject=Hoi%20'+person.naam" target="_top" v-html="person.email"></a>
                    </p>
                    <p>
                      <a class="has-text-info" :href="'tel:'+person.tele" v-html="person.tele"></a>
                    </p>
                </div>
              </div>
              <div class=" column is-size-4">
                <div v-for="person in chunkContactPersons[1]"  >
                    <p v-html="person.naam">
                    </p>
                    <p>
                      <a class="has-text-info" :href="'mailto:'+person.email+'?Subject=Hoi%20'+person.naam" target="_top" v-html="person.email"></a>
                    </p>
                    <p>
                      <a class="has-text-info" :href="'tel:'+person.tele" v-html="person.tele"></a>
                    </p>
                </div>
              </div>
            </div>
          </div>
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
    chunkContactPersons: function() {
      var contactpersons = this.fetchedContent.acf.contact_persons
      if(contactpersons.length<3){
        return _.chunk(contactpersons, 1);
      }else{
        return _.chunk(contactpersons, 2);
      }
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

    let [pagecontentRes] = await Promise.all([
      axios.get(store.state.apiRoot + '/wp/v2/pages?slug='+'contact'),

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
