import './Cart.css';

function CartDetails({ cartItems }) {
    if (!cartItems || cartItems.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <div className="cart-details">
            <p>Total items: {cartItems.length}</p>
            {cartItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="product-item">
                    <h3>{item.name}</h3>
                    <p className="desc">{item.desc}</p>
                    <p className="price">{item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default CartDetails;