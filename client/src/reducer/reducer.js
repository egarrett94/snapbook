import {LIFT_USER, LOGOUT} from '../action/actions'
const initialState = {
  userId: '',
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  temp: ''
}

function userApp(state = initialState, action){
    switch(action.type){
        case LIFT_USER: 
            return(
                console.log("LIFT_USER reducer fired", action.data),
                Object.assign({}, state, {
                    userId: action.data.userId,
                    firstName: action.data.firstName,
                    lastName: action.data.lastName,
                    userName: action.data.userName,
                    email: action.data.email
                })
            )

        case LOGOUT:
            return(
                console.log("LOGOUT reducer fired"),
                Object.assign({}, state, {
                    userId: '',
                    firstName: '',
                    lastName: '',
                    userName: '',
                    email: '',
                })
            )
        default:
            return state
    }
}
export default userApp