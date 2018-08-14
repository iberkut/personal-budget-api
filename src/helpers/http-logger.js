const http = require('http')

const httpLog = (type, message) => {
  // Build the post string from an object
  const post_data = JSON.stringify({
    [type]: message
  })
  // An object of options to indicate where to post to
  const post_options = {
    host: 'logs-01.loggly.com',
    port: '80',
    path: '/inputs/d07ba426-5b9c-46b0-a3ff-a83cdb94cd03/tag/http',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  // Set up the request
  const post_req = http.request(post_options)
  // post the data
  post_req.write(post_data)
  post_req.end()
}

module.exports = {
  httpLog
}

