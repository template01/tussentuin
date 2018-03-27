<template>
<div>

  <div :id="tuinsortdata.slug" class="tuincard mb-80" :class="[slideIn ? 'slideIn':'', inViewClass]" :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">



    <div class="columns" v-if="$mq==='lg' || $mq==='xl'">
      <div class="column is-10 is-offset-1">
        <template>
          <template v-if="reverse">
            <div  class="columns aligner">
              <div class="column mr-20 ml-20">
                <div class="">
                  <img class="icontop pb-30" :src="tuinsortdata.acf.icon" />
                  <a target="_blank" v-if="tuinsortdata.acf.pdf_upload" :href="tuinsortdata.acf.pdf_upload" v-html="'PDF'" class="pdf-attachment button is-light has-text-dark has-text-weight-semibold is-rounded"></a>
                  <p class="pb-30 is-size-2 has-text-weight-bold has-text-centered" v-html="tuinsortdata.title.rendered">
                  </p>
                  <div class="is-size-5" v-html="tuinsortdata.acf.desc">
                  </div>
                </div>
              </div>
              <div class="column mr-20 ml-20" >
                <tuincardcaroussel :tuinsoort="tuinsortdata.id" ></tuincardcaroussel>
              </div>
            </div>
          </template>
        <template v-else>
            <div  class="columns aligner">
              <div class="column mr-20 ml-20">
                <tuincardcaroussel :tuinsoort="tuinsortdata.id" :menuleft="true"></tuincardcaroussel>
              </div>
              <div class="column mr-20 ml-20">
                <div class="">
                  <img class="icontop pb-30" :src="tuinsortdata.acf.icon" />
                  <a target="_blank" v-if="tuinsortdata.acf.pdf_upload" :href="tuinsortdata.acf.pdf_upload" v-html="'PDF'" class="pdf-attachment button is-light has-text-dark has-text-weight-semibold is-rounded"></a>
                  <p class="pb-30 is-size-2 has-text-weight-bold has-text-centered" v-html="tuinsortdata.title.rendered">
                  </p>
                  <div class="is-size-5" v-html="tuinsortdata.acf.desc">
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
    <div v-else>
      <div class="columns is-mobile" >
        <div class="column is-10 is-offset-1">
          <div class="">
            <img class="icontop pb-30" :src="tuinsortdata.acf.icon" />
            <a target="_blank" v-if="tuinsortdata.acf.pdf_upload" :href="tuinsortdata.acf.pdf_upload" v-html="'PDF'" class="pdf-attachment button is-light has-text-dark has-text-weight-semibold is-rounded"></a>
            <p class="pb-30 is-size-2 has-text-weight-bold has-text-centered" v-html="tuinsortdata.title.rendered">
            </p>
            <div class="is-size-5" v-html="tuinsortdata.acf.desc">
            </div>
          </div>
        </div>

      </div>
      <div class="columns pb-10 is-mobile" >
        <div class="column is-10 is-offset-1 ">
          <tuincardcaroussel :tuinsoort="tuinsortdata.id" ></tuincardcaroussel>
        </div>
      </div>
    </div>

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
  props: ['tuinsortdata', 'reverse', 'tuinsoort'],
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
.pdf-attachment {
    position: absolute;
    margin-top: -36px;
    margin-left: 30px;
}
.tuincard {
    position: relative;
    .icontop {
        width: 180px;
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
