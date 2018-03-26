<template>
<div class="p-10">
  <nuxt-link :to="'tuinen/#'+slug">
    <div class="elevate tuin-card">
      <div class="p-20">
        <p class="is-size-4 has-text-weight-semibold has-text-dark has-text-centered" v-html="title">
        </p>
        <img class="pt-30 pb-30" :src="image" />
        <p class="is-size-5 has-text-weight-semibold has-text-dark" v-html="blurb">
        </p>
      </div>
    </div>
  </nuxt-link>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


export default {
  props: ['title', 'blurb', 'image','slug'],
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
