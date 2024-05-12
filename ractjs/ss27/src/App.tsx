// khi return các element thì phải có thẻ fragment bọc ngoài
import React, { Component } from 'react'
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import Ex4 from './components/Ex4 - 5'
import Ex6 from './components/Ex6'

export default class App extends Component {
  render() {
    return (
      <div>
        <Ex1 />
        <Ex2 />
        <Ex3 />
        <Ex4 />
        <Ex6 />
      </div>
    )
  }
}
