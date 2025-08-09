"use client"
import React from 'react';
import Header from '../../components/Header'
import { Layout, Card, Button, Input } from 'antd';
import { useRouter } from 'next/navigation';
import useCartStore from '../../store/useCartStore';
const { Content } = Layout;


export default function Product() {
  const addProduct = useCartStore((state) => state.add);
  const deleteProduct = useCartStore((state) => state.delete);
  const product = useCartStore((state) => state.filteredProduct);
  const searchProduct = useCartStore((state) => state.search);
  const router = useRouter();

  const onCardClick = (id) => {
    router.push(`/products/${id}`);
  }
  
  return (
    <Layout>
      <Header />
      <Content style={{ padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ padding: 20 }}>
            Products
          </h1>
          <Input placeholder="Search Product..." onChange={(e) => searchProduct(e.target.value)} style={{ width: '240px', height: '40px' }} />
        </div>

        <div style={{
          alignItems: 'center', display: 'flex',
          flexWrap: 'wrap',
          gap: '26px'
        }}>
          {product.map((product) => (
            <Card
              key={product.id}
              hoverable
              onClick={() => onCardClick(product.id)}
              style={{ width: 240, flex: '0 0 31%' }}
              cover={
                <img alt={product.name} src={product.imageUrl} />}
            >
              <h3>
                {product.name}
              </h3>
              <p style={{ fontSize: '12px', padding: 4 }}>
                {product.description}
              </p>
              <h3 style={{ textAlign: 'right', padding: 4 }}>
                ${product.price}
              </h3>
              <div style={{ textAlign: 'center', padding: 8 }}>
                {
                  product.isAdded ? (
                    <Button onClick={() => deleteProduct(product)}>
                      Remove
                    </Button>
                  ) :
                    (<Button onClick={() => addProduct(product)}>
                      Add to Cart
                    </Button>)
                }

              </div>

            </Card>
          ))}
        </div>
      </Content>
    </Layout>
  );
}



