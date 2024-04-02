import {
    CHANGE_ENTRY_TEXT,
    CHANGE_ENTRY_PRICE,
    CLEAR_ACTIVE_ENTRY,
    ACTIVATION_ENTRY,
    ADD_ENTRY,
    EDIT_ENTRY,
    REMOVE_ENTRY,
    UPDATE_FILTER_VALUE
} from "./actionTypes";

export function changeActiveText(text: string) {
    return { type: CHANGE_ENTRY_TEXT, payload: { text }}
}

export function changeActivePrice(price: string) {
    return { type: CHANGE_ENTRY_PRICE, payload: { price }}
}

export function clearActive() {
    return { type: CLEAR_ACTIVE_ENTRY }
}

export function activationEntry(id: string, text: string, price: string) {
    return { type: ACTIVATION_ENTRY, payload: { id, text, price }};
}

export function addEntry(text: string, price: string) {
    return { type: ADD_ENTRY, payload: { text, price }};
}

export function removeEntry(id: string) {
    return { type: REMOVE_ENTRY, payload: { id } };
}

export function editEntry(id: string, text: string, price: string) {
    return { type: EDIT_ENTRY, payload: { id, text, price }};
}

export function filtrationListEntries(value: string) {
    return { type: UPDATE_FILTER_VALUE, payload: value };
}
