import React, { useState } from 'react'

export function Header() {
  const [visibleMenu, toggleVisibleMenu] = useState(false);

  return (
    <header className="header">
      <a href="#main" className="header__logo">Logo</a>
      <div className="header__icons">
        <a href="#link" className="header__cart">
          <img src={require('../img/cart.svg')} alt="cart" />
        </a>
        <div className={`header__burger ${visibleMenu ? 'header__burger_active' : ""}`}
          onClick={() => toggleVisibleMenu(!visibleMenu)}></div>
      </div>
      {visibleMenu &&
        <nav className="header__menu">
          <a href="#link" className="header__menu-item">Обучающее видео</a>
          <a href="#link" className="header__menu-item">Оформление заказа</a>
          <a href="#link" className="header__menu-item">Оплата</a>
          <a href="#link" className="header__menu-item">Доставка</a>
          <a href="#link" className="header__menu-item">Гарантия</a>
          <a href="#link" className="header__menu-item">Возврат</a>
          <a href="#link" className="header__menu-item">Контакты</a>
          <a href="#link" className="header__menu-item">Партнерам</a>
        </nav>
      }
    </header>
  )
}