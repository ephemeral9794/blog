import moment from 'moment'
import Vue from 'vue'

Vue.filter('moment', (value: Date) => {
  const date = moment(value)
  return date.format('YYYY.MM.DD')
})
