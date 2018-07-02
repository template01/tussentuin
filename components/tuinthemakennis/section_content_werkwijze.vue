<template>
<div>
  <template v-for="item in content">

    <div>
      <div class="container pb-60">
        <div class="columns is-mobile ">
          <div :class="$mq === 'lg' || $mq === 'xl'? ' column is-8 is-offset-2 ':'column is-10 is-offset-1'">
            <intropart :secondDelay="700" :hascentertext="true"  :icon="item.groep.icon">
            </intropart>
            <intropart :hascentertext="true" :islarge="true" :titletext="item.groep.titel">
            </intropart>
            <!-- <intropart class="mt-20" :secondDelay="400" :islarge="true" :blurbtext="item.groep.omschrijving">
            </intropart> -->
            <intropart :secondDelay="400" :desc="item.groep.omschrijving">
            </intropart>
          </div>
        </div>
      </div>
    </div>
  </template>

</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'

import intropart from '~/components/parts/intropart.vue'
import sectionphoto from '~/components/elements/sectionphoto.vue'


export default {
  props: ['content'],
  components: {
    intropart,
    sectionphoto,
  },
  data: function() {
    return {
      genericData: 'generic component text'
    }
  },
  methods: {},
  computed: {

  },

}
</script>
<style scoped lang="scss">
.peach-background {
    background: $peach;
}
.indexsection-outer {
    overflow-y: hidden;
    position: relative;

    .columns {
        margin-bottom: 0;
        margin-top: 0;
    }
}
</style>
