import { Header } from '../../Components/Header';
import axios from 'axios';
import './HomePage.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { ProductGrid } from './ProductGrid';
export function HomePage(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        }
        getHomeData();
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