import axios from 'axios'
export const strict = false

export const state = () => ({
  appinitated:false,
  loaderhasrun: false,
  apiRoot: 'http://api.tussentuin.nl/wp-json',
  menuopen: false,
  posts:[],
  footerContent:[],
  menuContent:[],
  screensize: 0,
  screensizeformat:null,
  iOS: false
})

//
// function checkReadmore(){
//   if (window.location.hash === '#read') {
//     return true;
//   }else{
//     return false;
//   }
// }
// this.$store.commit('SET_READMORE', true)


export const getters = {

  GET_APP_INITIATED(state) {
    return state.appinitated
  },

  GET_LOADER_RUN(state) {
    return state.loaderhasrun
  },

  GET_MENUOPEN(state) {
    return state.menuopen
  },

  GET_SCREENSIZE(state){
    return state.screensizeformat
  },

  GET_FOOTER(state){
    return state.footerContent
  },

  GET_MENU(state){
    return state.menuContent
  },

  GET_POSTS(state){
    return state.posts
  },
}

export const mutations = {

  SET_POSTS(state, posts) {
    state.posts = posts;
  },

  SET_MENUCLOSE(state, posts) {
    state.menuopen = false;
  },

  SET_MENUOPEN(state, posts) {
    state.menuopen = true;
  },


  SET_APPINITIATED(state, toggle) {
    state.appinitated = toggle;
  },

  SET_LOADER_RUN(state, toggle){
    state.loaderhasrun = toggle;
  },

  SET_SCREENSIZEFORMAT(state, screensizeformat) {
    state.screensizeformat = screensizeformat;
  },

  SET_IOS(state) {
    state.iOS = !!navigator.platform.match(/iPhone|iPod|iPad/);;
  },




}



export const actions = {

  // LOAD INITIAL DATA ssr

  async nuxtServerInit({
    commit,
    state
  }, {
    req
  }) {

    let [menuRes,footerRes] = await Promise.all([
    axios.get(state.apiRoot + '/wp/v2/part?slug=menu'),
      axios.get(state.apiRoot + '/wp/v2/part?slug=footer'),
    ])
    state.footerContent = footerRes.data[0]
    state.menuContent = menuRes.data[0]

    var vmstate = state

    // return {
      // menuContent: menuRes.data[0].acf,
      // footerContent: footerRes.data[0].acf
    // }


    // const postsRes = await axios.get(state.apiRoot + '/wp/v2/tuinsoort')
    // state.posts = postsRes.data
  },


// LOAD INIT DATA spa


  async nuxtClientInit({
    commit,
    state
  }, {
    req
  }) {

    let [menuRes,footerRes] = await Promise.all([
    axios.get(state.apiRoot + '/wp/v2/part?slug=menu'),
      axios.get(state.apiRoot + '/wp/v2/part?slug=footer'),
    ])
    state.footerContent = footerRes.data[0]
    state.menuContent = menuRes.data[0]

    var vmstate = state

    // return {
      // menuContent: menuRes.data[0].acf,
      // footerContent: footerRes.data[0].acf
    // }


    // const postsRes = await axios.get(state.apiRoot + '/wp/v2/tuinsoort')
    // state.posts = postsRes.data
  }
}
