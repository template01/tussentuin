<template>
<div class="mb-40">
  <div v-touch:swipe.left="swipeLeft" v-touch:swipe.right="swipeRight" :class="[inViewClass]" class="transitionOpacity" :style="[slideIn ? {'opacity':'1'}:{'opacity':'0'},{'transition-delay':secondDelay+'ms'}]">
    <div class="tuingallerycaroussel " :class="{slideInHorizontal: slideInHorizontal, slideOutHorizontal: slideOutHorizontal}">

      <div>
        <img v-if="$mq ==='sm'" :src="content[selected].sizes.medium" />
        <img v-else :src="content[selected].sizes.medium" />
        <!-- <p class=" has-text-centered p-10">
                <nuxt-link :to="'tuinen/'+content[selected].tuin.post_name" v-html="content[selected].tuin.post_title" class="button is-light has-text-dark has-text-weight-semibold is-rounded"></nuxt-link>
              </p> -->
      </div>
      <p class="bulletWrapper is-size-5 has-text-dark pt-20">
        <span class="bullet prev mr-10"  :class="" @click="swipeRight"><span class="chevron left"></span></span>
        <span class="bullet mr-5" :class="{active: selected === index}" @click="transitionCard(index)" v-for="(item, index) in  content"></span>
        <span class="bullet next"  :class="" @click="swipeLeft"><span class="chevron right"></span>right</span>

      </p>
    </div>

  </div>
</div>
</template>
<script>
export default {

  props: {
    secondDelay: {
      type: Number,
      default: 1300
    },
    content: {

    }

  },
  components: {},
  data: function() {
    return {
      selected: 0,
      slideIn: false,
      inViewClass: 'slideInGallery',
      slideInHorizontal: true,
      slideOutHorizontal: false,
    }
  },
  methods: {

    swipeLeft: function() {
      if (this.content.length > 1) {

        if (this.selected === this.content.length - 1) {

          this.transitionCard(0)

        } else {

          this.transitionCard(this.selected + 1)
        }
      }
    },

    swipeRight: function() {
      if (this.content.length > 1) {

        if (this.selected === 0) {

          this.transitionCard(this.content.length - 1)

        } else {

          this.transitionCard(this.selected - 1)
        }
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
      }, 800)
    }
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

}
</script>
<style scoped lang="scss">
.tuincard {
    position: relative;
}

.slideOutHorizontal {
    transform: translateX(-20px) !important;
    opacity: 0.0 !important;
}
.slideInHorizontal {
    transform: translateX(0px) !important;
    opacity: 1 !important;
}

.tuingallerycaroussel {
    transform: translateX(20px);
    opacity: 0.0;
    transition: transform 500ms, opacity 500ms, min-height 500ms;
    overflow: hidden;
    // min-height: 300px;
    // margin-bottom: -40px;
    // max-height: 1000px;
    position: relative;
    background: white;
    img {
        border-radius: 10px;
        margin: 0 auto;
        display: block;
        max-height: 800px;
    }
    .bulletWrapper {
        text-align: center;
        width: 100%;
    }
    .bullet {
        color: $brown !important;
        border: 3px solid;
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
