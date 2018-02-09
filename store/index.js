export const state = () => ({
  appinitated:true,
  apiRoot: 'http://api.tussentuin.nl/wp-json',
  menuopen: false,
  posts:[],
  screensize: 0,
  screensizeformat:null
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

  GET_MENUOPEN(state) {
    return state.menuopen
  },

  GET_SCREENSIZE(state){
    return state.screensizeformat
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

  SET_SCREENSIZEFORMAT(state, screensizeformat) {
    state.screensizeformat = screensizeformat;
  },

}
