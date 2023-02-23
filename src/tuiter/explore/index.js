import React from "react";
import {Link} from "react-router-dom";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
  return(
    <>
      <div className="row">
        <div className="col-11 position-relative">
          <input placeholder="Search Tuiter"
                 className="form-control rounded-pill ps-5"/>
          <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
        </div>
        <div className="col-1">
          <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
        </div>
      </div>
      <ul className="nav nav-pills mb-2">
        <li className="nav-item">
          <Link to={"for-you"} className="nav-link active">For You</Link>
        </li>
        <li className="nav-item">
          <Link to={"trending"} className="nav-link">Trending</Link>
        </li>
        <li className="nav-item">
          <Link to={"news"} className="nav-link">News</Link>
        </li>
        <li className="nav-item">
          <Link to={"sports"} className="nav-link">Sports</Link>
        </li>
        <li className="nav-item d-none d-md-inline-block">
          <Link to={"entertainment"} className="nav-link">
            Entertainment</Link>
        </li>
      </ul>
      <div className="position-relative mb-2">
        <img src="/images/spacex-starship-mk1.webp" className="w-100" alt={"spaceship"}/>
        <h1 className="position-absolute wd-nudge-up text-white">
          SpaceX Starship</h1>
      </div>
      <PostSummaryList/>
    </>
  );
};
export default ExploreComponent;