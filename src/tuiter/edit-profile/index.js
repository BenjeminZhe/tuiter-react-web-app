import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {saveProfile} from "../reducers/profile-reducer";
import { faXmark, faCamera, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'

const EditProfile = () => {
  const profile = useSelector(state => state.profile);
  const [userName, setUserName] = useState(profile.firstName + " " + profile.lastName);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const saveButtonEvent = () => {
    const firstName = userName.split(" ")[0];
    let newHandle = "@" + userName;
    newHandle = newHandle.replace(/\s/g, '');
    newHandle = newHandle.toLowerCase();

    const userInfoAction = {
      firstName: firstName,
      lastName: userName.slice(firstName.length + 1),
      handle: newHandle,
      bio: bio,
      location: location,
      website: website,
      dateOfBirth: dateOfBirth,
    }

    dispatch(saveProfile(userInfoAction));
  }
  return (
    <>
      <div className="row align-items-center justify-content-start pb-2">
        <div className="col-1">
          <Link className="text-black" to="/tuiter/profile" title="cancel">
            <FontAwesomeIcon icon={faXmark} className="text-lg"/>
          </Link>
        </div>
        <div className="col-11">
          <span className="fs-5 fw-bold">Edit Profile</span>
          <Link to="/tuiter/profile"><button className="rounded-pill float-end fw-bold bg-black text-white px-3 py-1" onClick={saveButtonEvent}>Save</button></Link>
        </div>
      </div>
      <div>
        <img src={`/images/${profile.bannerPicture}`} className="w-100 dark-image" height={200} alt="banner" />
        <button className="rounded-circle position-relative btn-lg bg-dark bg-opacity-75 text-white icon-camera"><FontAwesomeIcon icon={faCamera} /></button>
      </div>
      <div>
        <img src={`/images/${profile.profilePicture}`} className="rounded-circle img-thumbnail position-relative border-0 avatar" width={120} alt="avatar" />
        <button className="rounded-circle position-relative btn-lg bg-dark bg-opacity-75 text-white icon-camera-2"><FontAwesomeIcon icon={faCamera} /></button>
      </div>

      <div className="form-group">
        <div className="border ps-2 rounded-1 mb-2">
          <label className="text-secondary">Name</label>
          <input type="text" className="form-control border-0 ps-0" value={userName} onChange={(event) => setUserName(event.target.value)}/>
        </div>
        <div className="border ps-2 rounded-1 mb-2">
          <label className="text-secondary">Bio</label>
          <textarea rows={3} className="form-control border-0 ps-0" value={bio} onChange={(event) => setBio(event.target.value)}></textarea>
        </div>
        <div className="border ps-2 rounded-1 mb-2">
          <label className="text-secondary">Location</label>
          <input type="text" className="form-control border-0 ps-0" value={location} onChange={(event) => setLocation(event.target.value)}/>
        </div>
        <div className="border ps-2 rounded-1 mb-2">
          <label className="text-secondary">Website</label>
          <input type="text" className="form-control border-0 ps-0" value={website} onChange={(event) => setWebsite(event.target.value)}/>
        </div>
        <div>
          <div className="text-secondary">
            Birth date {'\u00B7'}
            {edit ? <button className="border-0 bg-transparent" onClick={() => setEdit(false)}>Confirm</button> :
            <button className="border-0 bg-transparent" onClick={() => setEdit(true)}>Edit</button>}
          </div>
          <div>
            {edit ? <input type="text" className="form-control" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)}/> :
              <div> {dateOfBirth} </div>}
          </div>
        </div>
        <div className="fw-bold mt-4 text-primary text-black">
          Switch to professional
          <span className="float-end"><FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </div>
    </>
  )
};

export default EditProfile;