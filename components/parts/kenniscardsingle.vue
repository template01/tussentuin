<template>
<div  class="kenniscardsingle m-10"  v-touch:swipe.left="swipeLeft"  v-touch:swipe.right="swipeRight" :class="{slideInHorizontal: slideIn, slideOutHorizontal: slideOut}" :style="{'min-height':minHeight+'px'}">
  <div v-if="$mq==='lg' || $mq==='xl'" class="kenniscardsingleinner columns">
    <div class="column">
      <div class="p-80 ">

        <p class="is-size-4 has-text-weight-semibold has-text-dark mb-20" v-html="kennissoorten[selected].title.rendered">

        </p>
        <p class="is-size-5 has-text-dark" v-html="kennissoorten[selected].acf.blurb">

        </p>
        <p class="is-size-5 has-text-dark mt-40">
          <span class="bullet prev mr-5"  :class="" @click="swipeRight"><span class="chevron left"></span></span>
          <span class="bullet mr-10" :class="{active: selected === index}" @click="transitionCard(index)" v-for="(item, index) in kennissoorten"></span>
          <span class="bullet next mr-10"  :class="" @click="swipeLeft"><span class="chevron right"></span></span>

        </p>
      </div>

    </div>
    <div class="column">
      <backgroundphoto :borderradius="'0px 10px 10px 0px'" :isHalf="'true'" :isRight="'true'" :patternfull="kennissoorten[selected].acf.background_image.sizes.large"></backgroundphoto>
    </div>
  </div>
  <div v-else>
    <div class="p-20">

      <p class="is-size-4 has-text-weight-semibold has-text-dark mb-20" v-html="kennissoorten[selected].title.rendered">

      </p>
      <p class="is-size-5 has-text-dark" v-html="kennissoorten[selected].acf.blurb">

      </p>
      <div class="mt-40">
        <img class="card-img-mobile" :src="kennissoorten[selected].acf.background_image.sizes.large" />
      </div>
      <p class="is-size-5 has-text-dark mt-10">
        <span class="bullet prev mr-5"  :class="" @click="swipeRight"><span class="chevron left"></span></span>
        <span class="bullet mr-5" :class="{active: selected === index}" @click="transitionCard(index)" v-for="(item, index) in kennissoorten"></span>
        <span class="bullet next mr-10"  :class="" @click="swipeLeft"><span class="chevron right"></span></span>

      </p>

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
  props: ['kennissoorten'],
  data: function() {
    return {
      selected: 0,
      slideOut: false,
      slideIn: true,
      minHeight: 300,
      minHeightInit: 300,
    }
  },
  methods: {
    swipeLeft:function(){
      if(this.selected===this.kennissoorten.length-1){

        this.transitionCard(0)

      }else{

        this.transitionCard(this.selected+1)
      }
    },

    swipeRight:function(){
      if(this.selected===0){

        this.transitionCard(this.kennissoorten.length-1)

      }else{

        this.transitionCard(this.selected-1)
      }
    },

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

    .card-img-mobile {
        margin: 0 auto;
        display: block;
        max-width: 100% !important;
        width: 100% !important;
        border-radius: 5px;
    }
    .bullet {
        color: $brown !important;
        border: 3px solid $brown;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        overflow: hidden;
        display: inline-block;
        cursor: pointer;
        &.active {
            background: $brown;
        }

        &.next{
          border: 0px solid $brown !important;
        }
        &.prev{
          border: 0px solid $brown !important;
        }

        .chevron::before {
          color: $brown;
          border-style: solid;
          border-color: inherit;
          border-width: 3px 3px 0 0;
          content: '';
          display: inline-block;
          height: 13px;
          position: relative;
          top: 3px;
          transform: rotate(-45deg);
          vertical-align: top;
          width: 13px;
        }

        .chevron.right:before {
          left: 0;
          transform: rotate(45deg);
        }

        .chevron.bottom:before {
          top: 0;
          transform: rotate(135deg);
        }

        .chevron.left:before {
          left: 0.25em;
          transform: rotate(-135deg);
        }

    }
}
</style>
