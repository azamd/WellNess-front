import React from "react";

const Reply = () => {
  return (
    <div className="reply-form">
      <h4>Leave a Reply</h4>
      <p>
        Your email address will not be published. Required fields are marked *{" "}
      </p>
      <form action="">
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Your Name*"
            />
          </div>
          <div className="col-md-6 form-group">
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="Your Email*"
            />
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <input
              name="website"
              type="text"
              className="form-control"
              placeholder="Your Website"
            />
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <textarea
              name="comment"
              className="form-control"
              placeholder="Your Comment*"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Post Comment
        </button>
      </form>
    </div>
  );
};
export default Reply;
