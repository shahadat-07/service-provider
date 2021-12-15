import React from "react";
import InputLabel from "../../ReusableComponents/InputLabel/InputLabel";

const TrackingOrder = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 accordion mt-28">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            Tracking Order 1 <br />
            (Pickup Information)
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse lg:show"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <InputLabel label="Company Name" type="text" name="" />
            <InputLabel label="Shipping Code" type="number" name="" />
            <InputLabel label="Street Address" type="text" name="" />
            <InputLabel label="City" type="text" name="" />
            <InputLabel label="Prov" type="text" name="" />
            <InputLabel label="Postal Code" type="number" name="" />
            <InputLabel label="Site Contact" type="tell" name="" />
            <InputLabel label="Tell1" type="tel" name="" />
            <InputLabel label="Tell2" type="tel" name="" />
            <InputLabel label="Cell" type="number" name="" />
            <InputLabel label="Email" type="email" name="" />
            <InputLabel label="Yard Detail" type="text" name="" />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Ship To
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <InputLabel label="Company Name" type="text" name="companyName" />
            <InputLabel label="Shipping Code" type="text" name="shippingCode" />
            <InputLabel
              label="Street Address"
              type="text"
              name="shipStreetAddress"
            />
            <InputLabel label="City" type="text" name="shipCity" />
            <InputLabel
              label="Postal Code"
              type="number"
              name="shipPostalCode"
            />
            <InputLabel label="Site Contact" type="tel" name="siteContact" />
            <InputLabel label="Tell 1" type="tel" name="tell1" />
            <InputLabel label="Tell 2" type="tel" name="tell2" />
            <InputLabel label="Cell" type="tel" name="shipCell" />
            <InputLabel label="Email" type="email" name="shipEmail" />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSix">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            Booking Information(EPICOR/MCS)
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <InputLabel label="Delivery" type="text" name="delivery" />
            <InputLabel label="DateReq" type="date" name="date" />
            <InputLabel label="TimeReq" type="time" name="time" />
            <InputLabel label="Booking Date" type="date" name="bookingDate" />
            <label className="mb-2"> Note From Sales To Logistic</label>
            <textarea
              className="border border-1-gray-400"
              rows="4"
              cols="50"
              name="note"
            />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSeven">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven"
          >
            Booking Information(EPICOR/MCS)
          </button>
        </h2>
        <div
          id="collapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="headingSeven"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <InputLabel label="Delivery" type="text" name="delivery" />
            <InputLabel label="DateReq" type="date" name="date" />
            <InputLabel label="TimeReq" type="time" name="time" />
            <InputLabel label="Booking Date" type="date" name="bookingDate" />
            <label className="mb-2"> Note From Sales To Logistic</label>
            <textarea
              className="border border-1-gray-400"
              rows="4"
              cols="50"
              name="note"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingOrder;
