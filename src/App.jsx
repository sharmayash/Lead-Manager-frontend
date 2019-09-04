import "./App.css";
import axios from "axios";
import Form from "./components/Form";
import Tables from "./components/Tables";
import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    axios
      .get("http://localhost:8000/api/leads/")
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Lead Manager</h4>
      </header>
      <div className="add">
        <button
          data-target="modal1"
          className="btn modal-trigger right blue-grey darken-4"
        >
          Add Lead
        </button>
      </div>
      <div id="modal1" className="modal">
        <Form />
      </div>
      <div className="row">
        <div className="col s12">
          <Tables leads={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
