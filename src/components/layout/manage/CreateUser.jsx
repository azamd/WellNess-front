import { useEffect } from "react";
import { useState } from "react";

import ManageUsers from "./ManageUsers";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const UsersForm = ({ as, dataToEdit, show, handleClose }) => {
  const [data, setData] = useState({
    userId: "",
    username: "",
    userFirstName: "",
    userLastName: "",
    specialty: "",
    start_hour: "",
    end_hour: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const {
    //userId,
    username,
    userFirstName,
    userLastName,
    specialty,
    start_hour,
    end_hour,
    address,
    city,
    zipCode,
  } = data;

  useEffect(() => {
    if (as === "edit") {
      setData(dataToEdit);
    }
  }, [dataToEdit, as]);

  const handleChange = (name, value) => {
    setData({ ...data, [`${name}`]: value });
  };

  const handleSubmit = (event, data) => {
    event.preventDefault();
    if (as === "edit") {
      ManageUsers.updateUser(data.userId, data);
      handleClose();
    } else {
      ManageUsers.createUser(data);
      handleClose();
    }
  };
  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>{as === "edit" ? "Edit" : "Add"} User</Modal.Title>
      </Modal.Header>
      <form onSubmit={(e) => handleSubmit(e, data)}>
        <Modal.Body>
          <div className="form-group">
            <label> Username: </label>
            <input
              placeholder="username"
              name="userName"
              className="form-control"
              defaultValue={username}
              onChange={(event) => handleChange("userName", event.target.value)}
            />
          </div>
          <div className="form-group">
            <label> First Name: </label>
            <input
              placeholder="first name"
              name="userFirstName"
              className="form-control"
              defaultValue={userFirstName}
              onChange={(event) =>
                handleChange("userFirstName", event.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label> Last Name: </label>
            <input
              placeholder="last name"
              name="userLastName"
              className="form-control"
              defaultValue={userLastName}
              onChange={(event) =>
                handleChange("userLastName", event.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label> Last Name: </label>
            <input
              placeholder="last name"
              name="specialty"
              className="form-control"
              defaultValue={specialty}
              onChange={(event) =>
                handleChange("specialty", event.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label> Start Hour: </label>
            <input
              placeholder="start hour"
              name="start_hour"
              className="form-control"
              defaultValue={start_hour}
              onChange={(event) =>
                handleChange("start_hour", event.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label> End Hour: </label>
            <input
              placeholder="end hour"
              name="end_hour"
              className="form-control"
              defaultValue={end_hour}
              onChange={(event) => handleChange("end_hour", event.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Address: </label>
            <input
              placeholder="address"
              name="address"
              className="form-control"
              defaultValue={address}
              onChange={(event) => handleChange("address", event.target.value)}
            />
          </div>
          <div className="form-group">
            <label> City: </label>
            <input
              placeholder="city"
              name="city"
              className="form-control"
              defaultValue={city}
              onChange={(event) => handleChange("city", event.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Zip Code: </label>
            <input
              placeholder="zipcode"
              name="zipCode"
              className="form-control"
              defaultValue={zipCode}
              onChange={(event) => handleChange("zipCode", event.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
          <Button type="submit" variant="success">
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default UsersForm;
