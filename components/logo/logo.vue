<template>
  <div class="header-index pt-20 ml-20">
    <img src="Logo.svg"/>
  </div>
</template>


<script>


import {
  mapGetters
} from 'vuex'


export default {

  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },
}
</script>
<style lang="scss" scoped>
.header-index{
  img{
    width: 250px;
  }
}
</style>
