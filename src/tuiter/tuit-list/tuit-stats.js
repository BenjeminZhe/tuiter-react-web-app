import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faRetweet, faHeart, faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";
import {updateLike} from "../tuits/tuits-reducer";

const TuitStats = (
  {
    tuit = {
      "_id": 789,
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
      "image": "avatar.webp",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
  }
) => {
  const dispatch = useDispatch();
  const updateLikeHandler = (id) => {
    dispatch(updateLike(id));
  }
  return (
    <div className="row justify-content-around ms-3">
      <button className="col text-secondary text-decoration-none btn btn-unstyled"><FontAwesomeIcon icon={faComment}/>
        <span>{" "}{tuit.replies}</span></button>
      <button className="col text-secondary text-decoration-none btn btn-unstyled"><FontAwesomeIcon icon={faRetweet} />
        <span>{" "}{tuit.retuits}</span></button>
      {tuit.liked ?
        <button className="col text-secondary text-decoration-none btn btn-unstyled" onClick={() => updateLikeHandler(tuit._id)}><FontAwesomeIcon icon={faHeart} color={'red'} /><span>{" "}{tuit.likes}</span></button>
        :
        <button className="col text-secondary text-decoration-none btn btn-unstyled" onClick={() => updateLikeHandler(tuit._id)}><FontAwesomeIcon icon={faHeart} /><span>{" "}{tuit.likes}</span></button>}
      <button className="col text-secondary text-decoration-none btn btn-unstyled"><FontAwesomeIcon icon={faArrowUpFromBracket} /></button>
    </div>
  )
}

export default TuitStats;