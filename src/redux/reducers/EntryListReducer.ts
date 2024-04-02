import { nanoid } from 'nanoid';

import { ADD_ENTRY, EDIT_ENTRY, REMOVE_ENTRY } from '../actions/actionTypes';
import { TEntryObject } from '../../types/TEntryObject';
import { TAction } from '../../types/TAction';

const initialState: TEntryObject[] = [];

export default function EntryListReducer(state = initialState, action: TAction) {
    switch (action.type) {
        case ADD_ENTRY:
            return [...state, { id: nanoid(), text: action.payload?.text, price: action.payload?.price }];

        case EDIT_ENTRY:
            return state.map((i) => {
                if (i.id === action.payload?.id) return {i, ...action.payload}

                return i;
            })

        case REMOVE_ENTRY:
            return state.filter((i) => action.payload && i.id !== action.payload.id);
    
        default: 
            return state;
    }
}
