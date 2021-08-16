const interval = require('./lib/interval')

let count = 0
interval.start(next=>{
  console.log('>>>>>>>>111', count++)
  next()
}, 5000)