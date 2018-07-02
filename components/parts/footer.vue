<template>
<div id="footer" class="" :class="normalpage  ? 'has-text-info blue-background':'has-text-dark'">
  <div v-if="$mq === 'lg' || $mq === 'xl' || $mq === 'xl'">
    <div v-if="normalpage" class="wave" :style="{ 'background-image': `url(`+'/waveblue.svg'+`)`}"></div>
    <div v-else class="wave" :style="{ 'background-image': `url(`+'/wavewhite.svg'+`)`}"></div>
    <div class="innerfooter container pt-30 pb-80 pr-20 pl-20">
      <div class="columns pt-80">
        <div class="column is-3 pr-40 pl-40">
          <img v-if="normalpage" class="logo" :src="footerContent.acf.logo_alt" />
          <img v-else class="logo" :src="footerContent.acf.logo" />
        </div>
        <div class="column pr-40 pl-40">
          <div class="is-size-4 has-text-weight-semibold pt-20 is-size-5 ">
            <span v-for="link in footerContent.acf.linkto">
              <nuxt-link  v-if="link.inten_of_extern" class="cool-link pr-30"  :class="normalpage  ? 'cool-link-blue':'cool-link-dark'" :to="'/'+link.intern_link" v-html="link.naam"></nuxt-link>
              <a v-else class="pr-30" target="_blank" :href="link.extern_link" v-html="link.naam"></a>
            </span>
          </div>
        </div>
        <div class="column is-3  pr-40 pl-40">
          <div class="has-text-weight-semibold pt-20 is-size-5" v-html="footerContent.acf.contact">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div v-if="normalpage" class="wave" :style="{ 'background-image': `url(`+'/waveblue.svg'+`)`}"></div>
    <div v-else class="wave" :style="{ 'background-image': `url(`+'/wavewhite.svg'+`)`}"></div>
    <div class="innerfooter container pb-20 pr-20 pl-20">
      <div class="columns is-mobile pt-80 pb-40">
        <div class="column is-paddingless is-6">
          <img v-if="normalpage" class="logomobile" :src="footerContent.acf.logo_alt" />
          <img v-else class="logomobile" :src="footerContent.acf.logo" />
        </div>
        <div class="column is-paddingless is-6 ">
          <div class="has-text-weight-semibold is-size-5" v-html="footerContent.acf.contact">
          </div>
        </div>
      </div>
      <div class="">
        <div class="is-size-4 has-text-weight-semibold is-size-5 ">
          <span v-for="link in footerContent.acf.linkto">
            <nuxt-link  v-if="link.inten_of_extern" class="cool-link pr-20"  :class="normalpage  ? 'cool-link-blue':'cool-link-dark'" :to="'/'+link.intern_link" v-html="link.naam"></nuxt-link>
            <a v-else class="pr-20" target="_blank" :href="link.extern_link" v-html="link.naam"></a>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


export default {
  props: [],
  data: function() {
    return {
      genericData: 'generic component text'
    }
  },
  methods: {},
  computed: {
    ...mapGetters({
      footerContent: "GET_FOOTER",
    }),
    normalpage: function(){

      var notnormal = ["/contact", "/"];

      if(notnormal.indexOf(this.$route.path)=== -1){
        return true
      }else{
        return false
      }
    }
  },

}
</script>
<style scoped lang="scss">
a {
    color: inherit;
}
.logo {
    width: 100%;
    max-width: 240px;
}
.logomobile{
  width: 100%;
  padding-right: 20px;
}

.wave {
    height: 20px;
    margin-top: -20px;
    width: 100%;
}


#footer {
    z-index: 999;
    position: absolute;
    width: 100%;
    // overflow-x: hidden;
}

.innerfooter{
  overflow-x: hidden;
}
</style>
