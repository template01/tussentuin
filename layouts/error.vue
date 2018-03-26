<template>
  <div class="error-container aligner" :style="{ 'background-image': `url(`+'patternGreen.svg'+`)`}">
    <div>
      <h1 class="is-size-1 has-text-info has-text-weight-bold" v-if="error.statusCode === 404">Pagina niet gevonden!</h1>
      <h1 class="is-size-1 has-text-info has-text-weight-bold" v-else>Er is helaas iets mis gegaan!</h1>
        <div class="mt-20 has-text-centered">
          <topage :link="'/'":left="true" :text="'Probeer eens dit'"></topage>
        </div>
    </div>

  </div>
</template>

<script>
import topage from '~/components/parts/topage.vue'

export default {
  components: {
    topage,
  },
  props: ['error'],
}
</script>
<style lang="scss" scoped>
  .error-container{
    min-height: 100vh;
  }
</style>
