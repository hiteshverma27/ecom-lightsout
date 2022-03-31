import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../contexts";

function Navigation() {
  const { cart } = useCart();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav
      className="w-100vw flex-space_between-center px-10 py-1 bg-white"
      id="nav"
    >
      <Link to={"/"}>
        <h2>LightsOut</h2>
      </Link>
      {/* <input
        type="search"
        className="input w-40per"
        placeholder="Search LightsOut"
        id="search-bar-nav"
      /> */}
      <ul className="flex-space_between-center" id="nav-icons">
        <li className="mx-2">
          <a href="/Pages/login.html">
            <button className="btn-primary-confirm">Login</button>
          </a>
        </li>
        <li className="mx-2">
          <Link to={"/cart"} className="badge-btn">
            <span className="material-icons-outlined icon-s3 flex-center-center">
              shopping_cart
            </span>
            {cart.length ? (
              <span
                className="badge badge-red"
                style={{ height: "70%", width: "70%" }}
              >
                {cart.length ? cart.length : null}
              </span>
            ) : null}
          </Link>
        </li>
        <li className="mx-2">
          <a href="/Pages/wishlist.html">
            <button className="badge-btn">
              <span className="material-icons-outlined icon-s3 flex-center-center">
                favorite_border
              </span>
              <span className="badge badge-red"></span>
            </button>
          </a>
        </li>
        <li className="mx-2">
          <a href="/Pages/login.html">
            <button className="badge-btn">
              <span className="material-icons-outlined icon-s3 flex-center-center">
                account_circle
              </span>
            </button>
          </a>
        </li>
      </ul>
      <span className="material-icons icon-sm" id="menu-icon">
        menu
      </span>
    </nav>
  );
}

export { Navigation };
