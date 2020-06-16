import React from 'react'

export function BottomMenu() {
  return (
    <div className="bottom-menu">
      <a href="#link" className="bottom-menu__item">Вариант кухни</a>
      <a href="#link" className="bottom-menu__item">Размеры</a>
      <a href="#link" className="bottom-menu__item">Сенсор</a>
      <a href="#link" className="bottom-menu__item">Питающий кабель</a>
      <a href="#link" className="bottom-menu__item">Блок питания</a>
      <a href="#link" className="bottom-menu__item bottom-menu__item_active">Цвет свечения</a>
      <a href="#link" className="bottom-menu__item">Монтаж</a>
      <a href="#link" className="bottom-menu__item">Корзина</a>
    </div>
  )
}