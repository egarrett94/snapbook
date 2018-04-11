export const LIFT_USER = "LIFT_USER";
export const LOGOUT = "LOGOUT"

export function liftUser(userData){
    return{ type: LIFT_USER, data: userData }
  }

export function userLogout(){
  return{ type: LOGOUT}
}