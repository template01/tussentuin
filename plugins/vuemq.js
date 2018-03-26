import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 1024,
    // md: 1024,
    lg: Infinity,
  }
})
