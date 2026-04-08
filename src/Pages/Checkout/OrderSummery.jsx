import dayjs from 'dayjs';
import { DeliveryOptions } from './DeliveryOptions';
import axios from 'axios';
import { formatMoney } from '../../Utils/money';

export function OrderSummery({ deliveryOptions, cart, loadCart }) {
    return (
        <div className="order-summary">
            {
                deliveryOptions.length > 0 && cart.map((cartItem) => {
                    const selectedDeliveryOption = deliveryOptions.find((options) => {
                        return options.id === cartItem.deliveryOptionId;
                    })

                    const deleteCartItem = async () => {
                        await axios.delete(`/api/cart-items/${cartItem.productId}`);
                        await loadCart();
                    }

                    return (
                        <div key={cartItem.productId} className="cart-item-container">
                            <div className="delivery-date">
                                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>

                            <div className="cart-item-details-grid">
                                <img className="product-image"
                                    src={cartItem.product.image} />

                                <div className="cart-item-details">
                                    <div className="product-name">
                                        {cartItem.product.name}
                                    </div>
                                    <div className="product-price">
                                        {formatMoney(cartItem.product.priceCents)}
                                    </div>
                                    <div className="product-quantity">
                                        <span>
                                            Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                        </span>
                                        <span className="update-quantity-link link-primary">
                                            Update
                                        </span>
                                        <span onClick={deleteCartItem} className="delete-quantity-link link-primary">
                                            Delete
                                        </span>
                                    </div>
                                </div>

                                <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}