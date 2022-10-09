const HomeScreenItem = (post) => {
  return `<li class="list-group-item wd-backcolor">
    <div class="row">
      <div class="col-1">
        <img
          src=${post.image}
          class="rounded-circle"
          height="48px"
          width="48px"
        />
      </div>
      <div class="col-11">
        <div class="ms-2 text-white fs-6">
          <div>
            ${post.userName}
            <i class="fa-solid fa-circle-check"> </i>
            <span class="text-secondary fs-6">@${post.handle} . ${post.time}</span>
            <i class="fa-solid fa-ellipsis wd-grey float-end"></i>
          </div>
          <div class="mb-3">
            ${post.tuit}
          </div>
          <ul class="list-group rounded">
            <li class="list-group-item wd-img wd-backcolor">
              <img
                src=${post.image2}
                width="100%"
                alt="iphone"
                class=""
              />
            </li>
            <li class="list-group-item wd-backcolor">
              <div class="text-white">
                ${post.content1}
              </div>
              <div class="text-secondary">
                ${post.content2}
              </div>
            </li>
          </ul>
          <div class="row mt-2 text-secondary">
            <div class="col">
              <i class="fa-regular fa-comment"></i>
              <span class="">${post.comments}</span>
            </div>
            <div class="col">
              <i class="fa-solid fa-retweet"></i
              > <span class="">${post.retweets}</span>
            </div>
            <div class="col">
              <i class="fa-solid fa-heart"></i
              > <span class="wd-content">${post.likes}</span>
            </div>
            <div class="col">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};
export default HomeScreenItem;
