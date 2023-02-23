import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const WhoToFollowListItem = (
  {
    who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa-logo.jpeg' }
  }
) => {
  return(
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
        </div>
        <div className="col-8">
          <div className="fw-bold">
            <span className="pe-1">{who.userName}</span>
            <FontAwesomeIcon icon={faCheckCircle} />
            {/*<FontAwesomeIcon icon="fa-solid fa-check-circle"/>*/}
          </div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;