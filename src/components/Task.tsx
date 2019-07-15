import React, { FunctionComponent } from 'react'

export const Task: FunctionComponent<{ title: string; text: string }> = ({
  title,
  text,
}) => (
  <div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)
