import "../style.css";
import React, { Component } from "react";
import { Fragment } from "react";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-10 pt-3">
          <div className="d-flex justify-content-between">
            <img
              className="mr-2 mt-1 ml-4"
              height="30"
              src="https://www.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
              alt=""
            />
            <h4 className="mt-1">MyKantin</h4>
            <div className="input-group mb-3 pl-5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <img
                    height="20"
                    src="https://www.pngfind.com/pngs/m/104-1043692_search-icon-transparent-white-search-icon-apple-png.png"
                    alt=""
                  />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Cari Makanan Bang?"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
        <div className="col-2 bg-light pt-3 d-flex justify-content-around">
          <img
            className="mt-1"
            height="30"
            src="https://www.iconfinder.com/data/icons/pittogrammi/142/80-512.png"
            alt=""
          />
          <div className="bg-warning mb-4 rounded-circle px-3 py-2 pt-1">3</div>
          <img
            className="mt-1"
            height="30"
            src="https://www.flaticon.com/svg/static/icons/svg/848/848043.svg"
            alt=""
          />
        </div>
      </Fragment>
    );
  }
}

export default Navigation;
