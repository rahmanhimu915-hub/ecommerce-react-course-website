import { Link } from "react-router-dom";

/**
 * Renders the ShopHub brand and links to the home, checkout, and authentication pages.
 * @returns {import('react').ReactElement} The storefront navigation bar.
 */
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    ShopHub
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-links">Home</Link>
                    <Link to="/checkout" className="navbar-links">Checkout</Link>
                </div>
                <div className="navbar-auth">
                    <div className="navbar-auth-links">
                        <Link to="/auth" className="btn btn-secondary">Log In</Link>
                        <Link to="/auth" className="btn btn-primary">Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}