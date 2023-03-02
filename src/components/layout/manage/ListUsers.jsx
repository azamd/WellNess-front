import { useState, useEffect } from "react";
import ManageUsers from "./ManageUsers";
import UsersForm from "./CreateUser";
import AppointmentsForm from "./CreateAppointment";
import Button from "react-bootstrap/Button";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);
  const [formType, setFormType] = useState("add");
  const [formAType, setFormAType] = useState("add");
  const [dataToEdit, setDataToEdit] = useState({});
  const [userId, setUserId] = useState({});

  const handleClose = () => {
    setDataToEdit({
      userId: "",
      userName: "",
      userFirstName: "",
      userLastName: "",
      specialty: "",
      start_hour: "",
      end_hour: "",
      address: "",
      city: "",
      zipCode: "",
    });
    setShow(false);
  };

  const handleVanish = () => {
    setUserId({
      userId: "",
    });
    setDisplay(false);
  };

  const handleShow = (type, data) => {
    setFormType(type);
    setDataToEdit(data);
    setShow(true);
  };

  const handleDisplay = (type, id) => {
    setFormAType(type);
    setUserId(id);
    setDisplay(true);
  };

  useEffect(() => {
    ManageUsers.getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  const deleteUser = async (id) => {
    ManageUsers.deleteUser(id);
    const filtredUsers = users.filter((user) => user.id !== id);
    await setUsers(filtredUsers);
  };

  return (
    <div>
      <h2 className="text-center">Manage Users</h2>
      <div className="row">
        <Button variant="primary" onClick={() => handleShow("add")}>
          Create New User
        </Button>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th> Username</th>
              <th>First Name</th>
              <th> Last Name</th>
              <th> Specialty</th>
              <th> Start Hour</th>
              <th> End Hour</th>
              <th> Address</th>
              <th> City</th>
              <th> Zip Code</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td> {user.username} </td>
                <td> {user.userFirstName} </td>
                <td> {user.userLastName} </td>
                <td> {user.specialty} </td>
                <td>{user.start_hour}</td>
                <td> {user.end_hour}</td>
                <td> {user.address}</td>
                <td>{user.city}</td>
                <td> {user.zipCode} </td>

                <td>
                  <Button
                    variant="info"
                    onClick={() => handleShow("edit", user)}
                  >
                    Update{""}
                  </Button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteUser(user.userId)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>

                  <Button
                    style={{ marginLeft: "10px" }}
                    variant="primary"
                    onClick={() => handleDisplay("add", user.userId)}
                  >
                    Show Appointments
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <UsersForm
          show={show}
          handleClose={handleClose}
          as={formType}
          dataToEdit={dataToEdit}
        />
        <AppointmentsForm
          display={display}
          handleVanish={handleVanish}
          as={formAType}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default ListUsers;
