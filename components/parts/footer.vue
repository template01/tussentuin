<template>
  <div id="footer" class="">
    <div id="waves":style="{ 'background-image': `url('waves.svg')`}">

    </div>
  <div class="container pt-30 pb-80">
    <div class="columns is-mobile pt-80">
      <div class=" column is-8 is-offset-2 ">
         <p class="is-size-4 has-text-weight-semibold pt-10 is-size-4 has-text-info">
           Tussentijd is een samenwerking tussen Tanja Lina, Joost van Dijk, Wolbert van Dijk, Kim Zwart en Meike Sloover
         </p>
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
     appinitated: "GET_APP_INITIATED",
    }),
  },

}
</script>
<style scoped lang="scss">
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
