const http = require('http')

http.createServer((req, res) => {
  res.statusCode = 200
  res.write("The user service")
  res.end()
}).listen(8080)