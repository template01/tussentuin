<template>
  <div id="footer" class="" :class="$route.path != '/' ? 'has-text-info blue-background':'has-text-dark'">


    <div v-if="$route.path != '/'" id="waves":style="{ 'background-image': `url('wavesblue.svg')`}">
    </div>
    <div v-else id="waves":style="{ 'background-image': `url('waves.svg')`}">
    </div>
  <div class="container pt-30 pb-80">
    <div class="columns pt-80">
      <div class="column is-3 pr-40 pl-40" >
        <img v-if="$route.path != '/'"  class="logo" :src="footerContent.acf.logo_alt"/>
        <img v-else class="logo" :src="footerContent.acf.logo"/>
      </div>
      <div class="column pr-40 pl-40" >
        <div class="is-size-4 has-text-weight-semibold pt-20 is-size-5 " >
          <span v-for="link in footerContent.acf.linkto">
            <nuxt-link  v-if="link.inten_of_extern" class="pr-80"  :to="link.intern_link" v-html="link.naam"></nuxt-link>
            <a v-else class="pr-80" target="_blank" :href="link.extern_link" v-html="link.naam"></a>
          </span>
        </div>
      </div>
      <div class="column is-3  pr-40 pl-40" >
        <div class="has-text-weight-semibold pt-20 is-size-5" v-html="footerContent.acf.contact">

        </div>
      </div>
      <!-- <div class=" column is-8 is-offset-2 ">
         <p class="is-size-4 has-text-weight-semibold pt-10 is-size-4 has-text-info">
           Tussentijd is een samenwerking tussen Tanja Lina, Joost van Dijk, Wolbert van Dijk, Kim Zwart en Meike Sloover
         </p>
      </div> -->
    </div>


  </div>
  </div>
</template>
<script>

import {
  mapGetters
} from 'vuex'


export default {
  props:[],
  data: function() {
    return {
      genericData: 'generic component text'
    }
  },
  methods:{
  },
  computed: {
    ...mapGetters({
     footerContent: "GET_FOOTER",
    }),
  },

}
</script>
<style scoped lang="scss">

a{
  color: inherit;
}
.logo{
  width: 100%;
  max-width: 240px;
}
#waves{
  width: 100%;
  height: 60px;
  background-size: 100% 100%;
  margin-top: -40px;
  margin-bottom: -60px;
}
#footer{
  z-index: 999;
  position: absolute;
  width: 100%;
}

</style>
