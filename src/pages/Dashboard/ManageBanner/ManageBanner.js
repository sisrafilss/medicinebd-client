import React from "react";
import { useForm } from "react-hook-form";
import SingleBanner from "./SingleBanner";

const bannerData = [
  {
    _id: 1,
    title: "Taking Good Care Of Yourself",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius adipisci quae dolorum in molestiae corrupti.",
    image: "https://macy.7uptheme.net/wp-content/uploads/2019/09/a1.jpg",
  },
  {
    _id: 2,
    title: "Taking Good Care Of Yourself",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius adipisci quae dolorum in molestiae corrupti.",
    image: "https://macy.7uptheme.net/wp-content/uploads/2019/09/a2.jpg",
  },
  {
    _id: 3,
    title: "Taking Good Care Of Yourself",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius adipisci quae dolorum in molestiae corrupti.",
    image: "https://macy.7uptheme.net/wp-content/uploads/2019/09/a3.jpg",
  },
];

const ManageBanner = () => {
  let slideNumber = 0;

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
    <div>
      <div className="mb-4">
        <h2 className="text-center">Manage Slides</h2>
      </div>
      <div className="container">
        <div className="row g-4">
          {bannerData.map((banner) => (
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
            data-bs-target="#exampleModal"
          >
            {" "}
            <i class="fa fa-plus"></i> Add Slide
          </button>
        </div>
      </div>

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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBanner;
