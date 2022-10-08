import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
  return `
      <div class="row">
        <div class="col-11">
          <div class="position-relative">
            <input
              class="ps-5 form-control rounded-pill wd-border"
              placeholder="Search Tuiter"
            />
            <i
              class="fa-solid fa-magnifying-glass position-absolute wd-search-tuiter "
            ></i>
          </div>
        </div>
        <div class="col-1">
          <i
            class="fa-solid fa-gear fa-xl text-primary float-end pt-3 mt-1"
          ></i>
        </div>
      </div>
      <ul class="nav nav-tabs mt-1 mb-1 wd-flex">
        <li class="nav-item">
          <a class="nav-link  active" href="for-you.html">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="sports.html" tabindex="-1"
            >Sports</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block "
            href="entertainment.html"
            tabindex="-1"
            ><span class="wd-high text-white">Entertainment</span></a
          >
        </li>
      </ul>
    
      <div class="position-relative">
        <img
          src="../starship.jpg"
          alt="StarShip"
          width="100%"
        />
        <div class="position-absolute bottom-0 left-0 ps-2">
         
          <h2 class="text-white">SpaceX's Starship</h2>
        </div>
      </div>
      
      ${PostSummaryList()}
     
    `;
};
export default ExploreComponent;
