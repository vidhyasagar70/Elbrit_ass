import React from 'react';
import './Ingredients.css';

const Ingredients = () => {
  const items = [
    { image:'/images/in1.png' },
    { image:'/images/in2.png' },
    { image: '/images/in3.png' },
    { image: '/images/in4.png' },
    { image: '/images/in5.png' },
    { image: '/images/in6.png' },
    { image: '/images/in7.png' },
  ];

  return (
    <section className="ingredients">
      <div className="container">
        <div className="grid first-row">
          {items.slice(0, 3).map((item, index) => (
            <div key={index} className="ingredient-item">
              <div className="img-container">
                <img src={item.image} alt={`Ingredient ${index + 1}`} className="ingredient-img" />
              </div>
              <button>See More</button>
            </div>
          ))}
        </div>
        <div className="grid second-row">
          {items.slice(3).map((item, index) => (
            <div key={index} className="ingredient-item">
              <div className="img-container">
                <img src={item.image} alt={`Ingredient ${index + 4}`} className="ingredient-img" />
              </div>
              <button>See More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
