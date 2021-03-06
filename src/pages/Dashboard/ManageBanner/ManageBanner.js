import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addBannerToDB,
  loadBanners,
  setBannerAdded,
} from "../../../store/adminDashboard";
import SingleBanner from "./SingleBanner";

const ManageBanner = () => {
  const dispatch = useDispatch();
  // Getting banners from store
  const banners = useSelector(
    (state) => state.entities.adminDashboard.banners.allBanner
  );
  const bannerAdded = useSelector(
    (state) => state.entities.adminDashboard.banners.bannreAdded
  );


  // Display success message for 5 seconds
  setTimeout(() => {
    dispatch(setBannerAdded({ status: false }));
  }, 5000);


  let slideNumber = 0;

  // Load Banners from Database
  useEffect(() => {
    dispatch(loadBanners());
  }, [bannerAdded]);

  // React Hook Form for add a slide
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { title, description, image } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image[0]);

    // Send banner data to DB
    dispatch(addBannerToDB(formData));

    reset();
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-center">Manage Slides</h2>
      </div>
      <div className="container">
        <div className="row g-4">
          {banners.map((banner) => (
            <SingleBanner
              key={banner._id}
              slideNumber={++slideNumber}
              banner={banner}
            />
          ))}
        </div>

        <div className="text-center mt-5">
          <button
            className="btn btn-lg btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#add-slide-form"
          >
            {" "}
            <i class="fa fa-plus"></i> Add Slide
          </button>
        </div>
      </div>

      {/*Modal for Add Slide  */}

      <div
        class="modal fade mt-5"
        id="add-slide-form"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Slide
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
                      accept="image/*"
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
                  value="Add"
                />

                <button
                  type="button"
                  class="btn btn-secondary ms-3"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </form>

              {bannerAdded && (
                <div class="alert alert-success mt-4" role="alert">
                  Slide Added Successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBanner;
