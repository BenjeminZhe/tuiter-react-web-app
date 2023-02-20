const NavigationSidebar = () => {
  return(`
      <ul class="list-group">
          <a href="#" class="list-group-item">
              <i class="fab fa-twitter"></i>
              <span class="d-none d-xl-inline"></span>
          </a>
          <a href="#" class="list-group-item">
              <i class="fas fa-home"></i>
              <span class="d-none d-xl-inline">Home</span>
          </a>
          <a href="#" class="list-group-item active">
              <i class="fas fa-hashtag"></i>
              <span class="d-none d-xl-inline">Explore</span>
          </a>
          <a href="#" class="list-group-item">
              <i class="fas fa-bell"></i>
              <span class="d-none d-xl-inline">Notifications</span>
          </a>
          <a href="#" class="list-group-item">
              <i class="fas fa-envelope"></i>
              <span class="d-none d-xl-inline">Messages</span>
          </a>
          <a href="#" class="list-group-item">
              <i class="fas fa-bookmark"></i>
              <span class="d-none d-xl-inline">Bookmarks</span>
          </a>
          <a href="#" class="list-group-item">
              <i class="fas fa-list"></i>
              <span class="d-none d-xl-inline">Lists</span>
          </a>
          <a href="#" class="list-group-item">
              <i class="fas fa-user"></i>
              <span class="d-none d-xl-inline">Profile</span>
          </a>
          <a href="#" class="list-group-item">
                  <span class="fa-stack wd-small" style="margin: -2px">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                  </span>
              <span class="d-none d-xl-inline">More</span>
          </a>
      </ul>
      <a role="button" href="#" class="btn btn-primary rounded-pill wd-tweet-button mt-2 w-100">Tweet</a>
 `);
}
export default NavigationSidebar;