import React, { useEffect } from "react";
import "./Header.css";
import CarouselChild from "../CarouselChild/CarouselChild";
import { useDispatch, useSelector } from "react-redux";
import { loadBanners } from "../../store/userDashboard";
// import { loadBanners } from "../../store/adminDashboard";

const carouselData = [
  {
    title: "",
    description: "",
    pic: "https://macy.7uptheme.net/wp-content/uploads/2019/09/a1.jpg",
  },
  {
    title: "",
    description: "",
    pic: "https://macy.7uptheme.net/wp-content/uploads/2019/09/a2.jpg",
  },
  {
    title: "",
    description: "",
    pic: "https://macy.7uptheme.net/wp-content/uploads/2019/09/a3.jpg",
  },
];

const Header = () => {
  let slideCount = 1;
  const dispatch = useDispatch();
  const banners = useSelector(
    (state) => state.entities.userDashboard.banners.allBanner
  );

  useEffect(() => {
    dispatch(loadBanners());
  });

  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      {/* <div class="carousel-indicators">
      <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        {banners.map((slide) => (
          <button key={slide._id}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={slideCount++}
            class="active"
            aria-current="true"
            aria-label={`Slide ${++slideCount}`}
          ></button>
        ))}
      </div> */}
      <div class="carousel-inner">
        {banners.map((carousel, index) => (
          <CarouselChild
            key={carousel._id}
            active={index === 0 ? true : false}
            carousel={carousel}
          />
        ))}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Header;
