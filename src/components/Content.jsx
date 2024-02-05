import React from "react";

function Content() {
  return (
    <div>
      <p id="contentTitle">#1 Car rental choice in Istanbul</p>
      <div className="mainImages">
        <img id="mercedesImage" src="image 2.png" alt="mercedesimage" />
        <img id="Ellipse1" src="Ellipse 1.png" alt="Ellipse1" />
        <img id="Ellipse2" src="Ellipse 2.png" alt="Ellipse2" />
      </div>
      <div>
        <p id="Reservation-font">Create a reservation</p>
        <div className="rectangleDateBox">
          <div className="leftsideofbox">
            <div className="pickupplacebox">
              <p id="pickupofficeP">Pick up Office</p>
              <div>
                <img
                  id="locationVector"
                  src="Frame.png"
                  alt="location-vector"
                />
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
      </div>
    </div>
  );
}

export default Content;
