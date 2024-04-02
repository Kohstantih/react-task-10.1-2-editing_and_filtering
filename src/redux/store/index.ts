import { combineReducers, compose, legacy_createStore } from "redux";

import EntryListReducer from '../reducers/EntryListReducer';
import ActiveEntryReducer from "../reducers/ActiveEntryReducer";
import FilterReducer from "../reducers/FilterReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    return legacy_createStore(
      combineReducers({
        entryList: EntryListReducer,
        activeEntry: ActiveEntryReducer,
        filtrationValue: FilterReducer
      }),
      undefined,
      compose(
        ReactReduxDevTools,
      )
    );
}

export default configureStore;
