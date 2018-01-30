<template>
<div class="tuin-card m-10">
  <div class="p-20">
    <p class="is-size-4 has-text-weight-semibold has-text-dark has-text-centered">
      Portiek
    </p>
    <img class="pt-30 pb-30" :src="'tuin1.svg'" />
    <p class="is-size-5 has-text-weight-semibold has-text-dark">
      Tussentuin werkt aan het verbeteren van de leefomgeving.
    </p>
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
      appinitated: "GET_APP_INITIATED",
    }),
  },

}
</script>
<style scoped lang="scss">
.tuin-card {
    background: white;
    border-radius: 10px;
    img {
        margin: 0 auto;
        display: block;
        max-width: 80%;
        width: 100%;

    }
}
</style>
