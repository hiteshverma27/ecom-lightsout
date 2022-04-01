import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";

function Navigation() {
  const { cart, wishlist } = useCart();
  return (
    <nav
      className="w-100vw flex-space_between-center px-10 py-1 bg-white"
      id="nav"
    >
      <Link to={"/"}>
        <h2>LightsOut</h2>
      </Link>
      <ul className="flex-space_between-center" id="nav-icons">
        <li className="mx-2">
          <Link to={"/"}>
            <button className="btn-primary-confirm">Login</button>
          </Link>
        </li>
        <li className="mx-2">
          <Link to={"/cart"} className="badge-btn">
            <span className="material-icons-outlined icon-s3 flex-center-center">
              shopping_cart
            </span>
            {cart.length ? (
              <span className="badge badge-red">
                {cart.length ? cart.length : null}
              </span>
            ) : null}
          </Link>
        </li>
        <li className="mx-2">
          <Link to={"/wishlist"}>
            <button className="badge-btn">
              <span className="material-icons-outlined icon-s3 flex-center-center">
                favorite_border
              </span>
              {wishlist.length ? (
                <span className="badge badge-red">
                  {wishlist.length ? wishlist.length : null}
                </span>
              ) : null}
            </button>
          </Link>
        </li>
        <li className="mx-2">
          <Link to={"/"}>
            <button className="badge-btn">
              <span className="material-icons-outlined icon-s3 flex-center-center">
                account_circle
              </span>
            </button>
          </Link>
        </li>
      </ul>
      <span className="material-icons icon-sm" id="menu-icon">
        menu
      </span>
    </nav>
  );
}

export { Navigation };
