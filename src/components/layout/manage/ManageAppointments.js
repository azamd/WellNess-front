import axios from 'axios';
const API_BASE_URL = "http://localhost:8089/Wellness/appointment";

class ManageAppointments {

    createAppointment(appointment) {
        return axios.post(API_BASE_URL + '/add-appointment', appointment);
    }


    updateAppointment(appointmentId, appointment) {
        return axios.put(API_BASE_URL + '/edit-appointment/' + appointmentId, appointment);
    }

    deleteAppointment(appointmentId) {
        return axios.delete(API_BASE_URL + '/remove-appointment/' + appointmentId);
    }

    getAppointmentById(appointmentId) {
        return axios.get(API_BASE_URL + '/' + appointmentId);
    }

    getAppointments() {
        return axios.get(API_BASE_URL + '/retrieve-all-appointments');
    }

}
export default new ManageAppointments()