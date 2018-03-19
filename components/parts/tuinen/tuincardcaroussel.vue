<template>
<div class="">

        <div class="tuincardcaroussel aligner" :class="{slideInVertical: slideInVertical, slideOutVertical: slideOutVertical}">
          <template v-if="menuleft">
            <p class="bulletWrapper left is-size-5 has-text-dark p-20">
              <span class="bullet mt-5" :class="{active: selected === index}" @click="transitionCard(index)" v-for="(item, index) in  content"></span>
            </p>
            <div>
              <img :src="content[selected].tuin.acf.featured_foto.sizes.medium_large"/>
              <p class=" has-text-centered p-10">
                <nuxt-link :to="'tuinen/'+content[selected].tuin.post_name" v-html="content[selected].tuin.post_title" class="button is-light has-text-dark has-text-weight-semibold is-rounded"></nuxt-link>
              </p>
            </div>
          </template>
          <template v-else>
            <div>
              <img :src="content[selected].tuin.acf.featured_foto.sizes.medium_large"/>
              <p class=" has-text-centered p-10">
                <nuxt-link :to="'tuinen/'+content[selected].tuin.post_name" v-html="content[selected].tuin.post_title" class="button is-light has-text-dark has-text-weight-semibold is-rounded"></nuxt-link>
              </p>
            </div>
            <p class="bulletWrapper is-size-5 has-text-dark p-20">
              <span class="bullet mt-5" :class="{active: selected === index}" @click="transitionCard(index)" v-for="(item, index) in  content"></span>
            </p>
          </template>
        </div>

</div>
</template>
<script>

export default {
  props: ['content','menuleft'],
  components: {
  },
  data: function() {
    return {
      selected: 0,
      slideInVertical: true,
      slideOutVertical: false,
    }
  },
  methods: {
    transitionCard: function(input) {
      this.slideOutVertical = true
      this.slideInVertical = false
      var vm = this

      setTimeout(function() {
        vm.selected = input
      }, 400)
      setTimeout(function() {
        vm.slideOutVertical = false
        vm.slideInVertical = true
      }, 600)
    }
  },


}
</script>
<style scoped lang="scss">
.tuincard{
  position: relative;
}

.slideOutVertical {
    transform: translateY(-20px) !important;
    opacity: 0.0 !important;
}
.slideInVertical {
    transform: translateX(0px) !important;
    opacity: 1 !important;
}

.tuincardcaroussel {
    transform: translateY(20px);
    opacity: 0.0;
    transition: transform 500ms, opacity 500ms, min-height 500ms;
    overflow: hidden;
    min-height: 300px;
    // max-height: 1000px;
    position: relative;
    background: white;
    img {
      border-radius: 10px;
        margin: 0 auto;
        display: block;
        max-height: 400px;


    }
    .bulletWrapper{
      width: 55px;
      text-align: center;
      margin-top: -35px;
      text-align: center;
      &.left{

      }
    }
    .bullet {
        border: 2px solid $brown;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        overflow: hidden;
        display: table;
        cursor: pointer;
        &.active {
            background: $brown;
        }

    }
}
</style>
