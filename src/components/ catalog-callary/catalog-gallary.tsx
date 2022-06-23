import React from "react";
import ReactDOM from "react-dom"
import './catalog-gallary.scss';

function CatalogGallary(): JSX.Element {
  return (
    <div className="gallery">
      <div className="gallery__filter">
        <div className="gallery__filter-dropdown">
          <h1 className="gallery__filter-title">Filter by</h1>
          <ul className="gallery__filter-menu">
            <li className="gallery__filter-item"><a className="gallery__filter-link" href="#">1</a></li>
            <li className="gallery__filter-item"><a className="gallery__filter-link" href="#">2</a></li>
            <li className="gallery__filter-item"><a className="gallery__filter-link" href="#">3</a></li>
          </ul>
        </div>
      </div>
      <ul className="gallery__cards">
        <li className="gallery__card">
          <img className="gallery__card-photo" src="./assets/jacket$40.jpg"
               srcSet="./assets/jacket$40.jpg 1x, ./assets/jacket$40_2x.jpg 2x "
               width="243" height="270" alt="jacket for 40$"/>
          <span className="gallery__card-name">Jacket</span>
          <span className="gallery__card-price">$40</span>
        </li>
        <li className="gallery__card">
          <img className="gallery__card-photo" src="./assets/jacket$70.jpg"
               srcSet="./assets/jacket$70.jpg 1x, ./assets/jacket$70_2x.jpg 2x "
               width="243" height="270" alt="jacket for 70$"/>
          <span className="gallery__card-name">Jacket</span>
          <span className="gallery__card-price">$70</span>
        </li>
        <li className="gallery__card">
          <img className="gallery__card-photo" src="./assets/jacket$60.jpg"
               srcSet="./assets/jacket$60.jpg 1x, ./assets/jacket$60_2x.jpg 2x "
               width="243" height="270" alt="jacket for 60$"/>
          <span className="gallery__card-name">Jacket</span>
          <span className="gallery__card-price">$60</span>
        </li>
        <li className="gallery__card">
          <img className="gallery__card-photo" src="./assets/jacket$50.jpg"
               srcSet="./assets/jacket$50.jpg 1x, ./assets/jacket$50_2x.jpg 2x "
               width="243" height="270" alt="jacket for 50$"/>
          <span className="gallery__card-name">Jacket</span>
          <span className="gallery__card-price">$50</span>
        </li>
        <li className="gallery__card">
          <img className="gallery__card-photo" src="./assets/jacket$41.jpg"
               srcSet="./assets/jacket$41.jpg 1x, ./assets/jacket$41_2x.jpg 2x "
               width="243" height="270" alt="jacket for 41$"/>
          <span className="gallery__card-name">Jacket</span>
          <span className="gallery__card-price">$41</span>
        </li>
        <li className="gallery__card">
          <img className="gallery__card-photo" src="./assets/jacket$1100.jpg"
               srcSet="./assets/jacket$110.jpg 1x, ./assets/jacket$110_2x.jpg 2x "
               width="243" height="270" alt="jacket for 110$"/>
          <span className="gallery__card-name">Jacket</span>
          <span className="gallery__card-price">$110</span>
        </li>
        <li className="gallery__card">
          <img className="gallery__card-photo" src="./assets/jacket$35.jpg"
               srcSet="./assets/jacket$35.jpg 1x, ./assets/jacket$35_2x.jpg 2x "
               width="243" height="270" alt="jacket for 35$"/>
          <span className="gallery__card-name">Jacket</span>
          <span className="gallery__card-price">$35</span>/
        </li>
        <li className="gallery__card">
          <img className="gallery__card-photo" src="./assets/jacket$85.jpg"
               srcSet="./assets/jacket$85.jpg 1x, ./assets/jacket$85_2x.jpg 2x "
               width="243" height="270" alt="jacket for 85$"/>
          <span className="gallery__card-name">Jacket</span>
          <span className="gallery__card-price">$85</span>
        </li>
      </ul>
      <div className="gallery__buttons">
        <p className="gallery__buttons-text">Showing 9 of 45 items</p>
        <div className="gallery__buttons-scale">
          <div className="gallery__buttons-bar"></div>
        </div>
        <button className="gallery__button" type="button">Load more</button>
      </div>
    </div>
  )
}

export default CatalogGallary
