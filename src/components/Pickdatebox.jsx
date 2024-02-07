import React from "react";

function Pickdatebox() {
  return (
    <div className="rectangleDateBox">
      <div className="leftsideofbox">
        <div className="pickupplacebox">
          <p id="pickupofficeP">Pick up Office</p>
          <div>
            <img id="locationVector" src="Frame.png" alt="location-vector" />
            <p id="pickuplocation">Istanbul - Vadistanbul</p>
          </div>
        </div>
        <div className="pickuptimebox">
          <p>Pick up time</p>
          <p id="datepickup"> 01/01/2024</p>
        </div>
        <div className="dropoffbox">
          <p>Drop off time</p>
          <p id="datedropoff"> 03/01/2024</p>
        </div>
      </div>
      <button id="lookvehiclesBT">Look Vehicles</button>
    </div>
  );
}

export default Pickdatebox;
