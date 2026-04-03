//Basics of RBAC
const routePermissions={
    "/admin":["admin"],
    "/reports":["admin","manager"],
    "/profile":["admin","manager","user"]
}

function canAccess(route,role){
    const allowedRules=routePermissions[route]||[]
    return allowedRules.includes(role)

}
console.log("User access to /admin: ",canAccess("/admin","user"))
console.log("User access to /admin: ",canAccess("/admin","admin"))
console.log("User access to /reports: ",canAccess("/reports","manager"))
console.log("User access to /profile: ",canAccess("/profile","user"))