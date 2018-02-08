import _ from 'lodash'



export default ({
  isClient,
  store
}) => {

  store.commit('SET_APPINITIATED', true)

  if (isClient) {

    //store.commit('SET_APPINITIATED', true)

    window.addEventListener("load", function(event) {
      setTimeout(function(){
        store.commit('SET_APPINITIATED', true)
      },3000)

    });
  }

};
