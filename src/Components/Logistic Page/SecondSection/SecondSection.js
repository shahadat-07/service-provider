import React from "react";
import InputLabel from "../../ReusableComponents/InputLabel/InputLabel";

const SecondSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 accordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Bill To
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse lg:show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <InputLabel label="Customer Code" type="text" name="customerCode" />
            <InputLabel label="Customer Name" type="text" name="customerName" />
            <InputLabel
              label="Street Address"
              type="text"
              name="streetAddress"
            />
            <InputLabel label="City" type="text" name="city" />
            <InputLabel label="Prov" type="text" name="prov" />
            <InputLabel label="Postal Code" type="number" name="postalCode" />
            <InputLabel label="Ordered By" type="text" name="orderedBy" />
            <InputLabel label="Office No" type="tel" name="officeNo" />
            <InputLabel label="Fax" type="tel" name="fax" />
            <InputLabel label="Cell" type="number" name="cell" />
            <InputLabel label="Email" type="email" name="email" />
            <InputLabel
              label="Purchase Order"
              type="text"
              name="purchaseOrder"
            />
            <InputLabel label="Sales Person" type="text" name="salesPerson" />
            <InputLabel label="Sales Email" type="email" name="salesEmail" />
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Ship To
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
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
        <h2 className="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Booking Information(EPICOR/MCS)
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
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

export default SecondSection;
