import React from "react";

var Feedback = () => {
  return (
    <div className="jumbotron">
      <h3>Feedback Request</h3>
      <div>
        <h3>Your opinion matters</h3>
        <h5>
          Help us improve our product? <strong>Give us your feedback.</strong>
        </h5>
        <hr />
        <h6>Your Rating</h6>
      </div>
      <div className="form-check mb-4">
        {" "}
        <input name="feedback" type="radio" />{" "}
        <label className="ml-3">Very good</label>{" "}
      </div>
      <div className="form-check mb-4">
        {" "}
        <input name="feedback" type="radio" />{" "}
        <label className="ml-3">Good</label>{" "}
      </div>
      <div className="form-check mb-4">
        {" "}
        <input name="feedback" type="radio" />{" "}
        <label className="ml-3">Mediocre</label>
      </div>
      <div className="form-check mb-4">
        {" "}
        <input name="feedback" type="radio" />{" "}
        <label className="ml-3">Bad</label>{" "}
      </div>
      <div className="form-check mb-4">
        {" "}
        <input name="feedback" type="radio" />{" "}
        <label className="ml-3">Very Bad</label>{" "}
      </div>

      <div className="text-center">
        <h4>What could we improve?</h4>
      </div>
      <textarea type="textarea" placeholder="Your Message" rows="3"></textarea>
      <div>
        {" "}
        <a href="#" className="btn btn-primary">
          Send{" "}
        </a>{" "}
        <a href="" className="btn btn-outline-primary">
          Cancel
        </a>{" "}
      </div>
    </div>
  );
};
export default Feedback;
