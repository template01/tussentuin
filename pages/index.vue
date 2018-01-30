<template>
<div class="" style="">
  <div v-if="appinitated" class="">

    <!-- <postlistcomp></postlistcomp> -->
    <indexsection>
      <section_a></section_a>
    </indexsection>
    <indexsection>
      <section_b></section_b>
    </indexsection>

  </div>
</div>
</div>
</template>

<script>
import genericcomp from '~/components/_genericComp.vue'
import postlistcomp from '~/components/postListComp.vue'
import indexsection from '~/components/index/indexsection.vue'
import section_a from '~/components/index/section_a.vue'
import section_b from '~/components/index/section_b.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    genericcomp,
    postlistcomp,
    indexsection,
    section_a,
    section_b,
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
