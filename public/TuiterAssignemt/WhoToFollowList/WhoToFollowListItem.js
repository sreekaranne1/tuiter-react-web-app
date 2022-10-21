const WhoToFollowListItem = (who) => {
  return `<a
  href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
  class="list-group-item list-group-item-action"
>
  <div class="row">
    <div class="col-2">
      <img
        src=${who.avatarIcon}
        alt=""
        class="rounded-circle mt-1"
        height="35px"
        width="35px"
      />
    </div>
    <div class="col-8 col-lg-6">
      <div class="fw-bolder">
        ${who.userName}
        <i class="fa-solid fa-circle-check"></i>
      </div>
      <div class="text-secondary">@${who.handle}</div>
    </div>
    <div class="col-3 col-lg-4">
      <button class="btn btn-primary w-100 mt-1 rounded-pill">
        Follow
      </button>
    </div>
  </div></a
>`;
};
export default WhoToFollowListItem;
