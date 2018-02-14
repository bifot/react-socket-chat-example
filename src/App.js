import React, { Component } from 'react'
import client from 'socket.io-client'
import { Container, Input, Button } from './components'

const io = client('http://localhost:5000')

export default class App extends Component {
  state = {
    message: '',
    messages: []
  }

  messageHandler = (event) => {
    const { value } = event.target

    this.setState({ message: value })
  }

  sendMessage = () => {
    const { message } = this.state

    if (message) {
      io.emit('new_message', {
        message
      })

      this.setState({
        message: ''
      })
    }
  }

  componentWillMount () {
    io.on('connect', () => {
      console.log('Socket connected.')
    })

    io.on('new_message', ({ message }) => {
      const { messages } = this.state

      this.setState({
        messages: [
          ...messages,
          message
        ]
      })
    })
  }

  render () {
    const { message, messages } = this.state

    return (
      <Container>
        <ul>
          {
            messages.map((item, i) => <li key={i}>{item}</li>)
          }
        </ul>
        <Input onChange={this.messageHandler} value={message} placeholder='Message' />
        <Button onClick={this.sendMessage}>Send</Button>
      </Container>
    )
  }
}
