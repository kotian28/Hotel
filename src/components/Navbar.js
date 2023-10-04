import React,{useRef} from 'react'
import Logo from "../assets/logo.png";
import {cart} from "../assets/Data";

const Navbar = () => {
    const searchRef = useRef();
    const cartRef = useRef();
    const navbarRef = useRef();

    const searchHandler = () => {
      searchRef.current.classList.toggle("active");
      cartRef.current.classList.remove("active");
      navbarRef.current.classList.remove("active");
    };

    const cartHandler = () => {
      cartRef.current.classList.toggle("active");
      searchRef.current.classList.remove("active");
      navbarRef.current.classList.remove("active");
    };

    const navbarHandler = () => {
        navbarRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        cartRef.current.classList.remove("active");
      };

    return (
        <>
            <header className='header'>
                <a href='#' className='logo'>
                <img src={Logo} alt="" />
                </a>
                <nav className='navbar' ref={navbarRef}>
                    <a href='#home'>Home</a>
                    <a href='#AboutUs'>AboutUs</a>
                    <a href='#Menu'>Menu</a>
                    <a href='#Review'>Review</a>
                    <a href='#Contact'>Contact</a>
                    <a href='#Blogs'>Blogs</a>
                </nav>
                <div className='icons'>                                       {/*fontawesome links for icons usage */}
                    <div className='fas fa-search' onClick={searchHandler}></div>
                    <div className='fas fa-shopping-cart' onClick={cartHandler}></div>
                    <div className='fas fa-bars' id ="menu-btn" onClick={navbarHandler}></div>
                </div>
                <div className='search-form active' ref={searchRef}>
                    <input type="search" placeholder="search here" id="search-box"/>
                    <label htmlFor='search-box' className='fas fa-search'></label>
                </div>
                <div className='cart-items-container' ref={cartRef}>
                {cart.map((item,index) => (
                        <div className='cart-item' key={index} >
                            <span className='fas fa-times'></span>
                            <img src={item.img} alt=""/>
                            <div className='content'> 
                                <h3>cart item 01</h3>
                                <div className='price'>$15.99/-</div>
                            </div>
                        </div>
                    ))}
                <a href="#" className='btn'>checkout now</a>
                </div>
            </header>
        </>
    );
};

export default Navbar;
