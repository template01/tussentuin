<template>
<div>
  <div :class="[slideIn ? 'slideIn':'', inViewClass]" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
    <div class="card-wrapper" v-if="slideIn">
        <div class="card-wrapper-inner aligner" v-touch:swipe.left="swipeLeft"  v-touch:swipe.right="swipeRight" :class="{slideInHorizontal: slideInHorizontal, slideOutHorizontal: slideOutHorizontal}">
          <card v-for="(item,key,index) in chunkTuinsoorten[selected]" :key="key" class="card-single aligner-item--top" :slug="item.slug" :title="item.title.rendered" :blurb="item.acf.blurb" :image="item.acf.icon"></card>
        </div>
    </div>
    <div class="aligner">
      <p class="is-size-5 has-text-dark mt-40">
        <span class="bullet mr-10"  :class="[$mq === 'lg' || $mq === 'xl' ? 'mr-10':'mr-5',{active: selected === index}]" @click="transitionCard(index)" v-for="(item, index) in chunkTuinsoorten"></span>
      </p>
    </div>
  </div>
</div>
</template>
<script>
import scrollMonitor from 'scrollmonitor'
import card from '~/components/parts/card.vue'
import _ from 'lodash'


export default {
  props: ['islarge', 'isblue', 'isbrown', 'tuinsoorten'],
  components: {
    card
  },
  data: function() {
    return {
      slideIn: false,
      inViewClass: 'tuincards',
      selected: 0,
      slideInHorizontal: true,
      slideOutHorizontal: false,

    }
  },
  methods: {
    swipeLeft:function(){
      if(this.selected===this.chunkTuinsoorten.length-1){

        this.transitionCard(0)

      }else{

        this.transitionCard(this.selected+1)
      }
    },

    swipeRight:function(){
      if(this.selected===0){
        this.transitionCard(this.chunkTuinsoorten.length-1)

      }else{

        this.transitionCard(this.selected-1)
      }
    },

    transitionCard: function(input) {
      this.slideOutHorizontal = true
      this.slideInHorizontal = false
      var vm = this

      setTimeout(function() {
        vm.selected = input
      }, 400)
      setTimeout(function() {
        vm.slideOutHorizontal = false
        vm.slideInHorizontal = true
      }, 500)
    }
  },
  mounted() {
    var myElement = this.$el.querySelector("." + this.inViewClass);
    var elementWatcher = scrollMonitor.create(myElement);
    var vm = this

    elementWatcher.enterViewport(function() {
      vm.slideIn = true
    });

    elementWatcher.exitViewport(function() {
      // vm.slideIn = false
    });
  },
  computed: {
    chunkTuinsoorten: function() {
      if(this.$mq === 'lg' || this.$mq === 'xl'){
        return _.chunk(this.tuinsoorten, 4);
      }else{
        return _.chunk(this.tuinsoorten, 1);
      }
    }
  },

}
</script>
<style scoped lang="scss">
.bullet {
    border: 2px solid $darkblue;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    overflow: hidden;
    display: inline-block;
    cursor: pointer;
    &.active {
        background: $darkblue;
    }

}
.slideOutHorizontal {
    transform: translateX(-20px) !important;
    opacity: 0.0 !important;
}
.slideInHorizontal {
    transform: translateX(0px) !important;
    opacity: 1 !important;
}

.card-wrapper {
    .card-single {
        width: 25%;
    }

    @media (max-width: 1024px) {
      .card-single {
          width: 75%;
      }
    }
    .card-wrapper-inner {
        transform: translateX(20px);
        opacity: 0.0;
        transition: transform 500ms, opacity 500ms;
        & > * {
            // transition: opacity 0.5
            opacity: 0;
            animation-delay: 0.5;
            animation-name: titleAnimation;
            animation-timing-function: ease;
            animation-duration: 0.8s;
            animation-fill-mode: forwards;
        }
        @for $i from 1 through 30 {
            & > *:nth-child(#{$i}) {
                animation-delay: $i*0.15+s;
            }
        }
    }
}

@keyframes titleAnimation {
    0% {
        transform: translateY(50px);
        opacity: 0;

    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
