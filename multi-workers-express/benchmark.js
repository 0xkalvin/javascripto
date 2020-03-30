const autocannon = require('autocannon')

const instance = autocannon({
  url: 'http://localhost:3000',
  connections: 1024, 
  duration: 10,
  timeout: 30
})

// this is used to kill the instance on CTRL-C
process.once('SIGINT', () => {
  instance.stop()
})

// just render results
autocannon.track(instance, {renderProgressBar: false})
