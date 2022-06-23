import React from "react";
import ReactDOM from "react-dom"
import './card-preview.scss';

function CardPreview():JSX.Element{
  return (
    <div className="bestsellers">
      <div className="bestsellers__header">
        <span className="bestsellers__header-title">Bestsellers</span>
        <a className="bestsellers__header-link" href="#">View all</a>
      </div>
      <ul className="bestsellers__cards">
        <li className="bestsellers__card">
          <img className="bestsellers__card-photo" src="./assets/jacket.jpg"
               srcSet="./assets/jacket.jpg 1x, ./assets/jacket2x.jpg 2x "
               width="270" height="349" alt="oy in jacket"/>
            <span className="bestsellers__card-name">Jacket</span>
            <span className="bestsellers__card-price">$120</span>
        </li>
        <li className="bestsellers__card">
          <img className="bestsellers__card-photo" src="./assets/overalls140.jpg"
               srcSet="./assets/overalls140.jpg 1x, ./assets/overalls1402x.jpg 2x "
               width="270" height="349" alt="Overall for 140$"/>
            <span className="bestsellers__card-name">Overalls</span>
            <span className="bestsellers__card-price">$140</span>
        </li>
        <li className="bestsellers__card">
          <img className="bestsellers__card-photo" src="./assets/jacket-woman.jpg"
               srcSet="./assets/jacket-woman.jpg 1x, ./assets/jacket-woman2x.jpg 2x "
               width="270" height="349" alt="Girl in jacket"/>
            <span className="bestsellers__card-name">Jacket</span>
            <span className="bestsellers__card-price">$90</span>
        </li>
        <li className="bestsellers__card">
          <img className="bestsellers__card-photo" src="./assets/overalls180.jpg"
               srcSet="./assets/overalls180.jpg 1x, ./assets/overalls1802x.jpg 2x "
               width="270" height="349" alt="Overall for 180$"/>
            <span className="bestsellers__card-name">Overalls</span>
            <span className="bestsellers__card-price">$160</span>
        </li>
      </ul>
    </div>
)
}

export default CardPreview;
