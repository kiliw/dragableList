import React from 'react'
import { Layout } from 'antd'

const { Header, Content } = Layout

export const Wrapper = ({ children }: { children: any }) => (
  <Layout>
    <Header>Drag and Drop your stuff</Header>
    <Content>{children}</Content>
  </Layout>
)
