import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import './index.css'

const ProfileComponent = () => {
  const profile = useSelector(state => state.profile);
  const navigate = useNavigate();
  return (
    <>
      <div className="row align-items-center justify-content-start">
        <div className="col-auto">
          <button className="border-0 bg-transparent" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className="col-10">
          <div className="fw-bold fs-5 text-black">{profile.firstName}{" "}{profile.lastName}</div>
          <div className="text-secondary fs-6">
            {profile.tuits}{" "}Tuits
          </div>
        </div>
      </div>
      <img src={`/images/${profile.bannerPicture}`} className="w-100 pb-2" height={200} alt="banner" />
      <img src={`/images/${profile.profilePicture}`} className="rounded-circle img-thumbnail img-fluid position-relative border-0 profile-pic" width={120} alt="banner" />
      <Link to="/tuiter/edit-profile" title="edit"><button className="rounded-pill float-end fw-bold border border-gray bg-transparent px-3 py-1">Edit Profile</button></Link>
      <div>
        <div className="fs-5 fw-bold">{profile.firstName}{" "}{profile.lastName}</div>
        <div className="text-secondary fs-6 pb-2">
          {profile.handle}
        </div>
        <div className="pb-2">
          {profile.bio}
        </div>
        <div className="pb-2">
          <span className="pe-3">
            <FontAwesomeIcon icon={faLocationDot} className="pe-1"/>
            {profile.location}
          </span>
          <span className="pe-3">
            <i className="bi bi-balloon pe-1" />
            Born {profile.dateOfBirth}
          </span>
          <span className="pe-3">
            <FontAwesomeIcon icon={faCalendarDays} className="pe-1"/>
            Joined {profile.dateJoined}
          </span>
        </div>
        <div>
          <span className="pe-3">
            <span className="fw-fold">{profile.followingCount}{" "}</span>
            <span className="text-secondary">Following</span>
          </span>
          <span className="pe-3">
            <span className="fw-fold">{profile.followersCount}{" "}</span>
            <span className="text-secondary">Followers</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default ProfileComponent;