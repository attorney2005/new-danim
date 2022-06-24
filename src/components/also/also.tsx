import React from "react";
import ReactDOM from "react-dom"
import './also.scss';

function Also(): JSX.Element {
  return (
    <div className="also">
      <div className="also__header">
        <h1 className="also__header-title">You may also like</h1>
        <a className="also__header-link" href="#">View all</a>
      </div>
      <ul className="also__cards">
        <li className="also__card">
          <img className="also__card-photo" src="./assets/overalls140.jpg"
               srcSet="./assets/overalls140.jpg 1x, ./assets/overalls140_2x.jpg 2x "
               width="270" height="349" alt="Girl in overall"/>
            <span className="also__card-name">Overalls</span>
            <span className="also__card-price">$140</span>
        </li>
        <li className="also__card">
          <img className="also__card-photo" src="./assets/overalls110.jpg"
               srcSet="./assets/overalls110.jpg 1x, ./assets/overalls110_2x.jpg 2x "
               width="270" height="349" alt="Overall for 110$"/>
            <span className="also__card-name">Overalls</span>
            <span className="also__card-price">$110</span>
        </li>
        <li className="also__card">
          <img className="also__card-photo" src="./assets/jacket70.jpg"
               srcSet="./assets/jacket70.jpg 1x, ./assets/jacket70_2x.jpg 2x "
               width="270" height="349" alt="Girl in jacket"/>
            <span className="also__card-name">Jacket</span>
            <span className="also__card-price">$70</span>
        </li>
        <li className="also__card">
          <img className="also__card-photo" src="./assets/jacket60.jpg"
               srcSet="./assets/jacket60.jpg 1x, ./assets/jacket60_2x.jpg 2x "
               width="270" height="349" alt="Jacket for 60$"/>
            <span className="also__card-name">Jacket</span>
            <span className="also__card-price">$60</span>
        </li>
      </ul>
    </div>
)
}

export default Also
