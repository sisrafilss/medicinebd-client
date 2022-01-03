import React from "react";
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
          <button className="btn btn-lg btn-primary">
            {" "}
            <i class="fa fa-plus"></i> Add Slide
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageBanner;
