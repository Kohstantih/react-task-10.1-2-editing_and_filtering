import { TAction } from '../../types/TAction';
import { TEntryObject } from '../../types/TEntryObject';
import { CHANGE_ENTRY_TEXT, CHANGE_ENTRY_PRICE, CLEAR_ACTIVE_ENTRY, ACTIVATION_ENTRY } from '../actions/actionTypes';

const initialState: TEntryObject = { id: '', text: '', price: ''};

export default function ActiveEntryReducer(state = initialState, action: TAction) {
    switch (action.type) {
        case CHANGE_ENTRY_TEXT:
            return state = { ...state, text: action.payload?.text };

        case CHANGE_ENTRY_PRICE:
            return state = { ...state, price: action.payload?.price };

        case CLEAR_ACTIVE_ENTRY:
            return state = { ...state, id: '', text: '', price: '' };

        case ACTIVATION_ENTRY:
            if (!action.payload) return;
            return state = { ...state, id: action.payload.id, text: action.payload.text, price: action.payload.price };
    
        default: 
            return state;
    }
}