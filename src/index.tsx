import React from 'react'
import ReactDOM from 'react-dom'
import { Wrapper } from './components/Wrapper'
import { Tasks } from './components/Tasks'

const App = () => (
  <Wrapper>
    <Tasks />
  </Wrapper>
)

ReactDOM.render(<App />, document.getElementById('root'))
