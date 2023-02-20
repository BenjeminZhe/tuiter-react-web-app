const sidebarItem = (sidebar, active) => {
  return (`<a href="${sidebar.source}" class="list-group-item ${active}">
              ${sidebar.stack ? `
        <span class="fa-stack wd-small">
            <i class="${sidebar.icon} fa-stack-2x"></i>
            <i class="${sidebar.icon_reverse} fa-stack-1x fa-inverse" style="width: 70%"></i>
        </span>
    `: `<i class="${sidebar.icon}"></i>`}
              <span class="d-none d-xl-inline">${sidebar.name[0].toUpperCase() + sidebar.name.slice(1)}</span>
          </a>`);
}

export default sidebarItem;