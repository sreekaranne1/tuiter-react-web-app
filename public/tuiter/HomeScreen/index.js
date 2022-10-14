import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import HomeScreenList from "./HomeScreenList.js";
function exploreComponent() {
  $("#wd-explore").append(`
   <div class="row mt-2">
    <div class="col-2 col-md-2 col-lg-1 col-xl-2 ">
    <!--<h3>Navigation Sidebar</h3>-->
   ${NavigationSidebar('lists')}
    </div>
    <div class="col-10 col-lg-7 col-xl-6">
     <!--<h3>ExploreComponent</h3>-->
     ${HomeScreenList()}
     
    </div>
    <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    <!--<h3>WhoToFollowList </h3>-->
    ${PostSummaryList()}
    </div>
   </div>
    `);
    $(`.${page}`).addClass('active');
}
$(exploreComponent);
