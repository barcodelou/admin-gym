import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const Form = () => {
  return (
    <div className="w-75 mx-auto m-5 bg-warning p-5">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Class Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Classname"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Trainer</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Trainer"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Trainer</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Trainer"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
