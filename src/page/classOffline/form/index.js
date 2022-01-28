import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const Form = () => {
  return (
    <div className="w-75 mx-auto m-5 bg-warning p-5">
      <form action="">
        <div class="form-group">
          <label for="class" className="text-white font-bold">Class Name</label>
          <input type="text" class="form-control" id="class" placeholder="Classname" name="name" />
        </div>
        <div class="form-group">
          <label for="day" className="text-white font-bold">Day</label>
          <input type="text" class="form-control" id="day" placeholder="Day" name="day" />
        </div>
        <div class="form-group">
          <label for="date" className="text-white font-bold">Date</label>
          <input type="date" class="form-control" id="date" name="date" />
        </div>
        <div className="form-group">
          <label for="location" className="text-white font-bold">Location </label>
          <input type="text" name="location" className="form-control" />
        </div>
        <div className="form-group">
          <label for="time" className="text-white font-bold">Time </label>
          <input type="text" name="time" className="form-control" />
        </div>
        <div className="form-group">
          <label for="trainer" className="text-white font-bold">Trainer </label>
          <input type="text" name="trainer" className="form-control" />
        </div>
        <div className="form-group">
          <label for="image" className="text-white font-bold">Image </label>
          <input type="file" name="image" className="form-control" />
        </div>
        <button type="submit" class="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
