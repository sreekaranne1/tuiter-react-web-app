const NavigationSidebar = () => {
  return `
  <div class="list-group ">
  <a
    href="https://en.wikipedia.org/wiki/Dune_(novel)"
    class="list-group-item list-group-item-action "
  >
    <i class="fa-brands fa-twitter fa-lg "></i>
  </a>
  <a
    href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
    class="list-group-item list-group-item-action"
    ><i class="fa-solid fa-house"></i>
    <span
      class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2"
      >Home</span
    ></a
  >
  <a
    href="https://en.wikipedia.org/wiki/The_Forever_War"
    class="list-group-item list-group-item-action active"
    ><i class="fa-solid fa-hashtag"></i>
    <span
      class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2"
      >Explore</span
    ></a
  >
  <a
    href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
    class="list-group-item list-group-item-action"
    ><i class="fa-regular fa-bell"></i>
    <span
      class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2"
      >Notifications</span
    ></a
  >
  <a
    href="https://en.wikipedia.org/wiki/Ender%27s_Game"
    class="list-group-item list-group-item-action"
    tabindex="-1"
    aria-disabled="true"
    ><i class="fa-regular fa-envelope"></i>
    <span
      class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2"
      >Messages</span
    ></a
  >
  <a
    href="https://en.wikipedia.org/wiki/Dune_(novel)"
    class="list-group-item list-group-item-action"
  >
    <i class="fa-regular fa-bookmark"></i>
    <span
      class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2"
      >Bookmarks</span
    ></a
  >
  <a
    href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
    class="list-group-item list-group-item-action"
    ><i class="fa-regular fa-rectangle-list"></i>
    <span
      class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2"
      >Lists</span
    ></a
  >
  <a
    href="https://en.wikipedia.org/wiki/The_Forever_War"
    class="list-group-item list-group-item-action"
    ><i class="fa-regular fa-user"></i>
    <span
      class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2"
      >Profile</span
    >
  </a>
  <a
    href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
    class="list-group-item list-group-item-action"
  >
    <span class="fa-stack wd-sizing">
      <i class="fa-regular fa-circle fa-stack-2x"></i>
      <i
        class="fa-solid fa-ellipsis fa-stack-1x fa-inverse"
        style="color: white"
      ></i></span
    ><span
      class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2"
      >More</span
    >
  </a>
</div>
<button class="btn btn-primary w-100 mt-1 rounded-pill ">
  Tuit
</button>
  `;
};
export default NavigationSidebar;
