<template>
<div class="tuininfo  has-text-dark">
    <div>
      <div class="   ">
        <div class=" is-mobile">
          <div class="tuininfocontent  is-6 is-offset-3 ">
            <p>
              <span><b class="has-text-weight-semibold">Status:</b> start 2017 - tot heden </span>
              <span><b class="has-text-weight-semibold">Bouwkosten:</b> ca. 00.000 euro </span>
              <span><b class="has-text-weight-semibold">Onze thema(s):</b> Participatie, Waterberging, Vergroening</span>
              <span><b class="has-text-weight-semibold">Investeerders(s):</b> Gemeente Den Haag, Gemeente Rotterdam </span>
              <span><b class="has-text-weight-semibold">Financiering onderhoud/beheer:</b> Gemeente Den Haag </span>
              <span><b class="has-text-weight-semibold">Betrokken partij(en):</b> Stichting Tussentuin </span>
              <span><b class="has-text-weight-semibold">Collectieve Oppervlakte (m2):</b> 0000 </span>
              <span><b class="has-text-weight-semibold">Private Oppervlakte (m2):</b> 0000 </span>
              <span><b class="has-text-weight-semibold">Functie(s):</b> Openbaar toegangelijk, Rondgang, Siertuin, Waterberging, Zitplekken </span>
              <!-- Gerealiseerd: 2018 / blah: 2018 / Gerealiseerd: 2018 / Jaar: 2018 / Met wie: 2018 / Gerealiseerd: 2018 -->
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
.tuininfo{
  position: absolute;
  left:calc(50% - (784px/2) - (300px + 20px));
  // top: 80px;
  margin-top: 80px;
  height: 300px;
  width: 300px;
  color: inherit;
}
.tuininfocontent{
  span{
    display: block;
  }
}

</style>
