let sidebars;
export default sidebars = [
  {
    stack: false,
    source: "../HomeScreen/index.html",
    icon: "fas fa-home",
    icon_inverse: "",
    name: "home"
  },
  {
    stack: false,
    source: "../ExploreScreen/index.html",
    icon: "fas fa-hashtag",
    icon_inverse: "",
    name: "explore"
  },
  {
    stack: false,
    source: "#",
    icon: "fas fa-bell",
    icon_inverse: "",
    name: "notifications"
  },
  {
    stack: false,
    source: "#",
    icon: "fas fa-envelope",
    icon_inverse: "",
    name: "messages",
  },
  {
    stack: false,
    source: "#",
    icon: "fas fa-bookmark",
    icon_reverse: "",
    name: "bookmarks",
  },
  {
    stack: false,
    source: "#",
    icon: "fas fa-list",
    icon_reverse: "",
    name: "lists",
  },
  {
    stack: false,
    source: "#",
    icon: "fas fa-user",
    icon_reverse: "",
    name: "profile",
  },
  {
    stack: true,
    source: "#",
    icon: "fas fa-circle",
    icon_reverse: "fas fa-ellipsis-h",
    name: "more",
  }
]