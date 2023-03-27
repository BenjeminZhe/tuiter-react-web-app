import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle, faComment, faRetweet, faHeart, faArrowUpFromBracket, faLink, faEllipsisH} from '@fortawesome/free-solid-svg-icons';

const PostItem = (
  {
    post = {
      "userImage": "elon.jpg",
      "userName": "Elon Mask",
      "userAlias": "elonmusk",
      "time": "23h",
      "content":"Amazing show about mission @Inspiration4x mission!",
      "postImage": "count_down.jpeg",
      "postTitle": "Countdown: Inspiration4x Mission to Space | Netflix Office Site",
      "postContent": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
      "postLinkText": "netflix.com",
      "postLink": "www.netflix.com",
      "replyCount": "4.2k",
      "retweetCount": "3.5k",
      "likeCount": "37.5k"
    }
  }) => {
  return (<li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img src={`/images/${post.userImage}`} className="rounded-circle" width={48} alt="userImage"/>
                </div>
                <div className="col-11 ps-4 pb-2">
                    <div className="row">
                        <div className="col-11 align-items-center">
                            {post.userName}
                            <span className={"px-1"}><FontAwesomeIcon icon={faCheckCircle} /></span>
                            <span className="text-secondary">@{post.userAlias} {'\u00B7'} {post.time}</span>
                        </div>
                        <div className="col-1">
                          <FontAwesomeIcon icon={faEllipsisH} className={"text-secondary float-end"}/>
                        </div>
                    </div>
                    <div className="pb-2">
                        {post.content}
                    </div>
                    <div className = "border border-light border-2 rounded-4">
                        <img src={`/images/${post.postImage}`} className="border border-light border-2 w-100 rounded-4" alt={""}/>
                        <div className={"px-3 py-3"}>
                          <div className="text-secondary">{post.postTitle}</div>
                          <div>{post.postContent}</div>
                          <a href={`${post.postLink}`} className="text-secondary text-decoration-none"><span><FontAwesomeIcon icon={faLink} /></span>{post.postLinkText}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-around ms-3">
                <a href="/#" className="col text-secondary text-decoration-none"><FontAwesomeIcon icon={faComment}/>
                    <span>{post.replyCount}</span></a>
                <a href="/#" className="col text-secondary text-decoration-none"><FontAwesomeIcon icon={faRetweet} />
                    <span>{post.retweetCount}</span></a>
                <a href="/#" className="col text-secondary text-decoration-none"><FontAwesomeIcon icon={faHeart} />
                    <span>{post.likeCount}</span></a>
                <a href="/#" className="col text-secondary text-decoration-none"><FontAwesomeIcon icon={faArrowUpFromBracket} /></a>
            </div>
       </li>);
};

export default PostItem;