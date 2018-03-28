import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 768,
    md: 1024,
    lg: 1921,
    xl: Infinity,
  }
})
