<template>
  <div>
    <backgroundphoto :pattern="'/fotos/Tuin-de-bajonet-4.jpg'"></backgroundphoto>
    <div class="container container-display-grid">
      <!-- <logo></logo> -->
      <div class="columns is-mobile pt-80">
        <div class="column is-4 is-offset-1">
          <intropart :islarge="true" :isgreen="true" :headertext="'<p>Bij voorbeld</p><p>deze mooie</p><p>ding...</p>'" :blurbtext="''">
          </intropart>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mapGetters
} from 'vuex'

import logo from '~/components/logo/logo.vue'
import intropart from '~/components/parts/intropart.vue'
import growelement from '~/components/elements/growelement.vue'
import backgroundphoto from '~/components/elements/backgroundphoto.vue'


export default {
  props: ['boomfile'],
  components: {
    logo,
    intropart,
    growelement,
    backgroundphoto
  },
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
.indexsection-outer {
    overflow-y: hidden;
    position: relative;
    .columns:last-child{
      margin-bottom: 0;
    }
}
</style>
