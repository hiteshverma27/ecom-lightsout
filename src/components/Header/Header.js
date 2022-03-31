import React from 'react'
import { Link } from 'react-router-dom';

 function Header() {
    return <header className="relative w-100vw">
      <input type="search" className="input w-100per m-auto flex-center-center" placeholder="Search LightsOut" id="search-mobile" />
      <img className="w-100per img-cover h-100vh " src="https://github.com/hiteshverma27/LightsOut-Store/blob/development/Assets/wallpaperflare.com_wallpaper%20(1).jpg?raw=true" alt="header-img" />
      <div className="center-div-method-2 header-text">
        <h1 className="w-100vw text-align-center">For the love of Formula 1</h1><br />
        <div className="m-auto flex-center-center shop-now-btn" href="/Pages/product.html">
          <Link to={"/products"} className="bg-accent p-2 mt-2 flex-center-center">Shop Now <span
            className="material-icons icon-s3">arrow_forward_ios</span></Link>
        </div>
      </div>
    </header>;
  }

  export {Header}