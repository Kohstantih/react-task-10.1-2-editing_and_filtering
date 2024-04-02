import { UPDATE_FILTER_VALUE } from "../actions/actionTypes";

const initialState = '';

export default function FilterReducer(state = initialState, action: {type: string, payload: string}) {
    switch (action.type) {
        case UPDATE_FILTER_VALUE:
            return state = action.payload;
    
        default: 
            return state;
    }
}
