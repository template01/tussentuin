<template>
  <div class="aligner toNextSection" :class="relative ? 'relative pb-80':'p-80'">
    <a @click="goToId(idprop)" class="has-text-weight-bold aligner-item button down is-centered is-info is-rounded">
      <div class="" v-html="text">
      </div>
    </a>
  </div>
</template>
<script>


if (process.browser) {
  var offset = require('document-offset')

}
import {
  mapGetters
} from 'vuex'


export default {
  props:['idprop','text','relative'],
  data: function() {
    return {
      genericData: 'generic component text'
    }
  },
  methods:{
    goToId: function(){
      var target = document.getElementById(this.idprop)
      console.log(offset(target))
      // document.querySelector('#'+this.idprop).scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({ top: offset(target).top, left: 0, behavior: 'smooth' });
    }
  },
  computed: {
    ...mapGetters({
     appinitated: "GET_APP_INITIATED",
    }),
  },

}
</script>
<style scoped lang="scss">
.toNextSection{
  position: absolute;
  bottom: 0;
  width: 100%;
  .innerbutton{
    margin: 0 auto;
  }
  &.relative{
    position: relative;
  }
}


</style>
