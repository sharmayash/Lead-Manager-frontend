import axios from "axios";
import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const lead = {
      name: state.name,
      email: state.email,
      message: state.message
    };

    axios
      .post("http://localhost:8000/api/leads/", lead)
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="col s12">
      <div className="modal-content">
        <h4>Add a Lead</h4>
        <div className="input-field col s12">
          <input
            value={state.name}
            onChange={handleChange}
            placeholder="Name"
            name="name"
            type="text"
            className="validate"
          />
        </div>
        <div className="input-field col s12">
          <input
            value={state.email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="validate"
          />
        </div>
        <div className="input-field col s12">
          <textarea
            placeholder="Message"
            name="message"
            value={state.message}
            onChange={handleChange}
            className="materialize-textarea"
          ></textarea>
        </div>
      </div>
      <div className="modal-footer">
        <div className="addlead">
          <button
            type="submit"
            className="modal-close waves-effect waves-green blue-grey darken-4 white-text btn-flat"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
