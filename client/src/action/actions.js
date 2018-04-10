export const LIFT_USER = "LIFT_USER";

export function liftUser(userData){
    return{ type: LIFT_USER, data: userData }
  }