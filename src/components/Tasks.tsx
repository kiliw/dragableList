import React from 'react'
import { Card } from 'antd'
import * as R from 'ramda'
import { listData } from '../content'

export const Task = ({ title, text }: { title: string; text: string }) => (
  <Card title={title} style={{ width: 300 }}>
    <p>{text}</p>
  </Card>
)

const mapEntriesToTask = R.forEach(
  ({ title, text }: { title: string; text: string }) => (
    <Task title={title} text={text} />
  )
)

export const Tasks = R.pipe<any, any, any, any>(
  R.path(['column', 'entries']),
  mapEntriesToTask,
  R.tap(console.log)
)(listData)
