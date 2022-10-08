import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
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
          <a class="nav-link  active" href="#">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1"
            >Sports</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block "
            href="#"
            tabindex="-1"
            ><span class="wd-high text-white">Entertainment</span></a
          >
        </li>
      </ul>
    
      <div class="position-relative">
        <img
          src="../../../tuiter/starship1.png"
          alt="StarShip"
          width="100%"
        />
        <div class="position-absolute bottom-0 left-0 ps-2">
          <div class="text-white">Music . Last night</div>
          <h2 class="text-white">SpaceX's Starship</h2>
        </div>
      </div>
      <ul class="list-group">
      ${post
        .map((i) => {
          return PostSummaryItem(i);
        })
        .join("")}
      </ul>
    `;
};
export default PostSummaryList;
