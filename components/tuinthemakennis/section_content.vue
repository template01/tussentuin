<template>
<div>
  <template v-for="layout in content">
    <div v-if="layout.acf_fc_layout === 'thema_soort' || layout.acf_fc_layout === 'kennis_soort'">
      <div class="container pt-30 pb-80">
        <div class="columns is-mobile pt-80">
          <div :class="$mq === 'lg' || $mq === 'xl'? ' column is-8 is-offset-2 ':'column is-10 is-offset-1'" :id="layout.content.post_name">
            <intropart :secondDelay="450" :hascentertext="true"  :icon="layout.content.acf.icon">
            </intropart>
            <intropart :hascentertext="true" :islarge="true" :titletext="layout.content.post_title">
            </intropart>
            <intropart class="mt-20" :secondDelay="400" :islarge="true" :blurbtext="layout.content.acf.desc_intro">
            </intropart>
            <intropart :secondDelay="400" :desc="layout.content.acf.desc">
            </intropart>
          </div>
        </div>
      </div>
    </div>
    <div v-if="layout.acf_fc_layout === 'background_image'">
      <sectionphoto v-if="$mq==='xl'" :photoUrl="layout.content_background_image.sizes.xxlarge"></sectionphoto>
      <sectionphoto v-if="$mq==='lg'" :photoUrl="layout.content_background_image.sizes.xlarge"></sectionphoto>
      <sectionphoto v-if="$mq==='sm' || $mq==='md'" :fixed="false" :photoUrl="layout.content_background_image.sizes.large"></sectionphoto>
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
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
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
