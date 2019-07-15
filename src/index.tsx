import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from './components/Layout'
import { Task } from './components/Task'

const App = () => (
  <Layout>
    <Task title="Juhu" text="Do this" />
  </Layout>
)

ReactDOM.render(<App />, document.getElementById('root'))
