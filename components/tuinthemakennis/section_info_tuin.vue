<template>
<div>
    <div>
      <div class="container pt-80 has-text-weight-semibold  ">
        <div class="columns is-mobile">
          <div class=" column is-6 is-offset-3 ">
            <p>
              Gerealiseerd: 2018 / blah: 2018 / Gerealiseerd: 2018 / Jaar: 2018 / Met wie: 2018 / Gerealiseerd: 2018
            </p>
            <!-- {{content}} -->
          </div>
          <!-- <iframe style="margin:0 auto" :src="vimeoCode(layout.url)" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->
        </div>
      </div>
    </div>


</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'

// import intropart from '~/components/parts/intropart.vue'
// import sectionphoto from '~/components/elements/sectionphoto.vue'
// import backgroundpattern from '~/components/elements/backgroundpattern.vue'
// import tuingallerycaroussel from '~/components/parts/tuin/tuingallerycaroussel.vue'
// import backgroundphoto from '~/components/elements/backgroundphoto.vue'



export default {
  props: ['content','id'],
  components: {
    // intropart,
    // sectionphoto,
    // backgroundpattern,
    // tuingallerycaroussel,
    // backgroundphoto
  },
  data: function() {
    return {
      genericData: 'generic component text'
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },

}
</script>
<style  lang="scss">

</style>

<style scoped lang="scss">

</style>
