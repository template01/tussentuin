<template>
<div class="kenniscardsingle m-10" :class="{slideInHorizontal: slideIn, slideOutHorizontal: slideOut}" :style="{'min-height':minHeight+'px'}">
  <div class="kenniscardsingleinner columns">
    <div class="column">
      <div class="p-80 ">

        <p class="is-size-4 has-text-weight-semibold has-text-dark mb-20" v-html="cardsData[selected].title">

        </p>
        <p class="is-size-5 has-text-dark" v-html="cardsData[selected].blurb">

        </p>
        <p class="is-size-5 has-text-dark mt-40">
          <span class="bullet mr-10" :class="{active: selected === index}" @click="transitionCard(index)" v-for="(item, index) in cardsData"></span>
        </p>
      </div>

    </div>
    <div class="column">
      <backgroundphoto :borderradius="'0px 10px 10px 0px'" :isHalf="'true'" :isRight="'true'" :patternfull="cardsData[selected].image"></backgroundphoto>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
import backgroundphoto from '~/components/elements/backgroundphoto.vue'


export default {
  components: {
    backgroundphoto
  },
  props: [],
  data: function() {
    return {
      selected: 0,
      slideOut: false,
      slideIn: true,
      minHeight: 300,
      minHeightInit: 300,
      cardsData: [{
          "title": "Tour-De-Tuin",
          "blurb": "Fusce et facilisis dolor. Suspendisse cursus urna sit amet orci Suspendisse cursus urna sit amet orci iaculis vehicula aenean molestFusce et facilisis dolor. Suspendisse cursus u",
          "image": "fotos/Garten-Landhof-1-tall.jpg",
        },
        {
          "title": "Tuineren 101",
          "blurb": "Suspendisse cursus urna sit amet orci Suspendisse cursus urna sit amet orci iaculis vehicula aenean molestFusce et facilisis dolor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. ",
          "image": "fotos/Tuin-de-Bajonet-3.jpg",
        },
        {
          "title": "Ontwerp en Plannen",
          "blurb": "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse cursus urna sit amet orci Suspendisse cursus urna sit amet orci iaculis vehicula aenean molestFusce et facilisis dolor. ",
          "image": "fotos/Buurtpluktuin-20-4-2016-7.jpg",
        }
      ]
    }
  },
  methods: {
    transitionCard: function(input) {
      this.slideOut = true
      this.slideIn = false
      var vm = this

      setTimeout(function() {
        vm.selected = input
        // this.minHeight = 300
        vm.$nextTick()
          .then(function() {
            // DOM updated
            vm.slideOut = false
            vm.slideIn = true
            var newHeight = vm.$el.querySelector('.kenniscardsingleinner').offsetHeight
            if (vm.minHeightInit > newHeight) {
              vm.minHeight = vm.minHeightInit
            } else {
              vm.minHeight = newHeight
            }
          })
      }, 500)
    }
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },
  // watch:{
  //   selected:function(){
  //     this.transitionCard()
  //
  //   }
  // }

}
</script>
<style scoped lang="scss">
.slideOutHorizontal {
    transform: translateX(-20px) !important;
    opacity: 0.0 !important;
}
.slideInHorizontal {
    transform: translateX(0px) !important;
    opacity: 1 !important;
}
.kenniscardsingle {
    transform: translateX(20px);
    opacity: 0.0;
    transition: transform 500ms, opacity 500ms, min-height 500ms;
    overflow: hidden;
    min-height: 300px;
    // max-height: 1000px;
    position: relative;
    background: white;
    border-radius: 10px;
    img {
        margin: 0 auto;
        display: block;
        max-width: 80%;
        width: 100%;

    }
    .bullet {
        border: 2px solid $brown;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        overflow: hidden;
        display: inline-block;
        cursor: pointer;
        &.active {
            background: $brown;
        }

    }
}
</style>
