import React from "react";
import Form from "./form";
import Placing from "./placing";

const ClassOffline = () => {
  return (
    <div>
      <h1 className="text-center m-4">Class Offline Management Sistem</h1>
      <h3 className="text-center m-4">You can manage your class here</h3>
      <Form />
      <h3 className="text-center m-4">List All Offline Class</h3>
      <Placing />
    </div>
  );
};

export default ClassOffline;
