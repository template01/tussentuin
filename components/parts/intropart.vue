<template>
<div class="intropart " :style="slideIn ? {'opacity':'1'}:{'opacity':'0'}">
  <div :class="[inViewClass, hascentertext ? 'has-text-centered':'']">
    <div v-show="titletext" v-html="'<p>'+titletext+'</p>'" class="titletext has-text-weight-bold" :class="[$mq==='lg' || $mq==='xl'? '': 'has-text-centered', slideIn ? 'slideIn':'',  islarge ? 'is-size-1':'is-size-2' ]">
    </div>
    <div v-show="blurbtext" v-html="blurbtext" class="is-size-4 has-text-weight-semibold pt-10 transitionOpacity" :class="[ islarge ? 'is-size-4':'is-size-5']" :style="[slideIn ? {'opacity':'1'}:{'opacity':'0'},{'transition-delay':secondDelay+'ms'}]">
    </div>
    <div v-show="desc" v-html="desc" class="desc is-size-3 pt-40 transitionOpacity" :class="[ islarge ? 'is-size-4':'is-size-5']" :style="[slideIn ? {'opacity':'1'}:{'opacity':'0'},{'transition-delay':secondDelay+'ms'}]">
    </div>
    <div :style="[slideIn ? {'opacity':'1'}:{'opacity':'0'},{'transition-delay':secondDelay+'ms'}]" class="transitionOpacity" >
      <slot >
      </slot>
    </div>
    <img :style="[slideIn ? {'opacity':'1'}:{'opacity':'0'},{'transition-delay':secondDelay+'ms'}]" class="topicon transitionOpacity" v-show="icon" :src="icon"/>
  </div>
</div>
</template>
<script>
import scrollMonitor from 'scrollmonitor'
// import {
//   mapGetters
// } from 'vuex'



export default {
  props: {
    hascentertext:{

    },
    titletext: {

    },
    icon: {

    },
    islarge: {

    },
    isgreen: {

    },
    desc: {

    },
    blurbtext: {

    },
    offset: {

    },
    secondDelay: {
      type: Number,
      default: 1100
    },


  },

  data: function() {
    return {
      slideIn: false,
      inViewClass: 'slideInTitle'
    }
  },
  methods: {


  },
  mounted() {
    var myElement = this.$el.querySelector("." + this.inViewClass);
    var elementWatcher = scrollMonitor.create(myElement, this.offset);
    var vm = this

    elementWatcher.enterViewport(function() {
      vm.slideIn = true
    });

    elementWatcher.exitViewport(function() {
      // vm.slideIn = false
    });
  }
  // computed: {
  //   ...mapGetters({
  //    appinitated: "GET_APP_INITIATED",
  //   }),
  // },

}
</script>

<style lang="scss">
blockquote{
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 60px;
  margin-right: 60px;
  padding-top: 20px;
  padding-bottom: 10px;
  border-top: 3px solid;

}
b,bold,strong{
  color: inherit;
  font-weight: 600 !important;
  font-size: inherit !important;
}

.intropart {

  span{
    // display: none;
    font-size: inherit !important;
    font-weight: inherit !important;
  }
  .titletext{
    width: 100%;
  }
  .desc{
    img{
      margin: 0 auto;
      margin-top: 40px;
      margin-bottom: 40px;
      max-width: calc(100% - 80px);
      display: block;
      border-radius: 5px;
    }

    @media (max-width: 768px) {
      img{
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        max-width: calc(100% - 40px);
        display: block;
        border-radius: 5px;
      }
    }
  }



  .topicon{
    width: 100px;
    margin-bottom: 20px;
    opacity: 0;
  }
    .is-size-1 {
        p {
            padding-top: 0;
            line-height: 1.15 !important;
            // margin-top: -20px;
        }
    }

    .is-size-2 {
        p {
            padding-top: 0;
            // line-height: 1.2 !important;
            // margin-top: -20px;
        }
    }
    .slideIn {
        display: inline-block;
        p {

            width: 100%;
            float: left;
            -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
            clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
            transform: translateY(-50px);
            opacity: 0;
            animation-delay: 0.3;
            animation-name: titleAnimation;
            animation-timing-function: ease;
            animation-duration: 0.7s;
            animation-fill-mode: forwards;
        }
    }
    .slideIn p {
        animation-delay: 0.4s;
        -webkit-animation-fill-mode: forwards;

        &:first-child {
            animation-delay: 0.5s;

        }

        &:last-child {
            animation-delay: 0.3s;
        }
    }

    @keyframes titleAnimation {
        0% {
            transform: translateY(-50px);
            opacity: 0;
            -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
            clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
        }
        100% {
            transform: translateY(0);
            opacity: 1;
            -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%);
            clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%);
        }
    }
}
</style>
