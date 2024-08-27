import {GM,GE,GN} from './message.action'
let initialState={
    msg:"Hello"
}
let messageReducer  = (state=initialState,action)=>{
        switch(action.type){
            case 'GM':
                return  { msg:"Good Monring"}
            case 'GE':
                return { msg:"Good Evening"}
            case 'GN':
                return { msg:"Good Nigt! Sweet Dream!...."}
            default:
                return state
        }
}
export {messageReducer}