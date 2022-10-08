import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
  return `
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
