import React from "react";
import ReactDOM from "react-dom"
import './catalog-collection.scss';

function CatalogCollection():JSX.Element{
  return (
    <div className="wrapper">
      <div className="collection__blocks">
        <div className="collection__block-text">
          <ul className="collection__menu">
            <li className="collection__menu-item"><a className="collection__menu-link" href="#">All categories</a></li>
            <li className="collection__menu-item"><a className="collection__menu-link" href="#">Woman</a></li>
            <li className="collection__menu-item"><a
              className="collection__menu-link collection__menu-link-blocked collection__menu-link" href="#">Jackets</a>
            </li>
          </ul>
          <div>
            <h1 className="collection__title">Denim Collection <br/> Fall 2019</h1>
          </div>
        </div>

        <div className="collection__block-photo">
          <img className="collection__block-photo-img" src="./assets/pocket.jpg"
               srcSet="./assets/pocket.jpg 1x, ./assets/pocket2x.jpg 2x "
               width="299" height="260" alt="Jeans pocket"/>
        </div>
      </div>
    </div>
    )
  }

  export default CatalogCollection
