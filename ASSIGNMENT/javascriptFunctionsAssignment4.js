//Assignment 4: Role-Based Route Resolver Using switch + Functions
const getRoute = function(role, isloggedIn) {

    if (!isloggedIn) {
        return "/login";
    } else {

        switch (role) {
            case "admin":
                return "/admin";

            case "student":
                return "/student";

            case "college":
                return "/college";

            case "proctor":
                return "/proctor";

            default:
                return "/denied";
        }
    }
};

//console.log(getRoute("admin", true));     // "/admin"
//console.log(getRoute("student", true));   // "/student"
//console.log(getRoute("guest", true));     // "/denied"
// console.log(getRoute("admin", false));    // "/login"
console.log(getRoute("nandini", true));      // "/default"