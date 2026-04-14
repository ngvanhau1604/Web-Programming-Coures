import './Nav.css';
import { Link } from 'react-router-dom';
import CartDetails from './Cart';

function Cart({ cartItems }) {
    return (
        <div className="nav__content">
            <div className="cart__page">
                <h1>Cart Page</h1>
                <CartDetails cartItems={cartItems} />
            </div>
        </div>
    )
}

function About() {
    return (
        <div className="nav__content">
            <div className="about__page">
                <h1>About Page</h1>
                <p>This is the about page.</p>
            </div>
        </div>
    )
}

function Contact() {
    return (
        <div className="nav__content">
            <div className="contact__page">
                <h1>Contact Page</h1>
                <div className='eMail'>
                    <Link to="/contact/email">Email</Link>
                </div>
                <div className='phone'>
                    <Link to="/contact/phone">Phone</Link>
                </div>
                <div className='note'>
                    <Link to="/contact/note">Secret</Link>
                </div>
            </div>
        </div>
    )
}

export { Cart, About, Contact };