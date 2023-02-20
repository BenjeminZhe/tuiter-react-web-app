import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
      <div class="row mx-0">
          <div class="col-11 px-0">
              <label for="search" class="form-label w-100">
              <div class="input-group">
                      <span class="input-group-text bg-white border-end-0 rounded-end rounded-pill">
                          <i class="fas fa-search text-dark"></i>
                      </span>
                  <input class="form-control border-start-0 rounded-start rounded-pill"
                         placeholder="Search Twitter"
                         id="search">
              </div>
              </label>
          </div>
          <div class="col-1">
              <a href="explore-settings.html" class="d-inline"><i class="fas fa-cog fa-2x"></i></a>
          </div>
      </div>
      <ul class="nav nav-tabs">
          <li class="nav-item">
              <a class="nav-link active" href="#">
                  For you</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">
                  Trending</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">
                  News</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">
                  Sports</a>
          </li>
          <li class="nav-item d-none d-md-inline-block">
              <a class="nav-link" href="#">
                  Entertainment</a>
          </li>
      </ul>
      <div class="position-relative mt-2">
          <img src="../../images/spacex-starship-mk1.webp" class="card-img" alt="...">
          <h2 class="position-absolute text-white bottom-0 ps-2">SpaceX's Starship</h2>
      </div>
      ${PostSummaryList()}
  `);
}

export default ExploreComponent;