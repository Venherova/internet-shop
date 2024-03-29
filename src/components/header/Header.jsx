import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import Search from '../search/Search';
import CartSvg from '../../assets/images/icons/cart.svg';

import './Header.css';

function Header() {
  // const cartItems = useSelector((state) => state.cart.items);
  // const cartItemCount = cartItems.reduce((count, item) => count + item.itemQuantity, 0);
  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <NavLink to="/">SHOP.CO</NavLink>
          </div>
          <nav className="header_nav">
            <div className="header_nav-main">
              <ul>
                <li>
                  <NavLink to="/products?isSale=true">On Sale</NavLink>
                </li>
                <li>
                  <NavLink to="/products?isNew=true">New Arrivals</NavLink>
                </li>
                <li>
                  <NavLink to="/brands">Brands</NavLink>
                </li>
              </ul>
            </div>
            <Search />
            <div className="header_nav-profile">
              <ul>
                <li>
                  <div className="cart-icon">
                    <NavLink to="/cart">
                      <img src={CartSvg} alt="Cart" />
                      {/* {cartItemCount > 0 && <span className="cart-counter">{cartItemCount}</span>} */}
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
