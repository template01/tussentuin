<template>
<div>

  <div class="tuincard mb-80" :class="[slideIn ? 'slideIn':'', inViewClass]" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
    <div class="columns ">
      <div class="column is-10 is-offset-1">
        <template v-if="reverse">
          <div class="columns aligner">
            <div class="column mr-20 ml-20">
              <div class="">
                <img class="icontop pb-30" :src="tuinsortdata.acf.icon" />
                <p class="pb-30 is-size-4 has-text-weight-semibold has-text-centered" v-html="tuinsortdata.title.rendered">
                </p>
                <div class="is-size-5" v-html="tuinsortdata.acf.desc">
                </div>
              </div>
            </div>
            <div class="column mr-20 ml-20" v-if="tuinsortdata.acf.related_tuinen.length>0">
              <tuincardcaroussel :content="tuinsortdata.acf.related_tuinen"></tuincardcaroussel>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="columns aligner">
            <div class="column mr-20 ml-20" v-if="tuinsortdata.acf.related_tuinen.length>0">
              <tuincardcaroussel :menuleft="true" :content="tuinsortdata.acf.related_tuinen"></tuincardcaroussel>
            </div>
            <div class="column mr-20 ml-20">
              <div class="">
                <img class="icontop pb-30" :src="tuinsortdata.acf.icon" />
                <p class="pb-30 is-size-4 has-text-weight-semibold has-text-centered" v-html="tuinsortdata.title.rendered">
                </p>
                <div class="is-size-5" v-html="tuinsortdata.acf.desc">
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- <div class="card-wrapper" v-if="slideIn">
          <div class="card-wrapper-inner aligner" :class="{slideInHorizontal: slideInHorizontal, slideOutHorizontal: slideOutHorizontal}">
            <card v-for="(item,key,index) in chunkTuinsoortenDesktop[selected]"  :key="key" class="card-single aligner-item--top" :title="item.title.rendered" :blurb="item.acf.blurb" :image="item.acf.icon"></card>
          </div>
        </div>
        <div class="aligner">
          <p class="is-size-5 has-text-dark mt-40">
            <span class="bullet mr-10" :class="{active: selected === index}" @click="transitionCard(index)" v-for="(item, index) in chunkTuinsoortenDesktop"></span>
          </p>
        </div> -->
  </div>

</div>
</template>
<script>
import tuincardcaroussel from '~/components/parts/tuinen/tuincardcaroussel.vue'

import scrollMonitor from 'scrollmonitor'
import _ from 'lodash'
// import {
//   mapGetters
// } from 'vuex'



export default {
  props: ['tuinsortdata','reverse'],
  components: {
    tuincardcaroussel
  },
  data: function() {
    return {
      slideIn: false,
      inViewClass: 'tuincards',
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
  },
  computed: {
    chunkTuinsoortenDesktop: function() {
      return _.chunk(this.tuinsoorten, 4);
    }
  },

}
</script>
<style scoped lang="scss">
.tuincard {
    position: relative;
    .icontop {
        width: 160px;
        display: block;
        margin: 0 auto;
    }
}
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
