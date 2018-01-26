<template>
<div class="">
  <div v-if="appinitated" class="">
    <!-- <postlistcomp></postlistcomp> -->
    <indexsection :boomfile="'boomtop'">

    </indexsection>
    <indexsection :boomfile="'boom1'">
      test
    </indexsection>
    <indexsection :boomfile="'boom'">
      test
    </indexsection>
    <!-- <div >
      <div class="columns">
        <div class="column">
          <p class="is-size-3 " id="test">
            nuxt-boilerplate-bulma
          </p>
        </div>
        <div class="column">
          <p class="is-size-3">
            screensize from store:
            <span v-html="screensize"></span>
          </p>
        </div>
        <div class="column">
          <p class="is-size-3">
            app initated from store:
            <span v-html="appinitated"></span>
          </p>
        </div>
        <div class="column">
          <genericcomp></genericcomp>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <postlistcomp></postlistcomp>
        </div>
      </div>
    </div> -->
  </div>
  <div v-else class="container">
    <div>
      <div class="columns">
        <div class="column">
          <p class="is-size-3 has-text-danger">
            Loading
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import genericcomp from '~/components/_genericComp.vue'
import postlistcomp from '~/components/postListComp.vue'
import indexsection from '~/components/index/indexsection.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    genericcomp,
    postlistcomp,
    indexsection
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },


  async asyncData({
    params,
    query,
    error,
    store,
    route,
    redirect
  }) {


    // GET POSTS START
    console.log(store.state.apiRoot + '/wp/v2/posts')

    if (store.state.posts.length == 0) {
      const postsRes = await axios.get(store.state.apiRoot + '/wp/v2/posts')
      console.log(store.state.apiRoot + '/wp/v2/posts')
      store.commit('SET_POSTS', postsRes.data)
    }

    // RETURN DATA DIRECTLY
    // return { title: 'blah blah blah' }


  },


}
</script>

<style lang="scss">

</style>
