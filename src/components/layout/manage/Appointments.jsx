import { useState, useEffect } from "react";
import ManageAppointments from "./ManageAppointments";
import AppointmentsForm from "./CreateAppointment";
import Button from "react-bootstrap/Button";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [show, setShow] = useState(false);
  const [formType, setFormType] = useState("add");
  const [dataToEdit, setDataToEdit] = useState({});

  const handleClose = () => {
    setDataToEdit({
      AppId: "",
      AppHour: "",
      AppDate: "",
      AppStatus: "",
      AppReport: "",
      appointmentRate: "",
      user: "",
    });
    setShow(false);
  };

  const handleShow = (type, data) => {
    setFormType(type);
    setDataToEdit(data);
    setShow(true);
  };

  useEffect(() => {
    ManageAppointments.getAppointments().then((res) => {
      setAppointments(res.data);
    });
  }, []);

  const deleteAppointment = async (id) => {
    ManageAppointments.deleteArticle(id);
    const filtredAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    await setAppointments(filtredAppointments);
  };

  return (
    <div>
      <h2 className="text-center">Manage Appointments</h2>
      <div className="row">
        <Button variant="primary" onClick={() => handleShow("add")}>
          Create New Appointment
        </Button>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th> Start Hour</th>
              <th>Date</th>
              <th> Status</th>
              <th> Report</th>
              <th> Rating</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.appId}>
                <td>{appointment.appId}</td>
                <td> {appointment.appHour} </td>
                <td>{appointment.appDate}</td>
                <td> {appointment.appStatus}</td>
                <td> {appointment.appReport}</td>
                <td>{appointment.appointmentRate.satisfaction}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => handleShow("edit", appointment)}
                  >
                    Update{""}
                  </Button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteAppointment(appointment.AppId)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <AppointmentsForm
          show={show}
          handleClose={handleClose}
          as={formType}
          dataToEdit={dataToEdit}
        />
      </div>
    </div>
  );
};

export default Appointments;
