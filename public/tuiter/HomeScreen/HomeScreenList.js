import posts from "./posts.js";
import HomeScreenItem from "./HomeScreenItem.js";
const HomeScreenList = () => {
  return `
  <ul class="list-group ">
      ${posts
        .map((i) => {
          return HomeScreenItem(i);
        })
        .join("")}
     </ul>
    `;
};
export default HomeScreenList;
