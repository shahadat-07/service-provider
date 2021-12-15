import React from "react";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import FirstSection from "../FirstSection/FirstSection";

const Logistic = () => {
  // add our event listener for the click
  //   const handleSidebar = () => {
  //     const sidebar = document.querySelector(".sidebar");
  //     sidebar.classList.toggle("-translate-x-full");
  //   };

  return (
    <section>
      <div className="relative min-h-screen md:flex">
        <Sidebar />
        <section className="container bg-gray-100">
          <div className=" h-20 flex justify-between p-4">
            <h1 className="">By the way</h1>
            <h1>By the way</h1>
          </div>
          <section className="">
            <FirstSection />
            {/* collapse section */}
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
                  className="accordion-collapse collapse md:show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Customer Code</span>
                      <input
                        type="text"
                        className="form-control"
                        name="customerCode"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Customer Name</span>
                      <input
                        type="text"
                        className="form-control"
                        name="customerName"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Street Address</span>
                      <input
                        type="text"
                        className="form-control"
                        name="streetAddress"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">City</span>
                      <input type="text" className="form-control" name="city" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Prov</span>
                      <input type="text" className="form-control" name="prov" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Postal Code</span>
                      <input
                        type="number"
                        className="form-control"
                        name="postalCOde"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Ordered By</span>
                      <input
                        type="text"
                        className="form-control"
                        name="orderedBy"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Office No</span>
                      <input
                        type="number"
                        className="form-control"
                        name="officeNo"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Fax</span>
                      <input
                        type="number"
                        className="form-control"
                        name="fax"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Cell</span>
                      <input
                        type="number"
                        className="form-control"
                        name="cell"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Email</span>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Purchase Order</span>
                      <input
                        type="text"
                        className="form-control"
                        name="purchaseOrder"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Sales Person</span>
                      <input
                        type="text"
                        className="form-control"
                        name="salesPerson"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Sales Email</span>
                      <input
                        type="email"
                        className="form-control"
                        name="salesEmail"
                      />
                    </div>
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
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Logistic;
