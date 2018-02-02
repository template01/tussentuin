import _ from 'lodash'

export default ({
  isClient,
  store
}) => {
  if (isClient) {

    window.addEventListener("load", function(event) {
      store.commit('SET_APPINITIATED', true)
      // setTimeout(function(){
      // },3000)

    });
  }
};
