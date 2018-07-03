<template>
<div>
  <template v-for="item in content">
    <div>
      <div class="container pb-60">
        <div class="columns is-mobile ">
          <div :class="$mq === 'lg' || $mq === 'xl'? ' column is-8 is-offset-2 ':'column is-10 is-offset-1'" :id="item.slug">
            <intropart :secondDelay="700" :hascentertext="true"  :icon="item.acf.icon">
            </intropart>
            <intropart :hascentertext="true" :islarge="true" :titletext="item.title.rendered">
            </intropart>
            <intropart class="mt-20" :secondDelay="400" :islarge="true" :blurbtext="item.acf.desc_intro">
            </intropart>
            <intropart :secondDelay="400" :desc="item.acf.desc">
            </intropart>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="layout.acf_fc_layout === 'background_image'">
      <sectionphoto :photoUrl="layout.content_background_image.url"></sectionphoto>

    </div> -->
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
