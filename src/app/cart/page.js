"use client"
import React from 'react';
import Header from '../../components/Header'
import { Layout, Card, Button } from 'antd';
import useCartStore from '../../store/useCartStore';
const { Content } = Layout;

export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const deleteProduct = useCartStore((state) => state.delete);
    const total = cart.reduce((accumulator, currentObject) => {
        return currentObject.price + accumulator;
    }, 0);
    return (
        <Layout>
            <Header />
            <Content style={{ padding: '0 48px' }}>
                <h1 style={{ padding: 20 }}>
                    Cart
                </h1>
                <Card style={{ flex: 1 }} >
                    {cart.map((product) => (
                        <div key={product.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', padding: 8 }} >
                                <img width={100} alt={product.name} src={product.imageUrl} />
                                <h3>
                                    {product.name}
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', padding: 8 }} >
                                <h3 style={{ textAlign: 'right', padding: 4 }}>
                                    ${product.price}
                                </h3>
                                <Button onClick={() => deleteProduct(product)}>
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                    {cart.length == 0 && <h2 style={{textAlign:'center'}}> No Products in cart</h2>}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                        {total > 0 && (<h1>
                            Total {total}
                        </h1>)}
                    </div>
                </Card>



            </Content>
        </Layout>
    );
}



