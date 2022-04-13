import React from "react";
import "./CountStdInfo.css";
import "./Count.js";


function Details() {
  return (
    <div><link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="jumbotron ">
        <legend className="text-center">Our Students</legend>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-3 col-sm-6">
            <div className="counter">
              <div className="counter-icon">
                <i className="fa fa-globe"></i>
              </div>
              <h3>Web Designing</h3>
              <span className="counter-value">203</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counter blue">
              <div className="counter-icon">
                <i className="fa fa-rocket"></i>
              </div>
              <h3>Web Development</h3>
              <span className="counter-value">100</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counter green">
              <div className="counter-icon">
              <i className="fa fa-rocket"></i>
              </div>
              <h3>Core Java</h3>
              <span className="counter-value">500</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counter black">
              <div className="counter-icon">
              <i className="fa fa-rocket"></i>
              </div>
              <h3>Advance Java</h3>
              <span className="counter-value">191</span>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Details;
