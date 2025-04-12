import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-logo">
         <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
         <h1>GeekFoods</h1>
      </div>
      <div className="header-list">
        <ul>
           <a href="#"><li>Home</li></a>
           <a href="#"><li>Quote</li></a>
           <a href="#"><li>Resturant</li></a>
           <a href="#"><li>Foods</li></a>
           <a href="#"><li>Contact</li></a>
        </ul>
      </div>
      <div className="header-btn">
        <button>Get started</button>
      </div>
    </div>
  )
}

export default Header
