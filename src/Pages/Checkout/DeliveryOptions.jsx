import dayjs from "dayjs";

export function DeliveryOptions({cartItem, deliveryOptions}) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {
                deliveryOptions.map((x) => {
                    let priceString = 'FREE Shipping';

                    if (x.priceCents > 0) {
                        priceString = `$${(x.priceCents / 100).toFixed(2)} - Shipping`;
                    }
                    return (
                        <div key={x.id} className="delivery-option">
                            <input type="radio" checked={cartItem.deliveryOptionId === x.id}
                                className="delivery-option-input"
                                name={`delivery-option-${cartItem.productId}`} />
                            <div>
                                <div className="delivery-option-date">
                                    {dayjs(x.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                </div>
                                <div className="delivery-option-price">
                                    {priceString}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}