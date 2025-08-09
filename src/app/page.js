"use client"
import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header'
const { Content } = Layout;



export default function Home() {
  const [cart, setCart] = useState([]);
  return (
      <Layout>
        <Header />
        <Content style={{ padding: '0 48px' }}>
          Dashboard
        </Content>
      </Layout>

  );
}