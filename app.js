const io = require('socket.io')()
const { PORT = 5000 } = process.env

io.on('connection', (client) => {
  client.on('new_message', (data) => {
    io.emit('new_message', data)
  })
})

io.listen(PORT)

console.log(`Listening on ${PORT} port...`)
