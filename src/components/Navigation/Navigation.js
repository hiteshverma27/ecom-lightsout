import React from 'react'

function Navigation() {
    return <nav className="w-100vw flex-space_between-center px-10 py-1 bg-white" id="nav">
        <a href="/index.html">
            <h2>LightsOut</h2>
        </a>
        <input type="search" className="input w-40per" placeholder="Search LightsOut" id="search-bar-nav" />
        <ul className="flex-space_between-center" id="nav-icons">
            <li className="mx-2">
                <a href="/Pages/login.html"><button className="btn-primary-confirm">Login</button></a>
            </li>
            <li className="mx-2">
                <a href="/Pages/cart-management.html"><button className="badge-btn">
                    <span
                        className="material-icons-outlined icon-s3 flex-center-center">shopping_cart</span></button></a>
            </li>
            <li className="mx-2">
                <a href="/Pages/wishlist.html"><button className="badge-btn">
                    <span className="material-icons-outlined icon-s3 flex-center-center">favorite_border</span><span
                        className="badge badge-red"></span>
                </button></a>
            </li>
            <li className="mx-2">
                <a href="/Pages/login.html"><button className="badge-btn">
                    <span className="material-icons-outlined icon-s3 flex-center-center">account_circle</span>
                </button></a>
            </li>
        </ul>
        <span className="material-icons icon-sm" id="menu-icon">menu</span>
    </nav>;
}

export {Navigation}