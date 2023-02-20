import NavSidebarItem from "./sidebarItem.js";
import sidebars from "./sidebars.js";

const NavigationSidebar = (active) => {
  return(`
      <ul class="list-group">
          <a href="#" class="list-group-item">
              <i class="fab fa-twitter"></i>
              <span class="d-none d-xl-inline"></span>
          </a>
          ${sidebars.map(sidebar => {
    return(`
                    ${NavSidebarItem(sidebar, active === sidebar.name ? "active" : "")}
                `)
  }).join('')}
      </ul>
      <a role="button" href="#" class="btn btn-primary rounded-pill wd-tweet-button mt-2 w-100">Tweet</a>
 `);
}
export default NavigationSidebar;