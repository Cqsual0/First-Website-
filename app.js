const http = require('http')
const port = 3000

const sever = http.createserver(function(req, res) {

})

server.listen(port, function(error ){
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Sever is listening on port ' + port)
  }
})
