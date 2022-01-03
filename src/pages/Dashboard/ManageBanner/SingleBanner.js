import React from "react";

const SingleBanner = ({ banner, slideNumber }) => {
  const { title, image, description } = banner;

  return (
    <div className="col-md-4">
      <div className="card">
        <h3 className="h3 text-center card-header">Slide {slideNumber}</h3>
        <div>
          <img src={image} class="img-fluid rounded-start h-100" alt="..." />
        </div>

        <div class="card-body">
          <h5 class="card-title">
            Title: <span className="text-normal">{title}</span>
          </h5>
          <p class="card-text">{description}</p>
        </div>
        <div class="card-footer">
          <div className="row">
            <div className="col-6">
              <div class="d-grid gap-2">
                <button class="btn btn-outline-primary" type="button">
                  Edit
                </button>
              </div>
            </div>
            <div className="col-6">
              <div class="d-grid gap-2">
                <button class="btn btn-outline-danger" type="button">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBanner;
