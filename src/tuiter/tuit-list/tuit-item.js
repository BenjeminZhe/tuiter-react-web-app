import React from "react";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const TuitItem = (
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
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return (<li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img src={`/images/${tuit.image}`} className="rounded-circle" width={48} alt="userImage"/>
        </div>
        <div className="col-11 ps-4 pb-2">
          <div className="row">
            <div className="col-11 align-items-center">
              {tuit.userName}
              <span className={"px-1"}><FontAwesomeIcon icon={faCheckCircle} /></span>
              <span className="text-secondary">{tuit.handle} {'\u00B7'} {tuit.time}</span>
            </div>
            <div className="col-1">
              <div>
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuit._id)}></i>
              </div>
            </div>
          </div>
          <div className="pb-2">
            {tuit.tuit}
          </div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  )
}

export default TuitItem;