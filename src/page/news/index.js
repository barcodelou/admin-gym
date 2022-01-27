import React from "react";
import Form from "./form";
import Placing from "./placing";

const News = () => {
  return (
    <div>
      <h1 className="text-center m-4">News Management Sistem</h1>
      <h3 className="m-4">Add Class</h3>
      <Form />
      <h3 className="m-4">Card Class</h3>
      <Placing />
    </div>
  );
};

export default News;
