<template>
<div>

  <div :class="[slideIn ? 'slideIn':'', inViewClass]" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
    <div class="card-wrapper" v-if="slideIn">
      <div class="card-wrapper-inner aligner" :class="{slideInHorizontal: slideInHorizontal, slideOutHorizontal: slideOutHorizontal}">
        <card v-for="(item,key,index) in cardsData[selected]"  :key="key" class="card-single aligner-item--top" :title="item.title" :blurb="item.blurb" :image="item.image"></card>
      </div>
    </div>
    <div class="aligner">

      <p class="is-size-5 has-text-dark mt-40">
        <span class="bullet mr-10" :class="{active: selected === index}" @click="transitionCard(index)" v-for="(item, index) in cardsData"></span>
      </p>
    </div>
  </div>
</div>
</template>
<script>
import scrollMonitor from 'scrollmonitor'
import card from '~/components/parts/card.vue'

// import {
//   mapGetters
// } from 'vuex'



export default {
  props: ['islarge', 'isblue', 'isbrown'],
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
      cardsData: [
        [

          {
            "title": "First",
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
        ],
        [{
            "title": "Ontwerp en Plannen",
            "blurb": "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse cursus urna sit amet orci Suspendisse cursus urna sit amet orci iaculis vehicula aenean molestFusce et facilisis dolor. ",
            "image": "fotos/Buurtpluktuin-20-4-2016-7.jpg",
          },
          {
            "title": "Tour-De-Tuin",
            "blurb": "Fusce et facilisis dolor. Suspendisse cursus urna sit amet orci Suspendisse cursus urna sit amet orci iaculis vehicula aenean molestFusce et facilisis dolor. Suspendisse cursus u",
            "image": "fotos/Garten-Landhof-1-tall.jpg",
          }

        ]
      ]
    }
  },
  methods: {
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
      vm.slideIn = false
    });
  }
  // computed: {
  //   ...mapGetters({
  //    appinitated: "GET_APP_INITIATED",
  //   }),
  // },

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
