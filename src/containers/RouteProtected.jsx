import {Outlet, Navigate} from 'react-router-dom';

function RouteProtected({session}) {
    return (session) ? <Outlet /> : <Navigate to="/login" />
}

export default RouteProtected;