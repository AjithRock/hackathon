"use client"
import React from 'react';
import Header from '../../../components/Header'
import { Layout, Card, Button } from 'antd';
import useCartStore from '../../../store/useCartStore';
const { Content } = Layout;


export default  function ProductDetails({ params }) {
    const { id } =  React.use(params);
    const productList = useCartStore((state) => state.product);
    const product = productList.filter(item => item.id == id)[0]
    
    return (
        <Layout>
            <Header />
            <Content style={{ padding: '0 48px' }}>
                <h1 style={{ padding: 20 }}>
                    Product
                </h1>

                    <Card
                        key={product.id}
                        cover={
                            <img alt={product.name} src={product.imageUrl} />}
                    >
                        <h3>
                            {product.name}
                        </h3>
                        <p style={{ fontSize: '12px', padding: 4 }}>
                            {product.description}
                        </p>
                        <h3 style={{ padding: 4 }}>
                            ${product.price}
                        </h3>
                        

                    </Card>

         
            </Content>
        </Layout>
    );
}



