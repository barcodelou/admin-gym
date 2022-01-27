import React from 'react';
import Form from './form';
import Placing from "./placing"

const ClassOnline = () => {
  return <div>
    <h1 className="text-center m-4">Class Online Management Sistem</h1>
    <h5 className='text-lg font-bold text-center'>Testing Tailwinds</h5>
    <h3 className=" m-4">Add Class</h3>
    <Form />
    <h3 className=" m-4">Class Card</h3>
    <Placing />
  </div>;
};

export default ClassOnline;
