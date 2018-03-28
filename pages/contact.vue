<template>
<div class="" style="" v-if="loaderhasrun">
  <div class="">
    <tuinthemakennis_section id="" class="pt-80 has-text-info">
      <intro_section_top :ignorepaddingbottom="true" :pattern="'/patternGreen.svg'" :title="fetchedContent.acf.titel" :desc="fetchedContent.acf.desc">
      </intro_section_top>
      <intro_section>
        <intropart :secondDelay="1100" class="pb-80">
          <div class="container pt-40 pb-20">
            <div class="columns is-mobile">
              <div :class="$mq === 'lg' || $mq === 'xl'? ' column is-8 is-offset-2 ':'column is-10 is-offset-1'">
                <!-- <intropart :secondDelay="400" :desc="layout.content">
            </intropart> -->
                <div class="columns pb-40">
                  <div :class="$mq==='sm'|| $mq==='md' ? 'is-paddingless mt-10':''" class=" column  pb-10 is-size-4 has-text-weight-semibold" v-html="fetchedContent.acf.general_contact.column_i">
                  </div>
                  <div :class="$mq==='sm'|| $mq==='md' ? 'is-paddingless mt-10':''" class=" column pb-10 is-size-4 has-text-weight-semibold" v-html="fetchedContent.acf.general_contact.column_ii">
                  </div>
                </div>

              </div>
            </div>



            <div class="columns"  :class="$mq === 'lg' || $mq === 'xl'? '':'pt-40'">
              <div :class="$mq === 'lg' || $mq === 'xl'? 'column is-8 is-offset-2 ':'column is-10 is-offset-1'">
                <div class="columns">

                  <div :class="$mq==='sm'|| $mq==='md' ? 'is-paddingless mt-10':''" class="column pb-10"  v-if="chunkContactPersons[0]">
                    <div v-for="person in chunkContactPersons[0]">
                      <contact_person :person="person"></contact_person>
                    </div>
                  </div>
                  <div :class="$mq==='sm'|| $mq==='md' ? 'is-paddingless mt-10':''" class="column pb-10" v-if="chunkContactPersons[1]">
                    <div v-for="person in chunkContactPersons[1]">
                      <contact_person :person="person"></contact_person>
                    </div>
                  </div>
                  <div :class="$mq==='sm'|| $mq==='md' ? 'is-paddingless mt-10':''" class="column pb-10" v-if="chunkContactPersons[2]">
                    <div v-for="person in chunkContactPersons[2]">
                      <contact_person :person="person"></contact_person>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </intropart>
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
import contact_person from '~/components/parts/contact_person.vue'
import intropart from '~/components/parts/intropart.vue'

import axios from 'axios'

import {
  mapGetters
} from 'vuex'


export default {
  components: {
    tuinthemakennis_section,
    intro_section,
    intro_section_top,
    contact_person,
    intropart
  },
  computed: {
    ...mapGetters({
      loaderhasrun: "GET_LOADER_RUN",
    }),
    chunkContactPersons: function() {
      var contactpersons = this.fetchedContent.acf.contact_persons
      if (contactpersons.length < 4) {
        return _.chunk(contactpersons, 1);
      } else {
        return _.chunk(contactpersons, 3);
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
      axios.get(store.state.apiRoot + '/wp/v2/pages?slug=' + 'contact'),

    ])

    console.log(pagecontentRes.data[0].acf)
    return {
      fetchedContent: pagecontentRes.data[0],
    }

  },


}
</script>

<style scoped lang="scss">

</style>
