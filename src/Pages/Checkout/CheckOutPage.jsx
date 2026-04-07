import { Link } from 'react-router';
import './CheckOutPage.css';
import './checkout-header.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { OrderSummery } from './OrderSummery'
import { PaymentSummary } from './PaymentSummery';

export function CheckOutPage(props) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState([]);

    useEffect(() => {
        const getCheckOutData = async () => {
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);

            response = await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        }

        getCheckOutData();
    }, [])

    return (
        <>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <a href="/">
                            <img className="logo" src="images/logo.png" />
                            <img className="mobile-logo" src="images/mobile-logo.png" />
                        </a>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                            to="/">3 items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummery deliveryOptions={deliveryOptions} cart={props.cart} />

                    <div className="payment-summary">
                        <PaymentSummary paymentSummary={paymentSummary} />
                    </div>
                </div>
            </div>
        </>
    );
}