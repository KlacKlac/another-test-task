import React, { useState } from 'react'

export function Constructor() {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [typeOfImage, setTypeOfImage] = useState('warm');
  const [imageNumber, setImageNumber] = useState(1);

  return (
    <section className="constructor">
      {visiblePopup &&
        <div className="constructor__popup">
          <div className="constructor__popup-btn"
            onClick={() => setVisiblePopup(false)}>
            &#8592; Вернуться
          </div>
          <div className="constructor__popup-text">
            <p className="constructor__popup-paragraph">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых, снова даль! Ipsum, свой это его буквоград вопроса скатился собрал деревни которое, гор рыбными себя, прямо путь на берегу. Обеспечивает алфавит большого рекламных но курсивных реторический необходимыми даже подпоясал, власти оксмокс маленький! Но знаках, рыбного силуэт последний родного повстречался продолжил!</p>
            <p className="constructor__popup-paragraph">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых, снова даль! Ipsum, свой это его буквоград вопроса скатился собрал деревни которое, гор рыбными себя, прямо путь на берегу. Обеспечивает алфавит большого рекламных но курсивных реторический необходимыми даже подпоясал, власти оксмокс маленький! Но знаках, рыбного силуэт последний родного повстречался продолжил!</p>
            <p className="constructor__popup-paragraph">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых, снова даль! Ipsum, свой это его буквоград вопроса скатился собрал деревни которое, гор рыбными себя, прямо путь на берегу. Обеспечивает алфавит большого рекламных но курсивных реторический необходимыми даже подпоясал, власти оксмокс маленький! Но знаках, рыбного силуэт последний родного повстречался продолжил!</p>
            <p className="constructor__popup-paragraph">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых, снова даль! Ipsum, свой это его буквоград вопроса скатился собрал деревни которое, гор рыбными себя, прямо путь на берегу. Обеспечивает алфавит большого рекламных но курсивных реторический необходимыми даже подпоясал, власти оксмокс маленький! Но знаках, рыбного силуэт последний родного повстречался продолжил!</p>
            <p className="constructor__popup-paragraph">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых, снова даль! Ipsum, свой это его буквоград вопроса скатился собрал деревни которое, гор рыбными себя, прямо путь на берегу. Обеспечивает алфавит большого рекламных но курсивных реторический необходимыми даже подпоясал, власти оксмокс маленький! Но знаках, рыбного силуэт последний родного повстречался продолжил!</p>
            <p className="constructor__popup-paragraph">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых, снова даль! Ipsum, свой это его буквоград вопроса скатился собрал деревни которое, гор рыбными себя, прямо путь на берегу. Обеспечивает алфавит большого рекламных но курсивных реторический необходимыми даже подпоясал, власти оксмокс маленький! Но знаках, рыбного силуэт последний родного повстречался продолжил!</p>
            <p className="constructor__popup-paragraph">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых, снова даль! Ipsum, свой это его буквоград вопроса скатился собрал деревни которое, гор рыбными себя, прямо путь на берегу. Обеспечивает алфавит большого рекламных но курсивных реторический необходимыми даже подпоясал, власти оксмокс маленький! Но знаках, рыбного силуэт последний родного повстречался продолжил!</p>
            <p className="constructor__popup-paragraph">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых, снова даль! Ipsum, свой это его буквоград вопроса скатился собрал деревни которое, гор рыбными себя, прямо путь на берегу. Обеспечивает алфавит большого рекламных но курсивных реторический необходимыми даже подпоясал, власти оксмокс маленький! Но знаках, рыбного силуэт последний родного повстречался продолжил!</p>
          </div>
        </div>
      }
      <div className="constructor__image-block">
        <img
          className="constructor__main-img"
          src={require(`../img/${typeOfImage}-${imageNumber}.jpg`)}
          alt="sample of lighting" />
        <div className="constructor__nav-buttons">
          <div
            className={`constructor__nav-btn ${imageNumber === 1 ? 'constructor__nav-btn_active' : ''}`}
            onClick={() => setImageNumber(1)}></div>
          <div
            className={`constructor__nav-btn ${imageNumber === 2 ? 'constructor__nav-btn_active' : ''}`}
            onClick={() => setImageNumber(2)}></div>
          <div
            className={`constructor__nav-btn ${imageNumber === 3 ? 'constructor__nav-btn_active' : ''}`}
            onClick={() => setImageNumber(3)}></div>
        </div>
      </div>
      <div className="constructor__description-block">
        <div className="constructor__text">
          <div className="constructor__text-holder">
            <span className="constructor__text-title">Класс:</span>
            <span className="constructor__text-value constructor__text-value_special">Standart</span>
          </div>
          <div className="constructor__text-holder">
            <span className="constructor__text-title">Потребляемая мощность:</span>
            <span className="constructor__text-value">59 Вт.</span>
          </div>
          <div className="constructor__text-holder">
            <span className="constructor__text-title">Сила света:</span>
            <span className="constructor__text-value">3459 Люмен = 7,5 ламп накаливания по 40 Вт.</span>
          </div>
          <div className="constructor__text-holder">
            <span className="constructor__text-title">Гарантия:</span>
            <span className="constructor__text-value">3 года</span>
          </div>
          <div className="constructor__text-holder">
            <span className="constructor__text-title">Монтаж:</span>
            <span className="constructor__text-value">Да</span>
          </div>
          <div className="constructor__text-holder">
            <span className="constructor__text-title">Итого сумма:</span>
            <span className="constructor__text-value">2594 рублей</span>
          </div>
        </div>
        <div className="constructor__color-block">
          <div className="constructor__color-title">
            <div
              className="constructor__color-info-btn"
              onClick={() => setVisiblePopup(true)}>i</div>
            <p className="constructor__color-text">Выберите цвет свечения</p>
          </div>
          <div className="constructor__color-choice">
            <div
              className="constructor__color-option"
              onClick={() => setTypeOfImage('warm')}>
              {typeOfImage === 'warm' && <div className="constructor__color-checked">&#10003;</div>}
              <img
                src={require('../img/warm.jpg')}
                alt="choise-color"
                className='constructor__color-img' />
              <p className="constructor__color-desc">Теплый</p>
            </div>
            <div
              className="constructor__color-option"
              onClick={() => setTypeOfImage('day')}>
              {typeOfImage === 'day' && <div className="constructor__color-checked">&#10003;</div>}
              <img
                src={require('../img/day.jpg')}
                alt="choise-color"
                className='constructor__color-img' />
              <p className="constructor__color-desc">Дневной</p>
            </div>
            <div
              className="constructor__color-option"
              onClick={() => setTypeOfImage('cold')}>
              {typeOfImage === 'cold' && <div className="constructor__color-checked">&#10003;</div>}
              <img
                src={require('../img/cold.jpg')}
                alt="choise-color"
                className='constructor__color-img' />
              <p className="constructor__color-desc">Холодный</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}