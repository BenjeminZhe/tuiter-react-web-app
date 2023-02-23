import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PostSummaryItem = (
  {
    post = {
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      "image": "/images/tesla-logo.png"
    }
  }
) => {
  return(
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div>{post.topic}</div>
          <div>
            <span className="fw-bolder pe-1">{post.userName }</span>
            <FontAwesomeIcon icon={faCheckCircle} />
             - {post.time}
          </div>
          <div className="fw-bolder">{post.title}</div>
          <div className="text-secondary">{post.tweets ? post.tweets + ' Tweets' : ''}</div>
        </div>
        <div className="col-2">
          <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt={"post summary"}/>
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;