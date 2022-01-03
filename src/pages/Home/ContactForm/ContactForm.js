import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-dark text-light">
        <div className="container py-5">
      <div>
        <h2 className="text-center text-light">Contact Us</h2>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 col-12">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Full name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email address"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Mobile Number"
            />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              placeholder="What's on your mind?"
              id="message"
              rows="6"
            ></textarea>
          </div>
          <div>
            <button
              style={{ fontSize: "1rem", textTransform: "capitalize" }}
              className="btn btn-primary"
            >
              Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
