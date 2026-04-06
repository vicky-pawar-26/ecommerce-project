import { Header } from '../../Components/Header';
import axios from 'axios';
import './HomePage.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { ProductGrid } from './ProductGrid';
export function HomePage(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products').then((response) => {
            setProducts(response.data);
        });
    }, [])

    return (
        <>
            <Header cart={props.cart} />
            <div className="home-page">
                <ProductGrid products={products} />
            </div>
        </>
    );
}