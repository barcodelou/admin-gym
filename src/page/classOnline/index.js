import React from 'react';
import Form from './form';
import Placing from "./placing"

const ClassOnline = () => {
  return <div>
    <h1 className="text-center m-4">Class Online Management Sistem</h1>
    <h3 className="text-center m-4">You can manage your class here</h3>
    <Form />
    <h3 className="text-center m-4">List All Online Class</h3>
    <Placing />
  </div>;
};

export default ClassOnline;
