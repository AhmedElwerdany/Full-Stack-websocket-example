import {createServer} from 'http'
import {WebSocketServer} from 'ws'
const server = createServer()

const ws = new WebSocketServer({server})

ws.on('connection', (ws) => {
    ws.on('message', (data) => {
        ws.send(data.toString())
    })
})


server.listen(8080)