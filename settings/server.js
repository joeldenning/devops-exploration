const http = require('http')
const axios = require('axios')

http.createServer((req, res) => {
  axios.default.get("http://user:8080").then(
    userResponse => {
      res.statusCode = 200;
      res.write("Settings service: " + userResponse.data)
      res.end()
    },
    err => {
      console.error(err)
      res.statusCode = 500;
      res.write(err.toString())
      res.end()
    }
  )
}).listen(8080)