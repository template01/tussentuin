<template>
<div class="indexsection-outer":class="[fullheight ? 'window-full-height':'',halfheight ? 'window-half-height':'']">
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
  props:['fullheight','halfheight'],
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
<style  lang="scss">
.indexsection-outer {

    .container-display-grid{
      display: grid;
    }
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
