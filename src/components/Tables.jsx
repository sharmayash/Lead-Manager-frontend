import React from "react";
import Axios from "axios";

const handleDelete = id => {
  Axios.delete(`http://localhost:8000/api/leads/${id}/`)
    .then(() => window.location.reload())
    .catch(err => console.log(err));
};

export default function Tables(props) {
  const data = props.leads.map(item => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.message}</td>
      <td>
        <i
          onClick={() => handleDelete(item.id)}
          className="material-icons btn-flat red-text"
        >
          delete_sweep
        </i>
      </td>
    </tr>
  ));

  return (
    <table className="striped responsive-table centered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>{data}</tbody>
    </table>
  );
}
