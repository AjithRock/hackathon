
"use client"
import React from 'react';
import Link from 'next/link'
import { Layout } from 'antd';
import useCartStore from '../store/useCartStore';
const { Header } = Layout;

const NAVLIST = [
    {
        key: 1,
        label: 'Home',
        path: '/'
    },
    {
        key: 2,
        label: 'Product',
        path: '/products'
    },
    {
        key: 3,
        label: 'Cart',
        path: '/cart'
    },
    {
        key: 4,
        label: 'Login',
        path: '/login'
    }
]

export default function CustomeHeader() {
    const cart = useCartStore((state) => state.cart);

    return (
        <Header style={{ padding: '0 40px', justifyContent: 'end', alignItems: 'center', display: 'flex' }}>
            {NAVLIST.map((nav) =>
            (<Link
                key={nav.key}
                style={{ padding: '8px 16px', color: 'white' }}
                href={{
                    pathname: nav.path,
                }}
            >
                {nav.label} {(nav.key === 3 && cart.length > 0) && (<span style={{
                    background: 'white',
                    borderRadius: '50%',
                    color: 'black',
                    padding: '0px 5px',
                }}>{cart.length}</span>)}
            </Link>)
            )}
        </Header>
    );
}

