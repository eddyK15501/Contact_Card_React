import React, { useState } from "react";

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.result.picture.large} alt="face_pic" />
      <div className="user-details">
        <p>
          Name: {props.result.name.first} {props.result.name.last}
        </p>
        <p>Email: {props.result.email}</p>
        {showAge ? (
          <div>
            <p>Age: {props.result.dob.age}</p>
            <button onClick={() => setShowAge(!showAge)}>Hide Age</button>
          </div>
        ) : (
          <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
