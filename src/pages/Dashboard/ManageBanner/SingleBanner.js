import React from "react";
import { useForm } from "react-hook-form";

const SingleBanner = ({ banner, slideNumber }) => {
  const { title, image, description } = banner;

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { category, name, description, image, price } = data;
    const product = {
      category,
      name,
      image,
      price,
      description: description.split("\n"),
    };
    console.log(product);
    //   dispatch(addRentFlat(saleFlatInfo));

    if (true) {
      alert("Product Added Successfully");
      reset();
    }
  };

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
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
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

      {/*Modal for Edit Slide  */}
      <div
        class="modal fade mt-5"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Slide
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Slide Title"
                    {...register("title", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">
                      Please enter a short title
                    </span>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter a short description"
                    {...register("description", { required: true })}
                  ></textarea>
                  {errors.description && (
                    <span className="text-danger">
                      Please enter a short description
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <span className="mb-2 d-inline-block">Upload Image</span>
                  <div class="input-group mb-4">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                      {...register("image", { required: true })}
                    />
                    <label class="input-group-text" htmlFor="inputGroupFile02">
                      Upload
                    </label>
                  </div>
                  {errors.image && (
                    <span className="text-danger">Please choose an image</span>
                  )}
                </div>

                <input
                  type="submit"
                  className="btn btn-primary fw-bold ml-auto"
                  value="Update"
                />

                <button
                  type="button"
                  class="btn btn-secondary ms-3"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBanner;
