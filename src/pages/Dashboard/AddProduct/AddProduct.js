import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  // const dispatch = useDispatch();

  // Set page title
  // dispatch(setPageTitle({ title: "Add Rent Flat" }));

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
      <div className="form-container">
        <div>
          <h2 className="mb-4">Insert Product Detail</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <select
              class="form-select"
              aria-label="Default select example"
              {...register("category", { required: true })}
            >
              <option>Select Category</option>
              <option value="Baby and Mom Care">Baby and Mom Care</option>
              <option value="Harbal">Harbal</option>
              <option value="Harbal">Harbal</option>
            </select>
            {errors.category && (
              <span className="text-danger">Please select a category</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">Please enter a name</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter detail about product"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <span className="text-danger">Please enter a description</span>
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

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Price in integer value"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-danger">Price is mandatory</span>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-primary fw-bold"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
