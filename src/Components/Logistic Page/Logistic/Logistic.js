import React from "react";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import TrackingOrder from "../TrackingOrder/TrackingOrder";

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
          <section>
            <FirstSection />
            <SecondSection />
            <TrackingOrder />
          </section>
        </section>
      </div>
    </section>
  );
};

export default Logistic;
