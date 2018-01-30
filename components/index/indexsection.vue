<template>
<div class="indexsection-outer window-full-height">
   <!-- :style="{ 'background-image': 'url(' + 'patternLeafLighter' + '.svg)' }" -->
  <section class="section is-paddingless">
    <slot>

    </slot>
    </section>

</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


export default {
  components: {
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
    .columns:last-child {
        margin-bottom: 0;
    }
    .section{
      overflow-y: hidden;
    }
}
</style>
