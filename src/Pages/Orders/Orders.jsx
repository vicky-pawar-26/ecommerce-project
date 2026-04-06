import './Orders.css';
import { Header } from '../../Components/Header';
import { Link } from 'react-router';
import axios from 'axios';
import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';

export function Orders({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders?expand=products').then((response) => {
            setOrders(response.data);
        });
    }, [])

    return (
        <>
            <Header cart={cart} />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {
                        orders.map((o) => {
                            return (
                                <div key={o.id} className="order-container">
                                    <div className="order-header">
                                        <div className="order-header-left-section">
                                            <div className="order-date">
                                                <div className="order-header-label">Order Placed:</div>
                                                <div>{dayjs(o.orderTimeMs).format('MMMM D')}</div>
                                            </div>
                                            <div className="order-total">
                                                <div className="order-header-label">Total:</div>
                                                <div>${(o.totalCostCents / 100).toFixed(2)}</div>
                                            </div>
                                        </div>

                                        <div className="order-header-right-section">
                                            <div className="order-header-label">Order ID:</div>
                                            <div>{o.id}</div>
                                        </div>
                                    </div>

                                    <div className="order-details-grid">
                                        {(o.products || []).map((x) => {
                                            return (
                                                <Fragment key={x.product.id}>
                                                    <div className="product-image-container">
                                                        <img src={x.product.image} />
                                                    </div>

                                                    <div className="product-details">
                                                        <div className="product-name">
                                                            {x.product.name}
                                                        </div>

                                                        <div className="product-delivery-date">
                                                            Arriving on: {dayjs(x.estimatedDeliveryTimeMs).format('MMMM D')}
                                                        </div>

                                                        <div className="product-quantity">
                                                            Quantity: {x.quantity}
                                                        </div>

                                                        <button className="buy-again-button button-primary">
                                                            <img
                                                                className="buy-again-icon"
                                                                src="images/icons/buy-again.png"
                                                            />
                                                            <span className="buy-again-message">Add to Cart</span>
                                                        </button>
                                                    </div>

                                                    <div className="product-actions">
                                                        <Link to="/tracking">
                                                            <button className="track-package-button button-secondary">
                                                                Track package
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </Fragment>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}