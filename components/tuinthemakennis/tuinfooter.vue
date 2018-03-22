<template>
<div>
  <div class="container pt-40 pb-40">
    <div class="tuinfooter transitionOpacity delay-500" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
      <div :class="[inViewClass]">
        <div class="columns is-mobile">
          <div class=" column is-8 is-offset-2 ">

            <!-- {{content.tuin_footer.column_i}} -->
            <div class="columns is-mobile has-text-weight-semibold " v-if="content">
              <div class=" column ">
                <p class="" v-if="content.tuin_footer.column_i.gerealiseerd">
                  <span class="mb-5 button is-light nostyle is-paddingless">Gerealiseerd:</span>
                  <span class="mb-5 button nostyle is-light ml-5 is-paddingless-left">{{content.tuin_footer.column_i.gerealiseerd}}</span>
                </p>
                <p class="">
                  <span class="mb-5 button is-light nostyle is-paddingless" v-if="content.tuin_footer.column_i.opdrachtgever">In opdracht van:</span>
                  <span v-for="item in content.tuin_footer.column_i.opdrachtgever" class="mb-5 button nostyle is-light ml-5 is-paddingless-left"><a class="has-text-dark has-text-underline-dark" target="_blank" :href="item.url" v-html="item.naam"></a></span>
                </p>
                <p class="">
                  <span class="mb-5 button is-light nostyle is-paddingless" v-if="content.tuin_footer.column_i.samenwerking">In samenwerking met:</span>
                  <span v-for="item in content.tuin_footer.column_i.samenwerking" class="mb-5 button nostyle is-light ml-5 is-paddingless-left"><a class="has-text-dark has-text-underline-dark" target="_blank" :href="item.url" v-html="item.naam"></a></span>
                </p>
                <p class="">
                  <span class="mb-5 button is-light nostyle is-paddingless" v-if="content.tuin_footer.column_i.externe_links">Externe links:</span>
                  <span v-for="item in content.tuin_footer.column_i.externe_links" class="mb-5 button nostyle is-light ml-5 is-paddingless-left"><a class="has-text-dark has-text-underline-dark" target="_blank" :href="item.url" v-html="item.naam"></a></span>
                </p>

              </div>
              <div class=" column ">

                <p class="" v-if="typeof tuinsoort === 'object'">
                  <span class="mb-5 button is-light nostyle is-paddingless-left">Tuin type:</span>
                  <!-- {{tuinsoort.slug}} -->
                  <!-- {{this.content.tuin_soort}} -->
                  <nuxt-link :to="'/tuinen/#'+tuinsoort.slug" class="mb-5 button is-light has-text-weight-semibold is-rounded mr-5" v-html="tuinsoort.title.rendered"></nuxt-link>
                </p>
                <p class="" v-if="Array.isArray(content.tuin_footer.column_ii.tuin_thema)">
                  <span class="button is-light nostyle is-paddingless-left">Themas:</span>
                  <nuxt-link v-for="item in content.tuin_footer.column_ii.tuin_thema" :to="'/themas/#'+item.post_name" class="mb-5 button is-light has-text-weight-semibold is-rounded mr-5" v-html="item.post_title"></nuxt-link>
                </p>
                <p class="" v-if="related.length>0">
                  <span class="mb-5 button is-light nostyle is-paddingless-left">Tuin type:</span>
                  <!-- {{tuinsoort.slug}} -->
                  <!-- {{this.content.tuin_soort}} -->
                  <!-- {{relatedTuinenNotThis}} -->
                  <nuxt-link v-for="item in relatedTuinenNotThis" :to="'/tuinen/'+item.slug" class="mb-5 button is-light has-text-weight-semibold is-rounded mr-5" v-html="item.title.rendered"></nuxt-link>

                  <!-- <nuxt-link :to="'/tuinen/#'+tuinsoort.slug" class="mb-5 button is-light has-text-weight-semibold is-rounded mr-5" v-html="tuinsoort.title.rendered"></nuxt-link> -->
                </p>
                <!-- <p class="" v-if="Array.isArray(content.tuin_footer.column_ii.tuin_thema)">
                  <span class="button is-light nostyle is-paddingless-left">Themas:</span>
                  <nuxt-link v-for="item in content.tuin_footer.column_ii.tuin_thema" :to="'/themas/#'+item.post_name" class="mb-5 button is-light has-text-weight-semibold is-rounded mr-5" v-html="item.post_title"></nuxt-link>
                </p>
v-if="content.length>0"
                <p class="" v-if="">
                  <span class="button is-light nostyle is-paddingless-left">Andere tuinen:</span>
                  <nuxt-link v-for="item in relatedTuinenNotThis" :to="'/tuinen/'+item.post_name" class="mb-5 button is-light has-text-weight-semibold is-rounded mr-5" v-html="item.post_title"></nuxt-link>
                </p>
                 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>
import scrollMonitor from 'scrollmonitor'
import axios from 'axios'

import {
  mapGetters
} from 'vuex'

import _ from 'lodash'

export default {
  props: ['content', 'id'],
  components: {},
  data: function() {
    return {
      slideIn: false,
      tuinsoort:'',
      related:[],
      inViewClass: 'fadeInTuinfooter',
    }
  },



  mounted() {
    var myElement = this.$el.querySelector("." + this.inViewClass);
    var elementWatcher = scrollMonitor.create(myElement, this.offset);
    var vm = this

    elementWatcher.enterViewport(function() {
      vm.slideIn = true
    });

    elementWatcher.exitViewport(function() {
      // vm.slideIn = false
    });

    this.getTuinSoort(this.content.tuin_soort)
    this.getRelatedTuinen(this.content.tuin_soort)
  },
  methods:{
    getRelatedTuinen: function(input){
      console.log(input)

      axios.get(this.$store.state.apiRoot + '/wp/v2/tuin?tuinsoort='+input)
      .then(response => {
        // JSON responses are automatically parsed.
        this.related = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    },
    getTuinSoort: function(input){
      console.log(input)

      axios.get(this.$store.state.apiRoot + '/wp/v2/tuinsoort/'+input)
      .then(response => {
        // JSON responses are automatically parsed.
        this.tuinsoort = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    },

},
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
    relatedTuinenNotThis: function() {
      // return this.content.tuin_footer.column_ii.tuin_type.acf.related_tuinen;
      var tuinen = this.related
      _.remove(tuinen, {
        id: this.id
      });
      return tuinen;

    }
  },

}
</script>
<style scoped lang="scss">
.extra-line-height {
    line-height: 3;
}

.is-paddingless-left {
    padding-left: 0;
}
.nostyle {
    outline: none;
    border: 0;
    cursor: default;
    background: transparent !important;
    background-color: transparent !important;
}
.tuinfooter {
    position: relative;
}
</style>
