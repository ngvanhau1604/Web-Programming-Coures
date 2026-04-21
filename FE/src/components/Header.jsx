import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>e-commerce</h1>
                <p>Welcome to our e-commerce site!</p>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
