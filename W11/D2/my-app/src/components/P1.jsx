//Nested routes
// a route inside another route
//Dashboard - Profile / settings / reports

import {Link , Outlet} from "react-router-dom"

export function NestedRoutes(){
    return (
        <div>
            <h2>Nested Routes</h2>
            <nav>
                <Link to="/dashboard">Home</Link> | {' '}
                <Link to="/dashboard/profile">Profile</Link> | {' '}
                <Link to="/dashboard/settings">Settings</Link> | {' '}

                <hr />
                <Outlet /> 
                {/* outlet is place where matched child routes will render */}
                {/* without outlet child routes will not appear inside parent layout  */}

            </nav>
        </div>
    )
}