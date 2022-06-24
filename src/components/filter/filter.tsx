import React from "react";
import ReactDOM from "react-dom"
import './filter.scss';

function Filter(): JSX.Element {
  return (
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
  )
}
