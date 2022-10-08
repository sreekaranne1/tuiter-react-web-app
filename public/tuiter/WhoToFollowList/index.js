import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
  return `
  <div class="list-group wd-rounded">
  <a
    href="https://en.wikipedia.org/wiki/Dune_(novel)"
    class="list-group-item list-group-item-action text-white fw-bolder "
  >
    Who to follow</a
  >
  ${who
    .map((i) => {
      return WhoToFollowListItem(i);
    })
    .join("")}
  </div>
`;
};
export default WhoToFollowList;
