import { useRef, useState } from "react";

const Profile = ({ formData, setFormData, setProfileShow, setFormShow }) => {
  const handleLogoutProfile = (e) => {
    if (e.target.innerHTML == "Sign Out") {
      setFormData("");
      localStorage.clear();
      setProfileShow(false);
    } else {
      setFormShow(true);
      setProfileShow(false);
    }
  };
  return (
    <>
      <div className="profileDiv">
        <button className="profile-close" onClick={() => setProfileShow(false)}>
          <img
            src={process.env.PUBLIC_URL + "/images/close-form.png"}
            alt="closeProfile"
          />
        </button>
        <h2>Personal Information</h2>
        {formData && (
          <>
            <div className="div1">
              <img
                className="profile_image"
                src={
                  process.env.PUBLIC_URL + `/images/${formData["gender"]}.png`
                }
                alt="profile_image"
              />
              <span className="profile-name">{formData["name"]}</span>
              <span className="profile-name">{formData["email"]}</span>
            </div>
            <div className="div2">
              <span className="mobile">Mobile</span>
              <span className="mobile">{formData["mobile"]}</span>
              <span className="address">Address</span>
              <span className="address">{formData["address"]}</span>
            </div>
          </>
        )}

        <button className="sign-In-Up" onClick={(e) => handleLogoutProfile(e)}>
          {formData == undefined || formData == "" ? "Sign Up" : "Sign Out"}
        </button>
      </div>
    </>
  );
};
export default Profile;
