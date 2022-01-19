import {GET_LIST} from "./type";

const initialState = {
    contact: []
}

export const listReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_LIST:
            return {
                ...state,
                listGet: action.data
            }
        default:
            return{
                ...state
            }
    }
}