import Home from './Home'
import DoctorsList from '../layout/doctors/DoctorsList'
import DoctorDetails from '../layout/doctors/DoctorDetails';

const routes = [

    { path: '/', element: < Home / > },
    { path: '/DoctorsList', element: < DoctorsList / > },
    { path: '/DoctorDetails/:id', element: < DoctorDetails / > },



];
export default routes;