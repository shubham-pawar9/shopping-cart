import { useEffect } from "react";

const Note = ({ setNoteShow, handleContentAll }) => {
  return (
    <>
      <div className="imp-note">
        <button
          className="note-close"
          onClick={() => {
            setNoteShow(false);
            handleContentAll();
            document
              .querySelector(".categories")
              .classList.remove("scroll-off");
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/close-form.png"}
            alt="closeProfile"
          />
        </button>
        <span className="note-txt">Note:</span>
        <span className="note-mainTxt">
          <i>
            The content and images on this web page are sourced from{" "}
            <b>Woodenstreet.com</b> for project and knowledge purposes only. All
            credits for the information and visuals go to{" "}
            <b>The Woodenstreet Furnitures Private Limited</b>.<br></br> This
            web page is not intended for commercial use, and the data is used
            respectfully without any intent of misuse. If there are any
            concerns, please contact us immediately for resolution.
          </i>
        </span>
        <span style={{ "align-self": "start" }}>Thank You</span>
        <button className="contact-us-note">
          <a href="https://pshubham9.netlify.app/" target="_blank">
            Contact Us
          </a>
        </button>
      </div>
    </>
  );
};
export default Note;
