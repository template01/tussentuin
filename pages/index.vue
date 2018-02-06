<template>
<div class="" style="">
  <div v-if="appinitated" class="">

    <!-- <postlistcomp></postlistcomp> -->
    <indexsection :halfheight="true">
      <section_a></section_a>
      <tonextsection :idprop="'tuinen'"></tonextsection>
    </indexsection>
    <!-- <indexsection id="wauw" :fullheight="true">
      <section_a_foto></section_a_foto>
      <tonextsection :idprop="'tuinen'"></tonextsection>
    </indexsection> -->
    <indexsection id="tuinen" :fullheight="true">
      <section_b></section_b>
    </indexsection>
    <indexsection id="themas" :fullheight="true">
      <section_c></section_c>
    </indexsection>
  </div>
</div>
</div>
</template>

<script>
import genericcomp from '~/components/_genericComp.vue'
import postlistcomp from '~/components/postListComp.vue'
import tonextsection from '~/components/index/tonextsection.vue'
import indexsection from '~/components/index/indexsection.vue'
import section_a from '~/components/index/section_a.vue'
import section_a_foto from '~/components/index/section_a_foto.vue'
import section_b from '~/components/index/section_b.vue'
import section_c from '~/components/index/section_c.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    genericcomp,
    postlistcomp,
    indexsection,
    tonextsection,
    section_a,
    section_a_foto,
    section_b,
    section_c,
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
