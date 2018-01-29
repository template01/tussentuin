<template>
  <div  class="">

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

</style>
