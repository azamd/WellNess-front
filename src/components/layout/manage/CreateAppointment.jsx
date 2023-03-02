import { useEffect } from "react";
import { useState } from "react";

//import ManageUsers from "./ManageUsers";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ManageAppointments from "./ManageAppointments";

const AppointmentsForm = ({ as, dataToEdit, show, handleVanish }) => {
  const [data, setData] = useState({
    AppId: "",
    AppHour: "",
    AppDate: "",
    AppStatus: "",
    AppReport: "",
    appointmentRate: "",
  });

  const { /*AppId*/ AppHour, AppDate, /*AppStatus,AppReport, appointmentRate*/ } =
    data;

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
      ManageAppointments.updateAppointment(data.userId, data);
      handleVanish();
    } else {
      ManageAppointments.createAppointment(data);
      handleVanish();
    }
  };
  return (
    <Modal show={show} onHide={() => handleVanish()}>
      <Modal.Header closeButton>
        <Modal.Title>{as === "edit" ? "Edit" : "Add"} Appointment</Modal.Title>
      </Modal.Header>
      <form onSubmit={(e) => handleSubmit(e, data)}>
        <Modal.Body>
          <div className="form-group">
            <label> Appointment Hour: </label>
            <input
              placeholder="appointment start hour"
              name="AppHour"
              className="form-control"
              defaultValue={AppHour}
              onChange={(event) => handleChange("AppHour", event.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Appointment Date: </label>
            <input
              placeholder="appointment date"
              name="AppDate"
              className="form-control"
              defaultValue={AppDate}
              onChange={(event) => handleChange("AppDate", event.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleVanish} variant="secondary">
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

export default AppointmentsForm;
