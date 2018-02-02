import _ from 'lodash'

export default ({
  isClient,
  store
}) => {
  if (isClient) {

    window.addEventListener("load", function(event) {
      setTimeout(function(){
        store.commit('SET_APPINITIATED', true)
      },3000)

    });
  }
};
