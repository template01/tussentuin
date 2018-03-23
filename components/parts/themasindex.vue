<template>
<div>

  <div :class="[slideIn ? 'slideIn':'', inViewClass]" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
    <div class="thema-wrapper" v-if="slideIn">
      <div v-for="thema in themas" class="thema-inner pb-40 pr-20 pl-20">
        <nuxt-link :to="'themas/#'+thema.slug">
        <div class="logo mb-10":style="{ 'background-image': 'url(' + thema.acf.icon +')' }">
        </div>
        <p class="pb-20 has-text-centered has-text-info is-size-4 has-text-weight-semibold" v-html="thema.title.rendered">

        </p>
        <p class="has-text-centered has-text-info is-size-5" v-html="thema.acf.blurb">
        </p>
      </nuxt-link>
      </div>



    </div>
  </div>
</div>
</template>
<script>
import scrollMonitor from 'scrollmonitor'
import card from '~/components/parts/card.vue'
import _ from 'lodash'

// import {
//   mapGetters
// } from 'vuex'



export default {
  props: ['islarge', 'isblue', 'isbrown','themas'],
  components: {
    card
  },
  data: function() {
    return {
      slideIn: false,
      inViewClass: 'themas'
    }
  },
  methods: {},
  mounted() {
    var myElement = this.$el.querySelector("."+this.inViewClass);
    var elementWatcher = scrollMonitor.create(myElement);
    var vm = this

    elementWatcher.enterViewport(function() {
        vm.slideIn = true
    });

    elementWatcher.exitViewport(function() {
        // vm.slideIn = false
    });
  },
  // computed: {
  //   chunkThemasDesktop: function(){
  //     return _.chunk(this.themas, 4);
  //   }
  // },

  // computed: {
  //   ...mapGetters({
  //    appinitated: "GET_APP_INITIATED",
  //   }),
  // },

}
</script>
<style scoped lang="scss">

.thema-wrapper{
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
          animation-delay: $i*0.25+s;
      }
  }
}
.thema-inner{
  width: 33.333%;
  float: left;
  display: block;

  .logo{
    width: 100%;
    height: 90px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
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
