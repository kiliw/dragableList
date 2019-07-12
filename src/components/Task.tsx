import React from 'react'

export const Task = ({ title, text }: { title: string; text: string }) => (
  <div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)
