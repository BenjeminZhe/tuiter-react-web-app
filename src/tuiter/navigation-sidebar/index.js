import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faCircle,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/');
  const active = paths[2];
  return(
    <div className="list-group">
      <Link to="/" className="list-group-item">
        <span className={"d-none d-xl-inline"}>Labs</span>
      </Link>
      <Link to="/tuiter/home" className="list-group-item"><FontAwesomeIcon icon={faTwitter} className="pe-1"/></Link>
      <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
        <FontAwesomeIcon icon={faHome} className="pe-1"/>
        <span className={"d-none d-xl-inline"}>Home</span>
      </Link>
      <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
        <FontAwesomeIcon icon={faHashtag} className="pe-1"/>
        <span className={"d-none d-xl-inline"}>Explore</span>
      </Link>
      <Link to="/tuiter/notification" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
        <FontAwesomeIcon icon={faBell} className="pe-1"/>
        <span className={"d-none d-xl-inline"}>Notifications</span>
      </Link>
      <Link to="/tuiter/message" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
        <FontAwesomeIcon icon={faEnvelope} className="pe-1"/>
        <span className={"d-none d-xl-inline"}>Messages</span>
      </Link>
      <Link to="/tuiter/bookmark" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
        <FontAwesomeIcon icon={faBookmark} className="pe-1"/>
        <span className={"d-none d-xl-inline"}>Bookmarks</span>
      </Link>
      <Link to="/tuiter/list" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
        <FontAwesomeIcon icon={faList} className="pe-1"/>
        <span className={"d-none d-xl-inline"}>Lists</span>
      </Link>
      <Link to="/tuiter/user" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
        <FontAwesomeIcon icon={faUser} className="pe-1"/>
        <span className={"d-none d-xl-inline"}>Profile</span>
      </Link>
      <Link to="/tuiter/more" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
        <span className="fa-stack" style={{ margin: '-10px' }}>
          <FontAwesomeIcon icon={faCircle} className="fa-stack-1x" />
          <FontAwesomeIcon icon={faEllipsisH} transform="shrink-6" className="fa-stack-1x fa-inverse" />
        </span>
        <span className={"d-none d-xl-inline"}>More</span>
      </Link>
      <button role="button" width={120} className="btn btn-primary rounded-pill wd-tweet-button mt-2 w-100">Tweet</button>
    </div>
  );
};
export default NavigationSidebar;