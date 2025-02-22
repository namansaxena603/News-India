import React from "react";

function Newsitem(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="container h-100">
      <div className="card shadow-lg bg-body-tertiary my-5">
        <span
          className="position-absolute top-0 translate middle badge rounded-pill bg-danger"
          style={{ right: "0px", zIndex: 1 }}
        >
          source: {source}
        </span>
        <img
          src={imageUrl}
          className="card-img-top"
          style={{ width: "auto", height: "15rem" }}
          alt="Loading..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <hr />
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-secondary rounded-pill"
          >
            <b>Read More</b>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsitem;
