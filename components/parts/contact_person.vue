<template>
<div class="pt-10 ">
  <div class="profiel" :style="{'background-image': `url(`+person.profiel_foto.sizes.medium+`)` }">

  </div>
  <p class="has-text-centered mt-10" v-html="person.naam">
  </p>
  <p class="has-text-centered">
    <a class=" has-text-info" :href="'mailto:'+person.email+'?Subject=Hoi%20'+person.naam" target="_top" v-html="person.email"></a>
  </p>
  <p class="has-text-centered">
    <a class="has-text-info" :href="'tel:'+person.tele" v-html="person.tele"></a>
  </p>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


export default {
  props: ['person'],
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
.profiel {
    margin: 0 auto;
    height: 220px;
    width: 220px;
    background-size: cover;
    background-position: center center;
    border-radius: 300px;
}
</style>
